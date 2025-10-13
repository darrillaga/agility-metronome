import { useRef, useEffect, useCallback } from 'react';
import { AudioEngine, playClick, playNote } from '../services';
import { AUDIO_INIT_DELAY_MS } from '../constants/audioConfig.js';

/**
 * Custom hook for managing audio engine and playback
 * Handles AudioContext initialization, resumption, and sound generation
 *
 * @param {boolean} soundEnabled - Whether sound is enabled (master toggle)
 * @param {boolean} clickEnabled - Whether click sound is enabled
 * @param {boolean} noteEnabled - Whether note sound is enabled
 * @returns {Object} Audio engine methods and state
 */
export function useAudioEngine(soundEnabled, clickEnabled, noteEnabled) {
  const audioEngineRef = useRef(null);
  const soundEnabledRef = useRef(soundEnabled);
  const clickEnabledRef = useRef(clickEnabled);
  const noteEnabledRef = useRef(noteEnabled);

  // Keep refs in sync
  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
    clickEnabledRef.current = clickEnabled;
    noteEnabledRef.current = noteEnabled;
  }, [soundEnabled, clickEnabled, noteEnabled]);

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
    await new Promise(resolve => setTimeout(resolve, AUDIO_INIT_DELAY_MS));

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
    if (!soundEnabledRef.current || !clickEnabledRef.current || !audioEngineRef.current?.isReady()) {
      return null;
    }

    return playClick(audioEngineRef.current.context, time);
  }, []);

  /**
   * Play a musical note with optional instrument transposition
   */
  const playNoteSound = useCallback((note, duration, time, tempo, instrument = null) => {
    if (!soundEnabledRef.current || !noteEnabledRef.current || !audioEngineRef.current?.isReady()) {
      return null;
    }

    return playNote(
      audioEngineRef.current.context,
      note,
      duration,
      time,
      tempo,
      instrument
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
