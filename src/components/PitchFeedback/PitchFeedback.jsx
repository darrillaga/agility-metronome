import React from 'react';
import { Mic, AlertCircle } from 'lucide-react';

/**
 * PitchFeedback Component
 * Displays real-time pitch detection feedback from microphone input
 *
 * @param {boolean} microphoneEnabled - Whether microphone is active
 * @param {Object} detectedPitch - Detected pitch information
 * @param {string} microphoneError - Error message if microphone failed
 */
export const PitchFeedback = ({ microphoneEnabled, detectedPitch, microphoneError }) => {
  // Don't render if microphone is not enabled
  if (!microphoneEnabled) {
    return null;
  }

  // Show error state
  if (microphoneError) {
    return (
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-3 sm:p-4">
        <div className="flex items-center gap-2 text-red-700">
          <AlertCircle size={20} />
          <span className="text-sm sm:text-base font-semibold">Microphone Error</span>
        </div>
        <p className="text-xs sm:text-sm text-red-600 mt-1">{microphoneError}</p>
      </div>
    );
  }

  // Show listening state with detected pitch
  return (
    <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-lg p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Mic size={20} className="text-red-600" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <span className="text-sm sm:text-base font-semibold text-red-700">Listening</span>
        </div>

        {detectedPitch?.note && (
          <div className="text-right">
            <div className="text-lg sm:text-xl font-bold text-red-700">
              {detectedPitch.note.fullName}
            </div>
            <div className="text-xs sm:text-sm text-red-600">
              {detectedPitch.frequency.toFixed(1)} Hz
              {detectedPitch.note.cents !== 0 && (
                <span className="ml-2">
                  {detectedPitch.note.cents > 0 ? '+' : ''}
                  {detectedPitch.note.cents} cents
                </span>
              )}
            </div>
          </div>
        )}

        {!detectedPitch?.note && (
          <div className="text-xs sm:text-sm text-red-600 italic">
            No pitch detected
          </div>
        )}
      </div>

      {/* Pitch accuracy indicator */}
      {detectedPitch?.note && (
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-red-600 mb-1">
            <span>Flat</span>
            <span className="font-semibold">Tuning</span>
            <span>Sharp</span>
          </div>
          <div className="relative h-2 bg-red-200 rounded-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-0.5 h-full bg-red-800"></div>
            </div>
            <div
              className="absolute h-full bg-red-600 transition-all duration-150"
              style={{
                left: '50%',
                transform: `translateX(${detectedPitch.note.cents / 2}%)`,
                width: '8px',
                borderRadius: '9999px',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
