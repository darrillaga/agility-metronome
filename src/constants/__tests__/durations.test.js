import { describe, it, expect } from 'vitest';
import { DURATIONS, DURATION_NAMES } from '../durations';

describe('DURATIONS', () => {
  it('should have 4 duration types', () => {
    expect(DURATIONS).toHaveLength(4);
  });

  it('should have all durations with name and beats properties', () => {
    DURATIONS.forEach((duration) => {
      expect(duration).toHaveProperty('name');
      expect(duration).toHaveProperty('beats');
      expect(typeof duration.name).toBe('string');
      expect(typeof duration.beats).toBe('number');
    });
  });

  it('should have whole note with 8 beats', () => {
    const whole = DURATIONS.find(d => d.name === 'whole');
    expect(whole).toBeDefined();
    expect(whole.beats).toBe(8);
  });

  it('should have half note with 4 beats', () => {
    const half = DURATIONS.find(d => d.name === 'half');
    expect(half).toBeDefined();
    expect(half.beats).toBe(4);
  });

  it('should have quarter note with 2 beats', () => {
    const quarter = DURATIONS.find(d => d.name === 'quarter');
    expect(quarter).toBeDefined();
    expect(quarter.beats).toBe(2);
  });

  it('should have eighth note with 1 beat', () => {
    const eighth = DURATIONS.find(d => d.name === 'eighth');
    expect(eighth).toBeDefined();
    expect(eighth.beats).toBe(1);
  });

  it('should be ordered from longest to shortest', () => {
    for (let i = 1; i < DURATIONS.length; i++) {
      expect(DURATIONS[i].beats).toBeLessThan(DURATIONS[i - 1].beats);
    }
  });
});

describe('DURATION_NAMES', () => {
  it('should have display names for all durations', () => {
    expect(DURATION_NAMES).toHaveProperty('whole');
    expect(DURATION_NAMES).toHaveProperty('half');
    expect(DURATION_NAMES).toHaveProperty('quarter');
    expect(DURATION_NAMES).toHaveProperty('eighth');
  });

  it('should have proper capitalized names', () => {
    expect(DURATION_NAMES.whole).toBe('Whole Note');
    expect(DURATION_NAMES.half).toBe('Half Note');
    expect(DURATION_NAMES.quarter).toBe('Quarter Note');
    expect(DURATION_NAMES.eighth).toBe('Eighth Note');
  });
});
