# Grooming Report: Issue #21 — Phase 4: i18n Hebrew + English

## Summary

Phase 4 adds full internationalization to Math Trainer with Hebrew (RTL) as the default language and English as a secondary option. The implementation uses `react-i18next` with static JSON translation files (~92 keys), wires language preference to the existing per-profile schema in localStorage, and adds RTL-aware layout handling via `dir` on `<html>`. This is a foundational infrastructure change touching 33 files (6 new, 27 modified) and all 15 UI components. The primary user is a Hebrew-speaking 7-year-old child — Hebrew is not a nice-to-have, it is the intended default language.

## Priority & Effort

- **Priority:** P1 (high user-value, not blocking core gameplay but significant usability gap)
- **Effort:** 44-58h (consensus across PM/finance/architect: ~45h midpoint)
- **Size:** L
- **RICE Score:** 60 (100% reach x 3 impact x 0.8 confidence / 4 effort-weeks)

## Technical Approach

**Library:** `react-i18next` + `i18next` (static JSON bundles, no backend plugin, no lazy loading). Bundle impact: ~13KB gzipped JS + ~3KB translation JSON. Zero ongoing infrastructure cost.

**Architecture decisions (all 4 reports agree):**

1. **Hebrew default, English fallback.** `lng: 'he'`, `fallbackLng: 'en'`, `useSuspense: false` (sync init).
2. **Single namespace.** ~92 keys across both language files. Nested dot notation (`startScreen.title`).
3. **Provider chain:** `StrictMode > I18nextProvider > ProfileProvider > App`. I18nextProvider wraps ProfileProvider because ProfileProvider's own loading/error messages need translation.
4. **Profile-driven language switching.** New `language: 'he'` field in profile schema (localStorage). `useEffect` in ProfileProvider calls `i18n.changeLanguage()` + sets `document.documentElement.dir` and `lang` on profile activation. No separate LanguageContext.
5. **RTL via `<html dir="rtl">`.** Tailwind v3 logical properties (`end-2`, `ps-`, `pe-`). Three specific fixes: checkmark position, arrow key navigation, step-fade animation direction.
6. **Strategy engine refactoring.** `STEP_TEMPLATES` return `{ key, params }` objects instead of hardcoded English strings. `STRATEGY_NAMES` become translation keys. `StrategyHint.jsx` calls `t(step.key, step.params)`. This keeps `strategies.js` as a pure logic module with no i18n dependency.
7. **`dir="ltr"` overrides** on math-content components (Problem, DotCounter, NumberLine, StrategyHint math areas, PinEntry numpad).
8. **No lazy loading.** Both JSON files < 5KB each; PWA precaches all assets. Revisit only if a third language exceeds 20KB.
9. **No Hebrew web font initially.** Comic Sans MS has Hebrew glyphs; system fallback is adequate. Add Varela Round in follow-up only if rendering is suboptimal.
10. **Existing profiles without `language` field** default to `'he'` via defensive coding. No migration script needed.

### Disagreement Resolved: Strategy Step Templates

- **PM + Architect:** Full i18n — step templates return `{ key, params }`, translations in JSON, `t(key, params)` in component.
- **QA:** Keep step templates as JS functions (not i18n); only extract strategy names. Rationale: preserves 74 tests unchanged.

**Resolution: PM + Architect approach wins.** Strategy steps like "Make 10: 8+2=10" must display in Hebrew for the primary user. Keeping them as English-only JS functions defeats the purpose of i18n. The 74 tests will need updating, but the test migration is bounded — assertions change from string matching to key+params object matching. QA's concern is valid and is addressed by scheduling the strategy refactor as a dedicated sub-task (#21.5) with explicit test migration budget (6-8h).

### Disagreement Resolved: Effort Estimate

- **Architect:** 32-40h (M)
- **PM:** 44-58h (L)
- **Finance:** ~45h (L)

**Resolution: 44-50h (L).** The architect's estimate underweights test migration effort for 333 tests that touch strings. PM's upper bound (58h) includes generous buffer. Realistic midpoint: 44-50h.

## Sub-Tasks

