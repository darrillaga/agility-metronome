# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 215
**Passed:** 215 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (2.1145950000000084ms)
- ✅ should have patterns with required properties (3.6963989999999285ms)
- ✅ should have unique values (0.22606400000006488ms)
- ✅ should include Off pattern (0.4045089999999618ms)
- ✅ should include 16th notes pattern (0.32165200000008554ms)
- ✅ should include 8th note triplets pattern (0.3577309999999443ms)
- ✅ should include 8th notes pattern (0.2732620000000452ms)
- ✅ should include quarter note triplets pattern (0.22982999999999265ms)
- ✅ should include quarter notes pattern (0.34018699999990076ms)
- ✅ should include half note triplets pattern (0.37092500000005657ms)
- ✅ should include half notes pattern (0.22640499999999975ms)
- ✅ should include whole notes pattern (0.21449199999995017ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.5270880000000489ms)
- ✅ should be defined (0.3999900000000025ms)
- ✅ should be the quarter notes pattern (0.27413399999988997ms)
- ✅ should be included in CLICK_PATTERNS (1.4820589999999356ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.8158339999999953ms)
- ✅ should have all durations with name and beats properties (0.7992390000000569ms)
- ✅ should have whole note with 8 beats (0.2434969999999339ms)
- ✅ should have half note with 4 beats (0.213799999999992ms)
- ✅ should have quarter note with 2 beats (0.2044029999999566ms)
- ✅ should have eighth note with 1 beat (0.16737399999999525ms)
- ✅ should be ordered from longest to shortest (0.25173099999994974ms)
- ✅ should have display names for all durations (0.19683899999995447ms)
- ✅ should have proper capitalized names (0.2612490000000207ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.116237999999953ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.342220999999995ms)
- ✅ should have clef property (0.23404899999991358ms)
- ✅ should have comfortable range (0.3950800000000072ms)
- ✅ should have full range (0.39562100000000555ms)
- ✅ should return concert pitch when instrument is null (0.26098899999999503ms)
- ✅ should return concert pitch when transposition is 0 (0.20378199999993285ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.2709180000000515ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.334557000000018ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.2362630000000081ms)
- ✅ should maintain octave relationships after transposition (0.2656379999999672ms)
- ✅ should use the correct transposition formula (0.19636800000000676ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.821333999999979ms)
- ✅ should start with A0 at concert pitch (0.291896999999949ms)
- ✅ should end with C8 at concert pitch (0.2387579999999616ms)
- ✅ should have all notes as objects with name and frequency (5.555054000000041ms)
- ✅ should have frequencies in ascending order (1.4137099999999236ms)
- ✅ should include all chromatic notes (12 per octave) (1.0526130000000649ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.32642199999997956ms)
- ✅ should have correct MIN_INDEX (0.16804500000000644ms)
- ✅ should have correct MAX_INDEX (0.2885409999998956ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.2496680000000424ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.18783200000007128ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.13966100000004644ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (124.259949ms)
- ✅ should handle suspended audio context (103.94875699999989ms)
- ✅ should return audio engine readiness status (104.41459600000007ms)
- ✅ should get current audio time (102.43690700000002ms)
- ✅ should respect soundEnabled prop initially true (104.76172700000006ms)
- ✅ should respect soundEnabled prop initially false (104.17766699999993ms)
- ✅ should update soundEnabled via ref when prop changes (104.87128999999982ms)
- ✅ should play click sound when audio ready and sound enabled (103.76483800000005ms)
- ✅ should not play click sound when audio not ready (2.994383000000198ms)
- ✅ should not play click sound when sound disabled (103.5762380000001ms)
- ✅ should play note sound when audio ready and sound enabled (104.0143780000003ms)
- ✅ should not play note sound when audio not ready (5.444506000000274ms)
- ✅ should not play note sound when sound disabled (104.69594000000006ms)
- ✅ should calculate correct duration from tempo and beats (105.43365900000026ms)
- ✅ should close audio context on cleanup (102.60106200000018ms)
- ✅ should not error when closing uninitialized audio (2.858278000000155ms)
- ✅ should handle multiple init calls gracefully (303.3390629999999ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.7813000000001011ms)
- ✅ should handle webkitAudioContext fallback (102.10768899999994ms)

### Hooks Tests (31/31 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (20.14405899999997ms)
- ✅ should initialize with random note from provided notes (2.9494089999998323ms)
- ✅ should initialize with random duration from provided durations (2.637703999999985ms)
- ✅ should update tempo (3.7667699999999513ms)
- ✅ should handle tempo as string (from input) (1.9070850000000519ms)
- ✅ should clamp tempo to valid range (2.236893000000009ms)
- ✅ should handle invalid tempo input (1.5229349999999613ms)
- ✅ should toggle play state from stopped to playing (1.5110230000000229ms)
- ✅ should toggle play state from playing to stopped (2.6081890000000385ms)
- ✅ should reset beat to 0 when stopping (3.562852000000021ms)
- ✅ should toggle sound from enabled to disabled (2.3063230000000203ms)
- ✅ should toggle sound from disabled to enabled (2.6649010000001ms)
- ✅ should toggle staff display from hidden to visible (2.661237999999912ms)
- ✅ should toggle staff display from visible to hidden (2.683810999999878ms)
- ✅ should initialize with default click pattern (1.7262949999999364ms)
- ✅ should update click pattern (1.7739950000000135ms)
- ✅ should change from quarter to whole note pattern (4.92441000000008ms)
- ✅ should change to triplet pattern (1.0535640000000512ms)
- ✅ should change to off pattern (1.0263530000001992ms)
- ✅ should update range min (1.0141700000001492ms)
- ✅ should update range max (0.9635359999999764ms)
- ✅ should ensure min does not exceed max (1.123154999999997ms)
- ✅ should ensure max does not go below min (0.9183210000001054ms)
- ✅ should update current note (0.8225619999998344ms)
- ✅ should update current duration (0.9293219999999565ms)
- ✅ should update current beat (1.193337000000156ms)
- ✅ should maintain stable callback references (1.21970599999986ms)
- ✅ should handle empty notes array gracefully (0.6945020000000568ms)
- ✅ should handle single note (0.93157599999995ms)
- ✅ should handle single duration (0.7956109999997807ms)
- ✅ should handle rapid state changes (1.2212180000001354ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.2232970000000023ms)
- ✅ should return a duration object with name and beats (0.5027630000000727ms)
- ✅ should select different durations over multiple calls (0.3613679999999704ms)
- ✅ should handle single duration array (0.3941890000000967ms)
- ✅ should return a duration from the array (0.4226419999999962ms)
- ✅ should use default weights if none provided (0.15892900000005739ms)
- ✅ should respect custom weights (0.4537199999999757ms)
- ✅ should handle partial weight objects (0.16658200000006218ms)
- ✅ should handle zero weights correctly (0.368951999999922ms)
- ✅ should follow the pattern in order (0.3004630000000361ms)
- ✅ should loop the pattern (0.18686999999999898ms)
- ✅ should handle single element pattern (0.15771600000005037ms)
- ✅ should return fallback for unknown duration name (0.15413999999998396ms)
- ✅ should handle large indices (0.2776609999999664ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.317849000000024ms)
- ✅ should return a note different from current note (0.5201460000000679ms)
- ✅ should return the only note if range contains single note (0.43855199999995875ms)
- ✅ should respect min and max indices (1.3581460000000334ms)
- ✅ should handle edge case where current note is the only option (0.3148400000000038ms)
- ✅ should select note within specified interval (0.3268919999999298ms)
- ✅ should return null if current note not found (0.21023400000001402ms)
- ✅ should return null if no notes in interval range (0.1439100000000053ms)
- ✅ should include notes both above and below current note (0.46080400000005284ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.374055999999996ms)
- ✅ should convert # to ♯ symbol (0.271588999999949ms)
- ✅ should handle multiple sharps in name (edge case) (0.16151300000001356ms)
- ✅ should convert sharps to flats (0.5512340000000222ms)
- ✅ should return natural notes unchanged (0.5030629999999974ms)
- ✅ should format whole note (0.25980700000002344ms)
- ✅ should format half note (0.19300199999997858ms)
- ✅ should format quarter note (0.20222899999998845ms)
- ✅ should format eighth note (0.36164799999994557ms)
- ✅ should return capitalized name for whole note (0.2793139999999994ms)
- ✅ should return capitalized name for half note (0.2254530000000159ms)
- ✅ should return capitalized name for quarter note (0.22474099999999453ms)
- ✅ should return capitalized name for eighth note (0.3038499999998976ms)
- ✅ should return input for unknown duration (0.3855629999999337ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.0278319999999894ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.2917570000000751ms)
- ✅ should calculate G4 at y=75 (second line) (0.2399599999999964ms)
- ✅ should calculate B4 at y=60 (middle line) (0.34690999999997985ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.3604850000000397ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.26092000000005555ms)
- ✅ should calculate F5 at y=30 (top line) (0.19930299999998624ms)
- ✅ should calculate C4 below staff at y=105 (0.19723999999996522ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3409489999999096ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.3903619999999819ms)
- ✅ should handle octave changes correctly (0.3058240000000296ms)
- ✅ should handle very low notes (C2) (0.45826899999997295ms)
- ✅ should handle very high notes (C7) (0.29864899999995487ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.4320300000000543ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.2525229999999965ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.25023799999996754ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.17964600000004793ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.16448900000000322ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.181088999999929ms)
- ✅ should calculate E2 below staff in bass clef (0.2882200000000239ms)
- ✅ should calculate C4 above staff in bass clef (0.18278299999997216ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.17496799999992163ms)
- ✅ should parse natural note correctly (1.0478240000001051ms)
- ✅ should parse sharp note correctly (0.24250400000005357ms)
- ✅ should handle low octaves (0.17845499999998538ms)
- ✅ should handle high octaves (0.22622400000000198ms)
- ✅ should correctly identify all natural notes (0.8625370000000885ms)
- ✅ should return empty array for notes on the staff (0.5422160000000531ms)
- ✅ should generate ledger lines below staff for C4 (1.0956340000000182ms)
- ✅ should generate ledger lines below staff for D4 (0.15837699999997312ms)
- ✅ should generate ledger lines above staff for G5 (0.1479980000000296ms)
- ✅ should generate more ledger lines for notes further from staff (0.19062699999994948ms)
- ✅ should return ledger lines in correct order (0.16057000000000698ms)
- ✅ should return ledger lines in correct order for above staff (0.11742000000003827ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (2.273592000000008ms)
- ✅ should swap min and max if min > max (0.45921100000009574ms)
- ✅ should reject min below 0 (0.421970999999985ms)
- ✅ should reject max above total notes (0.4272209999999177ms)
- ✅ should allow min === max (0.3740609999999833ms)
- ✅ should keep max if min < max (0.25508800000000065ms)
- ✅ should adjust max to equal min if min > max (0.1690969999999652ms)
- ✅ should handle equal values (0.17730299999993804ms)
- ✅ should keep min if max > min (0.34207200000003013ms)
- ✅ should adjust min to equal max if max < min (0.24746400000003632ms)
- ✅ should handle equal values (0.18629999999996016ms)
- ✅ should have correct default values (0.313637999999969ms)
- ✅ should have default between min and max (0.47955899999999474ms)
- ✅ should return value within range unchanged (0.4722659999999905ms)
- ✅ should clamp value below minimum (0.29957100000001446ms)
- ✅ should clamp value above maximum (0.28375199999993583ms)
- ✅ should return min/max at boundaries (0.20284000000003743ms)
- ✅ should validate tempo within range (0.32029099999999744ms)
- ✅ should reject non-number values (0.2345189999999775ms)
- ✅ should reject NaN (0.2084509999999682ms)
- ✅ should reject tempo below minimum (0.37515400000006593ms)
- ✅ should reject tempo above maximum (0.23215499999992062ms)
- ✅ should accept boundary values (0.19450500000004922ms)
- ✅ should return 0% for minimum tempo (0.1664819999999736ms)
- ✅ should return 100% for maximum tempo (0.15507099999990714ms)
- ✅ should return 50% for midpoint tempo (0.13995199999999386ms)
- ✅ should return 40% for tempo 120 (0.13220799999999144ms)
- ✅ should return correct percentages for various tempos (0.3156210000000783ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (7.0145279999999275ms)
- ✅ should create analyser and connect to stream (4.467233000000078ms)
- ✅ should handle initialization errors (16.7941229999999ms)
- ✅ should convert A4 (440 Hz) correctly (1.5360599999999067ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.0254319999999097ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.8500830000000406ms)
- ✅ should handle out of range frequencies (0.8605840000000171ms)
- ✅ should calculate cents offset for slightly sharp notes (7.309451000000081ms)
- ✅ should calculate cents offset for slightly flat notes (1.0316439999999147ms)
- ✅ should return null for silent signal (4.8320269999999255ms)
- ✅ should return null for very weak signal (1.3419450000001234ms)
- ✅ should detect a strong periodic signal (16.33806400000003ms)
- ✅ should not start without initialization (1.170193000000154ms)
- ✅ should start after initialization (2.2451689999998052ms)
- ✅ should stop detection (1.186093000000028ms)
- ✅ should not start twice (2.346347999999807ms)
- ✅ should cleanup resources on dispose (10.022547000000031ms)

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
