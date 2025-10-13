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
