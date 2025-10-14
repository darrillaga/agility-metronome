# Test Results - B♭ Trumpet Agility Metronome

## Test Suite Summary

**Total Tests:** 198
**Passed:** 198 ✅
**Failed:** 0 ❌
**Success Rate:** 100%

## Test Details

### Constants Tests (16/16 passed)

**File:** `constants/__tests__/clickPatterns`

- ✅ should export an array of click patterns (1.3788210000000163ms)
- ✅ should have patterns with required properties (2.287284999999997ms)
- ✅ should have unique values (0.1654280000000199ms)
- ✅ should include Off pattern (0.20196600000008402ms)
- ✅ should include 16th notes pattern (0.15377599999999347ms)
- ✅ should include 8th note triplets pattern (0.22880699999996068ms)
- ✅ should include 8th notes pattern (0.14368799999999737ms)
- ✅ should include quarter note triplets pattern (0.13466000000005351ms)
- ✅ should include quarter notes pattern (0.3569149999999581ms)
- ✅ should include half note triplets pattern (0.17001700000002984ms)
- ✅ should include half notes pattern (0.17044799999996485ms)
- ✅ should include whole notes pattern (0.12337000000002263ms)
- ✅ should have patterns in ascending order by beatsPerClick (0.24312399999996614ms)
- ✅ should be defined (0.11938299999997071ms)
- ✅ should be the quarter notes pattern (0.14263599999992493ms)
- ✅ should be included in CLICK_PATTERNS (1.0212150000000975ms)

### Constants Tests (9/9 passed)

**File:** `constants/__tests__/durations`

