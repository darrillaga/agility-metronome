import React from 'react';
import { TrebleClef } from './TrebleClef';
import { LedgerLines } from './LedgerLines';
import { Sharp } from './Sharp';
import { Note } from './Note';
import { calculateStaffPosition, calculateLedgerLines, parseNoteName } from '../../utils';

/**
 * Staff Component
 * Renders a musical staff with clef (from instrument), note, and accidentals
 * Optionally shows next note preview
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} nextNote - Next note object for preview
 * @param {Object} duration - Duration object with name and beats
 * @param {boolean} nextNotePreviewEnabled - Whether to show next note preview
 * @param {Object} instrument - Instrument configuration object with clef property
 */
export const Staff = ({ note, nextNote, duration, nextNotePreviewEnabled, instrument }) => {
  // Get clef from instrument configuration (defaults to 'treble' for backward compatibility)
  const clef = instrument?.clef || 'treble';
  // Staff line positions for treble clef (top to bottom: F5, D5, B4, G4, E4)
  const staffLines = [30, 45, 60, 75, 90];

  // Parse note components
  const { isSharp } = parseNoteName(note.name);

  // Calculate note position using utility function
  const noteY = calculateStaffPosition(note);

  // Generate ledger lines for notes outside the staff
  const ledgerLinePositions = calculateLedgerLines(noteY);

  // Calculate next note position if preview enabled
  let nextNoteY = null;
  let nextIsSharp = false;
  let nextLedgerLinePositions = [];
  if (nextNotePreviewEnabled && nextNote) {
    const nextParsed = parseNoteName(nextNote.name);
    nextIsSharp = nextParsed.isSharp;
    nextNoteY = calculateStaffPosition(nextNote);
    nextLedgerLinePositions = calculateLedgerLines(nextNoteY);
  }

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

        {/* Clef from instrument configuration */}
        {clef === 'treble' && <TrebleClef />}
        {/* TODO: Add bass clef support when needed (e.g., for piano) */}

        {/* Ledger lines for current note */}
        <LedgerLines positions={ledgerLinePositions} />

        {/* Sharp symbol for current note */}
        {isSharp && <Sharp x={175} y={noteY} />}

        {/* Current Note */}
        <Note x={205} y={noteY} duration={duration} />

        {/* Next note preview */}
        {nextNotePreviewEnabled && nextNote && (
          <g opacity="0.4">
            {/* Ledger lines for next note */}
            {nextLedgerLinePositions.map((y, i) => (
              <line
                key={`next-ledger-${i}`}
                x1="245"
                y1={y}
                x2="285"
                y2={y}
                stroke="#000"
                strokeWidth="1.2"
              />
            ))}

            {/* Sharp symbol for next note */}
            {nextIsSharp && <Sharp x={235} y={nextNoteY} scale={0.7} />}

            {/* Next Note */}
            <Note x={260} y={nextNoteY} duration={duration} scale={0.7} />
          </g>
        )}
      </svg>
    </div>
  );
};
