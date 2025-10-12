/**
 * Beat Tracker - Tracks current beat position and note duration
 */
export class BeatTracker {
  constructor() {
    this.currentBeat = 0;
    this.beatsInCurrentNote = 0;
  }

  /**
   * Reset the beat tracker
   */
  reset() {
    this.currentBeat = 0;
    this.beatsInCurrentNote = 0;
  }

  /**
   * Set the number of beats for the current note
   * @param {number} beats - Number of beats
   */
  setNoteDuration(beats) {
    this.beatsInCurrentNote = beats;
  }

  /**
   * Increment the beat counter
   * @returns {boolean} True if we've reached the end of the current note
   */
  incrementBeat() {
    this.currentBeat++;

    if (this.currentBeat >= this.beatsInCurrentNote) {
      this.currentBeat = 0;
      return true; // Time for a new note
    }

    return false;
  }

  /**
   * Check if we're at the start of a note
   * @returns {boolean}
   */
  isNoteStart() {
    return this.currentBeat === 0;
  }

  /**
   * Get the current beat number
   * @returns {number}
   */
  getCurrentBeat() {
    return this.currentBeat;
  }

  /**
   * Get the total beats in current note
   * @returns {number}
   */
  getBeatsInNote() {
    return this.beatsInCurrentNote;
  }
}
