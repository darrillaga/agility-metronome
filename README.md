# B♭ Trumpet Agility Metronome

A web-based metronome specifically designed for trumpet players to practice agility exercises. The app randomly changes notes with random durations while maintaining a steady metronome beat.

## Features

- **Configurable Tempo**: Adjust tempo from 40 to 240 BPM with a slider
- **Random Note Changes**: Notes change randomly with random durations (whole, half, quarter, eighth notes)
- **Full Chromatic Range**: All 12 chromatic notes for B♭ trumpet (C through B)
- **Custom Note Range**: Dual-handle slider to select the lowest and highest notes for practice
- **Sound Toggle**: Enable/disable audio output
- **Display Modes**:
  - Large note display with note name and duration
  - Musical staff notation with proper treble clef and note symbols
- **Transposed Audio**: Sounds are transposed for B♭ trumpet (written C sounds as concert B♭)
- **Metronome Click**: Click sound on every beat
- **Sustained Notes**: Notes sustain for their full duration

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

1. **Start/Stop**: Click the Start button to begin the metronome. The first note will play immediately.

2. **Adjust Tempo**: Use the tempo slider to set your desired BPM (40-240). The tempo slider is disabled while playing.

3. **Set Note Range**: Use the dual-handle range slider to select your practice range. Both handles can be dragged independently. The range slider is disabled while playing.

4. **Toggle Sound**: Click the Sound button to enable/disable audio playback.

5. **Switch Display**: Click the Staff/Large button to toggle between large note display and musical staff notation.

## How It Works

- The metronome plays a click on every beat
- Notes change randomly at random durations (whole = 8 beats, half = 4 beats, quarter = 2 beats, eighth = 1 beat)
- Each new note is guaranteed to be different from the previous note
- Notes are selected only from within your chosen range
- Audio is transposed down a whole step for B♭ trumpet (written C = concert B♭)

## Project Structure

```
agility-metronome/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── src/
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # This file
```

## Technical Details

### Audio Implementation

- **Web Audio API**: Uses the Web Audio API for precise timing and audio generation
- **Scheduler**: A scheduler function runs every 25ms to schedule audio events ahead of time
- **Click Sound**: 1000Hz square wave, 0.03s duration, 0.15 volume
- **Note Sound**: Sine wave at note frequency, sustains for 90% of full duration, 0.25 volume
- **Transposition**: All frequencies are transposed down a whole step (multiply by 2^(-2/12))

### Note Frequencies (Concert Pitch)

The app uses the following frequencies for B♭ trumpet (transposed down from written pitch):

- C: 466.16 Hz (B♭4)
- C#: 493.88 Hz (B4)
- D: 523.25 Hz (C5)
- D#: 554.37 Hz (C#5)
- E: 587.33 Hz (D5)
- F: 622.25 Hz (D#5)
- F#: 659.25 Hz (E5)
- G: 698.46 Hz (F5)
- G#: 739.99 Hz (F#5)
- A: 783.99 Hz (G5)
- A#: 830.61 Hz (G#5)
- B: 880.00 Hz (A5)

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

MIT License - Feel free to use this project for your own practice or modify it as needed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Built with React, Vite, and Tailwind CSS for trumpet players who want to improve their agility and sight-reading skills.
