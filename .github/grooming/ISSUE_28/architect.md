# Architect Report: Issue #28 — Phase 7: Level Progression UI

## 1. Architecture Decisions

### Decision 1: Level-up flow — App.jsx screen state (Option B)

**Chosen approach:** Add a `'levelup'` screen state to App.jsx's screen state machine, alongside `'start'`, `'game'`, and `'result'`.

**Rationale:**
- The existing screen routing in App.jsx is the single source of truth for what the user sees. Adding `'levelup'` as a peer state keeps this pattern consistent.
- Option A (overlay inside GameScreen) would make GameScreen responsible for two unrelated concerns: game play AND celebration. This violates single-responsibility. GameScreen already composes 6+ child components.
- Option B allows the LevelUpScreen to be a full-screen immersive celebration experience, not constrained by GameScreen's layout.
- Option B naturally pauses the game loop — no auto-advance timeout races because the game component is unmounted.
- Transition: `game -> levelup -> game` (continue at new level) or `game -> levelup -> start` (exit).

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

### Decision 2: Auto-advance race condition — guard in handleAnswer + clear on unmount

**Problem:** When `shouldLevelUp` becomes true, the `setTimeout` in `handleAnswer` (line 200-204 of useGameState.js) will still fire after the 2-second feedback delay and call `nextProblem()`. If we transition to the level-up screen during this 2 seconds, the timeout fires against an unmounted component. If we try to intercept it before transition, we have a state update race.

**Solution (two-part):**
1. **In useGameState.handleAnswer:** After the `confidence.recordAnswer()` call, check if `confidence.shouldLevelUp` is true. If so, do NOT schedule the `setTimeout` for `nextProblem`. Instead, let the feedback play out, then signal the parent via a new `onLevelUp` callback. The feedback overlay's existing 2-second duration serves as the celebration lead-in.
2. **In GameScreen:** Destructure `shouldLevelUp` from `useGameState`. After feedback ends (when `showFeedback` transitions from true to false while `shouldLevelUp` is true), call `onLevelUp` callback passed from App.jsx.

**Why this works:** The core fix is not scheduling the auto-advance timer when a level-up is detected. This eliminates the race entirely rather than trying to cancel it.

**Implementation detail:** Because `confidence.recordAnswer` dispatches to `useReducer` (synchronous update), and `shouldLevelUp` is a derived value from reducer state, it will be available on the next render cycle, not immediately after `recordAnswer()` is called within `handleAnswer`. Therefore, the check must happen in a `useEffect` that watches `shouldLevelUp + showFeedback`, not inline in `handleAnswer`.

**Refined approach:**
- In `useGameState`, modify `handleAnswer` to still schedule the timeout, but add logic to `nextProblem` to check `shouldLevelUp` before generating the next problem. If `shouldLevelUp` is true, skip problem generation and set a `levelUpPending` flag in game state.
- Actually, the simplest reliable approach: **Add a `useEffect` in GameScreen** that watches `shouldLevelUp && !showFeedback`. When both conditions are met (shouldLevelUp became true AND feedback animation has finished), call `onLevelUp()`. The `nextProblem()` may fire first, but the `useEffect` fires on the same render cycle and App.jsx unmounts GameScreen immediately. No user-visible glitch because it happens in a single commit.

**Final chosen approach (simplest, no race):**
- **Do NOT modify useGameState.handleAnswer or nextProblem** at all. Let the existing feedback + auto-advance work as-is.
- **In GameScreen, add a `useEffect`** that watches `shouldLevelUp`. When it becomes true, call `onLevelUp(currentLevel)` which App.jsx uses to transition to the `'levelup'` screen.
- The effect fires on the render after `confidence.recordAnswer` updates `shouldLevelUp` to true — this is the same render that shows the feedback overlay (showFeedback=true). App.jsx transitions screen to `'levelup'`, unmounting GameScreen, which cleans up the feedback timeout via `isMountedRef` check (line 201). Clean, no race.
- **One subtlety:** We want the child to SEE the correct-answer feedback before transitioning. So the effect should trigger after feedback completes, not immediately. Use: `shouldLevelUp && !showFeedback` as the condition. This means: after the feedback fades and `nextProblem()` runs, the GameScreen re-renders with `shouldLevelUp=true` and `showFeedback=false`, and the effect fires.

### Decision 3: Confidence reset on level change — YES, full reset

**Chosen:** Call `confidence.reset()` when starting a new level after level-up.

