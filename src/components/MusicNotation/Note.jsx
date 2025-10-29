import React from 'react';

/**
 * Note Component
 * Renders a musical note with stem and optional flags
 *
 * @param {number} x - X position of the note
 * @param {number} y - Y position of the note
 * @param {Object} duration - Duration object with name and beats
 * @param {number} scale - Scale factor for the note size (default 1.0)
 * @param {string} stemDirection - Direction of the stem ('up' or 'down', default 'up')
 */
export const Note = ({ x, y, duration, scale = 1.0, stemDirection = 'up' }) => {
  const isHollow = duration.name === 'whole' || duration.name === 'half';
  const hasFlag = duration.name === 'eighth' || duration.name === 'sixteenth';
  const hasDoubleFlag = duration.name === 'sixteenth';
  const hasStem = duration.name !== 'whole';

  const rx = 8 * scale;
  const ry = 6 * scale;
  const stemHeight = 35 * scale;
  const strokeWidth = 2 * scale;
  
  // Flag positioning constants
  const flagCurveX = 20 * scale;
  const flagCurveY1 = 30 * scale;
  const flagEndX = 18 * scale;
  const flagEndY1 = 20 * scale;
  const secondFlagOffset = 7 * scale;
  const secondFlagCurveY = 23 * scale;
  const secondFlagEndY = 13 * scale;

  // Stem positioning depends on direction
  // Up: stem on right side of note head, extends upward
  // Down: stem on left side of note head, extends downward
  const stemOffset = stemDirection === 'up' ? 8 * scale : -8 * scale;
  const stemEndY = stemDirection === 'up' ? y - stemHeight : y + stemHeight;

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
          y2={stemEndY}
          stroke="#000"
          strokeWidth={strokeWidth}
        />
      )}

      {/* Flag for eighth note */}
      {hasFlag && (
        <path
          d={
            stemDirection === 'up'
              ? `M ${x + stemOffset},${stemEndY} Q ${x + flagCurveX},${y - flagCurveY1} ${x + flagEndX},${y - flagEndY1}`
              : `M ${x + stemOffset},${stemEndY} Q ${x - flagCurveX},${y + flagCurveY1} ${x - flagEndX},${y + flagEndY1}`
          }
          fill="#000"
        />
      )}

      {/* Second flag for sixteenth note */}
      {hasDoubleFlag && (
        <path
          d={
            stemDirection === 'up'
              ? `M ${x + stemOffset},${stemEndY + secondFlagOffset} Q ${x + flagCurveX},${y - secondFlagCurveY} ${x + flagEndX},${y - secondFlagEndY}`
              : `M ${x + stemOffset},${stemEndY - secondFlagOffset} Q ${x - flagCurveX},${y + secondFlagCurveY} ${x - flagEndX},${y + secondFlagEndY}`
          }
          fill="#000"
        />
      )}
    </>
  );
};
