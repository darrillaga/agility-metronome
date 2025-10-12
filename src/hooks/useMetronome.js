import { useState, useCallback } from 'react';
import { NOTE_RANGE } from '../constants';

/**
 * Custom hook for managing metronome state
 * Handles tempo, note range, play/pause, sound toggle, and display mode
 *
 * @param {Array} notes - Array of available notes
 * @param {Array} durations - Array of available durations
 * @returns {Object} Metronome state and control functions
 */
export function useMetronome(notes, durations) {
  const [tempo, setTempo] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [clickEnabled, setClickEnabled] = useState(true);
  const [noteEnabled, setNoteEnabled] = useState(true);
  const [showStaff, setShowStaff] = useState(false);
  const [currentNote, setCurrentNote] = useState(notes[NOTE_RANGE.DEFAULT_MIN]);
  const [currentDuration, setCurrentDuration] = useState(durations[2]); // quarter note
  const [rangeMin, setRangeMin] = useState(NOTE_RANGE.DEFAULT_MIN);
  const [rangeMax, setRangeMax] = useState(NOTE_RANGE.DEFAULT_MAX);

  /**
   * Update tempo (BPM)
   */
  const updateTempo = useCallback((newTempo) => {
    setTempo(newTempo);
  }, []);

  /**
   * Toggle play/pause state
   */
  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  /**
   * Start playback
   */
  const start = useCallback(() => {
    setIsPlaying(true);
  }, []);

  /**
   * Stop playback
   */
  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  /**
   * Toggle sound on/off
   */
  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);

  /**
   * Toggle metronome click on/off
   */
  const toggleClick = useCallback(() => {
    setClickEnabled(prev => !prev);
  }, []);

  /**
   * Toggle note sound on/off
   */
  const toggleNote = useCallback(() => {
    setNoteEnabled(prev => !prev);
  }, []);

  /**
   * Toggle between large note display and staff notation
   */
  const toggleStaff = useCallback(() => {
    setShowStaff(prev => !prev);
  }, []);

  /**
   * Update note range
   * Ensures min doesn't exceed max
   */
  const updateNoteRange = useCallback((newMin, newMax) => {
    const validMin = Math.max(0, Math.min(newMin, notes.length - 1));
    const validMax = Math.max(0, Math.min(newMax, notes.length - 1));

    if (validMin > validMax) {
      setRangeMin(validMax);
      setRangeMax(validMin);
    } else {
      setRangeMin(validMin);
      setRangeMax(validMax);
    }
  }, [notes.length]);

  /**
   * Update minimum note
   */
  const updateRangeMin = useCallback((newMin) => {
    const validMin = Math.max(0, Math.min(newMin, notes.length - 1));
    setRangeMin(validMin);

    // Adjust max if needed
    if (validMin > rangeMax) {
      setRangeMax(validMin);
    }
  }, [notes.length, rangeMax]);

  /**
   * Update maximum note
   */
  const updateRangeMax = useCallback((newMax) => {
    const validMax = Math.max(0, Math.min(newMax, notes.length - 1));
    setRangeMax(validMax);

    // Adjust min if needed
    if (validMax < rangeMin) {
      setRangeMin(validMax);
    }
  }, [notes.length, rangeMin]);

  /**
   * Update current note
   */
  const updateCurrentNote = useCallback((note) => {
    setCurrentNote(note);
  }, []);

  /**
   * Update current duration
   */
  const updateCurrentDuration = useCallback((duration) => {
    setCurrentDuration(duration);
  }, []);

  return {
    // State
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

    // Actions
    updateTempo,
    togglePlayPause,
    start,
    stop,
    toggleSound,
    toggleClick,
    toggleNote,
    toggleStaff,
    updateNoteRange,
    updateRangeMin,
    updateRangeMax,
    updateCurrentNote,
    updateCurrentDuration,
  };
}
