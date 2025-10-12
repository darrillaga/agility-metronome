import { describe, it, expect } from 'vitest';
import {
  validateNoteRange,
  adjustMaxForMin,
  adjustMinForMax,
} from '../validation/rangeValidator';
import {
  clampTempo,
  validateTempo,
  tempoToPercentage,
  TEMPO_LIMITS,
} from '../validation/tempoValidator';

describe('validateNoteRange', () => {
  it('should validate valid range', () => {
    const result = validateNoteRange(10, 20, 61);
    expect(result.isValid).toBe(true);
    expect(result.min).toBe(10);
    expect(result.max).toBe(20);
    expect(result.error).toBeNull();
  });

  it('should swap min and max if min > max', () => {
    const result = validateNoteRange(30, 20, 61);
    expect(result.isValid).toBe(true);
    expect(result.min).toBe(20);
    expect(result.max).toBe(30);
    expect(result.error).toBe('Min and max were swapped');
  });

  it('should reject min below 0', () => {
    const result = validateNoteRange(-1, 20, 61);
    expect(result.isValid).toBe(false);
    expect(result.min).toBe(0);
    expect(result.error).toBe('Minimum note is out of range');
  });

  it('should reject max above total notes', () => {
    const result = validateNoteRange(10, 70, 61);
    expect(result.isValid).toBe(false);
    expect(result.max).toBe(60);
    expect(result.error).toBe('Maximum note is out of range');
  });

  it('should allow min === max', () => {
    const result = validateNoteRange(15, 15, 61);
    expect(result.isValid).toBe(true);
    expect(result.min).toBe(15);
    expect(result.max).toBe(15);
  });
});

describe('adjustMaxForMin', () => {
  it('should keep max if min < max', () => {
    expect(adjustMaxForMin(10, 20)).toBe(20);
  });

  it('should adjust max to equal min if min > max', () => {
    expect(adjustMaxForMin(25, 20)).toBe(25);
  });

  it('should handle equal values', () => {
    expect(adjustMaxForMin(15, 15)).toBe(15);
  });
});

describe('adjustMinForMax', () => {
  it('should keep min if max > min', () => {
    expect(adjustMinForMax(20, 10)).toBe(10);
  });

  it('should adjust min to equal max if max < min', () => {
    expect(adjustMinForMax(15, 20)).toBe(15);
  });

  it('should handle equal values', () => {
    expect(adjustMinForMax(15, 15)).toBe(15);
  });
});

describe('TEMPO_LIMITS', () => {
  it('should have correct default values', () => {
    expect(TEMPO_LIMITS.MIN).toBe(40);
    expect(TEMPO_LIMITS.MAX).toBe(240);
    expect(TEMPO_LIMITS.DEFAULT).toBe(120);
  });

  it('should have default between min and max', () => {
    expect(TEMPO_LIMITS.DEFAULT).toBeGreaterThanOrEqual(TEMPO_LIMITS.MIN);
    expect(TEMPO_LIMITS.DEFAULT).toBeLessThanOrEqual(TEMPO_LIMITS.MAX);
  });
});

describe('clampTempo', () => {
  it('should return value within range unchanged', () => {
    expect(clampTempo(120)).toBe(120);
    expect(clampTempo(100)).toBe(100);
  });

  it('should clamp value below minimum', () => {
    expect(clampTempo(30)).toBe(40);
    expect(clampTempo(0)).toBe(40);
    expect(clampTempo(-10)).toBe(40);
  });

  it('should clamp value above maximum', () => {
    expect(clampTempo(300)).toBe(240);
    expect(clampTempo(500)).toBe(240);
  });

  it('should return min/max at boundaries', () => {
    expect(clampTempo(40)).toBe(40);
    expect(clampTempo(240)).toBe(240);
  });
});

describe('validateTempo', () => {
  it('should validate tempo within range', () => {
    const result = validateTempo(120);
    expect(result.isValid).toBe(true);
    expect(result.value).toBe(120);
    expect(result.error).toBeNull();
  });

  it('should reject non-number values', () => {
    const result = validateTempo('120');
    expect(result.isValid).toBe(false);
    expect(result.value).toBe(120); // Default
    expect(result.error).toBe('Tempo must be a number');
  });

  it('should reject NaN', () => {
    const result = validateTempo(NaN);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Tempo must be a number');
  });

  it('should reject tempo below minimum', () => {
    const result = validateTempo(30);
    expect(result.isValid).toBe(false);
    expect(result.value).toBe(40); // Clamped
    expect(result.error).toContain('between 40 and 240');
  });

  it('should reject tempo above maximum', () => {
    const result = validateTempo(300);
    expect(result.isValid).toBe(false);
    expect(result.value).toBe(240); // Clamped
    expect(result.error).toContain('between 40 and 240');
  });

  it('should accept boundary values', () => {
    expect(validateTempo(40).isValid).toBe(true);
    expect(validateTempo(240).isValid).toBe(true);
  });
});

describe('tempoToPercentage', () => {
  it('should return 0% for minimum tempo', () => {
    expect(tempoToPercentage(40)).toBe(0);
  });

  it('should return 100% for maximum tempo', () => {
    expect(tempoToPercentage(240)).toBe(100);
  });

  it('should return 50% for midpoint tempo', () => {
    const midpoint = (40 + 240) / 2;
    expect(tempoToPercentage(midpoint)).toBe(50);
  });

  it('should return 40% for tempo 120', () => {
    // (120 - 40) / (240 - 40) * 100 = 80 / 200 * 100 = 40
    expect(tempoToPercentage(120)).toBe(40);
  });

  it('should return correct percentages for various tempos', () => {
    expect(tempoToPercentage(60)).toBeCloseTo(10, 0);
    expect(tempoToPercentage(140)).toBeCloseTo(50, 0);
    expect(tempoToPercentage(200)).toBeCloseTo(80, 0);
  });
});
