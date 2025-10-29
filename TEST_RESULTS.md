# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.9276439999999866ms)
- ✅ should have patterns with required properties (2.96349500000008ms)
- ✅ should have unique values (0.21958700000004683ms)
- ✅ should include Off pattern (0.35706200000004173ms)
- ✅ should include 16th notes pattern (0.302340000000072ms)
- ✅ should include 8th note triplets pattern (0.31565499999999247ms)
- ✅ should include 8th notes pattern (0.21197300000005725ms)
- ✅ should include quarter note triplets pattern (0.2405549999999721ms)
- ✅ should include quarter notes pattern (0.3674910000000864ms)
- ✅ should include half note triplets pattern (0.3526239999999916ms)
- ✅ should include half notes pattern (0.25534400000003643ms)
- ✅ should include whole notes pattern (0.2105900000000247ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.5003980000000183ms)
- ✅ should be defined (0.37270200000000386ms)
- ✅ should be the quarter notes pattern (0.17157800000006773ms)
- ✅ should be included in CLICK_PATTERNS (1.1709409999999707ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.8674219999999195ms)
- ✅ should have all durations with name and beats properties (0.8168049999999312ms)
- ✅ should have whole note with 8 beats (0.20330699999999524ms)
- ✅ should have half note with 4 beats (0.21446800000001076ms)
- ✅ should have quarter note with 2 beats (0.20720399999993333ms)
- ✅ should have eighth note with 1 beat (0.16518599999994876ms)
- ✅ should be ordered from longest to shortest (0.24576600000000326ms)
- ✅ should have display names for all durations (0.20181400000001304ms)
- ✅ should have proper capitalized names (0.260522999999921ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.3960989999999356ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.2715940000000501ms)
- ✅ should have clef property (0.15035899999998037ms)
- ✅ should have comfortable range (0.22362499999997ms)
- ✅ should have full range (0.23651799999993273ms)
- ✅ should return concert pitch when instrument is null (0.19418000000007396ms)
- ✅ should return concert pitch when transposition is 0 (0.12954999999999472ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.17121800000006715ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.20828600000004371ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.22207099999991442ms)
- ✅ should maintain octave relationships after transposition (0.2519969999999603ms)
- ✅ should use the correct transposition formula (0.17870099999993272ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.8444600000000264ms)
- ✅ should start with A0 at concert pitch (0.28993800000000647ms)
- ✅ should end with C8 at concert pitch (0.27056199999992714ms)
- ✅ should have all notes as objects with name and frequency (5.761491999999976ms)
- ✅ should have frequencies in ascending order (1.4250419999999622ms)
- ✅ should include all chromatic notes (12 per octave) (1.0424929999999222ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.31410300000004554ms)
- ✅ should have correct MIN_INDEX (0.1979469999999992ms)
- ✅ should have correct MAX_INDEX (0.2786060000000816ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.22647100000006049ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.1842420000000402ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.166608999999994ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (123.14229599999999ms)
- ✅ should handle suspended audio context (103.65835200000015ms)
- ✅ should return audio engine readiness status (104.14135099999999ms)
- ✅ should get current audio time (103.5836710000001ms)
- ✅ should respect soundEnabled prop initially true (104.51566899999989ms)
- ✅ should respect soundEnabled prop initially false (103.27839900000004ms)
- ✅ should update soundEnabled via ref when prop changes (104.42489ms)
- ✅ should play click sound when audio ready and sound enabled (103.21095500000001ms)
- ✅ should not play click sound when audio not ready (2.9336789999997563ms)
- ✅ should not play click sound when sound disabled (103.74292300000025ms)
- ✅ should play note sound when audio ready and sound enabled (103.47095099999979ms)
- ✅ should not play note sound when audio not ready (4.929159999999683ms)
- ✅ should not play note sound when sound disabled (102.95438299999978ms)
- ✅ should calculate correct duration from tempo and beats (103.56113899999991ms)
- ✅ should close audio context on cleanup (102.1237659999997ms)
- ✅ should not error when closing uninitialized audio (2.8903589999999895ms)
- ✅ should handle multiple init calls gracefully (303.23391200000015ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (2.727647000000161ms)
- ✅ should handle webkitAudioContext fallback (101.87531500000023ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (19.024122000000034ms)
- ✅ should initialize with random note from provided notes (2.6580289999999422ms)
- ✅ should initialize with random duration from provided durations (2.331512999999859ms)
- ✅ should update tempo (4.0396599999999125ms)
- ✅ should handle tempo as string (from input) (2.7916760000000522ms)
- ✅ should clamp tempo to valid range (3.373845000000074ms)
- ✅ should handle invalid tempo input (2.4569450000001325ms)
- ✅ should toggle play state from stopped to playing (2.238450000000057ms)
- ✅ should toggle play state from playing to stopped (3.015129999999999ms)
- ✅ should reset beat to 0 when stopping (2.791054999999915ms)
- ✅ should toggle sound from enabled to disabled (2.1583219999999983ms)
- ✅ should toggle sound from disabled to enabled (2.420266999999967ms)
- ✅ should toggle staff display from hidden to visible (2.7499780000000555ms)
- ✅ should toggle staff display from visible to hidden (2.68534499999987ms)
- ✅ should initialize with default click pattern (1.6592759999998634ms)
- ✅ should update click pattern (1.792573000000175ms)
- ✅ should change from quarter to whole note pattern (1.5470080000000053ms)
- ✅ should change to triplet pattern (1.484171999999944ms)
- ✅ should change to off pattern (1.3902169999998932ms)
- ✅ should update range min (1.3776640000000953ms)
- ✅ should update range max (1.3913299999999253ms)
- ✅ should ensure min does not exceed max (1.3825640000000021ms)
- ✅ should ensure max does not go below min (1.364620000000059ms)
- ✅ should update current note (1.2207230000001346ms)
- ✅ should update current duration (1.253644000000122ms)
- ✅ should update current beat (1.2911740000001828ms)
- ✅ should maintain stable callback references (1.7457260000001042ms)
- ✅ should handle empty notes array gracefully (1.0355090000000473ms)
- ✅ should handle single note (1.2674400000000787ms)
- ✅ should handle single duration (0.9736550000000079ms)
- ✅ should handle rapid state changes (1.997763999999961ms)
- ✅ should initialize with all durations selected (1.214682000000039ms)
- ✅ should toggle duration selection on (1.8686649999999645ms)
- ✅ should toggle duration selection off (1.4020599999998922ms)
- ✅ should not allow deselecting the last duration (1.7948569999998654ms)
- ✅ should persist selected durations to localStorage (1.3859299999999166ms)
- ✅ should load selected durations from localStorage (1.4230689999999413ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.155917000000045ms)
- ✅ should return a duration object with name and beats (0.3240409999999656ms)
- ✅ should select different durations over multiple calls (0.33136400000000776ms)
- ✅ should handle single duration array (0.44532600000002276ms)
- ✅ should return a duration from the array (0.5763589999999112ms)
- ✅ should use default weights if none provided (0.25591399999996156ms)
- ✅ should respect custom weights (0.7158879999999499ms)
- ✅ should handle partial weight objects (0.25079600000003666ms)
- ✅ should handle zero weights correctly (0.5560010000000375ms)
- ✅ should follow the pattern in order (0.4860909999999876ms)
- ✅ should loop the pattern (0.31815900000003694ms)
- ✅ should handle single element pattern (0.2578079999999545ms)
- ✅ should return fallback for unknown duration name (0.2462359999999535ms)
- ✅ should handle large indices (0.4029170000000022ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.1428379999999834ms)
- ✅ should return a note different from current note (0.3838220000000092ms)
- ✅ should return the only note if range contains single note (0.390023000000042ms)
- ✅ should respect min and max indices (1.2254220000000942ms)
- ✅ should handle edge case where current note is the only option (0.2590509999999995ms)
- ✅ should select note within specified interval (0.34607200000004923ms)
- ✅ should return null if current note not found (0.20600200000001223ms)
- ✅ should return null if no notes in interval range (0.1563300000000254ms)
- ✅ should include notes both above and below current note (0.5030120000000124ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.7648020000000315ms)
- ✅ should convert # to ♯ symbol (0.31860100000005787ms)
- ✅ should handle multiple sharps in name (edge case) (0.16819199999997636ms)
- ✅ should convert sharps to flats (0.3364440000000286ms)
- ✅ should return natural notes unchanged (0.3486169999999902ms)
- ✅ should format whole note (0.16444500000000062ms)
- ✅ should format half note (0.11466299999995044ms)
- ✅ should format quarter note (0.12151599999992868ms)
- ✅ should format eighth note (0.20010100000001785ms)
- ✅ should return capitalized name for whole note (0.17719799999997576ms)
- ✅ should return capitalized name for half note (0.11236899999994421ms)
- ✅ should return capitalized name for quarter note (0.10009500000001026ms)
- ✅ should return capitalized name for eighth note (0.21478799999999865ms)
- ✅ should return input for unknown duration (0.2402150000000347ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.021698000000015ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.2816920000000209ms)
- ✅ should calculate G4 at y=75 (second line) (0.173041000000012ms)
- ✅ should calculate B4 at y=60 (middle line) (0.23936400000002322ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.23324200000001838ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.149407999999994ms)
- ✅ should calculate F5 at y=30 (top line) (0.11546399999997448ms)
- ✅ should calculate C4 below staff at y=105 (0.11332100000004175ms)
- ✅ should calculate D4 below staff at y=97.5 (0.2111419999998816ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.2696300000000065ms)
- ✅ should handle octave changes correctly (0.19004299999983232ms)
- ✅ should handle very low notes (C2) (0.2646100000001752ms)
- ✅ should handle very high notes (C7) (0.1863549999998213ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.3186200000000099ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.14949699999988297ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.15610999999989872ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.11170700000002398ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.10399199999983466ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.0974700000001576ms)
- ✅ should calculate E2 below staff in bass clef (0.21577000000002045ms)
- ✅ should calculate C4 above staff in bass clef (0.1707059999998819ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.1644450000001143ms)
- ✅ should parse natural note correctly (0.9226699999999255ms)
- ✅ should parse sharp note correctly (0.2125340000000051ms)
- ✅ should handle low octaves (0.16462499999988722ms)
- ✅ should handle high octaves (0.2000310000000809ms)
- ✅ should correctly identify all natural notes (0.7271789999999783ms)
- ✅ should return empty array for notes on the staff (0.4381430000000819ms)
- ✅ should generate ledger lines below staff for C4 (1.0257309999999507ms)
- ✅ should generate ledger lines below staff for D4 (0.1357620000001134ms)
- ✅ should generate ledger lines above staff for G5 (0.13077199999997902ms)
- ✅ should generate more ledger lines for notes further from staff (0.14367600000014136ms)
- ✅ should return ledger lines in correct order (0.09892300000001342ms)
- ✅ should return ledger lines in correct order for above staff (0.08952600000020539ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.9468200000000024ms)
- ✅ should swap min and max if min > max (0.2683479999999463ms)
- ✅ should reject min below 0 (0.2571770000000697ms)
- ✅ should reject max above total notes (0.26843800000006013ms)
- ✅ should allow min === max (0.2398239999999987ms)
- ✅ should keep max if min < max (0.15073000000006687ms)
- ✅ should adjust max to equal min if min > max (0.11330000000009477ms)
- ✅ should handle equal values (0.10101699999995617ms)
- ✅ should keep min if max > min (0.25536399999998594ms)
- ✅ should adjust min to equal max if max < min (0.13274599999999737ms)
- ✅ should handle equal values (0.10592699999995148ms)
- ✅ should have correct default values (0.16735099999993963ms)
- ✅ should have default between min and max (0.2234449999999697ms)
- ✅ should return value within range unchanged (0.28497799999991ms)
- ✅ should clamp value below minimum (0.17574600000000373ms)
- ✅ should clamp value above maximum (0.17666799999994964ms)
- ✅ should return min/max at boundaries (0.12861800000007406ms)
- ✅ should validate tempo within range (0.22378500000002077ms)
- ✅ should reject non-number values (0.1706570000000056ms)
- ✅ should reject NaN (0.12555199999997058ms)
- ✅ should reject tempo below minimum (0.2291649999999663ms)
- ✅ should reject tempo above maximum (0.14305500000000393ms)
- ✅ should accept boundary values (0.14594999999997071ms)
- ✅ should return 0% for minimum tempo (0.11553400000002512ms)
- ✅ should return 100% for maximum tempo (0.08026800000004641ms)
- ✅ should return 50% for midpoint tempo (0.08948599999996532ms)
- ✅ should return 40% for tempo 120 (0.07721299999991516ms)
- ✅ should return correct percentages for various tempos (0.18273899999996956ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (3.868302000000085ms)
- ✅ should create analyser and connect to stream (3.0487430000000586ms)
- ✅ should handle initialization errors (9.276659999999993ms)
- ✅ should convert A4 (440 Hz) correctly (1.2907529999999952ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.0170050000000401ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.8706449999999677ms)
- ✅ should handle out of range frequencies (0.8871349999999438ms)
- ✅ should calculate cents offset for slightly sharp notes (0.9041760000000068ms)
- ✅ should calculate cents offset for slightly flat notes (0.988332000000014ms)
- ✅ should return null for silent signal (1.3190759999999955ms)
- ✅ should return null for very weak signal (0.884969999999953ms)
- ✅ should detect a strong periodic signal (11.39349500000003ms)
- ✅ should not start without initialization (0.4946469999999863ms)
- ✅ should start after initialization (2.24244699999997ms)
- ✅ should stop detection (1.5615060000000085ms)
- ✅ should not start twice (4.832067999999936ms)
- ✅ should cleanup resources on dispose (0.7864080000000513ms)

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
