import React from 'react';
import { LargeNoteView } from './LargeNoteView';
import { StaffNotationView } from './StaffNotationView';

/**
 * NoteDisplay Component
 * Switches between large note view and staff notation view
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} duration - Duration object with name and beats
 * @param {boolean} showStaff - Whether to show staff notation or large view
 */
export const NoteDisplay = ({ note, duration, showStaff }) => {
  return showStaff ? (
    <StaffNotationView note={note} duration={duration} />
  ) : (
    <LargeNoteView note={note} duration={duration} />
  );
};
