# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 215
**Passed:** 215 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (2.0632779999999684ms)
- ✅ should have patterns with required properties (2.741569000000027ms)
- ✅ should have unique values (0.16575000000000273ms)
- ✅ should include Off pattern (0.23104299999999967ms)
- ✅ should include 16th notes pattern (0.24589100000002873ms)
- ✅ should include 8th note triplets pattern (0.24299599999994825ms)
- ✅ should include 8th notes pattern (0.1565939999999273ms)
- ✅ should include quarter note triplets pattern (0.13832000000002154ms)
- ✅ should include quarter notes pattern (0.23447900000007849ms)
- ✅ should include half note triplets pattern (0.2627229999999372ms)
- ✅ should include half notes pattern (0.1510929999999462ms)
- ✅ should include whole notes pattern (0.1361860000000661ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.3900709999999208ms)
- ✅ should be defined (0.37383999999997286ms)
- ✅ should be the quarter notes pattern (0.17354499999999007ms)
- ✅ should be included in CLICK_PATTERNS (1.138313999999923ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.7760379999999714ms)
- ✅ should have all durations with name and beats properties (0.8433009999999967ms)
- ✅ should have whole note with 8 beats (0.1953359999999975ms)
- ✅ should have half note with 4 beats (0.2337880000000041ms)
- ✅ should have quarter note with 2 beats (0.2183790000000272ms)
- ✅ should have eighth note with 1 beat (0.16304600000000846ms)
- ✅ should be ordered from longest to shortest (0.2229780000000119ms)
- ✅ should have display names for all durations (0.22644400000001497ms)
- ✅ should have proper capitalized names (0.25734299999999166ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.1468439999999873ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.32135199999993347ms)
- ✅ should have clef property (0.20618600000000242ms)
- ✅ should have comfortable range (0.3323530000000119ms)
- ✅ should have full range (0.3712759999999662ms)
- ✅ should return concert pitch when instrument is null (0.22881900000004407ms)
- ✅ should return concert pitch when transposition is 0 (0.22718600000007427ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.2887420000000702ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.41126100000008137ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.26560699999993176ms)
- ✅ should maintain octave relationships after transposition (0.25105100000007496ms)
- ✅ should use the correct transposition formula (0.19369299999993927ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.760633999999982ms)
- ✅ should start with A0 at concert pitch (0.44087600000000293ms)
- ✅ should end with C8 at concert pitch (0.3724379999999883ms)
- ✅ should have all notes as objects with name and frequency (10.905520000000024ms)
- ✅ should have frequencies in ascending order (2.693687999999952ms)
- ✅ should include all chromatic notes (12 per octave) (1.7772509999999784ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.39819599999998445ms)
- ✅ should have correct MIN_INDEX (0.1776630000000523ms)
- ✅ should have correct MAX_INDEX (0.25857399999995323ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.2517720000000736ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.21528399999999692ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.14325800000005984ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (118.31501600000001ms)
- ✅ should handle suspended audio context (101.94638999999984ms)
- ✅ should return audio engine readiness status (104.02181300000007ms)
- ✅ should get current audio time (106.36976300000015ms)
- ✅ should respect soundEnabled prop initially true (104.6149620000001ms)
- ✅ should respect soundEnabled prop initially false (102.94002599999976ms)
- ✅ should update soundEnabled via ref when prop changes (105.3534209999998ms)
- ✅ should play click sound when audio ready and sound enabled (103.37025500000027ms)
- ✅ should not play click sound when audio not ready (2.9716209999996863ms)
- ✅ should not play click sound when sound disabled (103.70476700000017ms)
- ✅ should play note sound when audio ready and sound enabled (103.66343899999993ms)
- ✅ should not play note sound when audio not ready (2.53067400000009ms)
- ✅ should not play note sound when sound disabled (105.95701899999995ms)
- ✅ should calculate correct duration from tempo and beats (104.45475299999998ms)
- ✅ should close audio context on cleanup (102.54644499999995ms)
- ✅ should not error when closing uninitialized audio (2.9566030000000865ms)
- ✅ should handle multiple init calls gracefully (302.70748000000003ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (2.024996000000101ms)
- ✅ should handle webkitAudioContext fallback (105.46301500000027ms)

### Hooks Tests (31/31 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (22.485171000000037ms)
- ✅ should initialize with random note from provided notes (3.2852589999999964ms)
- ✅ should initialize with random duration from provided durations (2.7079459999999926ms)
- ✅ should update tempo (4.472485000000006ms)
- ✅ should handle tempo as string (from input) (2.8176119999998264ms)
- ✅ should clamp tempo to valid range (3.492556999999806ms)
- ✅ should handle invalid tempo input (2.3333440000001247ms)
- ✅ should toggle play state from stopped to playing (2.2477539999999863ms)
- ✅ should toggle play state from playing to stopped (3.324762999999848ms)
- ✅ should reset beat to 0 when stopping (3.0004350000001523ms)
- ✅ should toggle sound from enabled to disabled (3.3319719999999506ms)
- ✅ should toggle sound from disabled to enabled (3.481817000000092ms)
- ✅ should toggle staff display from hidden to visible (2.86615299999994ms)
- ✅ should toggle staff display from visible to hidden (3.4809549999999945ms)
- ✅ should initialize with default click pattern (1.7254140000000007ms)
- ✅ should update click pattern (1.840099999999893ms)
- ✅ should change from quarter to whole note pattern (1.5919139999998606ms)
- ✅ should change to triplet pattern (1.463083000000097ms)
- ✅ should change to off pattern (1.5873799999999392ms)
- ✅ should update range min (1.4677420000000438ms)
- ✅ should update range max (1.3949649999999565ms)
- ✅ should ensure min does not exceed max (1.4292289999998502ms)
- ✅ should ensure max does not go below min (1.5083170000000337ms)
- ✅ should update current note (1.244462999999996ms)
- ✅ should update current duration (1.3355129999999917ms)
- ✅ should update current beat (1.3478969999998753ms)
- ✅ should maintain stable callback references (1.8476939999998194ms)
- ✅ should handle empty notes array gracefully (1.079052000000047ms)
- ✅ should handle single note (1.3205450000000383ms)
- ✅ should handle single duration (1.0765980000001036ms)
- ✅ should handle rapid state changes (1.9774669999999333ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (3.2333810000000085ms)
- ✅ should return a duration object with name and beats (0.4675870000000941ms)
- ✅ should select different durations over multiple calls (0.46941000000003896ms)
- ✅ should handle single duration array (0.4357469999999921ms)
- ✅ should return a duration from the array (0.6013670000000957ms)
- ✅ should use default weights if none provided (0.25994700000001103ms)
- ✅ should respect custom weights (0.7719170000000304ms)
- ✅ should handle partial weight objects (0.27543600000001334ms)
- ✅ should handle zero weights correctly (0.5695680000000038ms)
- ✅ should follow the pattern in order (0.5297130000000152ms)
- ✅ should loop the pattern (0.34623900000008234ms)
- ✅ should handle single element pattern (0.27223000000003594ms)
- ✅ should return fallback for unknown duration name (0.28814999999997326ms)
- ✅ should handle large indices (0.4032359999999926ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.150364999999965ms)
- ✅ should return a note different from current note (0.42369399999995494ms)
- ✅ should return the only note if range contains single note (0.4177229999999099ms)
- ✅ should respect min and max indices (1.4396990000000187ms)
- ✅ should handle edge case where current note is the only option (0.28653699999995297ms)
- ✅ should select note within specified interval (0.3950110000000677ms)
- ✅ should return null if current note not found (0.2235689999999977ms)
- ✅ should return null if no notes in interval range (0.16551000000004024ms)
- ✅ should include notes both above and below current note (0.542917999999986ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.9925539999999273ms)
- ✅ should convert # to ♯ symbol (0.3597139999999399ms)
- ✅ should handle multiple sharps in name (edge case) (0.22353900000007343ms)
- ✅ should convert sharps to flats (0.509604999999965ms)
- ✅ should return natural notes unchanged (0.464821000000029ms)
- ✅ should format whole note (0.2343389999999772ms)
- ✅ should format half note (0.17458700000008776ms)
- ✅ should format quarter note (0.18019700000002103ms)
- ✅ should format eighth note (0.32137199999999666ms)
- ✅ should return capitalized name for whole note (0.25880500000005213ms)
- ✅ should return capitalized name for half note (0.16369700000007015ms)
- ✅ should return capitalized name for quarter note (0.14907999999991262ms)
- ✅ should return capitalized name for eighth note (0.2685830000000351ms)
- ✅ should return input for unknown duration (0.34986600000002ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.793928000000051ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.31354800000008254ms)
- ✅ should calculate G4 at y=75 (second line) (0.23009099999990212ms)
- ✅ should calculate B4 at y=60 (middle line) (0.3443959999999606ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.3523800000000392ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.21014500000001135ms)
- ✅ should calculate F5 at y=30 (top line) (0.1989730000000236ms)
- ✅ should calculate C4 below staff at y=105 (0.2085300000001098ms)
- ✅ should calculate D4 below staff at y=97.5 (0.31710400000019945ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.34556799999995746ms)
- ✅ should handle octave changes correctly (0.296244999999999ms)
- ✅ should handle very low notes (C2) (0.35798099999988153ms)
- ✅ should handle very high notes (C7) (0.24008099999991828ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.41137099999991733ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.204874000000018ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.23782600000004095ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.16473900000005415ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.18114999999988868ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.1527369999998882ms)
- ✅ should calculate E2 below staff in bass clef (0.2286389999999301ms)
- ✅ should calculate C4 above staff in bass clef (0.1476869999999053ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.13737799999989875ms)
- ✅ should parse natural note correctly (0.9933419999999842ms)
- ✅ should parse sharp note correctly (0.201567999999952ms)
- ✅ should handle low octaves (0.14524299999993673ms)
- ✅ should handle high octaves (0.18815299999982926ms)
- ✅ should correctly identify all natural notes (0.8041370000000825ms)
- ✅ should return empty array for notes on the staff (0.4233030000000326ms)
- ✅ should generate ledger lines below staff for C4 (1.053814999999986ms)
- ✅ should generate ledger lines below staff for D4 (0.12932200000000194ms)
- ✅ should generate ledger lines above staff for G5 (0.11590700000010656ms)
- ✅ should generate more ledger lines for notes further from staff (0.14979999999991378ms)
- ✅ should return ledger lines in correct order (0.11023600000021361ms)
- ✅ should return ledger lines in correct order for above staff (0.1021210000001247ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.4488659999999527ms)
- ✅ should swap min and max if min > max (0.4140259999999216ms)
- ✅ should reject min below 0 (0.4016030000000228ms)
- ✅ should reject max above total notes (0.4118419999999787ms)
- ✅ should allow min === max (0.34773199999995086ms)
- ✅ should keep max if min < max (0.2012369999999919ms)
- ✅ should adjust max to equal min if min > max (0.1167089999999007ms)
- ✅ should handle equal values (0.10236200000008466ms)
- ✅ should keep min if max > min (0.23126300000001265ms)
- ✅ should adjust min to equal max if max < min (0.1348729999999705ms)
- ✅ should handle equal values (0.10773200000005545ms)
- ✅ should have correct default values (0.21669699999995373ms)
- ✅ should have default between min and max (0.23104399999999714ms)
- ✅ should return value within range unchanged (0.2880000000000109ms)
- ✅ should clamp value below minimum (0.1799870000000965ms)
- ✅ should clamp value above maximum (0.2208140000000185ms)
- ✅ should return min/max at boundaries (0.13582500000006803ms)
- ✅ should validate tempo within range (0.2022389999999632ms)
- ✅ should reject non-number values (0.15159400000004553ms)
- ✅ should reject NaN (0.1408840000000282ms)
- ✅ should reject tempo below minimum (0.2887620000000197ms)
- ✅ should reject tempo above maximum (0.1597789999999577ms)
- ✅ should accept boundary values (0.12053600000001552ms)
- ✅ should return 0% for minimum tempo (0.11233100000004015ms)
- ✅ should return 100% for maximum tempo (0.08517999999992298ms)
- ✅ should return 50% for midpoint tempo (0.08274499999993168ms)
- ✅ should return 40% for tempo 120 (0.14707599999997ms)
- ✅ should return correct percentages for various tempos (0.2298999999999296ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (5.879843000000051ms)
- ✅ should create analyser and connect to stream (4.594351999999958ms)
- ✅ should handle initialization errors (12.322490000000016ms)
- ✅ should convert A4 (440 Hz) correctly (1.3950350000000071ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.0056549999999334ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.843291000000022ms)
- ✅ should handle out of range frequencies (0.859862000000021ms)
- ✅ should calculate cents offset for slightly sharp notes (0.9184810000000425ms)
- ✅ should calculate cents offset for slightly flat notes (1.1013140000000021ms)
- ✅ should return null for silent signal (1.380849000000012ms)
- ✅ should return null for very weak signal (0.9459530000000314ms)
- ✅ should detect a strong periodic signal (14.622009999999932ms)
- ✅ should not start without initialization (0.6224970000000667ms)
- ✅ should start after initialization (1.6102680000000191ms)
- ✅ should stop detection (0.9394210000000385ms)
- ✅ should not start twice (1.02011200000004ms)
- ✅ should cleanup resources on dispose (0.9702780000000075ms)

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
