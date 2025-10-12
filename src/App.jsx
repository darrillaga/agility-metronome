import React, { useRef, useEffect } from 'react';
import { NOTES, DURATIONS } from './constants';
import { useAudioEngine, useMetronome } from './hooks';
import { selectRandomNote, selectRandomDuration } from './services';
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
  const { initAudio, playClickSound, playNoteSound, getAudioContext } = audio;

  // ===== SCHEDULER REFS (Original pattern that works) =====
  const schedulerIdRef = useRef(null);
  const nextNoteTimeRef = useRef(0);
  const currentBeatRef = useRef(0);
  const beatsInCurrentNoteRef = useRef(0);

  // ===== SCHEDULER FUNCTION (Inline for stability) =====
  const scheduler = () => {
    const audioContext = getAudioContext();
    if (!audioContext) return;

    const currentTime = audioContext.currentTime;
    const scheduleAheadTime = 0.1;

    while (nextNoteTimeRef.current < currentTime + scheduleAheadTime) {
      const beatDuration = 60.0 / tempo;

      // Play click on every beat
      playClickSound(nextNoteTimeRef.current);

      // Check if we need to change notes
      if (currentBeatRef.current === 0) {
        const newDuration = selectRandomDuration(DURATIONS);
        const newNote = selectRandomNote(NOTES, currentNote, rangeMin, rangeMax);

        updateCurrentNote(newNote);
        updateCurrentDuration(newDuration);

        beatsInCurrentNoteRef.current = newDuration.beats;
        playNoteSound(newNote, newDuration, nextNoteTimeRef.current, tempo);
      }

      currentBeatRef.current++;

      if (currentBeatRef.current >= beatsInCurrentNoteRef.current) {
        currentBeatRef.current = 0;
      }

      nextNoteTimeRef.current += beatDuration;
    }
  };

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

          // Start scheduler interval
          schedulerIdRef.current = setInterval(scheduler, 25);
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
