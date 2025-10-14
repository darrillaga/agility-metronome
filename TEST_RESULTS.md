# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 215
**Passed:** 215 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.3523910000000114ms)
- ✅ should have patterns with required properties (1.7980729999999312ms)
- ✅ should have unique values (0.25501599999995506ms)
- ✅ should include Off pattern (0.2549860000000308ms)
- ✅ should include 16th notes pattern (0.22403799999995044ms)
- ✅ should include 8th note triplets pattern (0.3741979999999785ms)
- ✅ should include 8th notes pattern (0.26042499999994106ms)
- ✅ should include quarter note triplets pattern (0.2275840000000926ms)
- ✅ should include quarter notes pattern (0.5715059999999994ms)
- ✅ should include half note triplets pattern (0.30968800000005103ms)
- ✅ should include half notes pattern (0.4375360000000228ms)
- ✅ should include whole notes pattern (0.23349599999994552ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.661393999999973ms)
- ✅ should be defined (0.18875099999991107ms)
- ✅ should be the quarter notes pattern (0.22299500000008265ms)
- ✅ should be included in CLICK_PATTERNS (1.677116999999953ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (2.9445100000000366ms)
- ✅ should have all durations with name and beats properties (1.6123760000000402ms)
- ✅ should have whole note with 8 beats (0.3092469999999139ms)
- ✅ should have half note with 4 beats (0.3607320000000982ms)
- ✅ should have quarter note with 2 beats (0.2515489999998408ms)
- ✅ should have eighth note with 1 beat (0.2864839999999731ms)
- ✅ should be ordered from longest to shortest (0.3863100000000941ms)
- ✅ should have display names for all durations (0.4410419999999249ms)
- ✅ should have proper capitalized names (0.4751260000000457ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (2.1158649999999852ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.3769230000000334ms)
- ✅ should have clef property (0.2053529999998318ms)
- ✅ should have comfortable range (0.33471400000007634ms)
- ✅ should have full range (0.39001699999994344ms)
- ✅ should return concert pitch when instrument is null (0.2680199999999786ms)
- ✅ should return concert pitch when transposition is 0 (0.21478000000001884ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.3262080000001788ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.3789159999998901ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.242511999999806ms)
- ✅ should maintain octave relationships after transposition (0.19281899999987218ms)
- ✅ should use the correct transposition formula (0.1458820000000287ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.8256039999999985ms)
- ✅ should start with A0 at concert pitch (0.4047640000000001ms)
- ✅ should end with C8 at concert pitch (0.18957399999999325ms)
- ✅ should have all notes as objects with name and frequency (6.264821000000097ms)
- ✅ should have frequencies in ascending order (1.2278589999999667ms)
- ✅ should include all chromatic notes (12 per octave) (1.13441499999999ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.2436440000000175ms)
- ✅ should have correct MIN_INDEX (0.23408600000004753ms)
- ✅ should have correct MAX_INDEX (0.45464800000002015ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.28658499999994547ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.21003200000006927ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.13020300000005136ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (191.403914ms)
- ✅ should handle suspended audio context (111.25255200000038ms)
- ✅ should return audio engine readiness status (110.92100399999981ms)
- ✅ should get current audio time (115.18759799999998ms)
- ✅ should respect soundEnabled prop initially true (120.00191600000016ms)
- ✅ should respect soundEnabled prop initially false (109.54910500000005ms)
- ✅ should update soundEnabled via ref when prop changes (119.16684799999985ms)
- ✅ should play click sound when audio ready and sound enabled (114.64164100000016ms)
- ✅ should not play click sound when audio not ready (23.80325300000004ms)
- ✅ should not play click sound when sound disabled (109.52869599999985ms)
- ✅ should play note sound when audio ready and sound enabled (108.87281399999983ms)
- ✅ should not play note sound when audio not ready (3.8141709999999875ms)
- ✅ should not play note sound when sound disabled (108.0950240000002ms)
- ✅ should calculate correct duration from tempo and beats (115.3720930000004ms)
- ✅ should close audio context on cleanup (105.61726499999986ms)
- ✅ should not error when closing uninitialized audio (9.665442999999868ms)
- ✅ should handle multiple init calls gracefully (308.78140699999994ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (5.1602710000001935ms)
- ✅ should handle webkitAudioContext fallback (108.94807500000024ms)

### Hooks Tests (31/31 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (13.00985700000001ms)
- ✅ should initialize with random note from provided notes (1.9032489999999598ms)
- ✅ should initialize with random duration from provided durations (1.7194559999998091ms)
- ✅ should update tempo (3.174287999999933ms)
- ✅ should handle tempo as string (from input) (1.8889619999999923ms)
- ✅ should clamp tempo to valid range (1.997735000000148ms)
- ✅ should handle invalid tempo input (1.4972519999998894ms)
- ✅ should toggle play state from stopped to playing (1.2019110000001092ms)
- ✅ should toggle play state from playing to stopped (2.5735879999999725ms)
- ✅ should reset beat to 0 when stopping (1.6657459999998991ms)
- ✅ should toggle sound from enabled to disabled (1.042754000000059ms)
- ✅ should toggle sound from disabled to enabled (1.1298360000000685ms)
- ✅ should toggle staff display from hidden to visible (1.0739619999999377ms)
- ✅ should toggle staff display from visible to hidden (1.044687999999951ms)
- ✅ should initialize with default click pattern (1.0133789999999863ms)
- ✅ should update click pattern (0.9500610000000052ms)
- ✅ should change from quarter to whole note pattern (1.8093630000000758ms)
- ✅ should change to triplet pattern (2.019126000000142ms)
- ✅ should change to off pattern (1.8590149999999994ms)
- ✅ should update range min (1.692925999999943ms)
- ✅ should update range max (3.649343999999928ms)
- ✅ should ensure min does not exceed max (2.436821000000009ms)
- ✅ should ensure max does not go below min (1.5773509999999078ms)
- ✅ should update current note (1.5679540000000998ms)
- ✅ should update current duration (1.3849119999999857ms)
- ✅ should update current beat (1.3030600000001868ms)
- ✅ should maintain stable callback references (1.9282650000000103ms)
- ✅ should handle empty notes array gracefully (1.2179100000000744ms)
- ✅ should handle single note (1.2628849999998693ms)
- ✅ should handle single duration (1.0623510000000351ms)
- ✅ should handle rapid state changes (1.9755629999999655ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (3.1633690000001025ms)
- ✅ should return a duration object with name and beats (0.5955500000000029ms)
- ✅ should select different durations over multiple calls (0.4514520000000175ms)
- ✅ should handle single duration array (0.3180939999999737ms)
- ✅ should return a duration from the array (0.6126119999998991ms)
- ✅ should use default weights if none provided (0.2808139999999639ms)
- ✅ should respect custom weights (0.7196619999999712ms)
- ✅ should handle partial weight objects (0.3248159999998279ms)
- ✅ should handle zero weights correctly (0.62203999999997ms)
- ✅ should follow the pattern in order (0.4008770000000368ms)
- ✅ should loop the pattern (0.34754799999996067ms)
- ✅ should handle single element pattern (0.2441550000000916ms)
- ✅ should return fallback for unknown duration name (0.241561000000047ms)
- ✅ should handle large indices (0.14776599999981954ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (8.064836999999898ms)
- ✅ should return a note different from current note (0.6179420000000846ms)
- ✅ should return the only note if range contains single note (1.46617399999991ms)
- ✅ should respect min and max indices (6.2259489999999005ms)
- ✅ should handle edge case where current note is the only option (0.17679999999995744ms)
- ✅ should select note within specified interval (0.4246019999998225ms)
- ✅ should return null if current note not found (0.24289300000009462ms)
- ✅ should return null if no notes in interval range (2.332578999999896ms)
- ✅ should include notes both above and below current note (0.5752130000000761ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.8721199999999953ms)
- ✅ should convert # to ♯ symbol (0.4689339999999902ms)
- ✅ should handle multiple sharps in name (edge case) (0.22770500000001448ms)
- ✅ should convert sharps to flats (0.6833439999998063ms)
- ✅ should return natural notes unchanged (0.3063520000000608ms)
- ✅ should format whole note (0.2567990000000009ms)
- ✅ should format half note (0.2544740000000729ms)
- ✅ should format quarter note (0.18555700000001707ms)
- ✅ should format eighth note (0.35502199999996265ms)
- ✅ should return capitalized name for whole note (0.25399399999992056ms)
- ✅ should return capitalized name for half note (0.1721109999998589ms)
- ✅ should return capitalized name for quarter note (0.1240020000000186ms)
- ✅ should return capitalized name for eighth note (0.12593500000002678ms)
- ✅ should return input for unknown duration (0.12861999999995533ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (2.213057000000049ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.4111770000000661ms)
- ✅ should calculate G4 at y=75 (second line) (0.24583799999993516ms)
- ✅ should calculate B4 at y=60 (middle line) (0.21837700000003224ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.32511599999998ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.24298300000009476ms)
- ✅ should calculate F5 at y=30 (top line) (0.19808899999998175ms)
- ✅ should calculate C4 below staff at y=105 (0.19103600000005372ms)
- ✅ should calculate D4 below staff at y=97.5 (0.5367700000000468ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.2672179999999571ms)
- ✅ should handle octave changes correctly (0.2543640000000096ms)
- ✅ should handle very low notes (C2) (0.2925149999999803ms)
- ✅ should handle very high notes (C7) (0.2433130000000574ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.17995600000006107ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.15146200000003773ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.15655200000003333ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.14584200000001601ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.143367000000012ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.14241600000002563ms)
- ✅ should calculate E2 below staff in bass clef (0.16544899999996687ms)
- ✅ should calculate C4 above staff in bass clef (0.15764400000000478ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.1606090000000222ms)
- ✅ should parse natural note correctly (0.9591080000000147ms)
- ✅ should parse sharp note correctly (0.2185269999999946ms)
- ✅ should handle low octaves (0.1818789999999808ms)
- ✅ should handle high octaves (0.21175499999992553ms)
- ✅ should correctly identify all natural notes (0.6755790000000843ms)
- ✅ should return empty array for notes on the staff (0.5603750000000218ms)
- ✅ should generate ledger lines below staff for C4 (1.0790020000000595ms)
- ✅ should generate ledger lines below staff for D4 (0.14732500000002346ms)
- ✅ should generate ledger lines above staff for G5 (0.2249290000000883ms)
- ✅ should generate more ledger lines for notes further from staff (0.1827299999999923ms)
- ✅ should return ledger lines in correct order (0.10704900000007456ms)
- ✅ should return ledger lines in correct order for above staff (0.11143800000002102ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (2.2588009999999485ms)
- ✅ should swap min and max if min > max (0.545517000000018ms)
- ✅ should reject min below 0 (0.3788560000000416ms)
- ✅ should reject max above total notes (0.23807299999998577ms)
- ✅ should allow min === max (0.260885999999914ms)
- ✅ should keep max if min < max (0.24301300000001902ms)
- ✅ should adjust max to equal min if min > max (0.1699869999999919ms)
- ✅ should handle equal values (0.6966589999999542ms)
- ✅ should keep min if max > min (0.40577699999994365ms)
- ✅ should adjust min to equal max if max < min (0.20836899999994785ms)
- ✅ should handle equal values (0.1328879999999799ms)
- ✅ should have correct default values (0.22389699999996537ms)
- ✅ should have default between min and max (1.4258179999999356ms)
- ✅ should return value within range unchanged (0.22363700000005338ms)
- ✅ should clamp value below minimum (0.2027980000000298ms)
- ✅ should clamp value above maximum (0.16893500000003314ms)
- ✅ should return min/max at boundaries (0.1926099999999451ms)
- ✅ should validate tempo within range (0.24630899999999656ms)
- ✅ should reject non-number values (0.1770810000000438ms)
- ✅ should reject NaN (0.14277600000002622ms)
- ✅ should reject tempo below minimum (0.31586000000004333ms)
- ✅ should reject tempo above maximum (0.20443099999999959ms)
- ✅ should accept boundary values (0.1574030000000448ms)
- ✅ should return 0% for minimum tempo (0.16568899999992937ms)
- ✅ should return 100% for maximum tempo (0.1164569999999685ms)
- ✅ should return 50% for midpoint tempo (0.13940999999999804ms)
- ✅ should return 40% for tempo 120 (0.10490600000002814ms)
- ✅ should return correct percentages for various tempos (0.2575899999999365ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (12.574254999999994ms)
- ✅ should create analyser and connect to stream (6.03029400000014ms)
- ✅ should handle initialization errors (14.640618000000131ms)
- ✅ should convert A4 (440 Hz) correctly (1.3511599999999362ms)
- ✅ should convert C4 (261.63 Hz) correctly (0.9353939999998602ms)
- ✅ should convert E4 (329.63 Hz) correctly (0.625566999999819ms)
- ✅ should handle out of range frequencies (1.5279290000000856ms)
- ✅ should calculate cents offset for slightly sharp notes (0.728888999999981ms)
- ✅ should calculate cents offset for slightly flat notes (2.582445000000007ms)
- ✅ should return null for silent signal (1.4012829999999212ms)
- ✅ should return null for very weak signal (1.0753650000001471ms)
- ✅ should detect a strong periodic signal (18.969599000000017ms)
- ✅ should not start without initialization (0.7630930000000262ms)
- ✅ should start after initialization (1.6847609999999804ms)
- ✅ should stop detection (2.8816130000000157ms)
- ✅ should not start twice (2.566675000000032ms)
- ✅ should cleanup resources on dispose (1.7619150000000445ms)

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
