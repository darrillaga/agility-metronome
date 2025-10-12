import { describe, it, expect } from 'vitest';
import {
  selectRandomDuration,
  selectWeightedDuration,
  selectPatternDuration,
} from '../noteGenerator/durationSelector';

const mockDurations = [
  { name: 'whole', beats: 8 },
  { name: 'half', beats: 4 },
  { name: 'quarter', beats: 2 },
  { name: 'eighth', beats: 1 },
];

describe('selectRandomDuration', () => {
  it('should return a duration from the array', () => {
    const result = selectRandomDuration(mockDurations);
    expect(mockDurations).toContain(result);
  });

  it('should return a duration object with name and beats', () => {
    const result = selectRandomDuration(mockDurations);
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('beats');
  });

  it('should select different durations over multiple calls', () => {
    const results = new Set();

    for (let i = 0; i < 20; i++) {
      const result = selectRandomDuration(mockDurations);
      results.add(result.name);
    }

    // With 20 calls, should get at least 2 different durations
    expect(results.size).toBeGreaterThan(1);
  });

  it('should handle single duration array', () => {
    const singleDuration = [{ name: 'quarter', beats: 2 }];
    const result = selectRandomDuration(singleDuration);
    expect(result.name).toBe('quarter');
  });
});

describe('selectWeightedDuration', () => {
  it('should return a duration from the array', () => {
    const result = selectWeightedDuration(mockDurations);
    expect(mockDurations).toContain(result);
  });

  it('should use default weights if none provided', () => {
    const result = selectWeightedDuration(mockDurations);
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('beats');
  });

  it('should respect custom weights', () => {
    // Heavy weight on quarter notes
    const weights = {
      whole: 0,
      half: 0,
      quarter: 10,
      eighth: 1,
    };

    const results = {};
    for (let i = 0; i < 100; i++) {
      const result = selectWeightedDuration(mockDurations, weights);
      results[result.name] = (results[result.name] || 0) + 1;
    }

    // Quarter should appear much more often
    expect(results.quarter).toBeGreaterThan(results.eighth || 0);
    expect(results.whole).toBeUndefined();
    expect(results.half).toBeUndefined();
  });

  it('should handle partial weight objects', () => {
    const weights = { quarter: 5 }; // Only specify one weight

    const results = new Set();
    for (let i = 0; i < 20; i++) {
      const result = selectWeightedDuration(mockDurations, weights);
      results.add(result.name);
    }

    // Should still work with all durations available
    expect(results.size).toBeGreaterThan(0);
  });

  it('should handle zero weights correctly', () => {
    const weights = {
      whole: 0,
      half: 0,
      quarter: 1,
      eighth: 1,
    };

    const results = {};
    for (let i = 0; i < 50; i++) {
      const result = selectWeightedDuration(mockDurations, weights);
      results[result.name] = (results[result.name] || 0) + 1;
    }

    expect(results.whole).toBeUndefined();
    expect(results.half).toBeUndefined();
    expect(results.quarter).toBeGreaterThan(0);
    expect(results.eighth).toBeGreaterThan(0);
  });
});

describe('selectPatternDuration', () => {
  it('should follow the pattern in order', () => {
    const pattern = ['quarter', 'eighth', 'quarter'];

    expect(selectPatternDuration(mockDurations, pattern, 0).name).toBe('quarter');
    expect(selectPatternDuration(mockDurations, pattern, 1).name).toBe('eighth');
    expect(selectPatternDuration(mockDurations, pattern, 2).name).toBe('quarter');
  });

  it('should loop the pattern', () => {
    const pattern = ['half', 'quarter'];

    expect(selectPatternDuration(mockDurations, pattern, 0).name).toBe('half');
    expect(selectPatternDuration(mockDurations, pattern, 1).name).toBe('quarter');
    expect(selectPatternDuration(mockDurations, pattern, 2).name).toBe('half'); // Loop
    expect(selectPatternDuration(mockDurations, pattern, 3).name).toBe('quarter');
  });

  it('should handle single element pattern', () => {
    const pattern = ['quarter'];

    expect(selectPatternDuration(mockDurations, pattern, 0).name).toBe('quarter');
    expect(selectPatternDuration(mockDurations, pattern, 1).name).toBe('quarter');
    expect(selectPatternDuration(mockDurations, pattern, 10).name).toBe('quarter');
  });

  it('should return fallback for unknown duration name', () => {
    const pattern = ['unknown', 'quarter'];

    const result = selectPatternDuration(mockDurations, pattern, 0);
    // Should fallback to first duration
    expect(result).toBeDefined();
    expect(result).toBe(mockDurations[0]);
  });

  it('should handle large indices', () => {
    const pattern = ['quarter', 'eighth'];

    const result = selectPatternDuration(mockDurations, pattern, 100);
    // 100 % 2 = 0, should return quarter
    expect(result.name).toBe('quarter');
  });
});
