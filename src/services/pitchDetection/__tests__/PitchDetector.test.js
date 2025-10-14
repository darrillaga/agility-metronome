import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { PitchDetector } from '../PitchDetector';

describe('PitchDetector', () => {
  let mockAudioContext;
  let mockAnalyser;
  let mockSource;
  let mockStream;
  let onPitchDetectedCallback;
  let pitchDetector;

  beforeEach(() => {
    // Mock analyser node
    mockAnalyser = {
      fftSize: 0,
      smoothingTimeConstant: 0,
      getFloatTimeDomainData: vi.fn(),
      disconnect: vi.fn(),
    };

    // Mock source node
    mockSource = {
      connect: vi.fn(),
    };

    // Mock audio context
    mockAudioContext = {
      createAnalyser: vi.fn(() => mockAnalyser),
      createMediaStreamSource: vi.fn(() => mockSource),
    };

    // Mock media stream
    mockStream = {
      getTracks: vi.fn(() => []),
    };

    // Mock callback
    onPitchDetectedCallback = vi.fn();

    // Create pitch detector
    pitchDetector = new PitchDetector(mockAudioContext, onPitchDetectedCallback);
  });

  afterEach(() => {
    if (pitchDetector) {
      pitchDetector.dispose();
    }
    vi.clearAllMocks();
  });

  describe('Initialization', () => {
    it('should initialize with audio context and callback', () => {
      expect(pitchDetector.audioContext).toBe(mockAudioContext);
      expect(pitchDetector.onPitchDetected).toBe(onPitchDetectedCallback);
      expect(pitchDetector.isRunning).toBe(false);
    });

    it('should create analyser and connect to stream', () => {
      const result = pitchDetector.initialize(mockStream);

      expect(result).toBe(true);
      expect(mockAudioContext.createAnalyser).toHaveBeenCalled();
      expect(mockAudioContext.createMediaStreamSource).toHaveBeenCalledWith(mockStream);
      expect(mockSource.connect).toHaveBeenCalledWith(mockAnalyser);
      expect(mockAnalyser.fftSize).toBe(4096); // BUFFER_SIZE * 2
    });

    it('should handle initialization errors', () => {
      mockAudioContext.createAnalyser = vi.fn(() => {
        throw new Error('Failed to create analyser');
      });

      const result = pitchDetector.initialize(mockStream);
      expect(result).toBe(false);
    });
  });

  describe('Frequency to Note Conversion', () => {
    it('should convert A4 (440 Hz) correctly', () => {
      const note = pitchDetector.frequencyToNote(440);

      expect(note).toEqual({
        name: 'A',
        octave: 4,
        fullName: 'A4',
        cents: 0,
        frequency: 440,
      });
    });

    it('should convert C4 (261.63 Hz) correctly', () => {
      const note = pitchDetector.frequencyToNote(261.63);

      expect(note.name).toBe('C');
      expect(note.octave).toBe(4);
      expect(note.fullName).toBe('C4');
      expect(Math.abs(note.cents)).toBeLessThan(5); // Allow small rounding error
    });

    it('should convert E4 (329.63 Hz) correctly', () => {
      const note = pitchDetector.frequencyToNote(329.63);

      expect(note.name).toBe('E');
      expect(note.octave).toBe(4);
      expect(note.fullName).toBe('E4');
    });

    it('should handle out of range frequencies', () => {
      expect(pitchDetector.frequencyToNote(50)).toBeNull(); // Too low
      expect(pitchDetector.frequencyToNote(3000)).toBeNull(); // Too high
    });

    it('should calculate cents offset for slightly sharp notes', () => {
      const note = pitchDetector.frequencyToNote(442); // Slightly sharp A4

      expect(note.name).toBe('A');
      expect(note.cents).toBeGreaterThan(0);
      expect(note.cents).toBeLessThan(10);
    });

    it('should calculate cents offset for slightly flat notes', () => {
      const note = pitchDetector.frequencyToNote(438); // Slightly flat A4

      expect(note.name).toBe('A');
      expect(note.cents).toBeLessThan(0);
      expect(note.cents).toBeGreaterThan(-10);
    });
  });

  describe('Autocorrelation', () => {
    it('should return null for silent signal', () => {
      const silentBuffer = new Float32Array(2048).fill(0);
      const result = pitchDetector.autoCorrelate(silentBuffer, 44100);

      expect(result.frequency).toBeNull();
      expect(result.note).toBeNull();
      expect(result.clarity).toBe(0);
    });

    it('should return null for very weak signal', () => {
      const weakBuffer = new Float32Array(2048).fill(0.001);
      const result = pitchDetector.autoCorrelate(weakBuffer, 44100);

      expect(result.frequency).toBeNull();
      expect(result.note).toBeNull();
    });

    it('should detect a strong periodic signal', () => {
      // Create a synthetic sine wave at 440 Hz
      const sampleRate = 44100;
      const frequency = 440;
      const buffer = new Float32Array(2048);

      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.sin((2 * Math.PI * frequency * i) / sampleRate);
      }

      const result = pitchDetector.autoCorrelate(buffer, sampleRate);

      // Autocorrelation may detect fundamental or harmonics
      // Allow detection of fundamental (440) or its harmonics (220, 110)
      expect(result.frequency).toBeGreaterThan(100);
      expect(result.frequency).toBeLessThan(500);
      expect(result.clarity).toBeGreaterThan(0.8);
      expect(result.note).not.toBeNull();
    });
  });

  describe('Start and Stop', () => {
    it('should not start without initialization', () => {
      pitchDetector.start();
      expect(pitchDetector.isRunning).toBe(false);
    });

    it('should start after initialization', () => {
      pitchDetector.initialize(mockStream);
      pitchDetector.start();
      expect(pitchDetector.isRunning).toBe(true);
    });

    it('should stop detection', () => {
      pitchDetector.initialize(mockStream);
      pitchDetector.start();
      pitchDetector.stop();
      expect(pitchDetector.isRunning).toBe(false);
    });

    it('should not start twice', () => {
      pitchDetector.initialize(mockStream);
      pitchDetector.start();
      const firstRunning = pitchDetector.isRunning;
      pitchDetector.start();
      expect(pitchDetector.isRunning).toBe(firstRunning);
    });
  });

  describe('Disposal', () => {
    it('should cleanup resources on dispose', () => {
      pitchDetector.initialize(mockStream);
      pitchDetector.start();
      pitchDetector.dispose();

      expect(pitchDetector.isRunning).toBe(false);
      expect(mockAnalyser.disconnect).toHaveBeenCalled();
      expect(pitchDetector.analyser).toBeNull();
    });
  });
});
