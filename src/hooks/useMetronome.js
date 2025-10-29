import { useState, useCallback, useEffect } from 'react';
import { DEFAULT_CLICK_PATTERN, DEFAULT_INSTRUMENT, DEFAULT_ACCIDENTAL_MODE } from '../constants';
import { loadSettings, saveSettings } from '../utils/storage';

// Tempo constants
const MIN_TEMPO = 40;
const MAX_TEMPO = 240;

/**
 * Custom hook for managing metronome state
 * Handles tempo, note range, play/pause, sound toggle, display mode, and instrument selection
 * Persists settings to localStorage with validation
 *
 * @param {Array} notes - Array of available notes
 * @param {Array} durations - Array of available durations
 * @returns {Object} Metronome state and control functions
 */
export function useMetronome(notes, durations) {
  // Load saved settings or use defaults (only once on mount)
  const [tempo, setTempo] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
    };
    const saved = loadSettings(defaultSettings);
    return saved.tempo;
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [clickEnabled, setClickEnabled] = useState(true);
  const [noteEnabled, setNoteEnabled] = useState(true);

  const [showStaff, setShowStaff] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
    };
    const saved = loadSettings(defaultSettings);
    return saved.showStaff;
  });

  const [clickPattern, setClickPattern] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
    };
    const saved = loadSettings(defaultSettings);
    return saved.clickPattern;
  });

  const [instrument, setInstrument] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
    };
    const saved = loadSettings(defaultSettings);
    return saved.instrument;
  });

  const [nextNotePreviewEnabled, setNextNotePreviewEnabled] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
      accidentalMode: DEFAULT_ACCIDENTAL_MODE,
    };
    const saved = loadSettings(defaultSettings);
    return saved.nextNotePreviewEnabled;
  });

  const [accidentalMode, setAccidentalMode] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
      accidentalMode: DEFAULT_ACCIDENTAL_MODE,
    };
    const saved = loadSettings(defaultSettings);
    return saved.accidentalMode;
  });

  // Selected durations - default to all durations enabled
  const [selectedDurations, setSelectedDurations] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
      accidentalMode: DEFAULT_ACCIDENTAL_MODE,
      selectedDurations: durations ? durations.map(d => d.name) : [],
    };
    const saved = loadSettings(defaultSettings);
    return saved.selectedDurations || (durations ? durations.map(d => d.name) : []);
  });

  const [currentNote, setCurrentNote] = useState(notes?.[0]);
  const [nextNote, setNextNote] = useState(null);
  const [currentDuration, setCurrentDuration] = useState(durations?.[0]);
  const [currentBeat, setCurrentBeat] = useState(0);

  const [rangeMin, setRangeMin] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
    };
    const saved = loadSettings(defaultSettings);
    return saved.rangeMin;
  });

  const [rangeMax, setRangeMax] = useState(() => {
    const defaultSettings = {
      tempo: 120,
      showStaff: false,
      clickPattern: DEFAULT_CLICK_PATTERN,
      instrument: DEFAULT_INSTRUMENT,
      rangeMin: DEFAULT_INSTRUMENT.comfortableRange.min,
      rangeMax: DEFAULT_INSTRUMENT.comfortableRange.max,
      nextNotePreviewEnabled: false,
    };
    const saved = loadSettings(defaultSettings);
    return saved.rangeMax;
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    const settingsToSave = {
      tempo,
      showStaff,
      clickPattern,
      instrument,
      rangeMin,
      rangeMax,
      nextNotePreviewEnabled,
      accidentalMode,
      selectedDurations,
    };
    saveSettings(settingsToSave);
  }, [tempo, showStaff, clickPattern, instrument, rangeMin, rangeMax, nextNotePreviewEnabled, accidentalMode, selectedDurations]);

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
   * Update current note and next note
   */
  const updateCurrentNote = useCallback((note) => {
    setCurrentNote(note);
  }, []);

  /**
   * Update next note preview
   */
  const updateNextNote = useCallback((note) => {
    setNextNote(note);
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

  /**
   * Update instrument and adjust note range to comfortable range
   */
  const updateInstrument = useCallback((newInstrument) => {
    setInstrument(newInstrument);
    // Update note range to instrument's comfortable range
    setRangeMin(newInstrument.comfortableRange.min);
    setRangeMax(newInstrument.comfortableRange.max);
  }, []);

  /**
   * Toggle next note preview on/off
   */
  const toggleNextNotePreview = useCallback(() => {
    setNextNotePreviewEnabled(prev => !prev);
  }, []);

  /**
   * Toggle between sharp, flat, and mix notation modes
   * Cycles through: sharps -> flats -> mix -> sharps
   */
  const toggleAccidentalMode = useCallback(() => {
    setAccidentalMode(prev => {
      if (prev === 'sharps') return 'flats';
      if (prev === 'flats') return 'mix';
      return 'sharps';
    });
  }, []);

  /**
   * Toggle a duration in the selected durations array
   * Ensures at least one duration is always selected
   */
  const toggleDuration = useCallback((durationName) => {
    setSelectedDurations(prev => {
      const isSelected = prev.includes(durationName);
      
      // If trying to deselect the last selected duration, don't allow it
      if (isSelected && prev.length === 1) {
        return prev;
      }
      
      // Toggle selection
      if (isSelected) {
        return prev.filter(d => d !== durationName);
      } else {
        return [...prev, durationName];
      }
    });
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
    instrument,
    nextNotePreviewEnabled,
    accidentalMode,
    selectedDurations,
    currentNote,
    nextNote,
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
    updateInstrument,
    toggleNextNotePreview,
    toggleAccidentalMode,
    toggleDuration,
    updateNoteRange,
    updateRangeMin,
    updateRangeMax,
    updateCurrentNote,
    updateNextNote,
    updateCurrentDuration,
    updateCurrentBeat,
    handleNoteChange,
    handleDurationChange,
    handleBeatChange,
  };
}
