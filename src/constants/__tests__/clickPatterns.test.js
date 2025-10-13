import { describe, it, expect } from 'vitest';
import { CLICK_PATTERNS, DEFAULT_CLICK_PATTERN } from '../clickPatterns';

describe('CLICK_PATTERNS', () => {
  it('should export an array of click patterns', () => {
    expect(Array.isArray(CLICK_PATTERNS)).toBe(true);
    expect(CLICK_PATTERNS.length).toBeGreaterThan(0);
  });

  it('should have patterns with required properties', () => {
    CLICK_PATTERNS.forEach(pattern => {
      expect(pattern).toHaveProperty('name');
      expect(pattern).toHaveProperty('value');
      expect(pattern).toHaveProperty('beatsPerClick');
      expect(pattern).toHaveProperty('displayName');
      expect(typeof pattern.name).toBe('string');
      expect(typeof pattern.value).toBe('string');
      expect(typeof pattern.beatsPerClick).toBe('number');
      expect(typeof pattern.displayName).toBe('string');
    });
  });

  it('should have unique values', () => {
    const values = CLICK_PATTERNS.map(p => p.value);
    const uniqueValues = new Set(values);
    expect(uniqueValues.size).toBe(values.length);
  });

  it('should include Off pattern', () => {
    const offPattern = CLICK_PATTERNS.find(p => p.value === 'off');
    expect(offPattern).toBeDefined();
    expect(offPattern.beatsPerClick).toBe(0);
  });

  it('should include 16th notes pattern', () => {
    const sixteenthPattern = CLICK_PATTERNS.find(p => p.value === 'sixteenth');
    expect(sixteenthPattern).toBeDefined();
    expect(sixteenthPattern.beatsPerClick).toBe(0.5);
  });

  it('should include 8th note triplets pattern', () => {
    const eighthTripletPattern = CLICK_PATTERNS.find(p => p.value === 'eighth-triplet');
    expect(eighthTripletPattern).toBeDefined();
    expect(eighthTripletPattern.beatsPerClick).toBeCloseTo(2/3, 5);
  });

  it('should include 8th notes pattern', () => {
    const eighthPattern = CLICK_PATTERNS.find(p => p.value === 'eighth');
    expect(eighthPattern).toBeDefined();
    expect(eighthPattern.beatsPerClick).toBe(1);
  });

  it('should include quarter note triplets pattern', () => {
    const quarterTripletPattern = CLICK_PATTERNS.find(p => p.value === 'quarter-triplet');
    expect(quarterTripletPattern).toBeDefined();
    expect(quarterTripletPattern.beatsPerClick).toBeCloseTo(4/3, 5);
  });

  it('should include quarter notes pattern', () => {
    const quarterPattern = CLICK_PATTERNS.find(p => p.value === 'quarter');
    expect(quarterPattern).toBeDefined();
    expect(quarterPattern.beatsPerClick).toBe(2);
  });

  it('should include half note triplets pattern', () => {
    const halfTripletPattern = CLICK_PATTERNS.find(p => p.value === 'half-triplet');
    expect(halfTripletPattern).toBeDefined();
    expect(halfTripletPattern.beatsPerClick).toBeCloseTo(8/3, 5);
  });

  it('should include half notes pattern', () => {
    const halfPattern = CLICK_PATTERNS.find(p => p.value === 'half');
    expect(halfPattern).toBeDefined();
    expect(halfPattern.beatsPerClick).toBe(4);
  });

  it('should include whole notes pattern', () => {
    const wholePattern = CLICK_PATTERNS.find(p => p.value === 'whole');
    expect(wholePattern).toBeDefined();
    expect(wholePattern.beatsPerClick).toBe(8);
  });

  it('should have patterns in ascending order by beatsPerClick', () => {
    for (let i = 1; i < CLICK_PATTERNS.length; i++) {
      expect(CLICK_PATTERNS[i].beatsPerClick).toBeGreaterThanOrEqual(
        CLICK_PATTERNS[i - 1].beatsPerClick
      );
    }
  });
});

describe('DEFAULT_CLICK_PATTERN', () => {
  it('should be defined', () => {
    expect(DEFAULT_CLICK_PATTERN).toBeDefined();
  });

  it('should be the quarter notes pattern', () => {
    expect(DEFAULT_CLICK_PATTERN.value).toBe('quarter');
    expect(DEFAULT_CLICK_PATTERN.beatsPerClick).toBe(2);
  });

  it('should be included in CLICK_PATTERNS', () => {
    expect(CLICK_PATTERNS).toContain(DEFAULT_CLICK_PATTERN);
  });
});
