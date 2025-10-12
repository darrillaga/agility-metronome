/**
 * Scheduler - Manages timing and scheduling of metronome events
 * Uses a look-ahead scheduler to ensure precise timing
 */
export class Scheduler {
  constructor() {
    this.intervalId = null;
    this.isRunning = false;
    this.nextNoteTime = 0;
    this.scheduleAheadTime = 0.1; // Schedule notes 100ms ahead
    this.schedulerInterval = 25; // Check every 25ms
  }

  /**
   * Start the scheduler
   * @param {number} currentTime - Current audio context time
   * @param {Function} callback - Function to call for each scheduled event
   */
  start(currentTime, callback) {
    if (this.isRunning) {
      return;
    }

    this.nextNoteTime = currentTime + 0.1; // Start slightly in the future
    this.isRunning = true;

    // Create the scheduling loop
    this.intervalId = setInterval(() => {
      if (callback) {
        callback(this.nextNoteTime, this.scheduleAheadTime);
      }
    }, this.schedulerInterval);
  }

  /**
   * Stop the scheduler
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  /**
   * Update the next note time
   * @param {number} time - The new next note time
   */
  setNextNoteTime(time) {
    this.nextNoteTime = time;
  }

  /**
   * Get the next note time
   * @returns {number} The scheduled time for the next note
   */
  getNextNoteTime() {
    return this.nextNoteTime;
  }

  /**
   * Advance the next note time by a duration
   * @param {number} duration - Duration to advance (in seconds)
   */
  advanceTime(duration) {
    this.nextNoteTime += duration;
  }

  /**
   * Check if the scheduler is currently running
   * @returns {boolean}
   */
  isScheduling() {
    return this.isRunning;
  }
}
