# Adaptive Math Trainer — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the current infinite single-level math game into a full adaptive math trainer with 13 levels, confidence-based progression, multi-profile support, superhero themes, leaderboard, i18n (Hebrew/English), learning aids, and go-to-market readiness.

**Architecture:** The confidence engine lives in a new `useConfidence` hook that wraps `useGameState`. Multi-profile lives in `localStorage` (profile list + PIN hashes) with each profile mapped to its own Firebase anonymous Auth UID. Theme, language, and profile context flow down via React Context providers. All new features are additive — existing `useGameState`, `useGameProgress`, and `App.jsx` are modified, not replaced.

**Tech Stack:** React 18, Vite, Tailwind CSS, Firebase (Auth + Firestore + Storage), Vitest, react-i18next, SubtleCrypto (native browser API for PIN hashing)

**Design Doc:** `docs/plans/2026-03-07-adaptive-math-trainer-design.md`

---

## Phases Overview

| Phase | What Ships | Issues |
|-------|-----------|--------|
| 1 | Level config + problem generator for all 13 levels | #A |
| 2 | Confidence engine (the thermometer) | #B |
| 3 | Multi-profile system with PIN | #C |
| 4 | i18n — Hebrew + English, RTL support | #D |
| 5 | Superhero theme system (Sonic + Spiderman) | #E |
| 6 | Learning aids — Tier 1 visual + Tier 2 strategy hints | #F |
| 7 | Level progression UI — level map, level-up celebration | #G |
| 8 | Leaderboard + Hall of Fame | #H |
| 9 | Progress visualization (child + parent views) | #I |
| 10 | AI teaching videos — Tier 3 aid (Firebase Storage) | #J |
| 11 | SEO + PWA + Go-to-market prep | #K |

> **Start with Phase 1–3.** Each phase is independently shippable. Do not start a phase until the previous one's tests pass and it is committed.

---

## Phase 1 — Level Config + Problem Generator

### Task 1: Define level configuration data structure

**Files:**
- Create: `src/config/levels.js`
- Test: `src/config/levels.test.js`

**Context:** Currently `mathProblems.js` hardcodes `MIN_NUMBER=1, MAX_NUMBER=10, OPERATORS=['+','-']`. We need a config object per level that the problem generator reads from.

**Step 1: Write the failing tests**

```js
// src/config/levels.test.js
import { LEVELS, getLevelConfig } from './levels'

test('LEVELS has 13 entries', () => {
  expect(LEVELS).toHaveLength(13)
})

test('each level has required fields', () => {
  LEVELS.forEach((level, i) => {
    expect(level).toHaveProperty('id', i + 1)
    expect(level).toHaveProperty('name')
    expect(level).toHaveProperty('operators') // array e.g. ['+']
    expect(level).toHaveProperty('minNumber')
    expect(level).toHaveProperty('maxNumber')
    expect(level).toHaveProperty('ageTarget') // string e.g. '5-6'
  })
})

test('getLevelConfig returns correct level', () => {
  expect(getLevelConfig(1).operators).toEqual(['+'])
  expect(getLevelConfig(1).maxNumber).toBe(5)
  expect(getLevelConfig(4).operators).toEqual(['+', '-'])
  expect(getLevelConfig(13).operators).toEqual(['+', '-', '*', '/'])
})

test('getLevelConfig throws for invalid level', () => {
  expect(() => getLevelConfig(0)).toThrow()
  expect(() => getLevelConfig(14)).toThrow()
})
```

**Step 2: Run to verify they fail**
```bash
npx vitest run src/config/levels.test.js
```
Expected: FAIL — "Cannot find module './levels'"

**Step 3: Implement**

```js
// src/config/levels.js

export const LEVELS = [
  { id: 1,  name: 'First Steps',     operators: ['+'],           minNumber: 1, maxNumber: 5,   ageTarget: '5-6'  },
  { id: 2,  name: 'Addition Hero',   operators: ['+'],           minNumber: 1, maxNumber: 10,  ageTarget: '6'    },
  { id: 3,  name: 'Minus Magic',     operators: ['-'],           minNumber: 1, maxNumber: 10,  ageTarget: '6-7'  },
  { id: 4,  name: 'Mixed Warrior',   operators: ['+', '-'],      minNumber: 1, maxNumber: 10,  ageTarget: '7'    },
  { id: 5,  name: 'Cross the 10',    operators: ['+'],           minNumber: 1, maxNumber: 20,  ageTarget: '7'    },
  { id: 6,  name: 'Subtract 20',     operators: ['-'],           minNumber: 1, maxNumber: 20,  ageTarget: '7-8'  },
  { id: 7,  name: 'Mixed 20',        operators: ['+', '-'],      minNumber: 1, maxNumber: 20,  ageTarget: '8'    },
  { id: 8,  name: 'Tens Master',     operators: ['+', '-'],      minNumber: 10, maxNumber: 100, ageTarget: '8-9', multiplesOf: 10 },
  { id: 9,  name: 'Century Runner',  operators: ['+', '-'],      minNumber: 1, maxNumber: 100, ageTarget: '9'    },
  { id: 10, name: 'Speed of 2s',     operators: ['*'],           minNumber: 2, maxNumber: 10,  ageTarget: '9-10', multipliers: [2,5,10] },
  { id: 11, name: 'Times Tables',    operators: ['*'],           minNumber: 2, maxNumber: 10,  ageTarget: '10-11', multipliers: [3,4,6,7,8,9] },
  { id: 12, name: 'Division Quest',  operators: ['/'],           minNumber: 2, maxNumber: 10,  ageTarget: '11-12', divisors: [2,5,10] },
  { id: 13, name: 'Math Champion',   operators: ['+','-','*','/'], minNumber: 1, maxNumber: 100, ageTarget: '12-13' },
]

// NOTE: Level map is PROVISIONAL — update from real school workbooks before launch.
// See docs/plans/2026-03-07-adaptive-math-trainer-design.md Section 2.

export function getLevelConfig(levelId) {
  if (levelId < 1 || levelId > LEVELS.length) {
    throw new Error(`Invalid level: ${levelId}. Must be 1-${LEVELS.length}`)
  }
  return LEVELS[levelId - 1]
}

export default LEVELS
```

**Step 4: Run tests — verify pass**
```bash
npx vitest run src/config/levels.test.js
```
Expected: PASS 4/4

**Step 5: Commit**
```bash
git add src/config/levels.js src/config/levels.test.js
git commit -m "feat: add level configuration for all 13 levels"
```

---

### Task 2: Update problem generator to accept level config

**Files:**
- Modify: `src/utils/mathProblems.js`
- Modify: `src/utils/mathProblems.test.js` (create if not exists)

**Context:** `generateProblem()` currently uses hardcoded constants. Update it to accept a level config object. Keep backward compatibility — if no config passed, use level 2 defaults (current behavior: +/- 1–10).

**Step 1: Write failing tests**

```js
// Add to src/utils/mathProblems.test.js (create file if needed)
import { generateProblem, validateAnswer } from './mathProblems'
import { getLevelConfig } from '../config/levels'

test('generateProblem uses level config when provided', () => {
  const level1Config = getLevelConfig(1) // addition only, 1-5
  const problem = generateProblem(level1Config)
  expect(problem.operator).toBe('+')
  expect(problem.num1).toBeGreaterThanOrEqual(1)
  expect(problem.num1).toBeLessThanOrEqual(5)
  expect(problem.num2).toBeGreaterThanOrEqual(1)
  expect(problem.num2).toBeLessThanOrEqual(5)
})

test('generateProblem falls back to level 2 defaults when no config', () => {
  const problem = generateProblem()
  expect(['+', '-']).toContain(problem.operator)
  expect(problem.num1).toBeGreaterThanOrEqual(1)
  expect(problem.num1).toBeLessThanOrEqual(10)
})

test('generateProblem handles multiplication levels', () => {
  const level10Config = getLevelConfig(10) // ×2, ×5, ×10
  const problem = generateProblem(level10Config)
  expect(problem.operator).toBe('*')
  expect([2, 5, 10]).toContain(problem.num1)
})

test('generateProblem handles division levels', () => {
  const level12Config = getLevelConfig(12) // ÷2, ÷5, ÷10
  const problem = generateProblem(level12Config)
  expect(problem.operator).toBe('/')
  expect(problem.correctAnswer % 1).toBe(0) // always whole number
})

test('subtraction never produces negative answer', () => {
  const level3Config = getLevelConfig(3)
  for (let i = 0; i < 50; i++) {
    const problem = generateProblem(level3Config)
    expect(problem.correctAnswer).toBeGreaterThanOrEqual(0)
  }
})
```

