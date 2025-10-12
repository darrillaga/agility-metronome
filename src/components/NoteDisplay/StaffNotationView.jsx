import React from 'react';
import { Staff } from '../MusicNotation';

/**
 * StaffNotationView Component
 * Displays the current note on a musical staff
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} duration - Duration object with name and beats
 */
export const StaffNotationView = ({ note, duration }) => {
  return (
    <div className="rounded-xl p-8 mb-8 shadow-lg bg-white">
      <Staff note={note} duration={duration} />
    </div>
  );
};
