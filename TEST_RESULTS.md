# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.31756699999994ms)
- ✅ should have patterns with required properties (1.7755379999999832ms)
- ✅ should have unique values (0.16516100000001188ms)
- ✅ should include Off pattern (0.22485299999993913ms)
- ✅ should include 16th notes pattern (0.20363299999996798ms)
- ✅ should include 8th note triplets pattern (0.2342909999999847ms)
- ✅ should include 8th notes pattern (0.15279799999996158ms)
- ✅ should include quarter note triplets pattern (0.14307899999994333ms)
- ✅ should include quarter notes pattern (0.24479000000008ms)
- ✅ should include half note triplets pattern (0.3291580000000067ms)
- ✅ should include half notes pattern (0.24041199999999208ms)
- ✅ should include whole notes pattern (0.20264099999997143ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.45847200000002886ms)
- ✅ should be defined (0.37612699999999677ms)
- ✅ should be the quarter notes pattern (0.23104399999999714ms)
- ✅ should be included in CLICK_PATTERNS (1.5089570000000094ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.8071580000000722ms)
- ✅ should have all durations with name and beats properties (0.834239000000025ms)
- ✅ should have whole note with 8 beats (0.19330300000001444ms)
- ✅ should have half note with 4 beats (0.2559810000000198ms)
- ✅ should have quarter note with 2 beats (0.2049250000000029ms)
- ✅ should have eighth note with 1 beat (0.15821700000003602ms)
- ✅ should be ordered from longest to shortest (0.21912199999997028ms)
- ✅ should have display names for all durations (0.2258439999999382ms)
- ✅ should have proper capitalized names (0.2605800000000045ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.4191190000000233ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.22941100000002734ms)
- ✅ should have clef property (0.1539789999999357ms)
- ✅ should have comfortable range (0.2235200000000077ms)
- ✅ should have full range (0.25742400000001453ms)
- ✅ should return concert pitch when instrument is null (0.1657319999999345ms)
- ✅ should return concert pitch when transposition is 0 (0.1318069999999807ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.18043899999997848ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.2617930000000115ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.1698389999999108ms)
- ✅ should maintain octave relationships after transposition (0.14715699999999288ms)
- ✅ should use the correct transposition formula (0.114325000000008ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.720965000000092ms)
- ✅ should start with A0 at concert pitch (0.4359590000000253ms)
- ✅ should end with C8 at concert pitch (0.3996309999999994ms)
- ✅ should have all notes as objects with name and frequency (10.551728000000026ms)
- ✅ should have frequencies in ascending order (1.6080009999999447ms)
- ✅ should include all chromatic notes (12 per octave) (1.1356150000000298ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.31004299999995055ms)
- ✅ should have correct MIN_INDEX (0.16796599999997852ms)
- ✅ should have correct MAX_INDEX (0.2784040000000232ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.2215169999999489ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.21250000000009095ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.13721800000007534ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (115.49961199999984ms)
- ✅ should handle suspended audio context (102.6190660000002ms)
- ✅ should return audio engine readiness status (104.20731ms)
- ✅ should get current audio time (103.67012399999999ms)
- ✅ should respect soundEnabled prop initially true (104.2811630000001ms)
- ✅ should respect soundEnabled prop initially false (104.31614100000002ms)
- ✅ should update soundEnabled via ref when prop changes (105.48625200000015ms)
- ✅ should play click sound when audio ready and sound enabled (103.64031900000009ms)
- ✅ should not play click sound when audio not ready (2.920360999999957ms)
- ✅ should not play click sound when sound disabled (103.21503799999982ms)
- ✅ should play note sound when audio ready and sound enabled (103.90287899999976ms)
- ✅ should not play note sound when audio not ready (3.2418750000001637ms)
- ✅ should not play note sound when sound disabled (108.37383199999977ms)
- ✅ should calculate correct duration from tempo and beats (104.1316240000001ms)
- ✅ should close audio context on cleanup (103.62936300000001ms)
- ✅ should not error when closing uninitialized audio (2.9288870000000315ms)
- ✅ should handle multiple init calls gracefully (304.1656670000002ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.949605999999676ms)
- ✅ should handle webkitAudioContext fallback (105.3206909999999ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (15.83173499999998ms)
- ✅ should initialize with random note from provided notes (1.8734620000000177ms)
- ✅ should initialize with random duration from provided durations (2.295885999999882ms)
- ✅ should update tempo (4.263095000000021ms)
- ✅ should handle tempo as string (from input) (2.968701999999894ms)
- ✅ should clamp tempo to valid range (3.3891519999999673ms)
- ✅ should handle invalid tempo input (2.395272999999861ms)
- ✅ should toggle play state from stopped to playing (2.3045620000000326ms)
- ✅ should toggle play state from playing to stopped (4.380786000000171ms)
- ✅ should reset beat to 0 when stopping (2.9405279999998584ms)
- ✅ should toggle sound from enabled to disabled (5.103367000000162ms)
- ✅ should toggle sound from disabled to enabled (1.9121749999999338ms)
- ✅ should toggle staff display from hidden to visible (1.6532079999999496ms)
- ✅ should toggle staff display from visible to hidden (3.072106000000076ms)
- ✅ should initialize with default click pattern (1.3587749999999232ms)
- ✅ should update click pattern (1.6930129999998371ms)
- ✅ should change from quarter to whole note pattern (1.0456759999999576ms)
- ✅ should change to triplet pattern (0.9804830000000493ms)
- ✅ should change to off pattern (1.009066999999959ms)
- ✅ should update range min (1.006501999999955ms)
- ✅ should update range max (0.917554999999993ms)
- ✅ should ensure min does not exceed max (0.9327430000000732ms)
- ✅ should ensure max does not go below min (0.9656860000000052ms)
- ✅ should update current note (0.7952949999998964ms)
- ✅ should update current duration (0.7883420000000569ms)
- ✅ should update current beat (1.2061479999999847ms)
- ✅ should maintain stable callback references (1.1888349999999264ms)
- ✅ should handle empty notes array gracefully (0.6834949999999935ms)
- ✅ should handle single note (0.8396379999999226ms)
- ✅ should handle single duration (0.6800389999998515ms)
- ✅ should handle rapid state changes (1.246403999999984ms)
- ✅ should initialize with all durations selected (0.9350279999998747ms)
- ✅ should toggle duration selection on (1.7157150000000456ms)
- ✅ should toggle duration selection off (1.4887989999999718ms)
- ✅ should not allow deselecting the last duration (4.438497000000098ms)
- ✅ should persist selected durations to localStorage (1.1907980000000862ms)
- ✅ should load selected durations from localStorage (1.444385999999895ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (3.364736999999991ms)
- ✅ should return a duration object with name and beats (0.47944200000006276ms)
- ✅ should select different durations over multiple calls (0.41182400000002417ms)
- ✅ should handle single duration array (0.38454300000000785ms)
- ✅ should return a duration from the array (0.6002790000000005ms)
- ✅ should use default weights if none provided (0.26433700000006866ms)
- ✅ should respect custom weights (0.643359999999916ms)
- ✅ should handle partial weight objects (0.26540799999997944ms)
- ✅ should handle zero weights correctly (0.5393440000000282ms)
- ✅ should follow the pattern in order (0.46085599999992155ms)
- ✅ should loop the pattern (0.26980700000001434ms)
- ✅ should handle single element pattern (0.2317160000000058ms)
- ✅ should return fallback for unknown duration name (0.2309740000000602ms)
- ✅ should handle large indices (0.39833899999996447ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (2.147156999999993ms)
- ✅ should return a note different from current note (0.30309999999997217ms)
- ✅ should return the only note if range contains single note (0.284355000000005ms)
- ✅ should respect min and max indices (0.8100120000000288ms)
- ✅ should handle edge case where current note is the only option (0.19752099999993789ms)
- ✅ should select note within specified interval (0.24061200000005556ms)
- ✅ should return null if current note not found (0.17073199999992994ms)
- ✅ should return null if no notes in interval range (0.1140139999999974ms)
- ✅ should include notes both above and below current note (0.3366630000000441ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.8301210000000765ms)
- ✅ should convert # to ♯ symbol (0.3897620000000188ms)
- ✅ should handle multiple sharps in name (edge case) (0.23702500000001692ms)
- ✅ should convert sharps to flats (0.5493729999999459ms)
- ✅ should return natural notes unchanged (0.4787290000000439ms)
- ✅ should format whole note (0.23259700000005523ms)
- ✅ should format half note (0.17668200000002798ms)
- ✅ should format quarter note (0.1848569999999654ms)
- ✅ should format eighth note (0.3400800000000572ms)
- ✅ should return capitalized name for whole note (0.28781099999991966ms)
- ✅ should return capitalized name for half note (0.1931529999999384ms)
- ✅ should return capitalized name for quarter note (0.1617949999999837ms)
- ✅ should return capitalized name for eighth note (0.27906399999994846ms)
- ✅ should return input for unknown duration (0.3628320000000258ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.881937999999991ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.2741550000000643ms)
- ✅ should calculate G4 at y=75 (second line) (0.2108259999999973ms)
- ✅ should calculate B4 at y=60 (middle line) (0.3320840000000089ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.32034299999997984ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.19658900000001722ms)
- ✅ should calculate F5 at y=30 (top line) (0.15942999999992935ms)
- ✅ should calculate C4 below staff at y=105 (0.2070490000000973ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3114659999999958ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.3560490000000982ms)
- ✅ should handle octave changes correctly (0.30131699999992634ms)
- ✅ should handle very low notes (C2) (0.36846200000002227ms)
- ✅ should handle very high notes (C7) (0.27263299999992796ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4341459999999415ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.22522300000002815ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.23764699999992445ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.19508599999994658ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.1609730000000127ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.1517750000000433ms)
- ✅ should calculate E2 below staff in bass clef (0.24030100000004495ms)
- ✅ should calculate C4 above staff in bass clef (0.1629369999999426ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.20436400000005506ms)
- ✅ should parse natural note correctly (0.8750850000000128ms)
- ✅ should parse sharp note correctly (0.21368200000006254ms)
- ✅ should handle low octaves (0.15889800000002197ms)
- ✅ should handle high octaves (0.20841199999995297ms)
- ✅ should correctly identify all natural notes (0.8262529999999515ms)
- ✅ should return empty array for notes on the staff (0.4886989999999969ms)
- ✅ should generate ledger lines below staff for C4 (0.9874970000000758ms)
- ✅ should generate ledger lines below staff for D4 (0.13503400000001875ms)
- ✅ should generate ledger lines above staff for G5 (0.13603599999999005ms)
- ✅ should generate more ledger lines for notes further from staff (0.14450200000010227ms)
- ✅ should return ledger lines in correct order (0.10890500000004977ms)
- ✅ should return ledger lines in correct order for above staff (0.09343599999999697ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.9680000000000746ms)
- ✅ should swap min and max if min > max (0.4214430000000675ms)
- ✅ should reject min below 0 (0.41595299999994495ms)
- ✅ should reject max above total notes (0.3835709999999608ms)
- ✅ should allow min === max (0.358113000000003ms)
- ✅ should keep max if min < max (0.2107059999999592ms)
- ✅ should adjust max to equal min if min > max (0.1532479999999623ms)
- ✅ should handle equal values (0.15732600000001185ms)
- ✅ should keep min if max > min (0.3418729999999641ms)
- ✅ should adjust min to equal max if max < min (0.21205800000007002ms)
- ✅ should handle equal values (0.17345699999998487ms)
- ✅ should have correct default values (0.2845150000000558ms)
- ✅ should have default between min and max (0.33877700000005007ms)
- ✅ should return value within range unchanged (0.41971000000000913ms)
- ✅ should clamp value below minimum (0.3068670000000111ms)
- ✅ should clamp value above maximum (0.25911699999994653ms)
- ✅ should return min/max at boundaries (0.1797679999999673ms)
- ✅ should validate tempo within range (0.3009759999999915ms)
- ✅ should reject non-number values (0.2147340000000213ms)
- ✅ should reject NaN (0.1959789999999657ms)
- ✅ should reject tempo below minimum (0.3210830000000442ms)
- ✅ should reject tempo above maximum (0.25842599999998583ms)
- ✅ should accept boundary values (0.2151049999999941ms)
- ✅ should return 0% for minimum tempo (0.16519099999993614ms)
- ✅ should return 100% for maximum tempo (0.14605500000004668ms)
- ✅ should return 50% for midpoint tempo (0.13993299999992814ms)
- ✅ should return 40% for tempo 120 (0.14490200000000186ms)
- ✅ should return correct percentages for various tempos (0.2927500000000691ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (5.897097000000031ms)
- ✅ should create analyser and connect to stream (4.595921000000089ms)
- ✅ should handle initialization errors (14.613777000000027ms)
- ✅ should convert A4 (440 Hz) correctly (1.4776180000001204ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.158377999999857ms)
- ✅ should convert E4 (329.63 Hz) correctly (1.0034970000001522ms)
- ✅ should handle out of range frequencies (1.1363769999998112ms)
- ✅ should calculate cents offset for slightly sharp notes (1.0800110000000132ms)
- ✅ should calculate cents offset for slightly flat notes (1.0772460000000592ms)
- ✅ should return null for silent signal (1.6288919999999507ms)
- ✅ should return null for very weak signal (0.8385759999998754ms)
- ✅ should detect a strong periodic signal (31.518325999999888ms)
- ✅ should not start without initialization (0.7703389999999217ms)
- ✅ should start after initialization (1.781109000000015ms)
- ✅ should stop detection (12.864535999999816ms)
- ✅ should not start twice (2.283433000000059ms)
- ✅ should cleanup resources on dispose (0.6735269999999218ms)

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
