# QA Report: Issue #28 -- Phase 7: Level Progression UI

**Role:** qa-expert
**Date:** 2026-03-11
**Issue:** #28 -- Phase 7: Level Progression UI
**Labels:** enhancement, epic, phase-7, size:XL

---

## 1. Test Strategy Overview

### 1.1 Scope

Issue #28 introduces level progression end-to-end. Five logical sub-issues require testing, spanning hooks, context, components, and integration:

| Sub-Issue | Description | Type | Estimated New Tests |
|---|---|---|---|
| 28.1 | Wire `currentLevel` from profile through game loop | Plumbing / integration | 20-25 |
| 28.2 | Level-up celebration screen | New component | 25-30 |
| 28.3 | Level map visualization on StartScreen | New component | 20-25 |
| 28.4 | Max-level (level 13) handling | Edge case logic | 10-15 |
| 28.5 | Persistence via profile system | Integration / storage | 10-15 |

**Estimated total new tests:** 85-110
**Current test count:** 613
**Post-merge target:** ~700-723

### 1.2 Testing Framework & Conventions (Established Patterns)

- **Runner:** Vitest with happy-dom environment (`@vitest-environment happy-dom` directive)
- **Library:** `@testing-library/react` (render, screen, fireEvent, act, cleanup)
- **Hooks:** `renderHook` + `act()` from `@testing-library/react`
- **Mocking:** `vi.mock()` for module mocks, `vi.fn()` for callbacks, `vi.useFakeTimers()` for timer control
- **Patterns:** `defaultProps` + `renderXxx(overrides)` helper, `describe` blocks by feature, `data-testid` for test queries, `aria-label`/`aria-live` for a11y queries
- **Prop validation:** `prop-types` (no TypeScript)
- **ESM compat:** `await import()` after `vi.mock()`
- **Cleanup:** explicit `cleanup()` in `afterEach`

### 1.3 Test File Locations

```
src/hooks/useGameState.test.js             (MODIFY -- add level wiring tests)
src/components/GameScreen.test.jsx          (CREATE -- currently does not exist)
src/components/LevelUpScreen.test.jsx       (CREATE -- new celebration component)
src/components/LevelMap.test.jsx            (CREATE -- new level map component)
src/App.test.jsx                            (MODIFY -- add level-up navigation flow)
src/context/ProfileContext.test.jsx         (MODIFY -- add updateProfile level tests)
src/utils/profiles.test.js                  (MODIFY -- add currentLevel persistence tests)
```

---

## 2. Sub-Issue 28.1: Wire `currentLevel` Through Game Loop

### 2.1 Current State Analysis

**Critical finding:** `currentLevel` is currently hardcoded in two places:
1. `useGameState({ currentLevel = 2 })` -- default parameter, acceptable
2. `GameScreen.jsx` line 112: `<LearningAid currentLevel={2} />` -- **HARDCODED, must be fixed**
3. `App.jsx` does NOT pass `currentLevel` from `activeProfile` to `GameScreen`

The profile object contains `currentLevel` (set to 1 on creation via `createProfile`), but it is never plumbed to the game loop.

### 2.2 Test Scenarios

#### useGameState Hook Tests (modify existing file)

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| W-1 | `useGameState({ currentLevel: 5 })` calls `getLevelConfig(5)` on `startGame()` | getLevelConfig receives 5 | P0 |
| W-2 | `useGameState({ currentLevel: 5 })` calls `getLevelConfig(5)` on `nextProblem()` (via handleAnswer feedback timeout) | New problems use level 5 config | P0 |
| W-3 | Changing `currentLevel` prop from 2 to 5 (via rerender) generates next problem with new level | `getLevelConfig` called with new level after rerender | P0 |
| W-4 | Default `currentLevel` is 2 when not provided (existing test, verify preserved) | getLevelConfig(2) | P0 (regression) |

**Note:** W-3 tests for the stale closure risk. `startGame` and `nextProblem` use `currentLevel` from their `useCallback` dependency array. If the component rerenders with a new level, the callbacks must pick up the new value.

#### GameScreen Component Tests (new file)

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| GS-1 | GameScreen receives `currentLevel` prop and passes it to `useGameState` | useGameState called with correct level | P0 |
| GS-2 | GameScreen passes `currentLevel` to `LearningAid` component | LearningAid receives dynamic level, not hardcoded 2 | P0 |
| GS-3 | GameScreen without `currentLevel` prop defaults to level from profile | Falls back to profile's currentLevel | P1 |

