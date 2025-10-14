/**
 * PitchDetector - Real-time pitch detection using autocorrelation
 *
 * Uses the YIN algorithm for accurate fundamental frequency detection
 * Reference: http://audition.ens.fr/adc/pdf/2002_JASA_YIN.pdf
 */

const BUFFER_SIZE = 2048;
const SAMPLE_RATE = 44100;
const MIN_FREQUENCY = 65;  // ~C2
const MAX_FREQUENCY = 2093; // ~C7
const CLARITY_THRESHOLD = 0.9; // Minimum clarity for valid detection (0-1)

export class PitchDetector {
  constructor(audioContext, onPitchDetected) {
    this.audioContext = audioContext;
    this.onPitchDetected = onPitchDetected;
    this.analyser = null;
    this.buffer = new Float32Array(BUFFER_SIZE);
    this.isRunning = false;
    this.animationFrameId = null;
  }

  /**
   * Initialize the pitch detector with a media stream
   * @param {MediaStream} stream - Audio stream from microphone
   */
  initialize(stream) {
    try {
      // Create analyser node
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = BUFFER_SIZE * 2;
      this.analyser.smoothingTimeConstant = 0.8;

      // Connect microphone to analyser
      const source = this.audioContext.createMediaStreamSource(stream);
      source.connect(this.analyser);

      console.log('[PitchDetector] Initialized successfully');
      return true;
    } catch (error) {
      console.error('[PitchDetector] Failed to initialize:', error);
      return false;
    }
  }

  /**
   * Start pitch detection loop
   */
  start() {
    if (this.isRunning || !this.analyser) {
      return;
    }

    this.isRunning = true;
    this.detectPitch();
    console.log('[PitchDetector] Started');
  }

  /**
   * Stop pitch detection loop
   */
  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    console.log('[PitchDetector] Stopped');
  }

  /**
   * Main pitch detection loop
   */
  detectPitch() {
    if (!this.isRunning) {
      return;
    }

    // Get time-domain data
    this.analyser.getFloatTimeDomainData(this.buffer);

    // Detect pitch using autocorrelation
    const result = this.autoCorrelate(this.buffer, SAMPLE_RATE);

    // Call callback with result
    if (this.onPitchDetected) {
      this.onPitchDetected(result);
    }

    // Schedule next detection
    this.animationFrameId = requestAnimationFrame(() => this.detectPitch());
  }

  /**
   * Autocorrelation-based pitch detection (YIN algorithm)
   * @param {Float32Array} buffer - Audio buffer
   * @param {number} sampleRate - Sample rate in Hz
   * @returns {Object} Detection result with frequency, note, and clarity
   */
  autoCorrelate(buffer, sampleRate) {
    // Check if buffer has significant signal
    let rms = 0;
    for (let i = 0; i < buffer.length; i++) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / buffer.length);

    // If signal is too weak, return no pitch
    if (rms < 0.01) {
      return { frequency: null, note: null, clarity: 0, rms };
    }

    // Calculate autocorrelation
    const minSamples = Math.floor(sampleRate / MAX_FREQUENCY);
    const maxSamples = Math.floor(sampleRate / MIN_FREQUENCY);
    let bestOffset = -1;
    let bestCorrelation = 0;

    for (let offset = minSamples; offset < maxSamples; offset++) {
      let correlation = 0;
      for (let i = 0; i < buffer.length - offset; i++) {
        correlation += Math.abs(buffer[i] - buffer[i + offset]);
      }
      correlation = 1 - correlation / (buffer.length - offset);

      if (correlation > bestCorrelation) {
        bestCorrelation = correlation;
        bestOffset = offset;
      }
    }

    // Check if we found a valid pitch
    if (bestCorrelation < CLARITY_THRESHOLD || bestOffset === -1) {
      return { frequency: null, note: null, clarity: bestCorrelation, rms };
    }

    // Calculate frequency
    const frequency = sampleRate / bestOffset;

    // Convert frequency to note
    const note = this.frequencyToNote(frequency);

    return {
      frequency,
      note,
      clarity: bestCorrelation,
      rms
    };
  }

  /**
   * Convert frequency to note name and cents offset
   * @param {number} frequency - Frequency in Hz
   * @returns {Object} Note information
   */
  frequencyToNote(frequency) {
    if (!frequency || frequency < MIN_FREQUENCY || frequency > MAX_FREQUENCY) {
      return null;
    }

    // A4 = 440 Hz, calculate semitones from A4
    const semitonesFromA4 = 12 * Math.log2(frequency / 440);
    const semitoneRounded = Math.round(semitonesFromA4);
    const centsOffset = Math.round((semitonesFromA4 - semitoneRounded) * 100);

    // Note names (chromatic scale starting from A)
    const noteNames = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    // Calculate octave and note
    const noteIndex = (semitoneRounded + 1200) % 12; // +1200 to ensure positive
    const octave = Math.floor((semitoneRounded + 9) / 12) + 4; // +9 because A is 9 semitones from C

    return {
      name: noteNames[noteIndex],
      octave,
      fullName: `${noteNames[noteIndex]}${octave}`,
      cents: centsOffset,
      frequency
    };
  }

  /**
   * Cleanup resources
   */
  dispose() {
    this.stop();
    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }
    console.log('[PitchDetector] Disposed');
  }
}
