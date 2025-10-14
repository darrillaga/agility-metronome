import { STAFF_CONFIG } from '../../constants/staffConfig.js';
/**
 * Calculate the Y position of a note on a musical staff
 * Uses diatonic (white key) spacing for proper music notation
 * Sharp notes are positioned at the same height as their natural counterparts
 *
 * @param {Object} note - Note object with name property
 * @param {string} clef - Clef type ('treble', 'bass', or 'grand')
 * @returns {number} Y coordinate for the note position
 */
export function calculateStaffPosition(note, clef = 'treble') {
  // Extract note letter and octave
  const noteLetter = note.name.replace(/[0-9#]/g, '');
  const octave = parseInt(note.name.match(/\d+/)[0]);

  // Create a mapping for all notes with their absolute positions
  // Each position is one diatonic step (line/space)
  const notePositions = {
    'C': -2,  // C = 2 positions below reference
    'D': -1,  // D = 1 position below reference
    'E': 0,   // E = reference position
    'F': 1,   // F = 1 position above reference
    'G': 2,   // G = 2 positions above reference
    'A': 3,   // A = 3 positions above reference
    'B': 4,   // B = 4 positions above reference
  };

  // Get the base position for this note letter
  const basePosition = notePositions[noteLetter];

  if (clef === 'bass') {
    // Bass clef: G2 is at the bottom staff line (y=90)
    // In our mapping, E=0, G=2
    // So we need to offset by -2 to make G2 our reference point
    const octaveOffset = (octave - 2) * 7;
    const totalPosition = basePosition - 2 + octaveOffset; // Subtract 2 to make G (not E) the reference
    return 90 - (totalPosition * STAFF_CONFIG.lineSpacing);
  } else {
    // Treble clef (and grand staff treble): Position 0 = E4 (bottom staff line at y=90)
    const octaveOffset = (octave - 4) * 7;
    const totalPosition = basePosition + octaveOffset;
    return 90 - (totalPosition * STAFF_CONFIG.lineSpacing);
  }
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
 * @param {string} clef - Clef type ('treble', 'bass', or 'grand')
 * @returns {Array<number>} Array of Y positions for ledger lines
 */
export function calculateLedgerLines(noteY, clef = 'treble') {
  const lines = [];

  // Both treble and bass clefs use the same staff line positions
  // Top staff line: y=30, Bottom staff line: y=90
  // Ledger lines are only drawn at positions that would be staff LINES (not spaces)
  // Staff lines are at: 30, 45, 60, 75, 90 (spacing of 15 between lines)
  // But we use lineSpacing of 7.5 for both lines and spaces
  // So ledger LINES appear at every other step: 97.5 (space), 105 (line), 112.5 (space), 120 (line)

  // Ledger lines below staff (y > 90)
  // Only draw lines at positions where staff lines would be (every 2 * lineSpacing from a staff line)
  if (noteY > 90) {
    // Start at first ledger line position (105 = 90 + 15)
    for (let y = 90 + (2 * STAFF_CONFIG.lineSpacing); y <= noteY + STAFF_CONFIG.lineSpacing; y += (2 * STAFF_CONFIG.lineSpacing)) {
      // Only include this line if the note is at or below this line position
      if (y <= noteY + STAFF_CONFIG.lineSpacing / 2) {
        lines.push(y);
      }
    }
  }

  // Ledger lines above staff (y < 30)
  // Only draw lines at positions where staff lines would be (every 2 * lineSpacing from a staff line)
  if (noteY < 30) {
    // Start at first ledger line position (15 = 30 - 15)
    for (let y = 30 - (2 * STAFF_CONFIG.lineSpacing); y >= noteY - STAFF_CONFIG.lineSpacing; y -= (2 * STAFF_CONFIG.lineSpacing)) {
      // Only include this line if the note is at or above this line position
      if (y >= noteY - STAFF_CONFIG.lineSpacing / 2) {
        lines.push(y);
      }
    }
  }

  return lines;
}
