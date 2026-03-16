# Regression Test Plan -- math-trainer

**Purpose:** Master regression plan. Read by `regression.yml` before every daily run.
Defines every critical user path that MUST continue working after each deployment.
Test automators implement the scenarios listed here in `tests/e2e/regression/`.

**Last updated:** 2026-03-13
**Maintained by:** QA / Tech Lead
**Workflow:** `.github/workflows/regression.yml` (daily at 08:00 UTC + manual dispatch)

---

## Promoted Features

| Epic | Title | Promoted | Version | Key Source Files |
|------|-------|----------|---------|------------------|
| #1 | Sonic Math Trainer MVP | 2026-03-04 | v1.0.0 | `App.jsx`, `GameScreen.jsx`, `StartScreen.jsx`, `ResultScreen.jsx` |
| #11 | Level Config + Problem Generator | 2026-03-08 | v1.1.0 | `src/config/levels.js`, `src/utils/mathProblems.js` |
| #14 | Confidence Engine | 2026-03-08 | -- | `src/hooks/useConfidence.js`, `src/hooks/useGameState.js` |
| #17 | Multi-Profile System | 2026-03-09 | v1.2.0 | `src/utils/profiles.js`, `src/context/ProfileContext.jsx`, `src/components/ProfileSwitcher.jsx`, `src/components/CreateProfile.jsx`, `src/components/PinEntry.jsx` |
| #25 | Learning Aids (Tier 1 + Tier 2) | 2026-03-12 | v1.3.0 | `src/components/aids/LearningAid.jsx`, `src/components/aids/DotCounter.jsx`, `src/components/aids/StrategyHint.jsx`, `src/utils/strategies.js` |
| #28 | Level Progression UI | 2026-03-13 | v1.4.0 | `src/components/LevelUpScreen.jsx`, `src/components/LevelMap.jsx`, `src/components/GameScreen.jsx`, `src/App.jsx` |

---

## Environments

| Environment | URL | Branch |
|-------------|-----|--------|
| Production | https://math-trainer-1a632.web.app | `main` |
| Staging | https://math-trainer-1a632-staging.web.app | `develop` |

---

## Regression Scenarios

### Core / MVP (Epic #1)

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-001 | Core | App loads and shows profile switcher | Page loads with HTTP 200, `#root` is non-empty, no critical console errors, profile switcher UI visible | `tests/e2e/regression/core.spec.js` | P0 |
| REG-002 | Core | PWA manifest is accessible | `/manifest.webmanifest` returns 200, contains `name: "Math Trainer"` and `icons` array | `tests/e2e/regression/core.spec.js` | P0 |
| REG-003 | Core | Can start a game session | After profile selection, start screen shows "Play" button; clicking it transitions to GameScreen with a visible math problem | `tests/e2e/regression/core.spec.js` | P0 |
| REG-004 | Core | Can answer a question and see feedback | Clicking an answer button shows feedback overlay (correct/incorrect animation); buttons are disabled during feedback | `tests/e2e/regression/core.spec.js` | P0 |
| REG-005 | Core | Score increments on correct answer | Answering correctly adds 10 points to the displayed score | `tests/e2e/regression/core.spec.js` | P0 |
| REG-006 | Core | Next problem auto-advances after feedback | After 2-second feedback duration, a new problem appears with fresh answer options | `tests/e2e/regression/core.spec.js` | P1 |
| REG-007 | Core | Exit button returns to start screen | Clicking "Exit" during a game shows the start screen (or result screen with session stats) | `tests/e2e/regression/core.spec.js` | P1 |
| REG-008 | Core | No console errors during gameplay | Playing through 3 questions produces zero critical console errors | `tests/e2e/regression/core.spec.js` | P0 |
| REG-009 | Core | Loading state renders while authenticating | On first load, "Loading..." text appears briefly before the app content | `tests/e2e/regression/core.spec.js` | P1 |

