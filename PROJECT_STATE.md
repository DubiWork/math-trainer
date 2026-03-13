# Project State — Math Trainer

> Bus-factor reduction document. A new developer should be able to understand the full project from this file alone.
>
> Last updated: 2026-03-13

---

## Overview

Math Trainer is a Sonic-themed progressive web app (PWA) that makes arithmetic practice enjoyable for young children. It uses an adaptive confidence engine to advance the child at the right pace rather than on a fixed curriculum schedule.

| Property | Value |
|----------|-------|
| Current version | v1.4.0 |
| Live production URL | https://math-trainer-1a632.web.app |
| Staging URL | https://math-trainer-1a632-staging.web.app |
| Firebase project | math-trainer-1a632 |
| Primary user | 7-year-old child (single household) |
| Auth model | Anonymous auth only — no PII, COPPA compliant |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 6 |
| Styling | Tailwind CSS 3 |
| PWA | vite-plugin-pwa + Workbox |
| Auth + Database | Firebase (Anonymous Auth + Firestore) |
| i18n | react-i18next — Hebrew default, English fallback |
| Testing (unit) | Vitest + React Testing Library |
| Testing (E2E) | Playwright |
| CI/CD | GitHub Actions |
| Hosting | Firebase Hosting (two targets: production + staging) |

---

## Environment Setup

### Prerequisites

- Node.js >= 20 (firebase-tools v15+ dropped Node 18)
- Firebase CLI (`npm install -g firebase-tools`)

### Local Development

```bash
npm install
npm run dev        # starts Vite dev server
npm test           # unit + integration tests (Vitest)
npm run test:e2e   # Playwright E2E tests
npm run lint       # ESLint (fix all warnings before committing)
```

### Required Secrets (7 total)

All secrets are stored as GitHub Secrets and injected at build time via environment variables.

| Secret | Purpose |
|--------|---------|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Hosting deploy (CI) |
| `VITE_FIREBASE_API_KEY` | Firebase client config |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase client config |
| `VITE_FIREBASE_PROJECT_ID` | Firebase client config |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase client config |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase client config |
| `VITE_FIREBASE_APP_ID` | Firebase client config |

All six `VITE_FIREBASE_*` variables are validated at startup by `src/firebase/validateEnv.js` (18 tests). Missing variables throw a descriptive error before the app renders.

---

## CI/CD Pipeline

### Workflows

| File | Trigger | Purpose |
|------|---------|---------|
| `.github/workflows/deploy-staging.yml` | Push to `develop` | Lint, test, build, deploy to staging |
| `.github/workflows/deploy-production.yml` | Push to `main` | Lint, test, build, deploy to production |
| `.github/workflows/regression.yml` | Daily 08:00 UTC + push to `main` | Full regression suite across staging and production |
| `.github/workflows/ci.yml` | PR open/sync | Unit tests and lint check |
| `.github/workflows/preview-cleanup.yml` | PR close | Clean up preview channels |

### Deployment Flow

```
feature/* → develop (staging auto-deploys) → baking period (3 days) → main (production auto-deploys)
```

### Test Graduation (Automated)

When code is merged to `main`, any Playwright test files in `tests/e2e/features/` are automatically moved to `tests/e2e/regression/` by the `graduate-tests` job and cherry-picked back to `develop`.

---

## Feature Inventory

| Feature | Status | Epic | Version |
|---------|--------|------|---------|
| Level Config + Problem Generator | Live | #11 | v1.1.0 |
| Confidence Engine (adaptive scoring) | Live | #14 | — |
| Multi-Profile System | Live | #17 | v1.2.0 |
| Learning Aids (dot counter, number line, strategy hints) | Live | #25 | v1.3.0 |
| Level Progression UI (level map, celebrations) | Live | #28 | v1.4.0 |
| i18n Hebrew + English | Staging (baking) | #21 | — |
| Progress Visualization | Queued | #34 | — |
| Critical Safety (ErrorBoundary, PWA icons, WCAG) | Queued | #117 | — |

---

## Level Configuration

13 levels covering ages 5–13. Defined in `src/config/levels.js`.

