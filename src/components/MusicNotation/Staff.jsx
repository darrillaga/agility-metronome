import React from 'react';
import { TrebleClef } from './TrebleClef';
import { LedgerLines } from './LedgerLines';
import { Sharp } from './Sharp';
import { Note } from './Note';
import { calculateStaffPosition, calculateLedgerLines, parseNoteName } from '../../utils';

/**
 * Staff Component
 * Renders a musical staff with treble clef, note, and accidentals
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} duration - Duration object with name and beats
 */
export const Staff = ({ note, duration }) => {
  // Staff line positions for treble clef (top to bottom: F5, D5, B4, G4, E4)
  const staffLines = [30, 45, 60, 75, 90];

  // Parse note components
  const { isSharp } = parseNoteName(note.name);

  // Calculate note position using utility function
  const noteY = calculateStaffPosition(note);

  // Generate ledger lines for notes outside the staff
  const ledgerLinePositions = calculateLedgerLines(noteY);

  return (
    <div className="relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 140" className="w-full h-full">
        {/* Staff lines (E4, G4, B4, D5, F5) */}
        {staffLines.map((y, i) => (
          <line
            key={i}
            x1="50"
            y1={y}
            x2="350"
            y2={y}
            stroke="#000"
            strokeWidth="1.5"
          />
        ))}

        {/* Treble clef */}
        <TrebleClef />

        {/* Ledger lines */}
        <LedgerLines positions={ledgerLinePositions} />

        {/* Sharp symbol */}
        {isSharp && <Sharp x={175} y={noteY} />}

        {/* Note */}
        <Note x={205} y={noteY} duration={duration} />
      </svg>
    </div>
  );
};