**Step 2: Run to verify they fail**
```bash
npx vitest run src/utils/mathProblems.test.js
```

**Step 3: Update `generateProblem` to accept optional config**

In `src/utils/mathProblems.js`, replace the `CONFIG` constant and `generateProblem` function:

```js
import { getLevelConfig } from '../config/levels'

// Default config matches current behavior (level 2: +/- 1-10)
const DEFAULT_CONFIG = getLevelConfig(2)

export function generateProblem(levelConfig = DEFAULT_CONFIG) {
  const { operators, minNumber, maxNumber, multiplesOf, multipliers, divisors } = levelConfig

  // Pick random operator from this level's allowed operators
  const operator = operators[Math.floor(Math.random() * operators.length)]

  let num1, num2, correctAnswer

  if (operator === '+') {
    num1 = multiplesOf
      ? getRandomMultiple(minNumber, maxNumber, multiplesOf)
      : getRandomInt(minNumber, maxNumber)
    num2 = multiplesOf
      ? getRandomMultiple(minNumber, maxNumber, multiplesOf)
      : getRandomInt(minNumber, maxNumber)
    correctAnswer = num1 + num2

  } else if (operator === '-') {
    num1 = multiplesOf
      ? getRandomMultiple(minNumber, maxNumber, multiplesOf)
      : getRandomInt(minNumber, maxNumber)
    num2 = multiplesOf
      ? getRandomMultiple(minNumber, num1, multiplesOf)
      : getRandomInt(minNumber, num1) // ensures num2 <= num1
    correctAnswer = num1 - num2

  } else if (operator === '*') {
    const table = multipliers || [2, 3, 4, 5, 6, 7, 8, 9, 10]
    num1 = table[Math.floor(Math.random() * table.length)]
    num2 = getRandomInt(1, 10)
    correctAnswer = num1 * num2

  } else if (operator === '/') {
    const divs = divisors || [2, 3, 4, 5]
    num2 = divs[Math.floor(Math.random() * divs.length)] // divisor
    const quotient = getRandomInt(1, 10)
    num1 = num2 * quotient // dividend — always produces whole number
    correctAnswer = quotient
  }

  const wrongAnswers = generateWrongAnswers(correctAnswer, CONFIG.NUM_OPTIONS - 1)
  const options = shuffleArray([correctAnswer, ...wrongAnswers])

  return { num1, num2, operator, correctAnswer, options }
}

// Helper: random multiple of n between min and max
function getRandomMultiple(min, max, multiple) {
  const multiples = []
  for (let i = min; i <= max; i += multiple) {
    if (i >= min) multiples.push(i)
  }
  return multiples[Math.floor(Math.random() * multiples.length)]
}
```

> Note: Keep `getRandomInt`, `shuffleArray`, `generateWrongAnswers`, `validateAnswer`, `formatProblem`, `generateProblems` unchanged.

**Step 4: Run all tests**
```bash
npx vitest run src/utils/mathProblems.test.js src/config/levels.test.js
```
Expected: All PASS

**Step 5: Commit**
```bash
git add src/utils/mathProblems.js src/utils/mathProblems.test.js
git commit -m "feat: update problem generator to use level config"
```

---

## Phase 2 — Confidence Engine

### Task 3: Build `useConfidence` hook

**Files:**
- Create: `src/hooks/useConfidence.js`
- Create: `src/hooks/useConfidence.test.js`

**Context:** The confidence score is a per-level number (0–100, starts at 50). Every answer moves it. See design doc Section 3 for all scoring rules. This hook is pure logic — no Firebase, no UI. It will be called from `useGameState`.

**Step 1: Write failing tests**

```js
// src/hooks/useConfidence.test.js
import { renderHook, act } from '@testing-library/react'
import { useConfidence } from './useConfidence'

test('starts at 50 by default', () => {
  const { result } = renderHook(() => useConfidence())
  expect(result.current.score).toBe(50)
})

test('starts at provided initial score', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 75 }))
  expect(result.current.score).toBe(75)
})

test('correct answer increases score by 8', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 50 }))
  act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 5000 }))
  expect(result.current.score).toBe(58)
})

test('wrong answer decreases score by 12', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 50 }))
  act(() => result.current.recordAnswer({ correct: false, responseTimeMs: 5000 }))
  expect(result.current.score).toBe(38)
})

test('fast correct answer (<3s) adds 3 bonus', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 50 }))
  act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 2000 }))
  expect(result.current.score).toBe(61) // 8 + 3
})

test('slow wrong answer (>10s) only deducts 8', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 50 }))
  act(() => result.current.recordAnswer({ correct: false, responseTimeMs: 11000 }))
  expect(result.current.score).toBe(42) // -8 instead of -12
})

test('streak x2 applies 1.3 multiplier on correct', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 50 }))
  act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 5000 })) // streak 1
  act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 5000 })) // streak 2 → ×1.3
  // 50 + 8 = 58, then 58 + round(8 * 1.3) = 58 + 10 = 68
  expect(result.current.score).toBe(68)
})

test('wrong answer resets streak', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 50 }))
  act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 5000 }))
  act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 5000 }))
  act(() => result.current.recordAnswer({ correct: false, responseTimeMs: 5000 }))
  expect(result.current.streak).toBe(0)
})

test('score is clamped to 0-100', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 2 }))
  act(() => result.current.recordAnswer({ correct: false, responseTimeMs: 5000 }))
  expect(result.current.score).toBeGreaterThanOrEqual(0)
})

test('isStruggling true when score < 35', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 34 }))
  expect(result.current.isStruggling).toBe(true)
})

test('isCritical true when score < 20 for 5 consecutive wrong', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 25 }))
  for (let i = 0; i < 5; i++) {
    act(() => result.current.recordAnswer({ correct: false, responseTimeMs: 5000 }))
  }
  expect(result.current.isCritical).toBe(true)
})

test('shouldLevelUp true when score >= 85 for 3 consecutive correct', () => {
  const { result } = renderHook(() => useConfidence({ initialScore: 80 }))
  for (let i = 0; i < 3; i++) {
    act(() => result.current.recordAnswer({ correct: true, responseTimeMs: 5000 }))
  }
  expect(result.current.shouldLevelUp).toBe(true)
})
```

**Step 2: Run to verify they fail**
```bash
npx vitest run src/hooks/useConfidence.test.js
```

**Step 3: Implement**

```js
// src/hooks/useConfidence.js
import { useState, useCallback } from 'react'

const CORRECT_BASE = 8
const WRONG_BASE = -12
const WRONG_SLOW = -8       // >10s
const FAST_BONUS = 3        // <3s
const STREAK_2_MULT = 1.3
const STREAK_5_MULT = 1.6
const STRUGGLING_THRESHOLD = 35
const CRITICAL_THRESHOLD = 20
const LEVEL_UP_THRESHOLD = 85
const LEVEL_UP_CONSECUTIVE = 3
const CRITICAL_CONSECUTIVE = 5

export function useConfidence({ initialScore = 50 } = {}) {
  const [score, setScore] = useState(initialScore)
  const [streak, setStreak] = useState(0)
  const [consecutiveCorrectAbove85, setConsecutiveCorrectAbove85] = useState(0)
  const [consecutiveWrongBelow20, setConsecutiveWrongBelow20] = useState(0)

  const recordAnswer = useCallback(({ correct, responseTimeMs }) => {
    setScore(prev => {
      let delta

      if (correct) {
        delta = CORRECT_BASE
        if (responseTimeMs < 3000) delta += FAST_BONUS
      } else {
        delta = responseTimeMs > 10000 ? WRONG_SLOW : WRONG_BASE
      }

      // Apply streak multiplier on correct answers
      if (correct) {
        if (streak >= 5) delta = Math.round(delta * STREAK_5_MULT)
        else if (streak >= 2) delta = Math.round(delta * STREAK_2_MULT)
      }

      return Math.max(0, Math.min(100, prev + delta))
    })

    setStreak(prev => correct ? prev + 1 : 0)

    setConsecutiveCorrectAbove85(prev => {
      if (!correct) return 0
      return score >= LEVEL_UP_THRESHOLD ? prev + 1 : 0
    })

    setConsecutiveWrongBelow20(prev => {
      if (correct) return 0
      return score < CRITICAL_THRESHOLD ? prev + 1 : 0
    })
  }, [streak, score])

  const reset = useCallback((newScore = 50) => {
    setScore(newScore)
    setStreak(0)
    setConsecutiveCorrectAbove85(0)
    setConsecutiveWrongBelow20(0)
  }, [])

  return {
    score,
    streak,
    isStruggling: score < STRUGGLING_THRESHOLD,
    isCritical: score < CRITICAL_THRESHOLD && consecutiveWrongBelow20 >= CRITICAL_CONSECUTIVE,
    shouldLevelUp: score >= LEVEL_UP_THRESHOLD && consecutiveCorrectAbove85 >= LEVEL_UP_CONSECUTIVE,
    recordAnswer,
    reset,
  }
}

export default useConfidence
```

