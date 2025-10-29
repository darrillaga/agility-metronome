import { DURATION_TEXT_NAMES } from '../../constants/durations';

/**
 * Format duration information for display
 *
 * @param {Object} duration - Duration object with name and beats properties
 * @returns {string} Formatted duration string like "quarter note (2 beats)"
 */
export function formatDuration(duration) {
  return `${duration.name} note (${duration.beats} beats)`;
}

/**
 * Get a user-friendly duration name
 * @param {string} durationName - Duration name like "quarter"
 * @returns {string} Capitalized name like "Quarter Note"
 */
export function getDurationDisplayName(durationName) {
  return DURATION_TEXT_NAMES[durationName] || durationName;
}
