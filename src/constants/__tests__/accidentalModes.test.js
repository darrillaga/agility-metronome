import { describe, it, expect } from 'vitest';
import { ACCIDENTAL_MODES, DEFAULT_ACCIDENTAL_MODE } from '../accidentalModes';

describe('ACCIDENTAL_MODES', () => {
  it('should define sharps mode', () => {
    expect(ACCIDENTAL_MODES.SHARPS).toBe('sharps');
  });

  it('should define flats mode', () => {
    expect(ACCIDENTAL_MODES.FLATS).toBe('flats');
  });

  it('should define mix mode', () => {
    expect(ACCIDENTAL_MODES.MIX).toBe('mix');
  });

  it('should have sharps as default', () => {
    expect(DEFAULT_ACCIDENTAL_MODE).toBe('sharps');
  });
});
