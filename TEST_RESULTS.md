# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.4067300000000387ms)
- ✅ should have patterns with required properties (2.0175309999999627ms)
- ✅ should have unique values (0.1593679999999722ms)
- ✅ should include Off pattern (0.23103200000002744ms)
- ✅ should include 16th notes pattern (0.20710700000006455ms)
- ✅ should include 8th note triplets pattern (0.261209000000008ms)
- ✅ should include 8th notes pattern (0.16087099999992915ms)
- ✅ should include quarter note triplets pattern (0.14389900000003308ms)
- ✅ should include quarter notes pattern (0.2259119999999939ms)
- ✅ should include half note triplets pattern (0.2606670000000122ms)
- ✅ should include half notes pattern (0.1516430000000355ms)
- ✅ should include whole notes pattern (0.13130499999999756ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.2922169999999369ms)
- ✅ should be defined (0.2901330000000826ms)
- ✅ should be the quarter notes pattern (0.1729129999999941ms)
- ✅ should be included in CLICK_PATTERNS (1.0407149999999774ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.801386999999977ms)
- ✅ should have all durations with name and beats properties (0.8660690000000386ms)
- ✅ should have whole note with 8 beats (0.195124000000078ms)
- ✅ should have half note with 4 beats (0.21255699999994704ms)
- ✅ should have quarter note with 2 beats (0.2022269999999935ms)
- ✅ should have eighth note with 1 beat (0.19454400000006444ms)
- ✅ should be ordered from longest to shortest (0.23095100000000457ms)
- ✅ should have display names for all durations (0.22103299999992032ms)
- ✅ should have proper capitalized names (0.32575999999994565ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.1239510000000337ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.24355500000001484ms)
- ✅ should have clef property (0.1463730000000396ms)
- ✅ should have comfortable range (0.2911149999999907ms)
- ✅ should have full range (0.3552439999999706ms)
- ✅ should return concert pitch when instrument is null (0.21570299999996223ms)
- ✅ should return concert pitch when transposition is 0 (0.20845900000006168ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.26704899999992904ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.34073700000010376ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.2201319999999214ms)
- ✅ should maintain octave relationships after transposition (0.28166699999997036ms)
- ✅ should use the correct transposition formula (0.18796199999997043ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.8218159999998988ms)
- ✅ should start with A0 at concert pitch (0.2889900000000125ms)
- ✅ should end with C8 at concert pitch (0.23702300000002197ms)
- ✅ should have all notes as objects with name and frequency (6.329593000000045ms)
- ✅ should have frequencies in ascending order (1.393605999999977ms)
- ✅ should include all chromatic notes (12 per octave) (1.0572870000000876ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.31047000000000935ms)
- ✅ should have correct MIN_INDEX (0.16630099999997583ms)
- ✅ should have correct MAX_INDEX (0.2745629999999437ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.22189499999990403ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.21060399999998936ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.14431999999999334ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (125.93729000000008ms)
- ✅ should handle suspended audio context (103.57574199999999ms)
- ✅ should return audio engine readiness status (104.05702599999995ms)
- ✅ should get current audio time (103.43438700000002ms)
- ✅ should respect soundEnabled prop initially true (104.4683930000001ms)
- ✅ should respect soundEnabled prop initially false (103.29744299999993ms)
- ✅ should update soundEnabled via ref when prop changes (104.71811100000014ms)
- ✅ should play click sound when audio ready and sound enabled (103.69098699999995ms)
- ✅ should not play click sound when audio not ready (2.1477249999998094ms)
- ✅ should not play click sound when sound disabled (104.60834399999976ms)
- ✅ should play note sound when audio ready and sound enabled (103.51942899999995ms)
- ✅ should not play note sound when audio not ready (2.471951999999874ms)
- ✅ should not play note sound when sound disabled (109.52689099999998ms)
- ✅ should calculate correct duration from tempo and beats (105.36880400000018ms)
- ✅ should close audio context on cleanup (102.50610599999982ms)
- ✅ should not error when closing uninitialized audio (2.9211719999998422ms)
- ✅ should handle multiple init calls gracefully (302.7413019999999ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.9621689999999035ms)
- ✅ should handle webkitAudioContext fallback (103.62709799999993ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (19.86449700000003ms)
- ✅ should initialize with random note from provided notes (3.0065700000000106ms)
- ✅ should initialize with random duration from provided durations (2.4964270000000397ms)
- ✅ should update tempo (4.198789999999917ms)
- ✅ should handle tempo as string (from input) (2.9179450000001452ms)
- ✅ should clamp tempo to valid range (3.3794379999999364ms)
- ✅ should handle invalid tempo input (2.3880240000000867ms)
- ✅ should toggle play state from stopped to playing (1.5048739999999725ms)
- ✅ should toggle play state from playing to stopped (2.5505789999999706ms)
- ✅ should reset beat to 0 when stopping (2.7788550000000214ms)
- ✅ should toggle sound from enabled to disabled (5.533555999999862ms)
- ✅ should toggle sound from disabled to enabled (2.1240510000000086ms)
- ✅ should toggle staff display from hidden to visible (6.425785999999789ms)
- ✅ should toggle staff display from visible to hidden (2.4725499999999556ms)
- ✅ should initialize with default click pattern (1.061394000000064ms)
- ✅ should update click pattern (1.4871230000001106ms)
- ✅ should change from quarter to whole note pattern (1.1560810000000856ms)
- ✅ should change to triplet pattern (0.9821759999999813ms)
- ✅ should change to off pattern (0.9909329999998135ms)
- ✅ should update range min (0.9804030000000239ms)
- ✅ should update range max (0.9260819999999512ms)
- ✅ should ensure min does not exceed max (0.9178959999999279ms)
- ✅ should ensure max does not go below min (0.9098309999999401ms)
- ✅ should update current note (0.8427350000001752ms)
- ✅ should update current duration (0.8202240000000529ms)
- ✅ should update current beat (1.1960160000000997ms)
- ✅ should maintain stable callback references (1.1820999999999913ms)
- ✅ should handle empty notes array gracefully (0.7003190000000359ms)
- ✅ should handle single note (0.8437269999999444ms)
- ✅ should handle single duration (0.6657549999999901ms)
- ✅ should handle rapid state changes (1.2648639999999887ms)
- ✅ should initialize with all durations selected (0.8136910000000626ms)
- ✅ should toggle duration selection on (1.2558579999999893ms)
- ✅ should toggle duration selection off (1.100285999999869ms)
- ✅ should not allow deselecting the last duration (1.7116500000001906ms)
- ✅ should persist selected durations to localStorage (2.0991039999998975ms)
- ✅ should load selected durations from localStorage (1.372425000000021ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.92226299999993ms)
- ✅ should return a duration object with name and beats (0.4491199999999935ms)
- ✅ should select different durations over multiple calls (0.4158470000000989ms)
- ✅ should handle single duration array (0.4311959999999999ms)
- ✅ should return a duration from the array (0.5956939999999804ms)
- ✅ should use default weights if none provided (0.23378700000000663ms)
- ✅ should respect custom weights (0.6735600000000659ms)
- ✅ should handle partial weight objects (0.241991999999982ms)
- ✅ should handle zero weights correctly (0.42039599999998245ms)
- ✅ should follow the pattern in order (0.3315099999999802ms)
- ✅ should loop the pattern (0.19254000000000815ms)
- ✅ should handle single element pattern (0.15591200000005756ms)
- ✅ should return fallback for unknown duration name (0.15333699999996497ms)
- ✅ should handle large indices (0.29458999999997104ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.107108999999923ms)
- ✅ should return a note different from current note (0.3869730000000118ms)
- ✅ should return the only note if range contains single note (0.4032839999999851ms)
- ✅ should respect min and max indices (1.423811999999998ms)
- ✅ should handle edge case where current note is the only option (0.3055309999999736ms)
- ✅ should select note within specified interval (0.35213899999996556ms)
- ✅ should return null if current note not found (0.21963100000004943ms)
- ✅ should return null if no notes in interval range (0.1670530000000099ms)
- ✅ should include notes both above and below current note (0.5182090000000699ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (2.032438999999954ms)
- ✅ should convert # to ♯ symbol (0.3769649999999274ms)
- ✅ should handle multiple sharps in name (edge case) (0.26004599999998845ms)
- ✅ should convert sharps to flats (0.504242999999974ms)
- ✅ should return natural notes unchanged (0.5125380000000632ms)
- ✅ should format whole note (0.22054300000002058ms)
- ✅ should format half note (0.15646299999991697ms)
- ✅ should format quarter note (0.17764199999999164ms)
- ✅ should format eighth note (0.2871860000000197ms)
- ✅ should return capitalized name for whole note (0.25326400000005833ms)
- ✅ should return capitalized name for half note (0.20374100000003637ms)
- ✅ should return capitalized name for quarter note (0.16231300000004012ms)
- ✅ should return capitalized name for eighth note (0.25265300000000934ms)
- ✅ should return input for unknown duration (0.3510360000000219ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.8839720000000852ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.3217109999998229ms)
- ✅ should calculate G4 at y=75 (second line) (0.2778690000000097ms)
- ✅ should calculate B4 at y=60 (middle line) (0.3149879999998575ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.3815029999998387ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.21489199999996345ms)
- ✅ should calculate F5 at y=30 (top line) (0.18133899999997993ms)
- ✅ should calculate C4 below staff at y=105 (0.18670899999983703ms)
- ✅ should calculate D4 below staff at y=97.5 (0.33849300000019866ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.344613999999865ms)
- ✅ should handle octave changes correctly (0.2663680000000568ms)
- ✅ should handle very low notes (C2) (0.4070409999999356ms)
- ✅ should handle very high notes (C7) (0.28487300000006144ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4465749999999389ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.21042400000010275ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.23130200000014156ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.14735499999983404ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.12690700000007382ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.1578349999999773ms)
- ✅ should calculate E2 below staff in bass clef (0.21938999999997577ms)
- ✅ should calculate C4 above staff in bass clef (0.15215499999999338ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.16034000000013293ms)
- ✅ should parse natural note correctly (0.9283649999999852ms)
- ✅ should parse sharp note correctly (0.2260919999998805ms)
- ✅ should handle low octaves (0.16621099999997568ms)
- ✅ should handle high octaves (0.20243799999980183ms)
- ✅ should correctly identify all natural notes (0.7591800000000148ms)
- ✅ should return empty array for notes on the staff (0.38324600000009923ms)
- ✅ should generate ledger lines below staff for C4 (0.9349379999998746ms)
- ✅ should generate ledger lines below staff for D4 (0.15114300000004732ms)
- ✅ should generate ledger lines above staff for G5 (0.1553599999999733ms)
- ✅ should generate more ledger lines for notes further from staff (0.15191399999980604ms)
- ✅ should return ledger lines in correct order (0.10288300000001982ms)
- ✅ should return ledger lines in correct order for above staff (0.09572900000011941ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.4069500000000517ms)
- ✅ should swap min and max if min > max (0.26382300000000214ms)
- ✅ should reject min below 0 (0.2660969999999452ms)
- ✅ should reject max above total notes (0.2739520000000084ms)
- ✅ should allow min === max (0.23240499999997155ms)
- ✅ should keep max if min < max (0.15884699999992336ms)
- ✅ should adjust max to equal min if min > max (0.10602799999992385ms)
- ✅ should handle equal values (0.12403100000005907ms)
- ✅ should keep min if max > min (0.20795899999995981ms)
- ✅ should adjust min to equal max if max < min (0.1295310000000427ms)
- ✅ should handle equal values (0.10236100000008719ms)
- ✅ should have correct default values (0.16752299999996012ms)
- ✅ should have default between min and max (0.2598059999999123ms)
- ✅ should return value within range unchanged (0.27839000000005854ms)
- ✅ should clamp value below minimum (0.1728130000000192ms)
- ✅ should clamp value above maximum (0.17241200000000845ms)
- ✅ should return min/max at boundaries (0.15351700000007895ms)
- ✅ should validate tempo within range (0.19040499999994154ms)
- ✅ should reject non-number values (0.14607300000000123ms)
- ✅ should reject NaN (0.18338299999993524ms)
- ✅ should reject tempo below minimum (0.36726599999997234ms)
- ✅ should reject tempo above maximum (0.24972600000000966ms)
- ✅ should accept boundary values (0.13496199999997316ms)
- ✅ should return 0% for minimum tempo (0.11465399999997317ms)
- ✅ should return 100% for maximum tempo (0.08287499999994452ms)
- ✅ should return 50% for midpoint tempo (0.08345600000006925ms)
- ✅ should return 40% for tempo 120 (0.07659400000000005ms)
- ✅ should return correct percentages for various tempos (0.22104400000000624ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (3.890072000000032ms)
- ✅ should create analyser and connect to stream (3.2337960000000976ms)
- ✅ should handle initialization errors (9.800421000000028ms)
- ✅ should convert A4 (440 Hz) correctly (1.9973839999998972ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.1586560000000645ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.9561069999999745ms)
- ✅ should handle out of range frequencies (0.8279879999998911ms)
- ✅ should calculate cents offset for slightly sharp notes (0.876137999999969ms)
- ✅ should calculate cents offset for slightly flat notes (0.9779379999999946ms)
- ✅ should return null for silent signal (1.9748720000000048ms)
- ✅ should return null for very weak signal (1.2489450000000488ms)
- ✅ should detect a strong periodic signal (10.292371000000003ms)
- ✅ should not start without initialization (0.554377000000045ms)
- ✅ should start after initialization (1.5975770000000011ms)
- ✅ should stop detection (0.9021169999999756ms)
- ✅ should not start twice (1.0264889999999696ms)
- ✅ should cleanup resources on dispose (4.95508099999995ms)

## Test Execution

```bash
npm test              # Run tests once
npm test -- --run     # Run tests in CI mode
npm test:ui           # Run with UI
npm test:coverage     # Run with coverage report
```

## Test Framework

- **Testing Library**: Vitest 3.2.4
- **Environment**: jsdom (for DOM testing)
- **Assertions**: Vitest built-in matchers
- **Coverage**: V8 provider

---

*Generated: 2025-10-29*
*Auto-generated by test reporter*
