import { unlockIOSSilentMode, stopIOSSilentModeUnlock, isIOS } from './iosAudioUnlock';

/**
 * AudioEngine - Manages Web Audio API AudioContext lifecycle
 * Provides a clean interface for audio initialization and state management
 */
export class AudioEngine {
  constructor() {
    this.context = null;
    this.isInitialized = false;
    this.iosSilentModeUnlocked = false;
  }

  /**
   * Initialize the AudioContext
   * Creates a new AudioContext if one doesn't exist
   * @param {boolean} enableIOSSilentMode - Enable iOS silent mode workaround (default: true)
   * @returns {Promise<boolean>} True if initialized successfully
   */
  async initialize(enableIOSSilentMode = true) {
    try {
      if (!this.context) {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
      }

      const resumed = await this.resume();

      // On iOS, enable silent mode workaround (must be called in user gesture)
      if (enableIOSSilentMode && isIOS() && !this.iosSilentModeUnlocked) {
        this.iosSilentModeUnlocked = await unlockIOSSilentMode();
        if (this.iosSilentModeUnlocked) {
          console.log('[AudioEngine] iOS silent mode enabled - audio will work even when device is muted');
        }
      }

      this.isInitialized = resumed;
      return resumed;
    } catch (error) {
      console.error('Failed to initialize AudioContext:', error);
      return false;
    }
  }

  /**
   * Resume the AudioContext if suspended
   * Android/iOS browsers often suspend audio contexts
   * @returns {Promise<boolean>} True if context is running
   */
  async resume() {
    if (!this.context) {
      return false;
    }

    if (this.context.state === 'suspended') {
      try {
        await this.context.resume();
      } catch (error) {
        console.error('Failed to resume AudioContext:', error);
        return false;
      }
    }

    return this.context.state === 'running';
  }

  /**
   * Get the current time from the AudioContext
   * @returns {number} Current time in seconds
   */
  getCurrentTime() {
    return this.context?.currentTime || 0;
  }

  /**
   * Check if the audio context is ready for playback
   * @returns {boolean} True if context exists and is running
   */
  isReady() {
    return this.context !== null && this.context.state === 'running';
  }

  /**
   * Get the AudioContext state
   * @returns {string} 'suspended', 'running', 'closed', or null
   */
  getState() {
    return this.context?.state || null;
  }

  /**
   * Close the AudioContext and release resources
   * Should be called when the audio engine is no longer needed
   */
  async close() {
    // Stop iOS silent mode unlock if active
    if (this.iosSilentModeUnlocked) {
      stopIOSSilentModeUnlock();
      this.iosSilentModeUnlocked = false;
    }

    if (this.context) {
      try {
        await this.context.close();
        this.context = null;
        this.isInitialized = false;
      } catch (error) {
        console.error('Failed to close AudioContext:', error);
      }
    }
  }

  /**
   * Get the AudioContext destination node
   * Used for connecting audio nodes
   * @returns {AudioDestinationNode|null}
   */
  getDestination() {
    return this.context?.destination || null;
  }
}