| # | Title | Size | Hours | Agent | Dependencies |
|---|-------|------|-------|-------|-------------|
| #21.1 | i18n Infrastructure + Translation Files | S | 6-8h | react-specialist | None (foundation) |
| #21.2 | Profile-Driven Language Switching + RTL Setup | S | 5-7h | react-specialist | #21.1 |
| #21.3 | Externalize Strings — Core Screens | M | 8-10h | react-specialist | #21.1 |
| #21.4 | Externalize Strings — Profile Components | S | 6-8h | react-specialist | #21.1 |
| #21.5 | Strategy Engine i18n Refactoring | M | 8-10h | react-specialist | #21.1 |
| #21.6 | Test Infrastructure + Integration Tests | S | 5-6h | react-specialist | #21.3, #21.4, #21.5 |

**Recommended execution order:** #21.1 → #21.2 → #21.3 → #21.4 → #21.5 → #21.6

Rationale: #21.2 (RTL/direction) establishes the mechanism that #21.3-#21.5 rely on. Core screens (#21.3) before profile (#21.4) because they are more user-visible and validate the pattern. Strategy refactor (#21.5) last among string tasks because it is the highest-risk refactor. Integration tests (#21.6) only after all strings are externalized.

**Parallel opportunity:** #21.3, #21.4, #21.5 are technically independent (all depend only on #21.1), but sequential execution is recommended for a single-developer project to avoid merge conflicts in shared translation files.

### Sub-task #21.1: i18n Infrastructure + Translation Files

**Description:** Install `i18next` + `react-i18next`. Create `src/i18n/index.js` config, `src/i18n/locales/he.json` and `en.json` with all ~92 keys. Wire `I18nextProvider` in `main.jsx`. Add `language: 'he'` to profile schema. Create `renderWithI18n` test helper. Write translation completeness test.

**Files:** `package.json`, `src/i18n/index.js` (NEW), `src/i18n/locales/he.json` (NEW), `src/i18n/locales/en.json` (NEW), `src/i18n/i18n.test.js` (NEW), `src/main.jsx`, `src/main.test.jsx`, `src/utils/profiles.js`, `src/utils/profiles.test.js`

**Acceptance Criteria:**
- [ ] `i18next` + `react-i18next` installed
- [ ] `he.json` and `en.json` contain all ~92 keys with complete translations
- [ ] Default language is Hebrew (`lng: 'he'`)
- [ ] Provider chain: `I18nextProvider > ProfileProvider > App`
- [ ] Profile schema includes `language: 'he'` default
- [ ] Translation completeness test: every key in he.json exists in en.json and vice versa
- [ ] `renderWithI18n` test helper created in `src/test-utils/`
- [ ] All 613 existing tests still pass

### Sub-task #21.2: Profile-Driven Language Switching + RTL Setup

**Description:** Add `useEffect` in `ProfileProvider` to sync `i18n.changeLanguage()` and `document.documentElement.dir`/`lang` when active profile changes. Update `index.html` default to `lang="he" dir="rtl"`. Add language toggle to `StartScreen`. Set up CSS custom property for step-fade RTL direction.

**Files:** `src/context/ProfileContext.jsx`, `src/components/StartScreen.jsx`, `index.html`, `src/styles/index.css`, `tailwind.config.js`, tests

**Acceptance Criteria:**
- [ ] Language auto-switches when profile is activated
- [ ] `<html>` dir toggles between `rtl`/`ltr`
- [ ] Language toggle visible on StartScreen (HE/EN pill or flag)
- [ ] Toggle calls `updateProfile(id, { language })` + `i18n.changeLanguage()`
- [ ] CSS custom property `--step-dir` flips for RTL step-fade animation
- [ ] Default `index.html` is `<html lang="he" dir="rtl">`

### Sub-task #21.3: Externalize Strings — Core Screens

**Description:** Replace all hardcoded strings with `t()` calls in: `App.jsx`, `StartScreen.jsx`, `GameScreen.jsx`, `ResultScreen.jsx`, `ScoreDisplay.jsx`, `Feedback.jsx`. Add `dir="ltr"` to `Problem.jsx` math expression container.

