/**
 * Note Selector - Selects random notes for practice
 */

/**
 * Select a random note from a range, different from the current note
 * @param {Array} notes - Array of all available notes
 * @param {Object} currentNote - The current note object
 * @param {number} minIndex - Minimum note index (inclusive)
 * @param {number} maxIndex - Maximum note index (inclusive)
 * @returns {Object} The selected note
 */
export function selectRandomNote(notes, currentNote, minIndex, maxIndex) {
  // Get notes in the specified range
  const availableNotes = notes.slice(minIndex, maxIndex + 1);

  // If only one note available, return it
  if (availableNotes.length === 1) {
    return availableNotes[0];
  }

  // Select a different note from current
  let newNote;
  let attempts = 0;
  const maxAttempts = 100; // Prevent infinite loop

  do {
    const randomIndex = Math.floor(Math.random() * availableNotes.length);
    newNote = availableNotes[randomIndex];
    attempts++;
  } while (
    newNote.name === currentNote.name &&
    availableNotes.length > 1 &&
    attempts < maxAttempts
  );

  return newNote;
}

/**
 * Select a note within a specific interval from the current note
 * Useful for interval training
 * @param {Array} notes - Array of all available notes
 * @param {Object} currentNote - The current note object
 * @param {number} minInterval - Minimum interval in semitones
 * @param {number} maxInterval - Maximum interval in semitones
 * @returns {Object|null} The selected note or null if none available
 */
export function selectNoteByInterval(notes, currentNote, minInterval, maxInterval) {
  const currentIndex = notes.findIndex(n => n.name === currentNote.name);

  if (currentIndex === -1) {
    return null;
  }

  const possibleNotes = [];

  // Check notes above
  for (let i = minInterval; i <= maxInterval; i++) {
    const targetIndex = currentIndex + i;
    if (targetIndex >= 0 && targetIndex < notes.length) {
      possibleNotes.push(notes[targetIndex]);
    }
  }

  // Check notes below (negative intervals)
  for (let i = minInterval; i <= maxInterval; i++) {
    const targetIndex = currentIndex - i;
    if (targetIndex >= 0 && targetIndex < notes.length && targetIndex !== currentIndex) {
      possibleNotes.push(notes[targetIndex]);
    }
  }

  if (possibleNotes.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * possibleNotes.length);
  return possibleNotes[randomIndex];
}
