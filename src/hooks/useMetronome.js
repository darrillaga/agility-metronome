import { useState, useCallback } from 'react';
import { DEFAULT_CLICK_PATTERN } from '../constants';

// Tempo constants
const MIN_TEMPO = 40;
const MAX_TEMPO = 240;

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
  const [clickPattern, setClickPattern] = useState(DEFAULT_CLICK_PATTERN);
  const [currentNote, setCurrentNote] = useState(notes?.[0]);
  const [currentDuration, setCurrentDuration] = useState(durations?.[0]);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState((notes?.length ?? 0) - 1);

  /**
   * Update tempo (BPM)
   * Validates and clamps tempo to valid range
   */
  const updateTempo = useCallback((newTempo) => {
    const numericTempo = typeof newTempo === 'string' ? parseFloat(newTempo) : newTempo;

    // Validate it's a valid number
    if (isNaN(numericTempo)) {
      return; // Keep current tempo if invalid
    }

    // Clamp to valid range
    const clampedTempo = Math.max(MIN_TEMPO, Math.min(MAX_TEMPO, numericTempo));
    setTempo(clampedTempo);
  }, []);

  /**
   * Toggle play/pause state
   * Resets beat counter when stopping
   */
  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => {
      if (prev) {
        // If currently playing, stop and reset beat
        setCurrentBeat(0);
      }
      return !prev;
    });
  }, []);

  /**
   * Start playback
   */
  const start = useCallback(() => {
    setIsPlaying(true);
  }, []);

  /**
   * Stop playback and reset beat counter
   */
  const stop = useCallback(() => {
    setIsPlaying(false);
    setCurrentBeat(0);
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
   * Clamps min to max if it exceeds current max
   */
  const updateRangeMin = useCallback((newMin) => {
    const validMin = Math.max(0, Math.min(newMin, notes.length - 1));

    // Use functional update to get current max value
    setRangeMax(currentMax => {
      const clampedMin = Math.min(validMin, currentMax);
      setRangeMin(clampedMin);
      return currentMax; // Don't change max
    });
  }, [notes.length]);

  /**
   * Update maximum note
   * Clamps max to min if it goes below current min
   */
  const updateRangeMax = useCallback((newMax) => {
    const validMax = Math.max(0, Math.min(newMax, notes.length - 1));

    // Use functional update to get current min value
    setRangeMin(currentMin => {
      const clampedMax = Math.max(validMax, currentMin);
      setRangeMax(clampedMax);
      return currentMin; // Don't change min
    });
  }, [notes.length]);

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

  /**
   * Update current beat
   */
  const updateCurrentBeat = useCallback((beat) => {
    setCurrentBeat(beat);
  }, []);

  /**
   * Update click pattern
   */
  const updateClickPattern = useCallback((pattern) => {
    setClickPattern(pattern);
  }, []);

  // Alias functions for backward compatibility with tests
  const handleNoteChange = updateCurrentNote;
  const handleDurationChange = updateCurrentDuration;
  const handleBeatChange = updateCurrentBeat;

  return {
    // State
    tempo,
    isPlaying,
    soundEnabled,
    clickEnabled,
    noteEnabled,
    showStaff,
    clickPattern,
    currentNote,
    currentDuration,
    currentBeat,
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
    updateClickPattern,
    updateNoteRange,
    updateRangeMin,
    updateRangeMax,
    updateCurrentNote,
    updateCurrentDuration,
    updateCurrentBeat,
    handleNoteChange,
    handleDurationChange,
    handleBeatChange,
  };
}
