import React from 'react';
import { NoteDisplay } from './NoteDisplay';
import { PlaybackControls } from './Controls';
import { TempoSlider } from './Controls';
import { NoteRangeSelector } from './Controls';

/**
 * MetronomeContainer Component
 * Main container that orchestrates all UI components
 *
 * @param {Object} state - Metronome state
 * @param {Object} handlers - Event handlers
 * @param {Array} notes - Available notes
 */
export const MetronomeContainer = ({ state, handlers, notes }) => {
  const {
    currentNote,
    currentDuration,
    showStaff,
    isPlaying,
    soundEnabled,
    clickEnabled,
    noteEnabled,
    tempo,
    rangeMin,
    rangeMax,
  } = state;

  const {
    onTogglePlay,
    onToggleSound,
    onToggleClick,
    onToggleNote,
    onToggleStaff,
    onTempoChange,
    onRangeMinChange,
    onRangeMaxChange,
  } = handlers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          B♭ Trumpet Agility Metronome
        </h1>

        {/* Note Display */}
        <NoteDisplay
          note={currentNote}
          duration={currentDuration}
          showStaff={showStaff}
        />

        {/* Controls */}
        <div className="space-y-6">
          {/* Playback Controls */}
          <PlaybackControls
            isPlaying={isPlaying}
            onTogglePlay={onTogglePlay}
            soundEnabled={soundEnabled}
            onToggleSound={onToggleSound}
            clickEnabled={clickEnabled}
            onToggleClick={onToggleClick}
            noteEnabled={noteEnabled}
            onToggleNote={onToggleNote}
            showStaff={showStaff}
            onToggleStaff={onToggleStaff}
          />

          {/* Tempo Slider */}
          <TempoSlider
            tempo={tempo}
            onTempoChange={onTempoChange}
            disabled={isPlaying}
          />

          {/* Note Range Selector */}
          <NoteRangeSelector
            notes={notes}
            rangeMin={rangeMin}
            rangeMax={rangeMax}
            onRangeMinChange={onRangeMinChange}
            onRangeMaxChange={onRangeMaxChange}
            disabled={isPlaying}
          />
        </div>
      </div>
    </div>
  );
};