#### App Component Tests (modify existing file)

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| A-1 | App passes `activeProfile.currentLevel` to GameScreen | GameScreen receives currentLevel=N from profile | P0 |
| A-2 | App with profile `currentLevel: 7` starts game at level 7 | Problem generation uses level 7 config | P0 |
| A-3 | Profile with `currentLevel: 1` (new profile default) works correctly | Game starts at level 1 | P0 |

### 2.3 Stale Closure Risk Test

This is the highest-priority technical risk in the entire issue.

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| SC-1 | After level-up acknowledgement triggers level change, `handleAnswer` timeout calls `nextProblem` with NEW level, not old level | Problem generated for level N+1 | P0 |
| SC-2 | Rapid level re-render (level changes from 3 to 4): pending `feedbackTimeoutRef` still points to nextProblem; verify the new problem uses level 4 | No stale closure on the old level | P0 |

---

## 3. Sub-Issue 28.2: Level-Up Celebration Screen

### 3.1 Trigger Logic

The celebration screen must appear when `shouldLevelUp === true`. Currently, `shouldLevelUp` is sticky (stays true after wrong answers) and is cleared by `acknowledgeLevelUp()`.

**Flow:** `shouldLevelUp` becomes true -> game pauses auto-advance -> show celebration -> user clicks "Continue to Level N!" -> `acknowledgeLevelUp()` called + profile level incremented -> resume game at new level

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| T-1 | Celebration screen renders when `shouldLevelUp` is true | LevelUpScreen visible | P0 |
| T-2 | Celebration screen does NOT render when `shouldLevelUp` is false | LevelUpScreen not in DOM | P0 |
| T-3 | Auto-advance timer (2000ms feedback) is paused/cleared when shouldLevelUp triggers mid-feedback | No race between nextProblem and celebration | P0 |
| T-4 | shouldLevelUp triggers exactly when score >= 85 AND streak >= 3 | Verified by existing useConfidence tests (regression) | P0 |

### 3.2 Celebration Screen Component Tests

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| CS-1 | Renders with current level number (N) and next level number (N+1) | Shows "Level N+1!" or similar | P0 |
| CS-2 | Displays hero avatar based on active profile theme (sonic/spiderman) | Correct theme imagery | P1 |
| CS-3 | "Continue to Level N+1!" button is present and clickable | Button renders, onClick fires | P0 |
| CS-4 | Clicking continue button calls `onContinue` callback | Callback invoked once | P0 |
| CS-5 | Shows the new level's name from LEVELS config (e.g., "Minus Magic") | Level name displayed | P1 |
| CS-6 | Celebration animation plays (confetti/stars) | Animation elements present in DOM | P2 |
| CS-7 | Animation respects `prefers-reduced-motion` | `motion-reduce:` class applied | P1 |
| CS-8 | Component has appropriate `aria-live="assertive"` for screen readers | Announced to assistive tech | P1 |
| CS-9 | Component has `role="alertdialog"` or `role="dialog"` | Correct ARIA role | P1 |

### 3.3 Auto-Advance Race Condition (CRITICAL)

This is the most dangerous bug in the entire issue. The current `handleAnswer` function sets a 2000ms `feedbackTimeoutRef` that calls `nextProblem()`. If `shouldLevelUp` becomes true during that 2000ms window, the timeout must be intercepted.

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| RC-1 | User answers correctly (triggers shouldLevelUp). 2000ms feedback timeout fires. nextProblem must NOT execute; celebration screen shown instead | No new problem generated while celebration is showing | P0 |
| RC-2 | User answers correctly but shouldLevelUp was already true (sticky). Feedback timeout fires. nextProblem must still not execute | Celebration screen takes priority | P0 |
| RC-3 | feedbackTimeoutRef is cleared when celebration screen mounts | Timeout cancelled | P0 |
| RC-4 | After acknowledging level-up, new problem is generated at the NEW level | Problem uses level N+1 config | P0 |
| RC-5 | User answers correctly but does NOT trigger shouldLevelUp. Feedback timeout fires normally, nextProblem executes | Normal game flow preserved | P0 (regression) |

### 3.4 Integration with GameScreen

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| GI-1 | GameScreen shows celebration overlay/screen when shouldLevelUp is true | LevelUpScreen rendered inside GameScreen | P0 |
| GI-2 | Answer buttons are disabled while celebration is showing | Cannot answer problems during celebration | P0 |
| GI-3 | Exit button remains functional during celebration | User can exit even while celebrating | P1 |
| GI-4 | Celebration dismissal resumes game flow (new problem at new level) | Game continues after acknowledgement | P0 |
| GI-5 | Score display continues to show during celebration (no flash/reset) | Score persists visually | P1 |

