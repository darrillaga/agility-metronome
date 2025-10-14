import { describe, it, expect } from 'vitest';
import { INSTRUMENTS, DEFAULT_INSTRUMENT, getTransposedFrequency } from '../instruments';

describe('INSTRUMENTS', () => {
  it('should have B_FLAT_TRUMPET configuration', () => {
    expect(INSTRUMENTS.B_FLAT_TRUMPET).toBeDefined();
    expect(INSTRUMENTS.B_FLAT_TRUMPET.id).toBe('B_FLAT_TRUMPET');
    expect(INSTRUMENTS.B_FLAT_TRUMPET.name).toBe('B♭ Trumpet');
    expect(INSTRUMENTS.B_FLAT_TRUMPET.transposition).toBe(-2);
  });

  it('should have DEFAULT_INSTRUMENT set to B♭ Trumpet', () => {
    expect(DEFAULT_INSTRUMENT).toBe(INSTRUMENTS.B_FLAT_TRUMPET);
  });

  it('should have clef property', () => {
    expect(INSTRUMENTS.B_FLAT_TRUMPET.clef).toBe('treble');
  });

  it('should have comfortable range', () => {
    expect(INSTRUMENTS.B_FLAT_TRUMPET.comfortableRange).toBeDefined();
    expect(INSTRUMENTS.B_FLAT_TRUMPET.comfortableRange.min).toBe(39); // C4
    expect(INSTRUMENTS.B_FLAT_TRUMPET.comfortableRange.max).toBe(50); // B4
  });

  it('should have full range', () => {
    expect(INSTRUMENTS.B_FLAT_TRUMPET.fullRange).toBeDefined();
    expect(INSTRUMENTS.B_FLAT_TRUMPET.fullRange.min).toBe(15);  // C2
    expect(INSTRUMENTS.B_FLAT_TRUMPET.fullRange.max).toBe(87);  // C8
  });
});

describe('getTransposedFrequency', () => {
  it('should return concert pitch when instrument is null', () => {
    const concertFreq = 440.00; // A4
    const transposed = getTransposedFrequency(concertFreq, null);
    expect(transposed).toBe(440.00);
  });

  it('should return concert pitch when transposition is 0', () => {
    const concertFreq = 440.00; // A4
    const noTransposeInstrument = { transposition: 0 };
    const transposed = getTransposedFrequency(concertFreq, noTransposeInstrument);
    expect(transposed).toBe(440.00);
  });

  it('should transpose down 2 semitones for B♭ trumpet', () => {
    // Written A4 (440 Hz concert) should sound as G4 (392 Hz)
    const concertA4 = 440.00;
    const transposed = getTransposedFrequency(concertA4, INSTRUMENTS.B_FLAT_TRUMPET);
    expect(transposed).toBeCloseTo(392.00, 1);
  });

  it('should transpose C4 correctly for B♭ trumpet', () => {
    // Written C4 (261.63 Hz concert) should sound as B♭3 (233.08 Hz)
    const concertC4 = 261.63;
    const transposed = getTransposedFrequency(concertC4, INSTRUMENTS.B_FLAT_TRUMPET);
    expect(transposed).toBeCloseTo(233.08, 1);
  });

  it('should transpose B4 correctly for B♭ trumpet', () => {
    // Written B4 (493.88 Hz concert) should sound as A4 (440 Hz)
    const concertB4 = 493.88;
    const transposed = getTransposedFrequency(concertB4, INSTRUMENTS.B_FLAT_TRUMPET);
    expect(transposed).toBeCloseTo(440.00, 1);
  });

  it('should maintain octave relationships after transposition', () => {
    const concertA3 = 220.00;
    const concertA4 = 440.00;
    const concertA5 = 880.00;

    const transposedA3 = getTransposedFrequency(concertA3, INSTRUMENTS.B_FLAT_TRUMPET);
    const transposedA4 = getTransposedFrequency(concertA4, INSTRUMENTS.B_FLAT_TRUMPET);
    const transposedA5 = getTransposedFrequency(concertA5, INSTRUMENTS.B_FLAT_TRUMPET);

    // Octave relationship: each octave should be exactly double
    expect(transposedA4).toBeCloseTo(transposedA3 * 2, 1);
    expect(transposedA5).toBeCloseTo(transposedA4 * 2, 1);
  });

  it('should use the correct transposition formula', () => {
    // Formula: f_transposed = f_concert × 2^(transposition/12)
    // For B♭ trumpet: transposition = -2
    // Factor = 2^(-2/12) = 2^(-1/6) ≈ 0.89089871814
    const concertFreq = 1000.00;
    const expectedFactor = Math.pow(2, -2/12);
    const expected = concertFreq * expectedFactor;

    const transposed = getTransposedFrequency(concertFreq, INSTRUMENTS.B_FLAT_TRUMPET);
    expect(transposed).toBeCloseTo(expected, 2);
  });
});
