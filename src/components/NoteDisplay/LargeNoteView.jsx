import React from 'react';

/**
 * LargeNoteView Component
 * Displays the current note in large text format with duration information
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} duration - Duration object with name and beats
 */
export const LargeNoteView = ({ note, duration }) => {
  return (
    <div className="rounded-xl p-8 mb-8 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-center">
        <div className="text-8xl font-bold text-white mb-2">
          {note.name}
        </div>
        <div className="text-2xl text-blue-100 capitalize">
          {duration.name} note ({duration.beats} beats)
        </div>
      </div>
    </div>
  );
};