**Step 4: Run tests**
```bash
npx vitest run src/hooks/useConfidence.test.js
```
Expected: All PASS

**Step 5: Commit**
```bash
git add src/hooks/useConfidence.js src/hooks/useConfidence.test.js
git commit -m "feat: add confidence engine hook (the thermometer)"
```

---

### Task 4: Integrate confidence engine into `useGameState`

**Files:**
- Modify: `src/hooks/useGameState.js`
- Modify: `src/hooks/useGameState.test.js`

**Context:** `useGameState` calls `generateProblem()` without a level config. Update it to accept `currentLevel` (number, 1–13), pass level config to `generateProblem`, and call `useConfidence.recordAnswer` after each answer. Expose `confidenceScore`, `isStruggling`, `isCritical`, `shouldLevelUp` from the hook's return.

**Step 1: Add tests**

```js
// Add to src/hooks/useGameState.test.js
test('useGameState accepts currentLevel and generates level-appropriate problems', () => {
  // Level 1: addition only, 1-5
  // This is a smoke test — just ensure it doesn't crash with level config
  const { result } = renderHook(() =>
    useGameState({ updateProgress: vi.fn(), initialProgress: null, currentLevel: 1 })
  )
  act(() => result.current.startGame())
  expect(result.current.currentProblem).not.toBeNull()
  expect(result.current.currentProblem.operator).toBe('+')
})

test('exposes confidence values', () => {
  const { result } = renderHook(() =>
    useGameState({ updateProgress: vi.fn(), currentLevel: 2 })
  )
  act(() => result.current.startGame())
  expect(typeof result.current.confidenceScore).toBe('number')
  expect(typeof result.current.isStruggling).toBe('boolean')
  expect(typeof result.current.shouldLevelUp).toBe('boolean')
})
```

**Step 2: Run to verify they fail**
```bash
npx vitest run src/hooks/useGameState.test.js
```

**Step 3: Update `useGameState`**

At top of file, add imports:
```js
import { getLevelConfig } from '../config/levels'
import { useConfidence } from './useConfidence'
```

Update function signature:
```js
export function useGameState({ updateProgress, initialProgress, currentLevel = 2 } = {}) {
```

Add confidence hook inside the function body (after existing useState):
```js
const levelConfig = getLevelConfig(currentLevel)
const confidence = useConfidence({ initialScore: initialProgress?.confidenceScore ?? 50 })
```

In `startGame`, update `generateProblem()` call:
```js
const firstProblem = generateProblem(levelConfig)
```

In `nextProblem`, update `generateProblem()` call:
```js
const newProblem = generateProblem(levelConfig)
```

In `handleAnswer`, after the `updateProgress` call, add:
```js
confidence.recordAnswer({ correct: isCorrect, responseTimeMs: /* TODO: add timing */ 5000 })
```

In the return object, add:
```js
confidenceScore: confidence.score,
isStruggling: confidence.isStruggling,
isCritical: confidence.isCritical,
shouldLevelUp: confidence.shouldLevelUp,
```

**Step 4: Run all hook tests**
```bash
npx vitest run src/hooks/useGameState.test.js
```
Expected: All PASS (existing 7 + 2 new)

**Step 5: Commit**
```bash
git add src/hooks/useGameState.js src/hooks/useGameState.test.js
git commit -m "feat: integrate confidence engine into useGameState"
```

---

## Phase 3 — Multi-Profile System

### Task 5: Profile storage utilities

**Files:**
- Create: `src/utils/profiles.js`
- Create: `src/utils/profiles.test.js`

**Context:** Profiles live in `localStorage`. Each profile: `{ uid, nickname, pinHash, language, theme, currentLevel }`. PIN is hashed with `SubtleCrypto` (native browser API — no dependency needed). Profile list key: `'math-trainer-profiles'`.

**Step 1: Write failing tests**

```js
// src/utils/profiles.test.js
import { getProfiles, saveProfile, deleteProfile, verifyPin, hashPin } from './profiles'

// Mock localStorage
beforeEach(() => {
  localStorage.clear()
})

test('getProfiles returns empty array when none saved', () => {
  expect(getProfiles()).toEqual([])
})

test('saveProfile adds profile to list', () => {
  saveProfile({ uid: 'uid1', nickname: 'Tomer', pinHash: 'abc', language: 'he', theme: 'sonic', currentLevel: 1 })
  expect(getProfiles()).toHaveLength(1)
  expect(getProfiles()[0].nickname).toBe('Tomer')
})

test('saveProfile updates existing profile by uid', () => {
  saveProfile({ uid: 'uid1', nickname: 'Tomer', pinHash: 'abc', language: 'he', theme: 'sonic', currentLevel: 1 })
  saveProfile({ uid: 'uid1', nickname: 'Tomer', pinHash: 'abc', language: 'en', theme: 'sonic', currentLevel: 2 })
  expect(getProfiles()).toHaveLength(1)
  expect(getProfiles()[0].language).toBe('en')
})

test('deleteProfile removes profile by uid', () => {
  saveProfile({ uid: 'uid1', nickname: 'Tomer', pinHash: 'abc', language: 'he', theme: 'sonic', currentLevel: 1 })
  deleteProfile('uid1')
  expect(getProfiles()).toHaveLength(0)
})

test('hashPin returns consistent hex string', async () => {
  const hash1 = await hashPin('1234')
  const hash2 = await hashPin('1234')
  expect(hash1).toBe(hash2)
  expect(typeof hash1).toBe('string')
  expect(hash1.length).toBeGreaterThan(0)
})

test('verifyPin returns true for correct PIN', async () => {
  const hash = await hashPin('1234')
  expect(await verifyPin('1234', hash)).toBe(true)
})

test('verifyPin returns false for wrong PIN', async () => {
  const hash = await hashPin('1234')
  expect(await verifyPin('9999', hash)).toBe(false)
})
```

**Step 2: Run to verify they fail**
```bash
npx vitest run src/utils/profiles.test.js
```

**Step 3: Implement**

```js
// src/utils/profiles.js
const STORAGE_KEY = 'math-trainer-profiles'

export function getProfiles() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveProfile(profile) {
  const profiles = getProfiles()
  const idx = profiles.findIndex(p => p.uid === profile.uid)
  if (idx >= 0) {
    profiles[idx] = profile
  } else {
    profiles.push(profile)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles))
}

export function deleteProfile(uid) {
  const profiles = getProfiles().filter(p => p.uid !== uid)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles))
}

export async function hashPin(pin) {
  const encoder = new TextEncoder()
  const data = encoder.encode(pin + 'math-trainer-salt')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function verifyPin(pin, storedHash) {
  const hash = await hashPin(pin)
  return hash === storedHash
}
```

**Step 4: Run tests**
```bash
npx vitest run src/utils/profiles.test.js
```
Expected: All PASS

**Step 5: Commit**
```bash
git add src/utils/profiles.js src/utils/profiles.test.js
git commit -m "feat: add profile storage utilities with PIN hashing"
```

---

### Task 6: ProfileContext + ProfileSwitcher UI

**Files:**
- Create: `src/context/ProfileContext.jsx`
- Create: `src/components/ProfileSwitcher.jsx`
- Create: `src/components/PinEntry.jsx`
- Modify: `src/App.jsx`

**Context:** `ProfileContext` holds the active profile. `ProfileSwitcher` shows avatar cards for all profiles + "Add Hero" card. `PinEntry` is a 4-dot numpad. `App.jsx` shows `ProfileSwitcher` if no active profile, otherwise shows the existing start/game/result flow.

**Step 1: Create ProfileContext**

```jsx
// src/context/ProfileContext.jsx
import { createContext, useContext, useState } from 'react'

const ProfileContext = createContext(null)

export function ProfileProvider({ children }) {
  const [activeProfile, setActiveProfile] = useState(null)

  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
```

**Step 2: Create PinEntry component**

