# Execution Plan: Epic #28 — Phase 7: Level Progression UI

## Epic Branch
`epic/28-level-progression-ui`

## Parallel Groups

| Group | Sub-Issues | Rationale | Blocked By |
|-------|-----------|-----------|------------|
| **1 (sequential)** | #77 Wire currentLevel | Foundation — threads `currentLevel` prop from ProfileContext through App.jsx, GameScreen, useGameState, LearningAid. All other work depends on this. | None |
| **2 (parallel)** | #78 Level-up celebration, #80 Level map | Independent features that both depend only on #77. No file conflicts: #78 creates `LevelUpScreen.jsx` + modifies `GameScreen.jsx`; #80 creates `LevelMap.jsx` + modifies `StartScreen.jsx`. | Group 1 |
| **3 (sequential)** | #79 Max-level champion | Adds `isChampion` variant to `LevelUpScreen.jsx` created in #78. Cannot parallel with #78 (same files). | #78 (Group 2) |
| **4 (sequential)** | #81 Integration testing | End-to-end tests verifying all features work together. Requires all feature code complete. | Groups 2 + 3 |

## Dependency Graph

```
Group 1:  #77 (wire currentLevel)
             |
     ┌───────┴───────┐
     v               v
Group 2:  #78 (celebration)   #80 (level map)   ← parallel
             |                       |
             v                       |
Group 3:  #79 (champion)             |
             |                       |
     ┌───────┴───────────────────────┘
     v
Group 4:  #81 (integration tests)
```

**Critical path:** #77 → #78 → #79 → #81

## Agent Assignments

| Issue | Title | Agent | Rationale | Est. Dev | Est. Test |
|-------|-------|-------|-----------|----------|-----------|
| #77 | Wire currentLevel from profile through game loop | `react-specialist` | Prop threading through React components + hooks, PropTypes updates | 4-6h | 4-5h |
| #78 | Level-up celebration screen | `react-specialist` | New React component, App.jsx screen state machine, useEffect detection logic, CSS animations, a11y | 12-16h | 8-10h |
| #79 | Max-level champion screen | `react-specialist` | React component variant (isChampion prop), boundary guard logic | 4-6h | 4-5h |
| #80 | Level map progress visualization | `react-specialist` | New presentational React component, scroll behavior, Tailwind styling, a11y | 10-14h | 6-8h |
| #81 | Epic integration testing | `react-specialist` | E2E integration tests using @testing-library/react, vi.mock, fake timers — React testing domain | 4-6h | 6-7h |

**Note on #81 agent:** Although `test-automator` was initially considered, the integration tests are React-specific (@testing-library/react, vi.mock for Firebase, React component rendering). `react-specialist` is more appropriate per the "most specialized agent" rule — it knows the React testing patterns used in this codebase.

## Effort Summary

| Category | Estimate |
|----------|----------|
| Development | 34-48h |
| Testing | 28-35h |
| **Total** | **62-83h** |
| New tests | 85-110 |
| Post-merge test count | ~700-723 |

## Execution Sequence (Optimal Schedule)

| Day | Work | Tests Target |
|-----|------|-------------|
| Day 1 | #77 (wire currentLevel) — complete and merge to epic branch | 633-638 |
| Day 2 | #78 (celebration) + #80 (level map) — parallel, both merge to epic branch | 678-693 |
| Day 3 | #79 (champion) — merge to epic branch | 688-708 |
| Day 4 | #81 (integration) — merge to epic branch, promote epic to develop | 698-723 |

## File Conflict Analysis

Files modified per sub-issue (justifies parallel grouping):

| File | #77 | #78 | #79 | #80 | #81 |
|------|-----|-----|-----|-----|-----|
| `App.jsx` | W | W | — | — | — |
| `GameScreen.jsx` | W | W | — | — | — |
| `useGameState.js` | W | — | — | — | — |
| `StartScreen.jsx` | — | — | — | W | — |
| `LevelUpScreen.jsx` | — | C | W | — | — |
| `LevelMap.jsx` | — | — | — | C | — |
| `components/index.js` | — | W | — | W | — |

**C** = Create, **W** = Write/Modify

**Conflict zones:**
- `App.jsx` + `GameScreen.jsx`: Modified by both #77 and #78 — sequential (Group 1 → Group 2)
- `LevelUpScreen.jsx`: Created by #78, modified by #79 — sequential (Group 2 → Group 3)
- `components/index.js`: Modified by both #78 and #80 — both in Group 2 (parallel), but changes are additive (separate export lines). Merge conflict is trivial to resolve.

## Per-Issue Workflow

Each sub-issue follows the standard workflow:
1. `/start-issue N` — sets board status, creates branch from `epic/28-level-progression-ui`
2. Agent implements + tests
3. `npm run lint` + `npm test` — must pass
4. Commit + push
5. Draft PR → epic branch (not main)
6. Review agent sequence: `syntax-convention-reviewer` → `security-style-reviewer` → `architecture-reviewer`
7. Merge PR to epic branch
8. `/complete-issue N`

After Group 4 (#81): promote `epic/28-level-progression-ui` → `develop` → `main`.

## Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| Race condition: `shouldLevelUp` + `showFeedback` timing | High | Architecture eliminates it — GameScreen unmounts on `'levelup'` transition, clearing timeout |
| Stale closure: new problems use old level config | Medium | Full unmount/remount of GameScreen; new `currentLevel` prop creates fresh hook instance |
| React strict mode double useEffect fire | Low | `handleLevelUp` is idempotent — guards with screen state check |
| `components/index.js` merge conflict (Group 2 parallel) | Low | Additive changes only (separate export lines); trivial to resolve |
| Scope creep into audio/images | Medium | AC explicitly states visual-only MVP; enforce in code review |

## Success Criteria

- [ ] All 13 levels are reachable through gameplay progression
- [ ] Level-up celebration displays correctly for levels 1-12
- [ ] Math Champion celebration displays at level 13, no increment to 14
- [ ] Level map on StartScreen reflects current progress
- [ ] Profile `currentLevel` persists across app reloads
- [ ] Confidence engine resets on level advance
- [ ] 700+ tests passing, 0 regressions
- [ ] All a11y requirements met (aria, reduced-motion, 44px touch)
