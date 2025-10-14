# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 198
**Passed:** 198 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.3166850000000068ms)
- ✅ should have patterns with required properties (1.699008000000049ms)
- ✅ should have unique values (0.15800400000000536ms)
- ✅ should include Off pattern (0.16631999999992786ms)
- ✅ should include 16th notes pattern (0.14168400000005477ms)
- ✅ should include 8th note triplets pattern (0.23909600000001774ms)
- ✅ should include 8th notes pattern (0.15826500000002852ms)
- ✅ should include quarter note triplets pattern (0.12748799999997118ms)
- ✅ should include quarter notes pattern (0.3149869999999737ms)
- ✅ should include half note triplets pattern (0.17112799999995332ms)
- ✅ should include half notes pattern (0.17038800000000265ms)
- ✅ should include whole notes pattern (0.12841999999989184ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.239516999999978ms)
- ✅ should be defined (0.1260059999999612ms)
- ✅ should be the quarter notes pattern (0.10382400000003145ms)
- ✅ should be included in CLICK_PATTERNS (0.9838040000000774ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.7781850000000077ms)
- ✅ should have all durations with name and beats properties (0.9206959999999071ms)
- ✅ should have whole note with 8 beats (0.2028779999999415ms)
- ✅ should have half note with 4 beats (0.20296799999994164ms)
- ✅ should have quarter note with 2 beats (0.14004099999999653ms)
- ✅ should have eighth note with 1 beat (0.17563700000005156ms)
- ✅ should be ordered from longest to shortest (0.2118950000000268ms)
- ✅ should have display names for all durations (0.26012500000001637ms)
- ✅ should have proper capitalized names (0.2890790000000152ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.128278000000023ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.3921510000000126ms)
- ✅ should have clef property (0.21320700000001125ms)
- ✅ should have comfortable range (0.3754100000001017ms)
- ✅ should have full range (0.33707800000001953ms)
- ✅ should return concert pitch when instrument is null (0.2717569999999796ms)
- ✅ should return concert pitch when transposition is 0 (0.18973399999993035ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.3306369999999106ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.3989040000000159ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.22783500000002732ms)
- ✅ should maintain octave relationships after transposition (0.20926999999994678ms)
- ✅ should use the correct transposition formula (0.1599790000000212ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.763337999999976ms)
- ✅ should start with A0 at concert pitch (0.42040399999996225ms)
- ✅ should end with C8 at concert pitch (0.19050500000003012ms)
- ✅ should have all notes as objects with name and frequency (6.122826000000032ms)
- ✅ should have frequencies in ascending order (1.2268380000000434ms)
- ✅ should include all chromatic notes (12 per octave) (1.1262700000000905ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.2551659999999174ms)
- ✅ should have correct MIN_INDEX (0.11119700000006105ms)
- ✅ should have correct MAX_INDEX (0.2180869999999686ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.14931899999999132ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.16183200000000397ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.09590900000000602ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (120.55582600000002ms)
- ✅ should handle suspended audio context (102.163227ms)
- ✅ should return audio engine readiness status (103.49519699999996ms)
- ✅ should get current audio time (102.069481ms)
- ✅ should respect soundEnabled prop initially true (103.60916099999986ms)
- ✅ should respect soundEnabled prop initially false (102.45554800000014ms)
- ✅ should update soundEnabled via ref when prop changes (103.17717700000003ms)
- ✅ should play click sound when audio ready and sound enabled (102.46372300000007ms)
- ✅ should not play click sound when audio not ready (2.1152340000001004ms)
- ✅ should not play click sound when sound disabled (102.68437700000004ms)
- ✅ should play note sound when audio ready and sound enabled (102.47152900000015ms)
- ✅ should not play note sound when audio not ready (1.197010999999975ms)
- ✅ should not play note sound when sound disabled (101.40992000000006ms)
- ✅ should calculate correct duration from tempo and beats (102.74313600000005ms)
- ✅ should close audio context on cleanup (101.36703200000011ms)
- ✅ should not error when closing uninitialized audio (1.9164630000000216ms)
- ✅ should handle multiple init calls gracefully (304.77199900000005ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (2.105865999999878ms)
- ✅ should handle webkitAudioContext fallback (103.07442300000002ms)

### Hooks Tests (31/31 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (13.010086999999885ms)
- ✅ should initialize with random note from provided notes (1.889363000000003ms)
- ✅ should initialize with random duration from provided durations (1.645958999999948ms)
- ✅ should update tempo (3.0000440000001163ms)
- ✅ should handle tempo as string (from input) (1.9298089999999775ms)
- ✅ should clamp tempo to valid range (1.92230399999994ms)
- ✅ should handle invalid tempo input (1.4566669999999249ms)
- ✅ should toggle play state from stopped to playing (1.2242020000001048ms)
- ✅ should toggle play state from playing to stopped (2.4255929999999353ms)
- ✅ should reset beat to 0 when stopping (1.685021000000006ms)
- ✅ should toggle sound from enabled to disabled (1.0735320000001138ms)
- ✅ should toggle sound from disabled to enabled (1.0936389999999392ms)
- ✅ should toggle staff display from hidden to visible (1.0651769999999487ms)
- ✅ should toggle staff display from visible to hidden (1.0630819999998948ms)
- ✅ should initialize with default click pattern (0.9885240000000977ms)
- ✅ should update click pattern (0.9558629999999084ms)
- ✅ should change from quarter to whole note pattern (0.9325489999998808ms)
- ✅ should change to triplet pattern (1.077969999999823ms)
- ✅ should change to off pattern (0.9425169999999525ms)
- ✅ should update range min (1.016746000000012ms)
- ✅ should update range max (1.345337999999856ms)
- ✅ should ensure min does not exceed max (1.5721710000000257ms)
- ✅ should ensure max does not go below min (1.5419349999999667ms)
- ✅ should update current note (1.726709000000028ms)
- ✅ should update current duration (1.3914949999998498ms)
- ✅ should update current beat (1.491300999999794ms)
- ✅ should maintain stable callback references (2.061974000000191ms)
- ✅ should handle empty notes array gracefully (3.3517689999998765ms)
- ✅ should handle single note (1.1236639999999625ms)
- ✅ should handle single duration (3.0999199999998837ms)
- ✅ should handle rapid state changes (3.944835000000012ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.064589000000069ms)
- ✅ should return a duration object with name and beats (0.4288289999999506ms)
- ✅ should select different durations over multiple calls (0.2903609999999617ms)
- ✅ should handle single duration array (0.2468499999999949ms)
- ✅ should return a duration from the array (0.44163300000002437ms)
- ✅ should use default weights if none provided (0.20715600000005452ms)
- ✅ should respect custom weights (0.44328600000005736ms)
- ✅ should handle partial weight objects (0.2129170000000613ms)
- ✅ should handle zero weights correctly (0.4275870000000168ms)
- ✅ should follow the pattern in order (0.2256399999999985ms)
- ✅ should loop the pattern (0.21287599999993745ms)
- ✅ should handle single element pattern (0.15100199999994857ms)
- ✅ should return fallback for unknown duration name (0.15440799999998944ms)
- ✅ should handle large indices (0.100908000000004ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (2.0816109999999526ms)
- ✅ should return a note different from current note (0.41852000000005773ms)
- ✅ should return the only note if range contains single note (0.22477900000001227ms)
- ✅ should respect min and max indices (0.7388679999999113ms)
- ✅ should handle edge case where current note is the only option (0.12582499999996344ms)
- ✅ should select note within specified interval (0.24675000000002ms)
- ✅ should return null if current note not found (0.15352599999994254ms)
- ✅ should return null if no notes in interval range (0.1814879999999448ms)
- ✅ should include notes both above and below current note (0.34462200000007215ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.2181309999999712ms)
- ✅ should convert # to ♯ symbol (0.3203680000000304ms)
- ✅ should handle multiple sharps in name (edge case) (0.18580699999995431ms)
- ✅ should convert sharps to flats (0.44010100000002694ms)
- ✅ should return natural notes unchanged (0.1771009999999933ms)
- ✅ should format whole note (0.1973169999999982ms)
- ✅ should format half note (0.16594900000006874ms)
- ✅ should format quarter note (0.11200899999994363ms)
- ✅ should format eighth note (0.23723299999994651ms)
- ✅ should return capitalized name for whole note (0.1818989999999303ms)
- ✅ should return capitalized name for half note (0.10457399999995687ms)
- ✅ should return capitalized name for quarter note (0.0797179999999571ms)
- ✅ should return capitalized name for eighth note (0.07418799999993553ms)
- ✅ should return input for unknown duration (0.07309599999996408ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.4099590000000717ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.3387520000001132ms)
- ✅ should calculate G4 at y=75 (second line) (0.16598999999996522ms)
- ✅ should calculate B4 at y=60 (middle line) (0.14159399999994093ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.18763899999999012ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.17409500000007938ms)
- ✅ should calculate F5 at y=30 (top line) (0.12101599999982682ms)
- ✅ should calculate C4 below staff at y=105 (0.10565700000006473ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3387319999999363ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.17649900000014895ms)
- ✅ should handle octave changes correctly (0.16891499999996995ms)
- ✅ should handle very low notes (C2) (0.1762389999998959ms)
- ✅ should handle very high notes (C7) (0.1450999999999567ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.10565699999983735ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.09709199999997509ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.08284499999990658ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.08345600000006925ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.10426400000005742ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.08859599999982493ms)
- ✅ should calculate E2 below staff in bass clef (0.08588099999997212ms)
- ✅ should calculate C4 above staff in bass clef (0.0842370000000301ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.12394200000017008ms)
- ✅ should parse natural note correctly (0.6227510000001075ms)
- ✅ should parse sharp note correctly (0.14677400000005036ms)
- ✅ should handle low octaves (0.0978020000000015ms)
- ✅ should handle high octaves (0.12934100000006765ms)
- ✅ should correctly identify all natural notes (0.3594399999999496ms)
- ✅ should return empty array for notes on the staff (0.3761409999999614ms)
- ✅ should generate ledger lines below staff for C4 (0.6843360000000303ms)
- ✅ should generate ledger lines below staff for D4 (0.09574799999995776ms)
- ✅ should generate ledger lines above staff for G5 (0.1326770000000579ms)
- ✅ should generate more ledger lines for notes further from staff (0.1180899999999383ms)
- ✅ should return ledger lines in correct order (0.06909899999982372ms)
- ✅ should return ledger lines in correct order for above staff (0.06373900000016874ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.3889900000000353ms)
- ✅ should swap min and max if min > max (0.32133999999996377ms)
- ✅ should reject min below 0 (0.32606799999996383ms)
- ✅ should reject max above total notes (0.16604999999992742ms)
- ✅ should allow min === max (0.19679699999994682ms)
- ✅ should keep max if min < max (0.1530449999999064ms)
- ✅ should adjust max to equal min if min > max (0.11241000000006807ms)
- ✅ should handle equal values (0.13519200000007459ms)
- ✅ should keep min if max > min (0.2684199999999919ms)
- ✅ should adjust min to equal max if max < min (0.13075400000002446ms)
- ✅ should handle equal values (0.08504800000002888ms)
- ✅ should have correct default values (0.13451999999995223ms)
- ✅ should have default between min and max (0.1913359999999784ms)
- ✅ should return value within range unchanged (0.14842700000008335ms)
- ✅ should clamp value below minimum (0.11725899999999001ms)
- ✅ should clamp value above maximum (0.10276099999998678ms)
- ✅ should return min/max at boundaries (0.09167099999990569ms)
- ✅ should validate tempo within range (0.17516599999999016ms)
- ✅ should reject non-number values (0.1200339999999187ms)
- ✅ should reject NaN (0.10633799999993698ms)
- ✅ should reject tempo below minimum (0.22238399999991998ms)
- ✅ should reject tempo above maximum (0.13561300000003484ms)
- ✅ should accept boundary values (0.10028699999998025ms)
- ✅ should return 0% for minimum tempo (0.11213899999995647ms)
- ✅ should return 100% for maximum tempo (0.07387699999992492ms)
- ✅ should return 50% for midpoint tempo (0.08318599999995513ms)
- ✅ should return 40% for tempo 120 (0.07144400000004225ms)
- ✅ should return correct percentages for various tempos (0.16942699999992783ms)

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
