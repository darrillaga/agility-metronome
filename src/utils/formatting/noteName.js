/**
 * Format a note name for display
 * Converts sharp symbol to proper unicode character
 *
 * @param {string} noteName - Note name like "C#4"
 * @returns {string} Formatted note name like "C♯4"
 */
export function formatNoteName(noteName) {
  return noteName.replace(/#/g, '♯');
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

/**
 * Format a note name with random sharp or flat symbol
 * @param {string} noteName - Note name like "C#4"
 * @returns {string} Formatted note name - randomly "C♯4" or "D♭4"
 */
export function formatNoteNameMix(noteName) {
  // If it's a natural note (no sharp), just return it
  if (!noteName.includes('#')) {
    return noteName;
  }
  
  // Randomly choose sharp or flat (50/50 chance)
  const useFlat = Math.random() < 0.5;
  return useFlat ? formatNoteNameFlat(noteName) : formatNoteName(noteName);
}

/**
 * Format a note name based on accidental mode
 * @param {string} noteName - Note name like "C#4"
 * @param {string} accidentalMode - 'sharps', 'flats', or 'mix'
 * @returns {string} Formatted note name
 */
export function formatNoteByMode(noteName, accidentalMode) {
  if (accidentalMode === 'flats') {
    return formatNoteNameFlat(noteName);
  } else if (accidentalMode === 'mix') {
    return formatNoteNameMix(noteName);
  } else {
    return formatNoteName(noteName);
  }
}
