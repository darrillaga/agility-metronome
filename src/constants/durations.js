// Note duration types with beat counts
// Beat counts represent subdivisions in the metronome cycle

export const DURATIONS = [
  { name: 'whole', beats: 8 },
  { name: 'half', beats: 4 },
  { name: 'quarter', beats: 2 },
  { name: 'eighth', beats: 1 },
  { name: 'sixteenth', beats: 0.5 },
];

// Duration display names with musical symbols
export const DURATION_NAMES = {
  whole: '𝅝',
  half: '𝅗𝅥',
  quarter: '♩',
  eighth: '♪',
  sixteenth: '𝅘𝅥𝅯',
};

// Duration text names for accessibility and tooltips
export const DURATION_TEXT_NAMES = {
  whole: 'Whole Note',
  half: 'Half Note',
  quarter: 'Quarter Note',
  eighth: 'Eighth Note',
  sixteenth: 'Sixteenth Note',
};
