# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.4244889999999941ms)
- ✅ should have patterns with required properties (1.7407240000000002ms)
- ✅ should have unique values (0.1609730000000127ms)
- ✅ should include Off pattern (0.22967199999993682ms)
- ✅ should include 16th notes pattern (0.20574699999997392ms)
- ✅ should include 8th note triplets pattern (0.22139600000002702ms)
- ✅ should include 8th notes pattern (0.1715719999999692ms)
- ✅ should include quarter note triplets pattern (0.1363969999999881ms)
- ✅ should include quarter notes pattern (0.2222990000000209ms)
- ✅ should include half note triplets pattern (0.2651989999999387ms)
- ✅ should include half notes pattern (0.1484699999999748ms)
- ✅ should include whole notes pattern (0.176501999999914ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.29056700000001ms)
- ✅ should be defined (0.26315500000009706ms)
- ✅ should be the quarter notes pattern (0.19504699999993136ms)
- ✅ should be included in CLICK_PATTERNS (1.0167519999999968ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.790930000000003ms)
- ✅ should have all durations with name and beats properties (0.863234000000034ms)
- ✅ should have whole note with 8 beats (0.21216900000001715ms)
- ✅ should have half note with 4 beats (0.24436000000002878ms)
- ✅ should have quarter note with 2 beats (0.21157899999991514ms)
- ✅ should have eighth note with 1 beat (0.16092299999991155ms)
- ✅ should be ordered from longest to shortest (0.27348400000005313ms)
- ✅ should have display names for all durations (0.20370300000001862ms)
- ✅ should have proper capitalized names (0.263225000000034ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.1474810000000844ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.36811199999999644ms)
- ✅ should have clef property (0.23216600000000653ms)
- ✅ should have comfortable range (0.37331299999993917ms)
- ✅ should have full range (0.4172760000000153ms)
- ✅ should return concert pitch when instrument is null (0.27396599999997306ms)
- ✅ should return concert pitch when transposition is 0 (0.20684899999992012ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.28793100000007144ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.3212750000000142ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.23759800000004816ms)
- ✅ should maintain octave relationships after transposition (0.2710499999999456ms)
- ✅ should use the correct transposition formula (0.1911800000000312ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.9255340000000842ms)
- ✅ should start with A0 at concert pitch (0.324561000000017ms)
- ✅ should end with C8 at concert pitch (0.23501199999998335ms)
- ✅ should have all notes as objects with name and frequency (6.39243799999997ms)
- ✅ should have frequencies in ascending order (1.4057759999999462ms)
- ✅ should include all chromatic notes (12 per octave) (1.3970689999999877ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.3916469999999208ms)
- ✅ should have correct MIN_INDEX (0.12764100000003964ms)
- ✅ should have correct MAX_INDEX (0.19496700000001965ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.15338899999994737ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.1660229999999956ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.10254399999996622ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (125.3134869999999ms)
- ✅ should handle suspended audio context (103.56016899999986ms)
- ✅ should return audio engine readiness status (104.63063499999998ms)
- ✅ should get current audio time (102.73917799999981ms)
- ✅ should respect soundEnabled prop initially true (105.45509900000002ms)
- ✅ should respect soundEnabled prop initially false (103.19620399999985ms)
- ✅ should update soundEnabled via ref when prop changes (103.71266300000002ms)
- ✅ should play click sound when audio ready and sound enabled (102.41839699999991ms)
- ✅ should not play click sound when audio not ready (2.7411070000002837ms)
- ✅ should not play click sound when sound disabled (103.08148299999993ms)
- ✅ should play note sound when audio ready and sound enabled (103.33787100000018ms)
- ✅ should not play note sound when audio not ready (3.4449100000001636ms)
- ✅ should not play note sound when sound disabled (103.23425099999986ms)
- ✅ should calculate correct duration from tempo and beats (103.36288999999988ms)
- ✅ should close audio context on cleanup (102.49286200000006ms)
- ✅ should not error when closing uninitialized audio (2.930492000000413ms)
- ✅ should handle multiple init calls gracefully (302.9262269999999ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.5580310000000281ms)
- ✅ should handle webkitAudioContext fallback (103.51335500000005ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (20.553793999999925ms)
- ✅ should initialize with random note from provided notes (2.8232809999999517ms)
- ✅ should initialize with random duration from provided durations (2.452534000000014ms)
- ✅ should update tempo (4.146038999999973ms)
- ✅ should handle tempo as string (from input) (2.8508730000000924ms)
- ✅ should clamp tempo to valid range (3.3590189999999893ms)
- ✅ should handle invalid tempo input (1.9666900000001988ms)
- ✅ should toggle play state from stopped to playing (1.4901930000000903ms)
- ✅ should toggle play state from playing to stopped (2.4977890000000116ms)
- ✅ should reset beat to 0 when stopping (1.9630329999999958ms)
- ✅ should toggle sound from enabled to disabled (2.0402080000001206ms)
- ✅ should toggle sound from disabled to enabled (5.285673999999972ms)
- ✅ should toggle staff display from hidden to visible (5.268351000000166ms)
- ✅ should toggle staff display from visible to hidden (2.3651089999998476ms)
- ✅ should initialize with default click pattern (1.9620890000001054ms)
- ✅ should update click pattern (1.330402999999933ms)
- ✅ should change from quarter to whole note pattern (1.4207629999998517ms)
- ✅ should change to triplet pattern (1.4057439999999133ms)
- ✅ should change to off pattern (1.420823000000155ms)
- ✅ should update range min (1.4125679999999647ms)
- ✅ should update range max (1.3399199999998928ms)
- ✅ should ensure min does not exceed max (1.331976000000168ms)
- ✅ should ensure max does not go below min (1.28096000000005ms)
- ✅ should update current note (1.1262790000000678ms)
- ✅ should update current duration (1.1569060000001627ms)
- ✅ should update current beat (1.2444009999999253ms)
- ✅ should maintain stable callback references (1.4667590000001383ms)
- ✅ should handle empty notes array gracefully (0.6896970000000238ms)
- ✅ should handle single note (0.8269960000000083ms)
- ✅ should handle single duration (0.6732269999999971ms)
- ✅ should handle rapid state changes (1.2146450000000186ms)
- ✅ should initialize with all durations selected (0.8402710000000297ms)
- ✅ should toggle duration selection on (1.2811299999998482ms)
- ✅ should toggle duration selection off (1.125376999999844ms)
- ✅ should not allow deselecting the last duration (1.7643090000001393ms)
- ✅ should persist selected durations to localStorage (1.3608000000001539ms)
- ✅ should load selected durations from localStorage (1.2763700000000426ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.8890049999999974ms)
- ✅ should return a duration object with name and beats (0.43103100000007544ms)
- ✅ should select different durations over multiple calls (0.40831900000000587ms)
- ✅ should handle single duration array (0.41614299999992ms)
- ✅ should return a duration from the array (0.6090860000000475ms)
- ✅ should use default weights if none provided (0.2260949999999866ms)
- ✅ should respect custom weights (0.6558440000000019ms)
- ✅ should handle partial weight objects (0.24296700000002147ms)
- ✅ should handle zero weights correctly (0.37596700000005967ms)
- ✅ should follow the pattern in order (0.3310230000000729ms)
- ✅ should loop the pattern (0.18639099999995778ms)
- ✅ should handle single element pattern (0.2608109999999897ms)
- ✅ should return fallback for unknown duration name (0.27017799999998715ms)
- ✅ should handle large indices (0.3762980000000198ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.0940420000000586ms)
- ✅ should return a note different from current note (0.3891519999999673ms)
- ✅ should return the only note if range contains single note (0.4338669999999638ms)
- ✅ should respect min and max indices (1.400985999999989ms)
- ✅ should handle edge case where current note is the only option (0.29582700000003115ms)
- ✅ should select note within specified interval (0.39310999999997875ms)
- ✅ should return null if current note not found (0.2281189999999924ms)
- ✅ should return null if no notes in interval range (0.19022800000004736ms)
- ✅ should include notes both above and below current note (0.5648029999999835ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (2.0461400000000367ms)
- ✅ should convert # to ♯ symbol (0.42006000000003496ms)
- ✅ should handle multiple sharps in name (edge case) (0.25105199999995875ms)
- ✅ should convert sharps to flats (0.576223999999911ms)
- ✅ should return natural notes unchanged (0.4575609999999415ms)
- ✅ should format whole note (0.2687959999999521ms)
- ✅ should format half note (0.18274300000007315ms)
- ✅ should format quarter note (0.17931700000008277ms)
- ✅ should format eighth note (0.31835899999998674ms)
- ✅ should return capitalized name for whole note (0.27001800000005005ms)
- ✅ should return capitalized name for half note (0.17629099999999198ms)
- ✅ should return capitalized name for quarter note (0.1514750000000049ms)
- ✅ should return capitalized name for eighth note (0.25255600000002687ms)
- ✅ should return input for unknown duration (0.3787330000000111ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.8511519999999564ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.2744159999999738ms)
- ✅ should calculate G4 at y=75 (second line) (0.244530000000168ms)
- ✅ should calculate B4 at y=60 (middle line) (0.32547199999999066ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.33117300000003524ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.21679700000004232ms)
- ✅ should calculate F5 at y=30 (top line) (0.1765219999999772ms)
- ✅ should calculate C4 below staff at y=105 (0.17165300000010575ms)
- ✅ should calculate D4 below staff at y=97.5 (0.31464200000004894ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.37306200000011813ms)
- ✅ should handle octave changes correctly (0.28544699999997647ms)
- ✅ should handle very low notes (C2) (0.37612699999999677ms)
- ✅ should handle very high notes (C7) (0.2995229999999083ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4212630000001809ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.22182699999984834ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.2542089999999462ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.15869900000006965ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.15906900000004498ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.15204599999992752ms)
- ✅ should calculate E2 below staff in bass clef (0.24245599999994738ms)
- ✅ should calculate C4 above staff in bass clef (0.1880940000000919ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.164688999999953ms)
- ✅ should parse natural note correctly (0.9122760000000198ms)
- ✅ should parse sharp note correctly (0.2094839999999749ms)
- ✅ should handle low octaves (0.16264599999999518ms)
- ✅ should handle high octaves (0.24391799999989416ms)
- ✅ should correctly identify all natural notes (0.7549699999999575ms)
- ✅ should return empty array for notes on the staff (0.47703800000022056ms)
- ✅ should generate ledger lines below staff for C4 (0.993900000000167ms)
- ✅ should generate ledger lines below staff for D4 (0.14303900000004433ms)
- ✅ should generate ledger lines above staff for G5 (0.13629600000012942ms)
- ✅ should generate more ledger lines for notes further from staff (0.14791799999989053ms)
- ✅ should return ledger lines in correct order (0.1331599999998616ms)
- ✅ should return ledger lines in correct order for above staff (0.09465799999998126ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.85201399999994ms)
- ✅ should swap min and max if min > max (0.35354499999994005ms)
- ✅ should reject min below 0 (0.3973480000000791ms)
- ✅ should reject max above total notes (0.3478539999999839ms)
- ✅ should allow min === max (0.3033700000000863ms)
- ✅ should keep max if min < max (0.19754100000000108ms)
- ✅ should adjust max to equal min if min > max (0.14017300000000432ms)
- ✅ should handle equal values (0.13586599999996452ms)
- ✅ should keep min if max > min (0.2836539999999559ms)
- ✅ should adjust min to equal max if max < min (0.20736999999996897ms)
- ✅ should handle equal values (0.13939299999992727ms)
- ✅ should have correct default values (0.23738700000001245ms)
- ✅ should have default between min and max (0.28991499999995085ms)
- ✅ should return value within range unchanged (0.3790729999999485ms)
- ✅ should clamp value below minimum (0.24908900000002632ms)
- ✅ should clamp value above maximum (0.2605199999999286ms)
- ✅ should return min/max at boundaries (0.1832840000000715ms)
- ✅ should validate tempo within range (0.2508420000000342ms)
- ✅ should reject non-number values (0.19234199999993962ms)
- ✅ should reject NaN (0.17065100000002076ms)
- ✅ should reject tempo below minimum (0.3828200000000379ms)
- ✅ should reject tempo above maximum (0.24981900000000223ms)
- ✅ should accept boundary values (0.19851299999993444ms)
- ✅ should return 0% for minimum tempo (0.2007380000000012ms)
- ✅ should return 100% for maximum tempo (0.13533400000005713ms)
- ✅ should return 50% for midpoint tempo (0.14208700000006047ms)
- ✅ should return 40% for tempo 120 (0.13810899999998583ms)
- ✅ should return correct percentages for various tempos (0.31748800000002575ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (5.594594000000029ms)
- ✅ should create analyser and connect to stream (4.319634999999948ms)
- ✅ should handle initialization errors (11.851002999999992ms)
- ✅ should convert A4 (440 Hz) correctly (1.41900899999996ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.1070230000000265ms)
- ✅ should convert E4 (329.63 Hz) correctly (1.203614000000016ms)
- ✅ should handle out of range frequencies (0.8705870000000004ms)
- ✅ should calculate cents offset for slightly sharp notes (1.0013430000000199ms)
- ✅ should calculate cents offset for slightly flat notes (0.9557079999999587ms)
- ✅ should return null for silent signal (1.2962890000000016ms)
- ✅ should return null for very weak signal (0.9228060000000369ms)
- ✅ should detect a strong periodic signal (15.000377999999955ms)
- ✅ should not start without initialization (0.7244930000000522ms)
- ✅ should start after initialization (2.1066529999999375ms)
- ✅ should stop detection (1.1064509999999927ms)
- ✅ should not start twice (1.2003680000000259ms)
- ✅ should cleanup resources on dispose (0.9883889999999838ms)

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
