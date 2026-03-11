# Architect Report: Issue #21 — Phase 4: i18n Hebrew + English

**Role:** Solution Designer / Architect
**Date:** 2026-03-11
**Author:** solution-designer agent

---

## 1. Executive Summary

Phase 4 adds full internationalization (i18n) to Math Trainer with Hebrew (RTL) as the default language and English (LTR) as a secondary option. The implementation uses `react-i18next` with a JSON namespace approach, wires language to the existing profile schema, and adds RTL-aware layout handling at the `<html>` element level.

**Effort estimate:** 32-40 hours (size: M)
**Priority recommendation:** P1 (high user-value, moderate risk)
**Sub-tasks:** 6 (detailed below)

---

## 2. Technical Approach — Architecture

### 2.1 Library Choice: react-i18next

**Decision:** Use `react-i18next` (wrapping `i18next`) with static JSON translation files bundled in the app.

**Rationale:**
- De facto standard for React i18n (25M+ weekly npm downloads)
- Zero backend dependency — translations are static JSON bundled by Vite
- Supports interpolation (`{{count}}`, `{{name}}`), plurals, and context
- `useTranslation()` hook integrates cleanly with functional components
- `Trans` component handles rich text (JSX inside translations)
- Tree-shakeable, ~12KB gzipped added to bundle

**Packages to install:**
```
npm install i18next react-i18next
```

No `i18next-browser-languagedetector` needed — language comes from the profile, not the browser.

### 2.2 Translation File Structure

```
src/
  i18n/
    index.js              # i18next init + config
    locales/
      he.json             # Hebrew translations (DEFAULT)
      en.json             # English translations
```

**Single-namespace design:** All strings in one namespace (`translation`, the default). The app has ~90 translatable strings across 17 components — not enough to warrant multiple namespaces.

**Key naming convention:** Hierarchical dot notation matching component structure:
```json
{
  "app": {
    "loading": "Loading...",
    "loadingHeroes": "Loading heroes...",
    "loadingConnection": "Connecting to Sonic Speed!",
    "loadingProgress": "Loading your progress..."
  },
  "startScreen": {
    "title": "Sonic Math Trainer!",
    "subtitle": "Time to boost your math power!",
    "yourBest": "Your Best:",
    "points": "points",
    "streak": "streak",
    "accuracy": "Accuracy: {{percent}}%",
    "startButton": "Start Game!",
    "tip": "Tap the correct answer to score points!",
    "footer": "Math is fun!"
  },
  "gameScreen": {
    "exit": "Exit",
    "loading": "Loading..."
  },
  "resultScreen": {
    "title": "Great Job!",
    "points": "Points",
    "bestStreak": "Best Streak",
    "accuracy": "Accuracy",
    "problems": "Problems",
    "playAgain": "Play Again!",
    "backToStart": "Back to Start",
    "keepPracticing": "Keep practicing to become a Math Master!",
    "performance": {
      "high": "Sonic Speed! Amazing!",
      "medium": "Great effort! Keep practicing!",
      "low": "You're learning! Try again!"
    }
  },
  "scoreDisplay": {
    "score": "Score",
    "streak": "Streak"
  },
  "feedback": {
    "correct": ["Sonic Speed!", "Amazing!", "Perfect!", "Great Job!", "You're on Fire!", "Super Star!", "Awesome!", "Incredible!"],
    "wrong": ["Try Again!", "Almost There!", "Keep Going!", "You've Got This!", "So Close!", "One More Try!"]
  },
  "profileSwitcher": {
    "title": "Who's playing?",
    "welcomeTitle": "Welcome to Math Trainer!",
    "welcomeSubtitle": "Create your first hero to start playing!",
    "createHero": "+ Create Hero",
    "addHero": "Add Hero",
    "level": "Level {{level}}",
    "pinError": "Oops! Wrong PIN. Try again.",
    "genericError": "Something went wrong. Try again."
  },
  "pinEntry": {
    "enterPin": "Enter PIN",
    "digitsEntered": "{{count}} of {{total}} digits entered",
    "tooManyTries": "Too many tries! Wait {{seconds}}s",
    "checking": "Checking...",
    "back": "Back"
  },
  "createProfile": {
    "whatIsYourName": "What is your name?",
    "typeName": "Type your name...",
    "charsLeft": "{{count}} characters left",
    "next": "Next",
    "cancel": "Cancel",
    "chooseHero": "Choose your hero!",
    "choosePinTitle": "Choose a secret PIN",
    "confirmPinTitle": "Confirm your PIN",
    "pinMismatch": "PINs do not match. Try again!",
    "pinError": "Could not process PIN. Try again.",
    "creatingHero": "Creating your hero...",
    "createError": "Could not create hero. Try again!",
    "tryAgain": "Try Again",
    "back": "Back"
  },
  "learningAid": {
    "dismiss": "I got it!"
  },
  "strategyHint": {
    "strategyOf": "Strategy {{current}} of {{total}}",
    "showAnother": "Show me another way"
  },
  "strategies": {
    "names": {
      "bridging_add": "Bridge to 10",
      "bridging_sub": "Bridge to 10",
      "doubles": "Use Doubles",
      "near_doubles": "Near Doubles",
      "count_on": "Count On",
      "count_back": "Count Back"
    },
    "steps": {
      "bridging_add_1": "Make {{tens}}: {{base}}+{{complement}}={{tens}}",
      "bridging_add_2": "Left over: {{addend}}-{{complement}}={{remainder}}",
      "bridging_add_3": "Add: {{tens}}+{{remainder}}=?",
      "...": "..."
    }
  },
  "aria": {
    "mathProblem": "Math Problem",
    "answerOptions": "Answer Options",
    "strategyHintFor": "Strategy hint for {{num1}} {{operator}} {{num2}}",
    "dismissAid": "Dismiss learning aid",
    "exitGame": "Exit game and return to start screen",
    "startGame": "Start the math game",
    "playAgain": "Play the game again",
    "backToStartScreen": "Go back to start screen"
  }
}
```