### Level Config + Problem Generator (Epic #11)

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-010 | #11 | 13 levels defined and accessible | `getLevelConfig(1)` through `getLevelConfig(13)` return valid config objects without throwing | `tests/e2e/regression/levels.spec.js` | P0 |
| REG-011 | #11 | Invalid level IDs throw errors | `getLevelConfig(0)` and `getLevelConfig(14)` both throw `Error` | `tests/e2e/regression/levels.spec.js` | P1 |
| REG-012 | #11 | Problem generator respects addition-only level | Level 1 (`operators: ['+']`, range 1-5) produces only `+` problems with operands between 1 and 5 | `tests/e2e/regression/levels.spec.js` | P0 |
| REG-013 | #11 | Problem generator respects subtraction level | Level 3 (`operators: ['-']`, range 1-10) produces only `-` problems with non-negative results | `tests/e2e/regression/levels.spec.js` | P0 |
| REG-014 | #11 | Problem generator respects mixed operators | Level 4 (`operators: ['+', '-']`) produces both `+` and `-` problems over multiple generations | `tests/e2e/regression/levels.spec.js` | P1 |
| REG-015 | #11 | Problem generator respects multiplication config | Level 10 (`operators: ['*']`, `multipliers: [2,5,10]`) produces only `*` problems using the specified multipliers | `tests/e2e/regression/levels.spec.js` | P0 |
| REG-016 | #11 | Problem generator respects division config | Level 12 (`operators: ['/']`, `divisors: [2,5,10]`) produces only `/` problems with integer quotients | `tests/e2e/regression/levels.spec.js` | P0 |
| REG-017 | #11 | Problem generator respects multiplesOf constraint | Level 8 (`multiplesOf: 10`) generates operands that are multiples of 10 | `tests/e2e/regression/levels.spec.js` | P1 |
| REG-018 | #11 | Generated problem has exactly 4 answer options | Every generated problem includes the correct answer plus 3 wrong answers (4 total, no duplicates) | `tests/e2e/regression/levels.spec.js` | P0 |

### Confidence Engine (Epic #14)

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-019 | #14 | Initial confidence score is 50 | `useConfidence()` initializes with `score: 50`, `streak: 0`, `consecutiveWrong: 0`, `shouldLevelUp: false` | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-020 | #14 | Correct answer increases confidence score | Recording a correct answer increases score by at least `CORRECT_DELTA` (8 points) | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-021 | #14 | Wrong answer decreases confidence score | Recording a wrong answer decreases score by `WRONG_DELTA` (12 points) or `SLOW_WRONG_DELTA` (8 points) for slow responses | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-022 | #14 | Fast correct answer earns bonus | Answering correctly under 3000ms adds `FAST_BONUS` (3 extra points) to the delta | `tests/e2e/regression/confidence.spec.js` | P1 |
| REG-023 | #14 | Streak multiplier applies at 2 and 5 | Streak of 2 applies 1.3x multiplier; streak of 5 applies 1.6x multiplier to the correct delta | `tests/e2e/regression/confidence.spec.js` | P1 |
| REG-024 | #14 | Wrong answer resets streak to 0 | After a correct streak, a single wrong answer resets `streak` to 0 | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-025 | #14 | shouldLevelUp triggers at threshold | Score >= 85 AND streak >= 3 sets `shouldLevelUp: true` | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-026 | #14 | shouldLevelUp is sticky | Once `shouldLevelUp` becomes true, a subsequent wrong answer does not reset it to false | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-027 | #14 | acknowledgeLevelUp clears the flag | Calling `acknowledgeLevelUp()` sets `shouldLevelUp` back to false | `tests/e2e/regression/confidence.spec.js` | P1 |
| REG-028 | #14 | isStruggling flag at threshold | Score below 35 sets `isStruggling: true` | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-029 | #14 | isCritical flag at threshold | Score below 20 AND 5+ consecutive wrong answers sets `isCritical: true` | `tests/e2e/regression/confidence.spec.js` | P1 |
| REG-030 | #14 | Score is clamped between 0 and 100 | Excessive correct answers never push score above 100; excessive wrong answers never push score below 0 | `tests/e2e/regression/confidence.spec.js` | P0 |
| REG-031 | #14 | Reset restores default state | Calling `reset()` returns score to 50, streak to 0, and clears all flags | `tests/e2e/regression/confidence.spec.js` | P1 |

