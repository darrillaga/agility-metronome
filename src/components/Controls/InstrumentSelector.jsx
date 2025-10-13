import React from 'react';
import { INSTRUMENT_LIST } from '../../constants';

/**
 * InstrumentSelector Component
 * Selector for choosing instrument (affects transposition and comfortable range)
 *
 * @param {Object} instrument - Current instrument
 * @param {Function} onInstrumentChange - Instrument change handler
 * @param {boolean} disabled - Whether the selector is disabled
 */
export const InstrumentSelector = ({ instrument, onInstrumentChange, disabled }) => {
  const handleChange = (e) => {
    const selectedInstrument = INSTRUMENT_LIST.find(inst => inst.id === e.target.value);
    if (selectedInstrument) {
      onInstrumentChange(selectedInstrument);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <select
        value={instrument.id}
        onChange={handleChange}
        disabled={disabled}
        className="px-4 py-2 text-base font-medium border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-700"
      >
        {INSTRUMENT_LIST.map((inst) => (
          <option key={inst.id} value={inst.id}>
            {inst.name}
          </option>
        ))}
      </select>
    </div>
  );
};