**Rationale:**
- The confidence engine's score reflects performance at the CURRENT level. A new level has harder problems — the child's confidence should be re-evaluated from scratch.
- Starting at score 50 (default) is fair: the child proved mastery at the previous level, but the new level is uncharted territory.
- `confidence.reset()` already exists and is called in `startGame()`. The level-up flow effectively calls `startGame()` at the new level, so the reset happens naturally.

### Decision 4: currentLevel closure staleness — solved by prop threading

**Problem:** `useGameState` captures `currentLevel` as a parameter at mount time. If `currentLevel` changes while the hook is active, `startGame()` and `nextProblem()` will use the stale value because they reference `currentLevel` from their closure (via `useCallback` deps).

**Solution:** `currentLevel` is already a dependency of both `startGame` and `nextProblem` useCallback hooks (lines 117 and 137). When the prop changes, React re-creates these callbacks. The issue is that GameScreen currently hardcodes `currentLevel={2}` and never passes it to `useGameState`. The fix is:
1. App.jsx reads `activeProfile.currentLevel` and passes it to GameScreen as a prop.
2. GameScreen passes it to `useGameState({ currentLevel, ... })`.
3. On level-up, App.jsx increments the level, persists to profile, then remounts GameScreen with the new level. Since the screen transition is `game -> levelup -> game`, GameScreen is FULLY unmounted and remounted — no stale closure possible.

### Decision 5: LevelMap — static visual, not interactive (for this phase)

**Chosen:** LevelMap renders 13 checkpoints in a vertical scrollable road layout. Checkpoints are styled as completed (gold), current (pulsing), or locked (grey). No click-to-select functionality. The child cannot jump to arbitrary levels.

**Rationale:**
- The acceptance criteria say "show completed/current/locked levels" — read-only visualization.
- Allowing level selection would require additional design work around level-skipping policy and is out of scope for phase 7.
- The LevelMap receives `currentLevel` as a prop and derives state for all 13 levels.

### Decision 6: Where LevelMap lives — on StartScreen

**Chosen:** LevelMap renders inside StartScreen, below the "Start Game" button.

**Rationale:**
- Acceptance criteria explicitly state "Level map on StartScreen."
- StartScreen already receives `activeProfile` (which has `currentLevel`).
- The map provides motivational context before starting a session.

---

## 2. Component Hierarchy & Data Flow

### New Components

```
src/components/LevelUpScreen.jsx    — Full-screen celebration
src/components/LevelMap.jsx         — 13-checkpoint level visualization
```

### Modified Components

```
App.jsx                             — Add 'levelup' screen state + currentLevel threading
GameScreen.jsx                      — Add shouldLevelUp detection, onLevelUp callback
StartScreen.jsx                     — Add LevelMap, receive currentLevel
src/components/index.js             — Export LevelUpScreen, LevelMap
```

### Data Flow (Level-Up Path)

```
1. Child answers correctly, confidence.shouldLevelUp = true
2. Feedback overlay plays (2s)
3. showFeedback -> false, useEffect in GameScreen fires
4. GameScreen calls onLevelUp(currentLevel)
5. App.jsx:
   a. Persists new level: updateProfile(activeProfile.id, { currentLevel: currentLevel + 1 })
   b. Sets screen = 'levelup'
   c. Stores newLevel in state for LevelUpScreen props
6. LevelUpScreen renders celebration
7. User clicks "Continue to Level N!"
8. App.jsx sets screen = 'game' with new currentLevel
9. GameScreen mounts fresh with new level -> useGameState gets new currentLevel -> confidence.reset()
```

### Props Specification

#### LevelUpScreen
```jsx
LevelUpScreen.propTypes = {
  previousLevel: PropTypes.number.isRequired,  // Level just completed (1-12)
  newLevel: PropTypes.number.isRequired,        // Level advancing to (2-13)
  levelName: PropTypes.string.isRequired,       // e.g., "Minus Magic" (from LEVELS)
  onContinue: PropTypes.func.isRequired,        // Continue to new level
  onExit: PropTypes.func.isRequired,            // Go back to start screen
}
```

#### LevelMap
```jsx
LevelMap.propTypes = {
  currentLevel: PropTypes.number.isRequired,    // 1-13
  totalLevels: PropTypes.number,                // Default: 13 (from LEVELS.length)
}
```

#### GameScreen (modified)
```jsx
// NEW PROP:
onLevelUp: PropTypes.func.isRequired  // (completedLevel: number) => void

// CHANGED PROP: currentLevel replaces hardcoded 2
currentLevel: PropTypes.number.isRequired  // 1-13
```

