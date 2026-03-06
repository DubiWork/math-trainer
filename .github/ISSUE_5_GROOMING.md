# Issue #5: Back to Start should save stats and reset score — Grooming Report

**Date:** 2026-03-06
**Participants:** Product Manager, Technical Lead, QA Expert
**Status:** ✅ READY

---

## Executive Summary

**Business Value:** Medium — Affects session management and score accuracy
**Technical Complexity:** Low — Single function change in App.jsx
**Priority:** P1-High (bug affecting live production app)
**Estimated Effort:** 1-2 hours

**Root Cause:** `handleExit()` in `App.jsx:73-76` only clears `sessionStats` and navigates to start screen. It does NOT:
1. Force-save pending progress to Firebase (debounced save may not fire before unmount)
2. Reset score/streak for the next session

---

## 1. Product Manager Analysis

### Business Value
**Medium** — The child (7 years old) currently sees inflated scores across sessions because "Back to Start" doesn't reset. This undermines the accuracy of progress tracking and confuses the score display.

### User Story

**Story 1: Session Reset on Exit**
- **As a** player (child)
- **I want** my score to reset when I go back to start
- **So that** each game session starts fresh with score = 0

**Acceptance Criteria:**
- [ ] Clicking "Back to Start" saves current stats to Firebase before navigating
- [ ] Score resets to 0 when starting a new game after "Back to Start"
- [ ] Streak resets to 0 when starting a new game after "Back to Start"
- [ ] Cumulative stats (totalProblems, correctAnswers, bestStreak) are preserved in Firebase
- [ ] "Play Again" behavior is unchanged (keeps score, continues session)

---

## 2. Technical Lead Analysis

### Root Cause

`App.jsx` line 73-76:
```javascript
const handleExit = useCallback(() => {
    setSessionStats(null)
    setScreen('start')
}, [])
```

Missing: `forceSave()` call and score reset.

### Fix

The `handleExit` function needs to:
1. Call `forceSave()` from `useGameProgress` to flush any pending debounced save
2. Navigate to start screen
3. The next `handleStartGame` already clears `sessionStats` — but `useGameState` preserves cumulative stats across sessions. The `GameScreen` component reinitializes `useGameState` on mount, picking up `initialProgress` from Firestore. The score displayed is cumulative, which is by design. The actual bug is that `handleExit` doesn't save — the score reset happens naturally when `GameScreen` remounts with fresh state.

**Wait — re-reading the issue more carefully:**

The issue says "Back to Start → Save current session stats to Firebase, reset score/streak, return to start screen." The `useGameState` hook initializes with `initialProgress?.score ?? 0` — so it picks up the cumulative score from Firestore on each mount. If the user plays 10 problems (score=100), clicks "Back to Start", then starts a new game, `GameScreen` remounts and `useGameState` initializes with `score: initialProgress.score` which is the saved cumulative score (100). So the score is NOT reset.

The fix needs `handleExit` to:
1. Force-save progress to Firebase
2. Signal that the next game should start with score=0, streak=0

**Approach:** `handleExit` should call `forceSave()` then the score issue is actually about how `useGameState` initializes. The simplest fix: don't pass `initialProgress` score/streak to `GameScreen` when starting a new game (or pass a flag to start fresh).

Actually, looking at `GameScreen` props: `<GameScreen onGameEnd={handleGameEnd} updateProgress={updateProgress} initialProgress={progress} />`. The `useGameState` hook initializes score from `initialProgress.score`. This is the cumulative score — working as designed for "Play Again" flow.

For "Back to Start" → new game, the issue is that cumulative score carries over. The fix is:
1. In `handleExit`: call `forceSave()`
2. The score displayed during gameplay comes from `useGameState.score` which is initialized from `initialProgress.score`
3. We need to ensure new game starts with score=0 regardless of saved progress

**Simplest fix:** In `startGame()` inside `useGameState`, reset score to 0 (it already resets streak to 0 on line 101). Add `score: 0` to the `startGame` state update.

### Sub-Tasks

| # | Sub-Task | Effort | Agent | Files |
|---|----------|--------|-------|-------|
| 1 | Fix handleExit to call forceSave | 15min | react-specialist | `src/App.jsx` |
| 2 | Fix startGame to reset score to 0 | 15min | react-specialist | `src/hooks/useGameState.js` |
| 3 | Add unit tests | 30min | react-specialist | `src/hooks/useGameState.test.js` |
| 4 | Manual smoke test | 15min | manual | — |

**Total:** ~1.5 hours

### Files Changed
- `src/App.jsx` — `handleExit` function
- `src/hooks/useGameState.js` — `startGame` function

---

## 3. QA Expert Analysis

### Test Cases

**Unit Tests:**
1. `startGame()` should reset score to 0
2. `startGame()` should reset streak to 0
3. `startGame()` should preserve bestStreak
4. `startGame()` should preserve totalProblems and correctAnswers

**Manual Test Checklist:**
- [ ] Play 5 problems → click Finish → click "Back to Start" → verify stats saved in Firebase
- [ ] After "Back to Start", click "Start Game" → verify score shows 0
- [ ] After "Back to Start", click "Start Game" → verify streak shows 0
- [ ] Play game → click "Play Again" → verify score carries over (unchanged behavior)
- [ ] Regression: play full game flow end-to-end, no errors

### Edge Cases
1. Click "Back to Start" immediately after answering (debounced save pending) → forceSave should flush
2. Click "Back to Start" when offline → save should queue for later sync
3. Rapid click "Back to Start" then "Start Game" → no race conditions

### Success Metrics
- Score resets to 0 after "Back to Start" → new game: 100%
- No data loss (cumulative stats preserved in Firebase): 100%
- "Play Again" behavior unchanged: 100%

---

## Rollback Plan

### Part 1 — Git Revert
- Expected commit message pattern: `#5 Fix Back to Start to save stats and reset score`
- Action: `git revert <commit-sha> --no-edit && git push origin main`

### Part 2 — Manual Cleanup
No manual cleanup required — git revert is sufficient. No Firestore schema changes, no config changes.

---

**Report Generated:** 2026-03-06T10:45:00Z
**Status:** ✅ Ready for Development
