# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 215
**Passed:** 215 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.4075950000000148ms)
- ✅ should have patterns with required properties (1.6754130000000487ms)
- ✅ should have unique values (0.17463500000008025ms)
- ✅ should include Off pattern (0.1732529999999315ms)
- ✅ should include 16th notes pattern (0.14176499999996395ms)
- ✅ should include 8th note triplets pattern (0.2360800000000154ms)
- ✅ should include 8th notes pattern (0.1695959999999559ms)
- ✅ should include quarter note triplets pattern (0.13496200000008685ms)
- ✅ should include quarter notes pattern (0.31681000000003223ms)
- ✅ should include half note triplets pattern (0.1679229999999734ms)
- ✅ should include half notes pattern (0.16734199999996235ms)
- ✅ should include whole notes pattern (0.15285500000004504ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.2501160000000482ms)
- ✅ should be defined (0.10213099999998576ms)
- ✅ should be the quarter notes pattern (0.10693900000001122ms)
- ✅ should be included in CLICK_PATTERNS (0.9777629999999817ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.7468069999999898ms)
- ✅ should have all durations with name and beats properties (0.8971329999999398ms)
- ✅ should have whole note with 8 beats (0.20870899999999892ms)
- ✅ should have half note with 4 beats (0.20697599999994054ms)
- ✅ should have quarter note with 2 beats (0.14367800000002262ms)
- ✅ should have eighth note with 1 beat (0.17631900000003498ms)
- ✅ should be ordered from longest to shortest (0.24930499999993572ms)
- ✅ should have display names for all durations (0.27158600000007027ms)
- ✅ should have proper capitalized names (0.2650140000000647ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.1091930000000048ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.35835800000006657ms)
- ✅ should have clef property (0.21367800000007264ms)
- ✅ should have comfortable range (0.3528079999999818ms)
- ✅ should have full range (0.32463499999994383ms)
- ✅ should return concert pitch when instrument is null (0.20808800000008887ms)
- ✅ should return concert pitch when transposition is 0 (0.1528049999999439ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.3464960000000019ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.3755599999999504ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.19096600000000308ms)
- ✅ should maintain octave relationships after transposition (0.19640700000002198ms)
- ✅ should use the correct transposition formula (0.15812500000004093ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.791511000000014ms)
- ✅ should start with A0 at concert pitch (0.4079110000000128ms)
- ✅ should end with C8 at concert pitch (0.17573800000002393ms)
- ✅ should have all notes as objects with name and frequency (6.243009999999913ms)
- ✅ should have frequencies in ascending order (1.2340209999999843ms)
- ✅ should include all chromatic notes (12 per octave) (1.1295760000000428ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.22846600000002582ms)
- ✅ should have correct MIN_INDEX (0.13467100000002574ms)
- ✅ should have correct MAX_INDEX (0.21967899999992824ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.14718500000003587ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.11191899999994348ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.07987900000000536ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (116.2669629999998ms)
- ✅ should handle suspended audio context (102.51039100000003ms)
- ✅ should return audio engine readiness status (103.347084ms)
- ✅ should get current audio time (102.96925699999997ms)
- ✅ should respect soundEnabled prop initially true (105.00790699999993ms)
- ✅ should respect soundEnabled prop initially false (102.986539ms)
- ✅ should update soundEnabled via ref when prop changes (105.353836ms)
- ✅ should play click sound when audio ready and sound enabled (102.58485900000005ms)
- ✅ should not play click sound when audio not ready (3.4334620000001905ms)
- ✅ should not play click sound when sound disabled (103.42556999999988ms)
- ✅ should play note sound when audio ready and sound enabled (104.9077299999999ms)
- ✅ should not play note sound when audio not ready (1.882039000000077ms)
- ✅ should not play note sound when sound disabled (102.31176099999993ms)
- ✅ should calculate correct duration from tempo and beats (102.54140899999993ms)
- ✅ should close audio context on cleanup (102.15078100000028ms)
- ✅ should not error when closing uninitialized audio (2.798707999999806ms)
- ✅ should handle multiple init calls gracefully (303.2458959999999ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.261681999999837ms)
- ✅ should handle webkitAudioContext fallback (102.33773100000008ms)

### Hooks Tests (31/31 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (15.356261999999901ms)
- ✅ should initialize with random note from provided notes (1.9249690000001465ms)
- ✅ should initialize with random duration from provided durations (1.7663939999999911ms)
- ✅ should update tempo (3.0776079999998274ms)
- ✅ should handle tempo as string (from input) (1.92799500000001ms)
- ✅ should clamp tempo to valid range (1.995089999999891ms)
- ✅ should handle invalid tempo input (1.589874000000009ms)
- ✅ should toggle play state from stopped to playing (1.2260559999999714ms)
- ✅ should toggle play state from playing to stopped (2.4236889999999676ms)
- ✅ should reset beat to 0 when stopping (1.7069619999999759ms)
- ✅ should toggle sound from enabled to disabled (1.0531640000001516ms)
- ✅ should toggle sound from disabled to enabled (1.1124950000000808ms)
- ✅ should toggle staff display from hidden to visible (1.0725089999998545ms)
- ✅ should toggle staff display from visible to hidden (1.08801799999992ms)
- ✅ should initialize with default click pattern (1.0075180000001183ms)
- ✅ should update click pattern (0.9947450000001936ms)
- ✅ should change from quarter to whole note pattern (0.9646589999999833ms)
- ✅ should change to triplet pattern (0.9963569999999891ms)
- ✅ should change to off pattern (0.9335609999998269ms)
- ✅ should update range min (0.9802079999999478ms)
- ✅ should update range max (1.3536340000000564ms)
- ✅ should ensure min does not exceed max (1.4562849999999798ms)
- ✅ should ensure max does not go below min (1.5650980000000345ms)
- ✅ should update current note (4.55275800000004ms)
- ✅ should update current duration (3.338314999999966ms)
- ✅ should update current beat (3.4070429999999305ms)
- ✅ should maintain stable callback references (1.7355560000000878ms)
- ✅ should handle empty notes array gracefully (1.1957899999999881ms)
- ✅ should handle single note (1.9143689999998514ms)
- ✅ should handle single duration (1.0265240000001086ms)
- ✅ should handle rapid state changes (1.9822249999999713ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.7192199999999502ms)
- ✅ should return a duration object with name and beats (0.4609090000000151ms)
- ✅ should select different durations over multiple calls (0.29704400000002806ms)
- ✅ should handle single duration array (0.22800499999993917ms)
- ✅ should return a duration from the array (0.4389380000000074ms)
- ✅ should use default weights if none provided (0.18519500000002154ms)
- ✅ should respect custom weights (0.4679030000000921ms)
- ✅ should handle partial weight objects (0.22189400000002024ms)
- ✅ should handle zero weights correctly (0.4010680000000093ms)
- ✅ should follow the pattern in order (0.2580719999999701ms)
- ✅ should loop the pattern (0.21357899999998153ms)
- ✅ should handle single element pattern (0.16189199999996617ms)
- ✅ should return fallback for unknown duration name (0.13110500000004777ms)
- ✅ should handle large indices (0.08378600000003189ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (2.1569919999999456ms)
- ✅ should return a note different from current note (0.4525340000000142ms)
- ✅ should return the only note if range contains single note (0.24509699999998702ms)
- ✅ should respect min and max indices (0.7137199999999666ms)
- ✅ should handle edge case where current note is the only option (0.14125400000000354ms)
- ✅ should select note within specified interval (0.2618290000000343ms)
- ✅ should return null if current note not found (0.14264600000001337ms)
- ✅ should return null if no notes in interval range (0.16278399999998783ms)
- ✅ should include notes both above and below current note (0.36599200000000565ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.258527000000072ms)
- ✅ should convert # to ♯ symbol (0.3254269999999906ms)
- ✅ should handle multiple sharps in name (edge case) (0.15024000000005344ms)
- ✅ should convert sharps to flats (0.4505699999999706ms)
- ✅ should return natural notes unchanged (0.16736200000002555ms)
- ✅ should format whole note (0.17065900000000056ms)
- ✅ should format half note (0.18159900000000562ms)
- ✅ should format quarter note (0.11563599999999497ms)
- ✅ should format eighth note (0.24640999999996893ms)
- ✅ should return capitalized name for whole note (0.16404499999998734ms)
- ✅ should return capitalized name for half note (0.09890500000005886ms)
- ✅ should return capitalized name for quarter note (0.0852589999999509ms)
- ✅ should return capitalized name for eighth note (0.09501699999998436ms)
- ✅ should return input for unknown duration (0.07576100000005681ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.3458799999999655ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.29730400000005375ms)
- ✅ should calculate G4 at y=75 (second line) (0.16598899999996775ms)
- ✅ should calculate B4 at y=60 (middle line) (0.14476000000001932ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.19470300000000407ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.1549289999999246ms)
- ✅ should calculate F5 at y=30 (top line) (0.12176699999997709ms)
- ✅ should calculate C4 below staff at y=105 (0.12765799999999672ms)
- ✅ should calculate D4 below staff at y=97.5 (0.34679700000003777ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.18959399999994275ms)
- ✅ should handle octave changes correctly (0.14652300000000196ms)
- ✅ should handle very low notes (C2) (0.19723799999997027ms)
- ✅ should handle very high notes (C7) (0.14884699999993245ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.10614899999995941ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.09576899999990474ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.0947760000000244ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.08290499999998246ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.08831499999996595ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.07996900000000551ms)
- ✅ should calculate E2 below staff in bass clef (0.08564899999998943ms)
- ✅ should calculate C4 above staff in bass clef (0.11646800000005442ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.09092000000009648ms)
- ✅ should parse natural note correctly (0.6228720000000294ms)
- ✅ should parse sharp note correctly (0.1522340000000213ms)
- ✅ should handle low octaves (0.09709099999997761ms)
- ✅ should handle high octaves (0.12692699999990964ms)
- ✅ should correctly identify all natural notes (0.32582800000000134ms)
- ✅ should return empty array for notes on the staff (0.4076199999999517ms)
- ✅ should generate ledger lines below staff for C4 (0.6707609999999704ms)
- ✅ should generate ledger lines below staff for D4 (0.09380500000008851ms)
- ✅ should generate ledger lines above staff for G5 (0.1953439999999773ms)
- ✅ should generate more ledger lines for notes further from staff (0.12663599999996222ms)
- ✅ should return ledger lines in correct order (0.07037099999990915ms)
- ✅ should return ledger lines in correct order for above staff (0.06431899999995494ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.450984999999946ms)
- ✅ should swap min and max if min > max (0.3229919999999993ms)
- ✅ should reject min below 0 (0.3014530000000377ms)
- ✅ should reject max above total notes (0.15188399999999547ms)
- ✅ should allow min === max (0.15827500000000327ms)
- ✅ should keep max if min < max (0.16923500000007152ms)
- ✅ should adjust max to equal min if min > max (0.13863800000001447ms)
- ✅ should handle equal values (0.14009099999998398ms)
- ✅ should keep min if max > min (0.2575600000000122ms)
- ✅ should adjust min to equal max if max < min (0.14094299999999294ms)
- ✅ should handle equal values (0.1318660000000591ms)
- ✅ should have correct default values (0.20769799999993666ms)
- ✅ should have default between min and max (0.2937180000000126ms)
- ✅ should return value within range unchanged (0.19510400000001482ms)
- ✅ should clamp value below minimum (0.18257100000005266ms)
- ✅ should clamp value above maximum (0.1557709999999588ms)
- ✅ should return min/max at boundaries (0.15513899999996283ms)
- ✅ should validate tempo within range (0.26022499999999127ms)
- ✅ should reject non-number values (0.1998030000000881ms)
- ✅ should reject NaN (0.23847299999999905ms)
- ✅ should reject tempo below minimum (0.32368299999996ms)
- ✅ should reject tempo above maximum (0.22738300000003164ms)
- ✅ should accept boundary values (0.1736839999999802ms)
- ✅ should return 0% for minimum tempo (0.16844500000001972ms)
- ✅ should return 100% for maximum tempo (0.13799700000004123ms)
- ✅ should return 50% for midpoint tempo (0.14434899999992012ms)
- ✅ should return 40% for tempo 120 (0.12460299999997915ms)
- ✅ should return correct percentages for various tempos (0.29005099999994854ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (5.3092699999999695ms)
- ✅ should create analyser and connect to stream (3.6231460000000197ms)
- ✅ should handle initialization errors (11.560143999999923ms)
- ✅ should convert A4 (440 Hz) correctly (1.2836130000000594ms)
- ✅ should convert C4 (261.63 Hz) correctly (0.9229709999999614ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.5853009999999585ms)
- ✅ should handle out of range frequencies (0.6199659999999767ms)
- ✅ should calculate cents offset for slightly sharp notes (0.7236389999999346ms)
- ✅ should calculate cents offset for slightly flat notes (1.0265540000000328ms)
- ✅ should return null for silent signal (0.9061489999999139ms)
- ✅ should return null for very weak signal (0.7299709999999777ms)
- ✅ should detect a strong periodic signal (10.667029999999954ms)
- ✅ should not start without initialization (0.4155349999999771ms)
- ✅ should start after initialization (1.4624370000000226ms)
- ✅ should stop detection (0.9232010000000628ms)
- ✅ should not start twice (0.9170400000000427ms)
- ✅ should cleanup resources on dispose (1.069003000000066ms)

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

*Generated: 2025-10-14*
*Auto-generated by test reporter*
