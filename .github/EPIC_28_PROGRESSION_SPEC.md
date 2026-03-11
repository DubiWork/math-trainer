# Progression Spec: Epic #28 -- Level Progression UI

**Created:** 2026-03-11
**Sub-issues:** #77, #78, #79, #80, #81
**Epic branch:** `epic/28-level-progression-ui`
**Status:** Complete on epic branch (all 5 sub-issues merged). Queued for staging after epic #25 promotes.
**Purpose:** Tracks unit/integration coverage and maps E2E test scenarios for production promotion.

---

## Background

Epic #28 adds a complete level progression UI to the Sonic Math Trainer. Before this epic, the confidence engine (`useConfidence`) could detect when a player was ready to advance, but there was no visual feedback, no celebration, and no persistent level tracking wired through the game loop.

This epic delivers five capabilities:

| Sub-issue | Title | What it adds |
|-----------|-------|-------------|
| #77 | Wire `currentLevel` from confidence engine into GameScreen | `currentLevel` flows from `activeProfile` through `App` into `GameScreen`. A `useEffect` in `GameScreen` detects `shouldLevelUp` (from `useConfidence` via `useGameState`) and calls the new `onLevelUp` prop. `App` gains a `'levelup'` screen state and a `completedLevel` state variable. |
| #78 | Level-up celebration screen | `LevelUpScreen` component -- full-screen celebration with 12 CSS confetti particles, hero emoji (rocket), completed/next level names, and a "Continue to Level N!" CTA. `App` transitions: game -> levelup -> game (next level). `handleContinueAfterLevelUp` calls `updateProfile` to persist the new level. |
| #79 | Max-level champion screen | Champion variant within `LevelUpScreen` (not a separate component). When `completedLevel >= MAX_LEVEL` (13), the heading changes to "Math Champion!", the emoji switches to a trophy, the message reads "You mastered all 13 levels!", and the CTA becomes "Play Again at Level 13!". `updateProfile` is NOT called (no level 14). |
| #80 | Level map progress visualization | `LevelMap` component -- horizontal scrollable list of 13 level nodes with three visual states: completed (green star), current (gold pulsing circle), locked (grey lock, 50% opacity). 12 connecting lines between nodes. Auto-scrolls to current level on mount. Snap scrolling. Integrated into `StartScreen` via `currentLevel` prop. |
| #81 | Integration tests for level progression flow | `LevelProgression.integration.test.jsx` -- App-level state machine tests with mocked child components. Covers full lifecycle, champion flow, level map prop threading, persistence guards, reduced-motion, screen-state isolation, and boundary transitions. |

### Architecture summary

```
App.jsx
  |-- screen state: 'start' | 'game' | 'levelup' | 'result'
  |-- completedLevel state (number | null)
  |-- currentLevel = activeProfile?.currentLevel ?? 1
  |
  |-- StartScreen
  |     |-- LevelMap (currentLevel prop)
  |
  |-- GameScreen
  |     |-- useGameState({ currentLevel }) -> shouldLevelUp
  |     |-- useEffect: shouldLevelUp && !showFeedback -> onLevelUp(currentLevel)
  |
  |-- LevelUpScreen (completedLevel, onContinue)
  |     |-- normal variant (levels 1-12): rocket emoji, "Level Complete!"
  |     |-- champion variant (level 13 / MAX_LEVEL): trophy emoji, "Math Champion!"
  |
  |-- ResultScreen (unchanged)
```

**Key state transition:** When `handleContinueAfterLevelUp` fires, it calls `updateProfile(activeProfile.id, { currentLevel: nextLevel })` only if `nextLevel <= MAX_LEVEL`. Then it clears `completedLevel` and sets screen back to `'game'`.

---

## Unit Test Coverage

All test files below are on the `epic/28-level-progression-ui` branch. Counts are from `grep -c` of `it(` calls in each file.

