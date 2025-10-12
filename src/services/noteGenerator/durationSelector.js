/**
 * Duration Selector - Selects random note durations
 */

/**
 * Select a random duration from available durations
 * @param {Array} durations - Array of duration objects
 * @returns {Object} The selected duration
 */
export function selectRandomDuration(durations) {
  const randomIndex = Math.floor(Math.random() * durations.length);
  return durations[randomIndex];
}

/**
 * Select a random duration with weighted probability
 * Longer durations can be weighted differently
 * @param {Array} durations - Array of duration objects
 * @param {Object} weights - Weight object { whole: 1, half: 2, quarter: 4, eighth: 2 }
 * @returns {Object} The selected duration
 */
export function selectWeightedDuration(durations, weights = {}) {
  // Use provided weights, or default to 1 for each duration
  const effectiveWeights = {};

  // Create weighted array
  const weightedDurations = [];
  durations.forEach(duration => {
    // Use custom weight if provided, otherwise default to 1
    const weight = weights.hasOwnProperty(duration.name) ? weights[duration.name] : 1;
    // Only add if weight > 0
    if (weight > 0) {
      for (let i = 0; i < weight; i++) {
        weightedDurations.push(duration);
      }
    }
  });

  // Handle empty weighted array (all weights were 0)
  if (weightedDurations.length === 0) {
    return durations[0]; // Fallback to first duration
  }

  // Select randomly from weighted array
  const randomIndex = Math.floor(Math.random() * weightedDurations.length);
  return weightedDurations[randomIndex];
}

/**
 * Select durations in a pattern
 * Useful for rhythmic exercises
 * @param {Array} durations - Array of duration objects
 * @param {Array} pattern - Pattern of duration names ['quarter', 'eighth', 'quarter']
 * @param {number} currentIndex - Current position in pattern
 * @returns {Object} The duration for current position
 */
export function selectPatternDuration(durations, pattern, currentIndex) {
  const patternIndex = currentIndex % pattern.length;
  const durationName = pattern[patternIndex];

  const duration = durations.find(d => d.name === durationName);
  return duration || durations[0]; // Fallback to first duration
}