**Files:** `src/App.jsx`, `src/components/StartScreen.jsx`, `src/components/GameScreen.jsx`, `src/components/ResultScreen.jsx`, `src/components/ScoreDisplay.jsx`, `src/components/Feedback.jsx`, `src/components/Problem.jsx`, all associated test files

**Acceptance Criteria:**
- [ ] Zero hardcoded English strings in core screen components
- [ ] All strings appear in Hebrew when language is `'he'`
- [ ] Math expressions always render LTR via `dir="ltr"`
- [ ] Feedback messages (8 correct + 6 wrong) moved to translation files
- [ ] All existing core screen tests pass (with i18n test setup)
- [ ] Visual appearance unchanged when language is English

### Sub-task #21.4: Externalize Strings — Profile Components

**Description:** Replace all hardcoded strings with `t()` calls in: `ProfileSwitcher.jsx`, `PinEntry.jsx`, `CreateProfile.jsx`. Fix RTL-specific issues: checkmark `right-2` → `end-2`, arrow key navigation RTL-aware.

**Files:** `src/components/ProfileSwitcher.jsx`, `src/components/PinEntry.jsx`, `src/components/CreateProfile.jsx`, all associated test files

**Acceptance Criteria:**
- [ ] Zero hardcoded strings in profile components
- [ ] CreateProfile checkmark position uses `end-2` (logical property)
- [ ] Arrow key navigation in theme picker respects RTL direction
- [ ] `dir="auto"` on nickname input preserved and verified
- [ ] All 97 CreateProfile tests + 15 ProfileSwitcher tests + 21 PinEntry tests pass

### Sub-task #21.5: Strategy Engine i18n Refactoring

**Description:** Refactor `strategies.js` — `STEP_TEMPLATES` return `{ key, params }` objects, `STRATEGY_NAMES` return translation keys. Update `StrategyHint.jsx` to call `t(step.key, step.params)`. Externalize `LearningAid.jsx` and `DotCounter.jsx` strings. Add `dir="ltr"` to math-content areas.

**Files:** `src/utils/strategies.js`, `src/utils/strategies.test.js`, `src/components/aids/StrategyHint.jsx`, `src/components/aids/StrategyHint.test.jsx`, `src/components/aids/LearningAid.jsx`, `src/components/aids/LearningAid.test.jsx`, `src/components/aids/DotCounter.jsx`, `src/components/aids/DotCounter.test.jsx`, translation JSON files

**Acceptance Criteria:**
- [ ] `getStrategies()` returns `{ id, nameKey, steps: { key, params }[] }` (not hardcoded strings)
- [ ] `StrategyHint` renders translated strategy names and steps via `t()`
- [ ] Hebrew strategy hints at grade 1-2 reading level
- [ ] Math formulas within strategy steps render LTR
- [ ] All 74 strategy tests + 41 StrategyHint tests + 30 LearningAid tests pass
- [ ] `DotCounter` aria-labels translated, dot groups wrapped in `dir="ltr"`

### Sub-task #21.6: Test Infrastructure + Integration Tests

**Description:** Create `src/test-utils/renderWithProviders.js` (i18n + profile context wrapper). Write integration tests: full app in Hebrew/English, language switch, RTL layout, language persistence. Verify zero missing translation key warnings. Run 3-agent code review.

**Files:** `src/test-utils/renderWithProviders.js` (NEW), `src/test-utils/index.js` (NEW), `src/__tests__/i18n-integration.test.jsx` (NEW)

**Acceptance Criteria:**
- [ ] `renderWithProviders()` helper usable across all test files
- [ ] Integration test: app renders in Hebrew by default
- [ ] Integration test: switching to English updates all visible text
- [ ] Integration test: profile language persists across simulated reload
- [ ] Integration test: math content always LTR regardless of language
- [ ] Automated test: no hardcoded user-facing English in component files
- [ ] All 613+ existing tests pass; total test count >= 663
- [ ] 3-agent code review passes (syntax-convention, security-style, architecture)

## Acceptance Criteria (Epic-Level)

From PM report, consolidated:

- [ ] `react-i18next` and `i18next` installed and configured
- [ ] Hebrew is the default language; English is the fallback
- [ ] `he.json` and `en.json` contain all ~92 translation keys with complete translations
- [ ] All 15 UI components have strings externalized (zero hardcoded user-visible English)
- [ ] RTL layout active when Hebrew selected (`dir="rtl"` on `<html>`)
- [ ] LTR layout active when English selected (`dir="ltr"` on `<html>`)
- [ ] Math expressions, numpad, dot counters, number lines always render LTR
- [ ] Per-profile `language` field persisted in localStorage
- [ ] Language toggle on StartScreen switches language and persists preference
- [ ] On profile activation, app language + direction switch to profile's stored language
- [ ] Existing profiles without `language` field default to Hebrew
- [ ] Strategy hints display in translated language with correct math formulas
- [ ] No flash of untranslated content (FOUC) on app load
- [ ] All 613+ existing tests pass after migration
- [ ] 50+ new i18n-specific tests added (total >= 663)
- [ ] Translation completeness test: key parity between he.json and en.json

## Test Strategy

From QA report:

**Test migration approach (Strategy A — Global i18n mock):** Configure vitest `setupFiles` with a test i18n instance loaded with `en.json` as default language. This means `t('startScreen.startButton')` returns `'Start Game!'` — existing tests that match English strings continue to pass without modification. Only ~10-15 tests with interpolated aria-labels need manual adjustment.

**Test impact by risk level:**
- **Zero risk (280 tests):** Pure logic hooks and utilities (useGameState, useConfidence, mathProblems, profiles, levels, validateEnv)
- **Low risk (~60 tests):** Components using `data-testid` queries (DotCounter, NumberLine, LearningAid)
- **Medium risk (~120 tests):** Components with moderate string assertions (App, PinEntry, StrategyHint, GameScreen)
- **High risk (~153 tests):** Components with heavy string assertions (CreateProfile 97, strategies 74 — note: strategy tests change from string matching to key+params matching)

**New test categories:**
- i18n configuration tests (~15): init, key parity, interpolation, language change
- Language switching tests (~10): text updates, state preservation, document attributes
- RTL layout tests (~18): direction attributes, mirror positions, math LTR overrides
- Profile persistence tests (~8): schema, defaults, cross-profile, migration
- Feedback/message tests (~6): translated arrays, performance messages

**Migration order (lowest risk first):** ScoreDisplay → Problem → AnswerButtons → DotCounter → Feedback → LearningAid → StrategyHint → PinEntry → ResultScreen → StartScreen → GameScreen → ProfileSwitcher → CreateProfile → App → strategies.js

## UX/Design Notes

No visual-designer report was generated (this is primarily an infrastructure + string externalization task, not a new UI design). Key UX decisions from PM:

- **Language switcher:** Small HE/EN pill or flag icon on StartScreen. Not available during gameplay.
- **No language selection in profile creation wizard.** Language set post-creation from StartScreen toggle.
- **Hebrew translations authored by parent (native speaker).** Child-friendly Hebrew, grade 1-2 reading level.
- **Font:** Keep Comic Sans MS with system fallback. Hebrew web font deferred unless rendering proves inadequate.

## Risks & Dependencies

### Risks

