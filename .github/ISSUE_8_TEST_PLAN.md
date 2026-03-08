# Issue #8: Deploy to Firebase Hosting - Test Plan

**Document:** `.github/ISSUE_8_TEST_PLAN.md`
**Created:** 2026-03-04
**Author:** QA Expert
**Status:** Ready for Execution (Post-Deployment)
**Related:** `.github/ISSUE_8_GROOMING.md`
**Scope:** CEO-Approved Minimal Viable Testing (85 minutes total)

---

## Table of Contents

1. [Test Strategy Overview](#1-test-strategy-overview)
2. [Pre-Deployment Validation (15 min)](#2-pre-deployment-validation-15-minutes)
3. [Post-Deployment Smoke Test (45 min -- CRITICAL)](#3-post-deployment-smoke-test-45-minutes----critical)
4. [Cross-Browser Sanity Check (15 min)](#4-cross-browser-sanity-check-15-minutes)
5. [Performance Quick Check (10 min)](#5-performance-quick-check-10-minutes)
6. [Test Execution Checklist](#6-test-execution-checklist)
7. [Bug Reporting Template](#7-bug-reporting-template)
8. [Success Criteria](#8-success-criteria)
9. [Deferred Testing (Per CEO)](#9-deferred-testing-per-ceo)
10. [Edge Cases Priority](#10-edge-cases-priority)

---

## 1. Test Strategy Overview

### 1.1 Scope and Philosophy

**CEO-Approved Scope:** 85 minutes of targeted, manual testing.

**Testing Philosophy (CEO Verdict):**
> "Don't spend 35 hours writing test cases for a math game that one kid will use. Ship, test with child, fix bugs as they emerge."

**Single Focus:** Can the child play the game on a mobile device?

**What This Plan IS:**
- A practical, executable checklist for deployment validation
- Focused on the child's real-world experience on a real device
- Designed for a solo developer deploying for the first time
- Completable in under 90 minutes

**What This Plan IS NOT:**
- A comprehensive E2E test suite (deferred -- see Section 9)
- An automated regression framework (overkill for 1-user app)
- A performance engineering exercise (child will not notice 100ms)

### 1.2 Testing Scope Summary

| Phase | Time | Priority | Method | Tester |
|-------|------|----------|--------|--------|
| **Pre-Deployment Validation** | 15 min | P0 | CLI + Browser | Developer |
| **Post-Deployment Smoke Test** | 45 min | P0 (CRITICAL) | Real device | Developer + Child |
| **Cross-Browser Sanity Check** | 15 min | P1 | Multiple browsers | Developer |
| **Performance Quick Check** | 10 min | P2 | DevTools + Device | Developer |
| **Total** | **85 min** | | | |

### 1.3 Testing Tools

| Tool | Purpose | Required? |
|------|---------|-----------|
| Terminal (bash) | Build verification, console output | Yes |
| Chrome DevTools | Console errors, network tab, 3G throttle | Yes |
| Child's iOS device | PRIMARY test device (iOS Safari) | Yes |
| Developer's desktop browser | Chrome desktop smoke test | Yes |
| Stopwatch / phone timer | Page load timing | Helpful |

### 1.4 Prerequisites

Before testing can begin, these conditions must be met:

- [ ] PR #2 (Issue #1 MVP) merged to `main` branch
- [ ] `deploy.yml` workflow created and committed
- [ ] GitHub Secrets configured (6 Firebase environment variables):
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`
- [ ] Firebase project `math-trainer-1a632` accessible
- [ ] Child's mobile device available and charged

---

## 2. Pre-Deployment Validation (15 Minutes)

**Purpose:** Verify the build succeeds locally before triggering the CI/CD pipeline. Catch configuration errors early.

**Who:** Developer
**When:** After deploy.yml is created, before merging to main
**Where:** Local development machine

### 2.1 Local Build Test (5 minutes)

| Step | Command / Action | Expected Result | Pass? |
|------|-----------------|-----------------|-------|
| PD-01 | Run `npm run build` | Build completes with exit code 0, no errors | [ ] |
| PD-02 | Check terminal output for warnings | Zero warnings related to Firebase config or missing env vars | [ ] |
| PD-03 | Verify `dist/` directory created | Contains `index.html`, `assets/` folder with JS/CSS bundles | [ ] |
| PD-04 | Verify `dist/` bundle is reasonable size | Total `dist/` < 5MB (JS bundle < 500KB gzipped) | [ ] |

**If PD-01 fails:** Check that `.env.local` exists with all 6 Firebase variables. Verify `VITE_` prefix on all variable names. Run `npm install` if dependencies are missing.

### 2.2 Preview Server Test (5 minutes)

| Step | Command / Action | Expected Result | Pass? |
|------|-----------------|-----------------|-------|
| PD-05 | Run `npm run preview` | Vite preview server starts on port 4173 (or similar) | [ ] |
| PD-06 | Open `http://localhost:4173` in Chrome | Start screen renders with "Sonic Math Trainer!" title | [ ] |
| PD-07 | Open Chrome DevTools Console (F12) | Zero errors in console (warnings acceptable) | [ ] |
| PD-08 | Click "Start Game!" button | Game screen loads with a math problem displayed | [ ] |
| PD-09 | Answer one math problem | Feedback animation shows (green check or red X) | [ ] |

**If PD-06 shows a blank page:** Firebase env vars are likely missing or malformed. Check that `import.meta.env.VITE_FIREBASE_API_KEY` resolves at build time.

**If PD-07 shows "Missing required Firebase environment variables":** The build did not inject env vars. Verify `.env.local` is in the project root (not `src/`).

### 2.3 GitHub Secrets Verification (5 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| PD-10 | Navigate to GitHub repo > Settings > Secrets and variables > Actions | Secrets page accessible | [ ] |
| PD-11 | Verify 6 secrets exist | All 6 `VITE_FIREBASE_*` secrets listed (values hidden) | [ ] |
| PD-12 | Cross-reference secret names with `src/firebase/config.js` lines 14-19 | Names match exactly (case-sensitive) | [ ] |
| PD-13 | Verify deploy.yml references secrets correctly | Workflow uses `${{ secrets.VITE_FIREBASE_API_KEY }}` etc. | [ ] |

**Exact secrets required (from `src/firebase/config.js`):**
```
VITE_FIREBASE_API_KEY         (required - validated in config.js)
VITE_FIREBASE_AUTH_DOMAIN     (required - validated in config.js)
VITE_FIREBASE_PROJECT_ID      (required - validated in config.js)
VITE_FIREBASE_STORAGE_BUCKET  (optional but expected)
VITE_FIREBASE_MESSAGING_SENDER_ID (optional but expected)
VITE_FIREBASE_APP_ID          (required - validated in config.js)
```

**Critical Note:** If any of the 4 required variables (`API_KEY`, `AUTH_DOMAIN`, `PROJECT_ID`, `APP_ID`) are missing, the app will crash on load with: `"Missing required Firebase environment variables"` (see `src/firebase/config.js` lines 23-39).

---

## 3. Post-Deployment Smoke Test (45 Minutes -- CRITICAL)

**Purpose:** This is the most important testing phase. Validate the deployed app works on the child's actual device through the child's actual usage pattern.

**Who:** Developer first (20 min), then child supervised by parent (25 min)
**When:** Immediately after first successful deployment
**Where:** Child's mobile device (iOS Safari -- PRIMARY), developer's desktop (secondary)

### 3.1 Developer Verification on Desktop (10 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| SD-01 | Open live Firebase Hosting URL in Chrome desktop | Page loads without errors | [ ] |
| SD-02 | Check Chrome DevTools Console | Zero errors (no Firebase init failures, no 404s) | [ ] |
| SD-03 | Verify "Sonic Math Trainer!" title displays | Blue gradient background, gold text, hedgehog emoji visible | [ ] |
| SD-04 | Click "Start Game!" | Game screen renders with math problem (e.g., "5 + 3 = ?") | [ ] |
| SD-05 | Answer correctly (tap correct number) | Green feedback, score increases by 10, streak increases by 1 | [ ] |
| SD-06 | Answer incorrectly (tap wrong number) | Red feedback, streak resets to 0, score unchanged | [ ] |
| SD-07 | Click "Exit" button | Result screen shows session stats (score, streak, accuracy) | [ ] |
| SD-08 | Refresh the page (F5) | Start screen loads again; if progress was saved, "Your Best" section shows | [ ] |
| SD-09 | Check Network tab in DevTools | Firestore read/write requests succeeding (200 status) | [ ] |

**STOP if SD-01 fails.** Check GitHub Actions for deployment errors. Common causes:
- Secrets not configured
- Build failure in CI
- Firebase Hosting not initialized for the project

### 3.2 Developer Verification on Child's Mobile Device (10 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| SM-01 | Open live URL in iOS Safari on child's device | Page loads, start screen visible | [ ] |
| SM-02 | Verify text is readable (not clipped, not tiny) | "Sonic Math Trainer!" fully visible, "Start Game!" button large | [ ] |
| SM-03 | Tap "Start Game!" button | Game screen loads, math problem visible with 4 answer buttons | [ ] |
| SM-04 | Tap an answer button | Button responds to touch, feedback animation plays | [ ] |
| SM-05 | Verify buttons are large enough for child's fingers | Each answer button is easily tappable (no accidental mis-taps) | [ ] |
| SM-06 | Play through 3 problems | Problems change, score/streak update, no freezes | [ ] |
| SM-07 | Check loading screen behavior | "Loading..." screen shows briefly, then start screen appears | [ ] |
| SM-08 | Rotate device to landscape (if possible) | UI remains usable (or stays portrait-locked per PWA config) | [ ] |

**STOP if SM-01 fails.** Try in an incognito/private tab to rule out cache issues. Verify the URL is correct (Firebase Hosting provides a `.web.app` URL).

### 3.3 PWA Installation Test (5 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| PWA-01 | In iOS Safari, tap Share icon (square with arrow) | Share sheet opens | [ ] |
| PWA-02 | Select "Add to Home Screen" | Prompt shows app name "Math Trainer" with icon | [ ] |
| PWA-03 | Confirm "Add" | App icon appears on home screen | [ ] |
| PWA-04 | Tap the home screen icon | App opens in standalone mode (no Safari URL bar) | [ ] |
| PWA-05 | Verify app is fully functional from home screen | Start screen loads, can start and play game | [ ] |

**Note on iOS PWA:** iOS Safari has limited PWA support. The `standalone` display mode should work, but push notifications and background sync are not available. This is acceptable for our use case.

### 3.4 Child Play Session (20 minutes)

**Setup:** Developer hands the device to the child with the app already loaded at the start screen. No verbal instructions given. Adult observes silently.

| Step | Observation | Expected Behavior | Pass? |
|------|------------|-------------------|-------|
| CP-01 | Child sees start screen | Child recognizes it as a game, looks for how to start | [ ] |
| CP-02 | Child taps "Start Game!" | Child finds the button without help (large, animated, centered) | [ ] |
| CP-03 | Child sees math problem | Child understands they need to solve it (e.g., "3 + 4 = ?") | [ ] |
| CP-04 | Child taps an answer | Child can reach and accurately tap the answer buttons | [ ] |
| CP-05 | Child gets correct answer | Child sees positive feedback, understands they got it right | [ ] |
| CP-06 | Child gets wrong answer | Child is NOT frustrated, sees gentle feedback, continues playing | [ ] |
| CP-07 | Child plays 5+ problems | No crashes, freezes, or blank screens during continuous play | [ ] |
| CP-08 | Score updates visibly | Child can see their score going up (even if they don't fully understand it) | [ ] |
| CP-09 | Child plays for 5+ minutes | Child is engaged and wants to continue (or at minimum is not bored/frustrated) | [ ] |
| CP-10 | Child taps "Exit" or finishes | Result screen shows, child can see "Play Again!" button | [ ] |
| CP-11 | After 5 minutes, ask child "Is this fun?" | Positive or neutral response (not negative) | [ ] |

**Failure Indicators (STOP and file bug):**
- App crashes or shows white/blank screen
- Child cannot figure out how to start without help
- Touch buttons do not respond or respond incorrectly
- Child becomes frustrated and wants to stop
- Score does not update after correct answers
- App freezes mid-game

### 3.5 Progress Persistence Test (5 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| PP-01 | After child plays, note the score/streak displayed | Record: Score = ___, Streak = ___ | [ ] |
| PP-02 | Close the browser/app completely | App is fully closed (not just backgrounded) | [ ] |
| PP-03 | Reopen the app (via URL or home screen icon) | App loads, start screen appears | [ ] |
| PP-04 | Check "Your Best" section on start screen | Shows the score/streak from previous session (or higher) | [ ] |
| PP-05 | If "Your Best" does NOT show, check DevTools console | Look for Firestore errors or auth failures | [ ] |

**If PP-04 fails:** Anonymous auth may not be working in production. Check Firebase Console > Authentication to see if anonymous users are being created.

---

## 4. Cross-Browser Sanity Check (15 Minutes)

**Purpose:** Verify the app renders correctly on the browsers most likely to be used.

**Who:** Developer
**When:** After smoke test passes on primary device
**Where:** Developer's machines / available devices

### 4.1 Chrome Desktop (5 minutes) -- Developer's Primary Browser

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| CB-01 | Open live URL in Chrome (latest) | Start screen renders correctly | [ ] |
| CB-02 | Complete one full game flow (Start > 3 problems > Exit) | All screens work, transitions smooth | [ ] |
| CB-03 | Check console for errors | Zero errors | [ ] |

### 4.2 iOS Safari (5 minutes) -- Child's Primary Browser (CRITICAL)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| CB-04 | Open live URL in Safari on child's iOS device | Start screen renders correctly | [ ] |
| CB-05 | Verify touch targets are responsive | Buttons respond on first tap, no double-tap needed | [ ] |
| CB-06 | Play 2 problems, verify score updates | Score increments correctly, streak works | [ ] |
| CB-07 | Check for iOS-specific rendering issues | No overlapping text, no cut-off content, no missing styles | [ ] |

**Known iOS Safari quirks to watch for:**
- `100vh` may include the address bar height (content might be hidden behind it)
- Tap highlights may persist visually on buttons
- Safe area insets on newer iPhones may clip content

### 4.3 Android Chrome (5 minutes) -- Optional, If Device Available

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| CB-08 | Open live URL in Chrome on Android device | Start screen renders correctly | [ ] |
| CB-09 | Play 2 problems | Game functional, touch responsive | [ ] |
| CB-10 | Test "Add to Home Screen" (Android PWA install) | Install prompt appears, app installs to home screen | [ ] |

**If no Android device is available:** This section can be skipped entirely. The child's iOS device is the primary target. Android testing is nice-to-have.

---

## 5. Performance Quick Check (10 Minutes)

**Purpose:** Verify the page loads in a reasonable time on mobile and animations are smooth during gameplay. Not a full performance audit.

**Who:** Developer
**When:** After browser checks pass
**Where:** Chrome DevTools + child's mobile device

### 5.1 Mobile Page Load Time (5 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| PF-01 | Open Chrome DevTools > Network tab | Network tab visible | [ ] |
| PF-02 | Set throttling to "Slow 3G" (simulates child's worst case) | Throttling enabled | [ ] |
| PF-03 | Clear cache and hard-reload the live URL (Ctrl+Shift+R) | Page begins loading | [ ] |
| PF-04 | Measure time until start screen is interactive (can tap "Start Game!") | **< 5 seconds** (CEO threshold) | [ ] |
| PF-05 | On child's actual mobile device, time the page load | **< 5 seconds on WiFi** (acceptable) | [ ] |

**CEO Performance Thresholds:**

| Metric | Target | CEO Rationale |
|--------|--------|---------------|
| Page load (WiFi) | < 3 seconds | Normal case for child at home |
| Page load (3G) | < 5 seconds | Worst case, still acceptable |
| Page load (installed PWA) | < 2 seconds | Cached assets, fastest scenario |

**If PF-04 exceeds 5 seconds on 3G:** Not a blocker for deployment. Document as a future optimization item. The child will be on WiFi at home.

### 5.2 Animation Smoothness (3 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| PF-06 | Start a game on mobile device | Game loads smoothly | [ ] |
| PF-07 | Answer correctly -- observe feedback animation | Green check animation is smooth (not janky/choppy) | [ ] |
| PF-08 | Answer incorrectly -- observe feedback animation | Red X animation is smooth | [ ] |
| PF-09 | Rapid-tap 5 answers in a row | Each problem transition is smooth, no stacking/overlap | [ ] |

### 5.3 Resource Check (2 minutes)

| Step | Action | Expected Result | Pass? |
|------|--------|-----------------|-------|
| PF-10 | In Chrome DevTools > Network, check total transferred | Total page resources < 2MB | [ ] |
| PF-11 | Check number of network requests on initial load | < 30 requests (Firebase SDK + app assets) | [ ] |

---

## 6. Test Execution Checklist

**Master checklist for quick reference during testing. Check off each item as completed.**

### Pre-Deployment (15 min)

- [ ] PD-01: `npm run build` succeeds
- [ ] PD-02: No build warnings for Firebase config
- [ ] PD-03: `dist/` directory created with expected files
- [ ] PD-05: `npm run preview` starts server
- [ ] PD-06: Preview loads in browser
- [ ] PD-07: Zero console errors in preview
- [ ] PD-10: GitHub Secrets page accessible
- [ ] PD-11: All 6 Firebase secrets exist
- [ ] PD-12: Secret names match `src/firebase/config.js`

### Post-Deployment -- Developer Desktop (10 min)

- [ ] SD-01: Live URL loads in Chrome
- [ ] SD-02: Zero console errors
- [ ] SD-04: "Start Game!" works
- [ ] SD-05: Correct answer flow works
- [ ] SD-06: Wrong answer flow works
- [ ] SD-07: Exit to results works

### Post-Deployment -- Mobile Device (10 min)

- [ ] SM-01: Live URL loads on iOS Safari
- [ ] SM-02: Text readable, not clipped
- [ ] SM-03: "Start Game!" works on touch
- [ ] SM-04: Answer buttons respond to touch
- [ ] SM-05: Buttons large enough for child
- [ ] SM-06: 3 problems play through without issues

### PWA Installation (5 min)

- [ ] PWA-02: "Add to Home Screen" shows app name
- [ ] PWA-03: Icon appears on home screen
- [ ] PWA-04: App opens in standalone mode
- [ ] PWA-05: App functional from home screen

### Child Play Session (20 min)

- [ ] CP-02: Child starts game without help
- [ ] CP-04: Child can tap answers accurately
- [ ] CP-07: 5+ problems with no crashes
- [ ] CP-09: 5+ minutes engagement
- [ ] CP-11: Child gives positive/neutral response

### Progress Persistence (5 min)

- [ ] PP-03: App reloads after close
- [ ] PP-04: Previous score shows on start screen

### Cross-Browser (15 min)

- [ ] CB-01: Chrome desktop renders correctly
- [ ] CB-02: Full game flow works on Chrome
- [ ] CB-04: iOS Safari renders correctly
- [ ] CB-06: Score updates correctly on iOS Safari

### Performance (10 min)

- [ ] PF-04: Page load < 5 seconds on 3G throttle
- [ ] PF-05: Page load < 5 seconds on child's device
- [ ] PF-07: Correct answer animation smooth
- [ ] PF-08: Wrong answer animation smooth

### Final Verdict

- [ ] **PASS: Child played game on mobile device for 5+ minutes without crashes**

---

## 7. Bug Reporting Template

If any issue is found during testing, document it using this template. File as a GitHub Issue with the label `bug`.

```markdown
## Bug: [Short descriptive title]

**Severity:** [P0-Critical / P1-High / P2-Medium / P3-Low]
**Found During:** [Pre-deployment / Smoke test / Cross-browser / Performance]
**Test Step:** [e.g., SM-03, CP-07]

### Environment
- **Device:** [e.g., iPhone 12, iOS 16.5]
- **Browser:** [e.g., Safari 16.5, Chrome 120]
- **Network:** [WiFi / 3G / Offline]
- **URL:** [Firebase Hosting URL]

### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3 -- where the issue occurs]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happened]

### Screenshots / Video
[Attach if available -- phone screenshot is fine]

### Impact on Child's Experience
[Can the child still play? Is this blocking or annoying?]
```

### Severity Definitions

| Severity | Definition | Example | Action |
|----------|-----------|---------|--------|
| **P0-Critical** | Child cannot play the game at all | App crashes on load, blank screen, buttons don't work | Fix immediately before handoff to child |
| **P1-High** | Game works but major feature broken | Score doesn't update, progress doesn't save, PWA won't install | Fix within 24 hours |
| **P2-Medium** | Minor issue, does not block gameplay | Slight visual glitch, animation stutter, text slightly clipped | Fix when convenient |
| **P3-Low** | Cosmetic or nice-to-have | Emoji renders differently on iOS, color slightly off | Defer indefinitely |

---

## 8. Success Criteria

### Primary Success Criterion (Per CEO)

**The SINGLE metric that determines deployment success:**

> **Child can play the math game on a mobile device for 5+ minutes without crashes.**

That is the only validation that matters.

### Secondary Success Criteria (Nice-to-Have)

| Criterion | Target | Required? |
|-----------|--------|-----------|
| Live URL accessible | Yes | Yes |
| Anonymous auth works (progress saves) | Yes | No (game works without it -- "Play Anyway!" fallback exists in `App.jsx` line 108-118) |
| PWA installable | Yes | No (browser mode is sufficient) |
| Page load < 5 seconds | Yes | No (child will wait a few seconds) |
| Cross-browser (Chrome + Safari) | Both work | Yes (Safari is child's browser) |
| Animations smooth | Yes | No (gameplay is functional without smooth animations) |

### Definition of Done

The deployment is considered **DONE** when ALL of the following are true:

1. GitHub Actions workflow runs successfully on merge to `main`
2. Firebase Hosting serves the app at a public URL
3. The child can load the URL on their iOS device
4. The child can play at least 5 math problems
5. The app does not crash during a 5-minute play session

**Anything beyond this is a bonus, not a requirement.**

---

## 9. Deferred Testing (Per CEO)

The following testing activities were identified during grooming but explicitly deferred by CEO decision. This section documents WHAT was deferred, WHY, and WHEN (if ever) to revisit.

### 9.1 Deferred Items

| Deferred Item | Original Effort | Why Deferred | When to Revisit | Risk of Deferral |
|---------------|----------------|--------------|-----------------|------------------|
| **Comprehensive E2E test suite** (35 test scenarios from Issue #1 Test Plan) | 20-35 hours | ROI is negative for 1-user app. Cost of writing tests exceeds cost of manually fixing any bug the child reports. | If the app is shared with 10+ users, or if regression bugs emerge after feature additions. | LOW -- Bugs are easy to find and fix in a small app. |
| **Performance regression testing** (Lighthouse CI, Web Vitals tracking) | 5 hours setup + ongoing | Child cannot perceive 100ms differences. No performance SLA for a family project. | Never, probably. Only if page load exceeds 10 seconds. | ZERO -- No user complaints expected. |
| **Security penetration testing** | 3 hours | Anonymous math game with zero PII. Firebase Security Rules already enforce user isolation. Attack surface is minimal. | If the app starts collecting PII (email, name) or handling payments. | VERY LOW -- Firestore rules already validated. |
| **Load testing** | 5 hours | Single user (one child). Firebase free tier handles 10GB/month. Even if shared with 20 classmates, load is negligible. | Never for this project. | ZERO -- No scaling concerns. |
| **Accessibility audit** (WCAG 2.1 AA) | 2 hours | The child is the only user. Child will adapt to the interface. No legal requirement for a personal project. | If the app is published publicly or used in a school setting. | LOW -- Large fonts and high contrast already in place. |
| **Automated CI test gate** (run tests on every PR) | 3 hours | No tests exist yet. CI test gate without tests is meaningless. | When unit tests are written for future features. | LOW -- Developer is the only committer. |
| **Offline mode deep testing** | 2 hours | PWA service worker is configured (`vite-plugin-pwa` with `autoUpdate`). Basic offline should work. Deep offline testing (Firestore offline writes, auth persistence) is low priority. | If child regularly uses app without WiFi. | LOW -- App will be used at home on WiFi. |
| **Firebase Emulator integration tests** | 5 hours | Requires emulator setup, test fixtures, mock data. Overkill for first deployment. | When Firebase rules or Firestore schema changes. | LOW -- Schema is simple (one collection, one document per user). |

### 9.2 CEO's Cost-Benefit Analysis

```
Deferred testing total: ~45-55 hours of work
App users: 1 (one child)
Average bug fix time: 15-30 minutes
Bugs child will encounter: Probably 0-3 in first week

Cost of testing: 45-55 hours
Cost of fixing bugs as they emerge: 0.5-1.5 hours

ROI of comprehensive testing: NEGATIVE
CEO Decision: Ship, observe, fix.
```

### 9.3 Trigger Points for Revisiting Deferred Items

| Trigger | Action |
|---------|--------|
| Child reports a bug | Fix it (15-30 min), consider adding test for that case |
| App shared with 10+ users | Add basic E2E tests for core flow |
| New feature added (multiplication, levels, etc.) | Add unit tests for new logic |
| Page load exceeds 5 seconds | Run Lighthouse, optimize |
| Firebase billing alert triggered | Review usage, add monitoring |
| App used in school/educational context | Full accessibility audit |

---

## 10. Edge Cases Priority

From the 37 edge cases identified during grooming (see `.github/ISSUE_8_GROOMING.md` Section 3), here is the prioritized breakdown for deployment testing.

### 10.1 CRITICAL -- Test These (Top 5)

These edge cases are tested as part of the smoke test above. They represent the highest-risk scenarios for first deployment.

| # | Edge Case | Test Step | Why Critical |
|---|-----------|-----------|-------------|
| 1 | **First deployment to new Firebase project** | SD-01, SD-02 | First time deploying; could have config issues that don't exist locally |
| 2 | **Anonymous auth on first visit (new device)** | SM-01, PP-04 | Child's device has never visited the app; auth must work on first touch |
| 3 | **Page load on slow 3G network** | PF-04 | Child may use mobile data; unacceptable if page takes 30+ seconds |
| 4 | **Touch interactions on small screen (<375px)** | SM-04, SM-05, CP-04 | Answer buttons must be tappable by a 7-year-old's fingers |
| 5 | **PWA installation (Add to Home Screen)** | PWA-01 through PWA-05 | Key feature for daily usage; child should tap an icon, not type a URL |

### 10.2 MEDIUM -- Monitor in Production

These edge cases are NOT explicitly tested during the 85-minute test window but should be monitored during the first week of usage.

| # | Edge Case | How to Monitor | Mitigation if Found |
|---|-----------|---------------|-------------------|
| 6 | **Deployment with missing GitHub Secrets** | Workflow will fail visibly in GitHub Actions | Re-run after adding missing secrets |
| 7 | **Build failure during deployment** | GitHub Actions shows red X on workflow | Check logs, fix build error, re-push |
| 8 | **Auth persistence after page refresh** | Included in PP-03/PP-04 | If auth fails, child gets "Play Anyway!" fallback |
| 9 | **Firestore write during offline mode** | Ask child if scores saved after WiFi drop | Enable Firestore offline persistence if needed |
| 10 | **Mobile landscape orientation** | SM-08 (quick check) | PWA `orientation: portrait` should lock it; if not, CSS handles it |

### 10.3 LOW -- Defer Entirely

These 27 remaining edge cases from the grooming report are deferred per CEO decision. They will be addressed only if they emerge as actual bugs in production.

**Examples of deferred edge cases:**
- Multiple simultaneous Firebase writes
- Browser back button during game
- Very long play sessions (100+ problems)
- Device memory pressure scenarios
- Firebase token expiration during gameplay
- Service worker update conflicts
- Incognito/private browsing mode
- Multiple tabs open simultaneously
- Screen reader interaction
- Keyboard-only navigation
- Right-to-left text rendering
- Emoji rendering differences across platforms

**CEO Rationale:** "These are real edge cases for a production app with thousands of users. For one child on one device, the probability of encountering any of these is near zero."

---

## Appendix A: Deployment Verification Flowchart

```
[GitHub Actions Workflow Triggered]
            |
            v
    [Build succeeds?] --NO--> Check workflow logs, fix build error
            |
           YES
            |
            v
    [Firebase deploy succeeds?] --NO--> Check Firebase token, secrets
            |
           YES
            |
            v
    [Live URL loads?] --NO--> Check Firebase Hosting config
            |
           YES
            |
            v
    [Console errors?] --YES--> Fix errors (likely env var issue)
            |
            NO
            |
            v
    [Start Game works?] --NO--> Check component rendering
            |
           YES
            |
            v
    [Play 5 problems?] --NO--> Check game state/Firebase
            |
           YES
            |
            v
    [Works on child's device?] --NO--> Check iOS Safari compat
            |
           YES
            |
            v
        [SHIP IT!]
```

---

## Appendix B: Quick Reference Card

Print this or keep it on screen during testing.

```
=== ISSUE #8 DEPLOYMENT TEST - QUICK REFERENCE ===

LIVE URL: [TBD - Firebase Hosting URL after deployment]
PROJECT:  math-trainer-1a632

PRE-DEPLOY (15 min):
  npm run build    --> Must succeed, no errors
  npm run preview  --> Must load in browser
  GitHub Secrets   --> 6 VITE_FIREBASE_* secrets exist

POST-DEPLOY (45 min):
  Desktop Chrome   --> Load URL, play 1 game, check console
  iOS Safari       --> Load URL, verify touch, play 3 problems
  PWA Install      --> Share > Add to Home Screen > Opens standalone
  Child Session    --> 5 problems, 5 minutes, no crashes
  Persistence      --> Close > Reopen > Score shows

CROSS-BROWSER (15 min):
  Chrome desktop   --> Full game flow
  iOS Safari       --> Full game flow (PRIMARY)
  Android Chrome   --> Optional

PERFORMANCE (10 min):
  3G throttle      --> Load < 5 seconds
  Animations       --> Smooth feedback on answer

SUCCESS = CHILD PLAYS 5+ MINUTES WITHOUT CRASHES
```

---

## Appendix C: Known Application Behavior

Reference information from the codebase that affects testing expectations.

**App Navigation Flow (from `App.jsx`):**
```
StartScreen --> GameScreen --> ResultScreen
     ^              |               |
     +--------------+---------------+
```

**Loading States:**
- Auth loading: Shows "Connecting to Sonic Speed!" (App.jsx line 87)
- Progress loading: Shows "Loading your progress..." (App.jsx line 88)
- Auth error: Shows "Oops!" with "Play Anyway!" button (App.jsx line 96-118)

**Firebase Fallback:** If authentication fails, the child can still play via the "Play Anyway!" button. Progress will not persist, but gameplay is unaffected. This means a Firebase auth failure is P1 (not P0).

**Answer Buttons:** The game uses a 2x2 grid of multiple-choice answers (4 options), NOT a number pad. The child taps the correct answer from 4 choices. This simplifies touch testing (4 large buttons vs. 21 small ones).

**PWA Configuration (from `vite.config.js`):**
- Display: `standalone` (no browser chrome)
- Orientation: `portrait`
- Register type: `autoUpdate` (service worker updates silently)
- Cached assets: JS, CSS, HTML, images, fonts

---

**Document Status:** COMPLETE -- Ready for Test Execution
**Last Updated:** 2026-03-04
**Approved Scope:** 85 minutes (CEO-approved minimal viable testing)
**Next Action:** Execute after Issue #8 deployment is complete

---

*Generated by QA Expert | Math Trainer Project*
*CEO Guidance: "The child is the customer. The customer is waiting. Ship it."*
