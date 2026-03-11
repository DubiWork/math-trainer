# Product Manager Grooming: Issue #21 -- Phase 4: i18n Hebrew + English

## 1. Strategic Alignment & Business Value

### Why This Matters

The Math Trainer's sole user is a 7-year-old Hebrew-speaking child in Israel. Every string the child reads -- "Start Game!", "Great Job!", "Keep Going!", "What is your name?" -- is currently in English. The child can play, but cannot fully read or understand the UI. For a math-learning app targeting a Hebrew-speaking child, this is a fundamental usability gap: **the app speaks the wrong language**.

Hebrew also reads right-to-left (RTL). Without proper RTL support, the visual hierarchy is subtly broken: checkmarks appear on the wrong side, arrow key navigation is inverted, and the overall reading flow conflicts with the layout direction.

### Business Value

| Dimension | Assessment |
|-----------|------------|
| Usability | **Critical** -- The primary user cannot read the current English UI. Hebrew is not a nice-to-have; it is the default language. |
| Retention | **High** -- A child who understands encouragement messages ("!") is more engaged than one who sees alien text ("Sonic Speed!"). |
| Market Fit | **Essential** -- This is a Hebrew-first app for a Hebrew-speaking child. English is the secondary option for when other family members or friends want to play. |
| Foundation | **Enables future localization** -- Once the i18n infrastructure exists, adding Arabic, Russian, or any other language is trivial (add a JSON file). |

### RICE Score

| Factor | Value | Rationale |
|--------|-------|-----------|
| Reach | 100% (all users) | Every screen, every interaction, every feedback message |
| Impact | 3 (massive) | Transforms the app from "English app with math" to "my math app in my language" |
| Confidence | 0.8 (medium-high) | react-i18next is proven, but ~80 strings + RTL + strategy refactor introduces moderate complexity |
| Effort | 4 person-weeks | ~45h total across sub-tasks (Size L) |
| **RICE Score** | **60** | (100% x 3 x 0.8) / 4 |