| Test file | Tests | Sub-issue | Scope |
|-----------|-------|-----------|-------|
| `src/components/LevelUpScreen.test.jsx` | 33 | #78, #79 | **Rendering:** heading, level names, hero emoji, confetti (>= 8 particles), audio placeholder. **Continue button:** CTA text with next level number, onClick fires onContinue, min-h-[44px] touch target. **Max level guard:** no "Next" label at level 13, no level 14 in button text, onContinue still fires. **Champion variant:** "Math Champion!" heading, trophy emoji, "You mastered all 13 levels!" message, "Play Again at Level 13!" CTA, aria-label, sr-only status announcement, confetti + bounce still render, no level config name in sub-message. **Boundary 12->13:** normal heading, rocket emoji, "Continue to Level 13!" CTA, "Next: Math Champion". **Various levels:** 1, 7, 12 completed level names + next level names. **Accessibility:** aria-live=polite, role=status, h1 heading hierarchy. **Reduced motion:** hero motion-reduce:animate-none, confetti motion-reduce:hidden. |
| `src/components/LevelMap.test.jsx` | 22 | #80 | **Nodes:** 13 level nodes rendered, level names displayed. **Completed levels:** green star icon, green text styling. **Current level:** gold/yellow styling, animate-pulse-gold class, motion-reduce:animate-none. **Locked levels:** grey/faded text, opacity-50, lock icon. **Accessibility:** role=list, role=listitem, aria-label with "Level N: Name - completed/current/locked" for all three states. **Auto-scroll:** scrollIntoView called with inline: 'center'. **Boundaries:** currentLevel=1 (none completed, first current, rest locked), currentLevel=13 (12 completed, last current, none locked). **Responsive:** overflow-x-auto, snap-x classes. **Connectors:** 12 connector elements between 13 nodes. **Default prop:** renders without currentLevel prop. |
| `src/components/GameScreen.test.jsx` | 8 | #77 | **Basic rendering:** problem + answer buttons visible, exit button rendered, startGame called when !isPlaying. **shouldLevelUp detection:** calls onLevelUp(currentLevel) when shouldLevelUp=true and showFeedback=false; does NOT call when shouldLevelUp=false; does NOT call when showFeedback=true; does NOT throw when onLevelUp is undefined. **Exit:** passes session stats (score, bestStreak, totalProblems, correctAnswers, accuracy) to onGameEnd. |
| `src/App.test.jsx` | 28 | #77, #78, #79 | **Loading:** profile loading, auth loading. **Profile routing:** ProfileSwitcher when no profile, StartScreen when active, no game screens without profile. **Profile switch:** clearActiveProfile called. **Game flow:** start->game, game->result, game->exit->start, result->play again, result->exit. **Create profile:** wizard shown/hidden, createAndActivate called. **Auth error:** error screen, "Play Anyway" button. **currentLevel threading:** profile level 5 passed to GameScreen, default to 1, explicit level 1, level 13 max. **Level-up flow:** game->levelup transition, completedLevel prop passed, levelup->game transition, updateProfile with currentLevel+1, max-level guard (no level 14), no levelup on initial render. |
| `src/components/StartScreen.test.jsx` | 4 | #80 | **LevelMap integration:** LevelMap rendered in StartScreen, currentLevel prop forwarded, 13 listitem nodes rendered, defaults currentLevel to 1 when not provided. |
| `src/components/__tests__/LevelProgression.integration.test.jsx` | 22 | #81 | **Full lifecycle:** start->game->levelup->continue->game (navigation + updateProfile), mid-range level increments (1->2, 6->7, 12->13). **Champion flow:** shows champion at level 13, does NOT call updateProfile, returns to game, stays at level 13 in GameScreen. **Level map:** currentLevel passed to StartScreen (5, default 1, max 13). **Persistence:** updateProfile called exactly once per level-up continue, NOT called on levelup screen appearance, NOT called on game exit, NOT called on normal game end, forceSave on switch profile. **Reduced motion:** hero emoji, confetti particles, LevelMap pulse all have motion-reduce classes (imports real components for these checks). **Screen isolation:** only one screen visible at a time during full flow, completedLevel state cleared after continue. **Boundary transitions:** 1->2 first level-up, 12->13 last normal, 13 max guard. |

**Total epic #28 test count: 117** (33 + 22 + 8 + 28 + 4 + 22)

---

## E2E Scenarios

