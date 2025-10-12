import { describe, it, expect, beforeEach } from 'vitest';
import { selectRandomNote, selectNoteByInterval } from '../noteGenerator/noteSelector';

describe('selectRandomNote', () => {
  const mockNotes = [
    { name: 'C4', frequency: 466.16 },
    { name: 'D4', frequency: 523.25 },
    { name: 'E4', frequency: 587.33 },
    { name: 'F4', frequency: 622.25 },
    { name: 'G4', frequency: 698.46 },
  ];

  it('should return a note from the specified range', () => {
    const currentNote = mockNotes[0];
    const result = selectRandomNote(mockNotes, currentNote, 0, 4);

    expect(mockNotes).toContain(result);
  });

  it('should return a note different from current note', () => {
    const currentNote = mockNotes[2]; // E4
    const results = new Set();

    // Run multiple times to check randomness
    for (let i = 0; i < 20; i++) {
      const result = selectRandomNote(mockNotes, currentNote, 0, 4);
      results.add(result.name);
    }

    // Should have selected at least 2 different notes
    expect(results.size).toBeGreaterThan(1);
  });

  it('should return the only note if range contains single note', () => {
    const currentNote = mockNotes[2];
    const result = selectRandomNote(mockNotes, currentNote, 3, 3);

    expect(result.name).toBe('F4');
  });

  it('should respect min and max indices', () => {
    const currentNote = mockNotes[0];
    const results = [];

    for (let i = 0; i < 10; i++) {
      const result = selectRandomNote(mockNotes, currentNote, 1, 3);
      results.push(result);
    }

    // All results should be within range
    results.forEach(note => {
      const index = mockNotes.findIndex(n => n.name === note.name);
      expect(index).toBeGreaterThanOrEqual(1);
      expect(index).toBeLessThanOrEqual(3);
    });
  });

  it('should handle edge case where current note is the only option', () => {
    const currentNote = mockNotes[0];
    const result = selectRandomNote(mockNotes, currentNote, 0, 0);

    expect(result.name).toBe('C4');
  });
});

describe('selectNoteByInterval', () => {
  const mockNotes = [
    { name: 'C4', frequency: 466.16 },
    { name: 'C#4', frequency: 493.88 },
    { name: 'D4', frequency: 523.25 },
    { name: 'D#4', frequency: 554.37 },
    { name: 'E4', frequency: 587.33 },
    { name: 'F4', frequency: 622.25 },
    { name: 'G4', frequency: 698.46 },
    { name: 'A4', frequency: 783.99 },
  ];

  it('should select note within specified interval', () => {
    const currentNote = mockNotes[2]; // D4 (index 2)
    const result = selectNoteByInterval(mockNotes, currentNote, 2, 4);

    // Should be 2-4 semitones away
    const currentIndex = 2;
    const resultIndex = mockNotes.findIndex(n => n.name === result.name);
    const distance = Math.abs(resultIndex - currentIndex);

    expect(distance).toBeGreaterThanOrEqual(2);
    expect(distance).toBeLessThanOrEqual(4);
  });

  it('should return null if current note not found', () => {
    const nonExistentNote = { name: 'Z9', frequency: 999 };
    const result = selectNoteByInterval(mockNotes, nonExistentNote, 1, 3);

    expect(result).toBeNull();
  });

  it('should return null if no notes in interval range', () => {
    const currentNote = mockNotes[0]; // C4 (first note)
    const result = selectNoteByInterval(mockNotes, currentNote, 10, 20);

    // No notes 10-20 semitones away within array
    expect(result).toBeNull();
  });

  it('should include notes both above and below current note', () => {
    const currentNote = mockNotes[4]; // E4 (middle)
    const results = new Set();

    for (let i = 0; i < 50; i++) {
      const result = selectNoteByInterval(mockNotes, currentNote, 1, 3);
      if (result) {
        results.add(result.name);
      }
    }

    // Should have both higher and lower notes
    expect(results.size).toBeGreaterThan(2);
  });
});
