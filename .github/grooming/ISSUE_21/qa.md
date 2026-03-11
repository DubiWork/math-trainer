# QA Expert Report: Issue #21 -- Phase 4 i18n Hebrew + English

## 1. Executive Summary

Issue #21 introduces internationalization (i18n) with Hebrew as default language and English as an option. This is the highest-risk QA issue the project has faced: every existing UI test (613 tests across 18 files) uses hardcoded English string matching and will break when strings are extracted. The test migration strategy is the single most important quality decision for this issue.

**Recommended approach:** Mock `t()` to return English keys/values in test setup, minimizing changes to existing 613 tests while enabling focused new tests for i18n-specific behavior.

---

## 2. Test Strategy: Existing Test Migration

### 2.1 The Core Problem

All 613 tests pass today. When strings are externalized to `t('key')`, every `screen.getByText('Loading...')` call will break unless the test environment provides the same English string via the i18n system.

### 2.2 Recommended Strategy: Mock `t()` at Provider Level

**Strategy A (RECOMMENDED): Global test i18n mock**

Create a test setup that configures i18next with the English translation file as the default language. This means `t('loading')` returns `'Loading...'` -- existing tests continue to match.

```
// src/test/i18n-setup.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: { en: { translation: en } },
  interpolation: { escapeValue: false },
});

export default i18n;
```

**Why this over alternatives:**
- Strategy B (mock `t()` as identity function returning keys): Requires renaming every string match in 613 tests to use i18n keys -- massive churn
- Strategy C (wrap every render in I18nextProvider): Works but requires touching every test file's render helper
- Strategy A: Only requires adding the i18n setup to vitest `setupFiles` -- existing tests see real English strings unchanged

### 2.3 Test Files Impact Assessment

| Test File | Tests | String Matches | Migration Risk | Notes |
|-----------|-------|---------------|----------------|-------|
| `App.test.jsx` | 17 | 5 (`Loading...`, `Loading heroes...`, `Oops!`, `Play Anyway!`, `Connecting to Sonic Speed!`) | MEDIUM | Mocks child components; only App's own strings affected |
| `CreateProfile.test.jsx` | 97 | ~15 (`What is your name?`, `Choose your hero!`, `Next`, `Back`, `Cancel`, `PINs do not match`, `Creating your hero...`, `Could not create hero`, `Try Again`, theme labels) | HIGH | Largest test file; many string assertions |
| `ProfileSwitcher.test.jsx` | 15 | ~10 (`Welcome to Math Trainer!`, `Create your first hero...`, `+ Create Hero`, `Who's playing?`, `Add Hero`, `Level X`, `Enter PIN`, `Oops! Wrong PIN...`, `Something went wrong...`) | HIGH | Multiple hardcoded UI strings |
| `PinEntry.test.jsx` | 21 | ~6 (`Enter PIN`, `Checking...`, `Too many tries! Wait Xs`, `Back`, `N of 4 digits entered`) | MEDIUM | Some strings are aria-labels |
| `StrategyHint.test.jsx` | 41 | ~5 (`Strategy N of M`, `Show me another way`, strategy names from `getStrategies()`) | MEDIUM | Strategy names come from `strategies.js` |
| `LearningAid.test.jsx` | 30 | ~3 (`I got it!`, `Dismiss learning aid`, `Strategy N of`) | LOW | Mostly uses data-testid queries |
| `DotCounter.test.jsx` | 24 | ~2 (aria-labels: `N blue dots plus M gold dots`) | LOW | Mostly structural tests |
| `useGameState.test.js` | 26 | 0 | NONE | Pure logic hook, no UI strings |
| `useConfidence.test.js` | 46 | 0 | NONE | Pure logic hook, no UI strings |
| `mathProblems.test.js` | 26 | 0 | NONE | Pure utility tests |
| `strategies.test.js` | 74 | ~30+ (strategy step text) | HIGH | Tests compare exact step template strings |
| `profiles.test.js` | 67 | 0 | NONE | Pure utility tests |
| `profileReducer.test.js` | 18 | 0 | NONE | Pure reducer tests |
| `ProfileContext.test.jsx` | 19 | 0 | NONE | Context logic tests |
| `levels.test.js` | 4 | 0 | NONE | Config data tests |
| `validateEnv.test.js` | 18 | 0 | NONE | Env validation, no UI |
| `main.test.jsx` | 7 | 0 | NONE | Bootstrap test, no strings |
| `NumberLine.test.jsx` | ~30 | ~2 (aria-labels) | LOW | Mostly structural |