#### StartScreen (modified)
```jsx
// NEW PROP:
currentLevel: PropTypes.number  // For LevelMap display
```

#### App.jsx State Changes
```js
// New state
const [levelUpInfo, setLevelUpInfo] = useState(null)
// Shape: { previousLevel: number, newLevel: number }

// Modified screen values: 'start' | 'game' | 'result' | 'levelup'
```

---

## 3. Detailed File Changes

### App.jsx

**Changes:**
1. Add `levelUpInfo` state: `useState(null)`
2. Read `currentLevel` from `activeProfile.currentLevel ?? 1`
3. Add `handleLevelUp(completedLevel)` callback:
   - Calculate `newLevel = completedLevel + 1`
   - Cap at 13 (max level) — if already at 13, show a "Math Champion!" variant
   - Call `updateProfile(activeProfile.id, { currentLevel: newLevel })` to persist
   - Set `levelUpInfo = { previousLevel: completedLevel, newLevel }`
   - Set `screen = 'levelup'`
4. Add `handleLevelUpContinue` callback:
   - Clear `levelUpInfo`
   - Set `screen = 'game'`
5. Add `handleLevelUpExit` callback:
   - Clear `levelUpInfo`
   - Call `forceSave()`
   - Set `screen = 'start'`
6. Pass `currentLevel` and `onLevelUp` to GameScreen
7. Pass `currentLevel` to StartScreen
8. Render LevelUpScreen when `screen === 'levelup'`

**Note on `updateProfile`:** App.jsx already has access to `useProfile()` which exposes `updateProfile(id, updates)`. This function writes to localStorage AND updates the ProfileContext state (including `activeProfile`), so after the call, `activeProfile.currentLevel` reflects the new value. This is key — when we transition back to `'game'`, the new `currentLevel` prop will be correct.

### GameScreen.jsx

**Changes:**
1. Accept new props: `currentLevel`, `onLevelUp`
2. Destructure `shouldLevelUp` from `useGameState`
3. Pass `currentLevel` to `useGameState({ currentLevel, ... })`
4. Replace hardcoded `currentLevel={2}` in LearningAid with the prop
5. Add `useEffect`:
   ```js
   useEffect(() => {
     if (shouldLevelUp && !showFeedback) {
       onLevelUp(currentLevel)
     }
   }, [shouldLevelUp, showFeedback, onLevelUp, currentLevel])
   ```
6. Update PropTypes

### StartScreen.jsx

**Changes:**
1. Accept new prop: `currentLevel`
2. Render `<LevelMap currentLevel={currentLevel} />` below the Start Game button
3. Update PropTypes

### LevelUpScreen.jsx (NEW)

**Design:** Full-screen celebration with:
- Large animated title: "LEVEL UP!"
- Previous level name -> New level name transition
- Animated star/trophy icon
- "Continue to Level N!" primary button (gold, same style as Start Game)
- "Back to Start" secondary button (same style as ResultScreen)
- Sonic-themed gradient background (consistent with all screens)
- Accessibility: `aria-live="assertive"`, `role="alert"` for the level-up announcement

**Animation approach:** Use existing Tailwind keyframes (pop-in, bounce-scale, pulse-scale) — no new keyframes needed. This keeps the animation system DRY.

**Level 13 edge case:** If the child is already at level 13, `shouldLevelUp` can still trigger (confidence engine has no level awareness). The level-up handler in App.jsx caps `newLevel` at 13. If `previousLevel === 13`, LevelUpScreen shows a "Math Champion!" variant instead of "Continue to Level 14" — something like "You've mastered all levels!"

### LevelMap.jsx (NEW)

**Design:** Vertical road with 13 numbered checkpoints, displayed bottom-to-top (level 1 at bottom, 13 at top). Auto-scrolls to center the current level.

**Visual states per checkpoint:**
- Completed (level < currentLevel): Gold circle with checkmark, solid connector line
- Current (level === currentLevel): Pulsing blue circle with star, "YOU ARE HERE" label
- Locked (level > currentLevel): Grey circle with lock icon, dashed connector line

**Implementation details:**
- Uses LEVELS array from `src/config/levels.js` for level names
- Pure presentational component, no state
- Vertical layout with `flex-col-reverse` to render bottom-to-top
- Each checkpoint is an `<li>` inside `<ol>` for semantics
- Uses `useRef` + `scrollIntoView` to auto-center current level on mount
- Max height constrained (e.g., `max-h-64`) with overflow scroll
- Touch-scrollable on mobile

