import React from 'react';
import { Staff } from '../MusicNotation';

/**
 * StaffNotationView Component
 * Displays the current note on a musical staff
 * Optionally shows next note preview
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} nextNote - Next note object for preview
 * @param {Object} duration - Duration object with name and beats
 * @param {boolean} nextNotePreviewEnabled - Whether to show next note preview
 * @param {boolean} useFlats - Whether to display notes with flat notation
 * @param {Object} instrument - Instrument configuration object
 */
export const StaffNotationView = ({ note, nextNote, duration, nextNotePreviewEnabled, useFlats, instrument }) => {
  return (
    <div className="rounded-xl p-8 mb-8 shadow-lg bg-white">
      <Staff note={note} nextNote={nextNote} duration={duration} nextNotePreviewEnabled={nextNotePreviewEnabled} useFlats={useFlats} instrument={instrument} />
    </div>
  );
};
