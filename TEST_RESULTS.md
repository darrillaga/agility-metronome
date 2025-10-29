# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 234
**Passed:** 234 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (4/4 passed)

**File:** `constants/__tests__/accidentalModes`

- ✅ should define sharps mode (1.152586000000042ms)
- ✅ should define flats mode (0.1596270000000004ms)
- ✅ should define mix mode (0.13630399999999554ms)
- ✅ should have sharps as default (0.27719600000000355ms)

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (2.7317410000000564ms)
- ✅ should have patterns with required properties (3.4997749999999996ms)
- ✅ should have unique values (0.23435700000004545ms)
- ✅ should include Off pattern (0.37299400000006244ms)
- ✅ should include 16th notes pattern (0.3537790000000314ms)
- ✅ should include 8th note triplets pattern (0.3572350000000597ms)
- ✅ should include 8th notes pattern (0.2535320000000638ms)
- ✅ should include quarter note triplets pattern (0.26849000000004253ms)
- ✅ should include quarter notes pattern (0.3506919999999809ms)
- ✅ should include half note triplets pattern (0.37741300000004685ms)
- ✅ should include half notes pattern (0.2617769999999382ms)
- ✅ should include whole notes pattern (0.22873599999991256ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.5428309999999783ms)
- ✅ should be defined (0.4000149999999394ms)
- ✅ should be the quarter notes pattern (0.2639209999999821ms)
- ✅ should be included in CLICK_PATTERNS (1.5258810000000267ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (2.4813500000000204ms)
- ✅ should have all durations with name and beats properties (1.4323660000000018ms)
- ✅ should have whole note with 8 beats (0.29225399999995716ms)
- ✅ should have half note with 4 beats (0.34275800000000345ms)
- ✅ should have quarter note with 2 beats (0.32396300000004885ms)
- ✅ should have eighth note with 1 beat (0.1851249999999709ms)
- ✅ should be ordered from longest to shortest (0.23808400000007168ms)
- ✅ should have display names for all durations (0.2029779999999164ms)
- ✅ should have proper capitalized names (0.27334800000005544ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.051449000000048ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.3729040000000623ms)
- ✅ should have clef property (0.23361499999998614ms)
- ✅ should have comfortable range (0.3855479999999716ms)
- ✅ should have full range (0.44462799999996605ms)
- ✅ should return concert pitch when instrument is null (0.2333449999999857ms)
- ✅ should return concert pitch when transposition is 0 (0.20826800000008916ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.2583110000000488ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.3216089999999667ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.21865700000000743ms)
- ✅ should maintain octave relationships after transposition (0.2527109999999766ms)
- ✅ should use the correct transposition formula (0.17600800000002437ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.760409999999979ms)
- ✅ should start with A0 at concert pitch (0.45669999999995525ms)
- ✅ should end with C8 at concert pitch (0.39892299999996794ms)
- ✅ should have all notes as objects with name and frequency (13.041669999999954ms)
- ✅ should have frequencies in ascending order (2.577107999999953ms)
- ✅ should include all chromatic notes (12 per octave) (1.818805999999995ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (1.1379269999999906ms)
- ✅ should have correct MIN_INDEX (0.16363400000000183ms)
- ✅ should have correct MAX_INDEX (0.19843900000000758ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.18013600000006136ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.12196699999992688ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.09153100000003178ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (118.58286300000009ms)
- ✅ should handle suspended audio context (103.21729500000015ms)
- ✅ should return audio engine readiness status (103.95499800000016ms)
- ✅ should get current audio time (105.01081399999998ms)
- ✅ should respect soundEnabled prop initially true (105.82440799999995ms)
- ✅ should respect soundEnabled prop initially false (103.5093280000001ms)
- ✅ should update soundEnabled via ref when prop changes (104.39085899999986ms)
- ✅ should play click sound when audio ready and sound enabled (102.69916199999989ms)
- ✅ should not play click sound when audio not ready (2.605790999999954ms)
- ✅ should not play click sound when sound disabled (103.02893199999971ms)
- ✅ should play note sound when audio ready and sound enabled (102.75272200000018ms)
- ✅ should not play note sound when audio not ready (3.637861000000157ms)
- ✅ should not play note sound when sound disabled (105.72708899999998ms)
- ✅ should calculate correct duration from tempo and beats (105.22151200000008ms)
- ✅ should close audio context on cleanup (102.70625500000006ms)
- ✅ should not error when closing uninitialized audio (3.125289000000066ms)
- ✅ should handle multiple init calls gracefully (303.00921400000016ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.9573639999998704ms)
- ✅ should handle webkitAudioContext fallback (104.59418099999994ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (21.08323100000007ms)
- ✅ should initialize with random note from provided notes (2.677344999999832ms)
- ✅ should initialize with random duration from provided durations (2.3155910000000404ms)
- ✅ should update tempo (4.245484000000033ms)
- ✅ should handle tempo as string (from input) (2.0611069999999927ms)
- ✅ should clamp tempo to valid range (2.1199360000000524ms)
- ✅ should handle invalid tempo input (1.4753960000000461ms)
- ✅ should toggle play state from stopped to playing (1.4446600000001126ms)
- ✅ should toggle play state from playing to stopped (3.135037000000011ms)
- ✅ should reset beat to 0 when stopping (2.453217999999879ms)
- ✅ should toggle sound from enabled to disabled (4.852190999999948ms)
- ✅ should toggle sound from disabled to enabled (5.526718999999957ms)
- ✅ should toggle staff display from hidden to visible (2.1854789999999866ms)
- ✅ should toggle staff display from visible to hidden (3.0835199999999077ms)
- ✅ should initialize with default click pattern (1.5042700000001332ms)
- ✅ should update click pattern (1.6256060000000616ms)
- ✅ should change from quarter to whole note pattern (1.420364999999947ms)
- ✅ should change to triplet pattern (1.3670750000001135ms)
- ✅ should change to off pattern (1.3850979999999709ms)
- ✅ should update range min (1.3686780000000454ms)
- ✅ should update range max (1.3258879999998499ms)
- ✅ should ensure min does not exceed max (1.3482000000001335ms)
- ✅ should ensure max does not go below min (1.3769230000000334ms)
- ✅ should update current note (1.1809189999999035ms)
- ✅ should update current duration (1.1887430000001586ms)
- ✅ should update current beat (2.802547000000004ms)
- ✅ should maintain stable callback references (1.7066580000000613ms)
- ✅ should handle empty notes array gracefully (0.99350000000004ms)
- ✅ should handle single note (1.2553869999999279ms)
- ✅ should handle single duration (0.9801249999998163ms)
- ✅ should handle rapid state changes (1.9037940000000617ms)
- ✅ should initialize with all durations selected (1.1968880000001718ms)
- ✅ should toggle duration selection on (2.0381740000000264ms)
- ✅ should toggle duration selection off (1.4218570000000454ms)
- ✅ should not allow deselecting the last duration (1.8680080000001453ms)
- ✅ should persist selected durations to localStorage (1.4834220000000187ms)
- ✅ should load selected durations from localStorage (1.522995999999921ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.205506000000014ms)
- ✅ should return a duration object with name and beats (0.350983000000042ms)
- ✅ should select different durations over multiple calls (0.3040960000000723ms)
- ✅ should handle single duration array (0.2825960000000123ms)
- ✅ should return a duration from the array (0.4116669999999658ms)
- ✅ should use default weights if none provided (0.16093899999998484ms)
- ✅ should respect custom weights (0.4628219999999601ms)
- ✅ should handle partial weight objects (0.1736230000000205ms)
- ✅ should handle zero weights correctly (0.3362359999999853ms)
- ✅ should follow the pattern in order (0.33205899999995836ms)
- ✅ should loop the pattern (0.19152600000006714ms)
- ✅ should handle single element pattern (0.15785399999992933ms)
- ✅ should return fallback for unknown duration name (0.16052799999999934ms)
- ✅ should handle large indices (0.2589019999999209ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (2.5443369999999277ms)
- ✅ should return a note different from current note (0.3032339999999749ms)
- ✅ should return the only note if range contains single note (0.3109680000000026ms)
- ✅ should respect min and max indices (0.78946899999994ms)
- ✅ should handle edge case where current note is the only option (0.2143589999999449ms)
- ✅ should select note within specified interval (0.2463789999999335ms)
- ✅ should return null if current note not found (0.152704999999969ms)
- ✅ should return null if no notes in interval range (0.11514399999998659ms)
- ✅ should include notes both above and below current note (0.4084409999999252ms)

### Utils Tests (23/23 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.7294200000000046ms)
- ✅ should convert # to ♯ symbol (0.2893389999999272ms)
- ✅ should handle multiple sharps in name (edge case) (0.3022320000000036ms)
- ✅ should convert sharps to flats (0.6238319999999931ms)
- ✅ should return natural notes unchanged (0.39456399999994574ms)
- ✅ should return natural notes unchanged (1.441724000000022ms)
- ✅ should return sharp when random < 0.5 (0.563808999999992ms)
- ✅ should return flat when random >= 0.5 (0.3154779999999846ms)
- ✅ should format with sharps when mode is sharps (0.34116500000004635ms)
- ✅ should format with flats when mode is flats (0.24620800000002419ms)
- ✅ should format with mix when mode is mix (0.2721569999999929ms)
- ✅ should return natural notes unchanged for all modes (0.2490940000000137ms)
- ✅ should convert sharps to enharmonic flats (0.41865900000004785ms)
- ✅ should return natural notes unchanged (0.5175729999999703ms)
- ✅ should format whole note (0.3153270000000248ms)
- ✅ should format half note (0.18468399999994745ms)
- ✅ should format quarter note (0.1444490000000087ms)
- ✅ should format eighth note (0.13736500000004526ms)
- ✅ should return capitalized name for whole note (0.16724099999998998ms)
- ✅ should return capitalized name for half note (0.2010649999999714ms)
- ✅ should return capitalized name for quarter note (0.13081399999998666ms)
- ✅ should return capitalized name for eighth note (0.1334990000000289ms)
- ✅ should return input for unknown duration (0.12592400000005455ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.071956999999884ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.2814140000000407ms)
- ✅ should calculate G4 at y=75 (second line) (0.2594329999999445ms)
- ✅ should calculate B4 at y=60 (middle line) (0.3347039999998742ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.342017000000169ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.23867399999994632ms)
- ✅ should calculate F5 at y=30 (top line) (0.19617499999981192ms)
- ✅ should calculate C4 below staff at y=105 (0.19134699999995064ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3252650000001722ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.4178180000001248ms)
- ✅ should handle octave changes correctly (0.30031899999994494ms)
- ✅ should handle very low notes (C2) (0.4268849999998565ms)
- ✅ should handle very high notes (C7) (0.2844589999999698ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4279559999999947ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.30153100000006816ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.2526709999999639ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.17333299999995688ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.16774199999986195ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.17183999999997468ms)
- ✅ should calculate E2 below staff in bass clef (0.27908000000002176ms)
- ✅ should calculate C4 above staff in bass clef (0.170797999999877ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.16602899999998044ms)
- ✅ should parse natural note correctly (1.160509999999931ms)
- ✅ should parse sharp note correctly (0.23477700000012192ms)
- ✅ should handle low octaves (0.1660389999999552ms)
- ✅ should handle high octaves (0.2309900000000198ms)
- ✅ should correctly identify all natural notes (0.8129530000001068ms)
- ✅ should return empty array for notes on the staff (0.5045889999998963ms)
- ✅ should generate ledger lines below staff for C4 (1.036600000000135ms)
- ✅ should generate ledger lines below staff for D4 (0.1496589999999287ms)
- ✅ should generate ledger lines above staff for G5 (0.13195600000017293ms)
- ✅ should generate more ledger lines for notes further from staff (0.13664399999993293ms)
- ✅ should return ledger lines in correct order (0.1033230000000458ms)
- ✅ should return ledger lines in correct order for above staff (0.10729000000014821ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (2.0962630000000217ms)
- ✅ should swap min and max if min > max (0.3365370000000212ms)
- ✅ should reject min below 0 (0.4074989999999161ms)
- ✅ should reject max above total notes (0.41374000000007527ms)
- ✅ should allow min === max (0.3925610000000006ms)
- ✅ should keep max if min < max (0.2521000000000413ms)
- ✅ should adjust max to equal min if min > max (0.17583700000000135ms)
- ✅ should handle equal values (0.17636900000002242ms)
- ✅ should keep min if max > min (0.34812799999997424ms)
- ✅ should adjust min to equal max if max < min (0.2472699999999577ms)
- ✅ should handle equal values (0.18403200000000197ms)
- ✅ should have correct default values (0.26931200000001354ms)
- ✅ should have default between min and max (0.37277399999993577ms)
- ✅ should return value within range unchanged (0.4459400000000642ms)
- ✅ should clamp value below minimum (0.34141599999998107ms)
- ✅ should clamp value above maximum (0.2871350000000348ms)
- ✅ should return min/max at boundaries (0.1938310000000456ms)
- ✅ should validate tempo within range (0.25820099999998547ms)
- ✅ should reject non-number values (0.2312409999999545ms)
- ✅ should reject NaN (0.16877399999998488ms)
- ✅ should reject tempo below minimum (0.30074999999999363ms)
- ✅ should reject tempo above maximum (0.19425200000000586ms)
- ✅ should accept boundary values (0.19972199999995155ms)
- ✅ should return 0% for minimum tempo (0.16914599999995517ms)
- ✅ should return 100% for maximum tempo (0.12837899999999536ms)
- ✅ should return 50% for midpoint tempo (0.14939800000001924ms)
- ✅ should return 40% for tempo 120 (0.13232600000003458ms)
- ✅ should return correct percentages for various tempos (0.34191600000008293ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (3.9123839999999745ms)
- ✅ should create analyser and connect to stream (3.1737379999999575ms)
- ✅ should handle initialization errors (9.225225000000023ms)
- ✅ should convert A4 (440 Hz) correctly (1.2945600000000468ms)
- ✅ should convert C4 (261.63 Hz) correctly (0.9778599999999642ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.8413459999999304ms)
- ✅ should handle out of range frequencies (0.8627860000000283ms)
- ✅ should calculate cents offset for slightly sharp notes (0.9084310000000642ms)
- ✅ should calculate cents offset for slightly flat notes (1.8024960000000192ms)
- ✅ should return null for silent signal (1.5502460000000156ms)
- ✅ should return null for very weak signal (0.8941250000000309ms)
- ✅ should detect a strong periodic signal (9.987644000000046ms)
- ✅ should not start without initialization (0.48451199999999517ms)
- ✅ should start after initialization (2.0091300000000274ms)
- ✅ should stop detection (1.0261910000000398ms)
- ✅ should not start twice (4.813260999999898ms)
- ✅ should cleanup resources on dispose (1.0352180000001ms)

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
