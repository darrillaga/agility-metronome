import React from 'react';

/**
 * Note Component
 * Renders a musical note with stem and optional flag
 *
 * @param {number} x - X position of the note
 * @param {number} y - Y position of the note
 * @param {Object} duration - Duration object with name and beats
 */
export const Note = ({ x, y, duration }) => {
  const isHollow = duration.name === 'whole' || duration.name === 'half';
  const hasFlag = duration.name === 'eighth';
  const hasStem = duration.name !== 'whole';

  return (
    <>
      {/* Note head */}
      <ellipse
        cx={x}
        cy={y}
        rx="8"
        ry="6"
        fill={isHollow ? '#fff' : '#000'}
        stroke="#000"
        strokeWidth="2"
        transform={`rotate(-20 ${x} ${y})`}
      />

      {/* Note stem (not for whole notes) */}
      {hasStem && (
        <line
          x1={x + 8}
          y1={y}
          x2={x + 8}
          y2={y - 35}
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* Flag for eighth note */}
      {hasFlag && (
        <path
          d={`M ${x + 8},${y - 35} Q ${x + 20},${y - 30} ${x + 18},${y - 20}`}
          fill="#000"
        />
      )}
    </>
  );
};
