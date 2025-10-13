import React from 'react';
import { CLICK_PATTERNS } from '../../constants';

/**
 * ClickPatternSelector Component
 * Selector for metronome click patterns
 *
 * @param {Object} clickPattern - Current click pattern
 * @param {Function} onClickPatternChange - Click pattern change handler
 * @param {boolean} disabled - Whether the selector is disabled
 */
export const ClickPatternSelector = ({ clickPattern, onClickPatternChange, disabled }) => {
  const handleChange = (e) => {
    const selectedPattern = CLICK_PATTERNS.find(p => p.value === e.target.value);
    if (selectedPattern) {
      onClickPatternChange(selectedPattern);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        Click Pattern
      </label>
      <select
        value={clickPattern.value}
        onChange={handleChange}
        disabled={disabled}
        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
      >
        {CLICK_PATTERNS.map((pattern) => (
          <option key={pattern.value} value={pattern.value}>
            {pattern.name}
          </option>
        ))}
      </select>
    </div>
  );
};
