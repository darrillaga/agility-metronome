import React, { useEffect } from 'react';
import { NOTES, DURATIONS } from './constants';
import { useAudioEngine, useMetronome, useNoteScheduler } from './hooks';
import { MetronomeContainer } from './components';

/**
 * Main Application Component
 * B♭ Trumpet Agility Metronome
 *
 * Refactored architecture:
 * - Hooks: useAudioEngine, useMetronome, useNoteScheduler
 * - Services: AudioEngine, Scheduler, BeatTracker, note/duration selectors
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
    showStaff,
    currentNote,
    currentDuration,
    rangeMin,
    rangeMax,
    updateTempo,
    togglePlayPause,
    toggleSound,
    toggleStaff,
    updateRangeMin,
    updateRangeMax,
    updateCurrentNote,
    updateCurrentDuration,
  } = metronome;

  // ===== AUDIO ENGINE =====
  const audio = useAudioEngine(soundEnabled);
  const { initAudio, playClickSound, playNoteSound, getCurrentTime } = audio;

  // ===== NOTE SCHEDULER =====
  const scheduler = useNoteScheduler({
    notes: NOTES,
    durations: DURATIONS,
    onNoteChange: updateCurrentNote,
    onDurationChange: updateCurrentDuration,
    onBeat: () => {}, // Beat callback (currently unused in UI)
  });
  const { startScheduler, stopScheduler } = scheduler;

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
        const currentTime = getCurrentTime();
        startScheduler(
          currentTime,
          tempo,
          currentNote,
          rangeMin,
          rangeMax,
          playClickSound,
          playNoteSound
        );
      }, 100);
    } else {
      // Stop playback
      stopScheduler();
      togglePlayPause();
    }
  };

  // ===== CLEANUP =====
  useEffect(() => {
    return () => {
      if (isPlaying) {
        stopScheduler();
      }
    };
  }, [isPlaying, stopScheduler]);

  // ===== RENDER =====
  return (
    <MetronomeContainer
      state={{
        currentNote,
        currentDuration,
        showStaff,
        isPlaying,
        soundEnabled,
        tempo,
        rangeMin,
        rangeMax,
      }}
      handlers={{
        onTogglePlay: handleTogglePlay,
        onToggleSound: toggleSound,
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
