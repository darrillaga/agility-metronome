/**
 * Click Player - Creates metronome click sounds
 */

/**
 * Play a metronome click sound
 * @param {AudioContext} audioContext - The audio context to use
 * @param {number} startTime - When to play the click (in audio context time)
 * @param {Object} options - Click sound options
 * @param {number} options.frequency - Click frequency in Hz (default: 1000)
 * @param {number} options.volume - Click volume 0-1 (default: 0.15)
 * @param {number} options.duration - Click duration in seconds (default: 0.03)
 * @returns {OscillatorNode|null} The oscillator node
 */
export function playClick(
  audioContext,
  startTime,
  { frequency = 1000, volume = 0.15, duration = 0.03 } = {}
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
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

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
    frequency: 1200,
    volume: 0.25,
    duration: 0.04,
  });
}
