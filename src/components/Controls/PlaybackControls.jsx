import React from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

/**
 * PlaybackControls Component
 * Renders play/pause, sound, and staff toggle buttons
 *
 * @param {boolean} isPlaying - Whether the metronome is playing
 * @param {Function} onTogglePlay - Callback for play/pause button
 * @param {boolean} soundEnabled - Whether sound is enabled
 * @param {Function} onToggleSound - Callback for sound toggle
 * @param {boolean} showStaff - Whether staff notation is shown
 * @param {Function} onToggleStaff - Callback for staff toggle
 */
export const PlaybackControls = ({
  isPlaying,
  onTogglePlay,
  soundEnabled,
  onToggleSound,
  showStaff,
  onToggleStaff,
}) => {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {/* Play/Pause Button */}
      <button
        onClick={onTogglePlay}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-md"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        {isPlaying ? 'Stop' : 'Start'}
      </button>

      {/* Sound Toggle Button */}
      <button
        onClick={onToggleSound}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md ${
          soundEnabled
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-gray-400 hover:bg-gray-500 text-white'
        }`}
      >
        {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
        Sound
      </button>

      {/* Staff/Large View Toggle Button */}
      <button
        onClick={onToggleStaff}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md ${
          showStaff
            ? 'bg-purple-600 hover:bg-purple-700 text-white'
            : 'bg-gray-600 hover:bg-gray-700 text-white'
        }`}
      >
        <Music size={24} />
        {showStaff ? 'Large' : 'Staff'}
      </button>
    </div>
  );
};