- ✅ should have 4 duration types (1.803192000000081ms)
- ✅ should have all durations with name and beats properties (0.9434390000000121ms)
- ✅ should have whole note with 8 beats (0.19878099999993992ms)
- ✅ should have half note with 4 beats (0.20902000000000953ms)
- ✅ should have quarter note with 2 beats (0.14141399999994064ms)
- ✅ should have eighth note with 1 beat (0.20533300000010968ms)
- ✅ should be ordered from longest to shortest (0.2289059999999381ms)
- ✅ should have display names for all durations (0.2556359999999813ms)
- ✅ should have proper capitalized names (0.2934669999999642ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/instruments`

- ✅ should have B_FLAT_TRUMPET configuration (1.4498930000000883ms)
- ✅ should have DEFAULT_INSTRUMENT set to B♭ Trumpet (0.254615000000058ms)
- ✅ should have clef property (0.14528099999995447ms)
- ✅ should have comfortable range (0.23555899999996655ms)
- ✅ should have full range (0.22832600000003822ms)
- ✅ should return concert pitch when instrument is null (0.17507599999999002ms)
- ✅ should return concert pitch when transposition is 0 (0.13269800000000487ms)
- ✅ should transpose down 2 semitones for B♭ trumpet (0.23983799999996336ms)
- ✅ should transpose C4 correctly for B♭ trumpet (0.24175100000002203ms)
- ✅ should transpose B4 correctly for B♭ trumpet (0.14326700000003711ms)
- ✅ should maintain octave relationships after transposition (0.12940200000002733ms)
- ✅ should use the correct transposition formula (0.10069800000007945ms)

### Constants Tests (12/12 passed)

**File:** `constants/__tests__/notes`

- ✅ should have exactly 61 notes (5 octaves from C2 to C7) (1.7732059999999592ms)
- ✅ should start with C2 at concert pitch (0.4045939999999746ms)
- ✅ should end with C7 at concert pitch (0.19818999999995413ms)
- ✅ should have all notes as objects with name and frequency (4.987391000000002ms)
- ✅ should have frequencies in ascending order (0.9357949999999846ms)
- ✅ should include all chromatic notes (12 per octave) (1.5162970000000087ms)
- ✅ should have A4 at standard concert pitch (440 Hz) (0.2639120000000048ms)
- ✅ should have correct MIN_INDEX (0.11397199999998975ms)
- ✅ should have correct MAX_INDEX (0.23129099999994196ms)
- ✅ should have DEFAULT_MIN pointing to C4 (0.14772600000003422ms)
- ✅ should have DEFAULT_MAX pointing to B4 (0.10237099999994825ms)
- ✅ should have DEFAULT_MAX greater than DEFAULT_MIN (0.10585700000001452ms)

### Hooks Tests (19/19 passed)

**File:** `hooks/__tests__/useAudioEngine`

- ✅ should initialize audio engine (126.20869900000002ms)
- ✅ should handle suspended audio context (104.50987800000007ms)
- ✅ should return audio engine readiness status (104.78184899999997ms)
- ✅ should get current audio time (103.57736899999986ms)
- ✅ should respect soundEnabled prop initially true (105.6605770000001ms)
- ✅ should respect soundEnabled prop initially false (103.18597999999997ms)
- ✅ should update soundEnabled via ref when prop changes (104.92014500000005ms)
- ✅ should play click sound when audio ready and sound enabled (104.25315299999988ms)
- ✅ should not play click sound when audio not ready (3.027896000000055ms)
- ✅ should not play click sound when sound disabled (102.71283900000003ms)
- ✅ should play note sound when audio ready and sound enabled (102.93739800000003ms)
- ✅ should not play note sound when audio not ready (2.206122999999934ms)
- ✅ should not play note sound when sound disabled (102.15180299999975ms)
- ✅ should calculate correct duration from tempo and beats (103.16601500000024ms)
- ✅ should close audio context on cleanup (101.67675499999996ms)
- ✅ should not error when closing uninitialized audio (1.908889000000272ms)
- ✅ should handle multiple init calls gracefully (303.5937250000002ms)
- ✅ should return 0 for getCurrentTime when audio not initialized (1.9691840000000411ms)
- ✅ should handle webkitAudioContext fallback (102.4058070000001ms)

### Hooks Tests (31/31 passed)

**File:** `hooks/__tests__/useMetronome`

- ✅ should initialize with default values (13.200963000000002ms)
- ✅ should initialize with random note from provided notes (1.9154920000000857ms)
- ✅ should initialize with random duration from provided durations (1.685842999999977ms)
- ✅ should update tempo (3.1416569999998956ms)
- ✅ should handle tempo as string (from input) (1.9069660000000113ms)
- ✅ should clamp tempo to valid range (1.9663560000001326ms)
- ✅ should handle invalid tempo input (1.5512220000000525ms)
- ✅ should toggle play state from stopped to playing (1.2048160000001644ms)
- ✅ should toggle play state from playing to stopped (2.4847829999998794ms)
- ✅ should reset beat to 0 when stopping (1.642802999999958ms)
- ✅ should toggle sound from enabled to disabled (1.0301899999999478ms)
- ✅ should toggle sound from disabled to enabled (1.131829999999809ms)
- ✅ should toggle staff display from hidden to visible (1.0678110000001197ms)
- ✅ should toggle staff display from visible to hidden (1.0560289999998531ms)
- ✅ should initialize with default click pattern (0.9912979999999152ms)
- ✅ should update click pattern (0.986028000000033ms)
- ✅ should change from quarter to whole note pattern (1.0125379999999495ms)
- ✅ should change to triplet pattern (1.0132300000000214ms)
- ✅ should change to off pattern (0.9614730000000691ms)
- ✅ should update range min (1.0141209999999319ms)
- ✅ should update range max (1.3590340000000651ms)
- ✅ should ensure min does not exceed max (2.4551279999998314ms)
- ✅ should ensure max does not go below min (1.3839309999998477ms)
- ✅ should update current note (2.4808550000000196ms)
- ✅ should update current duration (6.004676000000018ms)
- ✅ should update current beat (5.034697000000051ms)
- ✅ should maintain stable callback references (3.4246969999999237ms)
- ✅ should handle empty notes array gracefully (0.9045470000000932ms)
- ✅ should handle single note (0.9669129999999768ms)
- ✅ should handle single duration (0.6734050000000025ms)
- ✅ should handle rapid state changes (1.1736880000000838ms)

### Services Tests (14/14 passed)

**File:** `services/__tests__/durationSelector`

- ✅ should return a duration from the array (2.1912459999999783ms)
- ✅ should return a duration object with name and beats (0.4319560000000138ms)
- ✅ should select different durations over multiple calls (0.3142059999998992ms)
- ✅ should handle single duration array (0.22231399999998303ms)
- ✅ should return a duration from the array (0.46909499999992477ms)
- ✅ should use default weights if none provided (0.1948530000000801ms)
- ✅ should respect custom weights (0.44627200000002176ms)
- ✅ should handle partial weight objects (0.24283300000001873ms)
- ✅ should handle zero weights correctly (0.4192519999999149ms)
- ✅ should follow the pattern in order (0.24151100000005954ms)
- ✅ should loop the pattern (0.24277300000005653ms)
- ✅ should handle single element pattern (0.16886399999998503ms)
- ✅ should return fallback for unknown duration name (0.13666500000010728ms)
- ✅ should handle large indices (0.08901600000001508ms)

### Services Tests (9/9 passed)

**File:** `services/__tests__/noteSelector`

- ✅ should return a note from the specified range (2.1903939999999693ms)
- ✅ should return a note different from current note (0.4316350000000284ms)
- ✅ should return the only note if range contains single note (0.22570099999995819ms)
- ✅ should respect min and max indices (0.7727300000000241ms)
- ✅ should handle edge case where current note is the only option (0.12657600000000002ms)
- ✅ should select note within specified interval (0.28428999999994176ms)
- ✅ should return null if current note not found (0.1504899999999907ms)
- ✅ should return null if no notes in interval range (0.1663300000000163ms)
- ✅ should include notes both above and below current note (0.35189600000001064ms)

### Utils Tests (14/14 passed)

**File:** `utils/__tests__/formatting`

- ✅ should format natural notes unchanged (1.2697180000000117ms)
- ✅ should convert # to ♯ symbol (0.32174000000009073ms)
- ✅ should handle multiple sharps in name (edge case) (0.15056099999992512ms)
- ✅ should convert sharps to flats (0.4573530000000119ms)
- ✅ should return natural notes unchanged (0.17137000000002445ms)
- ✅ should format whole note (0.1695959999999559ms)
- ✅ should format half note (0.1961549999999761ms)
- ✅ should format quarter note (0.12456300000008014ms)
- ✅ should format eighth note (0.23578999999995176ms)
- ✅ should return capitalized name for whole note (0.16739299999994728ms)
- ✅ should return capitalized name for half note (0.0993149999999332ms)
- ✅ should return capitalized name for quarter note (0.08237399999995887ms)
- ✅ should return capitalized name for eighth note (0.0826040000000603ms)
- ✅ should return input for unknown duration (0.07257500000002892ms)

### Utils Tests (34/34 passed)

**File:** `utils/__tests__/notePositions`

- ✅ should calculate E4 at y=90 (bottom staff line) (1.3859130000000732ms)
- ✅ should calculate F4 at y=82.5 (first space) (0.297294000000079ms)
- ✅ should calculate G4 at y=75 (second line) (0.16527899999994133ms)
- ✅ should calculate B4 at y=60 (middle line) (0.15714299999990544ms)
- ✅ should calculate C5 at y=52.5 (space above B4) (0.2616480000000365ms)
- ✅ should calculate D5 at y=45 (fourth line) (0.1670720000000756ms)
- ✅ should calculate F5 at y=30 (top line) (0.12744799999995848ms)
- ✅ should calculate C4 below staff at y=105 (0.10856200000000626ms)
- ✅ should calculate D4 below staff at y=97.5 (0.3668040000000019ms)
- ✅ should place C#4 at same position as C4 (diatonic spacing) (0.18186900000000605ms)
- ✅ should handle octave changes correctly (0.14517100000000482ms)
- ✅ should handle very low notes (C2) (0.18533499999989544ms)
- ✅ should handle very high notes (C7) (0.14545099999998ms)
- ✅ should calculate G2 at y=90 (bottom staff line in bass clef) (0.12655599999993683ms)
- ✅ should calculate A2 at y=82.5 (first space in bass clef) (0.09205200000008062ms)
- ✅ should calculate B2 at y=75 (second line in bass clef) (0.0825839999999971ms)
- ✅ should calculate D3 at y=60 (middle line in bass clef) (0.08299499999998261ms)
- ✅ should calculate F3 at y=45 (fourth line in bass clef) (0.0800090000000182ms)
- ✅ should calculate A3 at y=30 (top line in bass clef) (0.07947899999999208ms)
- ✅ should calculate E2 below staff in bass clef (0.08306500000003325ms)
- ✅ should calculate C4 above staff in bass clef (0.08482800000001589ms)
- ✅ should place sharp notes at same position as natural notes in bass clef (0.09301299999992807ms)
- ✅ should parse natural note correctly (0.6063410000000431ms)
- ✅ should parse sharp note correctly (0.1536670000000413ms)
- ✅ should handle low octaves (0.09841399999993428ms)
- ✅ should handle high octaves (0.16972599999996874ms)
- ✅ should correctly identify all natural notes (0.34137699999996585ms)
- ✅ should return empty array for notes on the staff (0.37567999999998847ms)
- ✅ should generate ledger lines below staff for C4 (0.7158939999999347ms)
- ✅ should generate ledger lines below staff for D4 (0.10504700000001321ms)
- ✅ should generate ledger lines above staff for G5 (0.09584800000004634ms)
- ✅ should generate more ledger lines for notes further from staff (0.20895899999993617ms)
- ✅ should return ledger lines in correct order (0.1531559999999672ms)
- ✅ should return ledger lines in correct order for above staff (0.07177400000000489ms)

### Utils Tests (28/28 passed)

**File:** `utils/__tests__/validation`

- ✅ should validate valid range (1.4191359999999804ms)
- ✅ should swap min and max if min > max (0.3248759999999038ms)
- ✅ should reject min below 0 (0.2910030000000461ms)
- ✅ should reject max above total notes (0.15924699999993663ms)
- ✅ should allow min === max (0.1474150000000236ms)
- ✅ should keep max if min < max (0.1847339999999349ms)
- ✅ should adjust max to equal min if min > max (0.12318000000004758ms)
- ✅ should handle equal values (0.13594299999999748ms)
- ✅ should keep min if max > min (0.25527599999998074ms)
- ✅ should adjust min to equal max if max < min (0.1374959999999419ms)
- ✅ should handle equal values (0.09073000000000775ms)
- ✅ should have correct default values (0.16024900000002162ms)
- ✅ should have default between min and max (0.18544599999995626ms)
- ✅ should return value within range unchanged (0.12837899999999536ms)
- ✅ should clamp value below minimum (0.12107600000001639ms)
- ✅ should clamp value above maximum (0.09234300000002804ms)
- ✅ should return min/max at boundaries (0.09092999999995754ms)
- ✅ should validate tempo within range (0.19605599999999868ms)
- ✅ should reject non-number values (0.1264449999999897ms)
- ✅ should reject NaN (0.09964500000000953ms)
- ✅ should reject tempo below minimum (0.21088300000008076ms)
- ✅ should reject tempo above maximum (0.13241600000003473ms)
- ✅ should accept boundary values (0.10103900000001431ms)
- ✅ should return 0% for minimum tempo (0.1610210000000052ms)
- ✅ should return 100% for maximum tempo (0.08126200000003792ms)
- ✅ should return 50% for midpoint tempo (0.07918799999993098ms)
- ✅ should return 40% for tempo 120 (0.0702609999999595ms)
- ✅ should return correct percentages for various tempos (0.18701899999996385ms)

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
