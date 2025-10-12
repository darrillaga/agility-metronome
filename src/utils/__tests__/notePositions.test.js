import { describe, it, expect } from 'vitest';
import { calculateStaffPosition, parseNoteName, calculateLedgerLines } from '../musicTheory/notePositions';

describe('calculateStaffPosition', () => {
  it('should calculate E4 at y=90 (bottom staff line)', () => {
    const note = { name: 'E4' };
    expect(calculateStaffPosition(note)).toBe(90);
  });

  it('should calculate F4 at y=82.5 (first space)', () => {
    const note = { name: 'F4' };
    expect(calculateStaffPosition(note)).toBe(82.5);
  });

  it('should calculate G4 at y=75 (second line)', () => {
    const note = { name: 'G4' };
    expect(calculateStaffPosition(note)).toBe(75);
  });

  it('should calculate B4 at y=60 (middle line)', () => {
    const note = { name: 'B4' };
    expect(calculateStaffPosition(note)).toBe(60);
  });

  it('should calculate C5 at y=52.5 (space above B4)', () => {
    const note = { name: 'C5' };
    expect(calculateStaffPosition(note)).toBe(52.5);
  });

  it('should calculate D5 at y=45 (fourth line)', () => {
    const note = { name: 'D5' };
    expect(calculateStaffPosition(note)).toBe(45);
  });

  it('should calculate F5 at y=30 (top line)', () => {
    const note = { name: 'F5' };
    expect(calculateStaffPosition(note)).toBe(30);
  });

  it('should calculate C4 below staff at y=105', () => {
    const note = { name: 'C4' };
    expect(calculateStaffPosition(note)).toBe(105);
  });

  it('should calculate D4 below staff at y=97.5', () => {
    const note = { name: 'D4' };
    expect(calculateStaffPosition(note)).toBe(97.5);
  });

  it('should place C#4 at same position as C4 (diatonic spacing)', () => {
    const c4 = { name: 'C4' };
    const cSharp4 = { name: 'C#4' };
    expect(calculateStaffPosition(c4)).toBe(calculateStaffPosition(cSharp4));
  });

  it('should handle octave changes correctly', () => {
    const c3 = { name: 'C3' };
    const c4 = { name: 'C4' };
    const c5 = { name: 'C5' };

    // C4 should be 7 steps (52.5 pixels) higher than C3
    expect(calculateStaffPosition(c4)).toBe(calculateStaffPosition(c3) - 52.5);
    // C5 should be 7 steps (52.5 pixels) higher than C4
    expect(calculateStaffPosition(c5)).toBe(calculateStaffPosition(c4) - 52.5);
  });

  it('should handle very low notes (C2)', () => {
    const c2 = { name: 'C2' };
    const position = calculateStaffPosition(c2);
    expect(position).toBeGreaterThan(90); // Below staff
    expect(typeof position).toBe('number');
  });

  it('should handle very high notes (C7)', () => {
    const c7 = { name: 'C7' };
    const position = calculateStaffPosition(c7);
    expect(position).toBeLessThan(30); // Above staff
    expect(typeof position).toBe('number');
  });
});

describe('parseNoteName', () => {
  it('should parse natural note correctly', () => {
    const result = parseNoteName('C4');
    expect(result).toEqual({
      letter: 'C',
      isSharp: false,
      octave: 4,
    });
  });

  it('should parse sharp note correctly', () => {
    const result = parseNoteName('F#5');
    expect(result).toEqual({
      letter: 'F',
      isSharp: true,
      octave: 5,
    });
  });

  it('should handle low octaves', () => {
    const result = parseNoteName('A2');
    expect(result.octave).toBe(2);
  });

  it('should handle high octaves', () => {
    const result = parseNoteName('G#7');
    expect(result).toEqual({
      letter: 'G',
      isSharp: true,
      octave: 7,
    });
  });

  it('should correctly identify all natural notes', () => {
    ['C', 'D', 'E', 'F', 'G', 'A', 'B'].forEach(letter => {
      const result = parseNoteName(`${letter}4`);
      expect(result.letter).toBe(letter);
      expect(result.isSharp).toBe(false);
    });
  });
});

describe('calculateLedgerLines', () => {
  it('should return empty array for notes on the staff', () => {
    // E4 (y=90) to F5 (y=30) are on the staff
    expect(calculateLedgerLines(90)).toEqual([]); // E4
    expect(calculateLedgerLines(75)).toEqual([]); // G4
    expect(calculateLedgerLines(60)).toEqual([]); // B4
    expect(calculateLedgerLines(45)).toEqual([]); // D5
    expect(calculateLedgerLines(30)).toEqual([]); // F5
  });

  it('should generate ledger lines below staff for C4', () => {
    const lines = calculateLedgerLines(105); // C4
    expect(lines).toContain(97.5);
    expect(lines).toContain(105);
    expect(lines.length).toBeGreaterThan(0);
  });

  it('should generate ledger lines below staff for D4', () => {
    const lines = calculateLedgerLines(97.5); // D4
    expect(lines).toContain(97.5);
    expect(lines.length).toBe(1);
  });

  it('should generate ledger lines above staff for G5', () => {
    const lines = calculateLedgerLines(22.5); // G5
    expect(lines).toContain(22.5);
    expect(lines.length).toBeGreaterThan(0);
  });

  it('should generate more ledger lines for notes further from staff', () => {
    const c4Lines = calculateLedgerLines(105); // C4 - below staff
    const c3Lines = calculateLedgerLines(157.5); // C3 - much further below
    expect(c3Lines.length).toBeGreaterThan(c4Lines.length);
  });

  it('should return ledger lines in correct order', () => {
    const lines = calculateLedgerLines(112.5);
    // Lines should be in ascending order for below staff
    for (let i = 1; i < lines.length; i++) {
      expect(lines[i]).toBeGreaterThan(lines[i - 1]);
    }
  });

  it('should return ledger lines in correct order for above staff', () => {
    const lines = calculateLedgerLines(15);
    // Lines should be in descending order for above staff
    for (let i = 1; i < lines.length; i++) {
      expect(lines[i]).toBeLessThan(lines[i - 1]);
    }
  });
});
