import React from 'react';
import { formatNoteName, formatNoteNameFlat } from '../../utils/formatting/noteName';

/**
 * LargeNoteView Component
 * Displays the current note in large text format with duration information
 * Optionally shows next note preview to the right
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} nextNote - Next note object for preview
 * @param {Object} duration - Duration object with name and beats
 * @param {boolean} nextNotePreviewEnabled - Whether to show next note preview
 * @param {boolean} useFlats - Whether to display notes with flat notation
 */
export const LargeNoteView = ({ note, nextNote, duration, nextNotePreviewEnabled, useFlats }) => {
  const displayNoteName = useFlats ? formatNoteNameFlat(note.name) : formatNoteName(note.name);
  const displayNextNoteName = nextNote ? (useFlats ? formatNoteNameFlat(nextNote.name) : formatNoteName(nextNote.name)) : null;

  return (
    <div className="rounded-xl p-8 mb-8 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex items-center justify-center gap-4">
        {/* Current Note */}
        <div className="text-center flex-shrink-0">
          <div className="text-8xl font-bold text-white mb-2">
            {displayNoteName}
          </div>
          <div className="text-2xl text-blue-100 capitalize">
            {duration.name} note ({duration.beats} beats)
          </div>
        </div>

        {/* Next Note Preview */}
        {nextNotePreviewEnabled && nextNote && (
          <div className="text-center flex-shrink-0 opacity-50">
            <div className="text-5xl font-bold text-white">
              {displayNextNoteName}
            </div>
            <div className="text-sm text-blue-100">
              next
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