**Sizing:** Compact by default (inline on StartScreen), not full-screen. Each checkpoint is ~48px tall to keep all 13 levels within ~624px. On mobile, the scroll container clips at ~256px (4-5 visible levels).

### src/components/index.js

**Changes:** Add exports for LevelUpScreen and LevelMap.

### tailwind.config.js

**Changes:** None required. Existing animations (pop-in, bounce-scale, pulse-scale) cover all needs.

---

## 4. Sub-Task Breakdown

### Sub-task #28.1: Wire currentLevel from profile through game loop
**Files:** `App.jsx`, `GameScreen.jsx`
**Scope:**
- Read `activeProfile.currentLevel` in App.jsx
- Pass as prop to GameScreen
- GameScreen passes to `useGameState({ currentLevel })`
- Replace hardcoded `currentLevel={2}` in LearningAid
- Update PropTypes
**Tests:** Update GameScreen tests — verify currentLevel flows through to useGameState and LearningAid
**Estimated:** 2-3h
**Dependencies:** None (prerequisite for all other sub-tasks)

### Sub-task #28.2: Level-up detection and screen transition
**Files:** `App.jsx`, `GameScreen.jsx`
**Scope:**
- GameScreen: destructure `shouldLevelUp`, add useEffect to call `onLevelUp`
- App.jsx: add `'levelup'` screen state, `handleLevelUp`, `handleLevelUpContinue`, `handleLevelUpExit`
- App.jsx: persist new level via `updateProfile`
- Stub LevelUpScreen (simple div with "Level Up!" text + continue button) for testing
**Tests:**
- GameScreen: verify `onLevelUp` called when shouldLevelUp=true and showFeedback=false
- App.jsx: verify screen transitions game -> levelup -> game, level persistence
- Edge case: level 13 cap
**Estimated:** 4-5h
**Dependencies:** #28.1

### Sub-task #28.3: LevelUpScreen celebration component
**Files:** `src/components/LevelUpScreen.jsx`, `src/components/LevelUpScreen.test.jsx`, `src/components/index.js`
**Scope:**
- Full celebration UI (see design above)
- Level 13 "Math Champion" variant
- Accessibility (aria-live, keyboard navigation)
- Responsive design (mobile-first)
**Tests:**
- Renders correct level names
- Shows "Math Champion" at level 13
- Calls onContinue / onExit on button clicks
- Accessibility attributes present
**Estimated:** 4-5h
**Dependencies:** #28.2 (needs the screen transition wiring)

