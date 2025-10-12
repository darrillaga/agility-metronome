// Musical instrument configurations
// Future extensibility for different transposing instruments

export const INSTRUMENTS = {
  B_FLAT_TRUMPET: {
    id: 'B_FLAT_TRUMPET',
    name: 'B♭ Trumpet',
    displayName: 'B♭ Trumpet Agility Metronome',
    transposition: -2, // semitones (whole step down)
    clef: 'treble',
    comfortableRange: {
      min: 24, // C4 (written)
      max: 35, // B4 (written)
    },
    fullRange: {
      min: 0,  // C2 (written)
      max: 60, // C7 (written)
    },
  },
  // Future instruments can be added here:
  // ALTO_SAX: { ... },
  // CLARINET: { ... },
  // FRENCH_HORN: { ... },
};

// Default instrument
export const DEFAULT_INSTRUMENT = INSTRUMENTS.B_FLAT_TRUMPET;