**Summary:** ~280 tests have ZERO string dependency (safe). ~333 tests touch strings that need i18n coverage. With Strategy A (global en.json in test setup), only ~10-15 tests need manual adjustment (tests that assert against aria-labels built from i18n interpolation).

### 2.4 Special Case: Strategy Template Tests

`strategies.test.js` (74 tests) compares exact step strings like `Make 10: 8+2=10`. These strings will move to i18n. Two options:

1. **Keep strategy templates as code-level functions** (not i18n) since they contain embedded math expressions. Test them directly as before. Only strategy *names* (`Bridge to 10`, `Use Doubles`) go to i18n.
2. **Full i18n for step templates**: Requires `t('strategy.bridging_add.step1', { base: 8, complement: 2, tens: 10 })` with ICU interpolation. Tests would need the en.json loaded.

**Recommendation:** Option 1 -- keep step template *functions* in `strategies.js` as pure JS (they are computation, not UI text). Only extract strategy *names* to i18n. This preserves all 74 strategy tests unchanged and avoids complex ICU interpolation for math expressions.

---

## 3. New Test Coverage Requirements

### 3.1 i18n Configuration Tests (~15 new tests)

| Test | Description | Priority |
|------|-------------|----------|
| i18n init loads default language (Hebrew) | `i18n.language === 'he'` | P0 |
| i18n init has Hebrew namespace loaded | `i18n.hasResourceBundle('he', 'translation')` | P0 |
| i18n init has English namespace loaded | `i18n.hasResourceBundle('en', 'translation')` | P0 |
| Fallback language is English | `i18n.options.fallbackLng` includes `'en'` | P0 |
| Missing key returns key (not crash) | `t('nonexistent.key')` returns the key string | P1 |
| All keys in he.json exist in en.json | JSON key parity check | P0 |
| All keys in en.json exist in he.json | JSON key parity check (reverse) | P0 |
| No empty string values in he.json | Value validation | P1 |
| No empty string values in en.json | Value validation | P1 |
| Interpolation works (`{{name}}` vars) | `t('welcome', { name: 'Dubi' })` | P0 |
| Pluralization works (if used) | Plural rules for Hebrew/English | P2 |
| Language change triggers re-render | Switch `i18n.changeLanguage('en')` | P0 |
| useTranslation hook returns t function | Basic hook integration | P0 |
| i18n debug mode disabled in production | `i18n.options.debug === false` in prod | P1 |
| Translation keys follow naming convention | Flat or nested key validation | P2 |

### 3.2 Language Switching Tests (~10 new tests)

| Test | Description | Priority |
|------|-------------|----------|
| Switching to English updates all visible text | Full-page string check | P0 |
| Switching to Hebrew updates all visible text | Full-page string check | P0 |
| Language switch persists across navigation | Start -> Game -> Result, language stays | P0 |
| Language switch does not lose game state | Score/streak preserved during switch | P0 |
| Language switch updates document `dir` attribute | `document.documentElement.dir === 'rtl'` for Hebrew | P0 |
| Language switch updates document `lang` attribute | `document.documentElement.lang === 'he'` | P0 |
| Default language loads on first visit | No profile => Hebrew default | P0 |
| Language preference from profile overrides default | Profile has `language: 'en'` => English | P0 |
| Mid-game language switch (if allowed) | Verify behavior or confirm it is disabled | P1 |
| Language switch with slow network (i18n bundle) | Fallback behavior during load | P2 |

### 3.3 RTL Layout Tests (~18 new tests)