### Multi-Profile System (Epic #17)

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-032 | #17 | Profile switcher shows on app load (no active profile) | When no profile is active, app renders `ProfileSwitcher` with "Add Hero" / "Create Hero" button | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-033 | #17 | Can create a profile with nickname + theme + PIN | CreateProfile wizard accepts nickname (1-12 chars), theme (`sonic` or `spiderman`), and 4-digit PIN; profile appears in localStorage | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-034 | #17 | PIN is hashed with SHA-256 before storage | Created profile stores `pinHash` as a 64-character hex string; raw PIN is never in localStorage | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-035 | #17 | Can select a profile with correct PIN | Entering the correct 4-digit PIN activates the profile and shows the start screen | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-036 | #17 | Wrong PIN is rejected | Entering an incorrect PIN does not activate the profile; user stays on profile switcher | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-037 | #17 | Can switch between profiles | After playing as profile A, clicking "Switch Profile" returns to the switcher; selecting profile B loads profile B's context | `tests/e2e/regression/profiles.spec.js` | P1 |
| REG-038 | #17 | Profile persists across page refresh | Creating profile, refreshing the page, and re-entering PIN restores the same profile (localStorage survives) | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-039 | #17 | Active profile survives tab refresh | Active profile id stored in sessionStorage; refreshing the tab auto-restores the active profile without re-entering PIN | `tests/e2e/regression/profiles.spec.js` | P1 |
| REG-040 | #17 | Maximum 4 profiles enforced | After creating 4 profiles, attempting to create a 5th throws an error / the "Add Hero" button is disabled | `tests/e2e/regression/profiles.spec.js` | P1 |
| REG-041 | #17 | Anonymous auth works | Firebase anonymous sign-in completes without error; `user.uid` is set (check no auth error screen) | `tests/e2e/regression/profiles.spec.js` | P0 |
| REG-042 | #17 | Profile nickname validation | Empty nickname rejected; nickname > 12 Unicode chars rejected; whitespace-only rejected | `tests/e2e/regression/profiles.spec.js` | P1 |

### Learning Aids (Epic #25)

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-043 | #25 | LearningAid hidden when not struggling | When `isStruggling` is false, no learning aid container is rendered | `tests/e2e/regression/learning-aids.spec.js` | P0 |
| REG-044 | #25 | DotCounter shown for levels 1-4 when struggling | When `isStruggling` is true and level is 1-4, `DotCounter` component renders with dot visualizations | `tests/e2e/regression/learning-aids.spec.js` | P0 |
| REG-045 | #25 | StrategyHint shown for levels 5+ when struggling | When `isStruggling` is true and level >= 5, `StrategyHint` component renders with step-by-step text hints | `tests/e2e/regression/learning-aids.spec.js` | P0 |
| REG-046 | #25 | Dismiss button hides learning aid | Clicking "I got it!" hides the learning aid for the current problem | `tests/e2e/regression/learning-aids.spec.js` | P0 |
| REG-047 | #25 | Learning aid resets on new problem | After dismissing, advancing to the next problem (new React key) re-shows the aid if still struggling | `tests/e2e/regression/learning-aids.spec.js` | P1 |
| REG-048 | #25 | Strategy detection for addition (doubles) | `getStrategies(5, 5, '+')` returns a strategy with `id: 'doubles'` | `tests/e2e/regression/learning-aids.spec.js` | P1 |
| REG-049 | #25 | Strategy detection for addition (bridging) | `getStrategies(8, 5, '+')` returns a strategy with `id: 'bridging_add'` | `tests/e2e/regression/learning-aids.spec.js` | P1 |
| REG-050 | #25 | Strategy detection for subtraction (count back) | `getStrategies(7, 2, '-')` returns a strategy with `id: 'count_back'` | `tests/e2e/regression/learning-aids.spec.js` | P1 |
| REG-051 | #25 | Strategies return empty for multiplication/division | `getStrategies(6, 3, '*')` and `getStrategies(6, 3, '/')` both return `[]` | `tests/e2e/regression/learning-aids.spec.js` | P1 |
| REG-052 | #25 | At least one strategy guaranteed for every +/- problem | For any valid addition or subtraction problem, `getStrategies()` returns a non-empty array (count-on/count-back as fallback) | `tests/e2e/regression/learning-aids.spec.js` | P0 |
| REG-053 | #25 | Accessibility: aid has aria-live or role=region | The learning aid container or strategy hint includes appropriate ARIA attributes for screen readers | `tests/e2e/regression/learning-aids.spec.js` | P1 |
| REG-054 | #25 | Dismiss button meets 44px touch target | The "I got it!" button has `min-h-[44px]` (at least 44px height) for mobile accessibility | `tests/e2e/regression/learning-aids.spec.js` | P1 |

