# Product Manager Grooming: Issue #28 -- Phase 7: Level Progression UI

## 1. Strategic Alignment & Business Value

### Why This Matters

Level progression is the **core engagement loop** of any game for children. Right now, the app has a robust confidence engine (`useConfidence`) that detects mastery, but there is zero visible feedback when a child masters a level. The `shouldLevelUp` flag fires and is never acted upon -- the child stays on the same level forever. This is the single biggest gap between the engine we have built and a product that a 7-year-old would want to return to daily.

### Business Value

| Dimension | Assessment |
|-----------|------------|
| Retention | **Critical** -- Without visible progression, the child has no reason to come back. Level-up celebrations create anticipation and habit loops. |
| Engagement | **High** -- A level map gives a sense of journey. "I'm on level 4!" is something a child tells their friends. |
| Foundation | **Required for future phases** -- Phase 8+ features (adaptive difficulty, rewards) all depend on a working level progression system. |

### RICE Score

| Factor | Value | Rationale |
|--------|-------|-----------|
| Reach | 100% (all users) | Every user hits level-up eventually |
| Impact | 3 (massive) | Without this, the game is a flat loop with no goal |
| Confidence | 0.9 (high) | Clear requirements, existing sub-systems proven |
| Effort | 3 person-weeks | ~60h total across 4 sub-tasks |
| **RICE Score** | **90** | (100% x 3 x 0.9) / 3 |

**Priority: P0** -- Must ship before any other epic. The app is functionally incomplete without level progression.

---

## 2. Critical Prerequisite: currentLevel Wiring (BLOCKER)

### The Problem

`currentLevel` is **hardcoded to 2** in two places:
1. `GameScreen.jsx` line 112: `currentLevel={2}` passed to `<LearningAid>`
2. `useGameState.js` line 53: `currentLevel = 2` default parameter (never overridden because `GameScreen` does not pass it)

Meanwhile, the profile system **already stores** `currentLevel` per profile (`profiles.js` line 162), and `ProfileContext` exposes `updateProfile(id, { currentLevel: N })`. But `App.jsx` never reads `activeProfile.currentLevel` and never passes it to `GameScreen`.

### Product Decision

This is a **prerequisite sub-task** that must ship before celebration or level map. Without it, level-up is cosmetic only -- the child would see a celebration but still play the same level.

