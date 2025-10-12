// Barrel export for audio engine services
export { AudioEngine } from './AudioEngine.js';
export { playNote, calculateNoteDuration } from './notePlayer.js';
export { playClick, playAccentedClick } from './clickPlayer.js';
export {
  unlockIOSSilentMode,
  stopIOSSilentModeUnlock,
  isIOSSilentModeUnlocked,
  isIOS,
  resetIOSSilentModeUnlock
} from './iosAudioUnlock.js';