The following scenarios describe user-facing behaviors that would be validated in end-to-end tests running in a real browser. They are organized by sub-issue and functional area, with each scenario tagged as COVERED (already tested at unit/integration level) or GAP (not adequately covered and requiring E2E attention).

### Sub-issue #77: Wire currentLevel into GameScreen

| ID | Scenario | Unit/integration coverage | Status |
|----|----------|--------------------------|--------|
| PS-77-01 | Player at level 1 starts game; GameScreen receives currentLevel=1 and generates level-1 problems (addition, numbers 1-5) | App.test + integration test verify prop threading; problem generation by level tested in mathProblems.test.js, but no test connects profile level to rendered problem content | **GAP** |
| PS-77-02 | Player at level 7 starts game; problems use operators +/- with numbers up to 20 | Same gap as PS-77-01 | **GAP** |
| PS-77-03 | Player answers enough correctly to trigger shouldLevelUp; transitions to LevelUpScreen | GameScreen.test verifies shouldLevelUp detection; integration test verifies full transition | COVERED |
| PS-77-04 | Player answers incorrectly repeatedly; game continues without level-up, level stays the same | GameScreen.test verifies shouldLevelUp=false does not fire onLevelUp | **GAP** (no test drives multiple incorrect answers end-to-end) |
| PS-77-05 | Profile with no currentLevel field defaults to level 1 in game and level map | App.test + integration test verify default to 1 | COVERED |

### Sub-issue #78: Level-up celebration screen

| ID | Scenario | Unit/integration coverage | Status |
|----|----------|--------------------------|--------|
| PS-78-01 | After leveling up from level 3, player sees "Level Complete!" heading | LevelUpScreen.test covers heading text | COVERED |
| PS-78-02 | Level-up screen displays completed level name (e.g., "Minus Magic") and next level name (e.g., "Next: Mixed Warrior") | LevelUpScreen.test covers level names for levels 1, 3, 5, 7, 12 | COVERED |
| PS-78-03 | Hero emoji (rocket) renders with bounce animation; 12 confetti particles animate with staggered delays | LevelUpScreen.test verifies elements + animation classes; cannot verify actual visual animation in happy-dom | **GAP** (visual animation rendering) |
| PS-78-04 | "Continue to Level N!" button shows correct next level number and navigates back to GameScreen | Integration test + App.test cover transition and CTA text | COVERED |
| PS-78-05 | After clicking Continue, profile is persisted with incremented currentLevel; survives page reload | Integration test verifies updateProfile called with correct args; no test verifies persistence across reload | **GAP** (reload persistence) |
| PS-78-06 | Screen reader announces "Level complete! You finished [Name]. Next up: [Name]." via role=status, aria-live=polite | LevelUpScreen.test checks role=status, aria-live=polite, and announcement text | COVERED |
| PS-78-07 | Continue button meets 44px minimum touch target | LevelUpScreen.test checks min-h-[44px] class | COVERED |
| PS-78-08 | With prefers-reduced-motion active: hero bounce disabled, confetti hidden | LevelUpScreen.test + integration test check motion-reduce classes; actual media query behavior untested | **GAP** (actual media query) |

### Sub-issue #79: Max-level champion screen

| ID | Scenario | Unit/integration coverage | Status |
|----|----------|--------------------------|--------|
| PS-79-01 | At level 13, level-up screen shows "Math Champion!" heading instead of "Level Complete!" | LevelUpScreen.test champion variant (heading check) | COVERED |
| PS-79-02 | Champion screen shows trophy emoji instead of rocket | LevelUpScreen.test champion variant (emoji check) | COVERED |
| PS-79-03 | Champion screen shows "You mastered all 13 levels!" message | LevelUpScreen.test champion variant (message check) | COVERED |
| PS-79-04 | Button says "Play Again at Level 13!" (not "Continue to Level 14!") | LevelUpScreen.test champion variant (no level 14) + App.test (max guard) | COVERED |
| PS-79-05 | Clicking "Play Again at Level 13!" returns to GameScreen still at level 13 | Integration test verifies game screen data-current-level="13" | COVERED |
| PS-79-06 | Profile is NOT updated beyond MAX_LEVEL (updateProfile not called with level 14) | Integration test + App.test both verify updateProfile not called | COVERED |
| PS-79-07 | Screen reader announcement mentions "mastered all 13 levels" | LevelUpScreen.test checks sr-only status text content | COVERED |
| PS-79-08 | Champion confetti and hero bounce still render | LevelUpScreen.test verifies confetti + bounce in champion mode | COVERED |

