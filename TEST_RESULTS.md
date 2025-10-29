# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 221
**Passed:** 221 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.9285610000000588ms)
- ✅ should have patterns with required properties (3.0406749999999647ms)
- ✅ should have unique values (0.2581629999999677ms)
- ✅ should include Off pattern (0.3674479999999676ms)
- ✅ should include 16th notes pattern (0.3012940000000981ms)
- ✅ should include 8th note triplets pattern (0.36735799999996743ms)
- ✅ should include 8th notes pattern (0.24096099999997023ms)
- ✅ should include quarter note triplets pattern (0.23753499999997985ms)
- ✅ should include quarter notes pattern (0.3828680000000304ms)
- ✅ should include half note triplets pattern (0.35263099999997394ms)
- ✅ should include half notes pattern (0.23426900000004025ms)
- ✅ should include whole notes pattern (0.22435000000007221ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.546071999999981ms)
- ✅ should be defined (0.4386419999999589ms)
- ✅ should be the quarter notes pattern (0.261410000000069ms)
- ✅ should be included in CLICK_PATTERNS (1.6420359999999619ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.8972430000000031ms)
- ✅ should have all durations with name and beats properties (0.8366960000000745ms)
- ✅ should have whole note with 8 beats (0.19998399999997218ms)
- ✅ should have half note with 4 beats (0.2122269999999844ms)
- ✅ should have quarter note with 2 beats (0.20259900000007747ms)
- ✅ should have eighth note with 1 beat (0.2016479999999774ms)
- ✅ should be ordered from longest to shortest (0.362528999999995ms)
- ✅ should have display names for all durations (0.25827400000002854ms)
- ✅ should have proper capitalized names (0.28838999999993575ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.372402999999963ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.24977799999999206ms)
- ✅ should have clef property (0.150382000000036ms)
- ✅ should have comfortable range (0.22524199999998018ms)
- ✅ should have full range (0.24098099999991973ms)
- ✅ should return concert pitch when instrument is null (0.1885740000000169ms)
- ✅ should return concert pitch when transposition is 0 (0.13120600000002014ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.17698199999995268ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.20923200000004272ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.1477669999999307ms)
- ✅ should maintain octave relationships after transposition (0.17383600000005117ms)
- ✅ should use the correct transposition formula (0.11646800000005442ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 88 notes (full piano range from A0 to C8) (1.904386000000045ms)
- ✅ should start with A0 at concert pitch (0.3273229999999785ms)
- ✅ should end with C8 at concert pitch (0.23679399999991801ms)
- ✅ should have all notes as objects with name and frequency (6.412969999999973ms)
- ✅ should have frequencies in ascending order (1.3713880000000245ms)
- ✅ should include all chromatic notes (12 per octave) (1.0009939999999915ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.30466100000001006ms)
- ✅ should have correct MIN_INDEX (0.19095800000002328ms)
- ✅ should have correct MAX_INDEX (0.3209910000000491ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.2203630000000203ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.18363399999998364ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.16307500000004893ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (115.38091599999984ms)
- ✅ should handle suspended audio context (104.76258200000007ms)
- ✅ should return audio engine readiness status (103.84552699999995ms)
- ✅ should get current audio time (103.54848400000014ms)
- ✅ should respect soundEnabled prop initially true (104.27116799999999ms)
- ✅ should respect soundEnabled prop initially false (102.93720999999982ms)
- ✅ should update soundEnabled via ref when prop changes (104.62257599999975ms)
- ✅ should play click sound when audio ready and sound enabled (103.88485500000024ms)
- ✅ should not play click sound when audio not ready (2.461029000000053ms)
- ✅ should not play click sound when sound disabled (104.36944399999993ms)
- ✅ should play note sound when audio ready and sound enabled (102.97616400000015ms)
- ✅ should not play note sound when audio not ready (2.992443000000094ms)
- ✅ should not play note sound when sound disabled (104.23205000000007ms)
- ✅ should calculate correct duration from tempo and beats (104.3150300000002ms)
- ✅ should close audio context on cleanup (102.52664099999993ms)
- ✅ should not error when closing uninitialized audio (2.7452299999999923ms)
- ✅ should handle multiple init calls gracefully (302.7056399999997ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.2254439999996976ms)
- ✅ should handle webkitAudioContext fallback (102.14361300000019ms)

### Hooks Tests (37/37 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (20.025101000000177ms)
- ✅ should initialize with random note from provided notes (2.9016639999999825ms)
- ✅ should initialize with random duration from provided durations (2.5109420000001137ms)
- ✅ should update tempo (4.104006000000027ms)
- ✅ should handle tempo as string (from input) (2.993947000000162ms)
- ✅ should clamp tempo to valid range (3.423742000000175ms)
- ✅ should handle invalid tempo input (2.3907670000000962ms)
- ✅ should toggle play state from stopped to playing (2.2785670000000664ms)
- ✅ should toggle play state from playing to stopped (3.297945999999911ms)
- ✅ should reset beat to 0 when stopping (3.187850000000026ms)
- ✅ should toggle sound from enabled to disabled (2.4396079999999074ms)
- ✅ should toggle sound from disabled to enabled (3.1150740000000496ms)
- ✅ should toggle staff display from hidden to visible (3.845331999999871ms)
- ✅ should toggle staff display from visible to hidden (2.5995280000001912ms)
- ✅ should initialize with default click pattern (1.5058500000000095ms)
- ✅ should update click pattern (1.524946ms)
- ✅ should change from quarter to whole note pattern (1.5309970000000703ms)
- ✅ should change to triplet pattern (1.4745419999999285ms)
- ✅ should change to off pattern (1.543089000000009ms)
- ✅ should update range min (1.428134ms)
- ✅ should update range max (1.4644620000001396ms)
- ✅ should ensure min does not exceed max (1.554350999999997ms)
- ✅ should ensure max does not go below min (1.430279000000155ms)
- ✅ should update current note (1.3103839999998854ms)
- ✅ should update current duration (1.3213650000000143ms)
- ✅ should update current beat (1.415672000000086ms)
- ✅ should maintain stable callback references (1.1949779999999919ms)
- ✅ should handle empty notes array gracefully (0.7034569999998439ms)
- ✅ should handle single note (0.8226609999999255ms)
- ✅ should handle single duration (0.6890900000000784ms)
- ✅ should handle rapid state changes (1.6247430000000804ms)
- ✅ should initialize with all durations selected (1.1790379999999914ms)
- ✅ should toggle duration selection on (1.5124519999999393ms)
- ✅ should toggle duration selection off (1.0637120000001232ms)
- ✅ should not allow deselecting the last duration (1.694974000000002ms)
- ✅ should persist selected durations to localStorage (2.6092200000000503ms)
- ✅ should load selected durations from localStorage (1.0419010000000526ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (3.0996240000000626ms)
- ✅ should return a duration object with name and beats (0.4448529999999664ms)
- ✅ should select different durations over multiple calls (0.4486299999999801ms)
- ✅ should handle single duration array (0.3980549999999994ms)
- ✅ should return a duration from the array (0.5353529999999864ms)
- ✅ should use default weights if none provided (0.23810600000001614ms)
- ✅ should respect custom weights (0.7228340000000344ms)
- ✅ should handle partial weight objects (0.24911600000007184ms)
- ✅ should handle zero weights correctly (0.5885719999999992ms)
- ✅ should follow the pattern in order (0.5039730000000873ms)
- ✅ should loop the pattern (0.3295669999999973ms)
- ✅ should handle single element pattern (0.28085699999996905ms)
- ✅ should return fallback for unknown duration name (0.25982599999997547ms)
- ✅ should handle large indices (0.4578369999999268ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (3.445351999999957ms)
- ✅ should return a note different from current note (0.43813999999997577ms)
- ✅ should return the only note if range contains single note (0.42892299999994066ms)
- ✅ should respect min and max indices (1.442111000000068ms)
- ✅ should handle edge case where current note is the only option (0.2999919999999747ms)
- ✅ should select note within specified interval (0.4029639999999972ms)
- ✅ should return null if current note not found (0.23473999999998796ms)
- ✅ should return null if no notes in interval range (0.1825619999999617ms)
- ✅ should include notes both above and below current note (0.5561420000000226ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.305537999999956ms)
- ✅ should convert # to ♯ symbol (0.25778300000001764ms)
- ✅ should handle multiple sharps in name (edge case) (0.15895799999998417ms)
- ✅ should convert sharps to flats (0.3646840000000111ms)
- ✅ should return natural notes unchanged (0.2861359999999422ms)
- ✅ should format whole note (0.15749600000003738ms)
- ✅ should format half note (0.11197000000004209ms)
- ✅ should format quarter note (0.14974999999992633ms)
- ✅ should format eighth note (0.20130700000004254ms)
- ✅ should return capitalized name for whole note (0.16871600000001763ms)
- ✅ should return capitalized name for half note (0.10633899999993446ms)
- ✅ should return capitalized name for quarter note (0.09391600000003564ms)
- ✅ should return capitalized name for eighth note (0.16193300000009003ms)
- ✅ should return input for unknown duration (0.2636539999999741ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.297378999999978ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.19675900000004276ms)
- ✅ should calculate G4 at y=75 (second line) (0.19427399999995032ms)
- ✅ should calculate B4 at y=60 (middle line) (0.20861100000001898ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.22344900000007328ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.148298000000068ms)
- ✅ should calculate F5 at y=30 (top line) (0.11230000000000473ms)
- ✅ should calculate C4 below staff at y=105 (0.18118900000001759ms)
- ✅ should calculate D4 below staff at y=97.5 (0.2936700000000201ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.2314130000000887ms)
- ✅ should handle octave changes correctly (0.18152899999995498ms)
- ✅ should handle very low notes (C2) (0.33099000000004253ms)
- ✅ should handle very high notes (C7) (0.2271650000000136ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.28103599999997186ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.14398900000003323ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.18316300000003594ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.11742000000003827ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.09900600000003124ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.09755299999994804ms)
- ✅ should calculate E2 below staff in bass clef (0.15593200000000706ms)
- ✅ should calculate C4 above staff in bass clef (0.1101659999999356ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.10092900000006466ms)
- ✅ should parse natural note correctly (0.9236999999999398ms)
- ✅ should parse sharp note correctly (0.1565729999999803ms)
- ✅ should handle low octaves (0.11220000000002983ms)
- ✅ should handle high octaves (0.14054299999997966ms)
- ✅ should correctly identify all natural notes (0.4267289999999093ms)
- ✅ should return empty array for notes on the staff (0.28144700000007106ms)
- ✅ should generate ledger lines below staff for C4 (0.6590239999999312ms)
- ✅ should generate ledger lines below staff for D4 (0.11408400000004804ms)
- ✅ should generate ledger lines above staff for G5 (0.10297300000001997ms)
- ✅ should generate more ledger lines for notes further from staff (0.15176399999995738ms)
- ✅ should return ledger lines in correct order (0.10608899999999721ms)
- ✅ should return ledger lines in correct order for above staff (0.10305300000004536ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.3708669999999756ms)
- ✅ should swap min and max if min > max (0.26367400000003727ms)
- ✅ should reject min below 0 (0.2750750000000153ms)
- ✅ should reject max above total notes (0.24975800000004256ms)
- ✅ should allow min === max (0.2247100000000728ms)
- ✅ should keep max if min < max (0.14741600000002109ms)
- ✅ should adjust max to equal min if min > max (0.12316999999995915ms)
- ✅ should handle equal values (0.10348399999998037ms)
- ✅ should keep min if max > min (0.20649700000001303ms)
- ✅ should adjust min to equal max if max < min (0.13402099999996153ms)
- ✅ should handle equal values (0.10252200000002176ms)
- ✅ should have correct default values (0.16891599999996743ms)
- ✅ should have default between min and max (0.25238200000001143ms)
- ✅ should return value within range unchanged (0.2812470000000076ms)
- ✅ should clamp value below minimum (0.17667099999994207ms)
- ✅ should clamp value above maximum (0.17051900000001297ms)
- ✅ should return min/max at boundaries (0.14742599999999584ms)
- ✅ should validate tempo within range (0.18633899999997539ms)
- ✅ should reject non-number values (0.13584500000001754ms)
- ✅ should reject NaN (0.12618700000007266ms)
- ✅ should reject tempo below minimum (0.2170459999999821ms)
- ✅ should reject tempo above maximum (0.16618099999993774ms)
- ✅ should accept boundary values (0.12509499999998752ms)
- ✅ should return 0% for minimum tempo (0.10920499999997446ms)
- ✅ should return 100% for maximum tempo (0.07955800000002ms)
- ✅ should return 50% for midpoint tempo (0.08279500000003281ms)
- ✅ should return 40% for tempo 120 (0.07530099999996764ms)
- ✅ should return correct percentages for various tempos (0.1824219999999741ms)

### Services Tests (17/17 passed)

**File:** `services/pitchDetection/__tests__/PitchDetector`

- ✅ should initialize with audio context and callback (6.225268000000142ms)
- ✅ should create analyser and connect to stream (5.0696640000001025ms)
- ✅ should handle initialization errors (14.771192999999812ms)
- ✅ should convert A4 (440 Hz) correctly (1.4043799999999464ms)
- ✅ should convert C4 (261.63 Hz) correctly (1.9728250000000571ms)
- ✅ should convert E4 (329.63 Hz) correctly (1.116181000000097ms)
- ✅ should handle out of range frequencies (1.1941160000001219ms)
- ✅ should calculate cents offset for slightly sharp notes (1.2691059999999652ms)
- ✅ should calculate cents offset for slightly flat notes (1.2377070000000003ms)
- ✅ should return null for silent signal (1.8467180000000099ms)
- ✅ should return null for very weak signal (1.272854000000052ms)
- ✅ should detect a strong periodic signal (17.002991000000065ms)
- ✅ should not start without initialization (0.9412429999999858ms)
- ✅ should start after initialization (2.7676289999999426ms)
- ✅ should stop detection (1.1280420000000504ms)
- ✅ should not start twice (1.6233700000000226ms)
- ✅ should cleanup resources on dispose (1.1696600000000217ms)

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