---

## 4. Sub-Issue 28.3: Level Map on StartScreen

### 4.1 LevelMap Component Tests

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| LM-1 | Renders 13 level nodes/checkpoints | 13 elements with level identifiers | P0 |
| LM-2 | Completed levels (< currentLevel) show "completed" visual state | Distinct styling (e.g., green/gold) | P0 |
| LM-3 | Current level shows "active" visual state | Distinct styling (e.g., pulsing/highlighted) | P0 |
| LM-4 | Future levels (> currentLevel) show "locked" visual state | Distinct styling (e.g., gray/dimmed + lock icon) | P0 |
| LM-5 | Level 1 with currentLevel=1: only level 1 active, all others locked | Correct boundary state | P0 |
| LM-6 | Level 13 with currentLevel=13: all levels completed or active, none locked | Correct max-level state | P0 |
| LM-7 | Each node displays the level name from LEVELS config | Names match config | P1 |
| LM-8 | Each node displays the level number | Numbers 1-13 visible | P0 |
| LM-9 | Map is scrollable/navigable on small screens (13 levels may overflow) | Scroll or responsive layout works | P1 |
| LM-10 | Road/path visual connects all 13 checkpoints | Path element exists in DOM | P1 |

### 4.2 Accessibility

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| LMA-1 | Each level node has appropriate `aria-label` (e.g., "Level 3: Minus Magic - Completed") | Descriptive labels | P0 |
| LMA-2 | Locked levels are `aria-disabled="true"` | Correct ARIA state | P1 |
| LMA-3 | Current level node has `aria-current="true"` | Identifies active level | P1 |
| LMA-4 | Component has a heading or `aria-label` for the overall map | "Level Map" or similar | P1 |

### 4.3 StartScreen Integration

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| SS-1 | StartScreen renders LevelMap when `currentLevel` is provided | LevelMap visible | P0 |
| SS-2 | StartScreen passes correct `currentLevel` from profile to LevelMap | Level map reflects profile state | P0 |
| SS-3 | StartScreen still renders progress stats alongside level map | Both elements visible | P1 |
| SS-4 | StartScreen layout is stable with level map added (no layout shift) | CLS < 0.1 | P2 |

---

## 5. Sub-Issue 28.4: Max-Level (Level 13) Handling

### 5.1 Test Scenarios

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| ML-1 | When currentLevel=13 and shouldLevelUp triggers, celebration shows "Max Level! You are a Math Champion!" | Special max-level message | P0 |
| ML-2 | No level increment beyond 13 (currentLevel stays at 13) | Profile update NOT called with level 14 | P0 |
| ML-3 | Continue button on max-level celebration says "Keep Playing!" (not "Continue to Level 14!") | Appropriate button text | P0 |
| ML-4 | After max-level celebration, game resumes at level 13 (same level) | Game continues at level 13 | P0 |
| ML-5 | getLevelConfig(14) throws an error -- code must guard against this | Error boundary or guard check | P0 |
| ML-6 | Level map shows all 13 levels as completed when at max level | All nodes in completed/active state | P0 |
| ML-7 | shouldLevelUp can still trigger at level 13 (confidence engine is level-agnostic) | shouldLevelUp works, but level stays 13 | P1 |
| ML-8 | Profile persistence does NOT write currentLevel > 13 | Validated at storage layer | P0 |

### 5.2 Boundary Tests

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| MB-1 | Level 12 -> 13 transition: celebration shows normal "Level 13!" | Normal level-up flow | P0 |
| MB-2 | Level 13 -> 13 transition: no level increment, special celebration | Max-level celebration | P0 |
| MB-3 | Level 1 with immediate shouldLevelUp (contrived): advances to level 2 | Normal progression works from minimum | P1 |

---

## 6. Sub-Issue 28.5: Persistence via Profile System

### 6.1 Profile `currentLevel` Persistence Tests

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| PP-1 | After level-up acknowledgement, `updateProfile(id, { currentLevel: N+1 })` is called | Profile updated in localStorage | P0 |
| PP-2 | `updateProfile` correctly merges `currentLevel` while preserving other fields | No field loss (nickname, theme, pinHash intact) | P0 |
| PP-3 | After profile update, `activeProfile` in context reflects new `currentLevel` | Context state synced | P0 |
| PP-4 | Session refresh (reload): profile loaded from localStorage has updated `currentLevel` | Persistence survives refresh | P0 |
| PP-5 | Multiple level-ups in one session: currentLevel goes from 3 to 5 (two celebrations) | Both increments persisted | P1 |
| PP-6 | Level-up during offline state: localStorage update succeeds (localStorage is sync) | No error | P1 |
| PP-7 | Profile switch mid-game: new profile's `currentLevel` is used, not the previous profile's | Clean level transition | P1 |

