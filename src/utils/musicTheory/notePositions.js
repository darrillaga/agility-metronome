import { STAFF_CONFIG } from '../../constants/staffConfig.js';
/**
 * Calculate the Y position of a note on a musical staff
 * Uses diatonic (white key) spacing for proper music notation
 * Sharp notes are positioned at the same height as their natural counterparts
 *
 * @param {Object} note - Note object with name property
 * @returns {number} Y coordinate for the note position
 */
export function calculateStaffPosition(note) {
  // Extract note letter and octave
  const noteLetter = note.name.replace(/[0-9#]/g, '');
  const octave = parseInt(note.name.match(/\d+/)[0]);

  // Create a mapping for all notes with their absolute positions
  // Position 0 = E4 (bottom staff line at y=90)
  // Each position is one diatonic step (line/space)
  const notePositions = {
    'C': -2,  // C = 2 positions below E
    'D': -1,  // D = 1 position below E
    'E': 0,   // E = reference position
    'F': 1,   // F = 1 position above E
    'G': 2,   // G = 2 positions above E
    'A': 3,   // A = 3 positions above E
    'B': 4,   // B = 4 positions above E
  };

  // Get the base position for this note letter
  const basePosition = notePositions[noteLetter];

  // Calculate octave offset (7 diatonic steps per octave)
  const octaveOffset = (octave - 4) * 7;

  // Total position relative to E4
  const totalPosition = basePosition + octaveOffset;

  // Convert position to Y coordinate (STAFF_CONFIG.lineSpacing pixels per position, going up)
  return 90 - (totalPosition * STAFF_CONFIG.lineSpacing);
}

/**
 * Parse a note name to extract components
 * @param {string} noteName - Note name like "C#4" or "B5"
 * @returns {Object} Parsed note components: { letter, isSharp, octave }
 */
export function parseNoteName(noteName) {
  const noteLetter = noteName.replace(/[0-9#]/g, '');
  const isSharp = noteName.includes('#');
  const octave = parseInt(noteName.match(/\d+/)[0]);

  return { letter: noteLetter, isSharp, octave };
}

/**
 * Determine if a note requires ledger lines and calculate their positions
 * @param {number} noteY - Y coordinate of the note
 * @returns {Array<number>} Array of Y positions for ledger lines
 */
export function calculateLedgerLines(noteY) {
  const lines = [];

  // Ledger lines below staff (C4 and below, y > 90)
  // Only include lines between the staff and the note, not at the note position
  if (noteY > 90) {
    for (let y = 90 + STAFF_CONFIG.lineSpacing; y < noteY; y += STAFF_CONFIG.lineSpacing) {
      lines.push(y);
    }
  }

  // Ledger lines above staff (A5 and above, y < 30)
  // Only include lines between the staff and the note, not at the note position
  if (noteY < 30) {
    for (let y = 30 - STAFF_CONFIG.lineSpacing; y > noteY; y -= STAFF_CONFIG.lineSpacing) {
      lines.push(y);
    }
  }

  return lines;
}
