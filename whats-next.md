<original_task>
The user wanted to stop and brainstorm the entire Math Trainer project from scratch — no levels, no targets — and design it properly "from bottom to top". This evolved into a full product design session covering adaptive levels, confidence engine, multi-profile system, superhero themes, leaderboard, i18n, learning aids, AI teaching videos, and go-to-market strategy. The output was a design doc, implementation plan, and full GitHub issue structure ready for the project-workflow skill to execute.
</original_task>

<work_completed>
## 1. Full Product Brainstorm (superpowers:brainstorming skill)

Ran a structured brainstorming session, one question at a time. Key decisions made:

### Game Structure
- **No fixed end** — child plays until they exit or level up
- **Level-based** — 13 levels aligned to school curriculum ages 5–13
- **Level map is PROVISIONAL** — user to verify against son's school workbooks before Phase 7 builds it

### Confidence Engine ("The Thermometer")
- **Approach B chosen** — weighted score engine, NOT threshold checkpoints
- Feels "natural and smart" — continuous needle, not a checklist
- Score per level (0–100), starts at 50
- Correct: +8, Wrong: -12, Fast (<3s): +3 bonus, Slow wrong (>10s): -8
- Streak ×2 = ×1.3 multiplier, Streak ×5 = ×1.6
- Score ≥85 for 3 consecutive → level up
- Score <35 → show learning aid
- Score <20 for 5 consecutive → AI teaching video
- Daily decay: -1/day, max -10

### Multi-Profile System
- Multiple children on same device
- 4-digit PIN per profile (SHA-256 hashed, SubtleCrypto)
- Each profile: own Firebase anonymous auth UID, nickname, language, theme, level

### Language / i18n
- **Hebrew = default** (RTL layout)
- **English** = second language
- **Per-profile language preference**
- react-i18next, document direction switches automatically

### Superhero Themes
- **Sonic** (blue/gold) + **Spiderman** (red/blue) at launch
- Full visual re-skin + voice lines + AI teaching video character
- Architecture supports adding themes as config+assets, no code changes

### Learning Aids (3 tiers)
- **Tier 1** (score <35, levels 1–7): Visual — dot counter + number line
- **Tier 2** (score <35, levels 5+): Strategy hints — bridging, decomposition, doubles; "Show me another way" cycling
- **Tier 3** (score <20, 5 consecutive): AI teaching video featuring child's chosen superhero — generated with Sora/RunwayML/HeyGen, stored in Firebase Storage

### Leaderboard
- Global top 10 per level (confidence score)
- Hall of Fame for all-13-levels completions
- Realtime via Firestore onSnapshot
- Trophy button on StartScreen

### Go-to-Market
- **Custom domain: DEFERRED** — not needed now, ~$10/year when ready
- Phases: domain → SEO (SSR/pre-render, JSON-LD schema) → App Store (Google Play via Bubblewrap) → AI discoverability (llms.txt) → community

## 2. Design Doc Created
- **File:** `docs/plans/2026-03-07-adaptive-math-trainer-design.md`
- **Commit:** `c202ecc`
- 12 sections: level map, confidence engine, learning aids, themes, multi-profile, leaderboard, progress visualization, session flow, i18n, tech architecture, out of scope, go-to-market
- Level map marked **PROVISIONAL** with warning note

## 3. Implementation Plan Created
- **File:** `docs/plans/2026-03-07-implementation-plan.md`
- **Commit:** `fd1ed72`
- 17 tasks across 11 phases
- TDD: each task has failing test → implement → passing test → commit
- Exact file paths, complete code snippets, exact CLI commands with expected output

## 4. GitHub Structure Created
- **Old issues closed:** #3, #4, #6, #7 — closed with comment "Superseded by full redesign"
- **Labels created:** epic, phase-1 through phase-11, ready-for-dev
- **11 epics created:** #11, #14, #17, #21, #23, #25, #28, #31, #33, #35, #37
- **17 sub-issues created:** #12-#13, #15-#16, #18-#20, #22, #24, #26-#27, #29-#30, #32, #34, #36, #38
- All 28 issues added to project board #6 "Math Trainer" with Priority, Size, Estimate
- Sub-issues linked to parent epics via GitHub sub-issues REST API
- **TL_STATE.json initialized:** `.github/TL_STATE.json`
- **Commit:** `5428065`

