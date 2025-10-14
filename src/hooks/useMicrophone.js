import { useRef, useCallback, useState } from 'react';
import { PitchDetector } from '../services/pitchDetection/PitchDetector';

/**
 * Custom hook for managing microphone input and pitch detection
 * Provides microphone access, pitch detection, and feedback
 *
 * @param {AudioContext} audioContext - Web Audio API context
 * @returns {Object} Microphone methods and state
 */
export function useMicrophone(audioContext) {
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  const [microphoneError, setMicrophoneError] = useState(null);
  const [detectedPitch, setDetectedPitch] = useState(null);

  const streamRef = useRef(null);
  const pitchDetectorRef = useRef(null);

  /**
   * Request microphone access and start pitch detection
   */
  const startMicrophone = useCallback(async () => {
    try {
      setMicrophoneError(null);

      // Check if browser supports getUserMedia
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Microphone access is not supported in this browser');
      }

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        }
      });

      streamRef.current = stream;

      // Create pitch detector
      const pitchDetector = new PitchDetector(audioContext, (result) => {
        setDetectedPitch(result);
      });

      // Initialize with stream
      const initialized = pitchDetector.initialize(stream);
      if (!initialized) {
        throw new Error('Failed to initialize pitch detector');
      }

      pitchDetectorRef.current = pitchDetector;

      // Start detection
      pitchDetector.start();

      setIsMicrophoneActive(true);
      console.log('[useMicrophone] Microphone started successfully');
      return true;

    } catch (error) {
      console.error('[useMicrophone] Failed to start microphone:', error);
      setMicrophoneError(error.message);
      setIsMicrophoneActive(false);
      return false;
    }
  }, [audioContext]);

  /**
   * Stop microphone and pitch detection
   */
  const stopMicrophone = useCallback(() => {
    try {
      // Stop pitch detector
      if (pitchDetectorRef.current) {
        pitchDetectorRef.current.dispose();
        pitchDetectorRef.current = null;
      }

      // Stop all tracks in the stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }

      setIsMicrophoneActive(false);
      setDetectedPitch(null);
      console.log('[useMicrophone] Microphone stopped');
    } catch (error) {
      console.error('[useMicrophone] Error stopping microphone:', error);
    }
  }, []);

  /**
   * Toggle microphone on/off
   */
  const toggleMicrophone = useCallback(async () => {
    if (isMicrophoneActive) {
      stopMicrophone();
      return false;
    } else {
      return await startMicrophone();
    }
  }, [isMicrophoneActive, startMicrophone, stopMicrophone]);

  /**
   * Clear microphone error
   */
  const clearError = useCallback(() => {
    setMicrophoneError(null);
  }, []);

  return {
    isMicrophoneActive,
    microphoneError,
    detectedPitch,
    startMicrophone,
    stopMicrophone,
    toggleMicrophone,
    clearError,
  };
}
