import React from 'react';

/**
 * Sharp Component
 * Renders a sharp (♯) symbol for musical notation
 *
 * @param {number} x - X position of the sharp symbol
 * @param {number} y - Y position of the sharp symbol
 */
export const Sharp = ({ x, y }) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <line x1="2" y1="-6" x2="2" y2="6" stroke="#000" strokeWidth="1.2" />
      <line x1="5" y1="-6" x2="5" y2="6" stroke="#000" strokeWidth="1.2" />
      <line x1="0" y1="-1.5" x2="7" y2="-3" stroke="#000" strokeWidth="1.2" />
      <line x1="0" y1="1.5" x2="7" y2="0" stroke="#000" strokeWidth="1.2" />
    </g>
  );
};