| Risk | Severity | Owner | Mitigation |
|------|----------|-------|------------|
| 613 existing tests break during string externalization | HIGH | QA | Strategy A: global en.json in vitest setupFiles; run test suite after each sub-task |
| Strategy refactor (74 tests) changes return type | HIGH | Architect | Atomic sub-task (#21.5); test strategies.js before StrategyHint; `{ key, params }` is testable without i18n |
| Hebrew translations feel unnatural for a 7-year-old | MEDIUM | PM | Parent reviews all Hebrew translations; child-friendly language, not formal/literary |
| RTL layout breaks existing visual design | MEDIUM | Architect | Systematic audit of all flex/grid containers; `dir="ltr"` on math content; visual regression at 375px + 768px |
| Strategy step text awkward in Hebrew | MEDIUM | PM | Hebrew mathematical pedagogy review; test with child directly |
| Comic Sans MS Hebrew rendering quality | LOW | Architect | Test on target devices; add Hebrew web font in follow-up if needed |
| Bundle size increase (~15-17KB gzipped) | LOW | Finance | Static imports, no code-splitting needed; well within PWA limits |
| Existing profiles lack `language` field | LOW | Architect | Defensive coding: `profile.language || 'he'`; no migration script |
| PWA cache serves stale translations | LOW | QA | Translation files in Vite content hash pipeline; service worker precache update |

### Dependencies

| Dependency | Direction | Impact |
|------------|-----------|--------|
| **#28 (Level Progression UI, P0)** | #28 should ship first | #28 adds ~10-15 new UI strings. If #21 ships first, #28 would need to add i18n strings retroactively. Shipping #28 first lets #21 externalize everything in one pass. |
| **#22 (Difficulty Settings)** | No blocking dependency | If shipped after #21, new strings need translation — standard workflow. |
| AI Media workstream | No dependency | Videos/images are visual, not text-dependent. |

**Recommended sequencing:** #28 (P0) → #21 (P1). This is already the backlog order.

## Scope: MVP vs Deferred

### MVP (Must Ship in #21)

- i18n framework setup (react-i18next)
- Hebrew + English translation files (~92 keys)
- All screen strings externalized (15 components)
- Strategy engine `{ key, params }` refactoring
- RTL layout (3 specific fixes + `dir="ltr"` overrides)
- Per-profile language persistence + StartScreen toggle
- Test infrastructure (`renderWithI18n`, completeness tests)
- 50+ new tests

### Deferred (Not in #21)

| Item | Rationale |
|------|-----------|
| Language selection in CreateProfile wizard | Adds wizard complexity; post-creation toggle is sufficient |
| Browser language auto-detection | Hebrew is the known default; one-user app |
| Hebrew plural forms (dual) | No "N items" patterns in current UI |
| Hebrew web font (Varela Round) | Only if Comic Sans proves inadequate |
| Third language support | Only Hebrew + English needed |
| Translated Firebase error messages | Firebase errors are developer-facing; user errors already abstracted |
| PWA manifest i18n | Requires multiple manifests — overkill for 2 languages |
| i18next-scanner / CI key extraction | Nice-to-have tooling, not blocking |

## Financial Summary

- **One-time cost:** ~45h development (size L)
- **Ongoing cost:** $0/month infrastructure; ~1h/quarter translation maintenance for new features
- **Bundle impact:** +11KB JS gzipped (+6.6%), +62KB total precache (+9.2%), well within PWA limits
- **ROI:** Zero direct revenue (personal app), but high user-value (primary user gets native Hebrew) and strong tech debt avoidance (~20-25h saved if done now vs. deferring past Phase 8)
- **Verdict:** APPROVED — no financial blockers

## Timeline & Milestones

| Sprint | Sub-tasks | Deliverable |
|--------|-----------|-------------|
| Sprint 1 | #21.1 + #21.2 | i18n infrastructure live, RTL working, language toggle functional |
| Sprint 2 | #21.3 + #21.4 | All core + profile screens in Hebrew |
| Sprint 3 | #21.5 + #21.6 | Strategy hints translated, integration tests, code review |

**Estimated total:** 3 sprints (assuming 1-week sprints at ~15h/sprint)

## String Inventory

~92 unique translation keys across 15 components:

| Component | Keys | Notes |
|-----------|------|-------|
| StartScreen | 8 | Title, subtitle, stats, button, tip, footer |
| GameScreen | 2 | Exit, loading |
| ResultScreen | 12 | Title, performance (3), stats (4), buttons (2), messages (2), footer |
| ScoreDisplay | 4 | Score, streak, streak labels |
| Feedback | 14 | 8 correct + 6 wrong messages |
| App.jsx | 6 | Loading (4), error (2) |
| ProfileSwitcher | 8 | Title, welcome (2), buttons (2), level, errors (2) |
| CreateProfile | 14 | Steps (3), inputs (2), buttons (4), errors (3), loading (2) |
| PinEntry | 5 | Header, digits, cooldown, checking, back |
| Strategies | ~12 | 6 names + ~6 step patterns |
| LearningAid | 3 | Dismiss, strategy counter, show another |
| DotCounter | 2 | Aria-labels |
| Aria/A11y | ~4 | Shared accessibility labels |
| **Total** | **~92** | |
