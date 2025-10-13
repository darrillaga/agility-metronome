import React from 'react';
import { LargeNoteView } from './LargeNoteView';
import { StaffNotationView } from './StaffNotationView';

/**
 * NoteDisplay Component
 * Switches between large note view and staff notation view
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} nextNote - Next note object for preview
 * @param {Object} duration - Duration object with name and beats
 * @param {boolean} showStaff - Whether to show staff notation or large view
 * @param {boolean} nextNotePreviewEnabled - Whether to show next note preview
 */
export const NoteDisplay = ({ note, nextNote, duration, showStaff, nextNotePreviewEnabled }) => {
  return showStaff ? (
    <StaffNotationView note={note} nextNote={nextNote} duration={duration} nextNotePreviewEnabled={nextNotePreviewEnabled} />
  ) : (
    <LargeNoteView note={note} nextNote={nextNote} duration={duration} nextNotePreviewEnabled={nextNotePreviewEnabled} />
  );
};
