/**
 * Click Player - Creates metronome click sounds
 */

import {
  CLICK_FREQUENCY,
  CLICK_VOLUME,
  CLICK_DURATION,
  MIN_GAIN_VALUE,
  ACCENTED_CLICK_FREQUENCY,
  ACCENTED_CLICK_VOLUME,
  ACCENTED_CLICK_DURATION
} from '../../constants/audioConfig.js';

/**
 * Play a metronome click sound
 * @param {AudioContext} audioContext - The audio context to use
 * @param {number} startTime - When to play the click (in audio context time)
 * @param {Object} options - Click sound options
 * @param {number} options.frequency - Click frequency in Hz
 * @param {number} options.volume - Click volume 0-1
 * @param {number} options.duration - Click duration in seconds
 * @returns {OscillatorNode|null} The oscillator node
 */
export function playClick(
  audioContext,
  startTime,
  { frequency = CLICK_FREQUENCY, volume = CLICK_VOLUME, duration = CLICK_DURATION } = {}
) {
  if (!audioContext || audioContext.state !== 'running') {
    return null;
  }

  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Square wave for distinctive click sound
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(frequency, startTime);

    // Quick fade out for percussive effect
    gainNode.gain.setValueAtTime(volume, startTime);
    gainNode.gain.exponentialRampToValueAtTime(MIN_GAIN_VALUE, startTime + duration);

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Schedule playback
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);

    return oscillator;
  } catch (error) {
    console.error('Error playing click:', error);
    return null;
  }
}

/**
 * Play an accented metronome click (for downbeats)
 * @param {AudioContext} audioContext - The audio context to use
 * @param {number} startTime - When to play the click
 * @returns {OscillatorNode|null} The oscillator node
 */
export function playAccentedClick(audioContext, startTime) {
  return playClick(audioContext, startTime, {
    frequency: ACCENTED_CLICK_FREQUENCY,
    volume: ACCENTED_CLICK_VOLUME,
    duration: ACCENTED_CLICK_DURATION,
  });
}
