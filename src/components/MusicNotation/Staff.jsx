import React from 'react';
import { TrebleClef } from './TrebleClef';
import { BassClef } from './BassClef';
import { LedgerLines } from './LedgerLines';
import { Sharp } from './Sharp';
import { Flat } from './Flat';
import { Note } from './Note';
import { calculateStaffPosition, calculateLedgerLines, parseNoteName } from '../../utils';
import { NOTES } from '../../constants/notes';

/**
 * Staff Component
 * Renders a musical staff with clef (from instrument), note, and accidentals
 * Supports single staff (treble/bass) or grand staff (piano)
 * Optionally shows next note preview
 *
 * @param {Object} note - Note object with name and frequency
 * @param {Object} nextNote - Next note object for preview
 * @param {Object} duration - Duration object with name and beats
 * @param {boolean} nextNotePreviewEnabled - Whether to show next note preview
 * @param {boolean} useFlats - Whether to display flats instead of sharps
 * @param {Object} instrument - Instrument configuration object with clef property
 */
export const Staff = ({ note, nextNote, duration, nextNotePreviewEnabled, useFlats, instrument }) => {
  // Get clef from instrument configuration (defaults to 'treble' for backward compatibility)
  const clef = instrument?.clef || 'treble';

  // Determine which clef to use for the current note
  // For grand staff (piano), notes >= C4 use treble, < C4 use bass
  const getNoteClef = (noteObj) => {
    if (clef !== 'grand') return clef;

    // Find note index in NOTES array
    const noteIndex = NOTES.findIndex(n => n.name === noteObj.name);
    // Use staffSplit from instrument configuration (C4 is at index 39)
    const staffSplit = instrument?.staffSplit || 39;
    return noteIndex >= staffSplit ? 'treble' : 'bass';
  };

  const currentClef = getNoteClef(note);
  const nextClef = nextNote ? getNoteClef(nextNote) : currentClef;

  // Staff line positions (top to bottom)
  const staffLines = [30, 45, 60, 75, 90];
  const middleLineY = 60; // Third line of the staff

  // Parse note components
  const { isSharp } = parseNoteName(note.name);

  // Calculate note position using utility function
  const noteY = calculateStaffPosition(note, currentClef);

  // Calculate stem direction based on note position
  // Notes on or above middle line (y <= 60): stem down
  // Notes below middle line (y > 60): stem up
  const stemDirection = noteY <= middleLineY ? 'down' : 'up';

  // Generate ledger lines for notes outside the staff
  const ledgerLinePositions = calculateLedgerLines(noteY, currentClef);

  // Calculate next note position if preview enabled
  let nextNoteY = null;
  let nextIsSharp = false;
  let nextLedgerLinePositions = [];
  let nextStemDirection = 'up';
  if (nextNotePreviewEnabled && nextNote) {
    const nextParsed = parseNoteName(nextNote.name);
    nextIsSharp = nextParsed.isSharp;
    nextNoteY = calculateStaffPosition(nextNote, nextClef);
    nextLedgerLinePositions = calculateLedgerLines(nextNoteY, nextClef);
    nextStemDirection = nextNoteY <= middleLineY ? 'down' : 'up';
  }

  // Render single staff (treble or bass)
  if (clef !== 'grand') {
    return (
      <div className="relative h-64 flex items-center justify-center">
        <svg viewBox="0 0 400 140" className="w-full h-full">
          {/* Staff lines */}
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
          {clef === 'bass' && <BassClef />}

          {/* Ledger lines for current note */}
          <LedgerLines positions={ledgerLinePositions} />

          {/* Accidental symbol for current note */}
          {isSharp && !useFlats && <Sharp x={175} y={noteY} />}
          {isSharp && useFlats && <Flat x={175} y={noteY} />}

          {/* Current Note */}
          <Note x={205} y={noteY} duration={duration} stemDirection={stemDirection} />

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

              {/* Accidental symbol for next note */}
              {nextIsSharp && !useFlats && <Sharp x={235} y={nextNoteY} scale={0.7} />}
              {nextIsSharp && useFlats && <Flat x={235} y={nextNoteY} scale={0.7} />}

              {/* Next Note */}
              <Note x={260} y={nextNoteY} duration={duration} scale={0.7} stemDirection={nextStemDirection} />
            </g>
          )}
        </svg>
      </div>
    );
  }

  // Render grand staff (piano) - both treble and bass staves
  return (
    <div className="relative h-96 flex items-center justify-center">
      <svg viewBox="0 0 400 260" className="w-full h-full">
        {/* Treble staff lines */}
        <g>
          {staffLines.map((y, i) => (
            <line
              key={`treble-${i}`}
              x1="50"
              y1={y}
              x2="350"
              y2={y}
              stroke="#000"
              strokeWidth="1.5"
            />
          ))}
          <TrebleClef />
        </g>

        {/* Bass staff lines (offset by grandStaffSpacing) */}
        <g transform="translate(0, 160)">
          {staffLines.map((y, i) => (
            <line
              key={`bass-${i}`}
              x1="50"
              y1={y}
              x2="350"
              y2={y}
              stroke="#000"
              strokeWidth="1.5"
            />
          ))}
          <BassClef />
        </g>

        {/* Current note on appropriate staff */}
        <g transform={currentClef === 'bass' ? 'translate(0, 160)' : ''}>
          {/* Ledger lines for current note */}
          <LedgerLines positions={ledgerLinePositions} />

          {/* Accidental symbol for current note */}
          {isSharp && !useFlats && <Sharp x={175} y={noteY} />}
          {isSharp && useFlats && <Flat x={175} y={noteY} />}

          {/* Current Note */}
          <Note x={205} y={noteY} duration={duration} stemDirection={stemDirection} />
        </g>

        {/* Next note preview on appropriate staff */}
        {nextNotePreviewEnabled && nextNote && (
          <g
            opacity="0.4"
            transform={nextClef === 'bass' ? 'translate(0, 160)' : ''}
          >
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

            {/* Accidental symbol for next note */}
            {nextIsSharp && !useFlats && <Sharp x={235} y={nextNoteY} scale={0.7} />}
            {nextIsSharp && useFlats && <Flat x={235} y={nextNoteY} scale={0.7} />}

            {/* Next Note */}
            <Note x={260} y={nextNoteY} duration={duration} scale={0.7} stemDirection={nextStemDirection} />
          </g>
        )}
      </svg>
    </div>
  );
};
