import { useRef, useEffect, useCallback } from 'react';
import { AudioEngine, playClick, playNote } from '../services';

/**
 * Custom hook for managing audio engine and playback
 * Handles AudioContext initialization, resumption, and sound generation
 *
 * @param {boolean} soundEnabled - Whether sound is enabled
 * @returns {Object} Audio engine methods and state
 */
export function useAudioEngine(soundEnabled) {
  const audioEngineRef = useRef(null);
  const soundEnabledRef = useRef(soundEnabled);

  // Keep soundEnabled ref in sync
  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  // Initialize audio engine on mount
  useEffect(() => {
    if (!audioEngineRef.current) {
      audioEngineRef.current = new AudioEngine();
    }

    // Cleanup on unmount
    return () => {
      if (audioEngineRef.current) {
        audioEngineRef.current.close();
        audioEngineRef.current = null;
      }
    };
  }, []);

  /**
   * Initialize and resume audio context
   * Required before playing any sounds (especially on mobile)
   */
  const initAudio = useCallback(async () => {
    if (!audioEngineRef.current) {
      audioEngineRef.current = new AudioEngine();
    }

    const initialized = await audioEngineRef.current.initialize();

    // Add extra delay for Android/iOS
    await new Promise(resolve => setTimeout(resolve, 100));

    // Resume again just before use (Android workaround)
    if (audioEngineRef.current) {
      await audioEngineRef.current.resume();
    }

    return initialized;
  }, []);

  /**
   * Play a click sound
   */
  const playClickSound = useCallback((time) => {
    if (!soundEnabledRef.current || !audioEngineRef.current?.isReady()) {
      return null;
    }

    return playClick(audioEngineRef.current.context, time);
  }, []);

  /**
   * Play a musical note
   */
  const playNoteSound = useCallback((note, duration, time, tempo) => {
    if (!soundEnabledRef.current || !audioEngineRef.current?.isReady()) {
      return null;
    }

    return playNote(
      audioEngineRef.current.context,
      note,
      duration,
      time,
      tempo
    );
  }, []);

  /**
   * Get current audio time
   */
  const getCurrentTime = useCallback(() => {
    return audioEngineRef.current?.getCurrentTime() || 0;
  }, []);

  /**
   * Check if audio is ready
   */
  const isAudioReady = useCallback(() => {
    return audioEngineRef.current?.isReady() || false;
  }, []);

  /**
   * Get the audio context
   */
  const getAudioContext = useCallback(() => {
    return audioEngineRef.current?.context || null;
  }, []);

  return {
    initAudio,
    playClickSound,
    playNoteSound,
    getCurrentTime,
    isAudioReady,
    getAudioContext,
  };
}
