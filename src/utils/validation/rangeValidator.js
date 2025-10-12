/**
 * Validate note range selection
 * Ensures min is not greater than max
 *
 * @param {number} min - Minimum note index
 * @param {number} max - Maximum note index
 * @param {number} totalNotes - Total number of notes available
 * @returns {Object} Validation result { isValid, min, max, error }
 */
export function validateNoteRange(min, max, totalNotes = 61) {
  // Ensure values are within bounds
  if (min < 0 || min >= totalNotes) {
    return {
      isValid: false,
      min: 0,
      max,
      error: 'Minimum note is out of range'
    };
  }

  if (max < 0 || max >= totalNotes) {
    return {
      isValid: false,
      min,
      max: totalNotes - 1,
      error: 'Maximum note is out of range'
    };
  }

  // Ensure min <= max
  if (min > max) {
    return {
      isValid: true,
      min: max,
      max: min,
      error: 'Min and max were swapped'
    };
  }

  return {
    isValid: true,
    min,
    max,
    error: null
  };
}

/**
 * Adjust max when min changes to ensure valid range
 * @param {number} newMin - New minimum value
 * @param {number} currentMax - Current maximum value
 * @returns {number} Adjusted maximum value
 */
export function adjustMaxForMin(newMin, currentMax) {
  return newMin > currentMax ? newMin : currentMax;
}

/**
 * Adjust min when max changes to ensure valid range
 * @param {number} newMax - New maximum value
 * @param {number} currentMin - Current minimum value
 * @returns {number} Adjusted minimum value
 */
export function adjustMinForMax(newMax, currentMin) {
  return newMax < currentMin ? newMax : currentMin;
}
