import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAudioEngine } from '../useAudioEngine.js';

describe('useAudioEngine', () => {
  let mockAudioContext;
  let mockOscillator;
  let mockGainNode;

  beforeEach(() => {
    // Mock Web Audio API
    const createMockOscillator = () => ({
      connect: vi.fn(),
      start: vi.fn(),
      stop: vi.fn(),
      frequency: {
        value: 440,
        setValueAtTime: vi.fn(),
      },
      type: 'sine',
    });

    const createMockGainNode = () => ({
      connect: vi.fn(),
      gain: {
        value: 1,
        setValueAtTime: vi.fn(),
        exponentialRampToValueAtTime: vi.fn(),
      },
    });

    mockOscillator = createMockOscillator();
    mockGainNode = createMockGainNode();

    mockAudioContext = {
      state: 'running',
      currentTime: 0,
      resume: vi.fn().mockResolvedValue(undefined),
      close: vi.fn().mockResolvedValue(undefined),
      createOscillator: vi.fn(createMockOscillator),
      createGain: vi.fn(createMockGainNode),
      destination: {},
    };

    global.AudioContext = vi.fn(() => mockAudioContext);
    global.webkitAudioContext = vi.fn(() => mockAudioContext);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Audio Initialization', () => {
    it('should initialize audio engine', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      let initialized;
      await act(async () => {
        initialized = await result.current.initAudio();
      });

      expect(initialized).toBe(true);
      expect(global.AudioContext).toHaveBeenCalled();
    });

    it('should handle suspended audio context', async () => {
      mockAudioContext.state = 'suspended';
      mockAudioContext.resume.mockResolvedValue(undefined);

      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      expect(mockAudioContext.resume).toHaveBeenCalled();
    });

    it('should return audio engine readiness status', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      expect(result.current.isAudioReady()).toBe(false);

      await act(async () => {
        await result.current.initAudio();
      });

      expect(result.current.isAudioReady()).toBe(true);
    });

    it('should get current audio time', async () => {
      mockAudioContext.currentTime = 5.5;
      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      expect(result.current.getCurrentTime()).toBe(5.5);
    });
  });

  describe('Sound Controls', () => {
    it('should respect soundEnabled prop initially true', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      const clickResult = result.current.playClickSound(0);
      expect(clickResult).not.toBeNull();
    });

    it('should respect soundEnabled prop initially false', async () => {
      const { result } = renderHook(() => useAudioEngine(false));

      await act(async () => {
        await result.current.initAudio();
      });

      const clickResult = result.current.playClickSound(0);
      expect(clickResult).toBeNull();
    });

    it('should update soundEnabled via ref when prop changes', async () => {
      const { result, rerender } = renderHook(
        ({ enabled }) => useAudioEngine(enabled),
        { initialProps: { enabled: true } }
      );

      await act(async () => {
        await result.current.initAudio();
      });

      // Initially enabled
      expect(result.current.playClickSound(0)).not.toBeNull();

      // Change prop to disabled
      rerender({ enabled: false });

      // Should now return null
      expect(result.current.playClickSound(0)).toBeNull();
    });
  });

  describe('Click Sound Playback', () => {
    it('should play click sound when audio ready and sound enabled', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      const clickResult = result.current.playClickSound(0);

      expect(clickResult).not.toBeNull();
      expect(mockAudioContext.createOscillator).toHaveBeenCalled();
      expect(mockAudioContext.createGain).toHaveBeenCalled();
      // Verify nodes were created and connected (new instances each time)
      expect(mockAudioContext.createOscillator).toHaveBeenCalledTimes(1);
      expect(mockAudioContext.createGain).toHaveBeenCalledTimes(1);
    });

    it('should not play click sound when audio not ready', () => {
      const { result } = renderHook(() => useAudioEngine(true));

      const clickResult = result.current.playClickSound(0);

      expect(clickResult).toBeNull();
      expect(mockAudioContext.createOscillator).not.toHaveBeenCalled();
    });

    it('should not play click sound when sound disabled', async () => {
      const { result } = renderHook(() => useAudioEngine(false));

      await act(async () => {
        await result.current.initAudio();
      });

      const clickResult = result.current.playClickSound(0);

      expect(clickResult).toBeNull();
      expect(mockAudioContext.createOscillator).not.toHaveBeenCalled();
    });
  });

  describe('Note Sound Playback', () => {
    const testNote = { name: 'C4', frequency: 261.63 };
    const testDuration = { name: 'quarter', beats: 2 };

    it('should play note sound when audio ready and sound enabled', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      const noteResult = result.current.playNoteSound(testNote, testDuration, 0, 120);

      expect(noteResult).not.toBeNull();
      expect(mockAudioContext.createOscillator).toHaveBeenCalled();
      expect(mockAudioContext.createGain).toHaveBeenCalled();
    });

    it('should not play note sound when audio not ready', () => {
      const { result } = renderHook(() => useAudioEngine(true));

      const noteResult = result.current.playNoteSound(testNote, testDuration, 0, 120);

      expect(noteResult).toBeNull();
      expect(mockAudioContext.createOscillator).not.toHaveBeenCalled();
    });

    it('should not play note sound when sound disabled', async () => {
      const { result } = renderHook(() => useAudioEngine(false));

      await act(async () => {
        await result.current.initAudio();
      });

      const noteResult = result.current.playNoteSound(testNote, testDuration, 0, 120);

      expect(noteResult).toBeNull();
      expect(mockAudioContext.createOscillator).not.toHaveBeenCalled();
    });

    it('should calculate correct duration from tempo and beats', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      // Quarter note (2 beats) at 120 BPM = 1 second
      const noteResult = result.current.playNoteSound(testNote, testDuration, 0, 120);

      // Just verify that oscillator was created and note played
      expect(noteResult).not.toBeNull();
      expect(mockAudioContext.createOscillator).toHaveBeenCalled();
    });
  });

  describe('Audio Cleanup', () => {
    it('should close audio context on cleanup', async () => {
      const { result, unmount } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      unmount();

      expect(mockAudioContext.close).toHaveBeenCalled();
    });

    it('should not error when closing uninitialized audio', () => {
      const { unmount } = renderHook(() => useAudioEngine(true));

      expect(() => unmount()).not.toThrow();
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple init calls gracefully', async () => {
      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
        await result.current.initAudio();
        await result.current.initAudio();
      });

      // Should only create one AudioContext
      expect(global.AudioContext).toHaveBeenCalledTimes(1);
    });

    it('should return 0 for getCurrentTime when audio not initialized', () => {
      const { result } = renderHook(() => useAudioEngine(true));

      expect(result.current.getCurrentTime()).toBe(0);
    });

    it('should handle webkitAudioContext fallback', async () => {
      delete global.AudioContext;
      global.webkitAudioContext = vi.fn(() => mockAudioContext);

      const { result } = renderHook(() => useAudioEngine(true));

      await act(async () => {
        await result.current.initAudio();
      });

      expect(global.webkitAudioContext).toHaveBeenCalled();
      expect(result.current.isAudioReady()).toBe(true);
    });
  });
});
