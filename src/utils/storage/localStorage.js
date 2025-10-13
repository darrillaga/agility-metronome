/**
 * LocalStorage utility with validation and fallback
 * Safely stores and retrieves metronome settings with validation
 */

const STORAGE_KEY = 'agility-metronome-settings';

/**
 * Save settings to localStorage
 * @param {Object} settings - Settings object to save
 */
export function saveSettings(settings) {
  try {
    const serialized = JSON.stringify(settings);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Failed to save settings to localStorage:', error);
  }
}

/**
 * Load settings from localStorage with validation
 * @param {Object} defaultSettings - Default settings to use if validation fails
 * @returns {Object} Validated settings or default settings
 */
export function loadSettings(defaultSettings) {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);

    if (!serialized) {
      return defaultSettings;
    }

    const parsed = JSON.parse(serialized);

    // Validate the loaded settings
    const validated = validateSettings(parsed, defaultSettings);

    return validated;
  } catch (error) {
    console.error('Failed to load settings from localStorage:', error);
    return defaultSettings;
  }
}

/**
 * Clear settings from localStorage
 */
export function clearSettings() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear settings from localStorage:', error);
  }
}

/**
 * Validate loaded settings against default settings
 * Ensures all required fields exist and have valid types/values
 * @param {Object} settings - Settings to validate
 * @param {Object} defaultSettings - Default settings for comparison
 * @returns {Object} Validated settings with fallback to defaults for invalid fields
 */
function validateSettings(settings, defaultSettings) {
  const validated = {};

  // Validate tempo
  if (typeof settings.tempo === 'number' && settings.tempo >= 40 && settings.tempo <= 240) {
    validated.tempo = settings.tempo;
  } else {
    validated.tempo = defaultSettings.tempo;
  }

  // Validate showStaff
  if (typeof settings.showStaff === 'boolean') {
    validated.showStaff = settings.showStaff;
  } else {
    validated.showStaff = defaultSettings.showStaff;
  }

  // Validate clickPattern
  if (settings.clickPattern &&
      typeof settings.clickPattern.value === 'string' &&
      typeof settings.clickPattern.beatsPerClick === 'number') {
    validated.clickPattern = settings.clickPattern;
  } else {
    validated.clickPattern = defaultSettings.clickPattern;
  }

  // Validate instrument
  if (settings.instrument &&
      typeof settings.instrument.id === 'string' &&
      typeof settings.instrument.name === 'string') {
    validated.instrument = settings.instrument;
  } else {
    validated.instrument = defaultSettings.instrument;
  }

  // Validate rangeMin
  if (typeof settings.rangeMin === 'number' && settings.rangeMin >= 0) {
    validated.rangeMin = settings.rangeMin;
  } else {
    validated.rangeMin = defaultSettings.rangeMin;
  }

  // Validate rangeMax
  if (typeof settings.rangeMax === 'number' && settings.rangeMax >= 0) {
    validated.rangeMax = settings.rangeMax;
  } else {
    validated.rangeMax = defaultSettings.rangeMax;
  }

  // Validate nextNotePreviewEnabled
  if (typeof settings.nextNotePreviewEnabled === 'boolean') {
    validated.nextNotePreviewEnabled = settings.nextNotePreviewEnabled;
  } else {
    validated.nextNotePreviewEnabled = defaultSettings.nextNotePreviewEnabled || false;
  }

  return validated;
}
