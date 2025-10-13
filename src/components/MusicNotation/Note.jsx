import React from 'react';

/**
 * Note Component
 * Renders a musical note with stem and optional flag
 *
 * @param {number} x - X position of the note
 * @param {number} y - Y position of the note
 * @param {Object} duration - Duration object with name and beats
 * @param {number} scale - Scale factor for the note size (default 1.0)
 */
export const Note = ({ x, y, duration, scale = 1.0 }) => {
  const isHollow = duration.name === 'whole' || duration.name === 'half';
  const hasFlag = duration.name === 'eighth';
  const hasStem = duration.name !== 'whole';

  const rx = 8 * scale;
  const ry = 6 * scale;
  const stemOffset = 8 * scale;
  const stemHeight = 35 * scale;
  const strokeWidth = 2 * scale;

  return (
    <>
      {/* Note head */}
      <ellipse
        cx={x}
        cy={y}
        rx={rx}
        ry={ry}
        fill={isHollow ? '#fff' : '#000'}
        stroke="#000"
        strokeWidth={strokeWidth}
        transform={`rotate(-20 ${x} ${y})`}
      />

      {/* Note stem (not for whole notes) */}
      {hasStem && (
        <line
          x1={x + stemOffset}
          y1={y}
          x2={x + stemOffset}
          y2={y - stemHeight}
          stroke="#000"
          strokeWidth={strokeWidth}
        />
      )}

      {/* Flag for eighth note */}
      {hasFlag && (
        <path
          d={`M ${x + stemOffset},${y - stemHeight} Q ${x + 20 * scale},${y - 30 * scale} ${x + 18 * scale},${y - 20 * scale}`}
          fill="#000"
        />
      )}
    </>
  );
};