This is NOT in the existing sub-issues (#29, #30). A new sub-issue is required.

---

## 3. Product Decisions on Open Questions

### Decision 1: Audio/Voice for Level-Up

**Decision: Defer audio. Use visual-only celebration for MVP.**

Rationale:
- No audio infrastructure exists (no Web Audio API, no sound files, no preloading)
- Adding audio is a separate engineering effort (loading, caching, iOS silent mode, PWA constraints)
- A bouncing animation + confetti + large text is sufficient excitement for a 7-year-old
- Ship a `data-testid="audio-placeholder"` div so future audio integration has a mount point
- Audio can be Phase 8 or a dedicated issue

### Decision 2: Hero Avatar

**Decision: Use themed emoji/unicode characters, not images.**

Rationale:
- No avatar images exist, and creating/licensing them is a separate workstream
- The app already uses emoji (hedgehog + dash on StartScreen)
- A large themed emoji (hedgehog for sonic theme, spider for spiderman theme) with CSS scale animation is visually exciting and zero-cost
- The AI video/image workstream (parallel) may produce avatars later -- they can be swapped in without changing the component API
- Accept a `heroEmoji` or `heroImage` prop to future-proof

### Decision 3: Level-Up Flow Architecture

**Decision: Option A -- Overlay within GameScreen, managed by App.jsx screen state.**

Detailed flow:
1. `shouldLevelUp` becomes true in `useGameState`
2. `handleAnswer` in `GameScreen` detects `shouldLevelUp` after recording the answer
3. Instead of auto-advancing to next problem, GameScreen calls `onLevelUp()` callback
4. App.jsx receives `onLevelUp`, sets screen to `'levelup'`
5. `LevelUpCelebration` renders as a full screen (same pattern as `ResultScreen`)
6. "Continue" button in `LevelUpCelebration` increments `currentLevel` via `updateProfile`, calls `acknowledgeLevelUp()`, and sets screen back to `'game'`

Why Option A (App.jsx screen state) over overlay:
- Consistent with existing navigation pattern (start/game/result are all App-level states)
- Clean separation: GameScreen does not need to know about celebration UI
- Prevents z-index/animation conflicts with existing Feedback overlay
- Easy to test in isolation

### Decision 4: Max Level (Level 13) Handling

**Decision: Show a "Math Champion" completion screen. Do not loop or restart.**

Rationale:
- There are exactly 13 levels. A child reaching level 13 has mastered the curriculum.
- Show a special "Champion" celebration (different from normal level-up) with a trophy/crown emoji
- After Champion screen, the child stays on level 13 forever (the hardest level)
- The "Continue" button on Champion screen says "Play as Champion!" and returns to GameScreen at level 13
- This is a simple variant of the LevelUpCelebration component (prop: `isChampion={true}`)
- No separate sub-issue needed -- handle within the celebration screen sub-issue

### Decision 5: Confidence Reset on Level Change

**Decision: Yes, reset confidence to default (50) when advancing to a new level.**

Rationale:
- A new level means new, harder problems. The child's demonstrated mastery of level N says nothing about level N+1.
- Starting at 50 (default) gives a neutral starting point -- not struggling, not ready to level up.
- `confidence.reset()` already exists and is called on `startGame()`. The level-up flow should also call it.
- This prevents false "shouldLevelUp" triggers from stale high confidence after advancing.

### Decision 6: Auto-Advance Race Condition

**Decision: Intercept the feedback timeout when `shouldLevelUp` is true.**

The current flow in `handleAnswer`:
1. Record answer
2. Show feedback for 2000ms
3. `setTimeout` calls `nextProblem()`

When `shouldLevelUp` triggers, step 3 must NOT fire. Instead:
- After recording the answer, check `shouldLevelUp`
- If true: show feedback briefly (500ms shorter or same), then call `onLevelUp()` instead of `nextProblem()`
- The `clearTimeout` cleanup on unmount handles the case where App navigates away from GameScreen

This is a logic change in `GameScreen` / `useGameState`, not a new component.

---

## 4. User Stories & Acceptance Criteria

### Sub-Task A: Wire currentLevel from Profile to Game (NEW -- prerequisite)

**User Story:** As a player, I want the game to use my profile's current level so that I play problems appropriate to my progress.

**Acceptance Criteria:**
- [ ] `App.jsx` reads `activeProfile.currentLevel` and passes it to `GameScreen`
- [ ] `GameScreen` passes `currentLevel` to `useGameState` hook
- [ ] `GameScreen` passes `currentLevel` to `<LearningAid>` (replacing hardcoded `2`)
- [ ] When profile has `currentLevel: 5`, problems are generated from level 5 config
- [ ] Default behavior unchanged when no profile (falls back to level 2)
- [ ] Existing tests updated to cover currentLevel propagation

**Effort: S (4-6h)** -- Straightforward prop threading, no new components.

### Sub-Task B: Level-Up Celebration Screen (existing #29, updated scope)

**User Story:** As a player, when I master a level, I want to see an exciting celebration that tells me I am moving to the next level, so that I feel rewarded and motivated.

**Acceptance Criteria:**
- [ ] `LevelUpCelebration` component renders when `shouldLevelUp` is true
- [ ] Shows completed level name (from `LEVELS` config) and next level name
- [ ] Themed hero emoji animates (bounce/scale CSS animation)
- [ ] Confetti or star particles effect (CSS-only, no library)
- [ ] "Continue to [Level Name]!" button is prominent (same style as StartScreen button)
- [ ] Pressing Continue: increments `currentLevel` in profile via `updateProfile`, calls `acknowledgeLevelUp()`, navigates to game screen
- [ ] When `currentLevel === 13` and `shouldLevelUp` triggers, show "Math Champion" variant:
  - Trophy/crown emoji instead of regular hero
  - "You completed ALL levels!" message
  - "Play as Champion!" button (stays on level 13)
- [ ] Accessible: button has focus on mount, aria-live announcement, reduced-motion support
- [ ] Auto-advance timeout in GameScreen is intercepted (does NOT call nextProblem when shouldLevelUp is true)
- [ ] Confidence engine resets to 50 after level advancement
- [ ] Audio placeholder div rendered with `data-testid="audio-placeholder"`

**Effort: M (12-16h)** -- New component, App.jsx flow changes, timeout interception, champion variant, animations, tests.

### Sub-Task C: Level Map Visualization (existing #30, updated scope)

**User Story:** As a player, I want to see a visual map of all levels on the start screen so that I can see how far I have progressed and what levels are ahead.

**Acceptance Criteria:**
- [ ] `LevelMap` component shows all 13 levels as a horizontal scrollable row
- [ ] Three visual states per level node:
  - **Completed** (id < currentLevel): Green checkmark/star, full opacity
  - **Current** (id === currentLevel): Gold pulsing glow, level name prominent
  - **Locked** (id > currentLevel): Faded/greyed out, lock icon or reduced opacity
- [ ] Each node shows level name below it
- [ ] Horizontal scroll on small screens (touch-friendly, no scrollbar on mobile)
- [ ] Auto-scrolls to current level on mount
- [ ] Current level node is visually prominent (larger, glowing)
- [ ] Tapping a completed level does NOT switch to it (read-only in MVP)
- [ ] Accessible: `role="list"`, each level is `role="listitem"`, current level has `aria-current="step"`
- [ ] Integrates into `StartScreen` between the progress stats and the Start button
- [ ] Receives `currentLevel` as prop from App.jsx via StartScreen

**Effort: M (10-14h)** -- New component, CSS animations, scroll behavior, responsive design, a11y, tests.

### Sub-Task D: Integration & E2E Wiring (NEW -- final sub-task)

**User Story:** As a player, I want the complete flow to work end-to-end: play game, master level, see celebration, advance, see updated map, play new level.

**Acceptance Criteria:**
- [ ] Full flow works: Start (see map at level N) -> Play -> shouldLevelUp -> Celebration -> Continue -> Start (map shows level N+1) -> Play (level N+1 problems)
- [ ] Champion flow: Level 13 -> shouldLevelUp -> Champion celebration -> Play as Champion -> Start (all levels complete on map)
- [ ] Profile persistence: Close and reopen app, currentLevel is preserved
- [ ] Multiple profiles: Each profile tracks its own currentLevel independently
- [ ] No regressions in existing game flow (normal play without level-up still works)

**Effort: S (4-6h)** -- Mostly integration testing and edge case handling.

---

## 5. Scope: MVP vs Nice-to-Have

### MVP (Must Ship)

| Item | Sub-Task |
|------|----------|
| Wire currentLevel from profile to game | A |
| Level-up celebration (visual only, no audio) | B |
| Champion variant for level 13 | B |
| Auto-advance interception | B |
| Confidence reset on level change | B |
| Level map on StartScreen (read-only) | C |
| End-to-end integration | D |

### Nice-to-Have (Future Issues)

| Item | Rationale for Deferral |
|------|----------------------|
| Audio/voice on level-up | No audio infrastructure; separate workstream |
| Custom avatar images | AI media workstream in progress; emoji sufficient for MVP |
| Tappable levels on map (replay past levels) | Adds complexity; read-only map is sufficient for progression visibility |
| Level-down on struggling | Controversial UX for children; needs research |
| Animated path/road between level nodes | Visual polish; functional map ships first |
| Transition animations between screens | General polish issue, not level-specific |
| Level-up notification sound | Blocked by audio infrastructure |

---

## 6. Effort Summary

| Sub-Task | Size | Hours | Dependencies |
|----------|------|-------|--------------|
| A: Wire currentLevel | S | 4-6h | None (prerequisite) |
| B: Celebration Screen | M | 12-16h | A must be complete |
| C: Level Map | M | 10-14h | A must be complete (needs currentLevel prop) |
| D: Integration | S | 4-6h | A, B, C all complete |
| **Total** | **L** | **30-42h** | Sequential: A -> [B, C parallel] -> D |

Recommended execution order:
1. **A** (prerequisite, unblocks everything)
2. **B and C in parallel** (independent components, both depend only on A)
3. **D** (integration, depends on B and C)

---

## 7. Product Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Level-up threshold too easy/hard | Medium | LEVEL_UP_THRESHOLD=85 + 3 consecutive correct is already tuned. Monitor in production, adjust constants if needed. |
| Child confusion on level names | Low | Level names are descriptive ("Cross the 10", "Mixed Warrior"). Test with target user. |
| Celebration screen interrupts flow | Low | Celebration is full-screen, not an overlay. Clear "Continue" button. Auto-focus on button. |
| Race condition: shouldLevelUp fires mid-feedback | High | Must intercept setTimeout in handleAnswer. Clear test coverage required. |
| Champion screen feels like "game over" | Medium | Wording matters: "Play as Champion!" not "You're done!". Child continues playing hardest level. |
| Map scroll confusing on small phones | Low | Auto-scroll to current level. Touch-friendly. Test on 375px viewport. |

---

## 8. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Level advancement rate | >50% of active users advance at least 1 level within 7 days | Profile currentLevel tracking |
| Session length after level-up | No decrease vs pre-feature | Compare session duration before/after |
| Return rate | >60% of users return within 48h of first level-up | lastActiveAt tracking |
| Champion completions | At least 1 user reaches level 13 within 30 days | Profile scan |
| Bug reports | 0 reports of stuck levels or skipped celebrations | Manual monitoring |

---

## 9. Open Items for Tech Lead / Solution Designer

1. **Confirm timeout interception approach** -- Should `useGameState` expose an `onLevelUp` callback, or should `GameScreen` read `shouldLevelUp` and handle routing?
2. **Confirm confidence reset timing** -- Reset before or after the celebration screen renders?
3. **CSS animation approach** -- Tailwind keyframes (like existing `animate-step-fade`) or a small CSS-only confetti library?
4. **Test strategy** -- Unit tests for each component + integration test for full flow. What's the right boundary for the integration test?

---

## 10. Appendix: Existing Infrastructure Inventory

### Already Built (can be leveraged)
- `useConfidence` hook with `shouldLevelUp`, `acknowledgeLevelUp()`, `reset()`
- `LEVELS` config (13 levels with names, operators, ranges)
- `getLevelConfig(levelId)` utility
- Profile system: `createProfile`, `updateProfile`, `getProfileById` with `currentLevel` field
- `ProfileContext` with `updateProfile(id, updates)` action
- `useGameState` composing `useConfidence`, accepting `currentLevel` param
- Tailwind animations: `animate-pulse-scale`, `animate-step-fade`, `animate-aid-enter`, `animate-arc-draw`
- Existing screen navigation pattern in `App.jsx` (screen state: start/game/result)

### Not Built (needs creation)
- `LevelUpCelebration` component (new)
- `LevelMap` component (new)
- currentLevel prop threading from App -> GameScreen (wiring)
- Auto-advance interception logic (modification)