## 5. Known Gap: Iterations + Dates NOT Set
- Project board has no sprint/iteration configuration
- Start Date, Target Date, Iteration fields are empty on all issues
- **Decision:** User will handle this with new fixed project-workflow skill in next session
- The skill's Step 1.6 is designed to set these during grooming (PM agent assigns)
</work_completed>

<work_remaining>
## Immediate — Next Session

### 1. Create Sprint Iterations in GitHub Project
The new project-workflow skill should handle this. If it doesn't, manually create sprints in GitHub project UI:
- Suggested: 2-week sprints starting 2026-03-08
- Sprint 1: phases 1–3 (P0 core engine)
- Sprint 2: phases 4–6 (themes, i18n, aids)
- Sprint 3: phases 7–9 (UI, leaderboard, progress)
- Sprint 4: phases 10–11 (AI videos, SEO)

### 2. Run project-workflow to Start Grooming
```
project-workflow
```
- Will read `.github/TL_STATE.json`
- Should create sprints, begin grooming queue: [12, 13, 15, 16, 18, 19, 20, 22, 24, 26, 27, 29, 30, 32, 34, 36, 38]
- PM agent will set Start Date, Target Date, Iteration on each issue during Step 1.6
- After grooming: execute Phase 1 (issues #12, #13)

### 3. User Action: Verify Level Map
- Check son's school workbooks
- Update `src/config/levels.js` BEFORE Phase 7 ships (level map UI)
- The provisional map is in design doc Section 2 and implementation plan Task 1

## Remaining Implementation (all 17 tasks unstarted)

| Phase | Issues | Description |
|-------|--------|-------------|
| 1 | #12, #13 | Level config + problem generator |
| 2 | #15, #16 | Confidence engine |
| 3 | #18, #19, #20 | Multi-profile + PIN |
| 4 | #22 | i18n Hebrew/English |
| 5 | #24 | Superhero themes + voice |
| 6 | #26, #27 | Learning aids tier 1+2 |
| 7 | #29, #30 | Level-up screen + level map |
| 8 | #32 | Leaderboard |
| 9 | #34 | Progress view |
| 10 | #36 | AI teaching videos |
| 11 | #38 | SEO + llms.txt |

## Content Required (not blocking code, but needed before launch)
- Audio files: `public/audio/sonic/*.mp3` + `public/audio/spiderman/*.mp3` (voice lines)
- Teaching videos: `videos/sonic/{levelId}/{index}.mp4` in Firebase Storage
- og-image.png for Open Graph meta tag
</work_remaining>

<attempted_approaches>
## GraphQL Iterations Query — FAILED on Windows

Tried multiple approaches to query project iterations, all failed due to Windows shell (Git Bash) mangling special characters in GraphQL queries:

```bash
# Approach 1: -f query='...' with $variables — FAILED
# Error: "Expected VAR_SIGN, actual: UNKNOWN_CHAR" — $ stripped by shell

# Approach 2: --field flags — FAILED same error

# Approach 3: heredoc file pipe — FAILED
# Error: "A query attribute must be specified and must be a string"

# Approach 4: Python subprocess — WORKED but returned empty nodes
# Project has no iteration fields configured at all
```

**Root cause:** Project board #6 has no iteration/sprint fields configured. Even with a working query, there's nothing to return.

**Resolution:** User will handle sprint creation with new project-workflow skill.

## Bulk Issue Creation Agent
- Dispatched `general-purpose` agent to create all 28 issues in one shot
- Agent successfully created all issues and linked sub-issues to epics
- **Gap:** Agent skipped Start Date, Target Date, Iteration (not in its instructions)
- **Key finding from agent:** GitHub sub-issues API requires internal integer `.id` field, NOT the issue number. Also all API calls must omit leading slash on Windows (Git Bash rewrites `/repos/...` as a filesystem path).
</attempted_approaches>

<critical_context>
## Project Config
- **Repo:** DubiWork/math-trainer
- **GitHub Project:** #6 "Math Trainer", ID: `PVT_kwHOA54Ghc4BQtkw`
- **Firebase Project:** math-trainer-1a632
- **Live URL:** https://math-trainer-1a632.web.app
- **CD:** Push to main → GitHub Actions deploy.yml → Firebase Hosting (Node 20)

## Project Board Field IDs
```
STATUS_FIELD_ID:    PVTSSF_lAHOA54Ghc4BQtkwzg-wLbg
  Backlog:          f75ad846
  In review:        df73e18b
  Ready:            61e4505c
  In progress:      47fc9ee4
  Done:             98236657
PRIORITY_FIELD_ID:  PVTSSF_lAHOA54Ghc4BQtkwzg-wLiU
  P0:               79628723
  P1:               0a877460
  P2:               da944a9c
SIZE_FIELD_ID:      PVTSSF_lAHOA54Ghc4BQtkwzg-wLiY
  XS:               6c6483d2
  S:                f784b110
  M:                7515a9f1
  L:                817d0097
  XL:               db339eb2
ESTIMATE_FIELD_ID:  PVTF_lAHOA54Ghc4BQtkwzg-wLic
START_DATE_FIELD_ID: PVTF_lAHOA54Ghc4BQtkwzg-wLig
TARGET_DATE_FIELD_ID: PVTF_lAHOA54Ghc4BQtkwzg-wLik
ITERATION_FIELD_ID: PVTF_lAHOA54Ghc4BQtkwzg-wLik  (no iterations exist yet)
```

## Key Architecture Decisions
- **No real auth yet** — anonymous auth only, designed for clean swap later
- **localStorage** for profile list + PIN hashes (not Firestore — privacy, no PII)
- **Firestore** for per-user game progress, per-level confidence scores, leaderboard
- **Firebase Storage** for AI teaching videos (`videos/{theme}/{levelId}/{index}.mp4`)
- **SubtleCrypto** for PIN hashing — no external crypto dependency

## Windows/Git Bash GraphQL Gotcha
- `$variable` in GraphQL queries gets eaten by bash on Windows
- Use Python subprocess or avoid variables in queries (hardcode values inline)
- Sub-issues API: use internal integer `id` not issue `number`
- All `gh api` paths: omit leading `/` on Windows (Git Bash rewrites them)

## Stack
- React 18 + Vite + Tailwind CSS
- Firebase (Auth + Firestore + Storage)
- Vitest for tests
- react-i18next (to be added in Phase 4)
- SubtleCrypto (native — no install needed)
- NO new auth dependencies planned

## Existing Tests (25 total, all passing)
- 18: `src/firebase/validateEnv.test.js`
- 7: `src/hooks/useGameState.test.js`
- Run with: `npx vitest run src/`
- Lint with: `npx eslint src/` (NOT `npm run lint` — hits .vite/deps vendor files)

## Open Questions (from design doc)
1. PIN reset flow — no mechanism designed yet
2. AI video generation pipeline — tooling not decided (Sora/RunwayML/HeyGen)
3. Firebase Storage vs CDN for video hosting costs
4. Nickname profanity filter needed before public launch
5. Stars-per-level criteria not defined
6. Multiplication problem direction (2×? vs ?×2 vs both)
</critical_context>

<current_state>
## Git State
```
Branch: main (clean, up to date with origin/main)
HEAD: 2500db1 chore: update handoff document for next session

Recent commits:
2500db1 chore: update handoff document for next session
5428065 chore: initialize project workflow state with 11 epics and 17 sub-issues
fd1ed72 Add implementation plan for adaptive math trainer
c202ecc Add full product design doc for adaptive math trainer
6219d87 #5 Fix Back to Start to save stats and reset score
```

## Files Created This Session
- `docs/plans/2026-03-07-adaptive-math-trainer-design.md` — COMPLETE, committed
- `docs/plans/2026-03-07-implementation-plan.md` — COMPLETE, committed
- `.github/TL_STATE.json` — COMPLETE, committed
- `whats-next.md` — this file

## GitHub Issues
- #3, #4, #6, #7 — CLOSED (superseded)
- #11–#38 — OPEN, all in Backlog status on project board
- Priority, Size, Estimate set on all issues
- Iteration, Start Date, Target Date — NOT SET (no sprints exist in project)

## No Code Changes
- Zero production code was written this session
- All existing code unchanged
- All 25 tests still passing
- App deployed and live at https://math-trainer-1a632.web.app

## Next Action
Run `project-workflow` in a fresh session → it picks up from TL_STATE.json → creates sprints → begins grooming → executes implementation phase by phase.
</current_state>
