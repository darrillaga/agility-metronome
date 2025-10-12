import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNoteScheduler } from '../useNoteScheduler.js';

describe('useNoteScheduler', () => {
  const mockNotes = [
    { name: 'C4', frequency: 261.63 },
    { name: 'D4', frequency: 293.66 },
    { name: 'E4', frequency: 329.63 },
  ];

  const mockDurations = [
    { name: 'quarter', beats: 2 },
    { name: 'half', beats: 4 },
  ];

  let onNoteChangeMock;
  let onDurationChangeMock;
  let onBeatMock;
  let playClickMock;
  let playNoteMock;

  beforeEach(() => {
    onNoteChangeMock = vi.fn();
    onDurationChangeMock = vi.fn();
    onBeatMock = vi.fn();
    playClickMock = vi.fn();
    playNoteMock = vi.fn();

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  describe('Initialization', () => {
    it('should initialize scheduler and beat tracker', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      expect(result.current.isScheduling()).toBe(false);
      expect(result.current.getCurrentBeat()).toBe(0);
    });

    it('should provide stable function references', () => {
      const { result, rerender } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const funcs = {
        startScheduler: result.current.startScheduler,
        stopScheduler: result.current.stopScheduler,
        isScheduling: result.current.isScheduling,
        getCurrentBeat: result.current.getCurrentBeat,
      };

      rerender();

      // Functions should remain stable (useCallback)
      expect(result.current.stopScheduler).toBe(funcs.stopScheduler);
      expect(result.current.isScheduling).toBe(funcs.isScheduling);
      expect(result.current.getCurrentBeat).toBe(funcs.getCurrentBeat);
    });
  });

  describe('Starting Scheduler', () => {
    it('should start scheduler with correct parameters', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;
      const rangeMin = 0;
      const rangeMax = 2;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          rangeMin,
          rangeMax,
          playClickMock,
          playNoteMock
        );
      });

      expect(result.current.isScheduling()).toBe(true);
    });

    it('should trigger beat callback on schedule', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      // Fast forward to trigger scheduler interval
      await act(async () => {
        vi.advanceTimersByTime(30); // Scheduler interval is 25ms
      });

      expect(onBeatMock).toHaveBeenCalled();
    });

    it('should play click on every beat', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      expect(playClickMock).toHaveBeenCalled();
    });

    it('should call note change callback when starting new note', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // Should change note on first beat (note start)
      expect(onNoteChangeMock).toHaveBeenCalled();
      expect(onDurationChangeMock).toHaveBeenCalled();
    });

    it('should play note sound at note start', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      expect(playNoteMock).toHaveBeenCalled();
      // Should be called with (note, duration, time, tempo)
      expect(playNoteMock.mock.calls[0]).toHaveLength(4);
    });

    it('should respect note range when selecting notes', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;
      const rangeMin = 1; // Only D4 and E4
      const rangeMax = 2;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          rangeMin,
          rangeMax,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // Note change should have been called
      expect(onNoteChangeMock).toHaveBeenCalled();

      // Get the note that was selected
      const selectedNote = onNoteChangeMock.mock.calls[0][0];
      const selectedIndex = mockNotes.findIndex(n => n.name === selectedNote.name);

      // Should be within range
      expect(selectedIndex).toBeGreaterThanOrEqual(rangeMin);
      expect(selectedIndex).toBeLessThanOrEqual(rangeMax);
    });
  });

  describe('Stopping Scheduler', () => {
    it('should stop scheduler', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      expect(result.current.isScheduling()).toBe(true);

      act(() => {
        result.current.stopScheduler();
      });

      expect(result.current.isScheduling()).toBe(false);
    });

    it('should reset beat tracker when stopping', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(100); // Let some beats pass
      });

      // Beat should have incremented
      const beatBeforeStop = result.current.getCurrentBeat();
      expect(beatBeforeStop).toBeGreaterThan(0);

      act(() => {
        result.current.stopScheduler();
      });

      // Beat should reset to 0
      expect(result.current.getCurrentBeat()).toBe(0);
    });

    it('should handle stop when not running', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      expect(() => {
        act(() => {
          result.current.stopScheduler();
        });
      }).not.toThrow();
    });
  });

  describe('Beat Tracking', () => {
    it('should track current beat number', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      expect(result.current.getCurrentBeat()).toBe(0);

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // Beat should have incremented
      expect(result.current.getCurrentBeat()).toBeGreaterThan(0);
    });

    it('should report beat number in callback', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      act(() => {
        result.current.startScheduler(
          currentTime,
          tempo,
          currentNote,
          0,
          2,
          playClickMock,
          playNoteMock
        );
      });

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      expect(onBeatMock).toHaveBeenCalled();
      // First call should be with beat 0
      expect(onBeatMock.mock.calls[0][0]).toBe(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle null callbacks gracefully', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: null,
          onDurationChange: null,
          onBeat: null,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      expect(() => {
        act(() => {
          result.current.startScheduler(
            currentTime,
            tempo,
            currentNote,
            0,
            2,
            playClickMock,
            playNoteMock
          );
        });
      }).not.toThrow();

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // Should still call playClick and playNote
      expect(playClickMock).toHaveBeenCalled();
      expect(playNoteMock).toHaveBeenCalled();
    });

    it('should handle null play functions gracefully', async () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      expect(() => {
        act(() => {
          result.current.startScheduler(
            currentTime,
            tempo,
            currentNote,
            0,
            2,
            null, // No click
            null  // No note
          );
        });
      }).not.toThrow();

      await act(async () => {
        vi.advanceTimersByTime(30);
      });

      // Callbacks should still be called
      expect(onBeatMock).toHaveBeenCalled();
      expect(onNoteChangeMock).toHaveBeenCalled();
    });

    it('should handle rapid start/stop cycles', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      const currentNote = mockNotes[0];
      const currentTime = 0;
      const tempo = 120;

      expect(() => {
        act(() => {
          result.current.startScheduler(currentTime, tempo, currentNote, 0, 2, playClickMock, playNoteMock);
          result.current.stopScheduler();
          result.current.startScheduler(currentTime, tempo, currentNote, 0, 2, playClickMock, playNoteMock);
          result.current.stopScheduler();
          result.current.startScheduler(currentTime, tempo, currentNote, 0, 2, playClickMock, playNoteMock);
          result.current.stopScheduler();
        });
      }).not.toThrow();
    });

    it('should handle dependency changes', () => {
      const { result, rerender } = renderHook(
        ({ notes, durations }) =>
          useNoteScheduler({
            notes,
            durations,
            onNoteChange: onNoteChangeMock,
            onDurationChange: onDurationChangeMock,
            onBeat: onBeatMock,
          }),
        { initialProps: { notes: mockNotes, durations: mockDurations } }
      );

      const startScheduler1 = result.current.startScheduler;

      // Change dependencies
      const newNotes = [...mockNotes, { name: 'F4', frequency: 349.23 }];
      rerender({ notes: newNotes, durations: mockDurations });

      // startScheduler should be recreated due to dependency change
      expect(result.current.startScheduler).not.toBe(startScheduler1);
    });
  });

  describe('isScheduling State', () => {
    it('should return false initially', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      expect(result.current.isScheduling()).toBe(false);
    });

    it('should return true when scheduling', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      act(() => {
        result.current.startScheduler(0, 120, mockNotes[0], 0, 2, playClickMock, playNoteMock);
      });

      expect(result.current.isScheduling()).toBe(true);
    });

    it('should return false after stopping', () => {
      const { result } = renderHook(() =>
        useNoteScheduler({
          notes: mockNotes,
          durations: mockDurations,
          onNoteChange: onNoteChangeMock,
          onDurationChange: onDurationChangeMock,
          onBeat: onBeatMock,
        })
      );

      act(() => {
        result.current.startScheduler(0, 120, mockNotes[0], 0, 2, playClickMock, playNoteMock);
      });

      expect(result.current.isScheduling()).toBe(true);

      act(() => {
        result.current.stopScheduler();
      });

      expect(result.current.isScheduling()).toBe(false);
    });
  });
});
