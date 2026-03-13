# Architecture Decision Records

**Project:** Math Trainer - Sonic Edition
**Last updated:** 2026-03-13

Architecture Decision Records (ADRs) capture the significant architectural choices made in this project, the context that drove each decision, and the trade-offs accepted.

---

## Table of Contents

- [ADR-001: Anonymous Auth](#adr-001-anonymous-auth)
- [ADR-002: Firebase Hosting](#adr-002-firebase-hosting)
- [ADR-003: Vite over CRA](#adr-003-vite-over-cra)
- [ADR-004: Tailwind CSS](#adr-004-tailwind-css)
- [ADR-005: localStorage Profiles with PIN Hashing](#adr-005-localstorage-profiles-with-pin-hashing)
- [ADR-006: Confidence Engine with useReducer](#adr-006-confidence-engine-with-usereducer)
- [ADR-007: react-i18next for i18n](#adr-007-react-i18next-for-i18n)
- [ADR-008: Class-based ErrorBoundary](#adr-008-class-based-errorboundary)
- [ADR-009: PWA with vite-plugin-pwa](#adr-009-pwa-with-vite-plugin-pwa)
- [ADR-010: GitHub Actions CD](#adr-010-github-actions-cd)

---

### ADR-001: Anonymous Auth

**Status:** Accepted
**Date:** 2026-03-04
**Context:** The app is designed for a 7-year-old child. Collecting personally identifiable information would trigger COPPA compliance requirements, add engineering complexity, and create unnecessary risk for a minor. A login system also adds friction that discourages a child from starting a session.
**Decision:** Use Firebase Anonymous Auth exclusively. No email, username, or password is collected. Each device gets a persistent anonymous UID used only for Firestore data scoping.
**Consequences:** Firestore progress is tied to the device; switching devices loses history. No account recovery mechanism exists. These limitations are acceptable for a personal, single-household app. Migrating to named accounts in Stage 2 is possible without a schema change.

---

### ADR-002: Firebase Hosting

**Status:** Accepted
**Date:** 2026-03-04
**Context:** The app requires a hosting provider that integrates with Firebase Auth and Firestore, supports SPA routing rewrites, allows cache-control header configuration, and is operable within the free tier for a personal project.
**Decision:** Deploy to Firebase Hosting. The same Firebase project (`math-trainer-1a632`) covers auth, Firestore, and hosting, eliminating cross-origin complexity and keeping the free tier usage consolidated.
**Consequences:** The project is more tightly coupled to the Firebase ecosystem than with Vercel or Netlify. Firebase Hosting lacks some advanced build previewing features. These trade-offs are acceptable given the significant reduction in configuration surface area.

---

### ADR-003: Vite over CRA

**Status:** Accepted
**Date:** 2026-03-04
**Context:** Create React App (CRA) has been in maintenance mode since 2023 and uses Webpack with significantly slower cold-start and HMR times compared to native-ESM build tools. The project requires fast iteration during active development.
**Decision:** Use Vite as the build tool and dev server. Vite provides native ESM in development, sub-second HMR, and first-class React support via `@vitejs/plugin-react`.
**Consequences:** Some CRA-era documentation and tutorials do not apply directly. Environment variables use the `VITE_` prefix instead of `REACT_APP_`. The `vite.config.js` is the single configuration entry point for plugins, test settings, and build options.

---

### ADR-004: Tailwind CSS

**Status:** Accepted
**Date:** 2026-03-04
**Context:** The app uses a custom Sonic-themed color palette (`#0066cc`, `#ffd700`, `#ff0000`) and a rich set of CSS animations (pop-in, shake, confetti, bounce-hero). Maintaining a separate CSS file for each would slow iteration and increase the risk of naming collisions.
**Decision:** Use Tailwind CSS v3 with a custom theme extension in `tailwind.config.js`. Utility classes cover layout and spacing; custom animations and keyframes are defined in the theme `extend` block and referenced by name.
**Consequences:** Class strings in JSX can be verbose. The production build purges unused utilities, keeping the CSS bundle small. Developers unfamiliar with Tailwind need to consult the docs for class names, though the config file documents all custom tokens.

---

### ADR-005: localStorage Profiles with PIN Hashing

**Status:** Accepted
**Date:** 2026-03-08
**Context:** Multiple children in the same household need separate progress records. Server-side accounts are out of scope (see ADR-001). Progress must persist across sessions without a network connection.
**Decision:** Store profile data (name, avatar, language, current level, PIN) in `localStorage`. PINs are hashed with SHA-256 before storage using the Web Crypto API — the plaintext PIN is never persisted.
**Consequences:** Data is device-local. Clearing browser storage destroys all profiles. SHA-256 is a one-way function, so a forgotten PIN cannot be recovered — a parent must reset the profile. This is an acceptable trade-off for an app with no server-side user management.

---

### ADR-006: Confidence Engine with useReducer

**Status:** Accepted
**Date:** 2026-03-08
**Context:** Fixed level thresholds (e.g., "advance after 10 correct answers") do not adapt to a child's actual fluency. A child who guesses correctly does not demonstrate the same mastery as one who answers quickly and consistently. The engine must consider response time, streaks, and consecutive errors together.
**Decision:** Implement `useConfidence` as a `useReducer`-based hook. The reducer holds the full score state and handles all transitions atomically, preventing the stale-closure bugs that afflict multi-`useState` implementations. Level-up fires when `score >= 85` AND `streak >= 5`; the flag is sticky until explicitly acknowledged.
**Consequences:** All score transitions are pure functions, making them straightforward to unit-test in isolation. The `useReducer` pattern adds a small amount of boilerplate compared to `useState` but eliminates an entire class of async state bugs.

---

### ADR-007: react-i18next for i18n

**Status:** Accepted
**Date:** 2026-03-13
**Context:** The primary user is a Hebrew-speaking child, but English is required as a fallback and for a parent/developer interface. Hebrew is RTL, which affects layout direction, text alignment, and directional CSS custom properties. The i18n solution must support profile-level language switching (not browser locale detection).
**Decision:** Use `react-i18next` with Hebrew as the default locale (`lng: 'he'`) and English as the fallback (`fallbackLng: 'en'`). `useSuspense` is disabled to prevent loading flickers. Strategy hints return `{ key, params }` objects that components resolve via `t()` at render time. `document.documentElement.dir` is toggled on language switch.
**Consequences:** Translation keys must be kept in sync across `he.json` and `en.json`. The `--step-dir` CSS custom property must be set correctly for RTL-aware animations. Math content uses `dir="ltr"` regardless of locale, since numerals are always left-to-right.

---

### ADR-008: Class-based ErrorBoundary

**Status:** Accepted
**Date:** 2026-03-04
**Context:** React does not provide a hooks-based equivalent for catching render-time errors. `componentDidCatch` and `getDerivedStateFromError` are lifecycle methods available only on class components. Without an error boundary, any unhandled render error would blank the entire app for the child.
**Decision:** Implement `ErrorBoundary` as a React class component. It catches render errors from its subtree and renders a fallback UI rather than crashing the whole app.
**Consequences:** The codebase otherwise uses only functional components and hooks. This single class component is an intentional exception dictated by the React API. If React adds a hooks-compatible error boundary API in the future, this component can be replaced.

---

### ADR-009: PWA with vite-plugin-pwa

**Status:** Accepted
**Date:** 2026-03-04
**Context:** The app must be playable offline on a home tablet with intermittent connectivity. It should also be installable to the home screen to reduce friction for a child who cannot navigate browser tabs.
**Decision:** Use `vite-plugin-pwa` with Workbox for service worker generation. `registerType: 'autoUpdate'` ensures the app self-updates without user action. The Firebase Hosting configuration sets `Cache-Control: max-age=31536000,immutable` on content-hashed assets and `no-cache` on `service-worker.js`.
**Consequences:** Service worker caching means stale content can persist if the cache-control headers on `service-worker.js` are misconfigured. The 50 MB iOS PWA cache limit means large media assets (e.g., future teaching videos) must use on-demand caching rather than precaching.

---

### ADR-010: GitHub Actions CD

**Status:** Accepted
**Date:** 2026-03-06
**Context:** Manual Firebase deploys require the developer to have `firebase-tools` installed locally and the service account configured. This is error-prone and not repeatable across machines. Automated deployment on merge to `main` is standard practice and prevents deploying untested code.
**Decision:** Deploy automatically via GitHub Actions (`deploy.yml`) on push to `main`. The workflow runs on Node 20 (required by `firebase-tools@15`), builds the Vite bundle with all six `VITE_FIREBASE_*` environment variables injected from GitHub Secrets, and deploys to Firebase Hosting. A health check step verifies the live URL responds with HTTP 200 after deployment.
**Consequences:** Six `VITE_FIREBASE_*` secrets plus `FIREBASE_SERVICE_ACCOUNT` must be configured in the GitHub repository settings. Any new environment variable dependency must be added to both `ci.yml` and `deploy.yml`. The Node version constraint (>= 20) must be respected in all workflow files.