| Test | Description | Priority |
|------|-------------|----------|
| HTML `dir="rtl"` when Hebrew active | Global direction attribute | P0 |
| HTML `dir="ltr"` when English active | Global direction attribute | P0 |
| StartScreen layout mirrors in RTL | Flex direction, text alignment | P0 |
| GameScreen layout mirrors in RTL | Score display, exit button position | P0 |
| ResultScreen stats grid readable in RTL | Grid layout consistency | P0 |
| ProfileSwitcher grid works in RTL | Card order, text alignment | P0 |
| CreateProfile wizard checkmark position | `right-2` must become `left-2` in RTL (currently hardcoded) | P0 |
| CreateProfile arrow key navigation | ArrowLeft/ArrowRight theme picker: semantic direction must flip in RTL | P0 |
| step-fade animation direction | `translateX(-4px)` must become `translateX(4px)` in RTL | P1 |
| PinEntry numpad layout in RTL | Numbers should NOT mirror (numpad is universal) | P0 |
| PinEntry backspace/cancel position in RTL | Bottom row layout | P1 |
| ScoreDisplay sections in RTL | Score left, streak right (or reversed) | P1 |
| Feedback overlay centered in RTL | Fixed inset-0 should still center | P1 |
| AnswerButtons 2x2 grid in RTL | Grid layout unchanged (numbers are universal) | P1 |
| Problem display in RTL | Math expression layout (LTR numbers in RTL context) | P0 |
| DotCounter dot groups in RTL | Visual dots should still read left-to-right for math | P0 |
| StrategyHint text alignment in RTL | `text-start` should work correctly | P1 |
| `dir="auto"` on nickname inputs | Bidi text detection for mixed Hebrew/Latin | P0 |

### 3.4 Profile Language Persistence Tests (~8 new tests)

| Test | Description | Priority |
|------|-------------|----------|
| Profile schema includes `language` field | Data model validation | P0 |
| New profile defaults to `'he'` (Hebrew) | Default language on creation | P0 |
| Profile language updates via settings | `updateProfile({ language: 'en' })` | P0 |
| Language loads from profile on login | Switch profile => language changes | P0 |
| Language persists across page reload | Refresh => same language | P0 |
| Multiple profiles can have different languages | Profile A = Hebrew, Profile B = English | P0 |
| Language preference survives profile migration | Backward compatibility with existing profiles that lack `language` | P0 |
| Anonymous (no profile) defaults to Hebrew | Pre-profile-selection language | P1 |

### 3.5 Feedback Messages Translation Tests (~6 new tests)

| Test | Description | Priority |
|------|-------------|----------|
| CORRECT_MESSAGES array uses t() keys | All 8 correct messages translated | P0 |
| WRONG_MESSAGES array uses t() keys | All 6 wrong messages translated | P0 |
| Performance messages translated | `getPerformanceMessage()` returns translated text | P0 |
| Streak emoji labels translated | `On Fire!`, `Lightning!`, `Speedy!`, `Keep going!` | P1 |
| Loading state messages translated | `Loading...`, `Loading heroes...`, `Connecting to Sonic Speed!`, `Loading your progress...` | P0 |
| Error messages translated | `Oops!`, `Could not connect...`, `Play Anyway!` | P0 |

---

## 4. Edge Cases Catalog

### 4.1 RTL-Specific Edge Cases

1. **Math expression directionality**: `5 + 3 = ?` must always render LTR even in RTL context. CSS `direction: ltr` or `unicode-bidi: embed` needed on the Problem component.
2. **Numpad mirroring**: PinEntry numpad must NOT mirror (1-2-3 stays left-to-right). Requires `dir="ltr"` on numpad grid.
3. **Checkmark position bug**: `CreateProfile.jsx` line 501: `absolute top-2 right-2` -- hardcoded physical direction. Must use logical properties: `start-2` / `end-2` or `inset-inline-end`.
4. **Arrow key semantics bug**: `CreateProfile.jsx` line 279: `ArrowRight` means "next theme", `ArrowLeft` means "previous". In RTL, visual direction flips but keyboard arrow semantics should follow visual direction. Need to swap or use logical interpretation.
5. **step-fade animation bug**: `tailwind.config.js` line 74: `translateX(-4px)` slides content from left. In RTL, this should be `translateX(4px)` (from right). Needs `[dir="rtl"] .animate-step-fade` override or CSS logical transform.
6. **Nickname character counter**: `12 characters left` -- the number placement in Hebrew may need to be different (`12` is shown inline).
7. **Mixed-direction text**: Profile nickname can be Hebrew, English, or emoji. `dir="auto"` is already on nickname fields (good), but must be verified in all display contexts.
8. **Cooldown message interpolation**: `Too many tries! Wait 30s` -- `30s` number placement must work in Hebrew sentence structure.

### 4.2 i18n Edge Cases