**String count estimate:** ~90 unique translation keys across all components.

### 2.3 i18n Initialization (`src/i18n/index.js`)

```js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import he from './locales/he.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: {
    he: { translation: he },
    en: { translation: en },
  },
  lng: 'he',               // Default language
  fallbackLng: 'en',       // Fallback if key missing
  interpolation: {
    escapeValue: false,     // React already escapes
  },
  react: {
    useSuspense: false,     // Sync init — no loading state needed
  },
})

export default i18n
```

**Key decisions:**
- `useSuspense: false` — translations are bundled (not loaded async), so Suspense adds no value and complicates testing
- `fallbackLng: 'en'` — English as fallback prevents blank strings during development
- No `backend` plugin — static imports, zero network requests
- Import `src/i18n/index.js` in `main.jsx` before rendering (side-effect import)

### 2.4 Provider Chain Design

**Current chain:**
```
StrictMode > ProfileProvider > App
```

**New chain:**
```
StrictMode > I18nextProvider > ProfileProvider > App
```

**Why I18nextProvider wraps ProfileProvider:**
1. ProfileProvider's loading/error messages need translation
2. The `I18nextProvider` is stateless from React's perspective (i18next manages its own state) — it only needs to be high enough to cover all translated components
3. Language changes via `i18n.changeLanguage()` are triggered from ProfileContext actions, not from provider nesting

**main.jsx changes:**
```jsx
import './i18n'  // Side-effect: initializes i18next
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
```

### 2.5 Language Switching — Profile-Driven

**No separate LanguageContext.** Language is a profile-level preference stored in the profile schema.

**Profile schema change:**
```diff
  const profile = {
    id: crypto.randomUUID(),
    nickname: trimmedNickname,
    theme,
    pinHash,
    firebaseUid,
    currentLevel,
+   language: 'he',         // Default: Hebrew
    createdAt: now,
    lastActiveAt: now,
  };
```

**Language sync mechanism:**

In `ProfileProvider`, whenever `activeProfile` changes (SET_ACTIVE action), call `i18n.changeLanguage(profile.language)`. This is done via a `useEffect` in ProfileProvider watching `state.activeProfile?.language`:

```jsx
// Inside ProfileProvider
useEffect(() => {
  const lang = state.activeProfile?.language || 'he'
  i18n.changeLanguage(lang)
  // Also set document direction
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
}, [state.activeProfile?.language])
```

**Why this design:**
- Single source of truth (profile.language)
- No extra context or state management
- Language switch is instantaneous (bundled translations)
- Works with multiple profiles switching languages

**Language toggle UI:** Added to `StartScreen` as a simple button/icon showing the opposite language code. Calls `updateProfile(id, { language: newLang })` which updates localStorage + triggers re-render.

### 2.6 RTL Strategy

#### 2.6.1 Document-Level Direction

