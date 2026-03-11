# Grooming Report: Issue #28 -- Phase 7: Level Progression UI

## Summary

Level progression is the critical missing link between the existing confidence engine (`shouldLevelUp` fires but is never acted upon) and a product that a 7-year-old would return to daily. This epic wires `currentLevel` from profile through the game loop, adds a full-screen celebration when mastery is detected, visualizes all 13 levels on the start screen, and handles the max-level "Math Champion" boundary. All four agents agree this is P0 with $0 cost -- the highest-ROI item in the backlog, unlocking the entire 13-level learning path that is currently unreachable.

## Priority & Effort

- **Priority:** P0 (Critical -- app is functionally incomplete without level progression)
- **Effort:** 30-42h (development) + 28.5h (testing) = ~60h total
- **Size:** L
- **RICE Score:** 90 (100% reach x 3 impact x 0.9 confidence / 3 effort-weeks)
- **Cost:** $0 (zero infrastructure, zero dependencies, zero assets)

## Technical Approach

### Architecture: App.jsx Screen State Machine

The level-up flow uses a new `'levelup'` screen state in App.jsx, as a peer to `'start'`, `'game'`, and `'result'`. This is NOT an overlay inside GameScreen.

**Screen state machine after change:**
```
ProfileSwitcher / CreateProfile (no activeProfile)
    |
    v
start -> game -> result -> start|game
              |
              v
           levelup -> game (new level) | start
```

**Why screen state, not overlay:**
- Consistent with existing navigation pattern (start/game/result are all App-level states)
- GameScreen unmounts on `game -> levelup` transition, which auto-clears the feedback timeout -- eliminates the auto-advance race condition naturally
- Clean separation: GameScreen does not need celebration UI concerns
- Easy to test each screen in isolation

### Level-Up Data Flow

1. Child answers correctly, `confidence.shouldLevelUp` becomes true
2. Feedback overlay plays (2s), then `showFeedback` becomes false
3. `useEffect` in GameScreen fires on `shouldLevelUp && !showFeedback` -- calls `onLevelUp(currentLevel)`
4. App.jsx `handleLevelUp`: persists `currentLevel + 1` via `updateProfile`, sets screen to `'levelup'`
5. `LevelUpScreen` renders full-screen celebration
6. User clicks "Continue to Level N!" -- App.jsx sets screen back to `'game'` with new `currentLevel`
7. GameScreen mounts fresh with new level, `startGame()` calls `confidence.reset()` -- clean slate

### Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Level-up architecture | App.jsx screen state (`'levelup'`) | Consistent with existing pattern, natural unmount eliminates race |
| Race condition handling | `useEffect(shouldLevelUp && !showFeedback)` | Feedback completes, then transition fires. GameScreen unmount clears timeout. |
| Confidence reset | Full reset to 50 on level advance | New level = new difficulty. `startGame()` already calls `reset()`. |
| Audio | Deferred (visual-only MVP) | No audio infrastructure exists. `data-testid="audio-placeholder"` for future. |
| Avatar/hero | Emoji/CSS only (no images) | No asset pipeline. Emoji already used in app. Future AI media can swap in. |
| Animation | Tailwind keyframes only | Existing `animate-pulse-scale`, `animate-step-fade` cover needs. No new deps. |
| Max level (13) | "Math Champion" variant, stay at level 13 | No loop/restart. Special celebration. "Play as Champion!" continues at level 13. |
| LevelMap | Read-only vertical road on StartScreen | No click-to-select. 13 checkpoints: completed/current/locked states. |
| Stale closure | Solved by full unmount/remount on level transition | `game -> levelup -> game` remounts GameScreen with new `currentLevel` prop |

### Critical Prerequisite: currentLevel Wiring (BLOCKER)

`currentLevel` is **hardcoded to 2** in two places:
- `GameScreen.jsx` line 112: `currentLevel={2}` passed to `<LearningAid>`
- `useGameState.js` line 53: `currentLevel = 2` default parameter (never overridden)

Meanwhile, the profile system already stores `currentLevel` per profile and `ProfileContext` exposes `updateProfile`. But `App.jsx` never reads `activeProfile.currentLevel` and never passes it to `GameScreen`. This wiring is a prerequisite for all other sub-tasks.

**This is NOT in the existing sub-issues #29 or #30. A new sub-issue is required.**

---

