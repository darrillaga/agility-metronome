/**
 * iOS Silent Mode Audio Unlock
 *
 * Enables Web Audio API to work when iOS device is in silent mode.
 *
 * Background:
 * - On iOS, Web Audio API is muted when the silent/ringer switch is OFF
 * - HTML5 <audio> elements still work in silent mode
 * - Playing a looping silent HTML5 audio forces iOS to treat all audio as "media"
 *   instead of "ringer" audio, allowing Web Audio to work in silent mode
 *
 * This is how YouTube, Spotify, and other media apps work in silent mode.
 *
 * Trade-offs:
 * - iOS will show play/pause controls on lock screen and notification center
 * - Minimal battery impact from silent looping audio
 */

let silentAudioElement = null;
let isUnlocked = false;

/**
 * Detect if the device is iOS (iPhone, iPad, iPod)
 * @returns {boolean} True if iOS device
 */
function isIOSDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/**
 * Create and start a looping silent audio element
 * This must be called within a user gesture (button click, touch event)
 *
 * @returns {Promise<boolean>} True if successful
 */
export async function unlockIOSSilentMode() {
  // Skip if not iOS or already unlocked
  if (!isIOSDevice() || isUnlocked) {
    return isUnlocked;
  }

  try {
    console.log('[iOS Audio] Unlocking silent mode...');

    // Create silent audio element if it doesn't exist
    if (!silentAudioElement) {
      silentAudioElement = new Audio();

      // Short silent MP3 file (base64 encoded)
      // This is a ~1 second silent audio file
      const silentMP3 =
        'data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';

      silentAudioElement.src = silentMP3;
      silentAudioElement.loop = true;
      silentAudioElement.volume = 0.01; // Very low volume (almost silent)

      // Prevent AirPlay menu from showing this audio
      silentAudioElement.setAttribute('x-webkit-airplay', 'deny');

      // Make it invisible
      silentAudioElement.style.display = 'none';

      // Add to DOM to ensure it stays alive
      document.body.appendChild(silentAudioElement);
    }

    // Play the silent audio (must be in user gesture)
    const playPromise = silentAudioElement.play();

    if (playPromise !== undefined) {
      await playPromise;
      console.log('[iOS Audio] Silent mode unlocked successfully');
      isUnlocked = true;
      return true;
    } else {
      console.warn('[iOS Audio] Play returned undefined');
      return false;
    }
  } catch (error) {
    console.error('[iOS Audio] Failed to unlock silent mode:', error);
    return false;
  }
}

/**
 * Stop and clean up the silent audio element
 */
export function stopIOSSilentModeUnlock() {
  if (silentAudioElement) {
    try {
      silentAudioElement.pause();
      silentAudioElement.currentTime = 0;

      if (silentAudioElement.parentNode) {
        silentAudioElement.parentNode.removeChild(silentAudioElement);
      }

      silentAudioElement = null;
      isUnlocked = false;

      console.log('[iOS Audio] Silent mode unlock stopped');
    } catch (error) {
      console.error('[iOS Audio] Error stopping silent audio:', error);
    }
  }
}

/**
 * Check if iOS silent mode has been unlocked
 * @returns {boolean} True if unlocked
 */
export function isIOSSilentModeUnlocked() {
  return isUnlocked;
}

/**
 * Check if device is iOS
 * @returns {boolean} True if iOS device
 */
export function isIOS() {
  return isIOSDevice();
}

/**
 * Reset unlock state (useful for testing)
 */
export function resetIOSSilentModeUnlock() {
  stopIOSSilentModeUnlock();
  isUnlocked = false;
}