The `<html>` element gets `dir="rtl"` or `dir="ltr"` dynamically (see 2.5 above). This gives us:
- Tailwind CSS logical property support via `rtl:` and `ltr:` variants (built into Tailwind v3)
- Native CSS flex/grid direction reversal
- Native text alignment

#### 2.6.2 Tailwind RTL Configuration

Tailwind v3.4.17 (our version) has built-in `rtl:` and `ltr:` variants. No plugin needed. Enable them by ensuring `dir` is set on `<html>`.

No changes needed to `tailwind.config.js` for RTL support.

#### 2.6.3 RTL-Specific CSS Fixes (3 identified)

1. **Checkmark position in CreateProfile theme selector:**
   - Current: `absolute top-2 right-2` (hardcoded LTR)
   - Fix: Change to `absolute top-2 end-2` (logical property, Tailwind `end-2`)
   - Alternatively: `rtl:left-2 ltr:right-2`
   - Best approach: Use `end-2` (Tailwind logical properties)

2. **Arrow key logic in CreateProfile theme picker:**
   - Current: `ArrowLeft` = previous, `ArrowRight` = next (LTR assumption)
   - Fix: Check `document.documentElement.dir` and invert for RTL
   - ArrowRight in RTL = previous, ArrowLeft in RTL = next
   - Implementation: `const isRTL = document.documentElement.dir === 'rtl'`

3. **step-fade animation direction in StrategyHint:**
   - Current: `translateX(-4px)` to `translateX(0)` (slides from left)
   - Fix: In RTL, should slide from right: `translateX(4px)` to `translateX(0)`
   - Implementation option A: Two keyframes + `rtl:` variant class
   - Implementation option B: Use `translateX` with a CSS custom property `--step-dir: -1` / `--step-dir: 1`
   - **Recommended:** Option B (single keyframe, simpler maintenance):
     ```css
     :root { --step-dir: -1; }
     :root[dir="rtl"] { --step-dir: 1; }
     ```
     ```js
     // keyframe
     'step-fade': {
       '0%': { opacity: '0', transform: 'translateX(calc(var(--step-dir) * 4px))' },
       '100%': { opacity: '1', transform: 'translateX(0)' },
     },
     ```

#### 2.6.4 Components That Are Already RTL-Safe