### Sub-issue #80: Level map progress visualization

| ID | Scenario | Unit/integration coverage | Status |
|----|----------|--------------------------|--------|
| PS-80-01 | StartScreen displays LevelMap with all 13 level nodes visible | LevelMap.test (13 nodes) + StartScreen.test (13 listitem nodes) | COVERED |
| PS-80-02 | Player at level 5: levels 1-4 show green star, level 5 shows gold pulse, levels 6-13 show grey lock | LevelMap.test covers all three visual states | COVERED |
| PS-80-03 | Level map auto-scrolls to show the current level node centered in viewport | LevelMap.test verifies scrollIntoView called with inline: 'center'; actual scroll position in real browser untested | **GAP** (actual scroll verification) |
| PS-80-04 | Level map is horizontally scrollable on small screens (touch swipe) | LevelMap.test checks overflow-x-auto and snap-x classes | **GAP** (actual touch/swipe behavior) |
| PS-80-05 | 12 connector lines rendered; green between completed nodes, grey for locked segments | LevelMap.test verifies 12 connectors exist but does NOT assert color logic | **GAP** (connector color verification) |
| PS-80-06 | Level map updates after leveling up: return to StartScreen shows newly completed level as green star | No test covers the round-trip: game -> levelup -> continue -> exit -> start with updated map | **GAP** (level map visual round-trip) |
| PS-80-07 | Player at level 1: no completed levels, first is current, all others locked | LevelMap.test boundary condition covers this | COVERED |
| PS-80-08 | Player at level 13: 12 completed, last is current, none locked | LevelMap.test boundary condition covers this | COVERED |
| PS-80-09 | Each node has aria-label "Level N: Name - completed/current/locked" | LevelMap.test accessibility tests cover all three states | COVERED |
| PS-80-10 | Level map container has role=list and aria-label="Level progress map" | LevelMap.test verifies role=list | COVERED |

### Sub-issue #81: Integration / cross-cutting

| ID | Scenario | Unit/integration coverage | Status |
|----|----------|--------------------------|--------|
| PS-81-01 | Full round-trip: StartScreen -> GameScreen -> LevelUpScreen -> GameScreen (next level) -> exit -> StartScreen with updated level map | Integration test covers start->game->levelup->game; the exit->start->map update segment is missing | **GAP** |
| PS-81-02 | Multiple consecutive level-ups in one session (e.g., level 1 -> 2 -> 3 without closing the app) | Integration test covers single level-up only | **GAP** |
| PS-81-03 | Level-up during gameplay with Firebase offline (graceful degradation) | Not tested anywhere | **GAP** |
| PS-81-04 | Two profiles at different levels; switching shows correct level map for each | Profile switching tested but level map per profile not verified | **GAP** |
| PS-81-05 | Page reload mid-game does not lose level progress | Not tested | **GAP** |
| PS-81-06 | Only one screen is visible at any time during the level-up flow | Integration test verifies screen isolation step by step | COVERED |
| PS-81-07 | GameScreen unmounts when transitioning to LevelUpScreen (no race condition with auto-advance) | Integration test verifies game-screen is null when levelup-screen appears | COVERED |
| PS-81-08 | Exiting game normally (without level-up) goes to result screen, not level-up screen | App.test covers game->result and game->exit->start flows | COVERED |

---

## Gap Analysis

The unit and integration tests provide excellent coverage of component rendering, prop threading, state transitions, accessibility attributes, and boundary conditions (117 tests). The following categories are NOT adequately covered and require E2E testing.

### 1. Full-chain problem generation by level (P0)
Unit tests verify that `currentLevel` is passed as a prop and that `mathProblems.js` accepts a level config. No test verifies that a player at a specific level actually sees the correct problem types and number ranges rendered in the GameScreen. This is the seam between profile -> App -> GameScreen -> useGameState -> getLevelConfig -> generateProblem -> rendered UI.