### Sub-task #28.4: LevelMap visualization component
**Files:** `src/components/LevelMap.jsx`, `src/components/LevelMap.test.jsx`, `src/components/index.js`
**Scope:**
- 13-checkpoint vertical road layout
- Three visual states (completed, current, locked)
- Auto-scroll to current level
- Responsive scrollable container
**Tests:**
- Correct visual state for each checkpoint at various currentLevel values
- Level names from LEVELS config
- Scroll behavior (useRef mock)
- Accessibility (ordered list, aria attributes)
**Estimated:** 4-5h
**Dependencies:** None (can be done in parallel with #28.2 and #28.3)

### Sub-task #28.5: Integrate LevelMap into StartScreen
**Files:** `StartScreen.jsx`, `App.jsx`
**Scope:**
- Pass `currentLevel` from App.jsx to StartScreen
- Render LevelMap inside StartScreen
- Layout adjustment (LevelMap below Start Game button, before encouraging tip)
- Update PropTypes
**Tests:**
- StartScreen renders LevelMap with correct currentLevel
- Layout integration test
**Estimated:** 1-2h
**Dependencies:** #28.4

### Sub-task #28.6: Integration testing and edge cases
**Files:** New integration test file
**Scope:**
- Full flow: start -> game -> shouldLevelUp -> levelup -> continue -> game (new level)
- Level 13 boundary
- Profile persistence verification
- Multiple level-ups in one session (start at level 1, reach level 3)
- Unmount cleanup (no memory leaks from timeouts)
**Estimated:** 3-4h
**Dependencies:** #28.1 through #28.5

---

## 5. Parallel Execution Groups

```
Group A (sequential, critical path):
  #28.1 (prerequisite) -> #28.2 (detection + transition) -> #28.3 (LevelUpScreen) -> #28.6 (integration)

Group B (parallel with Group A after #28.1):
  #28.4 (LevelMap) -> #28.5 (StartScreen integration)
```

**Optimal sprint schedule:**
- Day 1: #28.1 + start #28.2 + start #28.4 (parallel)
- Day 2: Finish #28.2 + finish #28.4 + #28.5
- Day 3: #28.3 + #28.6

---

## 6. Test Strategy

### Unit Tests (per component)

| Component | Tests | Key Scenarios |
|-----------|-------|---------------|
| LevelUpScreen | 8-10 | Renders level names, Math Champion variant at 13, button callbacks, a11y |
| LevelMap | 10-12 | 3 visual states x multiple levels, level names, scroll behavior, a11y |
| GameScreen (modified) | 5-8 | shouldLevelUp triggers onLevelUp, currentLevel prop flows through |
| StartScreen (modified) | 3-4 | LevelMap rendered with correct props |

### Integration Tests

| Scenario | Expected |
|----------|----------|
| Full level-up flow | game -> feedback -> levelup -> continue -> game at level N+1 |
| Level 13 cap | Level-up at 13 shows "Math Champion", stays at 13 |
| Profile persistence | After level-up, reload -> profile.currentLevel updated |
| Exit during level-up | levelup -> "Back to Start" -> start screen, level persisted |
| Multiple level-ups | Start at L1, level up twice -> profile.currentLevel = 3 |

### Testing Approach for Race Condition
The race condition (auto-advance vs level-up transition) must be explicitly tested:
1. Mock `useGameState` to return `shouldLevelUp=true` and simulate `showFeedback` transitioning from true to false.
2. Verify `onLevelUp` is called exactly once.
3. Verify no `nextProblem` call after `onLevelUp` fires (GameScreen should be unmounted).

**Expected test count increase:** ~40-50 new tests across all sub-tasks.

---

## 7. Technical Risks & Mitigations

### Risk 1: useEffect ordering — shouldLevelUp fires before feedback completes
**Severity:** Medium
**Description:** If `shouldLevelUp` becomes true on the same render that `showFeedback` becomes true, the useEffect condition `shouldLevelUp && !showFeedback` is false (showFeedback is true). The transition waits for feedback to end. BUT: if `nextProblem()` fires and resets `showFeedback` to false, the useEffect then fires correctly. The risk is if `nextProblem` also resets some state that interferes.
**Mitigation:** `nextProblem()` only changes `currentProblem`, `userAnswer`, `showFeedback`, `isCorrect` — none of which affect `shouldLevelUp` (which is in the confidence reducer). Safe.

### Risk 2: Double level-up — effect fires twice
**Severity:** Low
**Description:** React strict mode in dev runs effects twice. The useEffect could call `onLevelUp` twice.
**Mitigation:** App.jsx's `handleLevelUp` should be idempotent — if already on `'levelup'` screen, ignore. Add a guard: `if (screen === 'levelup') return` or use a ref.

### Risk 3: LevelMap scroll on small screens
**Severity:** Low
**Description:** 13 checkpoints in a vertical layout may be too tall for mobile screens.
**Mitigation:** Fixed `max-h-64` (256px) container with `overflow-y-auto`. Auto-scroll to current level on mount. Touch scrolling works natively.

### Risk 4: Profile update timing
**Severity:** Low
**Description:** `updateProfile` writes to localStorage synchronously and updates React context. The new `currentLevel` in `activeProfile` is available on the next render. Since the screen transition to `'levelup'` happens in the same event handler as `updateProfile`, React batches the state updates. When transitioning from `'levelup'` back to `'game'`, `activeProfile.currentLevel` will be the new value.
**Mitigation:** Verified — `updateProfile` dispatches `Actions.UPDATE_PROFILE` which updates `activeProfile` in the same reducer cycle. No timing issue.

### Risk 5: shouldLevelUp sticky flag not cleared between sessions
**Severity:** Medium
**Description:** `shouldLevelUp` is sticky in the confidence reducer (line 131: `state.shouldLevelUp || meetsLevelUp`). When transitioning back to the game at a new level, if `confidence.reset()` is not called, the flag remains true and immediately triggers another level-up.
**Mitigation:** `startGame()` in useGameState (line 104) already calls `confidence.reset()`. When GameScreen remounts at the new level, `startGame()` is called (lines 43-45 in GameScreen), which resets confidence. The flag is cleared. Safe.

---

## 8. Out of Scope (Deferred)

- Audio/voice celebration (separate issue, AI media integration)
- Hero avatar animation on level-up screen (requires asset pipeline)
- Click-to-select on LevelMap (future UX enhancement)
- Level-down mechanic when struggling (needs product decision)
- Confetti/particle animation library (overkill for this phase; CSS animations suffice)
