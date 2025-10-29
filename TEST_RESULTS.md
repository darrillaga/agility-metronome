# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.4956730000000107ms)
- ✅ should have patterns with required properties (1.7828419999999596ms)
- ✅ should have unique values (0.15612299999997958ms)
- ✅ should include Off pattern (0.22823800000003303ms)
- ✅ should include 16th notes pattern (0.2392579999999498ms)
- ✅ should include 8th note triplets pattern (0.22959000000003016ms)
- ✅ should include 8th notes pattern (0.15617299999996703ms)
- ✅ should include quarter note triplets pattern (0.13825899999994817ms)
- ✅ should include quarter notes pattern (0.22595300000000407ms)
- ✅ should include half note triplets pattern (0.2609989999999698ms)
- ✅ should include half notes pattern (0.1446609999999282ms)
- ✅ should include whole notes pattern (0.129423000000088ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.40153299999997216ms)
- ✅ should be defined (0.36699799999996685ms)
- ✅ should be the quarter notes pattern (0.16365700000005745ms)
- ✅ should be included in CLICK_PATTERNS (1.4349489999999605ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (2.552084000000036ms)
- ✅ should have all durations with name and beats properties (1.3046960000000354ms)
- ✅ should have whole note with 8 beats (0.2816680000000815ms)
- ✅ should have half note with 4 beats (0.3476819999999634ms)
- ✅ should have quarter note with 2 beats (0.3297979999999825ms)
- ✅ should have eighth note with 1 beat (0.24615099999994072ms)
- ✅ should be ordered from longest to shortest (0.3699930000000222ms)
- ✅ should have display names for all durations (0.33647099999996044ms)
- ✅ should have proper capitalized names (0.4775250000000142ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.3652590000000373ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.2586549999999761ms)
- ✅ should have clef property (0.15445999999997184ms)
- ✅ should have comfortable range (0.23407899999995152ms)
- ✅ should have full range (0.295374000000038ms)
- ✅ should return concert pitch when instrument is null (0.19725900000003094ms)
- ✅ should return concert pitch when transposition is 0 (0.1335109999999986ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.17737299999998868ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.21135600000002341ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.15278599999999187ms)
- ✅ should maintain octave relationships after transposition (0.17754300000001422ms)
- ✅ should use the correct transposition formula (0.11533600000007027ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (2.0649700000000166ms)
- ✅ should start with A0 at concert pitch (0.35183900000004087ms)
- ✅ should end with C8 at concert pitch (0.28103600000008555ms)
- ✅ should have all notes as objects with name and frequency (6.214668999999958ms)
- ✅ should have frequencies in ascending order (1.4285870000001069ms)
- ✅ should include all chromatic notes (12 per octave) (1.1001620000000685ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.32084099999997306ms)
- ✅ should have correct MIN_INDEX (0.23322799999994004ms)
- ✅ should have correct MAX_INDEX (0.32204300000000785ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.23196499999994558ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.20680799999990995ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.1426969999999983ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (116.58069ms)
- ✅ should handle suspended audio context (104.36911699999996ms)
- ✅ should return audio engine readiness status (103.72192799999993ms)
- ✅ should get current audio time (104.39166099999989ms)
- ✅ should respect soundEnabled prop initially true (103.58337599999982ms)
- ✅ should respect soundEnabled prop initially false (103.84909799999991ms)
- ✅ should update soundEnabled via ref when prop changes (105.29609700000015ms)
- ✅ should play click sound when audio ready and sound enabled (103.96128399999998ms)
- ✅ should not play click sound when audio not ready (4.075578999999834ms)
- ✅ should not play click sound when sound disabled (103.47113600000012ms)
- ✅ should play note sound when audio ready and sound enabled (103.79331999999977ms)
- ✅ should not play note sound when audio not ready (2.285334000000148ms)
- ✅ should not play note sound when sound disabled (105.82755799999995ms)
- ✅ should calculate correct duration from tempo and beats (103.08536300000014ms)
- ✅ should close audio context on cleanup (102.67968299999984ms)
- ✅ should not error when closing uninitialized audio (3.308320999999978ms)
- ✅ should handle multiple init calls gracefully (302.2545890000001ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.7396399999997811ms)
- ✅ should handle webkitAudioContext fallback (102.61715100000038ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (19.17878900000005ms)
- ✅ should initialize with random note from provided notes (2.113762000000179ms)
- ✅ should initialize with random duration from provided durations (1.688314999999875ms)
- ✅ should update tempo (2.7448950000000423ms)
- ✅ should handle tempo as string (from input) (1.7666209999999865ms)
- ✅ should clamp tempo to valid range (2.5565720000001875ms)
- ✅ should handle invalid tempo input (1.4796940000001086ms)
- ✅ should toggle play state from stopped to playing (1.4132790000001023ms)
- ✅ should toggle play state from playing to stopped (2.657260999999835ms)
- ✅ should reset beat to 0 when stopping (2.0978119999999763ms)
- ✅ should toggle sound from enabled to disabled (2.1657399999999143ms)
- ✅ should toggle sound from disabled to enabled (3.2833140000000185ms)
- ✅ should toggle staff display from hidden to visible (4.638112000000092ms)
- ✅ should toggle staff display from visible to hidden (2.6910239999999703ms)
- ✅ should initialize with default click pattern (1.7739340000000539ms)
- ✅ should update click pattern (3.631055999999944ms)
- ✅ should change from quarter to whole note pattern (1.6618250000001353ms)
- ✅ should change to triplet pattern (1.5245079999999689ms)
- ✅ should change to off pattern (1.5189570000000003ms)
- ✅ should update range min (1.3885629999999765ms)
- ✅ should update range max (1.3282000000001517ms)
- ✅ should ensure min does not exceed max (1.0087710000000243ms)
- ✅ should ensure max does not go below min (1.2260380000000168ms)
- ✅ should update current note (1.2054390000000694ms)
- ✅ should update current duration (1.2156380000001263ms)
- ✅ should update current beat (1.2867919999998776ms)
- ✅ should maintain stable callback references (1.1965030000001207ms)
- ✅ should handle empty notes array gracefully (1.0271559999998772ms)
- ✅ should handle single note (1.246505999999954ms)
- ✅ should handle single duration (0.9227899999998499ms)
- ✅ should handle rapid state changes (1.2855999999999312ms)
- ✅ should initialize with all durations selected (0.8381010000000515ms)
- ✅ should toggle duration selection on (1.2615350000000944ms)
- ✅ should toggle duration selection off (1.03979900000013ms)
- ✅ should not allow deselecting the last duration (1.5874559999999747ms)
- ✅ should persist selected durations to localStorage (1.3319060000001173ms)
- ✅ should load selected durations from localStorage (1.281011000000035ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (4.346146999999974ms)
- ✅ should return a duration object with name and beats (0.5075110000000222ms)
- ✅ should select different durations over multiple calls (0.4718449999999166ms)
- ✅ should handle single duration array (0.450162999999975ms)
- ✅ should return a duration from the array (0.6803750000000264ms)
- ✅ should use default weights if none provided (0.23455999999998767ms)
- ✅ should respect custom weights (0.6627819999999929ms)
- ✅ should handle partial weight objects (0.2503389999999399ms)
- ✅ should handle zero weights correctly (0.5205359999999928ms)
- ✅ should follow the pattern in order (0.4424690000000737ms)
- ✅ should loop the pattern (0.289993000000095ms)
- ✅ should handle single element pattern (0.24579099999994014ms)
- ✅ should return fallback for unknown duration name (0.2581840000000284ms)
- ✅ should handle large indices (0.36444300000005114ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.447681999999986ms)
- ✅ should return a note different from current note (0.4499439999999595ms)
- ✅ should return the only note if range contains single note (0.4033359999999675ms)
- ✅ should respect min and max indices (1.1474509999999327ms)
- ✅ should handle edge case where current note is the only option (0.23192499999993288ms)
- ✅ should select note within specified interval (0.269676000000004ms)
- ✅ should return null if current note not found (0.15566100000000915ms)
- ✅ should return null if no notes in interval range (0.11457500000005894ms)
- ✅ should include notes both above and below current note (0.5159070000000838ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.3423859999999195ms)
- ✅ should convert # to ♯ symbol (0.29017399999997906ms)
- ✅ should handle multiple sharps in name (edge case) (0.16861599999992904ms)
- ✅ should convert sharps to flats (0.3276539999999386ms)
- ✅ should return natural notes unchanged (0.3076659999999265ms)
- ✅ should format whole note (0.15521000000001095ms)
- ✅ should format half note (0.10806200000001809ms)
- ✅ should format quarter note (0.11703899999997702ms)
- ✅ should format eighth note (0.19985499999995682ms)
- ✅ should return capitalized name for whole note (0.20853099999999358ms)
- ✅ should return capitalized name for half note (0.1142050000000836ms)
- ✅ should return capitalized name for quarter note (0.0949879999999439ms)
- ✅ should return capitalized name for eighth note (0.16483900000002905ms)
- ✅ should return input for unknown duration (0.2343990000000531ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.4055849999999737ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.22833800000000792ms)
- ✅ should calculate G4 at y=75 (second line) (0.15986999999995533ms)
- ✅ should calculate B4 at y=60 (middle line) (0.21455200000002606ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.23001099999999042ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.15119400000003225ms)
- ✅ should calculate F5 at y=30 (top line) (0.15529100000003382ms)
- ✅ should calculate C4 below staff at y=105 (0.1253150000000005ms)
- ✅ should calculate D4 below staff at y=97.5 (0.20365100000003622ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.22515199999998003ms)
- ✅ should handle octave changes correctly (0.1825619999999617ms)
- ✅ should handle very low notes (C2) (0.30242699999996603ms)
- ✅ should handle very high notes (C7) (0.19051699999999983ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.2878490000000511ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.1458429999998998ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.19358299999998962ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.12038499999994201ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.09833500000002005ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.09915600000010727ms)
- ✅ should calculate E2 below staff in bass clef (0.17057999999997264ms)
- ✅ should calculate C4 above staff in bass clef (0.11389299999996183ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.10070900000005167ms)
- ✅ should parse natural note correctly (0.6282769999999118ms)
- ✅ should parse sharp note correctly (0.15371800000002622ms)
- ✅ should handle low octaves (0.1435989999999947ms)
- ✅ should handle high octaves (0.14922999999998865ms)
- ✅ should correctly identify all natural notes (0.4307370000000219ms)
- ✅ should return empty array for notes on the staff (0.2829299999999648ms)
- ✅ should generate ledger lines below staff for C4 (0.7240870000000541ms)
- ✅ should generate ledger lines below staff for D4 (0.09776299999998628ms)
- ✅ should generate ledger lines above staff for G5 (0.08716400000002977ms)
- ✅ should generate more ledger lines for notes further from staff (0.11846200000002227ms)
- ✅ should return ledger lines in correct order (0.08587099999999737ms)
- ✅ should return ledger lines in correct order for above staff (0.06619399999999587ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (2.1830019999999877ms)
- ✅ should swap min and max if min > max (0.31869800000004034ms)
- ✅ should reject min below 0 (0.2629419999999527ms)
- ✅ should reject max above total notes (0.24401800000009644ms)
- ✅ should allow min === max (0.24705299999993713ms)
- ✅ should keep max if min < max (0.1571840000000293ms)
- ✅ should adjust max to equal min if min > max (0.10549800000001142ms)
- ✅ should handle equal values (0.09965699999997923ms)
- ✅ should keep min if max > min (0.20988299999999072ms)
- ✅ should adjust min to equal max if max < min (0.15458999999998468ms)
- ✅ should handle equal values (0.1129320000000007ms)
- ✅ should have correct default values (0.1704699999999093ms)
- ✅ should have default between min and max (0.22117499999990287ms)
- ✅ should return value within range unchanged (0.31334800000001906ms)
- ✅ should clamp value below minimum (0.1780740000000378ms)
- ✅ should clamp value above maximum (0.179395999999997ms)
- ✅ should return min/max at boundaries (0.12859099999991486ms)
- ✅ should validate tempo within range (0.19328199999995377ms)
- ✅ should reject non-number values (0.13742799999999988ms)
- ✅ should reject NaN (0.13293900000007852ms)
- ✅ should reject tempo below minimum (0.23318699999992987ms)
- ✅ should reject tempo above maximum (0.14360900000008314ms)
- ✅ should accept boundary values (0.15385799999990013ms)
- ✅ should return 0% for minimum tempo (0.17888600000003407ms)
- ✅ should return 100% for maximum tempo (0.12327099999993152ms)
- ✅ should return 50% for midpoint tempo (0.12753999999995358ms)
- ✅ should return 40% for tempo 120 (0.11466500000005908ms)
- ✅ should return correct percentages for various tempos (0.1968490000000429ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (6.372022999999899ms)
- ✅ should create analyser and connect to stream (6.849948999999924ms)
- ✅ should handle initialization errors (18.101243000000068ms)
- ✅ should convert A4 (440 Hz) correctly (1.467379999999821ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.073032000000012ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.9182510000000548ms)
- ✅ should handle out of range frequencies (0.8777059999999892ms)
- ✅ should calculate cents offset for slightly sharp notes (1.2841969999999492ms)
- ✅ should calculate cents offset for slightly flat notes (0.8827650000000631ms)
- ✅ should return null for silent signal (1.4171660000001793ms)
- ✅ should return null for very weak signal (0.8370190000000548ms)
- ✅ should detect a strong periodic signal (19.790091000000075ms)
- ✅ should not start without initialization (0.708898999999974ms)
- ✅ should start after initialization (1.987565999999788ms)
- ✅ should stop detection (1.2936849999998685ms)
- ✅ should not start twice (1.0461009999999078ms)
- ✅ should cleanup resources on dispose (1.1728479999999308ms)

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
