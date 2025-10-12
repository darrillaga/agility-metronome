import React from 'react';

/**
 * TempoSlider Component
 * Renders a slider for adjusting tempo (BPM)
 *
 * @param {number} tempo - Current tempo in BPM
 * @param {Function} onTempoChange - Callback when tempo changes
 * @param {boolean} disabled - Whether the slider is disabled
 * @param {number} min - Minimum tempo (default: 40)
 * @param {number} max - Maximum tempo (default: 240)
 */
export const TempoSlider = ({
  tempo,
  onTempoChange,
  disabled = false,
  min = 40,
  max = 240,
}) => {
  const percentage = ((tempo - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <label className="flex justify-between text-sm font-medium text-gray-700">
        <span>Tempo</span>
        <span className="text-blue-600 font-bold">{tempo} BPM</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={tempo}
        onChange={(e) => onTempoChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
};
