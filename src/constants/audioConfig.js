/**
 * Audio Configuration Constants
 * Centralized configuration for Web Audio API parameters
 */

// ===== SCHEDULER CONFIGURATION =====

/**
 * Scheduler interval in milliseconds
 * How often the scheduler checks for events to schedule
 */
export const SCHEDULER_INTERVAL_MS = 25;

/**
 * Schedule ahead time in seconds
 * How far ahead to schedule audio events (look-ahead window)
 */
export const SCHEDULE_AHEAD_TIME = 0.1; // 100ms

/**
 * Initial audio delay in milliseconds
 * Delay before starting scheduler after audio initialization (Android compatibility)
 */
export const AUDIO_INIT_DELAY_MS = 100;

// ===== CLICK SOUND CONFIGURATION =====

/**
 * Default click sound frequency in Hz
 */
export const CLICK_FREQUENCY = 1000;

/**
 * Default click sound volume (0-1)
 */
export const CLICK_VOLUME = 0.15;

/**
 * Default click sound duration in seconds
 */
export const CLICK_DURATION = 0.03;

/**
 * Accented click sound frequency in Hz (for downbeats)
 */
export const ACCENTED_CLICK_FREQUENCY = 1200;

/**
 * Accented click sound volume (0-1)
 */
export const ACCENTED_CLICK_VOLUME = 0.25;

/**
 * Accented click sound duration in seconds
 */
export const ACCENTED_CLICK_DURATION = 0.04;

// ===== NOTE SOUND CONFIGURATION =====

/**
 * Default note sound volume (0-1)
 */
export const NOTE_VOLUME = 0.25;

/**
 * Note duration multiplier
 * Multiply by calculated duration to create slight separation between notes
 */
export const NOTE_DURATION_MULTIPLIER = 0.9; // 90% of full duration

/**
 * Minimum gain value for exponential ramp (Web Audio API requirement)
 */
export const MIN_GAIN_VALUE = 0.01;

// ===== BEAT CALCULATION =====

/**
 * Seconds per minute (for tempo calculations)
 */
export const SECONDS_PER_MINUTE = 60.0;

/**
 * Tolerance for floating-point beat comparison
 * Used to handle triplets and fractional beat positions
 */
export const BEAT_POSITION_TOLERANCE = 0.01;

// ===== NOTE SELECTION =====

/**
 * Maximum attempts to find a different note
 * Prevents infinite loops when selecting random notes
 */
export const MAX_NOTE_SELECTION_ATTEMPTS = 100;