## Sub-Tasks

### #28.1: Wire currentLevel from profile through game loop (NEW -- prerequisite)
**Size:** S (4-6h) | **Agent:** react-specialist

**Description:** Thread `activeProfile.currentLevel` from App.jsx through GameScreen to `useGameState` and `LearningAid`, replacing the hardcoded value of 2.

**Files to modify:**
- `App.jsx` -- read `activeProfile.currentLevel`, pass to GameScreen and StartScreen
- `GameScreen.jsx` -- accept `currentLevel` prop, pass to `useGameState({ currentLevel })` and `<LearningAid currentLevel={currentLevel}>`

**Acceptance Criteria:**
- [ ] App.jsx reads `activeProfile.currentLevel` and passes it to GameScreen
- [ ] GameScreen passes `currentLevel` to `useGameState` hook
- [ ] GameScreen passes `currentLevel` to `<LearningAid>` (replacing hardcoded `2`)
- [ ] When profile has `currentLevel: 5`, problems are generated from level 5 config
- [ ] Default behavior unchanged when no profile (falls back to level 2)
- [ ] PropTypes updated on all modified components
- [ ] Existing tests updated to cover currentLevel propagation
- [ ] All 613 existing tests still pass

**Dependencies:** None (prerequisite for #28.2, #28.3, #28.4)

---

### #28.2: Level-up detection, screen transition, and celebration component (restructured #29)
**Size:** M (12-16h) | **Agent:** react-specialist

**Description:** Add `'levelup'` screen state to App.jsx. Detect `shouldLevelUp` in GameScreen via useEffect, transition to LevelUpCelebration screen, persist new level, and resume game at new level.

**Files to create:**
- `src/components/LevelUpScreen.jsx` -- full-screen celebration component
- `src/components/LevelUpScreen.test.jsx`

**Files to modify:**
- `App.jsx` -- add `'levelup'` screen state, `handleLevelUp`, `handleLevelUpContinue`, `handleLevelUpExit`, `levelUpInfo` state
- `GameScreen.jsx` -- destructure `shouldLevelUp`, add useEffect for `shouldLevelUp && !showFeedback`, accept `onLevelUp` callback
- `src/components/index.js` -- export LevelUpScreen

**LevelUpScreen props:**
```jsx
LevelUpScreen.propTypes = {
  previousLevel: PropTypes.number.isRequired,  // Level just completed (1-12)
  newLevel: PropTypes.number.isRequired,        // Level advancing to (2-13)
  levelName: PropTypes.string.isRequired,       // From LEVELS config
  onContinue: PropTypes.func.isRequired,        // Continue to new level
  onExit: PropTypes.func.isRequired,            // Go back to start screen
}
```

**Acceptance Criteria:**
- [ ] `shouldLevelUp && !showFeedback` triggers `onLevelUp` callback in GameScreen
- [ ] App.jsx transitions screen from `'game'` to `'levelup'`
- [ ] LevelUpScreen shows completed level name and next level name from LEVELS config
- [ ] Themed hero emoji animates (bounce/scale CSS animation using Tailwind keyframes)
- [ ] CSS-only confetti/star visual effect (no external library)
- [ ] "Continue to Level N!" button is prominent (same style as StartScreen button)
- [ ] Pressing Continue: increments `currentLevel` in profile, calls `acknowledgeLevelUp()`, navigates to game screen
- [ ] Confidence engine resets to 50 after level advancement (via `startGame()` on remount)
- [ ] Auto-advance timeout is naturally cleaned up by GameScreen unmount
- [ ] `data-testid="audio-placeholder"` div rendered for future audio integration
- [ ] Accessible: button auto-focused on mount, `aria-live="assertive"`, `prefers-reduced-motion` support
- [ ] Double level-up guard: `handleLevelUp` is idempotent (if already on levelup screen, no-op)
- [ ] All 613 existing tests still pass + 25-35 new tests

**Dependencies:** #28.1 must be complete

---

### #28.3: Max-level (level 13) "Math Champion" handling (NEW)
**Size:** S (4-6h) | **Agent:** react-specialist

**Description:** Handle the edge case where the child is at level 13 and `shouldLevelUp` triggers. Show a special "Math Champion" celebration variant. Do NOT increment beyond level 13.

**Files to modify:**
- `App.jsx` -- cap `newLevel` at 13 in `handleLevelUp`
- `src/components/LevelUpScreen.jsx` -- accept `isChampion` prop, render "Math Champion" variant
- `src/components/LevelUpScreen.test.jsx` -- add champion variant tests

**Acceptance Criteria:**
- [ ] When `currentLevel === 13` and `shouldLevelUp` triggers, celebration shows "Math Champion" variant
- [ ] Trophy/crown emoji instead of regular hero emoji
- [ ] "You completed ALL levels!" message
- [ ] "Play as Champion!" button (stays on level 13, not "Continue to Level 14!")
- [ ] `updateProfile` is NOT called with `currentLevel: 14`
- [ ] `getLevelConfig(14)` is never called (guard in App.jsx)
- [ ] After champion celebration, game resumes at level 13
- [ ] Level 12 -> 13 transition uses normal celebration flow
- [ ] Profile persistence does NOT write `currentLevel > 13`
- [ ] 10-15 new tests covering all boundary conditions

**Dependencies:** #28.2 must be complete (builds on LevelUpScreen)

---

### #28.4: Level map visualization on StartScreen (restructured #30)
**Size:** M (10-14h) | **Agent:** react-specialist

**Description:** Create a `LevelMap` component showing all 13 levels as a vertical road with checkpoints (completed/current/locked). Integrate into StartScreen.

**Files to create:**
- `src/components/LevelMap.jsx` -- 13-checkpoint level visualization
- `src/components/LevelMap.test.jsx`

**Files to modify:**
- `StartScreen.jsx` -- render LevelMap, accept `currentLevel` prop
- `src/components/index.js` -- export LevelMap

**LevelMap props:**
```jsx
LevelMap.propTypes = {
  currentLevel: PropTypes.number.isRequired,    // 1-13
  totalLevels: PropTypes.number,                // Default: 13
}
```

**Acceptance Criteria:**
- [ ] Renders all 13 levels as vertical checkpoints (level 1 at bottom, 13 at top)
- [ ] Three visual states per node:
  - **Completed** (id < currentLevel): Gold/green checkmark, full opacity
  - **Current** (id === currentLevel): Pulsing glow, "YOU ARE HERE" indicator, level name prominent
  - **Locked** (id > currentLevel): Grey/faded, lock icon, reduced opacity
- [ ] Each node shows level name from `LEVELS` config
- [ ] Scrollable container with `max-h-64` on mobile, touch-friendly
- [ ] Auto-scrolls to current level on mount via `scrollIntoView`
- [ ] Tapping a completed level does NOT switch to it (read-only in MVP)
- [ ] Integrates into StartScreen between progress stats and Start button
- [ ] Accessible: `role="list"`, `role="listitem"` for each level, `aria-current="step"` on current, descriptive `aria-label` per node
- [ ] `prefers-reduced-motion` honored on pulsing animation
- [ ] 44px minimum touch targets
- [ ] All 613 existing tests still pass + 20-25 new tests

**Dependencies:** #28.1 must be complete (needs `currentLevel` prop)

---

### #28.5: Integration testing and E2E wiring (NEW)
**Size:** S (4-6h) | **Agent:** react-specialist

**Description:** End-to-end integration testing for the complete level progression flow. Verify all sub-tasks work together, profile persistence, multiple profiles, and edge cases.

**Acceptance Criteria:**
- [ ] Full flow works: Start (map at level N) -> Play -> shouldLevelUp -> Celebration -> Continue -> Start (map at N+1) -> Play (level N+1 problems)
- [ ] Champion flow: Level 13 -> shouldLevelUp -> Champion celebration -> Play as Champion -> Start (all levels complete on map)
- [ ] Profile persistence: Close and reopen app, `currentLevel` is preserved
- [ ] Multiple profiles: Each profile tracks own `currentLevel` independently
- [ ] Rapid level-ups: user triggers shouldLevelUp, acknowledges, immediately triggers again -- both increments persist
- [ ] Profile with `currentLevel: undefined` or 0 defaults gracefully (falls back to level 1)
- [ ] Profile switch during game: new profile's level is used
- [ ] No regressions in existing game flow (normal play without level-up works)
- [ ] All tests pass (613 existing + 85-110 new = ~700+ total)

**Dependencies:** #28.1, #28.2, #28.3, #28.4 all complete

---

## Dependency Graph

```
#28.1 (Wire currentLevel)  ──prerequisite for everything──┐
         │                                                 │
         ├──────────┐                                      │
         v          v                                      v
#28.2 (Celebration) #28.4 (Level Map)                [can parallel]
         │
         v
#28.3 (Max-level Champion)
         │          │
         v          v
#28.5 (Integration) ← waits for #28.2, #28.3, #28.4
```

**Parallel execution groups:**
- **Group A (critical path):** #28.1 -> #28.2 -> #28.3 -> #28.5
- **Group B (parallel after #28.1):** #28.4 (LevelMap) -- can be done alongside #28.2

**Optimal schedule:**
- Day 1: #28.1 + start #28.4
- Day 2: #28.2 + finish #28.4
- Day 3: #28.3 + #28.5

---

## Acceptance Criteria (Epic-Level)

From PM report -- these are the consolidated acceptance criteria for the epic:

1. Wire currentLevel from profile to game loop (replacing hardcoded 2)
2. Level-up celebration screen (visual-only, CSS/emoji, no audio)
3. Max-level "Math Champion" variant at level 13
4. Level map on StartScreen (read-only, 13 checkpoints)
5. Profile `currentLevel` persisted to localStorage
6. Confidence engine resets on level advance
7. Auto-advance race condition eliminated by screen transition architecture
8. End-to-end flow verified with integration tests
9. All existing tests pass (613) + ~85-110 new tests (~700+ total)
10. Accessible: aria attributes, keyboard navigation, reduced-motion, 44px touch targets

---

## Test Strategy

### Test Counts by Sub-Issue

| Sub-Issue | New Tests | Scope |
|-----------|-----------|-------|
| #28.1 Wire currentLevel | 20-25 | Hook wiring, prop threading, stale closure guard |
| #28.2 Celebration | 25-30 | Component render, trigger logic, race condition, a11y |
| #28.3 Max-level | 10-15 | Champion variant, boundary conditions, persistence guard |
| #28.4 Level Map | 20-25 | Visual states, level names, scroll, a11y |
| #28.5 Integration | 10-15 | Full flow, profile persistence, multi-profile, edge cases |
| **Total new** | **85-110** | |
| **Post-merge target** | **~700-723** | |

### Critical Test Scenarios (P0)

1. **Race condition:** `shouldLevelUp && !showFeedback` triggers `onLevelUp` exactly once; `nextProblem()` does NOT fire after transition (GameScreen unmounts)
2. **Stale closure:** After level-up, new problems use level N+1 config, not level N
3. **Max-level guard:** `getLevelConfig(14)` is never called; `updateProfile` never writes `currentLevel > 13`
4. **Profile persistence:** After level-up + reload, `activeProfile.currentLevel` reflects new value
5. **Double level-up guard:** `handleLevelUp` is idempotent when called while already on levelup screen

### Regression Suite

All 613 existing tests must pass before AND after each sub-issue merge. Critical regression areas:
- `useGameState.test.js` (26 tests) -- core game loop
- `useConfidence.test.js` (46 tests) -- shouldLevelUp, acknowledgeLevelUp, reset
- `profiles.test.js` (67 tests) -- updateProfile merging
- `LearningAid.test.jsx` (30 tests) -- aid selection by level (now dynamic)

---

## UX/Design Notes

Visual-only MVP. No audio, no custom avatar images.

- **Celebration:** Full-screen with gradient background (consistent with existing screens), large themed emoji (hedgehog for sonic, spider for spiderman), bounce/scale CSS animation, confetti via CSS-only particles
- **Champion variant:** Trophy/crown emoji, "You completed ALL levels!" message, "Play as Champion!" button
- **Level Map:** Vertical road on StartScreen, gold completed nodes, pulsing current node, grey locked nodes, level names from LEVELS config
- **Placeholders:** `data-testid="audio-placeholder"` for future audio, emoji hero with `heroEmoji` or `heroImage` prop for future AI avatar swap
- **Animations:** Tailwind keyframes only (existing `animate-pulse-scale`, `animate-step-fade`, `animate-aid-enter`)

---

## Risks & Dependencies

### Risks

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| R1 | Auto-advance race condition | High | Eliminated by architecture: GameScreen unmounts on `'levelup'` transition. useEffect fires on `shouldLevelUp && !showFeedback`. |
| R2 | Stale closure: nextProblem uses old level | Medium | Full unmount/remount of GameScreen on level transition. New `currentLevel` prop creates fresh hook instance. |
| R3 | Double useEffect fire (React strict mode) | Low | `handleLevelUp` is idempotent -- guards with `if (screen === 'levelup') return`. |
| R4 | shouldLevelUp sticky flag not cleared | Medium | `startGame()` calls `confidence.reset()` on GameScreen remount. Flag cleared. |
| R5 | Level-up threshold too easy/hard | Medium | LEVEL_UP_THRESHOLD=85 + 3 consecutive correct is tuned. Monitor, adjust constants later. |
| R6 | Scope creep into audio/images | Medium | Acceptance criteria explicitly state visual-only MVP. Enforce in code review. |
| R7 | Profile update timing | Low | `updateProfile` is synchronous (localStorage) + dispatch. Available on next render. Screen transition ensures new value is read. |
| R8 | LevelMap scroll on small phones | Low | `max-h-64` container, auto-scroll to current level, touch-friendly. Test at 375px viewport. |

### Dependencies

| Dependency | Type | Status |
|------------|------|--------|
| `useConfidence` hook (shouldLevelUp, acknowledgeLevelUp, reset) | Internal | Built (46 tests) |
| `LEVELS` config (13 levels) + `getLevelConfig()` | Internal | Built (4 tests) |
| Profile system (createProfile, updateProfile, currentLevel field) | Internal | Built (67 tests) |
| ProfileContext (updateProfile dispatch) | Internal | Built |
| Tailwind animations (pulse-scale, step-fade, aid-enter) | Internal | Built |
| App.jsx screen state pattern (start/game/result) | Internal | Built |
| Existing sub-issues #29, #30 | Restructured | #29 becomes part of #28.2, #30 becomes #28.4 |

---

## MVP Scope Definition

### In Scope (Must Ship)

- Wire `currentLevel` from profile to game loop
- Level-up celebration (visual-only: emoji, CSS animation, no audio)
- Math Champion variant for level 13
- Level map on StartScreen (read-only, 13 checkpoints)
- Profile persistence of `currentLevel`
- Confidence reset on level advance
- End-to-end integration tests

### Out of Scope (Future Issues)

| Item | Rationale |
|------|-----------|
| Audio/voice on level-up | No audio infrastructure; separate workstream |
| Custom avatar images | AI media workstream in progress; emoji sufficient |
| Click-to-select on level map | Adds complexity; read-only is sufficient for progression visibility |
| Level-down on struggling | Controversial UX for children; needs research |
| Animated path between level nodes | Visual polish; functional map ships first |
| Confetti library (tsparticles, etc.) | CSS-only particles sufficient; no new dependency |
| Screen transition animations | General polish issue, not level-specific |

---

## Cost Analysis

| Category | Amount |
|----------|--------|
| Development cost | $0 (personal project) |
| Infrastructure cost | $0 (no new Firebase resources) |
| Third-party tools/services | $0 |
| Asset generation | $0 (emoji + CSS only) |
| Bundle size impact | +5-15 KB gzipped |
| **Total epic cost** | **$0** |

Firebase free tier headroom remains 98%+. No new Firestore collections. `currentLevel` is a single integer field on existing profile documents.

---

## Existing Sub-Issues: Restructuring Plan

| Current Issue | Current Title | Action |
|---------------|---------------|--------|
| #29 | Level-up celebration screen | **Restructure** -- becomes part of #28.2 with expanded scope (detection, transition, celebration, a11y) |
| #30 | Level map progress visualization | **Restructure** -- becomes #28.4 with updated scope (vertical, read-only, a11y, scroll) |
| NEW | Wire currentLevel from profile | **Create** as #28.1 (prerequisite, blocks everything) |
| NEW | Max-level Champion handling | **Create** as #28.3 (level 13 edge case) |
| NEW | Integration testing & E2E wiring | **Create** as #28.5 (final integration sub-task) |

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Level advancement rate | >50% of active users advance 1+ levels within 7 days |
| Session length post level-up | No decrease vs pre-feature |
| Return rate | >60% return within 48h of first level-up |
| Champion completions | At least 1 user reaches level 13 within 30 days |
| Bug reports | 0 reports of stuck levels or skipped celebrations |
| Test count | ~700+ (613 existing + 85-110 new) |