```jsx
// src/components/PinEntry.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'

export function PinEntry({ onSubmit, onCancel }) {
  const [digits, setDigits] = useState([])

  const handleDigit = (d) => {
    const next = [...digits, d]
    setDigits(next)
    if (next.length === 4) {
      onSubmit(next.join(''))
      setDigits([])
    }
  }

  const handleBackspace = () => setDigits(prev => prev.slice(0, -1))

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* 4 dots */}
      <div className="flex gap-4">
        {[0,1,2,3].map(i => (
          <div key={i} className={`w-5 h-5 rounded-full border-2 border-white ${i < digits.length ? 'bg-sonic-gold' : 'bg-transparent'}`} />
        ))}
      </div>
      {/* Numpad */}
      <div className="grid grid-cols-3 gap-3">
        {[1,2,3,4,5,6,7,8,9].map(d => (
          <button key={d} onClick={() => handleDigit(d)}
            className="w-16 h-16 rounded-full bg-white/20 text-white font-game text-2xl hover:bg-white/30 active:scale-95">
            {d}
          </button>
        ))}
        <button onClick={onCancel} className="w-16 h-16 rounded-full bg-white/10 text-white font-game text-sm hover:bg-white/20 active:scale-95">Back</button>
        <button onClick={() => handleDigit(0)} className="w-16 h-16 rounded-full bg-white/20 text-white font-game text-2xl hover:bg-white/30 active:scale-95">0</button>
        <button onClick={handleBackspace} className="w-16 h-16 rounded-full bg-white/10 text-white font-game text-xl hover:bg-white/20 active:scale-95">⌫</button>
      </div>
    </div>
  )
}

PinEntry.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
```

**Step 3: Create ProfileSwitcher component**

```jsx
// src/components/ProfileSwitcher.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'
import { getProfiles, saveProfile, verifyPin, hashPin } from '../utils/profiles'
import { PinEntry } from './PinEntry'

const THEME_AVATARS = {
  sonic: '🦔',
  spiderman: '🕷️',
}

export function ProfileSwitcher({ onProfileSelected, onCreateProfile }) {
  const profiles = getProfiles()
  const [pendingProfile, setPendingProfile] = useState(null)
  const [pinError, setPinError] = useState(false)

  const handleSelectProfile = (profile) => {
    setPendingProfile(profile)
    setPinError(false)
  }

  const handlePinSubmit = async (pin) => {
    const ok = await verifyPin(pin, pendingProfile.pinHash)
    if (ok) {
      setPendingProfile(null)
      onProfileSelected(pendingProfile)
    } else {
      setPinError(true)
      setTimeout(() => setPinError(false), 1000)
    }
  }

  if (pendingProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center">
        <p className="text-white font-game text-2xl mb-4">
          {THEME_AVATARS[pendingProfile.theme]} {pendingProfile.nickname}
        </p>
        <p className={`text-white font-game mb-4 ${pinError ? 'text-red-400 animate-shake' : 'opacity-70'}`}>
          {pinError ? 'Wrong PIN, try again!' : 'Enter your PIN'}
        </p>
        <PinEntry onSubmit={handlePinSubmit} onCancel={() => setPendingProfile(null)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-game text-white mb-8">Who's playing?</h1>
      <div className="flex flex-wrap gap-4 justify-center max-w-lg">
        {profiles.map(profile => (
          <button key={profile.uid} onClick={() => handleSelectProfile(profile)}
            className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 rounded-2xl p-6 w-32 transition-all hover:scale-105 active:scale-95">
            <span className="text-5xl">{THEME_AVATARS[profile.theme] || '🎮'}</span>
            <span className="text-white font-game text-sm truncate w-full text-center">{profile.nickname}</span>
            <span className="text-white/50 font-game text-xs">Level {profile.currentLevel}</span>
          </button>
        ))}
        <button onClick={onCreateProfile}
          className="flex flex-col items-center gap-2 bg-sonic-gold/20 hover:bg-sonic-gold/30 border-2 border-dashed border-sonic-gold/50 rounded-2xl p-6 w-32 transition-all hover:scale-105 active:scale-95">
          <span className="text-5xl">➕</span>
          <span className="text-sonic-gold font-game text-sm">Add Hero</span>
        </button>
      </div>
    </div>
  )
}

ProfileSwitcher.propTypes = {
  onProfileSelected: PropTypes.func.isRequired,
  onCreateProfile: PropTypes.func.isRequired,
}
```

**Step 4: Update `App.jsx` to show ProfileSwitcher when no active profile**

Wrap existing return with:
```jsx
import { ProfileProvider, useProfile } from './context/ProfileContext'
import { ProfileSwitcher } from './components/ProfileSwitcher'

// Inside App, before the loading check:
const { activeProfile, setActiveProfile } = useProfile()

if (!activeProfile) {
  return (
    <ProfileSwitcher
      onProfileSelected={setActiveProfile}
      onCreateProfile={() => { /* TODO: Phase 3b — create profile flow */ }}
    />
  )
}
```

Wrap `<App />` in `main.jsx` with `<ProfileProvider>`.

**Step 5: Manual smoke test**
- Run `npm run dev`
- Should see "Who's playing?" screen on first load
- Creating profiles wired in next task

**Step 6: Commit**
```bash
git add src/context/ProfileContext.jsx src/components/ProfileSwitcher.jsx src/components/PinEntry.jsx src/App.jsx src/main.jsx
git commit -m "feat: add multi-profile switcher with PIN entry"
```

---

### Task 7: Create profile flow

**Files:**
- Create: `src/components/CreateProfile.jsx`
- Modify: `src/App.jsx`

**Context:** Full "create new hero" flow: pick nickname → pick theme → set PIN → confirm PIN → create Firebase anonymous auth user → save to localStorage → activate profile.

**Step 1: Implement CreateProfile**

```jsx
// src/components/CreateProfile.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../firebase/config'
import { saveProfile, hashPin } from '../utils/profiles'
import { PinEntry } from './PinEntry'

const THEMES = [
  { id: 'sonic', label: 'Sonic', avatar: '🦔', colors: 'from-sonic-blue to-blue-900' },
  { id: 'spiderman', label: 'Spiderman', avatar: '🕷️', colors: 'from-red-600 to-blue-900' },
]

export function CreateProfile({ onComplete, onCancel }) {
  const [step, setStep] = useState('nickname') // nickname | theme | pin | confirm
  const [nickname, setNickname] = useState('')
  const [theme, setTheme] = useState(null)
  const [firstPin, setFirstPin] = useState(null)
  const [error, setError] = useState('')

  const handleNicknameSubmit = () => {
    if (nickname.trim().length < 1) { setError('Enter a name!'); return }
    if (nickname.trim().length > 12) { setError('Max 12 characters'); return }
    setError('')
    setStep('theme')
  }

  const handleThemeSelect = (t) => { setTheme(t); setStep('pin') }

  const handlePinFirst = (pin) => { setFirstPin(pin); setStep('confirm') }

  const handlePinConfirm = async (pin) => {
    if (pin !== firstPin) { setError('PINs do not match!'); setStep('pin'); return }
    try {
      const credential = await signInAnonymously(auth)
      const uid = credential.user.uid
      const pinHash = await hashPin(pin)
      saveProfile({ uid, nickname: nickname.trim(), pinHash, language: 'he', theme: theme.id, currentLevel: 1 })
      onComplete({ uid, nickname: nickname.trim(), pinHash, language: 'he', theme: theme.id, currentLevel: 1 })
    } catch (e) {
      setError('Could not create profile. Try again.')
    }
  }

  if (step === 'pin' || step === 'confirm') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center">
        <p className="text-white font-game text-2xl mb-2">
          {step === 'pin' ? 'Choose your secret PIN' : 'Enter PIN again to confirm'}
        </p>
        {error && <p className="text-red-400 font-game mb-4">{error}</p>}
        <PinEntry onSubmit={step === 'pin' ? handlePinFirst : handlePinConfirm} onCancel={onCancel} />
      </div>
    )
  }

  if (step === 'theme') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-game text-white mb-8">Pick your hero, {nickname}!</h2>
        <div className="flex gap-6">
          {THEMES.map(t => (
            <button key={t.id} onClick={() => handleThemeSelect(t)}
              className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-8 transition-all hover:scale-110 active:scale-95">
              <span className="text-6xl">{t.avatar}</span>
              <span className="text-white font-game text-xl">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // step === 'nickname'
  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-game text-white mb-8">What's your name, hero?</h2>
      {error && <p className="text-red-400 font-game mb-4">{error}</p>}
      <input
        type="text" value={nickname} onChange={e => setNickname(e.target.value)}
        maxLength={12} placeholder="Your hero name"
        className="bg-white/20 text-white font-game text-2xl text-center rounded-xl px-6 py-4 mb-6 w-64 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sonic-gold"
        onKeyDown={e => e.key === 'Enter' && handleNicknameSubmit()}
        autoFocus
      />
      <button onClick={handleNicknameSubmit}
        className="bg-sonic-gold text-blue-900 font-game text-xl px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all">
        Let's Go!
      </button>
      <button onClick={onCancel} className="mt-4 text-white/50 font-game text-sm hover:text-white">Cancel</button>
    </div>
  )
}

CreateProfile.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
```