**Scenarios:** PS-77-01, PS-77-02

### 2. Persistence across page reloads (P0)
All persistence tests mock `updateProfile` and verify it is called with the correct arguments. No test verifies that after a page reload, the level-up is reflected in the profile and level map. This requires real browser storage and Firestore round-trip.

**Scenarios:** PS-78-05, PS-81-05

### 3. Level map visual round-trip after level-up (P0)
No test covers the complete cycle where a player levels up, continues to the next level, exits to StartScreen, and sees the level map updated with the newly completed level shown as a green star. This is the primary user-facing indicator that progress was saved.

**Scenarios:** PS-80-06, PS-81-01

### 4. Multiple consecutive level-ups in one session (P0)
Integration tests cover a single level-up cycle. No test verifies that a fast learner can trigger 2+ consecutive level-ups without restarting the app. The state machine resets (completedLevel -> null, screen -> game) must work reliably on each iteration.

**Scenarios:** PS-81-02

### 5. Visual animation rendering (P1)
CSS animation classes are verified in unit tests via class name checks in happy-dom. Actual visual rendering of confetti particles, bounce animation, and pulse-gold effect cannot be verified in JSDOM/happy-dom.

**Scenarios:** PS-78-03

### 6. Reduced-motion media query behavior (P1)
Unit tests verify that motion-reduce utility classes are applied. No test verifies that `prefers-reduced-motion: reduce` actually suppresses the animations in a real browser.

**Scenarios:** PS-78-08

### 7. Scroll and touch behavior (P1)
Auto-scroll to current level is verified via mock `scrollIntoView`. Actual scroll position in a real browser and horizontal swipe scrolling on mobile viewports are untested.

**Scenarios:** PS-80-03, PS-80-04

### 8. Connector line colors (P2)
LevelMap unit tests verify that 12 connectors exist but do not assert the color logic (green between completed/current nodes, grey for locked segments).

**Scenarios:** PS-80-05

### 9. Offline resilience (P1)
No test verifies behavior when Firebase is unavailable during a level-up. The `updateProfile` call could fail, and the player's progress would be lost on next reload.

**Scenarios:** PS-81-03

### 10. Multi-profile level isolation (P2)
Profile switching is tested, but no test verifies that two profiles display different level maps and that switching between them shows the correct level map for each.

**Scenarios:** PS-81-04

---

## Proposed E2E Test Files

All E2E tests live in `tests/e2e/features/` and target Playwright.

| File | Scenarios | Priority | Purpose |
|------|-----------|----------|---------|
| `tests/e2e/features/level-progression-flow.spec.js` | PS-77-01, PS-77-02, PS-77-03, PS-77-04, PS-78-04, PS-80-06, PS-81-01, PS-81-02, PS-81-06, PS-81-07, PS-81-08 | **P0** | Core gameplay loop: level wiring, level-up trigger, continuation, screen transitions, consecutive level-ups, level map round-trip update |
| `tests/e2e/features/level-up-celebration.spec.js` | PS-78-01, PS-78-02, PS-78-03, PS-78-05, PS-78-06, PS-78-07 | **P1** | Celebration UX: heading, level names, confetti visual rendering, touch target measurement, SR announcement |
| `tests/e2e/features/champion-screen.spec.js` | PS-79-01, PS-79-02, PS-79-03, PS-79-04, PS-79-05, PS-79-06, PS-79-07, PS-79-08 | **P1** | Max-level experience: trophy emoji, "Math Champion!", "Play Again at Level 13!", no level 14, SR announcement |
| `tests/e2e/features/level-map.spec.js` | PS-80-01, PS-80-02, PS-80-03, PS-80-04, PS-80-05, PS-80-07, PS-80-08, PS-80-09, PS-80-10 | **P1** | Visual progress map: node states, auto-scroll position, touch swipe, connector colors, boundaries, accessibility |
| `tests/e2e/features/level-persistence.spec.js` | PS-78-05, PS-81-03, PS-81-05 | **P0** | Data integrity: level-up survives reload, offline graceful degradation, mid-game reload |
| `tests/e2e/features/level-progression-a11y.spec.js` | PS-78-06, PS-78-07, PS-78-08, PS-79-07, PS-80-09, PS-80-10 | **P1** | Accessibility: ARIA attributes, reduced-motion media query, touch targets, SR announcements |
| `tests/e2e/features/multi-profile-levels.spec.js` | PS-81-04 | **P2** | Multi-profile isolation: different levels for different profiles, level map reflects each profile's progress |

