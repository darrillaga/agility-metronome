import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Scheduler } from '../scheduler/Scheduler';
import { BeatTracker } from '../scheduler/beatTracker';

describe('Scheduler', () => {
  let scheduler;

  beforeEach(() => {
    scheduler = new Scheduler();
    vi.useFakeTimers();
  });

  afterEach(() => {
    scheduler.stop();
    vi.restoreAllMocks();
  });

  it('should initialize with correct default values', () => {
    expect(scheduler.isRunning).toBe(false);
    expect(scheduler.nextNoteTime).toBe(0);
    expect(scheduler.intervalId).toBeNull();
  });

  it('should start scheduling', () => {
    const callback = vi.fn();
    scheduler.start(10.0, callback);

    expect(scheduler.isRunning).toBe(true);
    expect(scheduler.isScheduling()).toBe(true);
    expect(scheduler.nextNoteTime).toBe(10.1);
  });

  it('should call callback periodically', () => {
    const callback = vi.fn();
    scheduler.start(0, callback);

    // Advance time by 25ms (one scheduler interval)
    vi.advanceTimersByTime(25);
    expect(callback).toHaveBeenCalledTimes(1);

    // Advance by another 25ms
    vi.advanceTimersByTime(25);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should stop scheduling', () => {
    const callback = vi.fn();
    scheduler.start(0, callback);

    scheduler.stop();

    expect(scheduler.isRunning).toBe(false);
    expect(scheduler.isScheduling()).toBe(false);

    // Callback should not be called after stop
    const callCount = callback.mock.calls.length;
    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledTimes(callCount);
  });

  it('should not start if already running', () => {
    const callback = vi.fn();
    scheduler.start(0, callback);

    const firstIntervalId = scheduler.intervalId;
    scheduler.start(0, callback);

    // Should keep the same interval ID
    expect(scheduler.intervalId).toBe(firstIntervalId);
  });

  it('should update next note time', () => {
    scheduler.setNextNoteTime(5.5);
    expect(scheduler.getNextNoteTime()).toBe(5.5);
  });

  it('should advance time by duration', () => {
    scheduler.setNextNoteTime(1.0);
    scheduler.advanceTime(0.5);
    expect(scheduler.getNextNoteTime()).toBe(1.5);
  });

  it('should pass correct parameters to callback', () => {
    const callback = vi.fn();
    scheduler.start(10.0, callback);

    vi.advanceTimersByTime(25);

    expect(callback).toHaveBeenCalledWith(10.1, 0.1);
  });
});

describe('BeatTracker', () => {
  let tracker;

  beforeEach(() => {
    tracker = new BeatTracker();
  });

  it('should initialize with zero beats', () => {
    expect(tracker.getCurrentBeat()).toBe(0);
    expect(tracker.getBeatsInNote()).toBe(0);
  });

  it('should set note duration', () => {
    tracker.setNoteDuration(4);
    expect(tracker.getBeatsInNote()).toBe(4);
  });

  it('should increment beat', () => {
    tracker.setNoteDuration(4);

    expect(tracker.incrementBeat()).toBe(false);
    expect(tracker.getCurrentBeat()).toBe(1);

    expect(tracker.incrementBeat()).toBe(false);
    expect(tracker.getCurrentBeat()).toBe(2);
  });

  it('should return true when reaching end of note', () => {
    tracker.setNoteDuration(2);

    expect(tracker.incrementBeat()).toBe(false); // Beat 1
    expect(tracker.incrementBeat()).toBe(true);  // Beat 2, end of note

    // Should reset to 0
    expect(tracker.getCurrentBeat()).toBe(0);
  });

  it('should reset beat tracker', () => {
    tracker.setNoteDuration(4);
    tracker.incrementBeat();
    tracker.incrementBeat();

    tracker.reset();

    expect(tracker.getCurrentBeat()).toBe(0);
    expect(tracker.getBeatsInNote()).toBe(0);
  });

  it('should correctly identify note start', () => {
    tracker.setNoteDuration(3);

    expect(tracker.isNoteStart()).toBe(true);

    tracker.incrementBeat();
    expect(tracker.isNoteStart()).toBe(false);

    tracker.incrementBeat();
    expect(tracker.isNoteStart()).toBe(false);

    tracker.incrementBeat(); // Wraps to 0
    expect(tracker.isNoteStart()).toBe(true);
  });

  it('should handle single beat notes', () => {
    tracker.setNoteDuration(1);

    expect(tracker.isNoteStart()).toBe(true);
    expect(tracker.incrementBeat()).toBe(true); // Immediately ends
    expect(tracker.isNoteStart()).toBe(true); // Back to start
  });
});