**Step 2: Wire into App.jsx**
```jsx
const [creatingProfile, setCreatingProfile] = useState(false)

// In render, before existing screens:
if (!activeProfile && !creatingProfile) {
  return <ProfileSwitcher onProfileSelected={setActiveProfile} onCreateProfile={() => setCreatingProfile(true)} />
}

if (creatingProfile) {
  return <CreateProfile onComplete={(profile) => { setCreatingProfile(false); setActiveProfile(profile) }} onCancel={() => setCreatingProfile(false)} />
}
```

**Step 3: Manual smoke test**
- Full profile creation flow: nickname → theme → PIN → confirm
- Profile card appears on switcher
- PIN entry unlocks the profile

**Step 4: Commit**
```bash
git add src/components/CreateProfile.jsx src/App.jsx
git commit -m "feat: add create profile flow with theme selection"
```

---

## Phase 4 — i18n (Hebrew + English)

### Task 8: Set up react-i18next

**Files:**
- Run: `npm install react-i18next i18next`
- Create: `src/i18n/index.js`
- Create: `src/i18n/locales/he.json`
- Create: `src/i18n/locales/en.json`
- Create: `src/context/LanguageContext.jsx`
- Modify: `src/main.jsx`

**Step 1: Install**
```bash
npm install react-i18next i18next
```

**Step 2: Create i18n config**
```js
// src/i18n/index.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import he from './locales/he.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: { he: { translation: he }, en: { translation: en } },
  lng: 'he',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
```

**Step 3: Create translation files**

```json
// src/i18n/locales/he.json
{
  "app": {
    "title": "מאמן המתמטיקה של סוניק!",
    "loading": "טוען...",
    "whosPlaying": "מי משחק?",
    "addHero": "הוסף גיבור",
    "startGame": "התחל משחק!",
    "exit": "יציאה",
    "correct": "נכון! 🎉",
    "wrong": "לא נכון 😅",
    "levelUp": "עלית רמה! 🚀",
    "yourBest": "הכי טוב שלך:",
    "points": "נקודות",
    "streak": "רצף",
    "level": "רמה",
    "yourName": "מה שמך, גיבור?",
    "pickHero": "בחר את הגיבור שלך",
    "choosePin": "בחר קוד סודי",
    "confirmPin": "הזן את הקוד שוב",
    "wrongPin": "קוד שגוי, נסה שוב!",
    "letsGo": "יאללה!"
  }
}
```

```json
// src/i18n/locales/en.json
{
  "app": {
    "title": "Sonic Math Trainer!",
    "loading": "Loading...",
    "whosPlaying": "Who's playing?",
    "addHero": "Add Hero",
    "startGame": "Start Game!",
    "exit": "Exit",
    "correct": "Correct! 🎉",
    "wrong": "Not quite 😅",
    "levelUp": "Level Up! 🚀",
    "yourBest": "Your Best:",
    "points": "points",
    "streak": "streak",
    "level": "Level",
    "yourName": "What's your name, hero?",
    "pickHero": "Pick your hero",
    "choosePin": "Choose your secret PIN",
    "confirmPin": "Enter PIN again to confirm",
    "wrongPin": "Wrong PIN, try again!",
    "letsGo": "Let's Go!"
  }
}
```

**Step 4: Create LanguageContext**
```jsx
// src/context/LanguageContext.jsx
import { createContext, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext(null)

export function LanguageProvider({ language = 'he', children }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language, i18n])

  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
```

**Step 5: Update main.jsx**
```jsx
import './i18n/index.js'
// Wrap App in LanguageProvider — language comes from activeProfile.language
```

**Step 6: Replace hardcoded strings in components**

In each component, import `useTranslation` and replace hardcoded strings:
```jsx
import { useTranslation } from 'react-i18next'
const { t } = useTranslation()
// Replace: "Start Game!" → {t('app.startGame')}
// Replace: "Loading..." → {t('app.loading')}
// etc.
```

**Step 7: Test RTL layout manually**
- Switch language to Hebrew in a profile
- Verify layout flips: text right-aligned, number line reversed

**Step 8: Commit**
```bash
git add src/i18n/ src/context/LanguageContext.jsx src/main.jsx src/components/
git commit -m "feat: add i18n support for Hebrew and English with RTL layout"
```

---

## Phase 5 — Theme System

### Task 9: ThemeProvider and theme config

**Files:**
- Create: `src/config/themes.js`
- Create: `src/context/ThemeContext.jsx`
- Modify: Tailwind config + CSS for theme variables

**Step 1: Create theme config**

```js
// src/config/themes.js
export const THEMES = {
  sonic: {
    id: 'sonic',
    name: 'Sonic',
    avatar: '🦔',
    colors: {
      primary: '#0066CC',      // sonic blue
      secondary: '#FFD700',    // sonic gold
      background: 'from-blue-600 to-blue-900',
      button: 'from-yellow-400 to-yellow-500',
      buttonText: '#1e3a5f',
    },
    voiceLines: {
      correct: '/audio/sonic/correct.mp3',
      wrong: '/audio/sonic/wrong.mp3',
      streak: '/audio/sonic/streak.mp3',
      levelUp: '/audio/sonic/levelup.mp3',
      encourage: '/audio/sonic/encourage.mp3',
    },
  },
  spiderman: {
    id: 'spiderman',
    name: 'Spiderman',
    avatar: '🕷️',
    colors: {
      primary: '#CC0000',
      secondary: '#0000CC',
      background: 'from-red-700 to-blue-900',
      button: 'from-red-500 to-red-600',
      buttonText: '#ffffff',
    },
    voiceLines: {
      correct: '/audio/spiderman/correct.mp3',
      wrong: '/audio/spiderman/wrong.mp3',
      streak: '/audio/spiderman/streak.mp3',
      levelUp: '/audio/spiderman/levelup.mp3',
      encourage: '/audio/spiderman/encourage.mp3',
    },
  },
}

export function getTheme(themeId) {
  return THEMES[themeId] || THEMES.sonic
}
```

**Step 2: Create ThemeContext**

```jsx
// src/context/ThemeContext.jsx
import { createContext, useContext } from 'react'
import { getTheme } from '../config/themes'

const ThemeContext = createContext(null)

export function ThemeProvider({ themeId = 'sonic', children }) {
  const theme = getTheme(themeId)
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
```

**Step 3: Update App.jsx to wrap in ThemeProvider and LanguageProvider**

```jsx
<ThemeProvider themeId={activeProfile?.theme}>
  <LanguageProvider language={activeProfile?.language}>
    {/* existing screens */}
  </LanguageProvider>
</ThemeProvider>
```

**Step 4: Update components to use theme colors**

Replace hardcoded Tailwind color classes with theme values:
```jsx
const theme = useTheme()
// Replace: className="bg-gradient-to-b from-sonic-blue to-blue-900"
// With:    className={`bg-gradient-to-b ${theme.colors.background}`}
```

**Step 5: Add audio playback utility**

```js
// src/utils/audio.js
const audioCache = {}

export function playVoiceLine(url) {
  if (!url) return
  if (!audioCache[url]) {
    audioCache[url] = new Audio(url)
  }
  audioCache[url].currentTime = 0
  audioCache[url].play().catch(() => {}) // ignore autoplay block
}
```

**Step 6: Wire voice lines to game events**

In `Feedback.jsx`, after render:
```js
import { playVoiceLine } from '../utils/audio'
import { useTheme } from '../context/ThemeContext'
const theme = useTheme()
useEffect(() => {
  playVoiceLine(isCorrect ? theme.voiceLines.correct : theme.voiceLines.wrong)
}, [])
```

**Step 7: Commit**
```bash
git add src/config/themes.js src/context/ThemeContext.jsx src/utils/audio.js src/components/
git commit -m "feat: add superhero theme system with voice line support"
```

> **Note:** Actual audio files (`/audio/sonic/*.mp3`, `/audio/spiderman/*.mp3`) must be sourced/recorded separately and placed in `public/audio/`. The code handles missing files gracefully (catches failed play).

---

## Phase 6 — Learning Aids

### Task 10: Tier 1 — Visual aids (levels 1–7)

**Files:**
- Create: `src/components/LearningAid.jsx`
- Create: `src/components/aids/DotCounter.jsx`
- Create: `src/components/aids/NumberLine.jsx`
- Modify: `src/components/GameScreen.jsx`

**Context:** When `isStruggling` is true from `useGameState`, show an inline aid below the problem. For levels 1–4: dot counter. For levels 5–7: number line.

**Step 1: Create DotCounter**