### Level Progression UI (Epic #28)

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-061 | #28 | Level map renders 13 nodes on StartScreen | `LevelMap` is visible with 13 `[data-testid^="level-node-"]` elements | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-062 | #28 | Level map has accessible list structure | Container has `role="list"` + `aria-label="Level progress map"`, 13 `role="listitem"` children | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-063 | #28 | New profile starts at level 1 (current node) | Level-node-1 has `aria-label` containing "current" | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-064 | #28 | Locked levels show lock icons | Levels above current have `aria-label` containing "locked" and a visible lock icon | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-065 | #28 | 12 connectors rendered between level nodes | 12 `[data-testid^="connector-"]` elements exist in the level map | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-066 | #28 | Level node aria-labels include name and status | Node 1 label contains "First Steps", node 13 label contains "Math Champion" + "locked" | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-067 | #28 | Play button starts game screen | Clicking Play transitions from StartScreen to GameScreen with visible problem | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-068 | #28 | Game screen shows answer buttons | GameScreen renders multiple answer option buttons for the current problem | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-069 | #28 | LevelUpScreen heading structure | "Level Complete!" heading visible after level-up trigger (deferred -- unit-tested) | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-070 | #28 | LevelUpScreen confetti particles | 12 confetti particles render with staggered CSS animation (deferred -- unit-tested) | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-071 | #28 | LevelUpScreen hero emoji visible | Rocket emoji (or trophy for champion) visible with bounce animation (deferred -- unit-tested) | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-072 | #28 | Continue button meets 44px touch target | "Continue to Level N!" button has `min-h-[44px]` (deferred -- unit-tested) | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-073 | #28 | Screen-reader level-up announcement | `role="status"` + `aria-live="polite"` with level completion text (deferred -- unit-tested) | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-074 | #28 | Champion variant at max level | "Math Champion!" heading, trophy emoji, "Play Again at Level 13!" CTA (deferred -- unit-tested) | `tests/e2e/regression/level-progression.spec.js` | P1 |
| REG-075 | #28 | Only one screen visible at a time | StartScreen disappears when game starts; no overlap of screens | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-076 | #28 | Exit during game returns to start | Clicking exit/back from GameScreen returns to StartScreen with Play button | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-077 | #28 | No console errors during transitions | Game start and exit produce zero critical console errors | `tests/e2e/regression/level-progression.spec.js` | P0 |
| REG-078 | #28 | Reduced motion disables level map pulse | With `prefers-reduced-motion: reduce`, `animate-pulse-gold` animation is suppressed | `tests/e2e/regression/level-progression.spec.js` | P1 |

### Cross-Cutting / Integration

| ID | Epic | Scenario | Expected Behavior | Test File | Priority |
|----|------|----------|-------------------|-----------|----------|
| REG-055 | Cross | Confidence engine integrates with GameScreen | GameScreen exposes `isStruggling` and `shouldLevelUp` from the confidence engine; answering questions updates confidence score | `tests/e2e/regression/integration.spec.js` | P0 |
| REG-056 | Cross | Learning aids appear in GameScreen when struggling | During gameplay, if confidence drops below 35 (struggling), the LearningAid component renders inside GameScreen | `tests/e2e/regression/integration.spec.js` | P0 |
| REG-057 | Cross | Profile selection gates game access | Without an active profile, the game cannot be started; after profile selection, the full game flow is available | `tests/e2e/regression/integration.spec.js` | P0 |
| REG-058 | Cross | Game progress persists to Firestore | After answering questions, `updateProgress` sends score/streak/totalProblems to Firestore; reloading the app shows the persisted values | `tests/e2e/regression/integration.spec.js` | P1 |
| REG-059 | Cross | Full game flow: profile -> start -> play -> result -> replay | End-to-end flow: select profile with PIN -> click Play -> answer 3 questions -> exit -> see ResultScreen -> click Play Again -> new session starts | `tests/e2e/regression/integration.spec.js` | P0 |
| REG-060 | Cross | Service worker registers in production | On production, the service worker registers successfully (check `navigator.serviceWorker.controller` or registration status) | `tests/e2e/regression/integration.spec.js` | P1 |

