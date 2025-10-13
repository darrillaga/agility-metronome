// Click pattern options for metronome
// Each pattern defines how often the click sound should play
// Patterns are based on eighth note beats (the fundamental unit in the scheduler)

export const CLICK_PATTERNS = [
  { name: 'Off', value: 'off', beatsPerClick: 0, displayName: 'Off' },
  { name: '16th Notes', value: 'sixteenth', beatsPerClick: 0.5, displayName: '16th' },
  { name: '8th Note Triplets', value: 'eighth-triplet', beatsPerClick: 2/3, displayName: '8th Triplet' },
  { name: '8th Notes', value: 'eighth', beatsPerClick: 1, displayName: '8th' },
  { name: 'Quarter Note Triplets', value: 'quarter-triplet', beatsPerClick: 4/3, displayName: 'Quarter Triplet' },
  { name: 'Quarter Notes', value: 'quarter', beatsPerClick: 2, displayName: 'Quarter' },
  { name: 'Half Note Triplets', value: 'half-triplet', beatsPerClick: 8/3, displayName: 'Half Triplet' },
  { name: 'Half Notes', value: 'half', beatsPerClick: 4, displayName: 'Half' },
  { name: 'Whole Notes', value: 'whole', beatsPerClick: 8, displayName: 'Whole' },
];

// Default click pattern (quarter notes - standard metronome behavior)
export const DEFAULT_CLICK_PATTERN = CLICK_PATTERNS[5]; // Quarter notes