---

## Implementation Notes

1. **Triggering level-up in E2E:** The `shouldLevelUp` flag is driven by the confidence engine (`useConfidence`) inside `useGameState`. E2E tests will need to answer enough problems correctly to build confidence above the level-up threshold. The exact number depends on streak and accuracy requirements. An alternative is a test-only query param or environment variable to force `shouldLevelUp` -- this is a decision to resolve during E2E implementation.

2. **Auto-scroll verification (PS-80-03):** Playwright does not directly observe `scrollIntoView` calls. Verify by checking that the current level node's bounding box is within the visible viewport of the scrollable container using `element.boundingBox()`.

3. **Reduced motion tests (PS-78-08):** Use `page.emulateMedia({ reducedMotion: 'reduce' })` in Playwright. Verify that `animation-name` computed style is `none` for hero emoji and that confetti particles are not visible (display: none from `motion-reduce:hidden`).

4. **Touch target measurement (PS-78-07):** Use `element.boundingBox()` in Playwright to assert `height >= 44`.

5. **Champion variant seeding (PS-79-*):** Tests need a profile with `currentLevel: 13`. Either seed via the full UI (complete all levels -- slow) or use a test fixture that pre-sets the profile in localStorage/Firestore before navigating.

6. **Level map round-trip (PS-80-06, PS-81-01):** After clicking "Continue" on the level-up screen, then exiting to StartScreen, verify the level map now shows the previous level as completed (green star) and the next level as current (gold pulse).

7. **Connector color assertion (PS-80-05):** Use `getComputedStyle` to check background-color on connector elements. Green connectors link two completed/current nodes; grey connectors link to locked nodes.

8. **Confetti staggered delays (PS-78-03):** Each of the 12 confetti particles has `animationDelay: i * 0.15s` and `animationDuration: 1.5 + (i % 3) * 0.5s`. Verify via computed style inspection.

---

## Priority Definitions

| Priority | Meaning | Scenario count |
|----------|---------|----------------|
| P0 | Must pass before promotion to production | 17 |
| P1 | Should pass; may defer with documented risk | 16 |
| P2 | Nice to have; visual polish + edge cases | 5 |

**P0 scenarios:** PS-77-01, PS-77-02, PS-77-03, PS-77-05, PS-78-04, PS-78-05, PS-79-04, PS-79-05, PS-79-06, PS-80-06, PS-81-01, PS-81-02, PS-81-05, PS-81-06, PS-81-07, PS-81-08, PS-80-01

**P1 scenarios:** PS-77-04, PS-78-01, PS-78-02, PS-78-03, PS-78-06, PS-78-07, PS-78-08, PS-79-01, PS-79-02, PS-79-03, PS-79-07, PS-79-08, PS-80-02, PS-80-03, PS-80-04, PS-81-03

**P2 scenarios:** PS-80-05, PS-80-07, PS-80-08, PS-80-09, PS-81-04

---

## Graduation Criteria

When all P0 scenarios pass on staging for 3 consecutive green runs:
1. Move E2E test files into the regression suite
2. Promote epic branch to develop (if not already there)
3. Promote develop to main
4. Tag release

---

## Summary

- **Unit/integration tests on epic branch:** 117 tests across 6 files
- **E2E scenarios defined:** 38 total
- **Gaps requiring E2E coverage:** 15 scenarios
- **Already COVERED by unit/integration:** 23 scenarios (still listed for E2E regression value)
- **P0 (blocking promotion):** 17
- **P1 (should-have):** 16
- **P2 (nice-to-have):** 5
- **Top priority gaps:** full-chain problem generation by level, persistence across reloads, level map visual round-trip, consecutive level-ups, offline resilience