### 6.2 Profile Context Integration

| # | Test Case | Expected Behavior | Priority |
|---|---|---|---|
| PC-1 | `useProfile().updateProfile(id, { currentLevel: 5 })` dispatches UPDATE_PROFILE | Reducer updates state correctly | P0 |
| PC-2 | `activeProfile` in context reflects the new `currentLevel` after update | Downstream consumers see new level | P0 |
| PC-3 | Multiple profiles at different levels: switching profiles loads correct level | Level isolation per profile | P0 |

---

## 7. Edge Cases & Boundary Conditions (Cross-Cutting)

| # | Scenario | Components Affected | Priority |
|---|---|---|---|
| E-1 | Rapid level-ups: user triggers shouldLevelUp, acknowledges, immediately triggers again in same session | Celebration, profile persistence, game loop | P0 |
| E-2 | shouldLevelUp triggers on the LAST correct answer before user clicks exit | Celebration should show, NOT result screen | P0 |
| E-3 | Profile with `currentLevel: undefined` or missing (corrupt data) | Default to level 1 or throw informative error | P1 |
| E-4 | Profile with `currentLevel: 0` (below valid range) | Guard against invalid level in getLevelConfig | P1 |
| E-5 | Profile with `currentLevel: 14` (above valid range, corrupt) | Guard: clamp to 13 or throw | P1 |
| E-6 | User switches profile during celebration screen (clicks exit -> switch profile) | Clean state transition, no stale level | P1 |
| E-7 | shouldLevelUp is sticky: user gets wrong answers after trigger, celebration still shows | Sticky behavior preserved (existing useConfidence behavior) | P0 |
| E-8 | LearningAid `currentLevel` updates when profile level changes mid-session | Aid type changes (e.g., DotCounter for level 4, StrategyHint for level 5) | P1 |
| E-9 | GameScreen unmounts during celebration (user force-closes tab/navigates) | No memory leak from feedbackTimeoutRef or pending state updates | P2 |
| E-10 | Two consecutive shouldLevelUp triggers without acknowledgement (should not happen due to reset, but defensive) | Second trigger is a no-op; first celebration handles it | P2 |
| E-11 | Browser back/forward button during celebration | Graceful handling (PWA has no router, so this is a tab-close scenario) | P3 |
| E-12 | Level map renders correctly when currentLevel is updated optimistically (before localStorage confirms) | Map reflects immediate state | P2 |

---

## 8. Regression Risk Assessment

### 8.1 High Risk (Must Regression Test)

- **useGameState return values:** Adding level-up interception to handleAnswer/nextProblem could break the normal game loop. All 26 existing tests MUST pass.
- **useConfidence behavior:** shouldLevelUp, acknowledgeLevelUp, reset are the interfaces consumed by this feature. All 46 existing tests MUST pass.
- **App navigation flow:** Adding a celebration screen introduces a new "screen state" between game and result. The 7 existing App navigation tests (start -> game -> result -> play again -> exit) MUST still work.
- **GameScreen rendering:** The component tree changes significantly (new currentLevel prop, celebration overlay). The existing `startGame()` call on mount must still work.
- **Profile CRUD:** `updateProfile` is called more frequently now (on every level-up). The 67 existing profile tests must pass.
- **LearningAid level routing:** `currentLevel` changes from hardcoded 2 to dynamic. All 30 LearningAid tests + 11 integration tests must pass.

### 8.2 Medium Risk

- **Timer interactions:** The feedbackTimeoutRef (2000ms) must be intercepted for level-up but NOT for normal flow. Fake timer tests are essential.
- **Score persistence:** `handleAnswer` calls `updateProgress` inside setState. Adding level-up logic to the same path increases complexity.
- **StartScreen layout:** Adding a LevelMap component changes the layout. Progress display and start button must remain functional.

### 8.3 Low Risk

- **ProfileSwitcher, PinEntry, CreateProfile:** Not directly modified.
- **Firebase/auth:** No data model changes (level is in localStorage, not Firestore).
- **Build/deploy:** New components only; no config changes needed.
- **DotCounter, NumberLine, StrategyHint:** Not modified, but LearningAid receives dynamic currentLevel (verify aid selection still correct).

