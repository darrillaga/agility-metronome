import React from 'react';
import { DURATIONS, DURATION_TEXT_NAMES } from '../../constants';

/**
 * DurationSelector Component
 * Multi-selector for choosing which note durations to include in random selection
 *
 * @param {Array} selectedDurations - Array of selected duration names
 * @param {Function} onToggleDuration - Callback to toggle a duration
 * @param {boolean} disabled - Whether the selector is disabled (during playback)
 */

// Simple text abbreviations for note durations (commonly used in music notation)
const DURATION_LABELS = {
  whole: 'W',
  half: 'H',
  quarter: 'Q',
  eighth: '8th',
  sixteenth: '16th',
};

export const DurationSelector = ({ selectedDurations, onToggleDuration, disabled = false }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Note Durations
      </label>
      <div className="flex flex-wrap gap-2">
        {DURATIONS.map(duration => {
          const isSelected = selectedDurations.includes(duration.name);
          const isLastSelected = isSelected && selectedDurations.length === 1;

          return (
            <button
              key={duration.name}
              onClick={() => onToggleDuration(duration.name)}
              disabled={disabled || isLastSelected}
              className={`
                px-3 py-2 rounded-lg text-sm font-semibold
                transition-all duration-200
                ${isSelected
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
                ${(disabled || isLastSelected)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer hover:scale-105'
                }
              `}
              title={isLastSelected ? 'At least one duration must be selected' : DURATION_TEXT_NAMES[duration.name]}
            >
              {DURATION_LABELS[duration.name]}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-gray-500">
        Select which note durations to include in random selection
      </p>
    </div>
  );
};
