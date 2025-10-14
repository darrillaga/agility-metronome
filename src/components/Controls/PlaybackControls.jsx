import React from 'react';
import { Play, Pause, Volume2, VolumeX, FileMusic, Clock, Music4, Eye, EyeOff, Mic, MicOff, Hash } from 'lucide-react';

/**
 * PlaybackControls Component
 * Renders play/pause, sound, click, note, staff, preview, microphone and sharp/flat toggle buttons.
 *
 * @param {boolean} isPlaying - Whether the metronome is playing
 * @param {Function} onTogglePlay - Callback for play/pause button
 * @param {boolean} soundEnabled - Whether sound is enabled
 * @param {Function} onToggleSound - Callback for sound toggle
 * @param {boolean} clickEnabled - Whether click sound is enabled
 * @param {Function} onToggleClick - Callback for click toggle
 * @param {boolean} noteEnabled - Whether note sound is enabled
 * @param {Function} onToggleNote - Callback for note toggle
 * @param {boolean} showStaff - Whether staff notation is shown
 * @param {Function} onToggleStaff - Callback for staff toggle
 * @param {boolean} nextNotePreviewEnabled - Whether next note preview is enabled
 * @param {Function} onToggleNextNotePreview - Callback for next note preview toggle
 * @param {boolean} microphoneEnabled - Whether microphone is enabled
 * @param {Function} onToggleMicrophone - Callback for microphone toggle
 * @param {boolean} useFlats - Whether to display flats instead of sharps
 * @param {Function} onToggleFlats - Callback for sharp/flat toggle
 */
export const PlaybackControls = ({
  isPlaying,
  onTogglePlay,
  soundEnabled,
  onToggleSound,
  clickEnabled,
  onToggleClick,
  noteEnabled,
  onToggleNote,
  showStaff,
  onToggleStaff,
  nextNotePreviewEnabled,
  onToggleNextNotePreview,
  microphoneEnabled,
  onToggleMicrophone,
  useFlats,
  onToggleFlats,
}) => {
  return (
    <div className="space-y-3 mb-4 sm:mb-6">
      {/* Play/Pause Button - Full Width on Mobile */}
      <button
        onClick={onTogglePlay}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-semibold transition-colors shadow-md text-base sm:text-lg min-h-[48px]"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        {isPlaying ? 'Stop' : 'Start'}
      </button>

      {/* Toggle Buttons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {/* Sound Toggle Button */}
        <button
          onClick={onToggleSound}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            soundEnabled
              ? 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white'
              : 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white'
          }`}
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          <span className="hidden sm:inline">Sound</span>
        </button>

        {/* Click Toggle Button */}
        <button
          onClick={onToggleClick}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            clickEnabled
              ? 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white'
              : 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white'
          }`}
        >
          <Clock size={18} />
          <span className="hidden sm:inline">Click</span>
        </button>

        {/* Note Toggle Button */}
        <button
          onClick={onToggleNote}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            noteEnabled
              ? 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white'
              : 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white'
          }`}
        >
          <Music4 size={18} />
          <span className="hidden sm:inline">Note</span>
        </button>

        {/* Staff/Large View Toggle Button */}
        <button
          onClick={onToggleStaff}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            showStaff
              ? 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white'
              : 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white'
          }`}
        >
          <FileMusic size={18} />
          <span className="hidden sm:inline whitespace-nowrap">{showStaff ? 'Large' : 'Staff'}</span>
        </button>

        {/* Preview Toggle Button */}
        <button
          onClick={onToggleNextNotePreview}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            nextNotePreviewEnabled
              ? 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white'
              : 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white'
          }`}
        >
          {nextNotePreviewEnabled ? <Eye size={18} /> : <EyeOff size={18} />}
          <span className="hidden sm:inline">Preview</span>
        </button>

        {/* Microphone Toggle Button */}
        <button
          onClick={onToggleMicrophone}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            microphoneEnabled
              ? 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white'
              : 'bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white'
          }`}
        >
          {microphoneEnabled ? <Mic size={18} /> : <MicOff size={18} />}
          <span className="hidden sm:inline">Mic</span>
        </button>

        {/* Sharp/Flat Toggle Button */}
        <button
          onClick={onToggleFlats}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-lg font-semibold transition-colors shadow-md text-xs sm:text-base min-h-[48px] ${
            useFlats
              ? 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white'
              : 'bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 text-white'
          }`}
        >
          {useFlats ? (
            <span className="text-lg font-bold">♭</span>
          ) : (
            <Hash size={18} />
          )}
          <span className="hidden sm:inline">{useFlats ? 'Flats' : 'Sharps'}</span>
        </button>
      </div>
    </div>
  );
};
