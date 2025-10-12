import React from 'react';

/**
 * LedgerLines Component
 * Renders ledger lines for notes outside the staff range
 *
 * @param {Array<number>} positions - Array of Y positions for ledger lines
 */
export const LedgerLines = ({ positions }) => {
  return (
    <>
      {positions.map((y) => (
        <line
          key={`ledger-${y}`}
          x1="185"
          y1={y}
          x2="225"
          y2={y}
          stroke="#000"
          strokeWidth="1.5"
        />
      ))}
    </>
  );
};
