import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

// Note frequencies for B♭ trumpet (transposed down whole step from written pitch)
// Expanded range from C2 to C7
const NOTES = [
  { name: 'C2', frequency: 116.54 },
  { name: 'C#2', frequency: 123.47 },
  { name: 'D2', frequency: 130.81 },
  { name: 'D#2', frequency: 138.59 },
  { name: 'E2', frequency: 146.83 },
  { name: 'F2', frequency: 155.56 },
  { name: 'F#2', frequency: 164.81 },
  { name: 'G2', frequency: 174.61 },
  { name: 'G#2', frequency: 185.00 },
  { name: 'A2', frequency: 196.00 },
  { name: 'A#2', frequency: 207.65 },
  { name: 'B2', frequency: 220.00 },
  { name: 'C3', frequency: 233.08 },
  { name: 'C#3', frequency: 246.94 },
  { name: 'D3', frequency: 261.63 },
  { name: 'D#3', frequency: 277.18 },
  { name: 'E3', frequency: 293.66 },
  { name: 'F3', frequency: 311.13 },
  { name: 'F#3', frequency: 329.63 },
  { name: 'G3', frequency: 349.23 },
  { name: 'G#3', frequency: 369.99 },
  { name: 'A3', frequency: 392.00 },
  { name: 'A#3', frequency: 415.30 },
  { name: 'B3', frequency: 440.00 },
  { name: 'C4', frequency: 466.16 },
  { name: 'C#4', frequency: 493.88 },
  { name: 'D4', frequency: 523.25 },
  { name: 'D#4', frequency: 554.37 },
  { name: 'E4', frequency: 587.33 },
  { name: 'F4', frequency: 622.25 },
  { name: 'F#4', frequency: 659.25 },
  { name: 'G4', frequency: 698.46 },
  { name: 'G#4', frequency: 739.99 },
  { name: 'A4', frequency: 783.99 },
  { name: 'A#4', frequency: 830.61 },
  { name: 'B4', frequency: 880.00 },
  { name: 'C5', frequency: 932.33 },
  { name: 'C#5', frequency: 987.77 },
  { name: 'D5', frequency: 1046.50 },
  { name: 'D#5', frequency: 1108.73 },
  { name: 'E5', frequency: 1174.66 },
  { name: 'F5', frequency: 1244.51 },
  { name: 'F#5', frequency: 1318.51 },
  { name: 'G5', frequency: 1396.91 },
  { name: 'G#5', frequency: 1479.98 },
  { name: 'A5', frequency: 1567.98 },
  { name: 'A#5', frequency: 1661.22 },
  { name: 'B5', frequency: 1760.00 },
  { name: 'C6', frequency: 1864.66 },
  { name: 'C#6', frequency: 1975.53 },
  { name: 'D6', frequency: 2093.00 },
  { name: 'D#6', frequency: 2217.46 },
  { name: 'E6', frequency: 2349.32 },
  { name: 'F6', frequency: 2489.02 },
  { name: 'F#6', frequency: 2637.02 },
  { name: 'G6', frequency: 2793.83 },
  { name: 'G#6', frequency: 2959.96 },
  { name: 'A6', frequency: 3135.96 },
  { name: 'A#6', frequency: 3322.44 },
  { name: 'B6', frequency: 3520.00 },
  { name: 'C7', frequency: 3729.31 },
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
  const [rangeMin, setRangeMin] = useState(24); // Default to C4
  const [rangeMax, setRangeMax] = useState(35); // Default to B4

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

    try {
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
    } catch (error) {
      console.error('Error playing click:', error);
    }
  };

  // Play note sound
  const playNote = (note, duration, time, currentTempo) => {
    if (!soundEnabled || !audioContextRef.current) return;

    try {
      const ctx = audioContextRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(note.frequency, time);

      const beatDuration = 60.0 / currentTempo;
      const noteDuration = beatDuration * duration.beats * 0.9;

      gainNode.gain.setValueAtTime(0.25, time);
      gainNode.gain.exponentialRampToValueAtTime(0.01, time + noteDuration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(time);
      oscillator.stop(time + noteDuration);

      currentNoteGainRef.current = gainNode;
    } catch (error) {
      console.error('Error playing note:', error);
    }
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
        playNote(newNote, newDuration, nextNoteTimeRef.current, tempo);
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

          {/* Note Range Selectors */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Note Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600 block mb-1">Minimum Note</label>
                <select
                  value={rangeMin}
                  onChange={(e) => {
                    const newMin = Number(e.target.value);
                    setRangeMin(newMin);
                    if (newMin > rangeMax) {
                      setRangeMax(newMin);
                    }
                  }}
                  disabled={isPlaying}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  {NOTES.map((note, idx) => (
                    <option key={idx} value={idx}>
                      {note.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-600 block mb-1">Maximum Note</label>
                <select
                  value={rangeMax}
                  onChange={(e) => {
                    const newMax = Number(e.target.value);
                    setRangeMax(newMax);
                    if (newMax < rangeMin) {
                      setRangeMin(newMax);
                    }
                  }}
                  disabled={isPlaying}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  {NOTES.map((note, idx) => (
                    <option key={idx} value={idx}>
                      {note.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Staff Notation Component
const StaffNotation = ({ note, duration }) => {
  // Staff line positions (top to bottom: F5, D5, B4, G4, E4)
  const staffLines = [0, 20, 40, 60, 80];

  // Extract note letter and octave
  const noteLetter = note.name.replace(/[0-9#]/g, '');
  const isSharp = note.name.includes('#');
  const octave = parseInt(note.name.match(/\d+/)[0]);

  // Calculate Y position based on note (middle C4 = position 90)
  const noteMap = { 'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6 };
  const baseNote = noteMap[noteLetter];
  const semitones = (octave - 4) * 7 + baseNote;
  const noteY = 90 - (semitones * 5); // Each semitone step is ~5 pixels

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

        {/* Treble clef (G clef) - centered on G line (2nd line from bottom) */}
        <g transform="translate(55, 20)">
          <path
            d="M 8,40 C 8,35 10,30 13,28 C 16,26 18,28 18,32 C 18,36 16,42 13,48 C 10,54 8,58 8,62 C 8,66 10,68 12,68 C 14,68 16,66 16,62 C 16,58 14,52 12,48 L 12,48 C 14,46 16,42 16,38 C 16,34 15,30 13,28 C 11,26 9,25 7,26 C 5,27 3,30 3,34 C 3,38 5,42 8,44 L 8,44 C 6,48 4,52 4,56 C 4,62 7,68 12,70 C 15,71 18,70 20,67 C 22,64 22,60 20,57 C 18,54 14,54 12,57 Z M 12,70 C 10,70 9,69 9,67 C 9,65 10,64 12,64 C 14,64 15,65 15,67 C 15,69 14,70 12,70 Z"
            fill="#000"
            stroke="#000"
            strokeWidth="0.5"
          />
        </g>

        {/* Ledger lines for notes above/below staff */}
        {(() => {
          const ledgerLines = [];
          const y = noteY + 20;
          // Add ledger lines below staff (y > 80)
          for (let lineY = 100; lineY <= y && lineY > 80; lineY += 10) {
            ledgerLines.push(
              <line
                key={`below-${lineY}`}
                x1="180"
                y1={lineY}
                x2="220"
                y2={lineY}
                stroke="#000"
                strokeWidth="1.5"
              />
            );
          }
          // Add ledger lines above staff (y < 0)
          for (let lineY = -10; lineY >= y && lineY < 0; lineY -= 10) {
            ledgerLines.push(
              <line
                key={`above-${lineY}`}
                x1="180"
                y1={lineY}
                x2="220"
                y2={lineY}
                stroke="#000"
                strokeWidth="1.5"
              />
            );
          }
          return ledgerLines;
        })()}

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