```jsx
// src/components/aids/DotCounter.jsx
import PropTypes from 'prop-types'

export function DotCounter({ num1, num2, operator }) {
  const dots1 = Array.from({ length: Math.min(num1, 20) })
  const dots2 = Array.from({ length: Math.min(num2, 20) })

  return (
    <div className="bg-white/10 rounded-xl p-4 text-center">
      <div className="flex justify-center gap-1 flex-wrap mb-2">
        {dots1.map((_, i) => (
          <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>🔵</span>
        ))}
      </div>
      <p className="text-white font-game text-lg">{operator}</p>
      <div className="flex justify-center gap-1 flex-wrap mt-2">
        {dots2.map((_, i) => (
          <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${(dots1.length + i) * 100}ms` }}>🔴</span>
        ))}
      </div>
    </div>
  )
}
DotCounter.propTypes = { num1: PropTypes.number, num2: PropTypes.number, operator: PropTypes.string }
```

**Step 2: Create NumberLine**

```jsx
// src/components/aids/NumberLine.jsx
import PropTypes from 'prop-types'

export function NumberLine({ num1, num2, operator, answer }) {
  const max = Math.max(num1, answer, 20)
  const ticks = Array.from({ length: max + 1 }, (_, i) => i)

  return (
    <div className="bg-white/10 rounded-xl p-4 overflow-x-auto">
      <div className="flex items-center gap-0 min-w-max mx-auto">
        {ticks.map(n => (
          <div key={n} className="flex flex-col items-center w-8">
            <div className={`w-1 h-4 ${n === num1 ? 'bg-sonic-gold' : n === answer ? 'bg-green-400' : 'bg-white/40'}`} />
            <span className={`text-xs font-game ${n === num1 ? 'text-sonic-gold' : n === answer ? 'text-green-400' : 'text-white/60'}`}>{n}</span>
          </div>
        ))}
      </div>
      <p className="text-white/70 font-game text-sm text-center mt-2">
        Start at {num1}, jump {operator === '+' ? 'forward' : 'back'} {num2}
      </p>
    </div>
  )
}
NumberLine.propTypes = { num1: PropTypes.number, num2: PropTypes.number, operator: PropTypes.string, answer: PropTypes.number }
```

**Step 3: Create LearningAid orchestrator**

```jsx
// src/components/LearningAid.jsx
import PropTypes from 'prop-types'
import { DotCounter } from './aids/DotCounter'
import { NumberLine } from './aids/NumberLine'

export function LearningAid({ problem, currentLevel, tier, onDismiss }) {
  if (!problem || tier === 0) return null

  const showDotCounter = tier >= 1 && currentLevel <= 4
  const showNumberLine = tier >= 1 && currentLevel >= 5 && currentLevel <= 7

  return (
    <div className="mt-4 relative">
      <button onClick={onDismiss}
        className="absolute top-2 right-2 text-white/50 hover:text-white text-sm font-game">
        I got it! ✓
      </button>
      {showDotCounter && <DotCounter num1={problem.num1} num2={problem.num2} operator={problem.operator} />}
      {showNumberLine && <NumberLine num1={problem.num1} num2={problem.num2} operator={problem.operator} answer={problem.correctAnswer} />}
    </div>
  )
}
LearningAid.propTypes = {
  problem: PropTypes.object,
  currentLevel: PropTypes.number,
  tier: PropTypes.number, // 0=none, 1=visual, 2=hint, 3=video
  onDismiss: PropTypes.func,
}
```

**Step 4: Wire into GameScreen**

```jsx
// In GameScreen.jsx, derive tier from confidenceScore:
const { isStruggling, isCritical, confidenceScore } = useGameState(...)
const [aidDismissed, setAidDismissed] = useState(false)

// Reset dismissed on new problem
useEffect(() => setAidDismissed(false), [currentProblem])

const aidTier = (!aidDismissed && isCritical) ? 3
  : (!aidDismissed && isStruggling && currentLevel >= 5) ? 2
  : (!aidDismissed && isStruggling) ? 1
  : 0

// In JSX, below AnswerButtons:
<LearningAid problem={currentProblem} currentLevel={currentLevel} tier={Math.min(aidTier, 2)} onDismiss={() => setAidDismissed(true)} />
```

**Step 5: Commit**
```bash
git add src/components/LearningAid.jsx src/components/aids/ src/components/GameScreen.jsx
git commit -m "feat: add Tier 1 & 2 learning aids (dot counter, number line)"
```

---

### Task 11: Tier 2 — Strategy hints (levels 5+)

**Files:**
- Create: `src/components/aids/StrategyHint.jsx`
- Create: `src/utils/strategies.js`

**Step 1: Create strategy calculator**

```js
// src/utils/strategies.js

export function getStrategies(num1, num2, operator) {
  const strategies = []

  if (operator === '+') {
    // Bridging through 10
    if (num1 + num2 > 10 && num1 < 10) {
      const toTen = 10 - num1
      const remainder = num2 - toTen
      strategies.push({
        name: 'Bridge through 10',
        steps: [`${num1} + ${toTen} = 10`, `10 + ${remainder} = ${num1 + num2}`],
      })
    }
    // Doubles
    if (num1 === num2) {
      strategies.push({ name: 'Doubles!', steps: [`${num1} + ${num1} = double ${num1} = ${num1 * 2}`] })
    }
    // Near doubles
    if (Math.abs(num1 - num2) === 1) {
      const smaller = Math.min(num1, num2)
      strategies.push({ name: 'Near doubles', steps: [`${smaller} + ${smaller} = ${smaller * 2}`, `${smaller * 2} + 1 = ${num1 + num2}`] })
    }
    // Count on
    strategies.push({ name: 'Count on', steps: [`Start at ${num1}`, `Count up ${num2}: ${Array.from({length: num2}, (_,i) => num1+i+1).join(', ')}`] })
  }

  if (operator === '-') {
    // Count back
    strategies.push({ name: 'Count back', steps: [`Start at ${num1}`, `Count back ${num2}: ${Array.from({length: num2}, (_,i) => num1-i-1).join(', ')}`] })
    // Bridge back through 10
    if (num1 > 10 && num1 - num2 < 10) {
      const toTen = num1 - 10
      strategies.push({ name: 'Bridge back through 10', steps: [`${num1} - ${toTen} = 10`, `10 - ${num2 - toTen} = ${num1 - num2}`] })
    }
  }

  return strategies
}
```

**Step 2: Create StrategyHint component**

```jsx
// src/components/aids/StrategyHint.jsx
import { useState } from 'react'
import PropTypes from 'prop-types'
import { getStrategies } from '../../utils/strategies'

export function StrategyHint({ problem }) {
  const strategies = getStrategies(problem.num1, problem.num2, problem.operator)
  const [index, setIndex] = useState(0)

  if (!strategies.length) return null
  const current = strategies[index]

  return (
    <div className="bg-white/10 rounded-xl p-4">
      <p className="text-sonic-gold font-game text-sm mb-2">{current.name}</p>
      {current.steps.map((step, i) => (
        <p key={i} className="text-white font-game text-base">→ {step}</p>
      ))}
      {strategies.length > 1 && (
        <button onClick={() => setIndex((index + 1) % strategies.length)}
          className="mt-3 text-white/60 font-game text-sm hover:text-white">
          Show me another way →
        </button>
      )}
    </div>
  )
}
StrategyHint.propTypes = { problem: PropTypes.object.isRequired }
```

**Step 3: Wire StrategyHint into LearningAid for tier 2**

```jsx
// In LearningAid.jsx, add:
import { StrategyHint } from './aids/StrategyHint'
// After showNumberLine section:
{tier >= 2 && currentLevel >= 5 && <StrategyHint problem={problem} />}
```

**Step 4: Commit**
```bash
git add src/components/aids/StrategyHint.jsx src/utils/strategies.js src/components/LearningAid.jsx
git commit -m "feat: add Tier 2 strategy hints with multiple strategies"
```

---

## Phase 7 — Level Progression UI

### Task 12: Level-up celebration screen

**Files:**
- Create: `src/components/LevelUpScreen.jsx`
- Modify: `src/components/GameScreen.jsx`
- Modify: `src/App.jsx`

**Context:** When `shouldLevelUp` is true, show a full-screen celebration. The child's superhero character celebrates, plays the level-up voice line, and shows a "Continue to Level N!" button.

**Step 1: Create LevelUpScreen**

```jsx
// src/components/LevelUpScreen.jsx
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { playVoiceLine } from '../utils/audio'
import { getLevelConfig } from '../config/levels'

