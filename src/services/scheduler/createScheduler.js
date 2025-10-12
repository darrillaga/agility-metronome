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
 * @param {Function} deps.updateCurrentDuration - Callback to update current duration state
 * @param {Array} deps.notes - Array of available notes
 * @param {Array} deps.durations - Array of available durations
 * @returns {Function} Scheduler function that takes (tempo, clickEnabled, currentNote, rangeMin, rangeMax)
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
   * @param {Object} currentNote - Current note being played
   * @param {number} rangeMin - Minimum note index in range
   * @param {number} rangeMax - Maximum note index in range
   */
  return function scheduler(tempo, clickEnabled, currentNote, rangeMin, rangeMax) {
    // Get fresh audio context
    const audioContext = getAudioContext();
    if (!audioContext) return;

    // Read fresh currentTime on each callback (critical for avoiding infinite loops)
    const currentTime = audioContext.currentTime;
    const scheduleAheadTime = 0.1; // Schedule 100ms ahead

    // Schedule all events that fall within the look-ahead window
    while (nextNoteTimeRef.current < currentTime + scheduleAheadTime) {
      const beatDuration = 60.0 / tempo;

      // Play click on every beat (if enabled)
      if (clickEnabled) {
        playClickSound(nextNoteTimeRef.current);
      }

      // Check if we need to start a new note
      if (currentBeatRef.current === 0) {
        // Select random duration and note
        const newDuration = selectRandomDuration(durations);
        const newNote = selectRandomNote(notes, currentNote, rangeMin, rangeMax);

        // Update React state
        updateCurrentNote(newNote);
        updateCurrentDuration(newDuration);

        // Update beat tracker
        beatsInCurrentNoteRef.current = newDuration.beats;

        // Schedule note sound
        playNoteSound(newNote, newDuration, nextNoteTimeRef.current, tempo);
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
