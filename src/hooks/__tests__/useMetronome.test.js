import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMetronome } from '../useMetronome.js';

describe('useMetronome', () => {
  const mockNotes = [
    { name: 'C4', frequency: 261.63 },
    { name: 'D4', frequency: 293.66 },
    { name: 'E4', frequency: 329.63 },
  ];

  const mockDurations = [
    { name: 'quarter', beats: 2 },
    { name: 'half', beats: 4 },
  ];

  describe('Initial State', () => {
    it('should initialize with default values', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      expect(result.current.tempo).toBe(120);
      expect(result.current.isPlaying).toBe(false);
      expect(result.current.soundEnabled).toBe(true);
      expect(result.current.showStaff).toBe(false);
      expect(result.current.currentNote).toBeTruthy();
      expect(result.current.currentDuration).toBeTruthy();
      expect(result.current.currentBeat).toBe(0);
      expect(result.current.rangeMin).toBe(0);
      expect(result.current.rangeMax).toBe(2); // mockNotes.length - 1
    });

    it('should initialize with random note from provided notes', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      expect(mockNotes).toContainEqual(result.current.currentNote);
    });

    it('should initialize with random duration from provided durations', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      expect(mockDurations).toContainEqual(result.current.currentDuration);
    });
  });

  describe('Tempo Control', () => {
    it('should update tempo', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateTempo(140);
      });

      expect(result.current.tempo).toBe(140);
    });

    it('should handle tempo as string (from input)', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateTempo('160');
      });

      expect(result.current.tempo).toBe(160);
    });

    it('should clamp tempo to valid range', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateTempo(300); // Too high
      });

      expect(result.current.tempo).toBe(240); // Max tempo

      act(() => {
        result.current.updateTempo(10); // Too low
      });

      expect(result.current.tempo).toBe(40); // Min tempo
    });

    it('should handle invalid tempo input', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      const originalTempo = result.current.tempo;

      act(() => {
        result.current.updateTempo('not a number');
      });

      // Should fall back to default or remain unchanged
      expect(result.current.tempo).toBeGreaterThanOrEqual(40);
      expect(result.current.tempo).toBeLessThanOrEqual(240);
    });
  });

  describe('Play/Pause Control', () => {
    it('should toggle play state from stopped to playing', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      expect(result.current.isPlaying).toBe(false);

      act(() => {
        result.current.togglePlayPause();
      });

      expect(result.current.isPlaying).toBe(true);
    });

    it('should toggle play state from playing to stopped', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.togglePlayPause(); // Start
      });

      expect(result.current.isPlaying).toBe(true);

      act(() => {
        result.current.togglePlayPause(); // Stop
      });

      expect(result.current.isPlaying).toBe(false);
    });

    it('should reset beat to 0 when stopping', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.handleBeatChange(5); // Set beat to 5
      });

      expect(result.current.currentBeat).toBe(5);

      act(() => {
        result.current.togglePlayPause(); // Start
      });

      act(() => {
        result.current.togglePlayPause(); // Stop
      });

      expect(result.current.currentBeat).toBe(0);
    });
  });

  describe('Sound Control', () => {
    it('should toggle sound from enabled to disabled', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      expect(result.current.soundEnabled).toBe(true);

      act(() => {
        result.current.toggleSound();
      });

      expect(result.current.soundEnabled).toBe(false);
    });

    it('should toggle sound from disabled to enabled', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.toggleSound(); // Disable
      });

      expect(result.current.soundEnabled).toBe(false);

      act(() => {
        result.current.toggleSound(); // Enable
      });

      expect(result.current.soundEnabled).toBe(true);
    });
  });

  describe('Staff Display Control', () => {
    it('should toggle staff display from hidden to visible', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      expect(result.current.showStaff).toBe(false);

      act(() => {
        result.current.toggleStaff();
      });

      expect(result.current.showStaff).toBe(true);
    });

    it('should toggle staff display from visible to hidden', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.toggleStaff(); // Show
      });

      expect(result.current.showStaff).toBe(true);

      act(() => {
        result.current.toggleStaff(); // Hide
      });

      expect(result.current.showStaff).toBe(false);
    });
  });

  describe('Note Range Control', () => {
    it('should update range min', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateRangeMin(1);
      });

      expect(result.current.rangeMin).toBe(1);
    });

    it('should update range max', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateRangeMax(1);
      });

      expect(result.current.rangeMax).toBe(1);
    });

    it('should ensure min does not exceed max', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateRangeMax(1);
        result.current.updateRangeMin(5); // Try to set min > max
      });

      expect(result.current.rangeMin).toBeLessThanOrEqual(result.current.rangeMax);
    });

    it('should ensure max does not go below min', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.updateRangeMin(2);
        result.current.updateRangeMax(0); // Try to set max < min
      });

      expect(result.current.rangeMax).toBeGreaterThanOrEqual(result.current.rangeMin);
    });
  });

  describe('Note and Duration Updates', () => {
    it('should update current note', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      const newNote = mockNotes[1];

      act(() => {
        result.current.handleNoteChange(newNote);
      });

      expect(result.current.currentNote).toEqual(newNote);
    });

    it('should update current duration', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      const newDuration = mockDurations[1];

      act(() => {
        result.current.handleDurationChange(newDuration);
      });

      expect(result.current.currentDuration).toEqual(newDuration);
    });

    it('should update current beat', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.handleBeatChange(7);
      });

      expect(result.current.currentBeat).toBe(7);
    });
  });

  describe('Callback Stability', () => {
    it('should maintain stable callback references', () => {
      const { result, rerender } = renderHook(() => useMetronome(mockNotes, mockDurations));

      const callbacks = {
        updateTempo: result.current.updateTempo,
        togglePlayPause: result.current.togglePlayPause,
        toggleSound: result.current.toggleSound,
        toggleStaff: result.current.toggleStaff,
        updateRangeMin: result.current.updateRangeMin,
        updateRangeMax: result.current.updateRangeMax,
        handleNoteChange: result.current.handleNoteChange,
        handleDurationChange: result.current.handleDurationChange,
        handleBeatChange: result.current.handleBeatChange,
      };

      // Trigger re-render
      rerender();

      // Callbacks should remain the same
      expect(result.current.updateTempo).toBe(callbacks.updateTempo);
      expect(result.current.togglePlayPause).toBe(callbacks.togglePlayPause);
      expect(result.current.toggleSound).toBe(callbacks.toggleSound);
      expect(result.current.toggleStaff).toBe(callbacks.toggleStaff);
      expect(result.current.updateRangeMin).toBe(callbacks.updateRangeMin);
      expect(result.current.updateRangeMax).toBe(callbacks.updateRangeMax);
      expect(result.current.handleNoteChange).toBe(callbacks.handleNoteChange);
      expect(result.current.handleDurationChange).toBe(callbacks.handleDurationChange);
      expect(result.current.handleBeatChange).toBe(callbacks.handleBeatChange);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty notes array gracefully', () => {
      const { result } = renderHook(() => useMetronome([], mockDurations));

      // Should still initialize without error
      expect(result.current.rangeMin).toBe(0);
      expect(result.current.rangeMax).toBe(-1); // length - 1 = -1
    });

    it('should handle single note', () => {
      const singleNote = [mockNotes[0]];
      const { result } = renderHook(() => useMetronome(singleNote, mockDurations));

      expect(result.current.rangeMin).toBe(0);
      expect(result.current.rangeMax).toBe(0);
      expect(result.current.currentNote).toEqual(singleNote[0]);
    });

    it('should handle single duration', () => {
      const singleDuration = [mockDurations[0]];
      const { result } = renderHook(() => useMetronome(mockNotes, singleDuration));

      expect(result.current.currentDuration).toEqual(singleDuration[0]);
    });

    it('should handle rapid state changes', () => {
      const { result } = renderHook(() => useMetronome(mockNotes, mockDurations));

      act(() => {
        result.current.togglePlayPause();
        result.current.toggleSound();
        result.current.updateTempo(180);
        result.current.updateRangeMin(1);
        result.current.updateRangeMax(2);
        result.current.toggleStaff();
      });

      expect(result.current.isPlaying).toBe(true);
      expect(result.current.soundEnabled).toBe(false);
      expect(result.current.tempo).toBe(180);
      expect(result.current.rangeMin).toBe(1);
      expect(result.current.rangeMax).toBe(2);
      expect(result.current.showStaff).toBe(true);
    });
  });
});
