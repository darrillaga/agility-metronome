import { describe, it, expect } from 'vitest';
import { NOTES, NOTE_RANGE } from '../notes';

describe('NOTES', () => {
  it('should have exactly 61 notes (5 octaves from C2 to C7)', () => {
    expect(NOTES).toHaveLength(61);
  });

  it('should start with C2 at concert pitch', () => {
    expect(NOTES[0].name).toBe('C2');
    expect(NOTES[0].frequency).toBe(65.41);
  });

  it('should end with C7 at concert pitch', () => {
    expect(NOTES[60].name).toBe('C7');
    expect(NOTES[60].frequency).toBe(2093.00);
  });

  it('should have all notes as objects with name and frequency', () => {
    NOTES.forEach((note) => {
      expect(note).toHaveProperty('name');
      expect(note).toHaveProperty('frequency');
      expect(typeof note.name).toBe('string');
      expect(typeof note.frequency).toBe('number');
    });
  });

  it('should have frequencies in ascending order', () => {
    for (let i = 1; i < NOTES.length; i++) {
      expect(NOTES[i].frequency).toBeGreaterThan(NOTES[i - 1].frequency);
    }
  });

  it('should include all chromatic notes (12 per octave)', () => {
    const noteNames = NOTES.map(n => n.name);
    // Check that we have complete chromatic coverage
    expect(noteNames).toContain('C4');
    expect(noteNames).toContain('C#4');
    expect(noteNames).toContain('D4');
    expect(noteNames).toContain('D#4');
    expect(noteNames).toContain('E4');
    expect(noteNames).toContain('F4');
    expect(noteNames).toContain('F#4');
    expect(noteNames).toContain('G4');
    expect(noteNames).toContain('G#4');
    expect(noteNames).toContain('A4');
    expect(noteNames).toContain('A#4');
    expect(noteNames).toContain('B4');
  });

  it('should have A4 at standard concert pitch (440 Hz)', () => {
    const a4 = NOTES.find(n => n.name === 'A4');
    expect(a4).toBeDefined();
    expect(a4.frequency).toBeCloseTo(440.00, 1);
  });
});

describe('NOTE_RANGE', () => {
  it('should have correct MIN_INDEX', () => {
    expect(NOTE_RANGE.MIN_INDEX).toBe(0);
  });

  it('should have correct MAX_INDEX', () => {
    expect(NOTE_RANGE.MAX_INDEX).toBe(60);
  });

  it('should have DEFAULT_MIN pointing to C4', () => {
    expect(NOTE_RANGE.DEFAULT_MIN).toBe(24);
    expect(NOTES[NOTE_RANGE.DEFAULT_MIN].name).toBe('C4');
  });

  it('should have DEFAULT_MAX pointing to B4', () => {
    expect(NOTE_RANGE.DEFAULT_MAX).toBe(35);
    expect(NOTES[NOTE_RANGE.DEFAULT_MAX].name).toBe('B4');
  });

  it('should have DEFAULT_MAX greater than DEFAULT_MIN', () => {
    expect(NOTE_RANGE.DEFAULT_MAX).toBeGreaterThan(NOTE_RANGE.DEFAULT_MIN);
  });
});
