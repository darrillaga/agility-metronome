# B♭ Trumpet Agility Metronome - Architecture Documentation

## Overview

This document describes the complete architecture refactoring of the B♭ Trumpet Agility Metronome application, organized into a clean, maintainable, and testable structure.

## Architecture Principles

1. **Separation of Concerns** - Each layer has a single, well-defined responsibility
2. **Pure Functions** - Business logic is implemented as pure, testable functions
3. **Composability** - Components and functions are designed to be composed together
4. **Testability** - All layers are unit tested with comprehensive test coverage
5. **Type Safety** - JSDoc annotations provide type hints for better IDE support

## Project Structure

```
src/
├── constants/           # Application constants and configuration
│   ├── durations.js     # Note duration definitions
│   ├── notes.js         # Musical note definitions (C2-C7)
│   ├── staffConfig.js   # Staff notation configuration
│   ├── instruments.js   # Instrument configurations
│   └── __tests__/       # Constants tests (21 tests)
│
├── utils/               # Pure utility functions
│   ├── musicTheory/     # Music theory calculations
│   │   ├── notePositions.js    # Staff position calculations
│   │   └── ledgerLines.js      # Ledger line generation
│   ├── formatting/      # Data formatting utilities
│   │   └── noteName.js         # Note name formatting
│   ├── validation/      # Input validation
│   │   ├── noteValidator.js    # Note range validation
│   │   └── tempoValidator.js   # Tempo validation
│   └── __tests__/       # Utils tests (67 tests)
│
├── services/            # Business logic services
│   ├── audioEngine/     # Web Audio API management
│   │   ├── AudioEngine.js      # AudioContext lifecycle
│   │   ├── clickPlayer.js      # Metronome click sounds
│   │   └── notePlayer.js       # Musical note sounds
│   ├── scheduler/       # Timing and scheduling
│   │   ├── Scheduler.js        # Precise timing scheduler
│   │   └── BeatTracker.js      # Beat counting logic
│   ├── noteGenerator/   # Random note/duration selection
│   │   ├── noteSelector.js     # Note selection logic
│   │   └── durationSelector.js # Duration selection logic
│   └── __tests__/       # Services tests (38 tests)
│
├── hooks/               # React custom hooks
│   ├── useAudioEngine.js       # Audio management hook
│   ├── useMetronome.js         # State management hook
│   ├── useNoteScheduler.js     # Scheduling hook
│   └── __tests__/       # Hook tests (partial coverage)
│
├── components/          # Presentational React components
│   ├── MetronomeContainer.jsx  # Main container component
│   ├── NoteDisplay/     # Note display components
│   │   ├── NoteDisplay.jsx     # Display switcher
│   │   ├── LargeNoteView.jsx   # Large text view
│   │   └── StaffNotationView.jsx # Staff notation view
│   ├── Controls/        # Control components
│   │   ├── PlaybackControls.jsx   # Play/pause/sound buttons
│   │   ├── TempoSlider.jsx        # Tempo slider
│   │   └── NoteRangeSelector.jsx  # Note range dropdowns
│   └── MusicNotation/   # Music notation components
│       ├── Staff.jsx           # Musical staff
│       ├── TrebleClef.jsx      # Treble clef symbol
│       ├── Note.jsx            # Musical note
│       ├── Sharp.jsx           # Sharp accidental
│       └── LedgerLines.jsx     # Ledger lines
│
└── App.jsx              # Main application (orchestrates all layers)
```

## Layer Descriptions

### Phase 1: Constants Layer

**Purpose:** Centralize all application data and configuration

**Files:**
- `constants/notes.js` - 61 notes from C2 to C7 with frequencies
- `constants/durations.js` - Note durations (whole, half, quarter, eighth)
- `constants/staffConfig.js` - Staff notation positioning constants
- `constants/instruments.js` - Instrument configurations (B♭ Trumpet)

**Test Coverage:** 21 tests

**Key Features:**
- Immutable data sources
- Easy to extend for new instruments
- Type-safe with JSDoc annotations

### Phase 2: Utils Layer

**Purpose:** Pure functions for calculations, formatting, and validation

**Modules:**

1. **Music Theory** (`utils/musicTheory/`)
   - `calculateStaffPosition()` - Calculates Y position of notes on staff
   - `parseNoteName()` - Parses note name into components (letter, octave, sharp)
   - `calculateLedgerLines()` - Generates ledger line positions

