/**
 * Note Player - Creates and plays musical notes using Web Audio API
 */

import { getTransposedFrequency } from '../../constants/instruments.js';
import {
  NOTE_VOLUME,
  NOTE_DURATION_MULTIPLIER,
  MIN_GAIN_VALUE,
  SECONDS_PER_MINUTE
} from '../../constants/audioConfig.js';

/**
 * Play a musical note with optional instrument transposition
 * @param {AudioContext} audioContext - The audio context to use
 * @param {Object} note - Note object with frequency property (concert pitch)
 * @param {Object} duration - Duration object with beats property
 * @param {number} startTime - When to start the note (in audio context time)
 * @param {number} tempo - Current tempo in BPM
 * @param {Object} [instrument] - Optional instrument configuration for transposition
 * @returns {GainNode|null} The gain node for the note (can be used to stop early)
 */
export function playNote(audioContext, note, duration, startTime, tempo, instrument = null) {
  if (!audioContext || audioContext.state !== 'running') {
    return null;
  }

  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Apply instrument transposition to concert pitch frequency
    const playbackFrequency = instrument
      ? getTransposedFrequency(note.frequency, instrument)
      : note.frequency;

    // Use sine wave for smoother musical tone
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(playbackFrequency, startTime);

    // Calculate note duration based on tempo and beats
    const beatDuration = SECONDS_PER_MINUTE / tempo;
    const noteDuration = beatDuration * duration.beats * NOTE_DURATION_MULTIPLIER;

    // Envelope: start at volume, fade out near end
    gainNode.gain.setValueAtTime(NOTE_VOLUME, startTime);
    gainNode.gain.exponentialRampToValueAtTime(MIN_GAIN_VALUE, startTime + noteDuration);

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Schedule start and stop
    oscillator.start(startTime);
    oscillator.stop(startTime + noteDuration);

    return gainNode;
  } catch (error) {
    console.error('Error playing note:', error);
    return null;
  }
}

/**
 * Calculate note duration in seconds
 * @param {Object} duration - Duration object with beats property
 * @param {number} tempo - Tempo in BPM
 * @returns {number} Duration in seconds
 */
export function calculateNoteDuration(duration, tempo) {
  const beatDuration = SECONDS_PER_MINUTE / tempo;
  return beatDuration * duration.beats;
}
