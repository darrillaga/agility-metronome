import {
  SCHEDULE_AHEAD_TIME,
  SECONDS_PER_MINUTE,
  BEAT_POSITION_TOLERANCE
} from '../../constants/audioConfig.js';

/**
 * Creates a scheduler function for metronome timing
 *
 * This is a pure function factory that creates a scheduler with all necessary
 * dependencies. The scheduler uses a look-ahead pattern to ensure precise timing
 * with the Web Audio API.
 *
 * Why a pure function and not a React hook?
 * - Timing-critical code needs to avoid React lifecycle interference
 * - The while loop must read fresh audioContext.currentTime on each callback
 * - Pure functions are easier to test and reason about
 * - No risk of stale closures or React re-render issues
 *
 * @param {Object} deps - All dependencies needed for scheduling
 * @param {React.MutableRefObject} deps.nextNoteTimeRef - Ref tracking next scheduled time
 * @param {React.MutableRefObject} deps.currentBeatRef - Ref tracking current beat number
 * @param {React.MutableRefObject} deps.beatsInCurrentNoteRef - Ref tracking beats in current note
 * @param {Function} deps.getAudioContext - Function to get the audio context
 * @param {Function} deps.playClickSound - Function to play click sound
 * @param {Function} deps.playNoteSound - Function to play note sound
 * @param {Function} deps.selectRandomNote - Function to select random note
 * @param {Function} deps.selectRandomDuration - Function to select random duration
 * @param {Function} deps.updateCurrentNote - Callback to update current note state
 * @param {Function} deps.updateNextNote - Callback to update next note state
 * @param {Function} deps.updateCurrentDuration - Callback to update current duration state
 * @param {Array} deps.notes - Array of available notes
 * @param {Array} deps.durations - Array of available durations
 * @returns {Function} Scheduler function that takes (tempo, clickEnabled, noteEnabled, clickPattern, currentNote, rangeMin, rangeMax, instrument)
 */
export function createScheduler(deps) {
  const {
    // Refs (mutable state for timing)
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
    updateNextNote,
    updateCurrentDuration,

    // Configuration
    notes,
    durations,
  } = deps;

  /**
   * Scheduler function - called every 25ms to schedule audio events
   *
   * @param {number} tempo - Current tempo in BPM
   * @param {boolean} clickEnabled - Whether click sound is enabled
   * @param {boolean} noteEnabled - Whether note sound is enabled
   * @param {Object} clickPattern - Click pattern configuration
   * @param {Object} currentNote - Current note being played
   * @param {number} rangeMin - Minimum note index in range
   * @param {number} rangeMax - Maximum note index in range
   * @param {Object} instrument - Instrument configuration for transposition
   */
  return function scheduler(tempo, clickEnabled, noteEnabled, clickPattern, currentNote, rangeMin, rangeMax, instrument) {
    // Get fresh audio context
    const audioContext = getAudioContext();
    if (!audioContext) return;

    // Read fresh currentTime on each callback (critical for avoiding infinite loops)
    const currentTime = audioContext.currentTime;

    // Schedule all events that fall within the look-ahead window
    while (nextNoteTimeRef.current < currentTime + SCHEDULE_AHEAD_TIME) {
      const beatDuration = SECONDS_PER_MINUTE / tempo;

      // Play click based on pattern (if enabled and pattern is set)
      if (clickEnabled && clickPattern && clickPattern.beatsPerClick > 0) {
        // Calculate beat position considering fractional beats (for triplets)
        const beatPosition = currentBeatRef.current;
        const beatsPerClick = clickPattern.beatsPerClick;

        // Check if this beat should have a click
        // For non-fractional patterns, use modulo
        // For fractional patterns (triplets), use threshold comparison
        const shouldClick = beatsPerClick < 1
          ? true // 16th notes - click every beat
          : Math.abs(beatPosition % beatsPerClick) < BEAT_POSITION_TOLERANCE;

        if (shouldClick) {
          playClickSound(nextNoteTimeRef.current);
        }
      }

      // Check if we need to start a new note
      if (currentBeatRef.current === 0) {
        // Select random duration and note
        const newDuration = selectRandomDuration(durations);
        const newNote = selectRandomNote(notes, currentNote, rangeMin, rangeMax);

        // Update React state
        updateCurrentNote(newNote);
        updateCurrentDuration(newDuration);

        // Calculate and update next note for preview
        const previewNote = selectRandomNote(notes, newNote, rangeMin, rangeMax);
        updateNextNote(previewNote);

        // Update beat tracker
        beatsInCurrentNoteRef.current = newDuration.beats;

        // Schedule note sound (if enabled)
        if (noteEnabled) {
          playNoteSound(newNote, newDuration, nextNoteTimeRef.current, tempo, instrument);
        }
      }

      // Increment beat counter
      currentBeatRef.current++;

      // Reset beat counter when we've completed the current note's duration
      if (currentBeatRef.current >= beatsInCurrentNoteRef.current) {
        currentBeatRef.current = 0;
      }

      // Advance time for next beat
      nextNoteTimeRef.current += beatDuration;
    }
  };
}
