# Agility Metronome - Architecture Documentation

## Overview

This document describes the architecture of the Agility Metronome application, organized into a clean, maintainable, and testable structure.

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
│   ├── instruments.js   # Instrument configurations (B♭ Trumpet, E♭ Alto Sax, Concert)
│   ├── clickPatterns.js # Metronome click pattern definitions
│   ├── index.js         # Exports all constants
│   └── __tests__/       # Constants tests
│
├── utils/               # Pure utility functions
│   ├── musicTheory/     # Music theory calculations
│   │   └── notePositions.js    # Staff position calculations & ledger lines
│   ├── formatting/      # Data formatting utilities
│   │   ├── noteName.js         # Note name formatting
│   │   └── durationName.js     # Duration name formatting
│   ├── validation/      # Input validation
│   │   ├── rangeValidator.js   # Note range validation
│   │   └── tempoValidator.js   # Tempo validation
│   ├── storage/         # LocalStorage utilities
│   │   ├── localStorage.js     # Settings persistence
│   │   └── index.js            # Storage exports
│   ├── index.js         # Exports all utilities
│   └── __tests__/       # Utils tests
│
├── services/            # Business logic services
│   ├── audioEngine/     # Web Audio API management
│   │   ├── AudioEngine.js      # AudioContext lifecycle
│   │   ├── clickPlayer.js      # Metronome click sounds
│   │   ├── notePlayer.js       # Musical note sounds
│   │   ├── iosAudioUnlock.js   # iOS silent mode workaround
│   │   └── index.js            # Audio engine exports
│   ├── scheduler/       # Timing and scheduling
│   │   ├── createScheduler.js  # Precise timing scheduler factory
│   │   └── index.js            # Scheduler exports
│   ├── noteGenerator/   # Random note/duration selection
│   │   ├── noteSelector.js     # Note selection logic
│   │   ├── durationSelector.js # Duration selection logic
│   │   └── index.js            # Generator exports
│   ├── index.js         # Exports all services
│   └── __tests__/       # Services tests
│
├── hooks/               # React custom hooks
│   ├── useAudioEngine.js       # Audio management hook
│   ├── useMetronome.js         # State management hook with localStorage
│   └── index.js         # Hook exports
│
├── components/          # Presentational React components
│   ├── MetronomeContainer.jsx  # Main container component
│   ├── NoteDisplay/     # Note display components
│   │   ├── NoteDisplay.jsx          # Display switcher
│   │   ├── LargeNoteView.jsx        # Large text view
│   │   └── StaffNotationView.jsx    # Staff notation view
│   ├── Controls/        # Control components
│   │   ├── PlaybackControls.jsx     # Play/pause/sound/click/note buttons
│   │   ├── TempoSlider.jsx          # Tempo slider
│   │   ├── NoteRangeSelector.jsx    # Note range min/max dropdowns
│   │   ├── ClickPatternSelector.jsx # Click pattern selector
│   │   └── InstrumentSelector.jsx   # Instrument selector
│   ├── MusicNotation/   # Music notation components
│   │   ├── Staff.jsx           # Musical staff
│   │   ├── TrebleClef.jsx      # Treble clef symbol
│   │   ├── Note.jsx            # Musical note
│   │   ├── Sharp.jsx           # Sharp accidental
│   │   └── LedgerLines.jsx     # Ledger lines
│   └── index.js         # Component exports
│
├── App.jsx              # Main application (orchestrates all layers)
└── main.jsx             # React entry point
```

## Layer Descriptions

### Constants Layer

**Purpose:** Centralize all application data and configuration

**Files:**
- `constants/notes.js` - 61 notes from C2 to C7 with frequencies
- `constants/durations.js` - Note durations (whole, half, quarter, eighth)
- `constants/staffConfig.js` - Staff notation positioning constants
- `constants/instruments.js` - Instrument configurations (B♭ Trumpet, E♭ Alto Sax, Concert Pitch)
- `constants/clickPatterns.js` - Click pattern options (Off, 16th, 8th triplet, 8th, quarter triplet, quarter, half triplet, half, whole)

**Key Features:**
- Immutable data sources
- Easy to extend for new instruments and click patterns
- Type-safe with JSDoc annotations
- Supports multiple transposing instruments with proper frequency transposition

### Utils Layer

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

4. **Storage** (`utils/storage/`)
   - `saveSettings()` - Persists settings to localStorage
   - `loadSettings()` - Loads and validates settings from localStorage
   - `clearSettings()` - Clears stored settings

**Key Features:**
- Pure functions (no side effects)
- Comprehensive edge case handling
- Easy to unit test

### Services Layer

**Purpose:** Business logic and external API interactions

**Modules:**

1. **Audio Engine** (`services/audioEngine/`)
   - `AudioEngine` class - Manages AudioContext lifecycle
   - `playClick()` - Generates metronome click sounds
   - `playNote()` - Generates musical note sounds with instrument transposition
   - `iosAudioUnlock()` - iOS silent mode workaround for Web Audio API
   - Handles Android/iOS audio context issues

2. **Scheduler** (`services/scheduler/`)
   - `createScheduler()` - Factory function creating precise timing scheduler
   - Implements look-ahead scheduling for accurate timing
   - Uses 25ms interval with 0.1s look-ahead
   - Supports configurable click patterns (including triplets)
   - Handles beat tracking and note duration changes

3. **Note Generator** (`services/noteGenerator/`)
   - `selectRandomNote()` - Random note selection within range
   - `selectWeightedDuration()` - Weighted random duration selection
   - Ensures variety (no immediate repeats)

**Key Features:**
- Encapsulated business logic
- Handles browser compatibility issues
- Testable with mocks

### Hooks Layer

**Purpose:** React state management and side effects

**Hooks:**

1. **useAudioEngine** - Audio management
   - Manages AudioContext lifecycle
   - Provides playback functions
   - Handles soundEnabled, clickEnabled, noteEnabled states via refs (immediate response)
   - Returns: `initAudio`, `playClickSound`, `playNoteSound`, `getAudioContext`

2. **useMetronome** - State management with persistence
   - Manages all metronome state (tempo, playing, sound, click, note, instrument, clickPattern, etc.)
   - Integrates with localStorage to persist user settings
   - Provides state update functions
   - Returns: state values and update functions
   - Saves settings automatically on relevant state changes

**Key Features:**
- Separates concerns from UI
- Reusable across components
- Follows React best practices (useCallback, useEffect, useRef)
- Persists user preferences automatically
- Scheduler integrated directly in App.jsx for stability

### Components Layer

**Purpose:** Presentational UI components

**Component Hierarchy:**

```
MetronomeContainer
├── InstrumentSelector
├── NoteDisplay
│   ├── LargeNoteView (shows current and next note preview)
│   └── StaffNotationView
│       └── Staff
│           ├── TrebleClef
│           ├── LedgerLines
│           ├── Sharp
│           └── Note
├── PlaybackControls (play/pause, sound, click, note, staff view toggle)
├── TempoSlider
├── NoteRangeSelector (min/max dropdowns)
└── ClickPatternSelector
```

**Key Features:**
- Fully presentational (no business logic)
- Prop-driven
- Reusable and composable
- Easy to test with React Testing Library

### Integration Layer

**Purpose:** Orchestrate all layers in App.jsx

**App.jsx Structure:**
```javascript
const App = () => {
  // 1. State management (useMetronome) with localStorage persistence
  const metronome = useMetronome(NOTES, DURATIONS);

  // 2. Audio engine (useAudioEngine) with click/note toggles
  const audio = useAudioEngine(soundEnabled, clickEnabled, noteEnabled);

  // 3. Scheduler refs for timing state
  const schedulerIdRef = useRef(null);
  const nextNoteTimeRef = useRef(0);
  // ... other timing refs

  // 4. Scheduler factory (createScheduler) - stable reference
  const schedulerRef = useRef(createScheduler({...}));

  // 5. Playback control (combines all hooks and scheduler)
  const handleTogglePlay = async () => {
    // Initialize audio, start/stop scheduler
  };

  // 6. Render (passes state and handlers to container)
  return <MetronomeContainer state={...} handlers={...} notes={NOTES} />;
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

Build output will be placed in the `dist/` directory, optimized and ready for production deployment.

## Key Improvements from Refactoring

### Before Refactoring
- ❌ 450+ lines in single App.jsx file
- ❌ Mixed concerns (audio, timing, UI, state)
- ❌ No tests
- ❌ Hard to modify or extend
- ❌ Difficult to debug

### After Refactoring
- ✅ Clean separation of concerns
- ✅ Comprehensive test coverage
- ✅ Easy to add new features
- ✅ Reusable components and functions
- ✅ Clear architecture
- ✅ Maintainable and scalable

## Future Enhancements

### Implemented Features
1. ✅ **Additional Instruments** - E♭ Alto Sax and Concert Pitch added
2. ✅ **Click Patterns** - Configurable click patterns including triplets (16th, 8th triplet, 8th, quarter triplet, quarter, half triplet, half, whole, off)
3. ✅ **Settings Persistence** - User preferences saved to localStorage
4. ✅ **Next Note Preview** - Optional preview of upcoming note
5. ✅ **Separate Audio Controls** - Independent click and note sound toggles
6. ✅ **Note Range Dropdowns** - Replaced dual slider with min/max dropdowns
7. ✅ **iOS Silent Mode Fix** - Audio unlock workaround for iOS devices
8. ✅ **Dynamic Ledger Lines** - Proper rendering for extended note ranges

### Possible Future Extensions
1. **More Instruments** - French Horn, Clarinet, Tenor Sax, etc.
2. **Rhythm Patterns** - Specific rhythm training patterns and exercises
3. **Progress Tracking** - Track practice sessions and progress over time
4. **Customization** - User-configurable weights for durations
5. **Visual Beat Indicator** - Visual feedback for current beat position
6. **Sound Packs** - Different click and note sounds/timbres

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
