import { describe, it, expect } from 'vitest';
import { formatNoteName, formatNoteNameFlat } from '../formatting/noteName';
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