---

## 9. Regression Test Plan

### 9.1 Mandatory Regression Suite (All Must Pass)

| Test File | Tests | Notes |
|---|---|---|
| `src/hooks/useGameState.test.js` | 26 | Core game loop -- verify no breakage from level-up interception |
| `src/hooks/useConfidence.test.js` | 46 | shouldLevelUp trigger/acknowledge/sticky behavior |
| `src/config/levels.test.js` | 4 | getLevelConfig boundary (0, 14 throw) |
| `src/utils/profiles.test.js` | 67 | updateProfile currentLevel merge |
| `src/context/ProfileContext.test.jsx` | varies | UPDATE_PROFILE action handling |
| `src/context/profileReducer.test.js` | varies | Reducer state transitions |
| `src/App.test.jsx` | ~17 | Navigation flow (start -> game -> result) |
| `src/components/aids/LearningAid.test.jsx` | 30 | Aid selection by level (now dynamic, was hardcoded) |
| `src/utils/strategies.test.js` | 74 | Strategy detection (unaffected but in confidence path) |

**Total regression:** ~264+ tests from existing suite

### 9.2 Regression Execution Command

```bash
npx vitest run
```

All 613 existing tests must pass before AND after each sub-issue merge.

---

## 10. Quality Metrics & Success Criteria

### 10.1 Coverage Targets

| Metric | Target |
|---|---|
| Line coverage for new files (LevelUpScreen, LevelMap) | >= 90% |
| Branch coverage for level-up trigger logic in GameScreen | 100% |
| Branch coverage for max-level handling | 100% |
| Branch coverage for profile currentLevel persistence | >= 95% |
| All P0 test cases pass | 100% |
| All existing 613 tests still pass | 100% |

### 10.2 Performance Criteria

| Metric | Target |
|---|---|
| Celebration screen render time (first paint) | < 100ms |
| Level map render time (13 nodes) | < 150ms |
| No layout shift on StartScreen when level map is added | CLS < 0.1 |
| Celebration animation total time | 1-3s (engaging but not blocking) |
| Continue button visible within 500ms of celebration start | Immediate actionability |

### 10.3 Accessibility Criteria

| Metric | Target |
|---|---|
| Celebration screen announced to screen readers | `aria-live="assertive"` |
| Level map nodes have descriptive aria-labels | Yes |
| Locked level nodes are `aria-disabled` | Yes |
| All interactive elements keyboard-accessible | Yes |
| `prefers-reduced-motion` honored on celebration animation | Yes |
| Touch targets >= 44x44px (child-friendly) | Yes |

---

## 11. Test Data Requirements

### 11.1 Mock Profile Objects

```javascript
// Profile at various levels
const profileLevel1 = { id: 'p1', nickname: 'Dubi', theme: 'sonic', currentLevel: 1, firebaseUid: 'uid-1' }
const profileLevel7 = { id: 'p2', nickname: 'Spider', theme: 'spiderman', currentLevel: 7, firebaseUid: 'uid-2' }
const profileLevel12 = { id: 'p3', nickname: 'Champ', theme: 'sonic', currentLevel: 12, firebaseUid: 'uid-3' }
const profileMaxLevel = { id: 'p4', nickname: 'Master', theme: 'sonic', currentLevel: 13, firebaseUid: 'uid-4' }
const profileCorrupt = { id: 'p5', nickname: 'Bug', theme: 'sonic', currentLevel: 0, firebaseUid: 'uid-5' }
```

### 11.2 Level Config Mocks

```javascript
// Already available via vi.mock('../config/levels')
// getLevelConfig mock should return appropriate config for any level 1-13
// Must throw for level 0 and level 14
```

### 11.3 Celebration Screen Props

```javascript
const celebrationPropsNormal = {
  currentLevel: 3,
  nextLevel: 4,
  levelName: 'Mixed Warrior',
  theme: 'sonic',
  onContinue: vi.fn(),
}

const celebrationPropsMaxLevel = {
  currentLevel: 13,
  nextLevel: null, // or 13
  levelName: 'Math Champion',
  theme: 'sonic',
  onContinue: vi.fn(),
}
```

---

## 12. Bug Triage Priorities (Anticipated)