---

## Test File Mapping

| Test File | Scenario IDs | Count |
|-----------|-------------|-------|
| `tests/e2e/regression/core.spec.js` | REG-001 through REG-009 | 9 |
| `tests/e2e/regression/levels.spec.js` | REG-010 through REG-018 | 9 |
| `tests/e2e/regression/confidence.spec.js` | REG-019 through REG-031 | 13 |
| `tests/e2e/regression/profiles.spec.js` | REG-032 through REG-042 | 11 |
| `tests/e2e/regression/learning-aids.spec.js` | REG-043 through REG-054 | 12 |
| `tests/e2e/regression/level-progression.spec.js` | REG-061 through REG-078 | 18 |
| `tests/e2e/regression/integration.spec.js` | REG-055 through REG-060 | 6 |

---

## Test Type Classification

Many of the scenarios above (particularly Epics #11, #14, and parts of #25) can be validated as **unit/integration tests**
running against pure functions and hooks rather than through the browser. The regression workflow already runs `npm test`
(Vitest unit/integration suite) alongside Playwright e2e tests. The e2e implementations for these scenarios should
focus on **observable UI behavior** -- confirming the module's output is correctly wired into the rendered app.

| Layer | Runner | Coverage |
|-------|--------|----------|
| Unit / Integration | Vitest (`npm test`) | Pure functions (`getLevelConfig`, `generateProblem`, `getStrategies`, `hashPin`, `verifyPin`), hooks (`useConfidence`, `useGameState`), component rendering |
| E2E (browser) | Playwright (`npx playwright test tests/e2e/regression/`) | Full user flows against deployed staging/production URLs |

---

## Preconditions and Test Data

- **Profiles:** Tests that require a profile (REG-003 and above) should create a fresh test profile at the start
  of the test run using the CreateProfile wizard with a known PIN (e.g., `1234`). Clean up after the suite.
- **localStorage:** Tests may inject localStorage directly for faster setup when testing non-UI profile logic.
- **Firestore:** Integration tests (REG-058) require Firebase anonymous auth to be enabled on the target project.
  Tests should use a dedicated test profile to avoid polluting real user data.
- **Network:** All e2e tests require network access to the target environment URL.

---

## Summary

- **Total scenarios:** 78
- **P0 (critical -- must pass for deploy confidence):** 42
- **P1 (important -- should pass, investigate if failing):** 36

### P0 Breakdown by Epic

| Epic | P0 Count | Description |
|------|----------|-------------|
| Core (#1) | 5 | App loads, gameplay works, no console errors |
| Level Config (#11) | 5 | All levels valid, problem generation correct per config |
| Confidence (#14) | 7 | Scoring deltas, level-up trigger, struggling flags, clamping |
| Profiles (#17) | 6 | Create, select with PIN, reject wrong PIN, persist, anonymous auth |
| Learning Aids (#25) | 4 | Show/hide based on struggling state, correct aid per level tier |
| Level Progression (#28) | 9 | Level map renders, accessible, current/locked states, game transitions, screen isolation |
| Integration | 4 | Confidence wired to GameScreen, aids visible, full flow works |

---

## Maintenance Notes

1. **When a new epic is promoted to production:** Add a new section to the Regression Scenarios table,
   assign scenario IDs in sequence (REG-NNN), create a corresponding test file entry, and update the Summary totals.
2. **When a scenario is retired:** Do not delete it. Mark it as `RETIRED` with a date and reason in the Scenario column.
3. **When the regression workflow changes:** Update the Environments and Test Type Classification sections.
4. **Epic #25 scenarios (REG-043 to REG-054)** now run on both staging and production (promoted v1.3.0, 2026-03-12).
5. **Epic #28 scenarios (REG-061 to REG-078)** graduated 2026-03-13 (promoted v1.4.0). Level-up celebration tests (REG-069 to REG-074) are deferred from E2E — they require triggering `shouldLevelUp` which needs many correct answers. These scenarios are fully covered by 117 unit/integration tests in `src/`. When a test fixture or reduced-threshold mode is available, unskip these tests.
