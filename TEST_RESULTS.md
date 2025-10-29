# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 225
**Passed:** 225 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.880170000000021ms)
- ✅ should have patterns with required properties (3.5545230000000174ms)
- ✅ should have unique values (0.2654289999999264ms)
- ✅ should include Off pattern (0.37282999999990807ms)
- ✅ should include 16th notes pattern (0.3529729999999063ms)
- ✅ should include 8th note triplets pattern (0.34596000000010463ms)
- ✅ should include 8th notes pattern (0.2381470000000263ms)
- ✅ should include quarter note triplets pattern (0.2731730000000425ms)
- ✅ should include quarter notes pattern (0.4129249999999729ms)
- ✅ should include half note triplets pattern (0.37403199999994285ms)
- ✅ should include half notes pattern (0.2752669999999853ms)
- ✅ should include whole notes pattern (0.2360239999999294ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.5532279999999901ms)
- ✅ should be defined (0.410521000000017ms)
- ✅ should be the quarter notes pattern (0.2675219999999854ms)
- ✅ should be included in CLICK_PATTERNS (1.1275139999999055ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 5 duration types (2.897199999999998ms)
- ✅ should have all durations with name and beats properties (1.4430090000000746ms)
- ✅ should have whole note with 8 beats (0.2941530000000512ms)
- ✅ should have half note with 4 beats (0.3615189999999302ms)
- ✅ should have quarter note with 2 beats (0.3390869999999495ms)
- ✅ should have eighth note with 1 beat (0.24118299999997816ms)
- ✅ should have sixteenth note with 0.5 beats (0.2512209999999868ms)
- ✅ should be ordered from longest to shortest (0.3556980000000749ms)
- ✅ should have display names for all durations (0.5438419999999269ms)
- ✅ should have musical symbols as names (0.3268039999999246ms)
- ✅ should have text display names for all durations (0.33114100000000235ms)
- ✅ should have proper capitalized names (0.3680819999999585ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.9744369999999662ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.2972579999999425ms)
- ✅ should have clef property (0.1715319999999565ms)
- ✅ should have comfortable range (0.227437000000009ms)
- ✅ should have full range (0.27082899999993515ms)
- ✅ should return concert pitch when instrument is null (0.16747499999996762ms)
- ✅ should return concert pitch when transposition is 0 (0.16262600000004568ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.23800699999992503ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.2544070000000147ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.15278699999998935ms)
- ✅ should maintain octave relationships after transposition (0.14669499999990876ms)
- ✅ should use the correct transposition formula (0.11396400000000995ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.7588020000000597ms)
- ✅ should start with A0 at concert pitch (0.2856859999999415ms)
- ✅ should end with C8 at concert pitch (0.23899900000003527ms)
- ✅ should have all notes as objects with name and frequency (6.117567000000008ms)
- ✅ should have frequencies in ascending order (1.370883000000049ms)
- ✅ should include all chromatic notes (12 per octave) (1.0069799999999987ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.2695570000000771ms)
- ✅ should have correct MIN_INDEX (0.15515100000004622ms)
- ✅ should have correct MAX_INDEX (0.19637900000009267ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.15793599999994967ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.12341199999991659ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.09434699999997065ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (118.11849400000006ms)
- ✅ should handle suspended audio context (102.74166300000002ms)
- ✅ should return audio engine readiness status (104.42241899999999ms)
- ✅ should get current audio time (104.54396899999983ms)
- ✅ should respect soundEnabled prop initially true (106.25696199999993ms)
- ✅ should respect soundEnabled prop initially false (103.91995900000006ms)
- ✅ should update soundEnabled via ref when prop changes (104.9699250000001ms)
- ✅ should play click sound when audio ready and sound enabled (104.05369700000028ms)
- ✅ should not play click sound when audio not ready (2.720237999999881ms)
- ✅ should not play click sound when sound disabled (103.32489599999963ms)
- ✅ should play note sound when audio ready and sound enabled (105.23318199999994ms)
- ✅ should not play note sound when audio not ready (2.5087109999999484ms)
- ✅ should not play note sound when sound disabled (108.43645500000002ms)
- ✅ should calculate correct duration from tempo and beats (103.98286499999995ms)
- ✅ should close audio context on cleanup (102.60716600000023ms)
- ✅ should not error when closing uninitialized audio (3.1883669999997437ms)
- ✅ should handle multiple init calls gracefully (303.3124520000001ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.2715579999999136ms)
- ✅ should handle webkitAudioContext fallback (102.94702600000028ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (17.94941300000005ms)
- ✅ should initialize with random note from provided notes (3.03168299999993ms)
- ✅ should initialize with random duration from provided durations (3.3463060000001406ms)
- ✅ should update tempo (3.6361480000000483ms)
- ✅ should handle tempo as string (from input) (2.9733830000000125ms)
- ✅ should clamp tempo to valid range (3.295568000000003ms)
- ✅ should handle invalid tempo input (2.3440210000001116ms)
- ✅ should toggle play state from stopped to playing (2.3330100000000584ms)
- ✅ should toggle play state from playing to stopped (3.1760940000001483ms)
- ✅ should reset beat to 0 when stopping (3.0655060000001413ms)
- ✅ should toggle sound from enabled to disabled (2.1812159999999494ms)
- ✅ should toggle sound from disabled to enabled (2.3964099999998325ms)
- ✅ should toggle staff display from hidden to visible (2.1952320000000327ms)
- ✅ should toggle staff display from visible to hidden (2.8155870000000505ms)
- ✅ should initialize with default click pattern (1.7344269999998687ms)
- ✅ should update click pattern (1.7989169999998467ms)
- ✅ should change from quarter to whole note pattern (1.523099000000002ms)
- ✅ should change to triplet pattern (1.5377069999999549ms)
- ✅ should change to off pattern (1.3360689999999522ms)
- ✅ should update range min (1.40858500000013ms)
- ✅ should update range max (1.4254169999999249ms)
- ✅ should ensure min does not exceed max (1.4680470000000696ms)
- ✅ should ensure max does not go below min (1.3558459999999286ms)
- ✅ should update current note (1.2115550000000894ms)
- ✅ should update current duration (1.2702650000001086ms)
- ✅ should update current beat (1.3360990000001038ms)
- ✅ should maintain stable callback references (1.7642929999999524ms)
- ✅ should handle empty notes array gracefully (1.0617839999999887ms)
- ✅ should handle single note (1.3338349999999082ms)
- ✅ should handle single duration (1.0581770000001143ms)
- ✅ should handle rapid state changes (2.0722310000001016ms)
- ✅ should initialize with all durations selected (1.3417799999999716ms)
- ✅ should toggle duration selection on (1.9985120000001189ms)
- ✅ should toggle duration selection off (1.4215389999999388ms)
- ✅ should not allow deselecting the last duration (1.909375000000182ms)
- ✅ should persist selected durations to localStorage (1.520464999999831ms)
- ✅ should load selected durations from localStorage (1.4641990000000078ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.1737620000000106ms)
- ✅ should return a duration object with name and beats (0.3305010000000266ms)
- ✅ should select different durations over multiple calls (0.3173659999999927ms)
- ✅ should handle single duration array (0.326233000000002ms)
- ✅ should return a duration from the array (0.4118239999999105ms)
- ✅ should use default weights if none provided (0.16483000000005177ms)
- ✅ should respect custom weights (0.4663750000000846ms)
- ✅ should handle partial weight objects (0.17558899999994537ms)
- ✅ should handle zero weights correctly (0.3659470000000056ms)
- ✅ should follow the pattern in order (0.2956450000000359ms)
- ✅ should loop the pattern (0.1958280000000059ms)
- ✅ should handle single element pattern (0.1615030000000388ms)
- ✅ should return fallback for unknown duration name (0.15505099999995764ms)
- ✅ should handle large indices (0.2934010000000171ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.390847000000008ms)
- ✅ should return a note different from current note (0.4539030000000821ms)
- ✅ should return the only note if range contains single note (0.4517280000000028ms)
- ✅ should respect min and max indices (1.4218799999999874ms)
- ✅ should handle edge case where current note is the only option (0.297849000000042ms)
- ✅ should select note within specified interval (0.5651010000000269ms)
- ✅ should return null if current note not found (0.24548000000004322ms)
- ✅ should return null if no notes in interval range (0.19557700000007117ms)
- ✅ should include notes both above and below current note (0.5330609999999751ms)

### Utils Tests (15/15 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.6233479999999645ms)
- ✅ should convert # to ♯ symbol (0.3779499999999416ms)
- ✅ should handle multiple sharps in name (edge case) (0.2306220000000394ms)
- ✅ should convert sharps to flats (0.5917610000000195ms)
- ✅ should return natural notes unchanged (0.390023000000042ms)
- ✅ should format whole note (0.2171769999999924ms)
- ✅ should format half note (0.16986900000006244ms)
- ✅ should format quarter note (0.2551089999999476ms)
- ✅ should format eighth note (0.3230959999999641ms)
- ✅ should return capitalized name for whole note (0.2560809999999947ms)
- ✅ should return capitalized name for half note (0.1599109999999655ms)
- ✅ should return capitalized name for quarter note (0.14431999999999334ms)
- ✅ should return capitalized name for eighth note (0.1284009999999398ms)
- ✅ should return capitalized name for sixteenth note (0.36365200000000186ms)
- ✅ should return input for unknown duration (0.19054800000003524ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.536762999999837ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.3136490000001686ms)
- ✅ should calculate G4 at y=75 (second line) (0.22755700000016077ms)
- ✅ should calculate B4 at y=60 (middle line) (0.3221450000000914ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.35096900000007736ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.21909099999993487ms)
- ✅ should calculate F5 at y=30 (top line) (0.16540999999983796ms)
- ✅ should calculate C4 below staff at y=105 (0.1676750000001448ms)
- ✅ should calculate D4 below staff at y=97.5 (0.327534999999898ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.3755350000001272ms)
- ✅ should handle octave changes correctly (0.3049829999999929ms)
- ✅ should handle very low notes (C2) (0.41297499999996035ms)
- ✅ should handle very high notes (C7) (0.26475699999991775ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.3851329999999962ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.2618210000000545ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.2433770000000095ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.16173299999991286ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.13589500000011867ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.1461340000000746ms)
- ✅ should calculate E2 below staff in bass clef (0.2537560000000667ms)
- ✅ should calculate C4 above staff in bass clef (0.16509900000005473ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.147946999999931ms)
- ✅ should parse natural note correctly (0.8037389999999505ms)
- ✅ should parse sharp note correctly (0.21113599999989674ms)
- ✅ should handle low octaves (0.18273299999987103ms)
- ✅ should handle high octaves (0.20802100000014434ms)
- ✅ should correctly identify all natural notes (0.6382289999999102ms)
- ✅ should return empty array for notes on the staff (0.41132199999992736ms)
- ✅ should generate ledger lines below staff for C4 (1.0058989999999994ms)
- ✅ should generate ledger lines below staff for D4 (0.14530300000001262ms)
- ✅ should generate ledger lines above staff for G5 (0.1749489999999696ms)
- ✅ should generate more ledger lines for notes further from staff (0.15845699999999852ms)
- ✅ should return ledger lines in correct order (0.12350200000014411ms)
- ✅ should return ledger lines in correct order for above staff (0.10140000000001237ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.4006900000000542ms)
- ✅ should swap min and max if min > max (0.273192999999992ms)
- ✅ should reject min below 0 (0.2618320000000267ms)
- ✅ should reject max above total notes (0.2466229999999996ms)
- ✅ should allow min === max (0.26695199999994657ms)
- ✅ should keep max if min < max (0.15049199999998564ms)
- ✅ should adjust max to equal min if min > max (0.13744900000006055ms)
- ✅ should handle equal values (0.17213300000003073ms)
- ✅ should keep min if max > min (0.3371640000000298ms)
- ✅ should adjust min to equal max if max < min (0.25313600000004044ms)
- ✅ should handle equal values (0.164038000000005ms)
- ✅ should have correct default values (0.20928400000002512ms)
- ✅ should have default between min and max (0.22504200000003038ms)
- ✅ should return value within range unchanged (0.28232100000002447ms)
- ✅ should clamp value below minimum (0.18109000000004016ms)
- ✅ should clamp value above maximum (0.2062270000000126ms)
- ✅ should return min/max at boundaries (0.16735399999993206ms)
- ✅ should validate tempo within range (0.30244699999991553ms)
- ✅ should reject non-number values (0.233037999999965ms)
- ✅ should reject NaN (0.23156500000004598ms)
- ✅ should reject tempo below minimum (0.34582000000000335ms)
- ✅ should reject tempo above maximum (0.22519199999999273ms)
- ✅ should accept boundary values (0.20887200000004214ms)
- ✅ should return 0% for minimum tempo (0.17034000000001015ms)
- ✅ should return 100% for maximum tempo (0.1299940000000106ms)
- ✅ should return 50% for midpoint tempo (0.14215699999999742ms)
- ✅ should return 40% for tempo 120 (0.11952400000006946ms)
- ✅ should return correct percentages for various tempos (0.2626630000000887ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (5.746669999999995ms)
- ✅ should create analyser and connect to stream (3.9812749999999824ms)
- ✅ should handle initialization errors (10.823011999999949ms)
- ✅ should convert A4 (440 Hz) correctly (1.3209799999999632ms)
- ✅ should convert C4 (261.63 Hz) correctly (0.9654130000000123ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.8477309999999534ms)
- ✅ should handle out of range frequencies (1.2931780000000117ms)
- ✅ should calculate cents offset for slightly sharp notes (0.9266400000000203ms)
- ✅ should calculate cents offset for slightly flat notes (1.0224399999999605ms)
- ✅ should return null for silent signal (1.3759439999998904ms)
- ✅ should return null for very weak signal (0.8562969999999268ms)
- ✅ should detect a strong periodic signal (13.460215999999946ms)
- ✅ should not start without initialization (0.5115299999999934ms)
- ✅ should start after initialization (1.437039000000027ms)
- ✅ should stop detection (0.8156909999999016ms)
- ✅ should not start twice (0.9491820000000644ms)
- ✅ should cleanup resources on dispose (0.8273830000000544ms)

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
