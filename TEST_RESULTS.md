# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 225
**Passed:** 225 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.381520999999907ms)
- ✅ should have patterns with required properties (1.7501630000000432ms)
- ✅ should have unique values (0.19467099999997117ms)
- ✅ should include Off pattern (0.24334199999998418ms)
- ✅ should include 16th notes pattern (0.20799600000009377ms)
- ✅ should include 8th note triplets pattern (0.23158999999998287ms)
- ✅ should include 8th notes pattern (0.15221299999996063ms)
- ✅ should include quarter note triplets pattern (0.17852100000004612ms)
- ✅ should include quarter notes pattern (0.24026600000001963ms)
- ✅ should include half note triplets pattern (0.2347149999999374ms)
- ✅ should include half notes pattern (0.14772400000003927ms)
- ✅ should include whole notes pattern (0.13121399999999994ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.41943700000001627ms)
- ✅ should be defined (0.4017549999999801ms)
- ✅ should be the quarter notes pattern (0.16994499999998425ms)
- ✅ should be included in CLICK_PATTERNS (1.0836080000000265ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 5 duration types (1.8818880000000036ms)
- ✅ should have all durations with name and beats properties (0.9171899999998914ms)
- ✅ should have whole note with 8 beats (0.1963340000000926ms)
- ✅ should have half note with 4 beats (0.23576700000000983ms)
- ✅ should have quarter note with 2 beats (0.2678769999999986ms)
- ✅ should have eighth note with 1 beat (0.17586599999992814ms)
- ✅ should have sixteenth note with 0.5 beats (0.16004599999996572ms)
- ✅ should be ordered from longest to shortest (0.24925199999995584ms)
- ✅ should have display names for all durations (0.35789299999999ms)
- ✅ should have musical symbols as names (0.21346600000003946ms)
- ✅ should have text display names for all durations (0.19209599999999227ms)
- ✅ should have proper capitalized names (0.3877179999999498ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.4965939999999591ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.24112700000000586ms)
- ✅ should have clef property (0.17134800000008ms)
- ✅ should have comfortable range (0.23408400000005258ms)
- ✅ should have full range (0.2754700000000412ms)
- ✅ should return concert pitch when instrument is null (0.20409799999993083ms)
- ✅ should return concert pitch when transposition is 0 (0.1418429999999944ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.17631699999992634ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.24025499999993372ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.16329300000006697ms)
- ✅ should maintain octave relationships after transposition (0.1478540000000521ms)
- ✅ should use the correct transposition formula (0.1145530000000008ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.779401000000007ms)
- ✅ should start with A0 at concert pitch (0.4455760000000737ms)
- ✅ should end with C8 at concert pitch (0.42240300000003117ms)
- ✅ should have all notes as objects with name and frequency (9.438943999999992ms)
- ✅ should have frequencies in ascending order (2.9580020000000786ms)
- ✅ should include all chromatic notes (12 per octave) (1.826334000000088ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.3898829999999407ms)
- ✅ should have correct MIN_INDEX (0.17838099999994483ms)
- ✅ should have correct MAX_INDEX (0.32831800000008116ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.24675700000000234ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.17838099999994483ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.15392500000007203ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (122.42126499999995ms)
- ✅ should handle suspended audio context (105.44291599999997ms)
- ✅ should return audio engine readiness status (103.35288000000014ms)
- ✅ should get current audio time (103.72289599999999ms)
- ✅ should respect soundEnabled prop initially true (104.75285099999996ms)
- ✅ should respect soundEnabled prop initially false (103.34838300000001ms)
- ✅ should update soundEnabled via ref when prop changes (104.99735699999997ms)
- ✅ should play click sound when audio ready and sound enabled (104.06182399999989ms)
- ✅ should not play click sound when audio not ready (2.971237000000201ms)
- ✅ should not play click sound when sound disabled (103.66245099999969ms)
- ✅ should play note sound when audio ready and sound enabled (103.73467699999992ms)
- ✅ should not play note sound when audio not ready (2.443047999999635ms)
- ✅ should not play note sound when sound disabled (104.49063100000012ms)
- ✅ should calculate correct duration from tempo and beats (106.72249199999987ms)
- ✅ should close audio context on cleanup (104.98453699999982ms)
- ✅ should not error when closing uninitialized audio (3.0442920000000413ms)
- ✅ should handle multiple init calls gracefully (303.330379ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (2.4372560000001613ms)
- ✅ should handle webkitAudioContext fallback (103.7446460000001ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (14.308399000000009ms)
- ✅ should initialize with random note from provided notes (2.140036000000009ms)
- ✅ should initialize with random duration from provided durations (1.6615300000000843ms)
- ✅ should update tempo (2.9093820000000505ms)
- ✅ should handle tempo as string (from input) (1.9244370000001254ms)
- ✅ should clamp tempo to valid range (2.1988149999999678ms)
- ✅ should handle invalid tempo input (1.572774999999865ms)
- ✅ should toggle play state from stopped to playing (1.4425939999998718ms)
- ✅ should toggle play state from playing to stopped (2.6540090000000873ms)
- ✅ should reset beat to 0 when stopping (2.821980000000167ms)
- ✅ should toggle sound from enabled to disabled (5.0317260000001625ms)
- ✅ should toggle sound from disabled to enabled (5.437837999999829ms)
- ✅ should toggle staff display from hidden to visible (2.1650230000000192ms)
- ✅ should toggle staff display from visible to hidden (2.454668999999967ms)
- ✅ should initialize with default click pattern (1.572445000000016ms)
- ✅ should update click pattern (1.3481289999999717ms)
- ✅ should change from quarter to whole note pattern (1.2270340000000033ms)
- ✅ should change to triplet pattern (1.0320630000001074ms)
- ✅ should change to off pattern (1.0834979999999632ms)
- ✅ should update range min (0.9872100000000046ms)
- ✅ should update range max (0.93649500000015ms)
- ✅ should ensure min does not exceed max (1.0206920000000537ms)
- ✅ should ensure max does not go below min (0.9293830000001435ms)
- ✅ should update current note (0.807948000000124ms)
- ✅ should update current duration (0.8106419999999162ms)
- ✅ should update current beat (1.2308210000001054ms)
- ✅ should maintain stable callback references (1.6767879999999877ms)
- ✅ should handle empty notes array gracefully (0.733889999999974ms)
- ✅ should handle single note (0.8518990000000031ms)
- ✅ should handle single duration (0.7081830000001901ms)
- ✅ should handle rapid state changes (1.2589740000000802ms)
- ✅ should initialize with all durations selected (0.8509469999999055ms)
- ✅ should toggle duration selection on (1.306060000000116ms)
- ✅ should toggle duration selection off (1.128381999999874ms)
- ✅ should not allow deselecting the last duration (1.7828839999999673ms)
- ✅ should persist selected durations to localStorage (1.4288880000001427ms)
- ✅ should load selected durations from localStorage (1.4832400000000234ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.165526ms)
- ✅ should return a duration object with name and beats (0.36558800000000247ms)
- ✅ should select different durations over multiple calls (0.317908999999986ms)
- ✅ should handle single duration array (0.2950869999999668ms)
- ✅ should return a duration from the array (0.4243870000000243ms)
- ✅ should use default weights if none provided (0.17437299999994593ms)
- ✅ should respect custom weights (0.45731799999998657ms)
- ✅ should handle partial weight objects (0.17528500000003078ms)
- ✅ should handle zero weights correctly (0.3398500000000695ms)
- ✅ should follow the pattern in order (0.3222680000000082ms)
- ✅ should loop the pattern (0.18889999999998963ms)
- ✅ should handle single element pattern (0.16155000000003383ms)
- ✅ should return fallback for unknown duration name (0.15688000000000102ms)
- ✅ should handle large indices (0.29057799999998224ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (5.835827999999992ms)
- ✅ should return a note different from current note (0.39606399999991027ms)
- ✅ should return the only note if range contains single note (0.41444799999999304ms)
- ✅ should respect min and max indices (1.253533999999945ms)
- ✅ should handle edge case where current note is the only option (0.30617799999993167ms)
- ✅ should select note within specified interval (0.3784520000000384ms)
- ✅ should return null if current note not found (0.22035800000003292ms)
- ✅ should return null if no notes in interval range (0.16793200000006436ms)
- ✅ should include notes both above and below current note (0.533409000000006ms)

### Utils Tests (15/15 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.3180130000000645ms)
- ✅ should convert # to ♯ symbol (0.27241400000002614ms)
- ✅ should handle multiple sharps in name (edge case) (0.16945399999985966ms)
- ✅ should convert sharps to flats (0.4055120000000443ms)
- ✅ should return natural notes unchanged (0.27942800000005263ms)
- ✅ should format whole note (0.17940300000009302ms)
- ✅ should format half note (0.1190999999998894ms)
- ✅ should format quarter note (0.1675000000000182ms)
- ✅ should format eighth note (0.20021199999996497ms)
- ✅ should return capitalized name for whole note (0.16623900000013236ms)
- ✅ should return capitalized name for half note (0.10804999999982101ms)
- ✅ should return capitalized name for quarter note (0.13002099999994243ms)
- ✅ should return capitalized name for eighth note (0.11047500000017862ms)
- ✅ should return capitalized name for sixteenth note (0.278184999999894ms)
- ✅ should return input for unknown duration (0.13976899999988746ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.251141999999959ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.32082500000001346ms)
- ✅ should calculate G4 at y=75 (second line) (0.23680899999999383ms)
- ✅ should calculate B4 at y=60 (middle line) (0.365978000000041ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.36480600000004415ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.23358200000006946ms)
- ✅ should calculate F5 at y=30 (top line) (0.22810299999991912ms)
- ✅ should calculate C4 below staff at y=105 (0.19689500000004045ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3358220000000074ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.39557300000001305ms)
- ✅ should handle octave changes correctly (0.27663299999994706ms)
- ✅ should handle very low notes (C2) (0.39616399999999885ms)
- ✅ should handle very high notes (C7) (0.3139219999999341ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.44579700000008415ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.23930299999994986ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.2739480000000185ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.20883700000001681ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.16251099999999497ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.16533699999990858ms)
- ✅ should calculate E2 below staff in bass clef (0.2781760000000304ms)
- ✅ should calculate C4 above staff in bass clef (0.17957300000000487ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.16097800000000007ms)
- ✅ should parse natural note correctly (1.0301190000000133ms)
- ✅ should parse sharp note correctly (0.25201700000002347ms)
- ✅ should handle low octaves (0.1647249999999758ms)
- ✅ should handle high octaves (0.21148200000004636ms)
- ✅ should correctly identify all natural notes (0.829368000000045ms)
- ✅ should return empty array for notes on the staff (0.4745189999999866ms)
- ✅ should generate ledger lines below staff for C4 (1.1333499999999503ms)
- ✅ should generate ledger lines below staff for D4 (0.15386499999999614ms)
- ✅ should generate ledger lines above staff for G5 (0.149387000000047ms)
- ✅ should generate more ledger lines for notes further from staff (0.1518909999999778ms)
- ✅ should return ledger lines in correct order (0.10117800000000443ms)
- ✅ should return ledger lines in correct order for above staff (0.10396300000002157ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (2.0249249999999392ms)
- ✅ should swap min and max if min > max (0.38800900000001093ms)
- ✅ should reject min below 0 (0.46056400000009035ms)
- ✅ should reject max above total notes (0.3673509999999851ms)
- ✅ should allow min === max (0.33879799999999705ms)
- ✅ should keep max if min < max (0.20397800000000643ms)
- ✅ should adjust max to equal min if min > max (0.15026899999998022ms)
- ✅ should handle equal values (0.1496869999999717ms)
- ✅ should keep min if max > min (0.3208949999999504ms)
- ✅ should adjust min to equal max if max < min (0.19364899999993668ms)
- ✅ should handle equal values (0.15470600000003287ms)
- ✅ should have correct default values (0.24592599999994036ms)
- ✅ should have default between min and max (0.3666489999999385ms)
- ✅ should return value within range unchanged (0.4196279999999888ms)
- ✅ should clamp value below minimum (0.28233400000010533ms)
- ✅ should clamp value above maximum (0.25862999999992553ms)
- ✅ should return min/max at boundaries (0.18789800000001833ms)
- ✅ should validate tempo within range (0.26523100000008526ms)
- ✅ should reject non-number values (0.23560699999995904ms)
- ✅ should reject NaN (0.19315899999992325ms)
- ✅ should reject tempo below minimum (0.3666200000000117ms)
- ✅ should reject tempo above maximum (0.22379499999999553ms)
- ✅ should accept boundary values (0.18062399999996614ms)
- ✅ should return 0% for minimum tempo (0.1625010000000202ms)
- ✅ should return 100% for maximum tempo (0.1213150000000951ms)
- ✅ should return 50% for midpoint tempo (0.13418899999999212ms)
- ✅ should return 40% for tempo 120 (0.11531300000001465ms)
- ✅ should return correct percentages for various tempos (0.3217660000000251ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (3.8818239999999378ms)
- ✅ should create analyser and connect to stream (3.258297999999968ms)
- ✅ should handle initialization errors (9.9495169999999ms)
- ✅ should convert A4 (440 Hz) correctly (1.9022160000000667ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.0180669999999736ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.8490439999999353ms)
- ✅ should handle out of range frequencies (0.8668570000000955ms)
- ✅ should calculate cents offset for slightly sharp notes (0.9111279999999624ms)
- ✅ should calculate cents offset for slightly flat notes (0.9545589999999038ms)
- ✅ should return null for silent signal (1.2870349999999462ms)
- ✅ should return null for very weak signal (0.8377830000000586ms)
- ✅ should detect a strong periodic signal (19.936076999999955ms)
- ✅ should not start without initialization (0.7731830000000173ms)
- ✅ should start after initialization (2.115711000000033ms)
- ✅ should stop detection (1.1143049999999448ms)
- ✅ should not start twice (1.1882120000000214ms)
- ✅ should cleanup resources on dispose (1.1897950000000037ms)

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