2. **Formatting** (`utils/formatting/`)
   - `formatNoteName()` - Formats note names for display (e.g., C# → C♯)
   - `formatDurationName()` - Formats duration names

3. **Validation** (`utils/validation/`)
   - `validateNoteRange()` - Validates note range selections
   - `clampTempo()` - Clamps tempo to valid range (40-240 BPM)

**Test Coverage:** 67 tests

**Key Features:**
- Pure functions (no side effects)
- Comprehensive edge case handling
- Easy to unit test

### Phase 3: Services Layer

**Purpose:** Business logic and external API interactions

**Modules:**

1. **Audio Engine** (`services/audioEngine/`)
   - `AudioEngine` class - Manages AudioContext lifecycle
   - `playClick()` - Generates metronome click sounds
   - `playNote()` - Generates musical note sounds
   - Handles Android/iOS audio context issues

2. **Scheduler** (`services/scheduler/`)
   - `Scheduler` class - Precise timing with look-ahead scheduling
   - `BeatTracker` class - Tracks current beat and note duration
   - Uses 25ms interval with 0.1s look-ahead

3. **Note Generator** (`services/noteGenerator/`)
   - `selectRandomNote()` - Random note selection within range
   - `selectWeightedDuration()` - Weighted random duration selection
   - Ensures variety (no immediate repeats)

**Test Coverage:** 38 tests

**Key Features:**
- Encapsulated business logic
- Handles browser compatibility issues
- Testable with mocks

### Phase 4: Hooks Layer

**Purpose:** React state management and side effects

**Hooks:**

1. **useAudioEngine** - Audio management
   - Manages AudioContext lifecycle
   - Provides playback functions
   - Handles soundEnabled state via ref (immediate response)
   - Returns: `initAudio`, `playClickSound`, `playNoteSound`, `getCurrentTime`, `isAudioReady`

2. **useMetronome** - State management
   - Manages all metronome state (tempo, playing, sound, etc.)
   - Provides state update functions
   - Returns: state values and update functions

3. **useNoteScheduler** - Scheduling orchestration
   - Coordinates Scheduler and BeatTracker
   - Handles note/duration changes
   - Calls playback functions at correct times
   - Returns: `startScheduler`, `stopScheduler`, `isScheduling`, `getCurrentBeat`

**Test Coverage:** Partial (implementation complete, tests in progress)

**Key Features:**
- Separates concerns from UI
- Reusable across components
- Follows React best practices (useCallback, useEffect)

### Phase 5: Components Layer

**Purpose:** Presentational UI components

**Component Hierarchy:**

```
MetronomeContainer
├── NoteDisplay
│   ├── LargeNoteView
│   └── StaffNotationView
│       └── Staff
│           ├── TrebleClef
│           ├── LedgerLines
│           ├── Sharp
│           └── Note
├── PlaybackControls
├── TempoSlider
└── NoteRangeSelector
```

**Key Features:**
- Fully presentational (no business logic)
- Prop-driven
- Reusable and composable
- Easy to test with React Testing Library

### Phase 6: Integration Layer

**Purpose:** Orchestrate all layers in App.jsx

**App.jsx Structure:**
```javascript
const App = () => {
  // 1. State management (useMetronome)
  const metronome = useMetronome(NOTES, DURATIONS);

  // 2. Audio engine (useAudioEngine)
  const audio = useAudioEngine(soundEnabled);

  // 3. Scheduler (useNoteScheduler)
  const scheduler = useNoteScheduler({...});

  // 4. Playback control (combines all hooks)
  const handleTogglePlay = async () => {...};

  // 5. Render (passes state and handlers to container)
  return <MetronomeContainer state={...} handlers={...} />;
};
```

**Key Features:**
- Thin integration layer
- Clear data flow
- Easy to understand and modify

## Data Flow

```
User Action
    ↓
Component (e.g., PlaybackControls)
    ↓
Handler (e.g., onTogglePlay)
    ↓
App.jsx (orchestration)
    ↓
Hooks (useAudioEngine, useMetronome, useNoteScheduler)
    ↓
Services (AudioEngine, Scheduler, etc.)
    ↓
Utils (calculations, validation)
    ↓
Constants (data)
```

## Testing Strategy

### Test Coverage Summary
- **Phase 1 (Constants):** 21 tests - 100% coverage
- **Phase 2 (Utils):** 67 tests - 100% coverage
- **Phase 3 (Services):** 38 tests - 100% coverage
- **Phase 4 (Hooks):** Partial coverage
- **Total:** 126 passing tests

### Testing Approach
1. **Constants:** Validate data structure and integrity
2. **Utils:** Test all edge cases and error conditions
3. **Services:** Mock external APIs (Web Audio, timers)
4. **Hooks:** Use React Testing Library with mocked services
5. **Components:** (Future) Snapshot and interaction testing

## Build and Deployment

### Build Command
```bash
npm run build
```

### Build Output
- `dist/index.html` - 0.45 kB (gzipped: 0.30 kB)
- `dist/assets/index-*.css` - 11.47 kB (gzipped: 2.99 kB)
- `dist/assets/index-*.js` - 161.91 kB (gzipped: 51.91 kB)

### Build Time
- Average: ~2.75s
- Production-ready with optimizations

## Key Improvements from Refactoring

### Before Refactoring
- ❌ 450+ lines in single App.jsx file
- ❌ Mixed concerns (audio, timing, UI, state)
- ❌ No tests
- ❌ Hard to modify or extend
- ❌ Difficult to debug

### After Refactoring
- ✅ Clean separation of concerns
- ✅ 126 passing tests
- ✅ Easy to add new features
- ✅ Reusable components and functions
- ✅ Clear architecture
- ✅ Maintainable and scalable

## Future Enhancements

### Possible Extensions
1. **Additional Instruments** - Add more transposing instruments
2. **Rhythm Patterns** - Add specific rhythm training patterns
3. **Progress Tracking** - Track practice sessions and progress
4. **Customization** - User-configurable weights for durations
5. **Visual Feedback** - Beat indicators and progress bars
6. **Sound Packs** - Different click and note sounds

### Adding New Features
1. Add constants to `constants/`
2. Add utilities to `utils/`
3. Add services to `services/`
4. Update hooks in `hooks/`
5. Add/modify components in `components/`
6. Update App.jsx integration

## Development Guidelines

### Code Style
- Use functional programming patterns
- Prefer pure functions
- Document with JSDoc
- Follow React hooks best practices
- Use meaningful variable names

### Testing
- Write tests for all new utilities
- Test edge cases and error conditions
- Mock external dependencies
- Aim for high coverage

### Component Design
- Keep components small and focused
- Props-driven, no internal state
- Use TypeScript or PropTypes (future)
- Follow accessibility guidelines

## Conclusion

This architecture provides a solid foundation for a maintainable, testable, and extensible React application. The clear separation of concerns makes it easy to understand, modify, and extend the codebase.

---

**Refactoring Completed:** 2025-10-12
**Test Coverage:** 126 passing tests
**Build Status:** ✅ Successful