9. **Key collision**: `he.json` and `en.json` must have identical key sets. Missing key in one file = untranslated UI.
10. **Nested interpolation in strategies**: Strategy steps like `Make 10: 8+2=10` contain embedded math. If these go through i18n, the interpolation must handle multiple numeric params without breaking.
11. **Hebrew plural forms**: Hebrew has different plural rules than English (singular, dual, plural). If we use `t('problems', { count: N })`, the Hebrew plural file needs `_one`, `_two`, `_other` forms.
12. **Font support**: `Comic Sans MS` (font-game) may not render Hebrew characters well. Need fallback Hebrew font in the font stack.
13. **Text overflow in Hebrew**: Hebrew translations may be longer/shorter than English. Button text overflow on small screens.
14. **Currency/number formatting**: Currently not an issue (math app shows raw numbers), but `Intl.NumberFormat` should be used if locale-aware formatting is ever needed.
15. **Firebase error messages**: `authError.message` comes from Firebase SDK in English. These should be caught and mapped to translated error messages rather than displayed raw.
16. **Empty translation file on load**: If translation JSON fails to load, the app must show fallback language, not crash.

### 4.3 State Management Edge Cases

17. **Language change mid-game**: If language switch is allowed during gameplay, the Feedback messages (random selection) must use the new language immediately.
18. **Profile without language field**: Existing profiles in localStorage from v1.0-v1.2 will not have a `language` field. Migration must default to `'he'`.
19. **i18n initialization race**: The app renders before i18n.init() resolves. Must ensure I18nextProvider suspense boundary prevents flash of untranslated content (FOUC).
20. **SSR/hydration**: Not applicable (CSR-only PWA), but worth noting.

---

## 5. Regression Risk Assessment

### 5.1 High-Risk Areas

| Area | Risk | Mitigation |
|------|------|------------|
| All 613 existing tests | CRITICAL -- will break without mock i18n setup | Strategy A: global en.json in vitest setupFiles |
| CreateProfile wizard flow | HIGH -- 97 tests with many string assertions | Verify all wizard strings in he.json and en.json |
| Strategy template text | HIGH -- 74 tests with exact string matching | Keep step templates as JS functions, only extract names |
| RTL layout on all screens | HIGH -- no existing RTL tests | New RTL test suite required |
| Profile data migration | MEDIUM -- adding `language` field to existing profiles | Default fallback for missing field |
| PWA cache invalidation | MEDIUM -- i18n bundles must be cache-busted on update | Translation files must be in Vite's build hash pipeline |

### 5.2 Low-Risk Areas

| Area | Risk | Reason |
|------|------|--------|
| Pure logic hooks (useGameState, useConfidence) | NONE | No UI strings |
| Math problem generation | NONE | Numbers, not text |
| Firebase config/validation | NONE | Technical strings, not user-facing |
| Profile storage utilities | NONE | Data layer, no UI text |
| Level configuration | NONE | Numeric config |

---

## 6. Acceptance Criteria (QA Perspective)

### 6.1 Must-Pass (P0)

- [ ] All 613 existing tests pass without modification (via global i18n mock setup)
- [ ] App loads in Hebrew by default on fresh install
- [ ] App loads in English when profile has `language: 'en'`
- [ ] `he.json` and `en.json` have identical key sets (automated parity test)
- [ ] RTL layout active when Hebrew selected (`dir="rtl"` on `<html>`)
- [ ] LTR layout active when English selected (`dir="ltr"` on `<html>`)
- [ ] Math expressions always render LTR regardless of app language
- [ ] PinEntry numpad does NOT mirror in RTL
- [ ] Language preference persists across sessions (stored in profile)
- [ ] All 15 components have strings externalized (no hardcoded user-visible English)
- [ ] New test count >= 50 (covering i18n config, switching, RTL, persistence)
- [ ] Total test count >= 663 (613 existing + 50 new minimum)
- [ ] No FOUC (flash of untranslated content) on app load

### 6.2 Should-Pass (P1)

- [ ] Existing profiles without `language` field default to Hebrew
- [ ] Hebrew font fallback renders correctly (not tofu/boxes)
- [ ] Animations direction-aware in RTL (step-fade, checkmark position)
- [ ] All aria-labels translated
- [ ] Cooldown/countdown messages format correctly in both languages
- [ ] Strategy names translated (step templates remain JS)
- [ ] Feedback messages (CORRECT_MESSAGES, WRONG_MESSAGES) translated

### 6.3 Nice-to-Have (P2)

- [ ] Hebrew plural forms (dual) handled correctly
- [ ] Translation coverage report integrated in CI
- [ ] i18n key extraction tooling (e.g., i18next-scanner)
- [ ] Visual regression screenshots for RTL vs LTR

