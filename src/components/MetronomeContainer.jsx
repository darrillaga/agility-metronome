import React from 'react';
import { NoteDisplay } from './NoteDisplay';
import { PlaybackControls } from './Controls';
import { TempoSlider } from './Controls';
import { NoteRangeSelector } from './Controls';
import { ClickPatternSelector } from './Controls';
import { InstrumentSelector } from './Controls';
import { PitchFeedback } from './PitchFeedback';

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
    nextNote,
    currentDuration,
    showStaff,
    isPlaying,
    soundEnabled,
    clickEnabled,
    noteEnabled,
    clickPattern,
    instrument,
    nextNotePreviewEnabled,
    tempo,
    rangeMin,
    rangeMax,
    microphoneEnabled,
    detectedPitch,
    microphoneError,
  } = state;

  const {
    onTogglePlay,
    onToggleSound,
    onToggleClick,
    onToggleNote,
    onToggleStaff,
    onClickPatternChange,
    onInstrumentChange,
    onToggleNextNotePreview,
    onTempoChange,
    onRangeMinChange,
    onRangeMaxChange,
    onToggleMicrophone,
  } = handlers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          {instrument.displayName}
        </h1>

        {/* Instrument Selector */}
        <InstrumentSelector
          instrument={instrument}
          onInstrumentChange={onInstrumentChange}
          disabled={isPlaying}
        />

        {/* Note Display */}
        <NoteDisplay
          note={currentNote}
          nextNote={nextNote}
          duration={currentDuration}
          showStaff={showStaff}
          nextNotePreviewEnabled={nextNotePreviewEnabled}
          instrument={instrument}
        />

        {/* Controls */}
        <div className="space-y-4 sm:space-y-6">
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
            nextNotePreviewEnabled={nextNotePreviewEnabled}
            onToggleNextNotePreview={onToggleNextNotePreview}
            microphoneEnabled={microphoneEnabled}
            onToggleMicrophone={onToggleMicrophone}
          />

          {/* Pitch Feedback */}
          <PitchFeedback
            microphoneEnabled={microphoneEnabled}
            detectedPitch={detectedPitch}
            microphoneError={microphoneError}
          />

          {/* Tempo Slider */}
          <TempoSlider
            tempo={tempo}
            onTempoChange={onTempoChange}
            disabled={isPlaying}
          />

          {/* Click Pattern Selector */}
          <ClickPatternSelector
            clickPattern={clickPattern}
            onClickPatternChange={onClickPatternChange}
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
