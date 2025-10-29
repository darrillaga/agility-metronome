# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.4584229999999252ms)
- ✅ should have patterns with required properties (1.8097220000000789ms)
- ✅ should have unique values (0.19219999999995707ms)
- ✅ should include Off pattern (0.23275599999999486ms)
- ✅ should include 16th notes pattern (0.2910550000000285ms)
- ✅ should include 8th note triplets pattern (0.23773500000004333ms)
- ✅ should include 8th notes pattern (0.1895759999999882ms)
- ✅ should include quarter note triplets pattern (0.14368899999999485ms)
- ✅ should include quarter notes pattern (0.3121849999999995ms)
- ✅ should include half note triplets pattern (0.23747500000001764ms)
- ✅ should include half notes pattern (0.18697099999997135ms)
- ✅ should include whole notes pattern (0.1394510000000082ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.4150080000000571ms)
- ✅ should be defined (0.4177429999999731ms)
- ✅ should be the quarter notes pattern (0.19853299999999763ms)
- ✅ should be included in CLICK_PATTERNS (1.1349069999999983ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (4.935881999999992ms)
- ✅ should have all durations with name and beats properties (1.5090679999999566ms)
- ✅ should have whole note with 8 beats (0.3121049999999741ms)
- ✅ should have half note with 4 beats (0.3825369999999566ms)
- ✅ should have quarter note with 2 beats (0.3389760000000024ms)
- ✅ should have eighth note with 1 beat (0.264466000000084ms)
- ✅ should be ordered from longest to shortest (0.409938000000011ms)
- ✅ should have display names for all durations (0.33033000000000357ms)
- ✅ should have proper capitalized names (0.4415870000000268ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.4091510000000653ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.23340700000005654ms)
- ✅ should have clef property (0.15938900000003287ms)
- ✅ should have comfortable range (0.23233600000003207ms)
- ✅ should have full range (0.2656480000000556ms)
- ✅ should return concert pitch when instrument is null (0.16781399999990754ms)
- ✅ should return concert pitch when transposition is 0 (0.13320999999996275ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.1794159999999465ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.23878799999999956ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.15276700000003984ms)
- ✅ should maintain octave relationships after transposition (0.1633960000000343ms)
- ✅ should use the correct transposition formula (0.11860200000000987ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.7870850000000473ms)
- ✅ should start with A0 at concert pitch (0.4683979999999792ms)
- ✅ should end with C8 at concert pitch (0.3840699999999515ms)
- ✅ should have all notes as objects with name and frequency (10.495552999999973ms)
- ✅ should have frequencies in ascending order (1.3861179999998967ms)
- ✅ should include all chromatic notes (12 per octave) (1.0283279999999877ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.26493599999992057ms)
- ✅ should have correct MIN_INDEX (0.12896200000000135ms)
- ✅ should have correct MAX_INDEX (0.19403399999998783ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.15002099999992424ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.12230899999997291ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.12316099999998187ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (120.36813400000005ms)
- ✅ should handle suspended audio context (102.85516600000005ms)
- ✅ should return audio engine readiness status (103.25370300000009ms)
- ✅ should get current audio time (103.07535999999982ms)
- ✅ should respect soundEnabled prop initially true (104.42642000000001ms)
- ✅ should respect soundEnabled prop initially false (103.86464100000012ms)
- ✅ should update soundEnabled via ref when prop changes (105.57422199999996ms)
- ✅ should play click sound when audio ready and sound enabled (103.20927099999972ms)
- ✅ should not play click sound when audio not ready (3.014469999999619ms)
- ✅ should not play click sound when sound disabled (102.33555300000035ms)
- ✅ should play note sound when audio ready and sound enabled (103.08357699999988ms)
- ✅ should not play note sound when audio not ready (5.255460999999741ms)
- ✅ should not play note sound when sound disabled (107.09834899999987ms)
- ✅ should calculate correct duration from tempo and beats (102.7691590000004ms)
- ✅ should close audio context on cleanup (101.88229500000034ms)
- ✅ should not error when closing uninitialized audio (2.2952720000002955ms)
- ✅ should handle multiple init calls gracefully (302.80499599999985ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (2.470470000000205ms)
- ✅ should handle webkitAudioContext fallback (103.47681199999988ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (17.616237000000183ms)
- ✅ should initialize with random note from provided notes (2.3076659999999265ms)
- ✅ should initialize with random duration from provided durations (2.438560999999936ms)
- ✅ should update tempo (4.317002000000002ms)
- ✅ should handle tempo as string (from input) (2.8487800000000334ms)
- ✅ should clamp tempo to valid range (3.341423000000077ms)
- ✅ should handle invalid tempo input (2.3218120000001363ms)
- ✅ should toggle play state from stopped to playing (2.13977100000011ms)
- ✅ should toggle play state from playing to stopped (3.467247000000043ms)
- ✅ should reset beat to 0 when stopping (2.789047999999866ms)
- ✅ should toggle sound from enabled to disabled (4.92597499999988ms)
- ✅ should toggle sound from disabled to enabled (2.341769000000113ms)
- ✅ should toggle staff display from hidden to visible (1.9853109999999106ms)
- ✅ should toggle staff display from visible to hidden (3.1691309999998794ms)
- ✅ should initialize with default click pattern (1.1189079999999194ms)
- ✅ should update click pattern (1.28235299999983ms)
- ✅ should change from quarter to whole note pattern (1.064055000000053ms)
- ✅ should change to triplet pattern (0.9764600000000883ms)
- ✅ should change to off pattern (0.9935219999999845ms)
- ✅ should update range min (1.0059850000000097ms)
- ✅ should update range max (0.9101660000001175ms)
- ✅ should ensure min does not exceed max (0.9887530000000879ms)
- ✅ should ensure max does not go below min (0.9268770000001041ms)
- ✅ should update current note (0.8851399999998648ms)
- ✅ should update current duration (0.8315479999998843ms)
- ✅ should update current beat (1.1770360000000437ms)
- ✅ should maintain stable callback references (1.232199000000037ms)
- ✅ should handle empty notes array gracefully (0.7313999999998941ms)
- ✅ should handle single note (0.8839370000000599ms)
- ✅ should handle single duration (0.7260509999998703ms)
- ✅ should handle rapid state changes (1.213995999999952ms)
- ✅ should initialize with all durations selected (0.8627869999997984ms)
- ✅ should toggle duration selection on (1.3101259999998547ms)
- ✅ should toggle duration selection off (1.0765579999999773ms)
- ✅ should not allow deselecting the last duration (1.3846450000000914ms)
- ✅ should persist selected durations to localStorage (1.18654400000014ms)
- ✅ should load selected durations from localStorage (1.4043320000000676ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.3013800000001083ms)
- ✅ should convert # to ♯ symbol (0.2618009999999913ms)
- ✅ should handle multiple sharps in name (edge case) (0.16110200000002806ms)
- ✅ should convert sharps to flats (0.35212000000001353ms)
- ✅ should return natural notes unchanged (0.2900439999999662ms)
- ✅ should format whole note (0.16035099999999147ms)
- ✅ should format half note (0.12015499999995427ms)
- ✅ should format quarter note (0.12190799999996216ms)
- ✅ should format eighth note (0.22637399999996433ms)
- ✅ should return capitalized name for whole note (0.17665099999999256ms)
- ✅ should return capitalized name for half note (0.10985599999992246ms)
- ✅ should return capitalized name for quarter note (0.09478699999999662ms)
- ✅ should return capitalized name for eighth note (0.1694880000000012ms)
- ✅ should return input for unknown duration (0.22781700000007277ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.0977320000000645ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.3087679999999864ms)
- ✅ should calculate G4 at y=75 (second line) (0.24694299999998748ms)
- ✅ should calculate B4 at y=60 (middle line) (0.33853400000009515ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.33884499999999207ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.25358600000004117ms)
- ✅ should calculate F5 at y=30 (top line) (0.18457499999999527ms)
- ✅ should calculate C4 below staff at y=105 (0.19352200000002995ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3275340000000142ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.38494200000002365ms)
- ✅ should handle octave changes correctly (0.277409999999918ms)
- ✅ should handle very low notes (C2) (0.3843810000000758ms)
- ✅ should handle very high notes (C7) (0.2982490000000553ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4151879999999437ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.2178079999999909ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.2704069999999774ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.16982799999993858ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.1853569999999536ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.16138200000000325ms)
- ✅ should calculate E2 below staff in bass clef (0.2791939999999613ms)
- ✅ should calculate C4 above staff in bass clef (0.17701199999999062ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.16723300000001018ms)
- ✅ should parse natural note correctly (0.9565230000000611ms)
- ✅ should parse sharp note correctly (0.23701500000004216ms)
- ✅ should handle low octaves (0.1683260000000928ms)
- ✅ should handle high octaves (0.21769800000004125ms)
- ✅ should correctly identify all natural notes (0.7752530000000206ms)
- ✅ should return empty array for notes on the staff (0.4300859999999602ms)
- ✅ should generate ledger lines below staff for C4 (0.802864999999997ms)
- ✅ should generate ledger lines below staff for D4 (0.0993869999999788ms)
- ✅ should generate ledger lines above staff for G5 (0.08593099999995957ms)
- ✅ should generate more ledger lines for notes further from staff (0.09755300000006173ms)
- ✅ should return ledger lines in correct order (0.06823799999995117ms)
- ✅ should return ledger lines in correct order for above staff (0.07350800000006075ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.9897399999999834ms)
- ✅ should swap min and max if min > max (0.4261989999999969ms)
- ✅ should reject min below 0 (0.4453849999999875ms)
- ✅ should reject max above total notes (0.4024339999999711ms)
- ✅ should allow min === max (0.4001210000000128ms)
- ✅ should keep max if min < max (0.19554599999992206ms)
- ✅ should adjust max to equal min if min > max (0.16033999999990556ms)
- ✅ should handle equal values (0.17243300000006911ms)
- ✅ should keep min if max > min (0.29296899999997095ms)
- ✅ should adjust min to equal max if max < min (0.1881829999999809ms)
- ✅ should handle equal values (0.14856799999995474ms)
- ✅ should have correct default values (0.26751200000001063ms)
- ✅ should have default between min and max (0.33007899999995516ms)
- ✅ should return value within range unchanged (0.42754200000001674ms)
- ✅ should clamp value below minimum (0.26271299999996245ms)
- ✅ should clamp value above maximum (0.24147200000004432ms)
- ✅ should return min/max at boundaries (0.18212199999993572ms)
- ✅ should validate tempo within range (0.2837419999999611ms)
- ✅ should reject non-number values (0.1999949999999444ms)
- ✅ should reject NaN (0.17326500000001488ms)
- ✅ should reject tempo below minimum (0.3132869999999457ms)
- ✅ should reject tempo above maximum (0.23486000000002605ms)
- ✅ should accept boundary values (0.17239300000005642ms)
- ✅ should return 0% for minimum tempo (0.15425899999991088ms)
- ✅ should return 100% for maximum tempo (0.11460599999998067ms)
- ✅ should return 50% for midpoint tempo (0.13034399999992274ms)
- ✅ should return 40% for tempo 120 (0.15886699999998655ms)
- ✅ should return correct percentages for various tempos (0.28679699999997865ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.0986239999999725ms)
- ✅ should return a duration object with name and beats (0.36184800000000905ms)
- ✅ should select different durations over multiple calls (0.2965159999999969ms)
- ✅ should handle single duration array (0.37759700000003704ms)
- ✅ should return a duration from the array (0.4038669999999911ms)
- ✅ should use default weights if none provided (0.1687769999999773ms)
- ✅ should respect custom weights (0.43273099999998976ms)
- ✅ should handle partial weight objects (0.16582200000004832ms)
- ✅ should handle zero weights correctly (0.37723700000003646ms)
- ✅ should follow the pattern in order (0.29006300000003193ms)
- ✅ should loop the pattern (0.1817310000000134ms)
- ✅ should handle single element pattern (0.15371800000002622ms)
- ✅ should return fallback for unknown duration name (0.18938599999989947ms)
- ✅ should handle large indices (0.2584640000000036ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.14812100000006ms)
- ✅ should return a note different from current note (0.39261499999997795ms)
- ✅ should return the only note if range contains single note (0.42097899999998845ms)
- ✅ should respect min and max indices (1.3479670000000397ms)
- ✅ should handle edge case where current note is the only option (0.3040699999999106ms)
- ✅ should select note within specified interval (0.3347669999999425ms)
- ✅ should return null if current note not found (0.2235800000000836ms)
- ✅ should return null if no notes in interval range (0.17022900000006302ms)
- ✅ should include notes both above and below current note (0.5476459999999861ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (3.8156629999998586ms)
- ✅ should create analyser and connect to stream (3.127902999999833ms)
- ✅ should handle initialization errors (11.309316999999965ms)
- ✅ should convert A4 (440 Hz) correctly (1.3434990000000653ms)
- ✅ should convert C4 (261.63 Hz) correctly (0.9589569999998275ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.7839500000000044ms)
- ✅ should handle out of range frequencies (0.8217209999997976ms)
- ✅ should calculate cents offset for slightly sharp notes (1.5778770000001714ms)
- ✅ should calculate cents offset for slightly flat notes (1.0726200000001427ms)
- ✅ should return null for silent signal (1.2467070000000149ms)
- ✅ should return null for very weak signal (1.042743999999857ms)
- ✅ should detect a strong periodic signal (15.922101000000112ms)
- ✅ should not start without initialization (0.6362320000000636ms)
- ✅ should start after initialization (1.7868390000001ms)
- ✅ should stop detection (9.984541000000036ms)
- ✅ should not start twice (1.1095000000000255ms)
- ✅ should cleanup resources on dispose (1.0834999999999582ms)

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
