/**
 * Format a note name for display
 * Converts sharp symbol to proper unicode character
 *
 * @param {string} noteName - Note name like "C#4"
 * @returns {string} Formatted note name like "C♯4"
 */
export function formatNoteName(noteName) {
  return noteName.replace('#', '♯');
}

/**
 * Format a note name with flat symbol instead of sharp
 * @param {string} noteName - Note name like "C#4"
 * @returns {string} Formatted note name like "D♭4"
 */
export function formatNoteNameFlat(noteName) {
  const flatEquivalents = {
    'C#': 'D♭',
    'D#': 'E♭',
    'F#': 'G♭',
    'G#': 'A♭',
    'A#': 'B♭',
  };

  for (const [sharp, flat] of Object.entries(flatEquivalents)) {
    if (noteName.includes(sharp)) {
      return noteName.replace(sharp, flat);
    }
  }

  return noteName;
}
