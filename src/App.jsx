import React, { useRef, useEffect } from 'react';
import { NOTES, DURATIONS, DEFAULT_INSTRUMENT } from './constants';
import { useAudioEngine, useMetronome } from './hooks';
import { selectRandomNote, selectRandomDuration, createScheduler } from './services';
import { MetronomeContainer } from './components';

/**
 * Main Application Component
 * B♭ Trumpet Agility Metronome
 *
 * Refactored architecture:
 * - Hooks: useAudioEngine, useMetronome (scheduler inline for stability)
 * - Services: AudioEngine, note/duration selectors
 * - Utils: Music theory calculations, formatting, validation
 * - Constants: Notes, durations, staff config
 * - Components: Presentational UI components
 */
const App = () => {
  // ===== STATE MANAGEMENT =====
  const metronome = useMetronome(NOTES, DURATIONS);
  const {
    tempo,
    isPlaying,
    soundEnabled,
    clickEnabled,
    noteEnabled,
    showStaff,
    currentNote,
    currentDuration,
    rangeMin,
    rangeMax,
    updateTempo,
    togglePlayPause,
    toggleSound,
    toggleClick,
    toggleNote,
    toggleStaff,
    updateRangeMin,
    updateRangeMax,
    updateCurrentNote,
    updateCurrentDuration,
  } = metronome;

  // ===== AUDIO ENGINE =====
  const audio = useAudioEngine(soundEnabled, clickEnabled, noteEnabled);
  const { initAudio, playClickSound, playNoteSound, getAudioContext } = audio;

  // ===== SCHEDULER REFS =====
  const schedulerIdRef = useRef(null);
  const nextNoteTimeRef = useRef(0);
  const currentBeatRef = useRef(0);
  const beatsInCurrentNoteRef = useRef(0);

  // ===== SCHEDULER FUNCTION (Pure function factory for stability) =====
  // Create scheduler once with all dependencies
  const schedulerRef = useRef(null);

  if (!schedulerRef.current) {
    schedulerRef.current = createScheduler({
      // Refs for timing state
      nextNoteTimeRef,
      currentBeatRef,
      beatsInCurrentNoteRef,

      // Audio functions
      getAudioContext,
      playClickSound,
      playNoteSound,

      // Selection functions
      selectRandomNote,
      selectRandomDuration,

      // State update callbacks
      updateCurrentNote,
      updateCurrentDuration,

      // Configuration
      notes: NOTES,
      durations: DURATIONS,
      instrument: DEFAULT_INSTRUMENT,
    });
  }

  // ===== PLAYBACK CONTROL =====
  const handleTogglePlay = async () => {
    if (!isPlaying) {
      // Initialize audio context
      const initialized = await initAudio();

      if (!initialized) {
        console.error('Failed to initialize audio context');
        return;
      }

      // Start playback
      togglePlayPause();

      // Start scheduler after a delay (Android compatibility)
      setTimeout(() => {
        const audioContext = getAudioContext();
        if (audioContext && audioContext.state === 'running') {
          // Initialize timing
          nextNoteTimeRef.current = audioContext.currentTime + 0.1;
          currentBeatRef.current = 0;
          beatsInCurrentNoteRef.current = 0;

          // Start scheduler interval - pass current values on each call
          schedulerIdRef.current = setInterval(() => {
            schedulerRef.current(tempo, clickEnabled, noteEnabled, currentNote, rangeMin, rangeMax);
          }, 25);
        }
      }, 100);
    } else {
      // Stop scheduler
      if (schedulerIdRef.current) {
        clearInterval(schedulerIdRef.current);
        schedulerIdRef.current = null;
      }
      togglePlayPause();
    }
  };

  // ===== CLEANUP =====
  useEffect(() => {
    return () => {
      if (schedulerIdRef.current) {
        clearInterval(schedulerIdRef.current);
      }
    };
  }, []);

  // ===== RENDER =====
  return (
    <MetronomeContainer
      state={{
        currentNote,
        currentDuration,
        showStaff,
        isPlaying,
        soundEnabled,
        clickEnabled,
        noteEnabled,
        tempo,
        rangeMin,
        rangeMax,
      }}
      handlers={{
        onTogglePlay: handleTogglePlay,
        onToggleSound: toggleSound,
        onToggleClick: toggleClick,
        onToggleNote: toggleNote,
        onToggleStaff: toggleStaff,
        onTempoChange: updateTempo,
        onRangeMinChange: updateRangeMin,
        onRangeMaxChange: updateRangeMax,
      }}
      notes={NOTES}
    />
  );
};

export default App;
