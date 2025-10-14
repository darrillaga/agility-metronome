# Agility Metronome

A web-based metronome designed for musicians to practice agility exercises with random note changes and durations. Supports multiple instruments including B♭ Trumpet, E♭ Alto Sax, and Concert Pitch.

## Features

- **Multiple Instruments**: Support for B♭ Trumpet, E♭ Alto Sax, and Concert Pitch with proper transposition
- **Configurable Tempo**: Adjust tempo from 40 to 240 BPM with a slider
- **Random Note Changes**: Notes change randomly with random durations (whole, half, quarter, eighth notes)
- **Extended Range**: Full chromatic range from C2 to C7 (61 notes, 5 octaves)
- **Custom Note Range**: Min/max dropdown selectors to choose practice range
- **Click Pattern Selector**: Choose from 9 different click patterns including triplets (16th, 8th triplet, 8th, quarter triplet, quarter, half triplet, half, whole, or off)
- **Separate Audio Controls**: Independent toggles for click sound and note sound
- **Next Note Preview**: Optional preview of the upcoming note
- **Display Modes**:
  - Large note display with note name and duration (includes next note preview)
  - Musical staff notation with proper treble clef, note symbols, and ledger lines
- **Transposed Audio**: Sounds are properly transposed for each instrument (B♭ trumpet written C sounds as concert B♭, E♭ alto sax written C sounds as concert E♭)
- **Settings Persistence**: Your preferences are automatically saved and restored
- **iOS Silent Mode Fix**: Works even when iOS device is in silent mode

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Web Audio API
- Lucide React (icons)

## Setup Instructions

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agility-metronome.git
cd agility-metronome
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Push your code to the `main` branch
5. The GitHub Action will automatically build and deploy your site

Your site will be available at: `https://yourusername.github.io/agility-metronome/`

### Manual Deployment:

If you prefer manual deployment:

```bash
npm run build
# Then manually upload the contents of the dist folder to your hosting provider
```

## Usage Guide

1. **Select Instrument**: Choose your instrument from the dropdown (B♭ Trumpet, E♭ Alto Sax, or Concert Pitch)

2. **Start/Stop**: Click the Play button to begin the metronome. The first note will play immediately.

3. **Adjust Tempo**: Use the tempo slider to set your desired BPM (40-240). The tempo slider is disabled while playing.

4. **Set Note Range**: Use the min/max dropdowns to select your practice range. The range selectors are disabled while playing.

5. **Choose Click Pattern**: Select from 9 different click patterns to match your practice needs.

6. **Audio Controls**:
   - Toggle sound on/off (mutes all audio)
   - Toggle click sound independently
   - Toggle note sound independently

7. **Switch Display**: Click the Staff/Large button to toggle between large note display and musical staff notation.

8. **Next Note Preview**: In large note view, you can see the upcoming note (optional feature)

## How It Works

- The metronome plays a click based on your selected click pattern
- Notes change randomly at random durations (whole = 8 beats, half = 4 beats, quarter = 2 beats, eighth = 1 beat)
- Each new note is guaranteed to be different from the previous note
- Notes are selected only from within your chosen range
- Audio is transposed according to the selected instrument:
  - B♭ Trumpet: transposed down a whole step (written C = concert B♭)
  - E♭ Alto Sax: transposed down a major 6th (written C = concert E♭)
  - Concert Pitch: no transposition
- Click patterns support standard rhythms and triplets (8th triplet, quarter triplet, half triplet)
- Settings are automatically saved to your browser's localStorage

## Project Structure

```
agility-metronome/
├── .github/
│   ├── ISSUE_TEMPLATE/          # GitHub issue templates
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment workflow
├── src/
│   ├── constants/               # Application constants
│   ├── utils/                   # Pure utility functions
│   ├── services/                # Business logic services
│   ├── hooks/                   # React custom hooks
│   ├── components/              # Presentational React components
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── README.md                    # This file
├── ARCHITECTURE.md              # Detailed architecture documentation
├── ROADMAP.md                   # Planned features and improvements
└── TEST_RESULTS.md              # Test suite results and coverage
```

## Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - Detailed architecture and technical implementation
- [ROADMAP.md](ROADMAP.md) - Planned features and future improvements
- [TEST_RESULTS.md](TEST_RESULTS.md) - Test coverage and results

## Technical Details

### Audio Implementation

- **Web Audio API**: Uses the Web Audio API for precise timing and audio generation
- **Scheduler**: Look-ahead scheduler runs every 25ms to schedule audio events with 0.1s look-ahead
- **Click Sound**: 1000Hz square wave, 0.03s duration, 0.15 volume
- **Note Sound**: Sine wave at transposed note frequency, sustains for 90% of full duration, 0.25 volume
- **iOS Fix**: Implements audio unlock workaround for iOS silent mode restrictions

### Instrument Transposition Architecture

The app uses a clean separation between concert pitch and instrument transposition:

- **Note Frequencies**: Stored as standard concert pitch (A440 tuning)
- **Transposition**: Applied at playback time using the formula `f_transposed = f_concert × 2^(transposition/12)`
- **Supported Instruments**:
  - B♭ Trumpet: Transposition = -2 semitones (whole step down)
  - E♭ Alto Sax: Transposition = -9 semitones (major 6th down)
  - Concert Pitch: Transposition = 0 semitones (no transposition)
- **Extensibility**: Easy to add other transposing instruments (Clarinet, French Horn, Tenor Sax, etc.)

Example for B♭ trumpet (middle octave written C4-B4):
- Written C4: 261.63 Hz concert → sounds as B♭3 (233.08 Hz)
- Written D4: 293.66 Hz concert → sounds as C4 (261.63 Hz)
- Written A4: 440.00 Hz concert → sounds as G4 (392.00 Hz)
- Written B4: 493.88 Hz concert → sounds as A4 (440.00 Hz)

The transposition is handled by `getTransposedFrequency()` in [src/constants/instruments.js](src/constants/instruments.js).

## Browser Compatibility

This app works in all modern browsers that support:
- Web Audio API
- ES6+ JavaScript
- CSS Grid and Flexbox

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is licensed under the [Elastic License 2.0](LICENSE).

**What this means:**
- ✅ Free to use for personal, educational, and internal business purposes
- ✅ You can modify and distribute the software
- ✅ Source code is openly available for learning and contribution
- ❌ You cannot provide this software as a hosted/managed service commercially without permission

For commercial use or to provide this as a service, please contact the repository owner.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Testing

The project includes a comprehensive test suite covering constants, utilities, and services:

```bash
npm test              # Run tests once
npm test -- --run     # Run tests in CI mode
npm test:ui           # Run with UI
npm test:coverage     # Run with coverage report
```

See [TEST_RESULTS.md](TEST_RESULTS.md) for detailed test coverage information.

## Acknowledgments

Built with React, Vite, and Tailwind CSS for musicians who want to improve their agility and sight-reading skills across multiple instruments.
