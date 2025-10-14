// Staff notation rendering configuration

export const STAFF_CONFIG = {
  // Staff line Y positions (top to bottom: F5, D5, B4, G4, E4)
  linePositions: [30, 45, 60, 75, 90],

  // Spacing between lines and spaces (diatonic steps)
  lineSpacing: 7.5,

  // SVG viewBox dimensions [minX, minY, width, height]
  viewBox: [0, 0, 400, 140],

  // Staff line rendering
  staffLineStart: 50,
  staffLineEnd: 350,
  staffLineStrokeWidth: 1.5,

  // Reference position for E4 (bottom line)
  e4Position: 90,
  e4Octave: 4,

  // Ledger line configuration
  ledgerLineLength: 40,  // Total length
  ledgerLineOffset: 185, // X start position
  ledgerLineStrokeWidth: 1.5,

  // Note rendering
  noteX: 205,
  noteRadiusX: 8,
  noteRadiusY: 6,
  noteRotation: -20,
  noteStrokeWidth: 2,

  // Stem configuration
  stemX: 213,
  stemHeight: 35,
  stemStrokeWidth: 2,

  // Accidental (sharp) positioning
  sharpX: 175,
  sharpStrokeWidth: 1.2,

  // Treble clef positioning (after 25% size increase)
  trebleClefX: 42.43,
  trebleClefY: 28.00, // Positioned so curl wraps around G4 line
  trebleClefScale: 0.653125, // 25% increase from previous 0.5225
};
