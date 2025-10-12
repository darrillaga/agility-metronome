import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

// Note frequencies for B♭ trumpet (transposed down whole step from written pitch)
const NOTES = [
  { name: 'C', frequency: 466.16 },
  { name: 'C#', frequency: 493.88 },
  { name: 'D', frequency: 523.25 },
  { name: 'D#', frequency: 554.37 },
  { name: 'E', frequency: 587.33 },
  { name: 'F', frequency: 622.25 },
  { name: 'F#', frequency: 659.25 },
  { name: 'G', frequency: 698.46 },
  { name: 'G#', frequency: 739.99 },
  { name: 'A', frequency: 783.99 },
  { name: 'A#', frequency: 830.61 },
  { name: 'B', frequency: 880.00 },
];

// Duration types with beat counts
const DURATIONS = [
  { name: 'whole', beats: 8 },
  { name: 'half', beats: 4 },
  { name: 'quarter', beats: 2 },
  { name: 'eighth', beats: 1 },
];

const App = () => {
  const [tempo, setTempo] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showStaff, setShowStaff] = useState(false);
  const [currentNote, setCurrentNote] = useState(NOTES[0]);
  const [currentDuration, setCurrentDuration] = useState(DURATIONS[2]);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(11);

  const audioContextRef = useRef(null);
  const schedulerIdRef = useRef(null);
  const nextNoteTimeRef = useRef(0);
  const currentBeatRef = useRef(0);
  const beatsInCurrentNoteRef = useRef(0);
  const currentNoteGainRef = useRef(null);

  // Initialize Audio Context
  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  // Play click sound
  const playClick = (time) => {
    if (!soundEnabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(1000, time);
    gainNode.gain.setValueAtTime(0.15, time);
    gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.03);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(time);
    oscillator.stop(time + 0.03);
  };

  // Play note sound
  const playNote = (note, duration, time) => {
    if (!soundEnabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(note.frequency, time);

    const beatDuration = 60.0 / tempo;
    const noteDuration = beatDuration * duration.beats * 0.9;

    gainNode.gain.setValueAtTime(0.25, time);
    gainNode.gain.exponentialRampToValueAtTime(0.01, time + noteDuration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(time);
    oscillator.stop(time + noteDuration);

    currentNoteGainRef.current = gainNode;
  };

  // Get random note different from current
  const getRandomNote = (currentNote, min, max) => {
    const availableNotes = NOTES.slice(min, max + 1);
    if (availableNotes.length === 1) return availableNotes[0];

    let newNote;
    do {
      newNote = availableNotes[Math.floor(Math.random() * availableNotes.length)];
    } while (newNote.name === currentNote.name && availableNotes.length > 1);

    return newNote;
  };

  // Get random duration
  const getRandomDuration = () => {
    return DURATIONS[Math.floor(Math.random() * DURATIONS.length)];
  };

  // Scheduler function
  const scheduler = () => {
    if (!audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const currentTime = ctx.currentTime;
    const scheduleAheadTime = 0.1;

    while (nextNoteTimeRef.current < currentTime + scheduleAheadTime) {
      const beatDuration = 60.0 / tempo;

      // Play click on every beat
      playClick(nextNoteTimeRef.current);

      // Check if we need to change notes
      if (currentBeatRef.current === 0) {
        const newDuration = getRandomDuration();
        const newNote = getRandomNote(currentNote, rangeMin, rangeMax);

        setCurrentNote(newNote);
        setCurrentDuration(newDuration);

        beatsInCurrentNoteRef.current = newDuration.beats;
        playNote(newNote, newDuration, nextNoteTimeRef.current);
      }

      currentBeatRef.current++;

      if (currentBeatRef.current >= beatsInCurrentNoteRef.current) {
        currentBeatRef.current = 0;
      }

      nextNoteTimeRef.current += beatDuration;
    }
  };

  // Start/Stop metronome
  const togglePlay = () => {
    if (!isPlaying) {
      initAudioContext();

      // Initialize timing
      nextNoteTimeRef.current = audioContextRef.current.currentTime;
      currentBeatRef.current = 0;
      beatsInCurrentNoteRef.current = 0;

      // Start scheduler
      schedulerIdRef.current = setInterval(scheduler, 25);
      setIsPlaying(true);
    } else {
      // Stop scheduler
      if (schedulerIdRef.current) {
        clearInterval(schedulerIdRef.current);
        schedulerIdRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (schedulerIdRef.current) {
        clearInterval(schedulerIdRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          B♭ Trumpet Agility Metronome
        </h1>

        {/* Note Display */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-8 shadow-lg">
          {!showStaff ? (
            <div className="text-center">
              <div className="text-8xl font-bold text-white mb-2">
                {currentNote.name}
              </div>
              <div className="text-2xl text-blue-100 capitalize">
                {currentDuration.name} note ({currentDuration.beats} beats)
              </div>
            </div>
          ) : (
            <StaffNotation note={currentNote} duration={currentDuration} />
          )}
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Control Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-md"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              {isPlaying ? 'Stop' : 'Start'}
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md ${
                soundEnabled
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-gray-400 hover:bg-gray-500 text-white'
              }`}
            >
              {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
              Sound
            </button>

            <button
              onClick={() => setShowStaff(!showStaff)}
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

          {/* Tempo Slider */}
          <div className="space-y-2">
            <label className="flex justify-between text-sm font-medium text-gray-700">
              <span>Tempo</span>
              <span className="text-blue-600 font-bold">{tempo} BPM</span>
            </label>
            <input
              type="range"
              min="40"
              max="240"
              value={tempo}
              onChange={(e) => setTempo(Number(e.target.value))}
              disabled={isPlaying}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((tempo - 40) / 200) * 100}%, #e5e7eb ${((tempo - 40) / 200) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>

          {/* Note Range Slider */}
          <div className="space-y-2">
            <label className="flex justify-between text-sm font-medium text-gray-700">
              <span>Note Range</span>
              <span className="text-blue-600 font-bold">
                {NOTES[rangeMin].name} - {NOTES[rangeMax].name}
              </span>
            </label>
            <DualRangeSlider
              min={0}
              max={11}
              valueMin={rangeMin}
              valueMax={rangeMax}
              onChange={(min, max) => {
                setRangeMin(min);
                setRangeMax(max);
              }}
              disabled={isPlaying}
              labels={NOTES.map(n => n.name)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Dual Range Slider Component
const DualRangeSlider = ({ min, max, valueMin, valueMax, onChange, disabled, labels }) => {
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sliderRef.current || disabled) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const value = Math.round(min + percent * (max - min));

    if (isDraggingMin) {
      const newMin = Math.min(value, valueMax);
      onChange(newMin, valueMax);
    } else if (isDraggingMax) {
      const newMax = Math.max(value, valueMin);
      onChange(valueMin, newMax);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  useEffect(() => {
    if (isDraggingMin || isDraggingMax) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingMin, isDraggingMax, valueMin, valueMax]);

  const percentMin = ((valueMin - min) / (max - min)) * 100;
  const percentMax = ((valueMax - min) / (max - min)) * 100;

  return (
    <div className={`relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div
        ref={sliderRef}
        className="relative h-2 bg-gray-200 rounded-lg"
        style={{
          background: `linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${percentMin}%, #3b82f6 ${percentMin}%, #3b82f6 ${percentMax}%, #e5e7eb ${percentMax}%, #e5e7eb 100%)`
        }}
      >
        <div
          className={`absolute w-5 h-5 bg-blue-600 rounded-full -top-1.5 transform -translate-x-1/2 ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'
          } transition-transform shadow-md`}
          style={{ left: `${percentMin}%` }}
          onMouseDown={() => !disabled && setIsDraggingMin(true)}
        />
        <div
          className={`absolute w-5 h-5 bg-blue-600 rounded-full -top-1.5 transform -translate-x-1/2 ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'
          } transition-transform shadow-md`}
          style={{ left: `${percentMax}%` }}
          onMouseDown={() => !disabled && setIsDraggingMax(true)}
        />
      </div>
    </div>
  );
};

// Staff Notation Component
const StaffNotation = ({ note, duration }) => {
  // Staff line positions (top to bottom: F5, D5, B4, G4, E4)
  const staffLines = [0, 20, 40, 60, 80];

  // Note positions on staff (from bottom E4 = 80 to top)
  const notePositions = {
    'C': 90,  // Below bottom line
    'C#': 90,
    'D': 80,  // Bottom line (E4)
    'D#': 80,
    'E': 70,  // Between 4th and 5th line
    'F': 60,  // 4th line (G4)
    'F#': 60,
    'G': 50,  // Between 3rd and 4th line
    'G#': 50,
    'A': 40,  // 3rd line (B4)
    'A#': 40,
    'B': 30,  // Between 2nd and 3rd line
  };

  const noteY = notePositions[note.name];
  const isSharp = note.name.includes('#');

  return (
    <div className="relative h-64 flex items-center justify-center bg-white rounded-lg">
      <svg viewBox="0 0 400 160" className="w-full h-full">
        {/* Staff lines */}
        {staffLines.map((y, i) => (
          <line
            key={i}
            x1="40"
            y1={y + 20}
            x2="360"
            y2={y + 20}
            stroke="#000"
            strokeWidth="1.5"
          />
        ))}

        {/* Treble clef */}
        <g transform="translate(50, 30)">
          <path
            d="M 10,30 Q 10,15 15,10 Q 20,5 25,10 Q 28,15 25,25 Q 20,40 15,50 Q 12,60 15,70 Q 18,75 20,70 Q 22,60 20,50 Q 18,40 15,35 M 20,70 Q 22,75 25,72 Q 27,68 25,65 Q 23,62 20,65"
            fill="#000"
            stroke="#000"
            strokeWidth="1"
          />
          <circle cx="20" cy="72" r="2" fill="#000" />
        </g>

        {/* Ledger line for C (below staff) */}
        {note.name === 'C' || note.name === 'C#' ? (
          <line
            x1="180"
            y1={noteY + 20}
            x2="220"
            y2={noteY + 20}
            stroke="#000"
            strokeWidth="1.5"
          />
        ) : null}

        {/* Sharp symbol */}
        {isSharp && (
          <g transform={`translate(170, ${noteY + 10})`}>
            <line x1="3" y1="-8" x2="3" y2="8" stroke="#000" strokeWidth="1.5" />
            <line x1="7" y1="-8" x2="7" y2="8" stroke="#000" strokeWidth="1.5" />
            <line x1="0" y1="-2" x2="10" y2="-4" stroke="#000" strokeWidth="1.5" />
            <line x1="0" y1="2" x2="10" y2="0" stroke="#000" strokeWidth="1.5" />
          </g>
        )}

        {/* Note head */}
        <ellipse
          cx="200"
          cy={noteY + 20}
          rx="8"
          ry="6"
          fill={duration.name === 'whole' || duration.name === 'half' ? '#fff' : '#000'}
          stroke="#000"
          strokeWidth="2"
          transform={`rotate(-20 200 ${noteY + 20})`}
        />

        {/* Note stem (not for whole notes) */}
        {duration.name !== 'whole' && (
          <line
            x1="208"
            y1={noteY + 20}
            x2="208"
            y2={noteY - 20}
            stroke="#000"
            strokeWidth="2"
          />
        )}

        {/* Flag for eighth note */}
        {duration.name === 'eighth' && (
          <path
            d={`M 208,${noteY - 20} Q 220,${noteY - 15} 218,${noteY - 5}`}
            fill="#000"
            stroke="#000"
            strokeWidth="1"
          />
        )}

        {/* Duration label */}
        <text
          x="200"
          y="140"
          textAnchor="middle"
          className="text-sm font-semibold capitalize"
          fill="#4b5563"
        >
          {duration.name} note ({duration.beats} beats)
        </text>
      </svg>
    </div>
  );
};

export default App;