- **Problem.jsx:** Math expression `num1 operator num2 = ?` — uses `inline-block mx-2` which respects direction. However, mathematical expressions should always read LTR. Need to wrap in `dir="ltr"` to prevent `7 + 3 = ?` becoming `? = 3 + 7` in RTL.
- **AnswerButtons.jsx:** `grid grid-cols-2` is direction-agnostic (grid doesn't reverse in RTL)
- **PinEntry.jsx:** Numpad grid is symmetric, direction-independent
- **DotCounter.jsx:** Dot groups use `flex` which DOES reverse in RTL — needs `dir="ltr"` wrapper since dot counting is directional (left-to-right always)
- **NumberLine.jsx:** SVG-based, direction-independent
- **ScoreDisplay.jsx:** `flex justify-between` reverses in RTL — Score goes right, Streak goes left. This is actually CORRECT for RTL layout.

#### 2.6.5 Components Needing `dir="ltr"` Override

Some content must always render LTR regardless of document direction:
- **Problem.jsx:** Math expressions are universal LTR (`5 + 3 = ?`)
- **DotCounter.jsx:** Dot groups represent quantities left-to-right
- **NumberLine.jsx:** Number lines are always left-to-right
- **StrategyHint.jsx:** Math step text contains formulas (`8+2=10`) that must be LTR

**Pattern:** Add `dir="ltr"` to the outermost container of these math-content components. The surrounding UI (labels, buttons) still follows document direction.

### 2.7 Strategy Engine Refactoring for i18n

**Current architecture:** `strategies.js` → `STEP_TEMPLATES` return hardcoded English strings.
**Required change:** Return translation keys + interpolation params instead.

**New STEP_TEMPLATES contract:**
```js
// BEFORE (returns strings)
bridging_add: (num1, num2) => [
  `Make ${tens}: ${base}+${complement}=${tens}`,
  ...
]

// AFTER (returns key+params objects)
bridging_add: (num1, num2) => [
  { key: 'strategies.steps.bridging_add_1', params: { tens, base, complement } },
  { key: 'strategies.steps.bridging_add_2', params: { addend, complement, remainder } },
  { key: 'strategies.steps.bridging_add_3', params: { tens, remainder } },
]
```

**`getStrategies()` return type changes:**
```ts
// BEFORE
{ id: string, name: string, steps: string[] }

// AFTER
{ id: string, nameKey: string, steps: { key: string, params: object }[] }
```

**StrategyHint.jsx** then calls `t(step.key, step.params)` to resolve the translated string.

**Strategy names** also become keys:
```js
const STRATEGY_NAME_KEYS = {
  [STRATEGY_IDS.BRIDGING_ADD]: 'strategies.names.bridging_add',
  // ...
}
```

**Impact:** This is the largest single refactoring. All 74 strategy tests need updating to match the new return type.

### 2.8 Font Considerations for Hebrew

Current font: `Comic Sans MS, cursive, sans-serif`

Hebrew fallback chain:
- `Comic Sans MS` does support Hebrew on Windows/Mac (has Hebrew glyphs)
- But rendering quality varies — the Hebrew glyphs in Comic Sans are not as polished
- Add `"Segoe UI"` as a fallback for better Hebrew rendering on Windows
- On mobile/iOS, system fonts handle Hebrew well

**Recommendation:** Keep `Comic Sans MS` first (brand consistency). The current `cursive, sans-serif` generic fallback handles Hebrew adequately. No web font download needed — this keeps bundle size zero for fonts.

If Hebrew rendering is suboptimal in testing, consider adding `"Varela Round"` (Hebrew-optimized, Google Fonts) as a web font in a follow-up issue. Not in Phase 4 scope.

---

## 3. Sub-Task Breakdown

### Sub-task #21.1: i18n Infrastructure + Translation Files
**Agent:** react-specialist
**Estimated:** 4-6h

**Scope:**
1. Install `i18next` + `react-i18next`
2. Create `src/i18n/index.js` with init config
3. Create `src/i18n/locales/he.json` — full Hebrew translation file
4. Create `src/i18n/locales/en.json` — full English translation file
5. Import `src/i18n` in `main.jsx` (side-effect import)
6. Wrap app in `I18nextProvider` in `main.jsx`
7. Add `language: 'he'` default to profile schema in `profiles.js`
8. Update `VALID_THEMES` type validation if needed
9. Write tests:
   - i18n init test (loads, default language is 'he')
   - Translation key completeness test (all keys in he.json exist in en.json)
   - Provider chain test (updated main.test.jsx)

**Files changed:**
- `package.json` (new deps)
- `src/i18n/index.js` (NEW)
- `src/i18n/locales/he.json` (NEW)
- `src/i18n/locales/en.json` (NEW)
- `src/main.jsx` (provider chain)
- `src/main.test.jsx` (updated mock)
- `src/utils/profiles.js` (language field)
- `src/utils/profiles.test.js` (language field tests)
- `src/i18n/i18n.test.js` (NEW)

**Dependencies:** None (foundation for all other sub-tasks)
**Acceptance criteria:**
- [ ] `i18next` + `react-i18next` installed
- [ ] `he.json` and `en.json` contain all ~90 keys
- [ ] Default language is Hebrew
- [ ] Provider chain: I18nextProvider > ProfileProvider > App
- [ ] Profile schema includes `language: 'he'` default
- [ ] Translation completeness test passes

---

### Sub-task #21.2: Profile-Driven Language Switching + RTL
**Agent:** react-specialist
**Estimated:** 5-7h

**Scope:**
1. Add `useEffect` in ProfileProvider to sync `i18n.changeLanguage()` when `activeProfile.language` changes
2. Set `document.documentElement.lang` and `document.documentElement.dir` on language change
3. Update `index.html`: change `<html lang="en">` to `<html lang="he" dir="rtl">` (default)
4. Add language toggle button to `StartScreen` (or `App` header area)
5. Wire toggle to `updateProfile(id, { language: newLang })`
6. Add CSS custom property for step-fade direction (see 2.6.3)
7. Update `index.css` with `:root[dir="rtl"]` custom property
8. Write tests:
   - Language sync on profile activation
   - Document direction changes on language switch
   - Language toggle button works
   - RTL direction set on Hebrew profile activation

**Files changed:**
- `src/context/ProfileContext.jsx` (useEffect for language sync)
- `src/components/StartScreen.jsx` (language toggle UI)
- `index.html` (default lang/dir)
- `src/styles/index.css` (RTL custom property)
- `tailwind.config.js` (step-fade keyframe update)
- Test files for ProfileContext and StartScreen

**Dependencies:** #21.1 (i18n infrastructure)
**Acceptance criteria:**
- [ ] Language auto-switches when profile is activated
- [ ] `<html>` dir attribute toggles between rtl/ltr
- [ ] Language toggle button visible on StartScreen
- [ ] step-fade animation direction flips for RTL

---

### Sub-task #21.3: Externalize Strings — Core Screens
**Agent:** react-specialist
**Estimated:** 6-8h

**Scope:** Replace all hardcoded strings with `t()` calls in:
1. `App.jsx` — loading states, error messages
2. `StartScreen.jsx` — title, subtitle, stats labels, button text, tips
3. `GameScreen.jsx` — exit button, loading text
4. `ResultScreen.jsx` — title, stats labels, performance messages, buttons, footer
5. `ScoreDisplay.jsx` — "Score", "Streak" labels
6. `Feedback.jsx` — correct/wrong message arrays
7. Add `dir="ltr"` to `Problem.jsx` math expression container

**Pattern for each component:**
```jsx
import { useTranslation } from 'react-i18next'
// ...
const { t } = useTranslation()
// ...
<h1>{t('startScreen.title')}</h1>
```

**Tests:** Update existing component tests to either:
- Mock `react-i18next` to return keys as-is (simpler, recommended for unit tests)
- Use a `renderWithI18n()` helper with a test i18n instance

**Files changed:**
- `src/App.jsx`
- `src/components/StartScreen.jsx`
- `src/components/GameScreen.jsx`
- `src/components/ResultScreen.jsx`
- `src/components/ScoreDisplay.jsx`
- `src/components/Feedback.jsx`
- `src/components/Problem.jsx`
- All associated test files

**Dependencies:** #21.1
**Acceptance criteria:**
- [ ] Zero hardcoded English strings in core screen components
- [ ] All strings appear in Hebrew when language is 'he'
- [ ] Math expressions always render LTR
- [ ] All existing tests pass (with i18n mocks)

---

### Sub-task #21.4: Externalize Strings — Profile Components
**Agent:** react-specialist
**Estimated:** 5-7h

**Scope:** Replace all hardcoded strings with `t()` calls in:
1. `ProfileSwitcher.jsx` — title, welcome text, create button, level badge, error messages
2. `PinEntry.jsx` — header, digit status, cooldown message, checking text, button labels
3. `CreateProfile.jsx` — all step titles, placeholder text, button labels, error messages

**RTL fixes in this sub-task:**
- `CreateProfile.jsx`: checkmark position `right-2` -> `end-2`
- `CreateProfile.jsx`: Arrow key handler RTL-aware logic
- `ProfileSwitcher.jsx`: `dir="auto"` already on nickname — verify it still works

**Files changed:**
- `src/components/ProfileSwitcher.jsx`
- `src/components/PinEntry.jsx`
- `src/components/CreateProfile.jsx`
- All associated test files

**Dependencies:** #21.1
**Acceptance criteria:**
- [ ] Zero hardcoded strings in profile components
- [ ] CreateProfile checkmark mirrors in RTL
- [ ] Arrow keys navigate correctly in RTL
- [ ] PIN entry and profile selection work in both languages

---

### Sub-task #21.5: Strategy Engine i18n Refactoring
**Agent:** react-specialist
**Estimated:** 6-8h

**Scope:**
1. Refactor `strategies.js`:
   - `STRATEGY_NAMES` -> `STRATEGY_NAME_KEYS` (return translation keys)
   - `STEP_TEMPLATES` -> return `{ key, params }` objects instead of strings
   - `getStrategies()` return type: `{ id, nameKey, steps: {key, params}[] }`
2. Update `StrategyHint.jsx`:
   - Use `useTranslation()` hook
   - Resolve `t(strategy.nameKey)` for strategy name
   - Resolve `t(step.key, step.params)` for each step
   - Add `dir="ltr"` to math-content areas within steps
3. Update `LearningAid.jsx`:
   - "I got it!" button text -> `t('learningAid.dismiss')`
4. Update `DotCounter.jsx`:
   - aria-labels translated
   - Add `dir="ltr"` wrapper for dot groups
5. Add Hebrew strategy step translations to `he.json`
6. Update all 74 strategy tests + 41 StrategyHint tests + 30 LearningAid tests

**Files changed:**
- `src/utils/strategies.js`
- `src/utils/strategies.test.js`
- `src/components/aids/StrategyHint.jsx`
- `src/components/aids/StrategyHint.test.jsx`
- `src/components/aids/LearningAid.jsx`
- `src/components/aids/LearningAid.test.jsx`
- `src/components/aids/DotCounter.jsx`
- `src/components/aids/DotCounter.test.jsx`
- `src/i18n/locales/he.json` (strategy keys)
- `src/i18n/locales/en.json` (strategy keys)

**Dependencies:** #21.1
**Acceptance criteria:**
- [ ] `getStrategies()` returns key+params, not hardcoded strings
- [ ] StrategyHint renders translated strategy names and steps
- [ ] Hebrew strategy hints are child-appropriate (grade 1-2 reading level)
- [ ] Math formulas within strategy steps render LTR
- [ ] All 145+ learning aid tests pass

---

### Sub-task #21.6: Test Infrastructure + Integration Tests + Code Review
**Agent:** react-specialist (implementation), then review agents
**Estimated:** 5-6h

**Scope:**
1. Create `src/test-utils/renderWithProviders.js`:
   ```jsx
   export function renderWithProviders(ui, { language = 'he', profile = null } = {}) {
     // Create test i18n instance
     // Wrap with I18nextProvider + ProfileContext.Provider
     return render(ui, { wrapper })
   }
   ```
2. Integration tests:
   - Full app renders in Hebrew by default
   - Profile switch from Hebrew to English profile changes all strings
   - RTL layout class present on `<html>` for Hebrew
   - LTR layout class present for English
   - Math content always LTR regardless of app language
   - Language persists across page refresh (via profile in localStorage)
3. Smoke test: render every screen (Start, Game, Result, ProfileSwitcher, CreateProfile) in both languages — no missing translation keys (i18next logs warnings for missing keys)
4. 3-agent code review: syntax-convention, security-style, architecture

**Files changed:**
- `src/test-utils/renderWithProviders.js` (NEW)
- `src/test-utils/index.js` (NEW, barrel export)
- `src/__tests__/i18n-integration.test.jsx` (NEW)
- Various test files updated to use new helper

**Dependencies:** #21.3, #21.4, #21.5 (all string externalization done)
**Acceptance criteria:**
- [ ] `renderWithProviders()` helper works for all test files
- [ ] Integration tests pass for both languages
- [ ] No missing translation key warnings in tests
- [ ] 3-agent code review passes

---

## 4. Dependency Graph

```
#21.1 (Infrastructure) ─────┬──> #21.2 (Language Switch + RTL)
                             ├──> #21.3 (Core Screen Strings)
                             ├──> #21.4 (Profile Component Strings)
                             └──> #21.5 (Strategy Engine i18n)

#21.2 + #21.3 + #21.4 + #21.5 ──> #21.6 (Integration Tests + Review)
```

**Parallel opportunities:** Sub-tasks #21.2, #21.3, #21.4, and #21.5 can be developed in parallel after #21.1 is complete. However, since this is a single-developer project with one react-specialist agent, sequential execution is recommended to avoid merge conflicts.

**Recommended sequence:** #21.1 -> #21.2 -> #21.3 -> #21.4 -> #21.5 -> #21.6

Rationale:
- #21.2 first after infrastructure because it sets up the RTL/direction mechanism that #21.3-#21.5 use
- #21.3 before #21.4 because core screens are more user-visible and validate the pattern
- #21.5 last among string tasks because it's the most complex refactoring (strategy return type change)

---

## 5. File Change Inventory

| File | Change Type | Sub-task |
|------|------------|----------|
| `package.json` | MODIFY (add deps) | #21.1 |
| `src/i18n/index.js` | NEW | #21.1 |
| `src/i18n/locales/he.json` | NEW | #21.1, extended in #21.5 |
| `src/i18n/locales/en.json` | NEW | #21.1, extended in #21.5 |
| `src/i18n/i18n.test.js` | NEW | #21.1 |
| `src/main.jsx` | MODIFY | #21.1 |
| `src/main.test.jsx` | MODIFY | #21.1 |
| `src/utils/profiles.js` | MODIFY (language field) | #21.1 |
| `src/utils/profiles.test.js` | MODIFY | #21.1 |
| `index.html` | MODIFY (lang/dir) | #21.2 |
| `src/styles/index.css` | MODIFY (RTL vars) | #21.2 |
| `tailwind.config.js` | MODIFY (step-fade) | #21.2 |
| `src/context/ProfileContext.jsx` | MODIFY | #21.2 |
| `src/components/StartScreen.jsx` | MODIFY | #21.2, #21.3 |
| `src/App.jsx` | MODIFY | #21.3 |
| `src/components/GameScreen.jsx` | MODIFY | #21.3 |
| `src/components/ResultScreen.jsx` | MODIFY | #21.3 |
| `src/components/ScoreDisplay.jsx` | MODIFY | #21.3 |
| `src/components/Feedback.jsx` | MODIFY | #21.3 |
| `src/components/Problem.jsx` | MODIFY | #21.3 |
| `src/components/ProfileSwitcher.jsx` | MODIFY | #21.4 |
| `src/components/PinEntry.jsx` | MODIFY | #21.4 |
| `src/components/CreateProfile.jsx` | MODIFY | #21.4 |
| `src/utils/strategies.js` | MODIFY (major) | #21.5 |
| `src/utils/strategies.test.js` | MODIFY (major) | #21.5 |
| `src/components/aids/StrategyHint.jsx` | MODIFY | #21.5 |
| `src/components/aids/StrategyHint.test.jsx` | MODIFY | #21.5 |
| `src/components/aids/LearningAid.jsx` | MODIFY | #21.5 |
| `src/components/aids/LearningAid.test.jsx` | MODIFY | #21.5 |
| `src/components/aids/DotCounter.jsx` | MODIFY | #21.5 |
| `src/components/aids/DotCounter.test.jsx` | MODIFY | #21.5 |
| `src/test-utils/renderWithProviders.js` | NEW | #21.6 |
| `src/test-utils/index.js` | NEW | #21.6 |
| `src/__tests__/i18n-integration.test.jsx` | NEW | #21.6 |

**Total:** 33 files (6 new, 27 modified)

---

## 6. Testing Architecture

### 6.1 Unit Test Pattern: Mock i18next

For most unit tests, mock `react-i18next` to return keys as-is:

```js
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, params) => {
      // Return key with params interpolated for readability
      if (params) return `${key}:${JSON.stringify(params)}`
      return key
    },
    i18n: { changeLanguage: vi.fn(), language: 'he' },
  }),
  I18nextProvider: ({ children }) => children,
  Trans: ({ i18nKey }) => i18nKey,
}))
```

This approach:
- Keeps tests fast and deterministic
- Tests that the correct keys are passed (not the translations themselves)
- Avoids test fragility when translation text changes

### 6.2 Integration Test Pattern: Real i18n Instance

For integration tests, create a real i18n instance with both language files:

```js
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import he from '../i18n/locales/he.json'
import en from '../i18n/locales/en.json'

function createTestI18n(lng = 'he') {
  const instance = i18n.createInstance()
  instance.use(initReactI18next).init({
    resources: { he: { translation: he }, en: { translation: en } },
    lng,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })
  return instance
}
```

### 6.3 `renderWithProviders()` Helper

```js
export function renderWithProviders(
  ui,
  {
    language = 'he',
    profileOverrides = {},
  } = {}
) {
  const i18nInstance = createTestI18n(language)
  const profileValue = {
    profiles: [],
    activeProfile: null,
    isLoading: false,
    error: null,
    maxProfiles: 4,
    selectProfile: vi.fn(),
    clearActiveProfile: vi.fn(),
    refreshProfiles: vi.fn(),
    addProfile: vi.fn(),
    createAndActivate: vi.fn(),
    updateProfile: vi.fn(),
    deleteProfile: vi.fn(),
    ...profileOverrides,
  }

  function Wrapper({ children }) {
    return (
      <I18nextProvider i18n={i18nInstance}>
        <ProfileContext.Provider value={profileValue}>
          {children}
        </ProfileContext.Provider>
      </I18nextProvider>
    )
  }

  return { ...render(ui, { wrapper: Wrapper }), i18n: i18nInstance, profileValue }
}
```

### 6.4 Translation Completeness Test

```js
import he from '../i18n/locales/he.json'
import en from '../i18n/locales/en.json'

function flattenKeys(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      return [...acc, ...flattenKeys(obj[key], path)]
    }
    return [...acc, path]
  }, [])
}

describe('Translation completeness', () => {
  it('en.json has all keys from he.json', () => {
    const heKeys = flattenKeys(he)
    const enKeys = flattenKeys(en)
    const missing = heKeys.filter(k => !enKeys.includes(k))
    expect(missing).toEqual([])
  })

  it('he.json has all keys from en.json', () => {
    const heKeys = flattenKeys(he)
    const enKeys = flattenKeys(en)
    const missing = enKeys.filter(k => !heKeys.includes(k))
    expect(missing).toEqual([])
  })
})
```

---

## 7. Risks & Mitigations

### Risk 1: Hebrew Translation Quality (HIGH)
- **Description:** Machine-translated Hebrew may not read naturally for a 7-year-old
- **Impact:** Poor UX, child confusion
- **Mitigation:** User (parent) reviews all Hebrew translations before release. Keep Hebrew strings at grade 1-2 reading level. Flag all Hebrew strings for review in PR.

### Risk 2: RTL Layout Breakage (MEDIUM)
- **Description:** Flex/grid layouts may break or look wrong in RTL
- **Impact:** Visual bugs in Hebrew mode
- **Mitigation:**
  - Systematic audit of every flex/grid container
  - `dir="ltr"` override on all math-content components
  - Visual regression testing in both directions
  - Use Tailwind logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`) instead of physical (`pl-`, `pr-`, `ml-`, `mr-`, `left-`, `right-`)

### Risk 3: Strategy Refactoring Breaks Existing Tests (MEDIUM)
- **Description:** Changing `getStrategies()` return type from strings to key+params objects breaks 74 tests
- **Impact:** Significant test rewrite effort
- **Mitigation:**
  - Refactor in a single sub-task (#21.5) to keep change atomic
  - Run tests after strategy.js changes, before StrategyHint changes
  - Consider a `resolveStrategy(strategy, t)` helper function that converts key+params to strings, making it easy to test both the raw output and the resolved output

### Risk 4: Bundle Size Increase (LOW)
- **Description:** i18next adds ~12KB gzipped, JSON files add ~3-5KB
- **Impact:** Marginal — PWA already caches aggressively
- **Mitigation:** Monitor bundle size. Static imports mean no code-splitting needed. Total addition: ~15-17KB gzipped (acceptable for a PWA).

### Risk 5: Existing Test Suite Breakage (MEDIUM)
- **Description:** 719 existing tests may break when i18n mock is missing
- **Impact:** CI pipeline failure
- **Mitigation:**
  - Add global `react-i18next` mock in Vitest setup file (or per-file as needed)
  - Run full test suite after each sub-task
  - The `renderWithProviders` helper standardizes the mocking pattern

### Risk 6: Comic Sans MS Hebrew Rendering (LOW)
- **Description:** Hebrew glyphs in Comic Sans MS may look different from English
- **Impact:** Minor visual inconsistency
- **Mitigation:** Test on target devices (iOS Safari, Chrome Android). If needed, add Hebrew-optimized web font in follow-up. Not blocking for Phase 4.

---

## 8. Out of Scope (Deferred)

- **Language selector in CreateProfile wizard:** Language selection during profile creation (add a step 5). Deferred — can be added later. Default 'he' is fine for initial release.
- **Dynamic language detection:** Browser language detection (i18next-browser-languagedetector). Not needed — language comes from profile.
- **Plural rules:** Hebrew has complex plural forms (singular, dual, plural). Minimal impact for our UI (most strings don't use counts). Can add later if needed.
- **RTL-specific fonts:** Adding Varela Round or other Hebrew-optimized fonts. Only if Comic Sans Hebrew proves inadequate.
- **Multiplication/division strategy translations:** strategies.js returns `[]` for * and / — no translations needed until those strategies are implemented.
- **PWA manifest i18n:** The manifest `name`/`short_name` stays English. Manifest i18n requires multiple manifests or a build step — overkill for 2 languages.

---

## 9. Performance Considerations

- **No lazy loading of translations:** Both language files are small (<5KB each) and bundled statically. No network requests for translations.
- **React re-renders on language change:** `i18n.changeLanguage()` triggers a re-render of all components using `useTranslation()`. This is fine — it happens only on profile switch, not during gameplay.
- **No impact on gameplay performance:** The `t()` function is a synchronous lookup from an in-memory object. Zero overhead during game play.

---

## 10. Migration / Backwards Compatibility

- **Existing profiles:** Profiles created before Phase 4 won't have a `language` field. The `useEffect` in ProfileProvider defaults to `'he'` when `activeProfile?.language` is undefined. No migration script needed.
- **localStorage schema:** The `language` field is optional. Old profiles continue to work. When any profile is updated (any field), the `lastActiveAt` auto-updates. The `language` field gets added on first explicit language toggle.
- **Firestore:** No Firestore schema changes. Language is stored in localStorage with the profile, not in Firestore.
