import { describe, it, expect } from 'vitest';
import { DURATIONS, DURATION_NAMES, DURATION_TEXT_NAMES } from '../durations';

describe('DURATIONS', () => {
  it('should have 5 duration types', () => {
    expect(DURATIONS).toHaveLength(5);
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

  it('should have sixteenth note with 0.5 beats', () => {
    const sixteenth = DURATIONS.find(d => d.name === 'sixteenth');
    expect(sixteenth).toBeDefined();
    expect(sixteenth.beats).toBe(0.5);
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
    expect(DURATION_NAMES).toHaveProperty('sixteenth');
  });

  it('should have musical symbols as names', () => {
    expect(DURATION_NAMES.whole).toBe('𝅝');
    expect(DURATION_NAMES.half).toBe('𝅗𝅥');
    expect(DURATION_NAMES.quarter).toBe('♩');
    expect(DURATION_NAMES.eighth).toBe('♪');
    expect(DURATION_NAMES.sixteenth).toBe('𝅘𝅥𝅯');
  });
});

describe('DURATION_TEXT_NAMES', () => {
  it('should have text display names for all durations', () => {
    expect(DURATION_TEXT_NAMES).toHaveProperty('whole');
    expect(DURATION_TEXT_NAMES).toHaveProperty('half');
    expect(DURATION_TEXT_NAMES).toHaveProperty('quarter');
    expect(DURATION_TEXT_NAMES).toHaveProperty('eighth');
    expect(DURATION_TEXT_NAMES).toHaveProperty('sixteenth');
  });

  it('should have proper capitalized names', () => {
    expect(DURATION_TEXT_NAMES.whole).toBe('Whole Note');
    expect(DURATION_TEXT_NAMES.half).toBe('Half Note');
    expect(DURATION_TEXT_NAMES.quarter).toBe('Quarter Note');
    expect(DURATION_TEXT_NAMES.eighth).toBe('Eighth Note');
    expect(DURATION_TEXT_NAMES.sixteenth).toBe('Sixteenth Note');
  });
});