| Severity | Category | Example |
|---|---|---|
| P0 - Blocker | Race condition: auto-advance fires during celebration | nextProblem() called while LevelUpScreen is visible, causing flash/crash |
| P0 - Blocker | Level increment beyond 13 | currentLevel becomes 14, getLevelConfig throws, app crashes |
| P0 - Blocker | Stale closure: new problems use old level config | After level-up, problems are still generated for old level |
| P0 - Blocker | Level not persisted | User levels up but after refresh, profile shows old level |
| P1 - Major | Celebration screen blocks exit | User cannot leave game during celebration |
| P1 - Major | Level map shows wrong state | Completed levels shown as locked, or vice versa |
| P1 - Major | Profile switch during celebration causes crash | Stale profile reference in celebration callback |
| P1 - Major | LearningAid shows wrong aid type after level change | DotCounter for level 5+ or StrategyHint for level 1-4 |
| P2 - Minor | Celebration animation stutters on low-end device | Performance issue, not functional |
| P2 - Minor | Level map doesn't scroll on very small screens | Layout overflow issue |
| P3 - Cosmetic | Level names truncated on narrow screens | Text overflow styling |
| P3 - Cosmetic | Celebration theme (sonic/spiderman) doesn't match profile | Wrong hero image |

---

## 13. Recommended Test Execution Order

1. **useGameState level wiring tests (W-1 through W-4, SC-1, SC-2)** -- foundation, no UI
2. **Max-level guard tests (ML-1 through ML-8)** -- logic before component
3. **Profile persistence tests (PP-1 through PP-7)** -- storage layer
4. **LevelUpScreen component tests (CS-1 through CS-9)** -- new component, isolated
5. **LevelMap component tests (LM-1 through LM-10)** -- new component, isolated
6. **Race condition tests (RC-1 through RC-5)** -- critical integration, needs fake timers
7. **GameScreen integration tests (GI-1 through GI-5)** -- ties it all together
8. **App navigation tests (A-1 through A-3)** -- full flow with level-up
9. **Edge case tests (E-1 through E-12)** -- stress testing
10. **Full regression suite run** -- all 613 existing + new tests green

---

## 14. Test Effort Estimates

| Sub-Issue | Test Design | Test Implementation | Total |
|---|---|---|---|
| 28.1: Wire currentLevel | 1h | 3h | 4h |
| 28.2: Celebration screen | 2h | 5h | 7h |
| 28.3: Level map | 1.5h | 4h | 5.5h |
| 28.4: Max-level handling | 1h | 2h | 3h |
| 28.5: Persistence | 1h | 2.5h | 3.5h |
| Race condition tests (cross-cutting) | 1.5h | 3h | 4.5h |
| Regression validation | -- | 1h | 1h |
| **Total** | **8h** | **20.5h** | **28.5h** |

---

## 15. Risks & Concerns

1. **Auto-advance race condition is the #1 risk.** The current `handleAnswer` unconditionally sets a 2000ms `setTimeout` that calls `nextProblem()`. When `shouldLevelUp` becomes true mid-feedback, this timeout MUST be intercepted. Failure to do so results in a flash (new problem appears, then celebration overlays it) or worse (celebration never shows because nextProblem resets state). This requires careful fake-timer testing with exact sequence control.

2. **Stale closure in `nextProblem` and `startGame`.** Both callbacks capture `currentLevel` via their `useCallback` dependency array. After a level-up increments `currentLevel` in the profile, the component must re-render with the new level BEFORE `nextProblem` is called. If the acknowledgement callback triggers a profile update that causes a re-render, the new `nextProblem` reference (with updated level) must be used. This is a subtle React timing issue.

3. **GameScreen has zero existing tests.** Every test for GameScreen integration is net-new. This increases effort but is an opportunity to establish a solid test foundation for the most complex component.

4. **Profile update atomicity.** `updateProfile` writes to localStorage synchronously, but the React state update is async (dispatch -> re-render). If the game loop reads `activeProfile.currentLevel` between dispatch and re-render, it could see the old value. The implementation must ensure the game loop reads the new level AFTER the context update completes.

5. **Max-level edge case is subtle.** At level 13, `shouldLevelUp` still triggers (the confidence engine is level-agnostic), but the application must NOT attempt `getLevelConfig(14)` or `updateProfile(id, { currentLevel: 14 })`. A guard at the celebration/acknowledgement layer is required.

6. **No audio/image infrastructure exists.** The acceptance criteria mention "superhero animation + voice." Since there is no asset pipeline, these will likely be placeholders (CSS animation + no sound). Tests should verify the placeholder approach does not break when real assets are added later.
