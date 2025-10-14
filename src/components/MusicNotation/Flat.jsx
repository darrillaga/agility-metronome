import React from 'react';

/**
 * Flat Component
 * Renders a flat (♭) symbol for musical notation
 *
 * @param {number} x - X position of the flat symbol
 * @param {number} y - Y position of the flat symbol
 * @param {number} scale - Scale factor for the symbol (default 1)
 */
export const Flat = ({ x, y, scale = 1 }) => {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Vertical stem */}
      <line x1="2" y1="-8" x2="2" y2="6" stroke="#000" strokeWidth="1.2" />
      {/* Curved lower part of the flat symbol */}
      <path
        d="M 2,-1 Q 6,0 6,3 Q 6,6 2,6"
        fill="none"
        stroke="#000"
        strokeWidth="1.2"
      />
    </g>
  );
};