export function LevelUpScreen({ completedLevel, nextLevel, onContinue }) {
  const theme = useTheme()
  const nextLevelConfig = getLevelConfig(nextLevel)

  useEffect(() => {
    playVoiceLine(theme.voiceLines.levelUp)
  }, [theme])

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.colors.background} flex flex-col items-center justify-center p-6 text-center`}>
      <div className="animate-bounce text-8xl mb-6">{theme.avatar}</div>
      <h1 className="text-4xl font-game text-sonic-gold mb-4 animate-pulse">
        Level Up! 🚀
      </h1>
      <p className="text-2xl font-game text-white mb-2">
        You mastered Level {completedLevel}!
      </p>
      <p className="text-xl font-game text-white/70 mb-8">
        Next: Level {nextLevel} — {nextLevelConfig.name}
      </p>
      <button onClick={onContinue}
        className={`bg-gradient-to-r ${theme.colors.button} text-${theme.colors.buttonText} font-game text-2xl px-12 py-6 rounded-2xl shadow-lg hover:scale-110 active:scale-95 transition-all`}>
        Let's Go! →
      </button>
    </div>
  )
}

LevelUpScreen.propTypes = {
  completedLevel: PropTypes.number.isRequired,
  nextLevel: PropTypes.number.isRequired,
  onContinue: PropTypes.func.isRequired,
}
```

**Step 2: Wire level-up detection in GameScreen**

```jsx
// In GameScreen.jsx, detect shouldLevelUp and call onLevelUp:
useEffect(() => {
  if (shouldLevelUp) {
    onLevelUp?.()
  }
}, [shouldLevelUp])
```

**Step 3: Handle in App.jsx**

```jsx
const [showLevelUp, setShowLevelUp] = useState(false)

// Pass onLevelUp to GameScreen:
<GameScreen onLevelUp={() => setShowLevelUp(true)} ... />

// Add LevelUpScreen to render:
{showLevelUp && (
  <LevelUpScreen
    completedLevel={activeProfile.currentLevel}
    nextLevel={activeProfile.currentLevel + 1}
    onContinue={() => {
      // Update profile level in localStorage
      const updated = { ...activeProfile, currentLevel: activeProfile.currentLevel + 1 }
      saveProfile(updated)
      setActiveProfile(updated)
      setShowLevelUp(false)
      setScreen('game')
    }}
  />
)}
```

**Step 4: Commit**
```bash
git add src/components/LevelUpScreen.jsx src/components/GameScreen.jsx src/App.jsx
git commit -m "feat: add level-up celebration screen with theme voice line"
```

---

### Task 13: Level map progress visualization

**Files:**
- Create: `src/components/LevelMap.jsx`
- Modify: `src/components/StartScreen.jsx`

**Step 1: Create LevelMap**

```jsx
// src/components/LevelMap.jsx
import PropTypes from 'prop-types'
import { LEVELS } from '../config/levels'

const STATUS_STYLES = {
  completed: 'bg-green-500 text-white',
  current:   'bg-sonic-gold text-blue-900 animate-pulse scale-110',
  locked:    'bg-white/20 text-white/40',
}

export function LevelMap({ currentLevel, completedLevels = [] }) {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex gap-2 min-w-max px-4">
        {LEVELS.map(level => {
          const isCompleted = completedLevels.includes(level.id)
          const isCurrent = level.id === currentLevel
          const isLocked = !isCompleted && !isCurrent
          const status = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'

          return (
            <div key={level.id} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-game text-lg transition-all ${STATUS_STYLES[status]}`}>
                {isCompleted ? '⭐' : level.id}
              </div>
              <span className="text-white/60 font-game text-xs w-16 text-center truncate">
                {level.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

LevelMap.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  completedLevels: PropTypes.arrayOf(PropTypes.number),
}
```

**Step 2: Add LevelMap to StartScreen**

```jsx
// In StartScreen.jsx, replace or supplement progress display:
import { LevelMap } from './LevelMap'
// Inside the component, below the title:
<LevelMap currentLevel={progress?.currentLevel || 1} completedLevels={progress?.completedLevels || []} />
```

**Step 3: Commit**
```bash
git add src/components/LevelMap.jsx src/components/StartScreen.jsx
git commit -m "feat: add level map progress visualization on start screen"
```

---

## Phase 8 — Leaderboard

### Task 14: Firestore leaderboard queries + UI

**Files:**
- Create: `src/firebase/leaderboard.js`
- Create: `src/components/Leaderboard.jsx`
- Modify: `src/components/StartScreen.jsx`

**Step 1: Firestore leaderboard functions**

```js
// src/firebase/leaderboard.js
import { collection, query, orderBy, limit, getDocs, setDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from './config'

// Update player's leaderboard entry for a level
export async function updateLeaderboardEntry({ uid, nickname, theme, levelId, confidenceScore, bestStreak }) {
  const ref = doc(db, `leaderboard/level_${levelId}/entries/${uid}`)
  await setDoc(ref, { uid, nickname, theme, levelId, confidenceScore, bestStreak, updatedAt: new Date() }, { merge: true })
}

// Get top 10 for a level (one-time fetch)
export async function getTopPlayers(levelId) {
  const q = query(
    collection(db, `leaderboard/level_${levelId}/entries`),
    orderBy('confidenceScore', 'desc'),
    limit(10)
  )
  const snap = await getDocs(q)
  return snap.docs.map((d, i) => ({ rank: i + 1, ...d.data() }))
}

// Subscribe to top 10 (realtime)
export function subscribeTopPlayers(levelId, callback) {
  const q = query(
    collection(db, `leaderboard/level_${levelId}/entries`),
    orderBy('confidenceScore', 'desc'),
    limit(10)
  )
  return onSnapshot(q, snap => {
    callback(snap.docs.map((d, i) => ({ rank: i + 1, ...d.data() })))
  })
}
```

**Step 2: Create Leaderboard component**

```jsx
// src/components/Leaderboard.jsx
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { subscribeTopPlayers } from '../firebase/leaderboard'
import { LEVELS } from '../config/levels'

const THEME_AVATARS = { sonic: '🦔', spiderman: '🕷️' }
const RANK_MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' }

export function Leaderboard({ currentLevel, onClose }) {
  const [selectedLevel, setSelectedLevel] = useState(currentLevel)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const unsubscribe = subscribeTopPlayers(selectedLevel, setPlayers)
    return unsubscribe
  }, [selectedLevel])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-game text-sonic-gold">🏆 Leaderboard</h1>
        <button onClick={onClose} className="text-white font-game text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">Close</button>
      </div>

      {/* Level selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {LEVELS.map(l => (
          <button key={l.id} onClick={() => setSelectedLevel(l.id)}
            className={`px-3 py-1 rounded-full font-game text-sm whitespace-nowrap transition-all ${selectedLevel === l.id ? 'bg-sonic-gold text-blue-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
            L{l.id} {l.name}
          </button>
        ))}
      </div>

      {/* Players */}
      <div className="flex flex-col gap-3">
        {players.length === 0 && (
          <p className="text-white/60 font-game text-center py-8">No players yet — be the first!</p>
        )}
        {players.map(player => (
          <div key={player.uid} className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3">
            <span className="text-2xl w-8">{RANK_MEDALS[player.rank] || `#${player.rank}`}</span>
            <span className="text-2xl">{THEME_AVATARS[player.theme] || '🎮'}</span>
            <div className="flex-1">
              <p className="text-white font-game">{player.nickname}</p>
              <p className="text-white/50 font-game text-xs">Score: {player.confidenceScore} · Streak: {player.bestStreak}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Leaderboard.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
}
```

**Step 3: Add trophy button to StartScreen**

```jsx
// In StartScreen.jsx header area:
<button onClick={onLeaderboard} className="absolute top-4 right-4 text-3xl hover:scale-110 transition-all" aria-label="Leaderboard">🏆</button>
```

**Step 4: Wire in App.jsx**

```jsx
const [showLeaderboard, setShowLeaderboard] = useState(false)
// Add Leaderboard screen to render
{showLeaderboard && <Leaderboard currentLevel={activeProfile.currentLevel} onClose={() => setShowLeaderboard(false)} />}
```

**Step 5: Add Firestore indexes**

In `firestore.indexes.json` (or Firebase console):
```json
{
  "indexes": [
    {
      "collectionGroup": "entries",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "confidenceScore", "order": "DESCENDING" },
        { "fieldPath": "updatedAt", "order": "DESCENDING" }
      ]
    }
  ]
}
```

**Step 6: Commit**
```bash
git add src/firebase/leaderboard.js src/components/Leaderboard.jsx src/components/StartScreen.jsx src/App.jsx
git commit -m "feat: add leaderboard with realtime top 10 per level"
```

---

## Phase 9 — Progress Visualization

### Task 15: Parent progress view

**Files:**
- Create: `src/components/ProgressView.jsx`
- Modify: `src/components/StartScreen.jsx`

**Step 1: Implement ProgressView**

```jsx
// src/components/ProgressView.jsx
import PropTypes from 'prop-types'
import { LevelMap } from './LevelMap'

