import React from 'react';

/**
 * NoteRangeSelector Component
 * Renders dropdowns for selecting minimum and maximum note range
 *
 * @param {Array} notes - Array of available notes
 * @param {number} rangeMin - Current minimum range index
 * @param {number} rangeMax - Current maximum range index
 * @param {Function} onRangeMinChange - Callback when min changes
 * @param {Function} onRangeMaxChange - Callback when max changes
 * @param {boolean} disabled - Whether the selectors are disabled
 */
export const NoteRangeSelector = ({
  notes,
  rangeMin,
  rangeMax,
  onRangeMinChange,
  onRangeMaxChange,
  disabled = false,
}) => {
  const handleMinChange = (newMin) => {
    onRangeMinChange(newMin);
    // Auto-adjust max if min exceeds it
    if (newMin > rangeMax) {
      onRangeMaxChange(newMin);
    }
  };

  const handleMaxChange = (newMax) => {
    onRangeMaxChange(newMax);
    // Auto-adjust min if max goes below it
    if (newMax < rangeMin) {
      onRangeMinChange(newMax);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 block mb-2">
        Note Range
      </label>
      <div className="grid grid-cols-2 gap-4">
        {/* Minimum Note Selector */}
        <div>
          <label className="text-xs text-gray-600 block mb-1">
            Minimum Note
          </label>
          <select
            value={rangeMin}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            disabled={disabled}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          >
            {notes.map((note, idx) => (
              <option key={idx} value={idx}>
                {note.name}
              </option>
            ))}
          </select>
        </div>

        {/* Maximum Note Selector */}
        <div>
          <label className="text-xs text-gray-600 block mb-1">
            Maximum Note
          </label>
          <select
            value={rangeMax}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            disabled={disabled}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          >
            {notes.map((note, idx) => (
              <option key={idx} value={idx}>
                {note.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
