import React from 'react';
import { STAFF_CONFIG } from '../../constants/staffConfig';

/**
 * BassClef Component
 * Renders a bass clef (F clef) SVG positioned to mark the F3 line
 *
 * Using reference SVG from OpenClipart (public domain)
 * Original viewBox: 0 0 93.266 123.58
 * Scale: 0.58 (adjusted for staff size)
 * Position: Uses constants from staffConfig.js
 * Staff lines (bass clef): y=30 (A3), y=45 (F3), y=60 (D3), y=75 (B2), y=90 (G2)
 *
 * The bass clef's two dots mark the F3 line (second line from top at y=45)
 */
export const BassClef = () => {
  const { bassClefX, bassClefY, bassClefScale } = STAFF_CONFIG;

  return (
    <g transform={`translate(${bassClefX}, ${bassClefY}) scale(${bassClefScale})`}>
      {/* Bass clef from OpenClipart reference SVG */}
      <path
        stroke="#000"
        fill="#000"
        d="m35.562 1.625c-19.163 0.40869-35.562 10.607-35.562 29.562v0.031c-0.11942 9.551 4.6111 17.898 11.469 24.469-6.0185 6.297-10.031 14.209-10.031 23.281 0 19.27 14.822 34.88 33.062 34.88 7.577 0 14.512-2.65 20.062-7 5.55-4.35 9.25-10.43 9.25-17.19 0-6.91-2.791-10.7-6.406-12.68-3.615-1.99-7.944-2.26-11.656-1.78 3.163-1.07 5.706-2.91 7.531-5.19 1.825-2.27 2.969-5 2.969-8.12 0-7.04-5.428-12.72-12.125-12.72-6.697 0-12.125 5.68-12.125 12.72 0 7.03 5.428 12.69 12.125 12.69 0.36 0 0.689-0.07 1.031-0.13-0.464 0.32-0.927 0.65-1.375 1-4.107 3.21-7.281 7.92-7.281 14.25 0 4.23 1.645 7.65 4.156 10.03 2.512 2.38 5.798 3.72 9.344 3.72 10.85 0 19.594-11.48 19.594-25.69 0-6.946-1.838-13.304-4.906-18.406 8.085-6.499 13.844-15.74 13.844-27.312v-0.031c0-18.955-16.399-29.146-35.562-29.562-1.238-0.027-2.494-0.032-3.781 0-1.148 0.028-2.315 0.083-3.5 0.156 1.185-0.073 2.352-0.128 3.5-0.156 1.287-0.032 2.543-0.027 3.781 0 18.625 0.404 34.375 10.122 34.375 28.375v0.031c0 11.23-5.584 20.195-13.375 26.594-0.22 0.18-0.442 0.36-0.656 0.53 0.214-0.17 0.436-0.35 0.656-0.53 7.791-6.399 13.375-15.364 13.375-26.594v-0.031c0-18.253-15.75-27.971-34.375-28.375z"
      />
      {/* Bass clef dots marking F3 line */}
      <circle cx="67" cy="35" r="4" fill="#000" />
      <circle cx="67" cy="50" r="4" fill="#000" />
    </g>
  );
};
