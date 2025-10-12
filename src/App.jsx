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
  const soundEnabledRef = useRef(soundEnabled);

  // Update ref when soundEnabled state changes
  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  // Initialize Audio Context
  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return resumeAudioContext();
  };

  // Resume audio context (Android/iOS compatible)
  const resumeAudioContext = async () => {
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      try {
        await audioContextRef.current.resume();
        return audioContextRef.current.state === 'running';
      } catch (error) {
        console.error('Error resuming audio context:', error);
        return false;
      }
    }
    return audioContextRef.current?.state === 'running';
  };

  // Play click sound
  const playClick = (time) => {
    if (!soundEnabledRef.current || !audioContextRef.current) return;
    if (audioContextRef.current.state !== 'running') return;

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
    if (!soundEnabledRef.current || !audioContextRef.current) return;
    if (audioContextRef.current.state !== 'running') return;

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
  const togglePlay = async () => {
    if (!isPlaying) {
      const initialized = await initAudioContext();

      if (!initialized) {
        console.error('Failed to initialize audio context');
        return;
      }

      // Add a delay to ensure audio context is fully ready (especially on Android)
      setTimeout(async () => {
        // Resume again just before starting (Android sometimes needs this)
        await resumeAudioContext();

        if (audioContextRef.current && audioContextRef.current.state === 'running') {
          // Initialize timing
          nextNoteTimeRef.current = audioContextRef.current.currentTime + 0.1;
          currentBeatRef.current = 0;
          beatsInCurrentNoteRef.current = 0;

          // Start scheduler
          schedulerIdRef.current = setInterval(scheduler, 25);
        }
      }, 100);

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
        <div className={`rounded-xl p-8 mb-8 shadow-lg ${!showStaff ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-white'}`}>
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
  // Staff line positions for treble clef (top to bottom: F5, D5, B4, G4, E4)
  const staffLines = [30, 45, 60, 75, 90]; // Centered in viewBox

  // Extract note letter and octave
  const noteLetter = note.name.replace(/[0-9#]/g, '');
  const isSharp = note.name.includes('#');
  const octave = parseInt(note.name.match(/\d+/)[0]);

  // Calculate position on staff using DIATONIC spacing
  // Sharp notes are positioned at the same height as their natural counterparts
  // Treble clef staff lines (bottom to top): E4, G4, B4, D5, F5
  // Spaces: F4, A4, C5, E5
  const getStaffPosition = () => {
    // Map each note letter to its position relative to E4
    // Each position represents a line or space (7.5 pixels apart)
    const diatonicPositions = {
      'E': 0,  // E4 = bottom line (y=90)
      'F': 1,  // F4 = space above E4 (y=82.5)
      'G': 2,  // G4 = line (y=75)
      'A': 3,  // A4 = space (y=67.5)
      'B': 4,  // B4 = line (y=60)
      'C': 5,  // C5 = space (y=52.5)
      'D': 6,  // D5 = line (y=45)
    };

    // Calculate octave offset (7 positions per octave)
    const basePosition = diatonicPositions[noteLetter];
    const octaveOffset = (octave - 4) * 7;

    // E4 is at position 0, which corresponds to y=90
    // Each position moves up by 7.5 pixels
    const totalPosition = basePosition + octaveOffset;
    return 90 - (totalPosition * 7.5);
  };

  const noteY = getStaffPosition();

  // Generate ledger lines for notes outside the staff
  const getLedgerLines = () => {
    const lines = [];
    // Ledger lines below staff (C4 and below)
    if (noteY > 90) {
      for (let y = 97.5; y <= noteY; y += 7.5) {
        lines.push(
          <line
            key={`ledger-below-${y}`}
            x1="185"
            y1={y}
            x2="225"
            y2={y}
            stroke="#000"
            strokeWidth="1.5"
          />
        );
      }
    }
    // Ledger lines above staff (A5 and above)
    if (noteY < 30) {
      for (let y = 22.5; y >= noteY; y -= 7.5) {
        lines.push(
          <line
            key={`ledger-above-${y}`}
            x1="185"
            y1={y}
            x2="225"
            y2={y}
            stroke="#000"
            strokeWidth="1.5"
          />
        );
      }
    }
    return lines;
  };

  return (
    <div className="relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 140" className="w-full h-full">
        {/* Staff lines (E4, G4, B4, D5, F5) */}
        {staffLines.map((y, i) => (
          <line
            key={i}
            x1="50"
            y1={y}
            x2="350"
            y2={y}
            stroke="#000"
            strokeWidth="1.5"
          />
        ))}

        {/* Treble clef - positioned so the curl wraps around G4 line */}
        <g transform="translate(58, 75)" fill="#000">
          {/* Main curve of the clef */}
          <path
            d="M 3,-28 C 3,-28 2,-26 2,-23 C 2,-19 4,-16 7,-16 C 9,-16 11,-17.5 11,-19.5 C 11,-21.5 9,-23 7,-23 C 5.5,-23 4.5,-22 4.5,-20.5 C 4.5,-19 5.5,-17.5 7,-17.5 C 9,-17.5 11,-19 11.5,-21.5 C 12,-24 12,-27 10,-30 C 8,-33 5,-35 2,-35 C -1,-35 -4,-33 -5,-29 C -6,-25 -5,-21 -3,-18.5 C -2,-17 0,-16 1.5,-16 C 1,-16 0.5,-16.2 0,-16.5 C -2,-17.5 -3.5,-19.5 -4,-22 C -4.5,-24.5 -4,-27 -2.5,-29 C -1,-31 1.5,-32.5 4,-32.5 C 6.5,-32.5 9,-31 10.5,-28.5 C 12,-26 13,-23 13,-20 C 13,-16 11,-12 8,-9.5 C 6,-7.5 3.5,-6.5 1,-6.5 L 1,-6 C 3.5,-6 6,-7 8.5,-9 C 11,-11 13,-14 13,-17.5 C 13,-21 12,-24 10,-26.5 C 8,-29 5.5,-30.5 3,-30.5 C 0.5,-30.5 -1.5,-29 -2.5,-27 C -3.5,-25 -4,-22.5 -4,-20 C -4,-16 -2,-12.5 1,-10.5 C 2,-9.5 3,-9 4,-9 C 4.5,-9 5,-9 5.5,-9.2 L 5.5,10 C 6,9 7,7 8,4.5 C 9,2 9.5,-0.5 9.5,-3 C 9.5,-5 9,-6.5 8,-7.5 C 7.5,-8 7,-8.5 6.5,-8.5 L 6.5,-9 C 7.5,-9 8.5,-8.5 9.5,-7.5 C 10.5,-6.5 11,-5 11,-3 C 11,-0.5 10,2.5 8.5,5 C 7,7.5 5.5,9.5 4.5,10.5 L 4.5,13 C 4.5,14.5 4.5,15.5 5,16 C 5.5,16.5 6,16.5 6.5,16.5 C 7,16.5 7.5,16.2 7.5,15.7 C 7.5,15.2 7.2,15 6.7,14.7 C 6.2,14.5 6,14 6,13.5 C 6,13 6.2,12.5 6.7,12.2 C 7.2,12 7.7,12 8.2,12.2 C 8.7,12.5 9,13 9,13.5 C 9,14.5 8.5,15.5 7.5,16.2 C 6.5,17 5.5,17.2 4.5,17.2 C 3.5,17.2 2.5,17 1.7,16.2 C 1,15.5 0.7,14.5 0.7,13.5 L 0.7,10.5 C 0.2,11 -0.5,11.2 -1.2,11.2 C -3.5,11.2 -5.5,10 -7,8 C -8.5,6 -9,-3.5 -9,-7 C -9,-10 -8,-12.5 -6.5,-14.5 C -5,-16.5 -3,-17.5 -0.5,-17.5 C 1,-17.5 2.5,-17 3.5,-16 L 3.5,-28 Z"
            strokeWidth="1"
            stroke="#000"
          />
          {/* Bottom curl/dot */}
          <circle cx="4" cy="14.5" r="2.2" />
        </g>

        {/* Ledger lines */}
        {getLedgerLines()}

        {/* Sharp symbol */}
        {isSharp && (
          <g transform={`translate(175, ${noteY})`}>
            <line x1="2" y1="-6" x2="2" y2="6" stroke="#000" strokeWidth="1.2" />
            <line x1="5" y1="-6" x2="5" y2="6" stroke="#000" strokeWidth="1.2" />
            <line x1="0" y1="-1.5" x2="7" y2="-3" stroke="#000" strokeWidth="1.2" />
            <line x1="0" y1="1.5" x2="7" y2="0" stroke="#000" strokeWidth="1.2" />
          </g>
        )}

        {/* Note head */}
        <ellipse
          cx="205"
          cy={noteY}
          rx="8"
          ry="6"
          fill={duration.name === 'whole' || duration.name === 'half' ? '#fff' : '#000'}
          stroke="#000"
          strokeWidth="2"
          transform={`rotate(-20 205 ${noteY})`}
        />

        {/* Note stem (not for whole notes) */}
        {duration.name !== 'whole' && (
          <line
            x1="213"
            y1={noteY}
            x2="213"
            y2={noteY - 35}
            stroke="#000"
            strokeWidth="2"
          />
        )}

        {/* Flag for eighth note */}
        {duration.name === 'eighth' && (
          <path
            d={`M 213,${noteY - 35} Q 225,${noteY - 30} 223,${noteY - 20}`}
            fill="#000"
          />
        )}
      </svg>
    </div>
  );
};

export default App;
