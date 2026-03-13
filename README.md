# Math Trainer - Sonic Edition

[![Deploy Production](https://github.com/DubiWork/math-trainer/actions/workflows/deploy-production.yml/badge.svg)](https://github.com/DubiWork/math-trainer/actions/workflows/deploy-production.yml)

A Sonic-themed math training PWA for kids. Covers addition, subtraction, multiplication, and division across 13 progressive levels with adaptive difficulty, multi-profile support, and full Hebrew/English bilingual UI.

Live: https://math-trainer-1a632.web.app

## Features

- 13-level progressive difficulty covering addition, subtraction, multiplication, and division
- Adaptive confidence engine that adjusts problem difficulty based on per-session performance
- Multi-profile system supporting up to 4 profiles, with PIN-protected parent access
- Bilingual support: Hebrew (default, RTL) and English, switchable per profile
- Learning aids: dot counter, number line, and strategy hints for each problem type
- Level progression with animated celebration screens
- Sonic-themed visuals throughout
- Offline-first PWA — installable on desktop and mobile

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Firebase** - Anonymous authentication and Firestore progress persistence
- **react-i18next** - Bilingual (Hebrew/English) internationalization
- **vite-plugin-pwa** - Service worker and offline support (Workbox)

## Architecture

Provider hierarchy and screen flow:

```
ErrorBoundary
  I18nextProvider
    ProfileProvider
      App
```

App screens:

```
ProfileSwitcher / CreateProfile  (no active profile)
  StartScreen
    GameScreen  -->  LevelUpScreen  -->  GameScreen (next level)
              \-->  ResultScreen
```

Core hooks:

- `useGameState` - game loop, scoring, answer validation
- `useConfidence` - adaptive difficulty engine (useReducer, per-session)
- `useGameProgress` - Firestore persistence, keyed to profile UID

## Project Structure

```
src/
  components/        # UI components
    aids/            # Learning aids (DotCounter, NumberLine, StrategyHint)
    GameScreen.jsx
    StartScreen.jsx
    LevelUpScreen.jsx
    LevelMap.jsx
    ResultScreen.jsx
    ProfileSwitcher.jsx
    CreateProfile.jsx
    PinEntry.jsx
  config/            # Level definitions (levels.js — 13 levels + getLevelConfig)
  context/           # ProfileContext, profileReducer
  firebase/          # Firebase init, validateEnv
  hooks/             # useGameState, useConfidence, useGameProgress, useFirebase
  i18n/              # i18next setup, he.json + en.json translation files
  utils/             # Math problem generation (supports all 4 operators)
  test-utils/        # renderWithProviders helper
  App.jsx            # Screen navigation and provider wiring
  main.jsx           # Entry point
```

## Testing

- **Unit/integration:** Vitest + React Testing Library — 883+ tests
- **End-to-end:** Playwright (`tests/e2e/`)
  - `regression/` — graduated regression suite (runs daily and on push to main)
  - `features/` — feature-level e2e tests (active development)

```bash
npm test                        # run unit tests
npm run test:e2e                # run all Playwright tests
npm run test:e2e:regression     # run regression suite only
npm run test:e2e:features       # run feature tests only
```

## Deployment

Push to `main` triggers the production deployment pipeline automatically.

**Pipeline:** `deploy-production.yml`
1. Node 20 setup and `npm ci`
2. ESLint
3. Unit tests (`npm test`)
4. Vite production build (Firebase env vars injected from GitHub Secrets)
5. Deploy to Firebase Hosting (target: production) via `FirebaseExtended/action-hosting-deploy`

**Staging** deploys from the `develop` branch via `deploy-staging.yml`.

Required GitHub Secrets:

```
FIREBASE_SERVICE_ACCOUNT
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Copy and fill in Firebase env vars
cp .env.example .env.local

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests (Vitest)
- `npm run test:watch` - Run unit tests in watch mode
- `npm run test:e2e` - Run Playwright e2e tests

## License

MIT