---

## 7. Test Plan Outline

### Phase 1: Foundation (before any component changes)
1. Install `i18next`, `react-i18next`
2. Create `src/locales/en.json` with all extracted strings
3. Create `src/locales/he.json` with Hebrew translations
4. Create `src/i18n.js` config (Hebrew default, English fallback)
5. Create `src/test/i18n-setup.js` for vitest
6. Add i18n-setup to vitest `setupFiles`
7. **Verify: All 613 tests still pass** (zero changes to test files)
8. Write i18n config tests (15 new tests)
9. Write translation parity tests (he/en key matching)

### Phase 2: Component Migration (one component at a time)
For each component:
1. Replace hardcoded strings with `t('key')` calls
2. Run existing tests -- they should pass (via mock i18n)
3. If any test breaks, fix the i18n key mapping (not the test)
4. Add component-specific i18n tests if needed

**Migration order** (lowest risk first):
1. `ScoreDisplay` (2 strings, no tests on text)
2. `Problem` (1 aria-label)
3. `AnswerButtons` (1 aria-label)
4. `DotCounter` (2 aria-labels)
5. `Feedback` (14 message strings)
6. `LearningAid` (2 strings: "I got it!", "Dismiss learning aid")
7. `StrategyHint` (3 strings: "Strategy N of M", "Show me another way", strategy names)
8. `PinEntry` (6 strings + aria-labels)
9. `ResultScreen` (12 strings)
10. `StartScreen` (8 strings)
11. `GameScreen` (2 strings: "Exit", "Loading...")
12. `ProfileSwitcher` (10 strings)
13. `CreateProfile` (15+ strings)
14. `App` (5 loading/error strings)
15. `strategies.js` (6 strategy names only, NOT step templates)

### Phase 3: RTL Implementation
1. Add `dir` and `lang` attributes to `<html>` based on i18n language
2. Fix checkmark position (logical properties)
3. Fix arrow key navigation (RTL-aware)
4. Fix step-fade animation direction
5. Add `dir="ltr"` to numpad and math expression components
6. Write RTL test suite (18 new tests)

### Phase 4: Profile Integration
1. Add `language` field to profile schema
2. Add migration for existing profiles (default: `'he'`)
3. Implement language loading from profile on activation
4. Write persistence tests (8 new tests)

### Phase 5: Final Verification
1. Full test run (target: 670+ tests, all green)
2. Manual smoke test: complete game flow in Hebrew
3. Manual smoke test: complete game flow in English
4. Manual smoke test: switch language mid-session
5. PWA offline test with both languages cached

---

## 8. Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Existing test survival rate | 100% (613/613 pass unchanged) | vitest run before/after |
| New test count | >= 50 | vitest count delta |
| Translation key parity | 100% (he.json keys === en.json keys) | Automated parity test |
| Component string externalization | 100% (0 hardcoded user-visible strings) | grep audit |
| RTL layout coverage | All 7 screens tested | RTL test suite |
| Profile migration coverage | All existing profiles upgraded | Migration test |
| FOUC prevention | 0 flash incidents | Manual + Suspense boundary test |

---

## 9. Known Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Strategy step templates break if moved to i18n | HIGH | 74 tests break | Keep step templates as JS functions; only extract names |
| Hebrew font rendering issues | MEDIUM | Visual degradation | Add Hebrew web font to font stack; test on real devices |
| RTL layout bugs in components using physical properties | HIGH | Broken UI | Audit all `left-*`, `right-*`, `ml-*`, `mr-*` classes; convert to logical properties |
| Existing profile migration failure | LOW | Users locked out | Default `language: 'he'` when field missing; no-op migration |
| PWA cache serves stale translations | MEDIUM | Users see old language | Include translation files in Vite content hash; update service worker precache |
| i18n bundle size | LOW | Slower load | Both locales are small (~5KB each); inline in bundle, no lazy loading needed |

---

## 10. Bug Triage Priority for i18n-Related Issues

During implementation, any bugs found should be triaged as:

- **P0 (Blocker):** App crashes, tests fail, language switch breaks game state, data loss
- **P1 (Critical):** Wrong language displayed, RTL layout broken on a screen, missing translations visible to user
- **P2 (Major):** Animation direction wrong in RTL, aria-labels not translated, font fallback used
- **P3 (Minor):** Cosmetic spacing differences between languages, minor alignment issues in RTL