**Priority: P1** -- Not a blocker for core gameplay (the child can play math without reading), but a significant usability and engagement gap. Should ship after P0 level progression (#28) but before lower-priority features.

---

## 2. Product Decisions on Open Questions

### Decision 1: Default Language

**Decision: Hebrew is the default language. English is the secondary option.**

Rationale:
- The target user is a Hebrew-speaking child in Israel
- The app should immediately feel native in Hebrew, without requiring any settings change
- English exists for multilingual family members and as a future expansion path
- If no language preference is stored, the app defaults to Hebrew

### Decision 2: Language Switcher Location and UX

**Decision: Language preference stored per-profile. Switcher available on StartScreen (not during gameplay).**

Rationale:
- Per-profile language allows one child to play in Hebrew and another in English, without conflict
- No language switching mid-game -- it would break flow and confuse the child
- The StartScreen already has space for a small language toggle (flag icon or "EN/HE" pill)
- ProfileSwitcher and CreateProfile wizard should respect the system default (Hebrew) and not ask for language during profile creation. Language is set post-creation from StartScreen.
- If no profile exists yet (zero-profile state), use the app default (Hebrew)

### Decision 3: react-i18next as i18n Framework

**Decision: Use react-i18next with i18next, no additional backend plugins.**

Rationale:
- react-i18next is the de facto standard for React i18n (13M+ weekly downloads)
- Supports interpolation, pluralization, and nested keys out of the box
- No backend needed -- translation files are bundled JSON (app is a PWA, must work offline)
- Lazy loading of language bundles is possible but unnecessary for ~80 strings (< 5KB per language)
- Alternative (FormatJS/react-intl) was considered but react-i18next has better React 18 hooks API and simpler setup

### Decision 4: Strategy Template Refactoring

**Decision: Refactor `STEP_TEMPLATES` in `strategies.js` to return translation keys + params, not raw English strings. Translate in the component layer.**

Rationale:
- Currently `strategies.js` returns hardcoded English strings like `"Make 10: 8+2=10"`
- These strings contain both translatable text ("Make", "Left over", "Add") and computed math values (numbers)
- The clean separation: utility returns `{ key: 'strategy.bridging_add.step1', params: { tens: 10, base: 8, complement: 2 } }`, and `StrategyHint.jsx` calls `t(key, params)` to produce the localized string
- This keeps `strategies.js` as a pure logic module (no i18n dependency) and moves all rendering/translation to the component
- `STRATEGY_NAMES` also becomes keys: `'strategy.bridging_add.name'` instead of `'Bridge to 10'`
- This is the biggest refactor in the epic and must be done carefully to avoid breaking 74+ strategy tests

### Decision 5: RTL Layout Approach

**Decision: Use `dir="rtl"` on `<html>` element when language is Hebrew. Use Tailwind CSS logical properties (start/end) where needed.**

Rationale:
- Setting `dir` on `<html>` automatically flips flexbox, grid, text alignment, and margin/padding for the entire app
- Tailwind v3 supports logical properties: `ps-4` (padding-start) instead of `pl-4` (padding-left)
- Only 3 specific fixes needed per step 1.1 analysis:
  1. **Checkmark position** in CreateProfile theme picker: `right-2` -> `end-2`
  2. **Arrow key logic** in theme picker: ArrowLeft/ArrowRight semantics flip in RTL
  3. **Step-fade animation** direction: should animate from start, not from left
- The mathematical content (numbers, operators, `=` sign) stays LTR even in RTL mode, which is correct behavior (math is universal). Wrap math content in `dir="ltr"` spans.
- Numpad layout in PinEntry stays LTR (standard phone numpad layout is universal)

### Decision 6: Test Infrastructure

**Decision: Create an i18n-aware test wrapper (`renderWithI18n`) that provides a mock i18n context. Tests use English keys by default.**

Rationale:
- Currently 613+ tests render components with hardcoded English strings in assertions
- After i18n, `getByText('Start Game!')` would break unless tests have i18n context
- Two options:
  - (A) Mock `useTranslation` to return `t(key) => key` -- tests assert on keys (fragile, less readable)
  - (B) Provide real i18n instance with `en.json` loaded -- tests assert on English strings (readable, realistic)
- **Choose option B**: `renderWithI18n` provides a real i18n context with English translations. Existing test assertions on English text continue to work with minimal changes.
- Hebrew translations are tested separately via dedicated i18n tests (snapshot or key-completeness tests)

### Decision 7: Feedback Messages (CORRECT_MESSAGES / WRONG_MESSAGES)

**Decision: Move all feedback messages to translation files. Use array-style keys with random selection.**

Rationale:
- Currently `Feedback.jsx` has `CORRECT_MESSAGES` and `WRONG_MESSAGES` as hardcoded English arrays
- Move to translation files as `feedback.correct.0` through `feedback.correct.7` and `feedback.wrong.0` through `feedback.wrong.5`
- The component picks a random index and calls `t('feedback.correct.N')` and reads emoji from a separate constant (emojis are universal, not translated)
- Hebrew equivalents: "!!" (Sonic Speed!), "!" (Amazing!), "!" (Perfect!), etc.
- Keep the same number of messages per language to maintain equal variety

### Decision 8: Bundle Size Consideration

**Decision: No lazy loading for translation bundles. Inline both languages in the main bundle.**

Rationale:
- Two JSON files, each ~80 keys, ~3-5KB gzipped total
- Lazy loading adds complexity (loading states, race conditions) for negligible savings
- PWA precaching already handles all assets -- both languages should be available offline from first load
- Revisit if a third language brings total over 20KB

---

## 3. User Stories & Acceptance Criteria

### Sub-Task A: i18n Infrastructure Setup

**User Story:** As a developer, I need the i18n framework wired up so that any component can translate strings via `useTranslation()`.

**Acceptance Criteria:**
- [ ] `react-i18next` and `i18next` added as dependencies
- [ ] `src/i18n/` directory created with `i18n.js` config file
- [ ] `src/i18n/locales/he.json` and `src/i18n/locales/en.json` created with initial key structure
- [ ] `i18n.js` configured with: `lng: 'he'` (default), `fallbackLng: 'en'`, `interpolation.escapeValue: false`
- [ ] `i18n.js` imported in `main.jsx` before app renders (synchronous init)
- [ ] `<html dir="rtl" lang="he">` set dynamically based on active language
- [ ] When language changes, `document.documentElement.dir` and `lang` attributes update
- [ ] Test helper `renderWithI18n` created in `src/test-utils/` for test infrastructure
- [ ] All existing tests pass with the new infrastructure (no regressions)

**Effort: S (6-8h)**

### Sub-Task B: Externalize UI Strings (Core Screens)

**User Story:** As a Hebrew-speaking child, I want to see all game screens in Hebrew so that I can read and understand every button, label, and message.

**Acceptance Criteria:**
- [ ] `StartScreen` -- all strings externalized: title, subtitle, progress labels, button text, tip, footer
- [ ] `GameScreen` -- all strings externalized: loading text, exit button
- [ ] `ResultScreen` -- all strings externalized: title, performance messages, stat labels, button text, footer
- [ ] `ScoreDisplay` -- all strings externalized: "Score", "Streak", streak emoji labels
- [ ] `Feedback` -- all CORRECT_MESSAGES and WRONG_MESSAGES moved to translation files; emoji separated
- [ ] `App.jsx` -- all strings externalized: loading messages, error messages, "Play Anyway!" button
- [ ] Math content (numbers, operators) remains LTR via `dir="ltr"` spans
- [ ] `he.json` has complete Hebrew translations for all externalized keys
- [ ] `en.json` has complete English translations matching current hardcoded strings
- [ ] Visual appearance unchanged when language is English (regression check)

**Effort: M (10-12h)**

### Sub-Task C: Externalize UI Strings (Profile System)

**User Story:** As a Hebrew-speaking child, I want the profile creation wizard and profile switcher in Hebrew so that I can create my hero and log in without help.

**Acceptance Criteria:**
- [ ] `ProfileSwitcher` -- all strings externalized: title, welcome message, button text, level badge, error messages
- [ ] `CreateProfile` -- all strings externalized: step titles, placeholder, button text, theme labels, error messages, loading text
- [ ] `PinEntry` -- all strings externalized: header, cooldown message, checking text, button text
- [ ] `StepIndicator` -- aria labels externalized
- [ ] `he.json` updated with all profile-related Hebrew translations
- [ ] `en.json` updated with all profile-related English translations
- [ ] `dir="auto"` on nickname input preserved (already exists, just verify)

**Effort: S (6-8h)**

### Sub-Task D: Strategy Template Refactor + Learning Aid Strings

**User Story:** As a Hebrew-speaking child, I want math strategy hints in Hebrew so that the step-by-step guidance makes sense in my language.

**Acceptance Criteria:**
- [ ] `STEP_TEMPLATES` in `strategies.js` refactored to return `{ key, params }` objects instead of raw strings
- [ ] `STRATEGY_NAMES` refactored to return translation keys instead of English strings
- [ ] `StrategyHint.jsx` calls `t(step.key, step.params)` to render each step
- [ ] `LearningAid.jsx` "I got it!" button text externalized
- [ ] `DotCounter.jsx` aria-labels externalized
- [ ] `he.json` updated with all strategy and learning aid Hebrew translations
- [ ] `en.json` updated with all strategy and learning aid English translations
- [ ] All 74+ strategy tests updated to work with new key+params format
- [ ] All 41 StrategyHint tests updated to use `renderWithI18n`
- [ ] Mathematical notation (numbers, `+`, `-`, `=`) stays LTR in both languages

**Effort: M (10-14h)** -- Highest risk sub-task due to strategy refactor touching pure logic + component layer + 115+ tests.

### Sub-Task E: RTL Layout Fixes + Language Switcher + Per-Profile Persistence

**User Story:** As a Hebrew-speaking child, I want the app layout to feel natural in Hebrew (right-to-left), and I want my language choice remembered.

**Acceptance Criteria:**
- [ ] `dir="rtl"` applied to `<html>` when language is Hebrew; `dir="ltr"` when English
- [ ] Checkmark in CreateProfile theme picker uses `end-2` instead of `right-2`
- [ ] Arrow key navigation in theme picker respects RTL direction (ArrowRight goes "previous" in RTL)
- [ ] Step-fade animation direction uses logical `inset-inline-start` instead of `left`
- [ ] Profile schema extended: `language` field (default: `'he'`), persisted in localStorage
- [ ] `createProfile()` accepts optional `language` param (default `'he'`)
- [ ] On profile activation (`selectProfile`), the app language switches to the profile's stored language
- [ ] Language switcher component on StartScreen: small toggle (HE/EN or flag icons)
- [ ] Language switcher calls `i18n.changeLanguage()` + `updateProfile(id, { language })` to persist
- [ ] Numpad layout stays LTR in both RTL and LTR modes
- [ ] All existing tests pass with RTL changes

**Effort: M (8-10h)**

### Sub-Task F: Translation Completeness Tests + Integration

**User Story:** As a developer, I need automated verification that all translation keys exist in both languages and that the i18n integration works end-to-end.

**Acceptance Criteria:**
- [ ] Automated test: every key in `he.json` exists in `en.json` and vice versa (no missing translations)
- [ ] Automated test: no hardcoded user-facing English strings remain in component files (lint rule or grep-based test)
- [ ] Integration test: app renders in Hebrew by default, all visible text matches `he.json` values
- [ ] Integration test: switching language to English updates all visible text to `en.json` values
- [ ] Integration test: profile language persists across simulated reload
- [ ] Visual regression check: screenshots in both languages at key breakpoints (manual, documented in test plan)
- [ ] All 613+ existing tests pass with `renderWithI18n` wrapper

**Effort: S (4-6h)**

---

## 4. Complete String Inventory

### By Component (estimated counts)

| Component | Strings | Notes |
|-----------|---------|-------|
| StartScreen | 7 | Title, subtitle, "Your Best:", "points", "streak", "Accuracy:", Start button, tip, footer |
| GameScreen | 2 | "Loading...", "Exit" |
| ResultScreen | 11 | Title, 3 performance messages, "Points", "Best Streak", "Accuracy", "Problems", Play Again, Back to Start, footer |
| ScoreDisplay | 6 | "Score", "Streak", 4 streak labels (On Fire!, Lightning!, Speedy!, Keep going!) |
| Feedback | 14 | 8 correct + 6 wrong messages |
| App.jsx | 6 | "Loading...", 3 loading sub-messages, "Oops!", error message, "Play Anyway!" |
| ProfileSwitcher | 6 | Title, welcome message, create prompt, "Create Hero", "Add Hero", "Level N", error messages |
| CreateProfile | 12 | Step titles, placeholder, buttons, theme labels, PIN prompts, error messages, loading text |
| PinEntry | 5 | "Enter PIN", cooldown message, "Checking...", "Back", digit aria-labels |
| Strategies | ~18 | 6 strategy names + ~12 step template patterns |
| LearningAid | 3 | "I got it!", "Strategy N of M", "Show me another way" |
| DotCounter | 2 | aria-labels for addition/subtraction descriptions |
| **Total** | **~92** | |

---

## 5. Scope: MVP vs Nice-to-Have

### MVP (Must Ship)

| Item | Sub-Task |
|------|----------|
| i18n framework setup (react-i18next) | A |
| Hebrew + English translation files | A, B, C, D |
| All core screen strings externalized | B |
| All profile system strings externalized | C |
| Strategy template refactor to keys+params | D |
| RTL layout fixes (3 specific issues) | E |
| Per-profile language persistence | E |
| Language switcher on StartScreen | E |
| Test infrastructure (renderWithI18n) | A, F |
| Translation completeness tests | F |

### Nice-to-Have (Future Issues)

| Item | Rationale for Deferral |
|------|----------------------|
| Language selection during profile creation | Adds wizard complexity; post-creation toggle is sufficient |
| Automatic language detection from browser/OS | Hebrew is the known default; detection adds complexity for one user |
| Date/number formatting (Intl.NumberFormat) | Numbers in math app are already universal; no locale-specific formatting needed |
| Pluralization rules | Hebrew has complex plural forms, but current strings are simple (no "N items" patterns) |
| Third language support | Only Hebrew and English needed; framework supports it if needed later |
| RTL-aware CSS animation library | CSS logical properties + 3 manual fixes are sufficient |
| Translated error messages from Firebase | Firebase errors are developer-facing; user-facing errors are already abstracted |
| Voice/audio in Hebrew | Blocked by audio infrastructure (not yet built) |

---

## 6. Effort Summary

| Sub-Task | Size | Hours | Dependencies |
|----------|------|-------|--------------|
| A: i18n Infrastructure | S | 6-8h | None (prerequisite) |
| B: Core Screen Strings | M | 10-12h | A must be complete |
| C: Profile System Strings | S | 6-8h | A must be complete |
| D: Strategy Refactor | M | 10-14h | A must be complete |
| E: RTL + Language Switcher | M | 8-10h | A, B, C (needs strings externalized first) |
| F: Tests + Integration | S | 4-6h | A, B, C, D, E all complete |
| **Total** | **L** | **44-58h** | Sequential: A -> [B, C, D parallel] -> E -> F |

Recommended execution order:
1. **A** (prerequisite, unblocks everything)
2. **B, C, D in parallel** (independent string externalization + refactor, all depend only on A)
3. **E** (RTL + switcher, needs strings externalized to test properly)
4. **F** (final integration + completeness tests)

---

## 7. Product Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Hebrew translations feel unnatural | Medium | Author (parent of the target user) reviews all Hebrew translations. Use child-friendly Hebrew, not formal/literary. |
| Strategy step text awkward in Hebrew | High | Hebrew mathematical language may not map 1:1 to English step templates. Budget time for Hebrew math pedagogy review. Test with the child directly. |
| RTL layout breaks existing visual design | Medium | Test all screens in both RTL and LTR. Use Tailwind logical properties consistently. Manual visual regression at 375px and 768px breakpoints. |
| 600+ tests break during string externalization | High | Implement `renderWithI18n` first (Sub-Task A). Migrate tests incrementally per sub-task, not all at once. Run test suite after each sub-task. |
| Strategy refactor introduces math logic bugs | High | Strategy detectors (pure functions) are unchanged. Only the output format changes (string -> key+params). Keep existing detector tests, update only assertion format. |
| Bundle size increases significantly | Low | Two JSON files ~5KB gzipped total. react-i18next adds ~8KB gzipped. Total impact ~13KB -- negligible for a PWA. |
| Profile migration: existing profiles lack `language` field | Low | `updateProfile` uses shallow merge. Missing `language` field defaults to `'he'`. No migration script needed -- defensive coding handles it. |
| Numpad layout confusion in RTL | Low | Numpad is universally LTR (phone standard). Wrap in `dir="ltr"` container. Already considered in design. |

---

## 8. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| String coverage | 100% of user-facing strings in both he.json and en.json | Automated completeness test (Sub-Task F) |
| RTL visual correctness | 0 layout issues in Hebrew mode at 375px, 768px, 1024px | Manual visual review + screenshot documentation |
| Test pass rate | 100% of existing 613+ tests pass after migration | CI pipeline |
| New test count | +30-40 new i18n-specific tests | Test counter |
| Child comprehension | Target user reads and understands all Hebrew UI without help | Observational user test (informal, parent-administered) |
| Language persistence | Language preference survives app close/reopen | Integration test |
| Performance | No measurable increase in TTI (Time to Interactive) | Lighthouse before/after comparison |

---

## 9. Dependency on Other Issues

| Dependency | Direction | Impact |
|------------|-----------|--------|
| #28 (Level Progression UI) | **#28 should ship first** | #28 will add ~10-15 new strings (level-up celebration, level map). If #21 ships first, #28 would need to add i18n strings. If #28 ships first, #21 externalizes everything at once. Shipping #28 first is cleaner. |
| #22 (Difficulty Settings) | **No blocking dependency** | If #22 ships after #21, new strings will need translation. Standard workflow -- not a risk. |
| AI Media workstream | **No dependency** | Videos/images are visual, not text-dependent. Audio narration in Hebrew would be a separate future issue. |

**Recommendation:** Ship #28 (P0, Level Progression) first, then #21 (P1, i18n). This ensures all strings exist before the i18n pass, minimizing rework.

---

## 10. Open Items for Tech Lead / Solution Designer

1. **Confirm react-i18next init strategy** -- Synchronous (`i18n.init()` before `ReactDOM.render`) vs async with Suspense boundary? Sync is simpler but slightly delays first paint.
2. **Confirm strategy refactor approach** -- Return `{ key, params }` objects from `getStrategies()` or return a function `(t) => string[]` that accepts the translation function? The `{ key, params }` approach is cleaner but changes the return type.
3. **Confirm Tailwind logical property adoption scope** -- Replace all `left/right/pl/pr/ml/mr` with `start/end/ps/pe/ms/me` globally, or only where RTL breakage is confirmed? Global replacement is more future-proof but higher effort.
4. **Test helper location** -- `src/test-utils/renderWithI18n.js` or extend existing test setup in vitest config?
5. **Translation file structure** -- Flat keys (`startScreen.title`) or nested objects (`{ startScreen: { title: "..." } }`)? Nested is more organized but flat is simpler for search/replace.

---

## 11. Appendix: Key Hebrew Translations (Draft)

A preview of critical Hebrew translations for stakeholder review:

| Key | English | Hebrew |
|-----|---------|--------|
| startScreen.title | Sonic Math Trainer! | !Sonic |
| startScreen.subtitle | Time to boost your math power! | ! |
| startScreen.startButton | Start Game! | ! |
| resultScreen.title | Great Job! | ! |
| resultScreen.playAgain | Play Again! | ! |
| resultScreen.backToStart | Back to Start | |
| feedback.correct.0 | Sonic Speed! | !Sonic |
| feedback.wrong.0 | Try Again! | ! |
| createProfile.nickname.title | What is your name? | ? |
| createProfile.theme.title | Choose your hero! | ! |
| profileSwitcher.title | Who's playing? | ? |
| learningAid.dismiss | I got it! | ! |
| strategy.bridging_add.name | Bridge to 10 | 10- |
| strategy.count_on.name | Count On | |

*Note: Full translations will be authored by the product owner (native Hebrew speaker) during implementation.*
