# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 232
**Passed:** 232 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (4/4 passed)

**File:** `constants/__tests__/accidentalModes`

- ✅ should define sharps mode (1.830951000000141ms)
- ✅ should define flats mode (0.24233299999991686ms)
- ✅ should define mix mode (0.2582320000001346ms)
- ✅ should have sharps as default (0.3828849999999875ms)

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.7905550000000403ms)
- ✅ should have patterns with required properties (5.691183000000137ms)
- ✅ should have unique values (0.27063600000019505ms)
- ✅ should include Off pattern (0.371302999999898ms)
- ✅ should include 16th notes pattern (0.32989599999996244ms)
- ✅ should include 8th note triplets pattern (0.3680580000000191ms)
- ✅ should include 8th notes pattern (0.23390700000004472ms)
- ✅ should include quarter note triplets pattern (0.21905900000001566ms)
- ✅ should include quarter notes pattern (0.36277800000016214ms)
- ✅ should include half note triplets pattern (0.33299200000010387ms)
- ✅ should include half notes pattern (0.23332600000003367ms)
- ✅ should include whole notes pattern (0.21842799999990348ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.4173000000000684ms)
- ✅ should be defined (1.3040169999999307ms)
- ✅ should be the quarter notes pattern (0.273290999999972ms)
- ✅ should be included in CLICK_PATTERNS (1.8514690000001792ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (3.5947969999999714ms)
- ✅ should have all durations with name and beats properties (1.3845870000000104ms)
- ✅ should have whole note with 8 beats (0.32041800000001786ms)
- ✅ should have half note with 4 beats (0.3372199999998884ms)
- ✅ should have quarter note with 2 beats (0.3661449999999604ms)
- ✅ should have eighth note with 1 beat (0.25810200000000805ms)
- ✅ should be ordered from longest to shortest (0.3713540000001103ms)
- ✅ should have display names for all durations (0.34589600000003884ms)
- ✅ should have proper capitalized names (0.44872800000007373ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.204048999999941ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.36465099999986705ms)
- ✅ should have clef property (0.23696200000017598ms)
- ✅ should have comfortable range (2.5841080000000147ms)
- ✅ should have full range (0.419304000000011ms)
- ✅ should return concert pitch when instrument is null (0.25713999999993575ms)
- ✅ should return concert pitch when transposition is 0 (0.22890800000004674ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.32364400000005844ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.29500099999995655ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.26083700000003773ms)
- ✅ should maintain octave relationships after transposition (0.2706759999998667ms)
- ✅ should use the correct transposition formula (0.1748569999999745ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.53387500000008ms)
- ✅ should start with A0 at concert pitch (0.37914900000009766ms)
- ✅ should end with C8 at concert pitch (0.3314589999999953ms)
- ✅ should have all notes as objects with name and frequency (12.716523000000052ms)
- ✅ should have frequencies in ascending order (2.7256740000000264ms)
- ✅ should include all chromatic notes (12 per octave) (2.201994999999897ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (2.1934389999998984ms)
- ✅ should have correct MIN_INDEX (0.20074499999986983ms)
- ✅ should have correct MAX_INDEX (0.2809749999998985ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.2487949999999728ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.22436999999990803ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.15146299999992152ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (3.499659000000065ms)
- ✅ should return a duration object with name and beats (0.5173170000000482ms)
- ✅ should select different durations over multiple calls (0.46893599999998514ms)
- ✅ should handle single duration array (0.4290009999999711ms)
- ✅ should return a duration from the array (0.6562760000001617ms)
- ✅ should use default weights if none provided (0.243364000000156ms)
- ✅ should respect custom weights (0.7392210000000432ms)
- ✅ should handle partial weight objects (2.0313160000000607ms)
- ✅ should handle zero weights correctly (0.6021259999999984ms)
- ✅ should follow the pattern in order (0.45177400000011403ms)
- ✅ should loop the pattern (0.3087460000001556ms)
- ✅ should handle single element pattern (0.2570610000000215ms)
- ✅ should return fallback for unknown duration name (0.23578100000008817ms)
- ✅ should handle large indices (0.39865499999996246ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (6.419814999999971ms)
- ✅ should return a note different from current note (0.47752300000001924ms)
- ✅ should return the only note if range contains single note (0.5070470000000569ms)
- ✅ should respect min and max indices (1.4724710000000414ms)
- ✅ should handle edge case where current note is the only option (2.607432000000017ms)
- ✅ should select note within specified interval (0.44136500000013257ms)
- ✅ should return null if current note not found (0.254566000000068ms)
- ✅ should return null if no notes in interval range (0.18516599999998107ms)
- ✅ should include notes both above and below current note (0.580063999999993ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (128.24291800000015ms)
- ✅ should handle suspended audio context (110.0912659999999ms)
- ✅ should return audio engine readiness status (109.13862000000017ms)
- ✅ should get current audio time (109.19155900000032ms)
- ✅ should respect soundEnabled prop initially true (109.4281189999997ms)
- ✅ should respect soundEnabled prop initially false (110.57228899999973ms)
- ✅ should update soundEnabled via ref when prop changes (110.45106299999998ms)
- ✅ should play click sound when audio ready and sound enabled (103.98260500000015ms)
- ✅ should not play click sound when audio not ready (6.8842640000002575ms)
- ✅ should not play click sound when sound disabled (108.17308599999978ms)
- ✅ should play note sound when audio ready and sound enabled (107.29254199999968ms)
- ✅ should not play note sound when audio not ready (5.726329999999962ms)
- ✅ should not play note sound when sound disabled (106.58483799999976ms)
- ✅ should calculate correct duration from tempo and beats (107.7619679999998ms)
- ✅ should close audio context on cleanup (103.64747899999975ms)
- ✅ should not error when closing uninitialized audio (6.318839000000025ms)
- ✅ should handle multiple init calls gracefully (306.3166379999998ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (4.811387000000195ms)
- ✅ should handle webkitAudioContext fallback (106.48434899999984ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (24.021029ms)
- ✅ should initialize with random note from provided notes (3.048567000000048ms)
- ✅ should initialize with random duration from provided durations (2.6411249999998745ms)
- ✅ should update tempo (4.226959000000079ms)
- ✅ should handle tempo as string (from input) (2.9812010000000555ms)
- ✅ should clamp tempo to valid range (4.354999000000134ms)
- ✅ should handle invalid tempo input (2.791435999999976ms)
- ✅ should toggle play state from stopped to playing (4.612449000000197ms)
- ✅ should toggle play state from playing to stopped (4.401625999999851ms)
- ✅ should reset beat to 0 when stopping (3.820317000000159ms)
- ✅ should toggle sound from enabled to disabled (4.617610000000013ms)
- ✅ should toggle sound from disabled to enabled (5.486020999999937ms)
- ✅ should toggle staff display from hidden to visible (5.537258000000065ms)
- ✅ should toggle staff display from visible to hidden (2.4741829999998117ms)
- ✅ should initialize with default click pattern (1.668749000000389ms)
- ✅ should update click pattern (3.031836000000112ms)
- ✅ should change from quarter to whole note pattern (2.198178000000098ms)
- ✅ should change to triplet pattern (1.7562540000003537ms)
- ✅ should change to off pattern (1.577708000000257ms)
- ✅ should update range min (1.5098119999997834ms)
- ✅ should update range max (1.4857260000003407ms)
- ✅ should ensure min does not exceed max (1.649141999999756ms)
- ✅ should ensure max does not go below min (1.5422419999999875ms)
- ✅ should update current note (1.3169910000001437ms)
- ✅ should update current duration (1.2630299999996168ms)
- ✅ should update current beat (4.29745099999991ms)
- ✅ should maintain stable callback references (1.8408500000000458ms)
- ✅ should handle empty notes array gracefully (1.0560930000001463ms)
- ✅ should handle single note (1.3680169999997815ms)
- ✅ should handle single duration (1.1434970000000249ms)
- ✅ should handle rapid state changes (2.0489590000001954ms)
- ✅ should initialize with all durations selected (1.2407379999999648ms)
- ✅ should toggle duration selection on (1.9295360000000983ms)
- ✅ should toggle duration selection off (1.398623999999927ms)
- ✅ should not allow deselecting the last duration (2.4357719999998153ms)
- ✅ should persist selected durations to localStorage (2.4580839999998716ms)
- ✅ should load selected durations from localStorage (3.6009290000001783ms)

### Utils Tests (21/21 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.530529000000115ms)
- ✅ should convert # to ♯ symbol (0.23533999999995103ms)
- ✅ should handle multiple sharps in name (edge case) (0.26332300000012765ms)
- ✅ should convert sharps to flats (0.510684000000083ms)
- ✅ should return natural notes unchanged (0.34480399999984ms)
- ✅ should return natural notes unchanged (1.3432799999998224ms)
- ✅ should return sharp when random < 0.5 (0.5586439999999584ms)
- ✅ should return flat when random >= 0.5 (0.2750739999999041ms)
- ✅ should format with sharps when mode is sharps (0.2837400000000798ms)
- ✅ should format with flats when mode is flats (0.32526800000005096ms)
- ✅ should format with mix when mode is mix (0.2515699999999015ms)
- ✅ should return natural notes unchanged for all modes (0.23515000000020336ms)
- ✅ should format whole note (0.1923389999999472ms)
- ✅ should format half note (0.3200979999999163ms)
- ✅ should format quarter note (0.2469010000002072ms)
- ✅ should format eighth note (0.18860299999983ms)
- ✅ should return capitalized name for whole note (0.18628800000010415ms)
- ✅ should return capitalized name for half note (0.12848000000008142ms)
- ✅ should return capitalized name for quarter note (0.1121699999998782ms)
- ✅ should return capitalized name for eighth note (0.14599199999997836ms)
- ✅ should return input for unknown duration (0.15392799999995077ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.5795499999999265ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.34489399999984016ms)
- ✅ should calculate G4 at y=75 (second line) (0.29404999999997017ms)
- ✅ should calculate B4 at y=60 (middle line) (0.3437420000000202ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.4020210000001043ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.23480799999992996ms)
- ✅ should calculate F5 at y=30 (top line) (0.1984309999998004ms)
- ✅ should calculate C4 below staff at y=105 (0.21860900000001493ms)
- ✅ should calculate D4 below staff at y=97.5 (0.32926499999985026ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.36390000000005784ms)
- ✅ should handle octave changes correctly (0.32102999999983695ms)
- ✅ should handle very low notes (C2) (0.4103669999999511ms)
- ✅ should handle very high notes (C7) (0.2839899999999034ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4602999999999611ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.23499900000001617ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.24394600000005084ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.21463100000005397ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.16963699999996606ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.16274399999997513ms)
- ✅ should calculate E2 below staff in bass clef (0.25517599999989216ms)
- ✅ should calculate C4 above staff in bass clef (0.1635949999999866ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.19629699999995864ms)
- ✅ should parse natural note correctly (1.0343829999999343ms)
- ✅ should parse sharp note correctly (0.22922799999992094ms)
- ✅ should handle low octaves (0.20086600000013277ms)
- ✅ should handle high octaves (0.2351889999999912ms)
- ✅ should correctly identify all natural notes (0.843695999999909ms)
- ✅ should return empty array for notes on the staff (0.4960670000000391ms)
- ✅ should generate ledger lines below staff for C4 (1.1543569999998908ms)
- ✅ should generate ledger lines below staff for D4 (0.211676000000125ms)
- ✅ should generate ledger lines above staff for G5 (0.14913900000010472ms)
- ✅ should generate more ledger lines for notes further from staff (0.17520799999988412ms)
- ✅ should return ledger lines in correct order (0.1298429999999371ms)
- ✅ should return ledger lines in correct order for above staff (0.11596699999995508ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (2.4856150000000525ms)
- ✅ should swap min and max if min > max (0.42702799999983654ms)
- ✅ should reject min below 0 (0.4319470000000365ms)
- ✅ should reject max above total notes (0.39291400000001886ms)
- ✅ should allow min === max (0.3980930000000171ms)
- ✅ should keep max if min < max (0.2234770000000026ms)
- ✅ should adjust max to equal min if min > max (0.16949700000009216ms)
- ✅ should handle equal values (0.19630700000016077ms)
- ✅ should keep min if max > min (0.33983499999999367ms)
- ✅ should adjust min to equal max if max < min (0.213760000000093ms)
- ✅ should handle equal values (0.1708889999999883ms)
- ✅ should have correct default values (0.2761759999998503ms)
- ✅ should have default between min and max (0.3582290000001649ms)
- ✅ should return value within range unchanged (0.47119100000008984ms)
- ✅ should clamp value below minimum (0.26785100000006423ms)
- ✅ should clamp value above maximum (0.21658500000012282ms)
- ✅ should return min/max at boundaries (0.17600900000002184ms)
- ✅ should validate tempo within range (0.2220550000001822ms)
- ✅ should reject non-number values (0.16495899999995345ms)
- ✅ should reject NaN (0.15532099999995808ms)
- ✅ should reject tempo below minimum (0.2903129999999692ms)
- ✅ should reject tempo above maximum (0.17829299999993964ms)
- ✅ should accept boundary values (0.14126400000009198ms)
- ✅ should return 0% for minimum tempo (0.12778900000012072ms)
- ✅ should return 100% for maximum tempo (0.09617000000002918ms)
- ✅ should return 50% for midpoint tempo (0.09596000000010463ms)
- ✅ should return 40% for tempo 120 (0.09654000000000451ms)
- ✅ should return correct percentages for various tempos (0.24664000000007036ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (13.380263999999897ms)
- ✅ should create analyser and connect to stream (12.061950000000024ms)
- ✅ should handle initialization errors (34.47718799999984ms)
- ✅ should convert A4 (440 Hz) correctly (1.5585429999998723ms)
- ✅ should convert C4 (261.63 Hz) correctly (4.144755000000032ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.9310199999999895ms)
- ✅ should handle out of range frequencies (3.3941829999998845ms)
- ✅ should calculate cents offset for slightly sharp notes (1.0839560000001711ms)
- ✅ should calculate cents offset for slightly flat notes (2.4923069999999825ms)
- ✅ should return null for silent signal (1.8136899999999514ms)
- ✅ should return null for very weak signal (1.318854999999985ms)
- ✅ should detect a strong periodic signal (31.29091399999993ms)
- ✅ should not start without initialization (0.8661879999999655ms)
- ✅ should start after initialization (10.27763600000003ms)
- ✅ should stop detection (0.8809459999999945ms)
- ✅ should not start twice (6.209333000000015ms)
- ✅ should cleanup resources on dispose (0.9780680000001212ms)

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
