/**
 * Tempo validation and constraint utilities
 */

export const TEMPO_LIMITS = {
  MIN: 40,
  MAX: 240,
  DEFAULT: 120,
};

/**
 * Clamp tempo value within valid range
 * @param {number} tempo - Tempo value to clamp
 * @returns {number} Clamped tempo value
 */
export function clampTempo(tempo) {
  return Math.max(TEMPO_LIMITS.MIN, Math.min(TEMPO_LIMITS.MAX, tempo));
}

/**
 * Validate tempo value
 * @param {number} tempo - Tempo value to validate
 * @returns {Object} Validation result { isValid, value, error }
 */
export function validateTempo(tempo) {
  if (typeof tempo !== 'number' || isNaN(tempo)) {
    return {
      isValid: false,
      value: TEMPO_LIMITS.DEFAULT,
      error: 'Tempo must be a number'
    };
  }

  if (tempo < TEMPO_LIMITS.MIN || tempo > TEMPO_LIMITS.MAX) {
    return {
      isValid: false,
      value: clampTempo(tempo),
      error: `Tempo must be between ${TEMPO_LIMITS.MIN} and ${TEMPO_LIMITS.MAX}`
    };
  }

  return {
    isValid: true,
    value: tempo,
    error: null
  };
}

/**
 * Calculate percentage for tempo slider
 * @param {number} tempo - Current tempo value
 * @returns {number} Percentage (0-100)
 */
export function tempoToPercentage(tempo) {
  const { MIN, MAX } = TEMPO_LIMITS;
  return ((tempo - MIN) / (MAX - MIN)) * 100;
}
