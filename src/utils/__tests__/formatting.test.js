import { describe, it, expect, beforeEach, vi } from 'vitest';
import { formatNoteName, formatNoteNameFlat, formatNoteNameMix, formatNoteByMode, getEnharmonicFlat } from '../formatting/noteName';
import { formatDuration, getDurationDisplayName } from '../formatting/durationName';

describe('formatNoteName', () => {
  it('should format natural notes unchanged', () => {
    expect(formatNoteName('C4')).toBe('C4');
    expect(formatNoteName('G5')).toBe('G5');
  });

  it('should convert # to ♯ symbol', () => {
    expect(formatNoteName('C#4')).toBe('C♯4');
    expect(formatNoteName('F#5')).toBe('F♯5');
  });

  it('should handle multiple sharps in name (edge case)', () => {
    expect(formatNoteName('C##4')).toBe('C♯♯4');
  });
});

describe('formatNoteNameFlat', () => {
  it('should convert sharps to flats', () => {
    expect(formatNoteNameFlat('C#4')).toBe('D♭4');
    expect(formatNoteNameFlat('D#5')).toBe('E♭5');
    expect(formatNoteNameFlat('F#3')).toBe('G♭3');
    expect(formatNoteNameFlat('G#6')).toBe('A♭6');
    expect(formatNoteNameFlat('A#2')).toBe('B♭2');
  });

  it('should return natural notes unchanged', () => {
    expect(formatNoteNameFlat('C4')).toBe('C4');
    expect(formatNoteNameFlat('E5')).toBe('E5');
    expect(formatNoteNameFlat('B3')).toBe('B3');
  });
});

describe('formatNoteNameMix', () => {
  beforeEach(() => {
    // Reset random number generator before each test
    vi.spyOn(Math, 'random');
  });

  it('should return natural notes unchanged', () => {
    expect(formatNoteNameMix('C4')).toBe('C4');
    expect(formatNoteNameMix('E5')).toBe('E5');
    expect(formatNoteNameMix('B3')).toBe('B3');
  });

  it('should return sharp when random < 0.5', () => {
    Math.random.mockReturnValue(0.4);
    expect(formatNoteNameMix('C#4')).toBe('D♭4');
  });

  it('should return flat when random >= 0.5', () => {
    Math.random.mockReturnValue(0.6);
    expect(formatNoteNameMix('C#4')).toBe('C♯4');
  });
});

describe('formatNoteByMode', () => {
  it('should format with sharps when mode is sharps', () => {
    expect(formatNoteByMode('C#4', 'sharps')).toBe('C♯4');
    expect(formatNoteByMode('F#5', 'sharps')).toBe('F♯5');
  });

  it('should format with flats when mode is flats', () => {
    expect(formatNoteByMode('C#4', 'flats')).toBe('D♭4');
    expect(formatNoteByMode('F#5', 'flats')).toBe('G♭5');
  });

  it('should format with mix when mode is mix', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.4);
    expect(formatNoteByMode('C#4', 'mix')).toBe('D♭4');
  });

  it('should return natural notes unchanged for all modes', () => {
    expect(formatNoteByMode('C4', 'sharps')).toBe('C4');
    expect(formatNoteByMode('C4', 'flats')).toBe('C4');
    expect(formatNoteByMode('C4', 'mix')).toBe('C4');
  });
});

describe('getEnharmonicFlat', () => {
  it('should convert sharps to enharmonic flats', () => {
    expect(getEnharmonicFlat('C#4')).toBe('Db4');
    expect(getEnharmonicFlat('D#5')).toBe('Eb5');
    expect(getEnharmonicFlat('F#3')).toBe('Gb3');
    expect(getEnharmonicFlat('G#6')).toBe('Ab6');
    expect(getEnharmonicFlat('A#2')).toBe('Bb2');
  });

  it('should return natural notes unchanged', () => {
    expect(getEnharmonicFlat('C4')).toBe('C4');
    expect(getEnharmonicFlat('E5')).toBe('E5');
    expect(getEnharmonicFlat('B3')).toBe('B3');
  });
});

describe('formatDuration', () => {
  it('should format whole note', () => {
    const duration = { name: 'whole', beats: 8 };
    expect(formatDuration(duration)).toBe('whole note (8 beats)');
  });

  it('should format half note', () => {
    const duration = { name: 'half', beats: 4 };
    expect(formatDuration(duration)).toBe('half note (4 beats)');
  });

  it('should format quarter note', () => {
    const duration = { name: 'quarter', beats: 2 };
    expect(formatDuration(duration)).toBe('quarter note (2 beats)');
  });

  it('should format eighth note', () => {
    const duration = { name: 'eighth', beats: 1 };
    expect(formatDuration(duration)).toBe('eighth note (1 beats)');
  });
});

describe('getDurationDisplayName', () => {
  it('should return capitalized name for whole note', () => {
    expect(getDurationDisplayName('whole')).toBe('Whole Note');
  });

  it('should return capitalized name for half note', () => {
    expect(getDurationDisplayName('half')).toBe('Half Note');
  });

  it('should return capitalized name for quarter note', () => {
    expect(getDurationDisplayName('quarter')).toBe('Quarter Note');
  });

  it('should return capitalized name for eighth note', () => {
    expect(getDurationDisplayName('eighth')).toBe('Eighth Note');
  });

  it('should return input for unknown duration', () => {
    expect(getDurationDisplayName('sixteenth')).toBe('sixteenth');
  });
});