| Level | Name | Operators | Range | Age Target |
|-------|------|-----------|-------|------------|
| 1 | First Steps | + | 1–5 | 5–6 |
| 2 | Addition Hero | + | 1–10 | 6 |
| 3 | Minus Magic | - | 1–10 | 6–7 |
| 4 | Mixed Warrior | +, - | 1–10 | 7 |
| 5 | Cross the 10 | + | 1–20 | 7 |
| 6 | Subtract 20 | - | 1–20 | 7–8 |
| 7 | Mixed 20 | +, - | 1–20 | 8 |
| 8 | Tens Master | +, - | 10–100 (multiples of 10) | 8–9 |
| 9 | Century Runner | +, - | 1–100 | 9 |
| 10 | Speed of 2s | * | multipliers: 2, 5, 10 | 9–10 |
| 11 | Times Tables | * | multipliers: 3, 4, 6, 7, 8, 9 | 10–11 |
| 12 | Division Quest | / | divisors: 2, 5, 10 | 11–12 |
| 13 | Math Champion | +, -, *, / | 1–100 | 12–13 |

> Note: The level map is provisional — verify against school workbooks before Stage 2 launch.

---

## Adaptive Confidence Engine

The confidence engine (`src/hooks/useConfidence.js`) scores player performance and drives level-up decisions. It uses `useReducer` to avoid stale closure bugs.

### Key Thresholds

| Constant | Value | Meaning |
|----------|-------|---------|
| `DEFAULT_INITIAL_SCORE` | 50 | Starting score for a new session |
| `CORRECT_DELTA` | +8 | Points per correct answer |
| `WRONG_DELTA` | -12 | Points per wrong answer |
| `FAST_BONUS` | +3 | Bonus for answering in < 3s |
| `SLOW_WRONG_DELTA` | -8 | Reduced penalty for slow wrong (> 10s) |
| `STREAK_2_MULTIPLIER` | 1.3x | Applied from 2-answer streak |
| `STREAK_5_MULTIPLIER` | 1.6x | Applied from 5-answer streak |
| `STRUGGLING_THRESHOLD` | 35 | `isStruggling` flag triggers below this |
| `CRITICAL_THRESHOLD` | 20 | Part of `isCritical` condition |
| `CRITICAL_CONSECUTIVE_WRONG` | 5 | `isCritical` requires this many consecutive wrong |
| `LEVEL_UP_THRESHOLD` | 85 | Score must reach this for level-up |
| `LEVEL_UP_CONSECUTIVE_CORRECT` | 5 | Consecutive correct answers also required |

`shouldLevelUp` is sticky — once set it stays true until `acknowledgeLevelUp()` is called, so the UI cannot miss the event.

---

## Test Coverage

| Category | Count | Location |
|----------|-------|---------|
| Env validation | 18 | `src/firebase/validateEnv.test.js` |
| Level config | 4 | `src/config/levels.test.js` |
| Game state | 33 | `src/hooks/useGameState.test.js` |
| Math problems | 26 | `src/utils/mathProblems.test.js` |
| Confidence engine | 46 | `src/hooks/useConfidence.test.js` |
| Profile utilities | 67 | `src/firebase/profiles.test.js` |
| UI components | 112+ | `src/components/**/*.test.jsx` |
| Create profile flow | 97 | `src/components/CreateProfile.test.jsx` |
| Integration tests | 22+ | `src/tests/integration/` |
| E2E regression | 18 scenarios | `tests/e2e/regression/` |
| **Total** | **883+** | — |

Test commands:

```bash
npm test                       # all unit + integration tests
npm run test:e2e:regression    # Playwright regression suite
npm run test:e2e:features      # Playwright feature tests
```

---

## Key File Map

