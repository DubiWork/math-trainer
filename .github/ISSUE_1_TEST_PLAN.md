# Issue #1: Math Trainer MVP - Comprehensive Test Plan

**Document:** `.github/ISSUE_1_TEST_PLAN.md`
**Created:** 2026-03-04
**Author:** QA Expert
**Status:** Ready for Test Execution
**Related:** `.github/ISSUE_1_GROOMING.md`

---

## Table of Contents

1. [Test Strategy Overview](#1-test-strategy-overview)
2. [Unit Test Cases](#2-unit-test-cases)
3. [Integration Test Cases](#3-integration-test-cases)
4. [E2E Test Cases (User Flows)](#4-e2e-test-cases-user-flows)
5. [Manual Test Cases](#5-manual-test-cases)
6. [Performance Test Cases](#6-performance-test-cases)
7. [Security & Compliance Test Cases](#7-security--compliance-test-cases)
8. [Browser/Device Compatibility](#8-browserdevice-compatibility)
9. [Test Data Specifications](#9-test-data-specifications)
10. [Test Execution Checklist](#10-test-execution-checklist)
11. [Success Criteria](#11-success-criteria)

---

## 1. Test Strategy Overview

### 1.1 Testing Approach

| Test Type | Coverage Goal | Tools | Environment |
|-----------|---------------|-------|-------------|
| **Unit Tests** | >=80% game logic, >=70% components | Vitest + React Testing Library | Local |
| **Integration Tests** | >=60% Firebase + components | Vitest + Firebase Emulator | Local + Emulator |
| **E2E Tests** | 100% acceptance criteria | Playwright | Local + Staging |
| **Manual Tests** | Child-friendliness, UX | Human (7-year-old + Adult) | Production-like |
| **Performance Tests** | TTI <2s, Response <100ms | Lighthouse + Web Vitals | Production-like |

### 1.2 Coverage Goals

```
Target Coverage by Module:
-----------------------------------------
utils/mathProblems.js     | >=95% (critical - math must be 100% accurate)
hooks/useGameState.js     | >=90% (game state logic)
hooks/useFirebase.js      | >=80% (Firebase integration)
components/*.jsx          | >=70% (UI components)
App.jsx                   | >=60% (screen navigation)
-----------------------------------------
Overall Target: >=80% for game logic, >=70% for UI
```

### 1.3 Test Tools & Dependencies

**Required Packages:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event msw
npm install -D @playwright/test
npm install -D firebase-tools  # For Firebase Emulator
```

**Configuration Files Needed:**
- `vitest.config.js` - Unit/Integration test configuration
- `playwright.config.js` - E2E test configuration
- `firebase.json` - Firebase Emulator configuration (emulators section)

### 1.4 Test Environments

| Environment | Purpose | URL | Data |
|-------------|---------|-----|------|
| Local Development | Unit/Integration tests | localhost:5173 | Mock/Emulator |
| Firebase Emulator | Integration tests | localhost:9099 (Auth), 8080 (Firestore) | Emulated |
| Staging | E2E + Manual | TBD (Firebase Hosting preview) | Test data |
| Production | Final validation | TBD (math-trainer.web.app) | Real data |

### 1.5 Test Priorities

| Priority | Category | Description |
|----------|----------|-------------|
| **P0** | Math Accuracy | All math operations MUST be 100% correct |
| **P0** | Child-Friendliness | 7-year-old must be able to use without help |
| **P1** | Core Gameplay | Start game, answer problems, see feedback |
| **P1** | Score/Streak | Correct tracking and display |
| **P2** | Firebase Persistence | Save/load progress works |
| **P2** | PWA Functionality | Offline mode, installable |
| **P3** | Visual Polish | Animations, theme consistency |

---

## 2. Unit Test Cases

### 2.1 Math Problem Generator (`utils/mathProblems.js`)

| Test ID | Function | Scenario | Input | Expected Output | Edge Case |
|---------|----------|----------|-------|-----------------|-----------|
| UT-MATH-001 | `generateAdditionProblem()` | Generate valid addition | None | `{ operand1: 1-10, operand2: 1-10, operator: '+', correctAnswer: sum }` | - |
| UT-MATH-002 | `generateAdditionProblem()` | Sum never exceeds 20 | 1000 iterations | All sums <= 20 | Upper boundary |
| UT-MATH-003 | `generateAdditionProblem()` | Sum can be exactly 10 | 1000 iterations | At least one sum === 10 | Boundary value |
| UT-MATH-004 | `generateAdditionProblem()` | Both operands within range | 1000 iterations | All operands 1-10 | Range validation |
| UT-MATH-005 | `generateSubtractionProblem()` | Generate valid subtraction | None | `{ operand1: 1-10, operand2: 1-10, operator: '-', correctAnswer: difference }` | - |
| UT-MATH-006 | `generateSubtractionProblem()` | Result never negative | 1000 iterations | All differences >= 0 | Lower boundary |
| UT-MATH-007 | `generateSubtractionProblem()` | Result can be exactly 0 | 1000 iterations | At least one difference === 0 | Boundary value |
| UT-MATH-008 | `generateSubtractionProblem()` | Operand1 >= Operand2 always | 1000 iterations | All: operand1 >= operand2 | Constraint validation |
| UT-MATH-009 | `generateProblem()` | Returns addition or subtraction | 1000 iterations | Mix of '+' and '-' operators | Distribution |
| UT-MATH-010 | `generateProblem()` | Roughly 50/50 distribution | 1000 iterations | 40-60% each operation | Statistical balance |
| UT-MATH-011 | `generateProblem()` | Avoid same problem twice | Generate 2 problems | Second problem different from first | Consecutive uniqueness |
| UT-MATH-012 | `validateAnswer()` | Correct answer returns true | `{ problem, userAnswer: correctAnswer }` | `true` | - |
| UT-MATH-013 | `validateAnswer()` | Wrong answer returns false | `{ problem, userAnswer: wrongAnswer }` | `false` | - |
| UT-MATH-014 | `validateAnswer()` | String answer handled | `{ problem, userAnswer: "5" }` | Coerced and validated | Type coercion |
| UT-MATH-015 | `validateAnswer()` | Empty answer returns false | `{ problem, userAnswer: "" }` | `false` | Empty input |
| UT-MATH-016 | `validateAnswer()` | Negative answer returns false | `{ problem, userAnswer: -5 }` | `false` | Invalid input |
| UT-MATH-017 | `validateAnswer()` | Decimal answer returns false | `{ problem, userAnswer: 5.5 }` | `false` | Invalid input |
| UT-MATH-018 | `validateAnswer()` | NaN answer returns false | `{ problem, userAnswer: NaN }` | `false` | Invalid input |

### 2.2 Game State Hook (`hooks/useGameState.js`)

| Test ID | Function | Scenario | Input | Expected Output | Edge Case |
|---------|----------|----------|-------|-----------------|-----------|
| UT-STATE-001 | `useGameState()` | Initial state correct | None | `{ screen: 'start', score: 0, streak: 0, highScore: 0 }` | - |
| UT-STATE-002 | `startGame()` | Transitions to game screen | Call startGame() | `screen === 'game'`, new problem generated | - |
| UT-STATE-003 | `submitAnswer()` | Correct answer updates state | Correct answer | `score += 10, streak += 1` | - |
| UT-STATE-004 | `submitAnswer()` | Wrong answer resets streak | Wrong answer | `streak === 0, score unchanged` | - |
| UT-STATE-005 | `submitAnswer()` | New problem after correct | Correct answer | New problem generated, different from previous | - |
| UT-STATE-006 | `submitAnswer()` | New problem after wrong | Wrong answer | New problem generated after feedback delay | - |
| UT-STATE-007 | `submitAnswer()` | High score updates | Score exceeds highScore | `highScore === score` | - |
| UT-STATE-008 | `submitAnswer()` | High score persists | Score below highScore | `highScore unchanged` | - |
| UT-STATE-009 | `endGame()` | Transitions to result screen | Call endGame() | `screen === 'result'` | - |
| UT-STATE-010 | `resetGame()` | Returns to start screen | Call resetGame() | `screen === 'start', score: 0, streak: 0` | - |
| UT-STATE-011 | `resetGame()` | Preserves high score | Call resetGame() | `highScore unchanged` | - |
| UT-STATE-012 | `submitAnswer()` | Handles rapid submissions | 10 submissions in 100ms | Only first processed (debounce) | Rapid input |
| UT-STATE-013 | `submitAnswer()` | First correct answer | First submit correct | `score === 10, streak === 1` | Initial state |
| UT-STATE-014 | `submitAnswer()` | 5 correct in a row | 5 correct submissions | `score === 50, streak === 5` | Accumulation |
| UT-STATE-015 | `submitAnswer()` | Wrong after 10-streak | 10 correct then 1 wrong | `streak === 0, score === 100` | Streak reset |
| UT-STATE-016 | `useGameState()` | Large score handled | Score reaches 10000 | No overflow, displays correctly | Large numbers |

### 2.3 UI Components

#### 2.3.1 Problem Component

| Test ID | Component | Scenario | Props | Expected Behavior |
|---------|-----------|----------|-------|-------------------|
| UT-PROB-001 | `Problem` | Renders addition problem | `{ operand1: 5, operand2: 3, operator: '+' }` | Displays "5 + 3 = ?" |
| UT-PROB-002 | `Problem` | Renders subtraction problem | `{ operand1: 8, operand2: 4, operator: '-' }` | Displays "8 - 4 = ?" |
| UT-PROB-003 | `Problem` | Large font size | Any problem | Font size >= 48px |
| UT-PROB-004 | `Problem` | High contrast text | Any problem | Contrast ratio >= 7:1 (AAA) |

#### 2.3.2 AnswerButtons Component

| Test ID | Component | Scenario | Props/Action | Expected Behavior |
|---------|-----------|----------|--------------|-------------------|
| UT-ANS-001 | `AnswerButtons` | Renders number buttons 0-20 | None | 21 number buttons displayed |
| UT-ANS-002 | `AnswerButtons` | Button click calls onAnswer | Click button "5" | `onAnswer(5)` called |
| UT-ANS-003 | `AnswerButtons` | Buttons have min 60px size | None | All buttons >= 60x60px |
| UT-ANS-004 | `AnswerButtons` | Disabled during feedback | `disabled: true` | Buttons not clickable |
| UT-ANS-005 | `AnswerButtons` | Submit button present | None | Submit/Enter button visible |
| UT-ANS-006 | `AnswerButtons` | Clear/backspace button | None | Can clear entered number |

#### 2.3.3 ScoreDisplay Component

| Test ID | Component | Scenario | Props | Expected Behavior |
|---------|-----------|----------|-------|-------------------|
| UT-SCORE-001 | `ScoreDisplay` | Shows current score | `{ score: 50 }` | Displays "Score: 50" |
| UT-SCORE-002 | `ScoreDisplay` | Shows current streak | `{ streak: 3 }` | Displays streak indicator |
| UT-SCORE-003 | `ScoreDisplay` | Shows high score | `{ highScore: 100 }` | Displays "Best: 100" |
| UT-SCORE-004 | `ScoreDisplay` | Zero values displayed | `{ score: 0, streak: 0 }` | Shows 0, not empty |
| UT-SCORE-005 | `ScoreDisplay` | Large numbers formatted | `{ score: 10000 }` | "10,000" or similar |

#### 2.3.4 Feedback Component

| Test ID | Component | Scenario | Props | Expected Behavior |
|---------|-----------|----------|-------|-------------------|
| UT-FEED-001 | `Feedback` | Correct answer feedback | `{ isCorrect: true }` | Green checkmark, "+10" message |
| UT-FEED-002 | `Feedback` | Wrong answer feedback | `{ isCorrect: false }` | Red X, "Try again!" message |
| UT-FEED-003 | `Feedback` | Shows correct answer on wrong | `{ isCorrect: false, correctAnswer: 7 }` | Displays "The answer was 7" |
| UT-FEED-004 | `Feedback` | Animation triggers | Any feedback | CSS animation plays |
| UT-FEED-005 | `Feedback` | Auto-dismisses | Shown for 2 seconds | Hides after timeout |
| UT-FEED-006 | `Feedback` | Encouraging wrong messages | Multiple wrong | Varied encouraging messages |

#### 2.3.5 Screen Components

| Test ID | Component | Scenario | Props/Action | Expected Behavior |
|---------|-----------|----------|--------------|-------------------|
| UT-START-001 | `StartScreen` | Renders welcome message | None | Shows "Let's Practice Math!" |
| UT-START-002 | `StartScreen` | Start button prominent | None | Large, centered button |
| UT-START-003 | `StartScreen` | Start button click | Click Start | Calls `onStart()` |
| UT-START-004 | `StartScreen` | Shows high score if exists | `{ highScore: 100 }` | Displays previous best |
| UT-RESULT-001 | `ResultScreen` | Shows final score | `{ score: 80 }` | Displays "You scored 80 points!" |
| UT-RESULT-002 | `ResultScreen` | Shows session stats | `{ correct: 8, wrong: 2 }` | Displays accuracy |
| UT-RESULT-003 | `ResultScreen` | Play again button | Click Play Again | Calls `onPlayAgain()` |
| UT-RESULT-004 | `ResultScreen` | New high score celebration | `{ isNewHighScore: true }` | Special celebration message |
| UT-GAME-001 | `GameScreen` | Renders problem + buttons | State with problem | All game elements visible |
| UT-GAME-002 | `GameScreen` | Score visible during game | `{ score: 30 }` | ScoreDisplay shows 30 |

---

## 3. Integration Test Cases

### 3.1 Firebase Authentication Integration

| Test ID | Scenario | Preconditions | Steps | Expected Result |
|---------|----------|---------------|-------|-----------------|
| IT-AUTH-001 | Anonymous sign-in on first visit | No auth state | Load app | Anonymous user created, userId assigned |
| IT-AUTH-002 | Auth state persisted | Previously signed in | Reload app | Same userId restored |
| IT-AUTH-003 | Auth while offline | Network disconnected | Load app | Uses cached auth state |
| IT-AUTH-004 | Auth service unavailable | Firebase Auth down | Load app | Falls back to local-only mode |
| IT-AUTH-005 | Auth token refresh | Expired token | Continue playing | Silent token refresh, no interruption |

### 3.2 Firestore Data Persistence

| Test ID | Scenario | Preconditions | Steps | Expected Result |
|---------|----------|---------------|-------|-----------------|
| IT-FIRE-001 | Save progress after game | Authenticated user | Complete game, end session | Data saved to Firestore |
| IT-FIRE-002 | Load saved progress | Existing user data | Load app | Previous highScore, stats loaded |
| IT-FIRE-003 | Save fails (network) | Network disconnected | Complete game | Queued for retry, no error shown |
| IT-FIRE-004 | Offline play then sync | Play offline | Reconnect | Progress synced to Firestore |
| IT-FIRE-005 | Data conflict resolution | Data on two devices | Sync | Latest data wins or merge |
| IT-FIRE-006 | Update highScore only when exceeded | New score < highScore | Complete game | highScore unchanged in Firestore |
| IT-FIRE-007 | Increment total counts | Complete game | End session | totalGamesPlayed++, totalCorrect += X |

### 3.3 Component + State Integration

| Test ID | Scenario | Preconditions | Steps | Expected Result |
|---------|----------|---------------|-------|-----------------|
| IT-COMP-001 | Start screen to game transition | App loaded | Click Start | GameScreen renders with problem |
| IT-COMP-002 | Game to result transition | Playing game | Click Finish | ResultScreen renders with stats |
| IT-COMP-003 | Result to start transition | Viewing results | Click Play Again | StartScreen renders |
| IT-COMP-004 | Score updates during gameplay | Playing game | Answer correctly | ScoreDisplay shows +10 immediately |
| IT-COMP-005 | Feedback triggers on answer | Playing game | Submit answer | Feedback component appears |
| IT-COMP-006 | New problem after answer | Playing game | Submit answer, wait | New problem displayed |

### 3.4 LocalStorage + Firestore Sync

| Test ID | Scenario | Preconditions | Steps | Expected Result |
|---------|----------|---------------|-------|-----------------|
| IT-SYNC-001 | LocalStorage as backup | Firestore fails | Play game | highScore saved to localStorage |
| IT-SYNC-002 | LocalStorage to Firestore | Was offline | Come online | localStorage data synced to Firestore |
| IT-SYNC-003 | Firestore to LocalStorage | Fresh device | Sign in | Firestore data copied to localStorage |
| IT-SYNC-004 | LocalStorage prioritized offline | Offline mode | Load app | Uses localStorage data |

---

## 4. E2E Test Cases (User Flows)

### 4.1 US-1: Start Math Practice (Core Flow)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US1-001 | Start game immediately | App loaded | 1. Locate Start button 2. Click it | Problem displayed within 500ms |
| E2E-US1-002 | Start button is prominent | App loaded | Visual inspection | Button is large, centered, visible |
| E2E-US1-003 | No loading screen | App loaded | Click Start | Direct transition, no spinner |

### 4.2 US-2: Answer Math Problems (Core Flow)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US2-001 | Addition problem displayed | Game started | Observe screen | Shows "X + Y = ?" format |
| E2E-US2-002 | Subtraction problem displayed | Game started, wait | Observe screen | Shows "X - Y = ?" format |
| E2E-US2-003 | Numbers 1-10 only | Play 50 problems | Check all numbers | All operands 1-10 |
| E2E-US2-004 | No negative results | Play 50 subtraction | Check all results | All results >= 0 |
| E2E-US2-005 | Submit correct answer | Problem: 3+4 | Enter 7, submit | Marked correct |
| E2E-US2-006 | Submit wrong answer | Problem: 5+2 | Enter 8, submit | Marked wrong |
| E2E-US2-007 | New problem after answer | Submit answer | Wait 2 seconds | New problem appears |

### 4.3 US-3: Get Instant Feedback (Engagement)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US3-001 | Correct feedback animation | Answer correctly | Submit correct | Green checkmark + animation |
| E2E-US3-002 | Points message on correct | Answer correctly | Submit correct | "+10 points" message |
| E2E-US3-003 | Wrong feedback gentle | Answer wrong | Submit wrong | Red X + "Try again!" |
| E2E-US3-004 | Shows correct answer | Answer wrong | Submit wrong | "The answer was X" shown |
| E2E-US3-005 | Feedback duration | Submit answer | Time the feedback | 1-2 seconds visible |
| E2E-US3-006 | Large readable text | View feedback | Visual inspection | Text easily readable |

### 4.4 US-4: Track My Progress (Motivation)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US4-001 | Score starts at 0 | Start game | Observe score | "Score: 0" |
| E2E-US4-002 | Score increases +10 | Answer correct | Check score | Score += 10 |
| E2E-US4-003 | Streak shows current | 3 correct in row | Check streak | Streak shows 3 |
| E2E-US4-004 | Streak resets on wrong | Streak of 5, then wrong | Check streak | Streak shows 0 |
| E2E-US4-005 | Score/streak always visible | During game | Look for displays | Both visible at all times |
| E2E-US4-006 | High score displayed | Previous play | Start screen | "Your best: X points!" |

### 4.5 US-5: Save My Progress (Persistence)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US5-001 | Anonymous auth works | First visit | Load app | Auto signed in (anonymous) |
| E2E-US5-002 | Progress saved to Firestore | Play game | End game, check Firebase | Data in Firestore |
| E2E-US5-003 | Data includes all fields | Complete game | Check Firestore | totalGamesPlayed, totalCorrect, etc. |
| E2E-US5-004 | Progress loads on return | Return next day | Load app | Previous stats shown |

### 4.6 US-6: Play on Any Device (Accessibility)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US6-001 | Works in browser | Desktop Chrome | Full gameplay | Complete game successfully |
| E2E-US6-002 | Mobile responsive | Phone viewport | Full gameplay | All elements visible/usable |
| E2E-US6-003 | Tablet responsive | Tablet viewport | Full gameplay | Good layout, large buttons |
| E2E-US6-004 | PWA installable | Mobile browser | Install prompt | App installs to home screen |
| E2E-US6-005 | Offline gameplay | Airplane mode | Play game | Works without network |

### 4.7 US-7: Enjoy Sonic Theme (Engagement)

| Test ID | User Story | Preconditions | Steps | Expected Result |
|---------|------------|---------------|-------|-----------------|
| E2E-US7-001 | Blue color present | App loaded | Visual check | Primary blue (#0066CC) used |
| E2E-US7-002 | Gold color present | App loaded | Visual check | Gold (#FFD700) accents |
| E2E-US7-003 | Animations are fast | Trigger animation | Visual check | Quick, energetic movement |
| E2E-US7-004 | Kid-friendly font | All screens | Visual check | Bold, rounded font |

### 4.8 Complete User Journey E2E

| Test ID | Journey | Steps | Expected Result |
|---------|---------|-------|-----------------|
| E2E-JOUR-001 | Happy path | Load -> Start -> Answer 5 correct -> Finish -> View results | All screens work, score = 50 |
| E2E-JOUR-002 | Mixed answers | Start -> 3 correct -> 2 wrong -> 2 correct -> Finish | Score = 50, streak shows correctly |
| E2E-JOUR-003 | Return user | Play game -> Close -> Reopen -> Check highScore | High score persisted |
| E2E-JOUR-004 | Offline journey | Start offline -> Play 10 problems -> Go online | Progress synced |
| E2E-JOUR-005 | Long session | Answer 50 problems | No degradation, all problems valid |

---

## 5. Manual Test Cases

### 5.1 Child-Friendliness Tests (CRITICAL)

**Tester:** 7-year-old child (primary user) with adult observer

| Test ID | Test Name | Preconditions | Steps | Expected Result | Pass/Fail |
|---------|-----------|---------------|-------|-----------------|-----------|
| MT-CHILD-001 | Independent Start | Child at start screen, no help | "Can you start playing?" | Child finds and clicks Start without help | |
| MT-CHILD-002 | Understand Problem | Problem displayed | "What do you think you need to do?" | Child understands to solve math | |
| MT-CHILD-003 | Answer Input | Problem displayed | "How do you enter your answer?" | Child successfully enters answer | |
| MT-CHILD-004 | Feedback Understanding | Correct answer given | "What happened?" | Child understands they got it right | |
| MT-CHILD-005 | Wrong Answer Recovery | Wrong answer given | "What do you do now?" | Child continues without frustration | |
| MT-CHILD-006 | Score Understanding | During gameplay | "What does that number mean?" | Child understands score concept | |
| MT-CHILD-007 | Finish Game | 10 problems done | "How do you finish?" | Child can find finish/end button | |
| MT-CHILD-008 | Play Again | Results screen | "Do you want to play more?" | Child can restart independently | |
| MT-CHILD-009 | Engagement Check | After 5 minutes | "Is this fun?" | Child says yes / wants to continue | |
| MT-CHILD-010 | Frustration Check | After wrong answers | Observe child | No frustration, anger, or wanting to quit | |
| MT-CHILD-011 | Reading Level | All text | "Can you read what it says?" | All text readable by 7-year-old | |
| MT-CHILD-012 | Touch Accuracy | Mobile device | Normal tapping | Buttons easy to press accurately | |

### 5.2 Visual Design Tests

| Test ID | Test Name | Preconditions | Steps | Expected Result | Pass/Fail |
|---------|-----------|---------------|-------|-----------------|-----------|
| MT-VIS-001 | Color Scheme | All screens | Visual inspection | Blue/gold Sonic colors dominant | |
| MT-VIS-002 | Font Readability | All screens | Read all text | Large, clear, kid-friendly font | |
| MT-VIS-003 | Animation Quality | Trigger feedback | Observe animations | Smooth, fast, engaging | |
| MT-VIS-004 | Button Visibility | All screens | Look for buttons | All buttons clearly visible/labeled | |
| MT-VIS-005 | No Visual Glitches | 10 min session | Continuous use | No flickering, overlap, or breaks | |
| MT-VIS-006 | Contrast Accessibility | All screens | Use contrast checker | >= 7:1 ratio (AAA) | |

### 5.3 Input Handling Tests

| Test ID | Test Name | Preconditions | Steps | Expected Result | Pass/Fail |
|---------|-----------|---------------|-------|-----------------|-----------|
| MT-INPUT-001 | Rapid Button Mashing | Game screen | Tap buttons rapidly | Only valid inputs processed | |
| MT-INPUT-002 | Empty Submit | No number entered | Click submit | Prevented or hint shown | |
| MT-INPUT-003 | Double Submit | After submitting | Click submit again | No duplicate processing | |
| MT-INPUT-004 | Touch While Animating | During feedback | Tap buttons | Inputs ignored or queued | |
| MT-INPUT-005 | Accidental Back | During game | Press back button | Confirm dialog or prevented | |

### 5.4 Error Recovery Tests

| Test ID | Test Name | Preconditions | Steps | Expected Result | Pass/Fail |
|---------|-----------|---------------|-------|-----------------|-----------|
| MT-ERR-001 | Network Loss Mid-Game | Playing online | Disconnect network | Game continues, warning shown | |
| MT-ERR-002 | Network Restored | Was offline | Reconnect | Syncs without interruption | |
| MT-ERR-003 | Browser Refresh | Mid-game | Press refresh | Recovers state or restarts gracefully | |
| MT-ERR-004 | App Backgrounded | Playing | Switch to another app | Resumes where left off | |
| MT-ERR-005 | Close and Reopen | Playing | Close browser, reopen | High score preserved | |

### 5.5 PWA Manual Tests

| Test ID | Test Name | Preconditions | Steps | Expected Result | Pass/Fail |
|---------|-----------|---------------|-------|-----------------|-----------|
| MT-PWA-001 | Install Prompt | Mobile browser | Visit app | "Add to Home Screen" prompt | |
| MT-PWA-002 | Home Screen Install | After prompt | Accept install | App icon on home screen | |
| MT-PWA-003 | Standalone Mode | From home screen | Tap app icon | Opens fullscreen, no browser UI | |
| MT-PWA-004 | Offline After Install | Airplane mode | Open installed app | App loads and works | |
| MT-PWA-005 | App Icon Correct | Home screen | Visual check | Correct icon displayed | |

---

## 6. Performance Test Cases

### 6.1 Load Time Benchmarks

| Test ID | Metric | Target | Tool | Test Procedure |
|---------|--------|--------|------|----------------|
| PT-LOAD-001 | Time to Interactive (TTI) | < 2 seconds | Lighthouse | Run Lighthouse audit on production URL |
| PT-LOAD-002 | First Contentful Paint (FCP) | < 1 second | Lighthouse | Run Lighthouse audit |
| PT-LOAD-003 | Largest Contentful Paint (LCP) | < 2.5 seconds | Lighthouse | Run Lighthouse audit |
| PT-LOAD-004 | Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse | Run Lighthouse audit |
| PT-LOAD-005 | Total Blocking Time (TBT) | < 200ms | Lighthouse | Run Lighthouse audit |
| PT-LOAD-006 | Lighthouse Performance Score | >= 90 | Lighthouse | Run Lighthouse audit |

### 6.2 Runtime Performance

| Test ID | Metric | Target | Test Procedure |
|---------|--------|--------|----------------|
| PT-RUN-001 | Answer input response | < 100ms | Time from button click to visual feedback |
| PT-RUN-002 | Problem generation | < 50ms | Time to generate and display new problem |
| PT-RUN-003 | Animation frame rate | >= 30 FPS | DevTools Performance monitor during animations |
| PT-RUN-004 | Memory usage | < 100MB | DevTools Memory tab during 10min session |
| PT-RUN-005 | No memory leaks | Stable | Memory after 50 problems same as after 5 |

### 6.3 Network Performance

| Test ID | Metric | Target | Test Procedure |
|---------|--------|--------|----------------|
| PT-NET-001 | Initial bundle size | < 200KB gzipped | Check network tab, main bundle |
| PT-NET-002 | Firebase read latency | < 500ms | Time to load user data on app start |
| PT-NET-003 | Firebase write latency | < 1 second | Time to save progress after game |
| PT-NET-004 | PWA cache hit rate | >= 95% | Check service worker cache performance |
| PT-NET-005 | Offline load time | < 1 second | Load app in airplane mode |

### 6.4 Stress Tests

| Test ID | Scenario | Test Procedure | Success Criteria |
|---------|----------|----------------|------------------|
| PT-STRESS-001 | Long session (100 problems) | Play 100 problems continuously | No degradation, all correct |
| PT-STRESS-002 | Rapid answers (30 in 1 min) | Answer as fast as possible | All recorded correctly |
| PT-STRESS-003 | Multiple sessions | Start/finish 10 games | No memory leaks, all saves work |
| PT-STRESS-004 | Low-end device | Test on old phone | Playable, <3s load time |

---

## 7. Security & Compliance Test Cases

### 7.1 Firebase Security Rules

| Test ID | Rule | Test Procedure | Expected Result |
|---------|------|----------------|-----------------|
| ST-RULE-001 | Read own data only | Try to read another user's document | Denied |
| ST-RULE-002 | Write own data only | Try to write to another user's document | Denied |
| ST-RULE-003 | Authenticated read | Read without auth | Denied |
| ST-RULE-004 | Authenticated write | Write without auth | Denied |
| ST-RULE-005 | Valid data schema | Write malformed data | Denied or sanitized |
| ST-RULE-006 | No admin access | Try to access admin paths | Denied |

### 7.2 API Key Security

| Test ID | Check | Test Procedure | Expected Result |
|---------|-------|----------------|-----------------|
| ST-KEY-001 | Keys not in source | Search codebase for API keys | None hardcoded |
| ST-KEY-002 | Keys in env vars | Check .env and build config | Keys from environment |
| ST-KEY-003 | .env not committed | Check git history | .env never in commits |
| ST-KEY-004 | API key restrictions | Check Firebase Console | Keys restricted to domain |
| ST-KEY-005 | Keys not in network requests | Inspect XHR requests | Keys not visible in headers |

### 7.3 COPPA Compliance

| Test ID | Requirement | Test Procedure | Expected Result |
|---------|-------------|----------------|-----------------|
| ST-COPPA-001 | No PII collection | Review all data collected | Only anonymous userId |
| ST-COPPA-002 | Anonymous auth only | Check auth flow | No email/name requested |
| ST-COPPA-003 | No tracking | Check for analytics | No third-party trackers |
| ST-COPPA-004 | Data deletion possible | Try to delete account | User can delete all data |
| ST-COPPA-005 | No external sharing | Review Firebase rules | Data not accessible externally |

### 7.4 WCAG Accessibility

| Test ID | Criterion | Test Procedure | Expected Result |
|---------|-----------|----------------|-----------------|
| ST-A11Y-001 | Color contrast (AAA) | Use contrast checker | >= 7:1 ratio |
| ST-A11Y-002 | Touch target size | Measure buttons | >= 44x44px (target 60px) |
| ST-A11Y-003 | Font size | Measure text | >= 18px base |
| ST-A11Y-004 | Keyboard navigation | Tab through app | All interactive elements reachable |
| ST-A11Y-005 | Focus indicators | Tab through app | Clear focus rings |
| ST-A11Y-006 | Screen reader | Test with VoiceOver/NVDA | Buttons and content announced |

---

## 8. Browser/Device Compatibility

### 8.1 Desktop Browsers

| Test ID | Browser | Version | Tests | Expected Result | Status |
|---------|---------|---------|-------|-----------------|--------|
| BC-DESK-001 | Chrome | Latest | Full E2E suite | All pass | |
| BC-DESK-002 | Chrome | Latest - 1 | Core gameplay | Works | |
| BC-DESK-003 | Safari | Latest | Full E2E suite | All pass | |
| BC-DESK-004 | Safari | 15+ | Core gameplay | Works | |
| BC-DESK-005 | Firefox | Latest | Full E2E suite | All pass | |
| BC-DESK-006 | Firefox | Latest - 1 | Core gameplay | Works | |
| BC-DESK-007 | Edge | Latest | Full E2E suite | All pass | |

### 8.2 Mobile Browsers

| Test ID | Browser | Platform | Tests | Expected Result | Status |
|---------|---------|----------|-------|-----------------|--------|
| BC-MOB-001 | Safari | iOS 15+ | Full E2E + PWA | All pass | |
| BC-MOB-002 | Safari | iOS 14 | Core gameplay | Works | |
| BC-MOB-003 | Chrome | Android 10+ | Full E2E + PWA | All pass | |
| BC-MOB-004 | Chrome | Android 9 | Core gameplay | Works | |
| BC-MOB-005 | Samsung Internet | Latest | Core gameplay | Works | |

### 8.3 PWA Modes

| Test ID | Mode | Platform | Tests | Expected Result | Status |
|---------|------|----------|-------|-----------------|--------|
| BC-PWA-001 | Installed | iOS | Standalone launch, offline | Works | |
| BC-PWA-002 | Installed | Android | Standalone launch, offline | Works | |
| BC-PWA-003 | Browser mode | iOS Safari | Full gameplay | Works | |
| BC-PWA-004 | Browser mode | Android Chrome | Full gameplay | Works | |

### 8.4 Screen Sizes

| Test ID | Device Type | Resolution | Tests | Expected Result | Status |
|---------|-------------|------------|-------|-----------------|--------|
| BC-SIZE-001 | Phone (small) | 320x568 | Layout, usability | All visible, usable | |
| BC-SIZE-002 | Phone (medium) | 375x667 | Layout, usability | Optimal experience | |
| BC-SIZE-003 | Phone (large) | 414x896 | Layout, usability | Optimal experience | |
| BC-SIZE-004 | Tablet | 768x1024 | Layout, usability | Good layout | |
| BC-SIZE-005 | Desktop | 1920x1080 | Layout, usability | Centered, appropriate size | |

---

## 9. Test Data Specifications

### 9.1 Math Problem Test Data Sets

**Addition Problems (Edge Cases):**
```javascript
const additionTestCases = [
  { operand1: 1, operand2: 1, expected: 2 },   // Minimum sum
  { operand1: 10, operand2: 10, expected: 20 }, // Maximum sum
  { operand1: 5, operand2: 5, expected: 10 },  // Middle boundary
  { operand1: 7, operand2: 3, expected: 10 },  // Exact 10
  { operand1: 1, operand2: 9, expected: 10 },  // Min + Max to 10
];
```

**Subtraction Problems (Edge Cases):**
```javascript
const subtractionTestCases = [
  { operand1: 10, operand2: 10, expected: 0 },  // Zero result
  { operand1: 10, operand2: 1, expected: 9 },   // Max difference
  { operand1: 5, operand2: 5, expected: 0 },    // Equal operands
  { operand1: 2, operand2: 1, expected: 1 },    // Minimum operands
  { operand1: 10, operand2: 5, expected: 5 },   // Middle values
];
```

### 9.2 User State Test Data

**Initial User State:**
```javascript
const initialUserState = {
  highScore: 0,
  totalGamesPlayed: 0,
  totalCorrect: 0,
  totalWrong: 0,
  bestStreak: 0,
  createdAt: null,
  updatedAt: null
};
```

**Returning User State (Sample):**
```javascript
const returningUserState = {
  highScore: 120,
  totalGamesPlayed: 15,
  totalCorrect: 87,
  totalWrong: 23,
  bestStreak: 12,
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-03T15:30:00Z"
};
```

### 9.3 Game Session Test Data

**Session Scenarios:**
```javascript
const sessionScenarios = {
  perfect: {
    answers: Array(10).fill({ correct: true }),
    expectedScore: 100,
    expectedStreak: 10
  },
  allWrong: {
    answers: Array(10).fill({ correct: false }),
    expectedScore: 0,
    expectedStreak: 0
  },
  mixed: {
    answers: [true, true, true, false, true, true, false, true, true, true],
    expectedScore: 80,
    expectedFinalStreak: 3
  },
  streakBreak: {
    answers: [true, true, true, true, true, false],
    expectedScore: 50,
    expectedFinalStreak: 0,
    expectedPeakStreak: 5
  }
};
```

### 9.4 Mock Data Generation

**Problem Generator Mock:**
```javascript
// For deterministic testing
function createMockProblemGenerator(sequence) {
  let index = 0;
  return () => sequence[index++ % sequence.length];
}
```

**Firebase Mock Data:**
```javascript
// For integration tests without real Firebase
const mockFirebaseUser = {
  uid: 'test-user-123',
  isAnonymous: true
};

const mockFirestoreData = {
  'users/test-user-123': {
    highScore: 100,
    totalGamesPlayed: 5,
    totalCorrect: 35,
    totalWrong: 15,
    bestStreak: 8
  }
};
```

---

## 10. Test Execution Checklist

### 10.1 Pre-Test Setup Checklist

- [ ] Test environment URLs configured
- [ ] Firebase Emulator installed and running
- [ ] Test dependencies installed (`npm install -D`)
- [ ] Vitest configuration verified (`npm test` runs)
- [ ] Playwright installed (`npx playwright install`)
- [ ] Mobile devices/emulators ready
- [ ] Test accounts created (if needed)
- [ ] Test data loaded to emulator

### 10.2 Unit Test Execution

- [ ] Run all unit tests: `npm test`
- [ ] Verify coverage >= 80% for utils/
- [ ] Verify coverage >= 70% for components/
- [ ] All tests pass (0 failures)
- [ ] No console warnings/errors

### 10.3 Integration Test Execution

- [ ] Start Firebase Emulator: `firebase emulators:start`
- [ ] Run integration tests: `npm run test:integration`
- [ ] Verify all Firebase interactions work
- [ ] Verify offline scenarios work
- [ ] All tests pass (0 failures)

### 10.4 E2E Test Execution

- [ ] Start dev server: `npm run dev`
- [ ] Run Playwright tests: `npm run test:e2e`
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] All acceptance criteria covered
- [ ] All tests pass (0 failures)

### 10.5 Manual Test Execution

- [ ] Child-friendliness tests with 7-year-old (MT-CHILD-*)
- [ ] Visual design review (MT-VIS-*)
- [ ] Input handling tests (MT-INPUT-*)
- [ ] Error recovery tests (MT-ERR-*)
- [ ] PWA installation tests (MT-PWA-*)
- [ ] Document all findings

### 10.6 Performance Test Execution

- [ ] Run Lighthouse audit
- [ ] Verify TTI < 2 seconds
- [ ] Verify bundle size < 200KB
- [ ] Runtime performance measurements
- [ ] Memory leak check (50 problems)

### 10.7 Security Test Execution

- [ ] Verify Firebase security rules
- [ ] Check API key security
- [ ] COPPA compliance verification
- [ ] Accessibility audit (contrast, touch targets)

### 10.8 Cross-Browser/Device Testing

- [ ] Desktop: Chrome, Safari, Firefox, Edge
- [ ] Mobile: iOS Safari, Android Chrome
- [ ] Various screen sizes
- [ ] PWA installation on iOS and Android

### 10.9 Bug Reporting Template

```markdown
## Bug Report

**ID:** BUG-XXX
**Date Found:** YYYY-MM-DD
**Tester:** [Name]
**Severity:** [Critical/High/Medium/Low]
**Priority:** [P0/P1/P2/P3]

### Summary
[One-line description]

### Environment
- Browser: [Name/Version]
- Device: [Model/OS]
- Screen Size: [WxH]
- Network: [Online/Offline]

### Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Expected Result
[What should happen]

### Actual Result
[What actually happened]

### Screenshots/Video
[Attach if applicable]

### Additional Notes
[Any other relevant information]
```

---

## 11. Success Criteria

### 11.1 Test Plan Completeness Criteria

| Criterion | Requirement | Status |
|-----------|-------------|--------|
| All user stories covered | 8/8 user stories have E2E tests | [ ] |
| All edge cases documented | 45+ edge cases identified | [ ] |
| Unit test cases defined | 50+ unit test cases | [ ] |
| Integration test cases defined | 15+ integration tests | [ ] |
| E2E test cases defined | 30+ E2E test cases | [ ] |
| Manual test cases defined | 25+ manual test cases | [ ] |
| Performance benchmarks set | All metrics have targets | [ ] |
| Security tests defined | Firebase rules + COPPA | [ ] |
| Browser matrix defined | Major browsers covered | [ ] |
| Test data specified | All data sets documented | [ ] |

### 11.2 Test Execution Success Criteria

| Metric | Target | Pass Criteria |
|--------|--------|---------------|
| Unit Test Pass Rate | 100% | All unit tests pass |
| Integration Test Pass Rate | 100% | All integration tests pass |
| E2E Test Pass Rate | 100% | All E2E tests pass |
| Manual Test Pass Rate | >= 95% | Max 1-2 minor issues |
| Math Accuracy | 100% | Zero math errors |
| Child-Friendliness | 100% | Child can use without help |
| Performance Score | >= 90 | Lighthouse >= 90 |
| Security Tests | 100% | All security tests pass |
| Cross-Browser | >= 95% | Works on all major browsers |

### 11.3 Quality Gates

**Gate 1: Unit Tests (Before Integration)**
- [ ] All unit tests pass
- [ ] Coverage >= 80% for game logic
- [ ] No critical bugs in math operations

**Gate 2: Integration Tests (Before E2E)**
- [ ] All integration tests pass
- [ ] Firebase operations work correctly
- [ ] Offline mode functions

**Gate 3: E2E Tests (Before Manual)**
- [ ] All E2E tests pass
- [ ] All user stories validated
- [ ] All acceptance criteria met

**Gate 4: Manual Tests (Before Release)**
- [ ] Child successfully uses app independently
- [ ] No frustrating UX issues
- [ ] Visual design approved
- [ ] PWA works correctly

**Gate 5: Performance & Security (Before Release)**
- [ ] Lighthouse score >= 90
- [ ] TTI < 2 seconds
- [ ] Security rules validated
- [ ] COPPA compliance confirmed

### 11.4 Release Readiness Checklist

- [ ] All quality gates passed
- [ ] Zero P0 bugs outstanding
- [ ] Zero P1 bugs outstanding
- [ ] P2 bugs documented for v2
- [ ] Test report generated
- [ ] Child validation completed successfully
- [ ] Parent (stakeholder) sign-off

---

## Appendix A: Test File Structure

```
math-trainer/
├── src/
│   ├── __tests__/
│   │   ├── utils/
│   │   │   └── mathProblems.test.js
│   │   ├── hooks/
│   │   │   ├── useGameState.test.js
│   │   │   └── useFirebase.test.js
│   │   ├── components/
│   │   │   ├── Problem.test.jsx
│   │   │   ├── AnswerButtons.test.jsx
│   │   │   ├── ScoreDisplay.test.jsx
│   │   │   ├── Feedback.test.jsx
│   │   │   ├── StartScreen.test.jsx
│   │   │   ├── GameScreen.test.jsx
│   │   │   └── ResultScreen.test.jsx
│   │   └── integration/
│   │       ├── firebase.integration.test.js
│   │       └── gameFlow.integration.test.js
├── e2e/
│   ├── userStories.spec.ts
│   ├── gameplay.spec.ts
│   ├── pwa.spec.ts
│   └── accessibility.spec.ts
├── vitest.config.js
├── playwright.config.js
└── firebase.json (emulators config)
```

---

## Appendix B: npm Scripts for Testing

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:integration": "vitest --config vitest.integration.config.js",
    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:debug": "playwright test --debug",
    "test:all": "npm run test && npm run test:e2e",
    "firebase:emulators": "firebase emulators:start"
  }
}
```

---

**Document Status:** COMPLETE - Ready for Test Execution
**Last Updated:** 2026-03-04
**Next Review:** After implementation begins

---

*Generated by QA Expert Agent | Math Trainer Project*