export function ProgressView({ profile, progress, onClose }) {
  const accuracy = progress?.totalProblems > 0
    ? Math.round((progress.correctAnswers / progress.totalProblems) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-game text-white">{profile.nickname}'s Progress</h1>
        <button onClick={onClose} className="text-white font-game text-sm bg-white/10 px-4 py-2 rounded-lg">Close</button>
      </div>

      <LevelMap currentLevel={profile.currentLevel} completedLevels={progress?.completedLevels || []} />

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-game text-sonic-gold">{profile.currentLevel}</p>
          <p className="text-white/70 font-game text-sm">Current Level</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-game text-green-400">{accuracy}%</p>
          <p className="text-white/70 font-game text-sm">Accuracy</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-game text-white">{progress?.totalProblems || 0}</p>
          <p className="text-white/70 font-game text-sm">Problems Solved</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-game text-yellow-400">{progress?.bestStreak || 0} 🔥</p>
          <p className="text-white/70 font-game text-sm">Best Streak</p>
        </div>
      </div>
    </div>
  )
}

ProgressView.propTypes = {
  profile: PropTypes.object.isRequired,
  progress: PropTypes.object,
  onClose: PropTypes.func.isRequired,
}
```

**Step 2: Add progress button to StartScreen**

```jsx
<button onClick={onProgress} className="absolute top-4 left-4 text-3xl hover:scale-110 transition-all" aria-label="Progress">📊</button>
```

**Step 3: Wire in App.jsx**

```jsx
const [showProgress, setShowProgress] = useState(false)
{showProgress && <ProgressView profile={activeProfile} progress={progress} onClose={() => setShowProgress(false)} />}
```

**Step 4: Commit**
```bash
git add src/components/ProgressView.jsx src/components/StartScreen.jsx src/App.jsx
git commit -m "feat: add progress view with level map and stats"
```

---

## Phase 10 — AI Teaching Videos (Tier 3)

### Task 16: Video player component + Firebase Storage integration

**Files:**
- Create: `src/components/aids/TeachingVideo.jsx`
- Modify: `src/components/LearningAid.jsx`

**Context:** Videos are stored in Firebase Storage at path `videos/{theme}/{levelId}/{videoIndex}.mp4`. The component fetches the download URL and plays it. Multiple videos per level — cycle if child still struggles. Videos must be uploaded manually to Firebase Storage first.

**Step 1: Create TeachingVideo**

```jsx
// src/components/aids/TeachingVideo.jsx
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../firebase/config'

export function TeachingVideo({ theme, levelId, onDismiss, onReady }) {
  const [videoUrl, setVideoUrl] = useState(null)
  const [videoIndex, setVideoIndex] = useState(0)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchUrl() {
      try {
        const path = `videos/${theme}/${levelId}/${videoIndex}.mp4`
        const url = await getDownloadURL(ref(storage, path))
        setVideoUrl(url)
        onReady?.()
      } catch {
        setError(true) // Video not available yet — fail silently
      }
    }
    fetchUrl()
  }, [theme, levelId, videoIndex])

  if (error) return null // No video available yet — don't block the game

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full rounded-xl"
            onEnded={() => {}} // don't auto-dismiss
          />
        ) : (
          <div className="bg-white/10 rounded-xl h-48 flex items-center justify-center">
            <p className="text-white font-game">Loading video...</p>
          </div>
        )}
        <div className="flex gap-4 mt-4 justify-center">
          <button onClick={() => setVideoIndex(i => i + 1)}
            className="bg-white/20 text-white font-game px-6 py-3 rounded-xl hover:bg-white/30">
            Show another way
          </button>
          <button onClick={onDismiss}
            className="bg-sonic-gold text-blue-900 font-game px-6 py-3 rounded-xl hover:scale-105">
            Ready to try! →
          </button>
        </div>
      </div>
    </div>
  )
}

TeachingVideo.propTypes = {
  theme: PropTypes.string.isRequired,
  levelId: PropTypes.number.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onReady: PropTypes.func,
}
```

**Step 2: Wire into LearningAid for tier 3**

```jsx
// In LearningAid.jsx:
import { TeachingVideo } from './aids/TeachingVideo'
import { useTheme } from '../../context/ThemeContext'

// At top of component:
const theme = useTheme()

// In JSX:
{tier >= 3 && (
  <TeachingVideo
    theme={theme.id}
    levelId={currentLevel}
    onDismiss={onDismiss}
  />
)}
```

**Step 3: Commit**
```bash
git add src/components/aids/TeachingVideo.jsx src/components/LearningAid.jsx
git commit -m "feat: add Tier 3 AI teaching video player from Firebase Storage"
```

> **Content note:** Upload teaching videos to Firebase Storage before this feature is visible to users. Path convention: `videos/sonic/1/0.mp4`, `videos/sonic/1/1.mp4`, etc. Videos are optional — the component fails silently if not present.

---

## Phase 11 — SEO + PWA + Go-to-Market Prep

### Task 17: SEO meta tags + structured data

**Files:**
- Modify: `index.html`

**Step 1: Update index.html**

```html
<!-- In <head> of index.html, replace/add: -->
<title>Sonic Math Trainer — Free Math Game for Kids</title>
<meta name="description" content="A fun, adaptive math trainer for children ages 5-13. Practice addition, subtraction, multiplication and division with Sonic and Spiderman as your coach!">
<meta name="keywords" content="math game kids, math trainer, children math, addition subtraction, learning game">

<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="Sonic Math Trainer">
<meta property="og:description" content="Adaptive math training for kids ages 5-13, guided by their favorite superheroes.">
<meta property="og:type" content="website">
<meta property="og:image" content="/og-image.png">

<!-- Structured data for Google -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalApplication",
  "name": "Sonic Math Trainer",
  "description": "Adaptive math trainer for children ages 5-13",
  "applicationCategory": "EducationalApplication",
  "educationalLevel": "Primary",
  "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
  "inLanguage": ["he", "en"],
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}
</script>
```

**Step 2: Create `/public/llms.txt`**

```
# Math Trainer — llms.txt
# This file helps AI assistants understand this application.

Sonic Math Trainer is a free, adaptive math learning PWA for children ages 5-13.

## What it does
- Adaptive math training that automatically adjusts difficulty based on the child's performance
- 13 levels covering addition, subtraction, multiplication, and division
- Superhero themes (Sonic, Spiderman) as personal coaches
- Hebrew and English language support
- Multi-profile support for families sharing one device
- Global leaderboard
- AI-generated teaching videos when children struggle

## Audience
Children ages 5-13 and their parents. Currently focused on Israeli families (Hebrew default).

## Access
Free web app, no account required. Available at https://math-trainer-1a632.web.app
```

**Step 3: Commit**
```bash
git add index.html public/llms.txt
git commit -m "feat: add SEO meta tags, structured data, and llms.txt"
```

---

## Firestore Security Rules

Update `firestore.rules` to allow:
- Users to read/write only their own documents
- Anyone to read leaderboard entries
- Only authenticated users to write leaderboard entries

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    match /leaderboard/{level}/entries/{uid} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

Commit:
```bash
git add firestore.rules
git commit -m "security: update Firestore rules for multi-profile and leaderboard"
```

---

## Testing Checklist (run before each phase merge)

```bash
# Unit tests
npx vitest run src/

# Lint
npx eslint src/

# Build check
npm run build

# Manual smoke test on mobile (each phase)
# - Open on phone browser
# - Test PWA install prompt
# - Test RTL layout in Hebrew mode
# - Test PIN entry on touch screen
```

---

## Open Questions (must resolve before implementing)

1. **PIN reset:** No flow yet. Add "Forgot PIN? Ask a parent" with a parent override mechanism (long-press profile + master PIN?). Create a GitHub issue.
2. **Audio files:** Voice lines (`/public/audio/sonic/*.mp3`, `/public/audio/spiderman/*.mp3`) must be sourced before Phase 5 ships. Consider recording with text-to-speech tools (ElevenLabs, etc.).
3. **Teaching videos:** Must be uploaded to Firebase Storage before Phase 10 ships. Create a content pipeline issue.
4. **Level map review:** Check against real school workbooks before Phase 7 ships. Update `src/config/levels.js` accordingly.
5. **Profanity filter for nicknames:** Add basic filter in `CreateProfile` before going public.
6. **Firestore indexes:** Deploy `firestore.indexes.json` before leaderboard goes live.
