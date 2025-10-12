/**
 * Note Player - Creates and plays musical notes using Web Audio API
 */

/**
 * Play a musical note
 * @param {AudioContext} audioContext - The audio context to use
 * @param {Object} note - Note object with frequency property
 * @param {Object} duration - Duration object with beats property
 * @param {number} startTime - When to start the note (in audio context time)
 * @param {number} tempo - Current tempo in BPM
 * @returns {GainNode|null} The gain node for the note (can be used to stop early)
 */
export function playNote(audioContext, note, duration, startTime, tempo) {
  if (!audioContext || audioContext.state !== 'running') {
    return null;
  }

  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Use sine wave for smoother musical tone
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(note.frequency, startTime);

    // Calculate note duration based on tempo and beats
    const beatDuration = 60.0 / tempo;
    const noteDuration = beatDuration * duration.beats * 0.9; // 90% to create slight separation

    // Envelope: start at volume, fade out near end
    gainNode.gain.setValueAtTime(0.25, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + noteDuration);

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
  const beatDuration = 60.0 / tempo;
  return beatDuration * duration.beats;
}
