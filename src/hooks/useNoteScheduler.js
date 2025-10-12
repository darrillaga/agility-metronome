import { useRef, useCallback } from 'react';
import { Scheduler, BeatTracker, selectRandomNote, selectRandomDuration } from '../services';

/**
 * Custom hook for scheduling and managing metronome notes
 * Handles timing, beat tracking, and note selection
 *
 * @param {Object} params - Configuration parameters
 * @param {Array} params.notes - Available notes
 * @param {Array} params.durations - Available durations
 * @param {Function} params.onNoteChange - Callback when note changes
 * @param {Function} params.onDurationChange - Callback when duration changes
 * @param {Function} params.onBeat - Callback on each beat
 * @returns {Object} Scheduler control functions
 */
export function useNoteScheduler({ notes, durations, onNoteChange, onDurationChange, onBeat }) {
  const schedulerRef = useRef(null);
  const beatTrackerRef = useRef(null);
  const audioContextRef = useRef(null);
  const currentNoteRef = useRef(null);

  // Initialize scheduler and beat tracker
  if (!schedulerRef.current) {
    schedulerRef.current = new Scheduler();
  }
  if (!beatTrackerRef.current) {
    beatTrackerRef.current = new BeatTracker();
  }

  /**
   * Start the scheduler
   * @param {AudioContext} audioContext - The audio context
   * @param {number} tempo - Tempo in BPM
   * @param {Object} currentNote - Current note being played
   * @param {number} rangeMin - Minimum note index
   * @param {number} rangeMax - Maximum note index
   * @param {Function} playClick - Function to play click sound
   * @param {Function} playNote - Function to play note sound
   */
  const startScheduler = useCallback((
    audioContext,
    tempo,
    currentNote,
    rangeMin,
    rangeMax,
    playClick,
    playNote
  ) => {
    const scheduler = schedulerRef.current;
    const beatTracker = beatTrackerRef.current;

    // Store references
    audioContextRef.current = audioContext;
    currentNoteRef.current = currentNote;

    // Reset beat tracker
    beatTracker.reset();

    // Initialize next note time
    scheduler.setNextNoteTime(audioContext.currentTime + 0.1);

    // Start scheduler with callback
    scheduler.start(audioContext.currentTime, () => {
      if (!audioContextRef.current) return;

      const currentTime = audioContextRef.current.currentTime;
      const scheduleAheadTime = 0.1;
      const beatDuration = 60.0 / tempo;

      // Schedule notes that fall within the look-ahead window
      while (scheduler.getNextNoteTime() < currentTime + scheduleAheadTime) {
        const scheduledTime = scheduler.getNextNoteTime();

        // Play click on every beat
        if (playClick) {
          playClick(scheduledTime);
        }

        // Trigger beat callback
        if (onBeat) {
          onBeat(beatTracker.getCurrentBeat());
        }

        // Check if we need to change notes
        if (beatTracker.isNoteStart()) {
          const newDuration = selectRandomDuration(durations);
          const newNote = selectRandomNote(notes, currentNoteRef.current, rangeMin, rangeMax);

          // Update state via callbacks
          if (onNoteChange) {
            onNoteChange(newNote);
          }
          if (onDurationChange) {
            onDurationChange(newDuration);
          }

          // Set beat tracker duration
          beatTracker.setNoteDuration(newDuration.beats);

          // Play the note
          if (playNote) {
            playNote(newNote, newDuration, scheduledTime, tempo);
          }

          // Update current note reference for next iteration
          currentNoteRef.current = newNote;
        }

        // Increment beat
        beatTracker.incrementBeat();

        // Advance time
        scheduler.advanceTime(beatDuration);
      }
    });
  }, [notes, durations, onNoteChange, onDurationChange, onBeat]);

  /**
   * Stop the scheduler
   */
  const stopScheduler = useCallback(() => {
    if (schedulerRef.current) {
      schedulerRef.current.stop();
    }
    if (beatTrackerRef.current) {
      beatTrackerRef.current.reset();
    }
    audioContextRef.current = null;
    currentNoteRef.current = null;
  }, []);

  /**
   * Check if scheduler is running
   */
  const isScheduling = useCallback(() => {
    return schedulerRef.current?.isScheduling() || false;
  }, []);

  /**
   * Get current beat number
   */
  const getCurrentBeat = useCallback(() => {
    return beatTrackerRef.current?.getCurrentBeat() || 0;
  }, []);

  return {
    startScheduler,
    stopScheduler,
    isScheduling,
    getCurrentBeat,
  };
}
