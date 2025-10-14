// Musical instrument configurations
// Future extensibility for different transposing instruments

export const INSTRUMENTS = {
  CONCERT: {
    id: 'CONCERT',
    name: 'Concert Pitch',
    displayName: 'Agility Metronome',
    transposition: 0, // no transposition
    clef: 'treble',
    comfortableRange: {
      min: 39, // C4 (middle C)
      max: 50, // B4
    },
    fullRange: {
      min: 15,  // C2
      max: 87, // C8
    },
  },
  B_FLAT_TRUMPET: {
    id: 'B_FLAT_TRUMPET',
    name: 'B♭ Trumpet',
    displayName: 'Agility Metronome',
    transposition: -2, // semitones (whole step down)
    clef: 'treble',
    comfortableRange: {
      min: 39, // C4 (written)
      max: 50, // B4 (written)
    },
    fullRange: {
      min: 15,  // C2 (written)
      max: 87, // C8 (written)
    },
  },
  E_FLAT_ALTO_SAX: {
    id: 'E_FLAT_ALTO_SAX',
    name: 'E♭ Alto Sax',
    displayName: 'Agility Metronome',
    transposition: -9, // semitones (major 6th down)
    clef: 'treble',
    comfortableRange: {
      min: 36, // A3 (written)
      max: 52, // C#5 (written)
    },
    fullRange: {
      min: 23,  // G#2 (written)
      max: 70, // D#6 (written)
    },
  },
  PIANO: {
    id: 'PIANO',
    name: 'Piano',
    displayName: 'Piano',
    transposition: 0, // no transposition
    clef: 'grand', // grand staff (both treble and bass)
    comfortableRange: {
      min: 27, // C3
      max: 62, // B5
    },
    fullRange: {
      min: 0,  // A0 (full piano range)
      max: 87, // C8 (full piano range)
    },
    // Grand staff configuration
    // Notes >= C4 (index 39) use treble clef
    // Notes < C4 (index 39) use bass clef
    staffSplit: 39, // C4 (middle C) is the split point
  },
};

// Array of instruments for UI rendering (in order)
export const INSTRUMENT_LIST = [
  INSTRUMENTS.B_FLAT_TRUMPET,
  INSTRUMENTS.E_FLAT_ALTO_SAX,
  INSTRUMENTS.PIANO,
  INSTRUMENTS.CONCERT,
];

// Default instrument
export const DEFAULT_INSTRUMENT = INSTRUMENTS.B_FLAT_TRUMPET;

/**
 * Calculate transposed frequency for a given instrument
 * Applies the instrument's transposition to a concert pitch frequency
 *
 * @param {number} concertFrequency - The concert pitch frequency in Hz
 * @param {Object} instrument - The instrument configuration object
 * @returns {number} The transposed frequency in Hz
 *
 * @example
 * // For B♭ trumpet (transposition = -2 semitones):
 * // Written C4 (261.63 Hz concert) sounds as B♭3 (233.08 Hz)
 * getTransposedFrequency(261.63, INSTRUMENTS.B_FLAT_TRUMPET) // => 233.08
 */
export function getTransposedFrequency(concertFrequency, instrument) {
  if (!instrument || instrument.transposition === 0) {
    return concertFrequency;
  }

  // Formula: f_transposed = f_concert × 2^(transposition/12)
  // where transposition is in semitones
  const transpositionFactor = Math.pow(2, instrument.transposition / 12);
  return concertFrequency * transpositionFactor;
}