| Purpose | Path |
|---------|------|
| App entry point | `src/main.jsx` |
| Root component | `src/App.jsx` |
| Core game logic | `src/hooks/useGameState.js` |
| Adaptive scoring | `src/hooks/useConfidence.js` |
| Firestore progress persistence | `src/hooks/useGameProgress.js` |
| Level definitions | `src/config/levels.js` |
| Math problem generator | `src/utils/mathProblems.js` |
| Profile management | `src/contexts/ProfileContext.jsx` |
| Profile storage utilities | `src/firebase/profiles.js` |
| Firebase config + init | `src/firebase/config.js` |
| Env variable validation | `src/firebase/validateEnv.js` |
| Error boundary | `src/components/ErrorBoundary.jsx` |
| i18n setup | `src/i18n/i18n.js` |
| Hebrew translations | `src/i18n/locales/he.json` |
| English translations | `src/i18n/locales/en.json` |
| Test utilities | `src/test-utils/index.js` |
| Deploy to staging | `.github/workflows/deploy-staging.yml` |
| Deploy to production | `.github/workflows/deploy-production.yml` |
| Regression suite | `.github/workflows/regression.yml` |
| Firebase hosting config | `firebase.json` |
| PWA + Vite config | `vite.config.js` |
| Strategy + roadmap | `STRATEGY.md` |
| Changelog | `CHANGELOG.md` |

---

## i18n Architecture

- Library: `react-i18next` with `i18next`
- Default locale: Hebrew (`lng: 'he'`)
- Fallback locale: English
- RTL: toggled via `document.documentElement.dir`; CSS custom property `--step-dir` for directional layout
- Language switching: per-profile (not browser-detect); toggle on StartScreen
- Math content: always `dir="ltr"` (numbers do not change with RTL)
- Strategy hints: engine returns `{key, params}` objects; `StrategyHint` component resolves via `t()`
- Test setup: global `en.json` mock in `src/setupTests.js` keeps all 883 existing tests unchanged
- Integration tests: use `renderWithProviders` helper from `src/test-utils/`

---

## Firestore Data Model

| Collection | Document | Key Fields |
|-----------|---------|-----------|
| `users/{uid}/progress` | `default` | `score`, `streak`, `totalProblems`, `correctAnswers`, `currentStreak` |
| `users/{uid}/profiles` | `{profileId}` | `name`, `pinHash`, `level`, `language`, `createdAt` |

- Anonymous UID is the top-level document key
- No email, no real names, no PII stored
- Profile PINs are hashed (not stored in plaintext)

---

## Known Technical Debt

| Issue | Detail | Epic |
|-------|--------|------|
| Dual streak tracking | `gameState.streak` and `confidence.streak` are separate; the hook exposes `confidence.streak` as the source of truth but `gameState` still tracks its own | Post-#34 |
| No server-side profile backup | Profiles live in Firestore under anonymous UID; if the user clears app data the UID is lost and profiles cannot be recovered | Deferred |
| ErrorBoundary is class-based | React does not support function component error boundaries; this is a React limitation, not a design choice | #117 |
| PWA service worker on iOS Safari | iOS Safari has a 50 MB cache limit and different service worker lifecycle; needs explicit testing | #117 |
| Level map provisional | Level definitions in `src/config/levels.js` were designed before school workbook review — confirm against curriculum before Stage 2 | Pre-Stage 2 |

---

## Roadmap (Abbreviated)

Full details: `STRATEGY.md`

| Priority | Epic | Title | Status |
|----------|------|-------|--------|
| P0 | #117 | Phase 0 — Critical Safety + Infrastructure | Queued behind #21 |
| P1 | #21 | Phase 4 — i18n Hebrew + English | Baking on staging |
| P1 | #34 | Phase 9 — Progress Visualization | Queued behind #21 |
| P1 | — | Phase 12 — Accessibility + Contrast | Planned |
| P1 | — | Phase 13 — UX Polish + Pedagogical | Planned |
| P3 | #35 | Phase 10 — AI Teaching Videos | Deferred |
| P3 | #37 | Phase 11 — SEO + PWA + Go-to-Market | Deferred |

### MVP Acceptance Checklist (Stage 2 gate)

- [ ] Epic #21 (i18n) promoted to production and stable for 3 days
- [ ] Epic #34 (Progress Visualization) promoted to production
- [ ] All 16 CRITICAL safety findings from Phase 0 audit resolved
- [ ] Child self-initiates sessions on 4+ days within any 2-week window
- [ ] Offline mode confirmed working: full session playable in airplane mode
