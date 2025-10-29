# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 225
**Passed:** 225 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (3.9754970000000185ms)
- ✅ should have patterns with required properties (1.8192650000000867ms)
- ✅ should have unique values (0.16330300000004172ms)
- ✅ should include Off pattern (0.28637099999991733ms)
- ✅ should include 16th notes pattern (0.21765400000003865ms)
- ✅ should include 8th note triplets pattern (0.22604899999998906ms)
- ✅ should include 8th notes pattern (0.1521420000000262ms)
- ✅ should include quarter note triplets pattern (0.2950379999999768ms)
- ✅ should include quarter notes pattern (0.2308980000000247ms)
- ✅ should include half note triplets pattern (0.22514699999999266ms)
- ✅ should include half notes pattern (0.14680199999997967ms)
- ✅ should include whole notes pattern (0.13140399999997499ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.9949960000000146ms)
- ✅ should be defined (0.2748100000000022ms)
- ✅ should be the quarter notes pattern (0.17444399999999405ms)
- ✅ should be included in CLICK_PATTERNS (1.0847219999999425ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 5 duration types (2.635558999999944ms)
- ✅ should have all durations with name and beats properties (1.650180999999975ms)
- ✅ should have whole note with 8 beats (0.2814620000000332ms)
- ✅ should have half note with 4 beats (0.3498889999999619ms)
- ✅ should have quarter note with 2 beats (0.35365600000000086ms)
- ✅ should have eighth note with 1 beat (0.24427300000002106ms)
- ✅ should have sixteenth note with 0.5 beats (0.2503639999999905ms)
- ✅ should be ordered from longest to shortest (0.40548200000000634ms)
- ✅ should have display names for all durations (0.5395209999999224ms)
- ✅ should have musical symbols as names (0.3108670000000302ms)
- ✅ should have text display names for all durations (0.36505699999997887ms)
- ✅ should have proper capitalized names (0.375725999999986ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.6393410000000586ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.2962199999999484ms)
- ✅ should have clef property (0.15925499999991644ms)
- ✅ should have comfortable range (0.23171000000002095ms)
- ✅ should have full range (0.2720849999999473ms)
- ✅ should return concert pitch when instrument is null (0.18473200000005363ms)
- ✅ should return concert pitch when transposition is 0 (0.1360620000000381ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.17407300000002124ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.24447300000008454ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.1539660000000822ms)
- ✅ should maintain octave relationships after transposition (0.16324199999996836ms)
- ✅ should use the correct transposition formula (0.1225170000000162ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.6900000000000546ms)
- ✅ should start with A0 at concert pitch (0.42056000000002314ms)
- ✅ should end with C8 at concert pitch (0.37011600000005274ms)
- ✅ should have all notes as objects with name and frequency (10.497973000000002ms)
- ✅ should have frequencies in ascending order (2.8844010000000253ms)
- ✅ should include all chromatic notes (12 per octave) (1.980444000000034ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.42596000000003187ms)
- ✅ should have correct MIN_INDEX (0.18869000000006508ms)
- ✅ should have correct MAX_INDEX (0.29672100000004775ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.3034930000000031ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.20170499999994718ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.14207299999998213ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (119.07735700000012ms)
- ✅ should handle suspended audio context (103.66082400000005ms)
- ✅ should return audio engine readiness status (104.94899400000008ms)
- ✅ should get current audio time (103.16953799999987ms)
- ✅ should respect soundEnabled prop initially true (103.40522199999987ms)
- ✅ should respect soundEnabled prop initially false (103.47891000000004ms)
- ✅ should update soundEnabled via ref when prop changes (105.26223700000014ms)
- ✅ should play click sound when audio ready and sound enabled (104.17021100000011ms)
- ✅ should not play click sound when audio not ready (2.5696160000002237ms)
- ✅ should not play click sound when sound disabled (103.29617199999984ms)
- ✅ should play note sound when audio ready and sound enabled (104.22607299999981ms)
- ✅ should not play note sound when audio not ready (2.4011140000002342ms)
- ✅ should not play note sound when sound disabled (105.41439799999989ms)
- ✅ should calculate correct duration from tempo and beats (103.09853599999997ms)
- ✅ should close audio context on cleanup (102.8310419999998ms)
- ✅ should not error when closing uninitialized audio (3.166725000000042ms)
- ✅ should handle multiple init calls gracefully (302.48097899999993ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (2.379124000000047ms)
- ✅ should handle webkitAudioContext fallback (102.59997199999998ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (20.27898600000003ms)
- ✅ should initialize with random note from provided notes (2.8610180000000582ms)
- ✅ should initialize with random duration from provided durations (2.1647959999997965ms)
- ✅ should update tempo (4.434966999999915ms)
- ✅ should handle tempo as string (from input) (3.1184749999999894ms)
- ✅ should clamp tempo to valid range (3.354863000000023ms)
- ✅ should handle invalid tempo input (2.4808720000000903ms)
- ✅ should toggle play state from stopped to playing (2.489857999999913ms)
- ✅ should toggle play state from playing to stopped (3.3529399999999896ms)
- ✅ should reset beat to 0 when stopping (3.0101629999999204ms)
- ✅ should toggle sound from enabled to disabled (4.659053999999969ms)
- ✅ should toggle sound from disabled to enabled (2.2740289999999277ms)
- ✅ should toggle staff display from hidden to visible (2.018363999999792ms)
- ✅ should toggle staff display from visible to hidden (2.5056079999999383ms)
- ✅ should initialize with default click pattern (1.287307999999939ms)
- ✅ should update click pattern (1.4554200000000037ms)
- ✅ should change from quarter to whole note pattern (1.5204510000000937ms)
- ✅ should change to triplet pattern (1.3751609999999346ms)
- ✅ should change to off pattern (1.3827350000001388ms)
- ✅ should update range min (1.551588000000038ms)
- ✅ should update range max (1.47802200000001ms)
- ✅ should ensure min does not exceed max (1.5233150000001388ms)
- ✅ should ensure max does not go below min (1.3634289999999964ms)
- ✅ should update current note (1.2535850000001574ms)
- ✅ should update current duration (1.2930179999998472ms)
- ✅ should update current beat (1.401059000000032ms)
- ✅ should maintain stable callback references (1.747431000000006ms)
- ✅ should handle empty notes array gracefully (1.0325950000001285ms)
- ✅ should handle single note (1.3230639999999312ms)
- ✅ should handle single duration (1.0454799999999977ms)
- ✅ should handle rapid state changes (2.002815000000055ms)
- ✅ should initialize with all durations selected (1.1712519999998676ms)
- ✅ should toggle duration selection on (1.9410400000001573ms)
- ✅ should toggle duration selection off (1.3416179999999258ms)
- ✅ should not allow deselecting the last duration (1.8788250000000062ms)
- ✅ should persist selected durations to localStorage (1.5052319999999781ms)
- ✅ should load selected durations from localStorage (1.4751770000000306ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (3.5299380000000156ms)
- ✅ should return a duration object with name and beats (0.527539000000047ms)
- ✅ should select different durations over multiple calls (0.46542299999998704ms)
- ✅ should handle single duration array (0.4209810000000971ms)
- ✅ should return a duration from the array (0.5632339999999658ms)
- ✅ should use default weights if none provided (0.23337199999991753ms)
- ✅ should respect custom weights (0.6583610000000135ms)
- ✅ should handle partial weight objects (0.30793100000005325ms)
- ✅ should handle zero weights correctly (0.5741050000000314ms)
- ✅ should follow the pattern in order (0.4910210000000461ms)
- ✅ should loop the pattern (0.3012790000000223ms)
- ✅ should handle single element pattern (0.2626780000000508ms)
- ✅ should return fallback for unknown duration name (0.2666150000000016ms)
- ✅ should handle large indices (0.3794040000000223ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (2.8638120000000526ms)
- ✅ should return a note different from current note (0.33633399999996527ms)
- ✅ should return the only note if range contains single note (0.3036339999999882ms)
- ✅ should respect min and max indices (0.8517099999999118ms)
- ✅ should handle edge case where current note is the only option (0.2160710000000563ms)
- ✅ should select note within specified interval (0.2454649999999674ms)
- ✅ should return null if current note not found (0.1758870000001025ms)
- ✅ should return null if no notes in interval range (0.11112600000001294ms)
- ✅ should include notes both above and below current note (0.33085399999993115ms)

### Utils Tests (15/15 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.4818279999999504ms)
- ✅ should convert # to ♯ symbol (0.36354400000004716ms)
- ✅ should handle multiple sharps in name (edge case) (0.19001199999991059ms)
- ✅ should convert sharps to flats (0.3838619999999082ms)
- ✅ should return natural notes unchanged (0.28617099999996753ms)
- ✅ should format whole note (0.16331300000001647ms)
- ✅ should format half note (0.11564499999997224ms)
- ✅ should format quarter note (0.16383400000006532ms)
- ✅ should format eighth note (0.20415800000000672ms)
- ✅ should return capitalized name for whole note (0.17514500000004318ms)
- ✅ should return capitalized name for half note (0.10865200000000641ms)
- ✅ should return capitalized name for quarter note (0.11402099999997972ms)
- ✅ should return capitalized name for eighth note (0.10144800000000487ms)
- ✅ should return capitalized name for sixteenth note (0.25606500000003507ms)
- ✅ should return input for unknown duration (0.16347299999995357ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.963222000000087ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.21685300000001462ms)
- ✅ should calculate G4 at y=75 (second line) (0.1570409999999356ms)
- ✅ should calculate B4 at y=60 (middle line) (0.2663240000000542ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.24093599999991966ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.15303400000004785ms)
- ✅ should calculate F5 at y=30 (top line) (0.11742800000001807ms)
- ✅ should calculate C4 below staff at y=105 (0.12242800000001353ms)
- ✅ should calculate D4 below staff at y=97.5 (0.21263499999997748ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.3023110000000315ms)
- ✅ should handle octave changes correctly (0.185483999999974ms)
- ✅ should handle very low notes (C2) (0.26609399999995276ms)
- ✅ should handle very high notes (C7) (0.17902200000003177ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.3071189999999433ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.14422700000000077ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.17011600000000726ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.11392100000000482ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.102149000000054ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.09765099999992799ms)
- ✅ should calculate E2 below staff in bass clef (0.18104600000003757ms)
- ✅ should calculate C4 above staff in bass clef (0.11167700000009972ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.10292100000003757ms)
- ✅ should parse natural note correctly (0.6928649999999834ms)
- ✅ should parse sharp note correctly (0.15057899999999336ms)
- ✅ should handle low octaves (0.11672599999997146ms)
- ✅ should handle high octaves (0.20561100000008992ms)
- ✅ should correctly identify all natural notes (0.809472000000028ms)
- ✅ should return empty array for notes on the staff (0.44381299999997736ms)
- ✅ should generate ledger lines below staff for C4 (0.9930219999999963ms)
- ✅ should generate ledger lines below staff for D4 (0.13462000000004082ms)
- ✅ should generate ledger lines above staff for G5 (0.13970899999992525ms)
- ✅ should generate more ledger lines for notes further from staff (0.13617299999998522ms)
- ✅ should return ledger lines in correct order (0.09863300000006348ms)
- ✅ should return ledger lines in correct order for above staff (0.09509600000001228ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.5638309999999365ms)
- ✅ should swap min and max if min > max (0.28895600000009836ms)
- ✅ should reject min below 0 (0.2616249999999809ms)
- ✅ should reject max above total notes (0.2494729999999663ms)
- ✅ should allow min === max (0.22853399999996782ms)
- ✅ should keep max if min < max (0.15005900000005568ms)
- ✅ should adjust max to equal min if min > max (0.1052550000000565ms)
- ✅ should handle equal values (0.10198900000000322ms)
- ✅ should keep min if max > min (0.21653199999991557ms)
- ✅ should adjust min to equal max if max < min (0.13673399999993308ms)
- ✅ should handle equal values (0.12876900000003388ms)
- ✅ should have correct default values (0.19428000000004886ms)
- ✅ should have default between min and max (0.21942699999999604ms)
- ✅ should return value within range unchanged (0.2848179999999729ms)
- ✅ should clamp value below minimum (0.18606500000009873ms)
- ✅ should clamp value above maximum (0.17499399999996967ms)
- ✅ should return min/max at boundaries (0.13478999999995267ms)
- ✅ should validate tempo within range (0.18744699999990644ms)
- ✅ should reject non-number values (0.13919799999996485ms)
- ✅ should reject NaN (0.15946500000006836ms)
- ✅ should reject tempo below minimum (0.2565460000000712ms)
- ✅ should reject tempo above maximum (0.1427850000000035ms)
- ✅ should accept boundary values (0.12019299999997202ms)
- ✅ should return 0% for minimum tempo (0.10958300000004328ms)
- ✅ should return 100% for maximum tempo (0.08051000000000386ms)
- ✅ should return 50% for midpoint tempo (0.1287889999999834ms)
- ✅ should return 40% for tempo 120 (0.08114000000000487ms)
- ✅ should return correct percentages for various tempos (0.18705700000009529ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (13.01622800000007ms)
- ✅ should create analyser and connect to stream (10.366241999999943ms)
- ✅ should handle initialization errors (19.2370820000001ms)
- ✅ should convert A4 (440 Hz) correctly (1.615978000000041ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.0292190000000119ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.8551359999999022ms)
- ✅ should handle out of range frequencies (0.9185740000000351ms)
- ✅ should calculate cents offset for slightly sharp notes (1.489612999999963ms)
- ✅ should calculate cents offset for slightly flat notes (1.111712000000125ms)
- ✅ should return null for silent signal (1.5987660000000687ms)
- ✅ should return null for very weak signal (1.1869819999999436ms)
- ✅ should detect a strong periodic signal (24.9126040000001ms)
- ✅ should not start without initialization (0.8823270000000321ms)
- ✅ should start after initialization (5.272375000000011ms)
- ✅ should stop detection (1.2633840000000873ms)
- ✅ should not start twice (1.0360719999998764ms)
- ✅ should cleanup resources on dispose (0.9044779999999264ms)

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
