# Adaptive Math Trainer — Full Product Design

**Date:** 2026-03-07
**Status:** Approved
**Audience:** Architect, Designer, PM — use this to break into implementation issues

---

## Vision

A smart, adaptive math trainer for children ages 5–13. The app feels like a personal superhero tutor — it senses when the child is confident, moves them forward automatically, and catches them when they struggle with personalized learning aids and AI-generated teaching videos. Multiple children can share one device with their own protected profiles. Each child picks their superhero coach, their language, and the app tracks their journey through 13 math levels aligned to school curriculum.

---

## 1. Multi-Profile System

### Profile Creation
- On first open: "Who's playing?" screen with a "Add Hero" button
- Creating a profile requires:
  - Nickname (max 12 characters)
  - 4-digit PIN (entered twice to confirm)
  - Language preference: Hebrew (default) or English
  - Superhero theme selection (see Section 5)
- Each profile gets its own anonymous Firebase Auth UID
- Profiles stored in `localStorage` as a list of `{ uid, nickname, avatarTheme, language, pinHash }`
- PIN is hashed (SHA-256) before storing — never stored in plain text

### Profile Switcher (Start Screen)
- Shows avatar cards for all profiles on the device
- Tapping a profile → PIN entry screen (4 dots, numpad)
- Wrong PIN → shake animation, try again (no lockout for now)
- "Add Hero" card always visible at the end of the list
- Each profile loads its own Firestore data after PIN unlock

### Data Model (Firestore)
```
users/{uid}/
  nickname: string
  language: "he" | "en"
  theme: "sonic" | "spiderman"
  currentLevel: number (1–13)
  createdAt: timestamp

users/{uid}/levelProgress/{levelId}/
  confidenceScore: number (0–100)
  totalProblems: number
  correctAnswers: number
  bestStreak: number
  completedAt: timestamp | null
  lastPlayedAt: timestamp

users/{uid}/sessions/{sessionId}/
  levelId: number
  startedAt: timestamp
  endedAt: timestamp
  problemsAnswered: number
  correctAnswers: number
  averageResponseTime: number (ms)
```

---

## 2. Level Map (Ages 5–13)

> **⚠️ PROVISIONAL — Review against real school workbooks before implementing.**
> The level sequence below is a reasonable starting point but has not been verified against an actual school curriculum. Owner should check their child's workbooks and update this table before the level-map issue is built.

13 levels aligned to school math curriculum. Each level has a name, operation set, number range, and the cognitive milestone it targets.

| Level | Name | Operation | Number Range | Cognitive Milestone | Age Target |
|-------|------|-----------|--------------|---------------------|------------|
| 1 | First Steps | Addition | 1–5 | Counting, one-to-one | 5–6 |
| 2 | Addition Hero | Addition | 1–10 | Single digit fluency | 6 |
| 3 | Minus Magic | Subtraction | 1–10 | Inverse of addition | 6–7 |
| 4 | Mixed Warrior | +/- | 1–10 | Switching operations | 7 |
| 5 | Cross the 10 | Addition | 1–20 | Bridging through 10 | 7 |
| 6 | Subtract 20 | Subtraction | 1–20 | Borrowing concept | 7–8 |
| 7 | Mixed 20 | +/- | 1–20 | Full two-digit fluency | 8 |
| 8 | Tens Master | +/- | 1–100 (multiples of 10) | Place value | 8–9 |
| 9 | Century Runner | +/- | 1–100 | Full two-digit arithmetic | 9 |
| 10 | Speed of 2s | Multiplication | ×2, ×5, ×10 | First times tables | 9–10 |
| 11 | Times Tables | Multiplication | ×3,×4,×6,×7,×8,×9 | Full multiplication | 10–11 |
| 12 | Division Quest | Division | ÷2,÷5,÷10 → all | Inverse of multiplication | 11–12 |
| 13 | Math Champion | Mixed | All operations | Full fluency | 12–13 |

### Level Unlock Rules
- Level 1 always unlocked
- Each level unlocks only after the previous level is **completed** (confidence score ≥ 85 sustained)
- Child always resumes at their current level
- Completed levels can be replayed for fun (no confidence tracking in replay mode)

---

## 3. Confidence Engine ("The Thermometer")

The core adaptive intelligence. A continuous score per level (0–100) that rises and falls with every answer, reflecting the child's true mastery rather than a single session result.

### Score Updates (per answer)
```
Base correct answer:          +8
Base wrong answer:            -12
Streak ×2 (2 correct in row): correct score ×1.3
Streak ×5 (5 correct in row): correct score ×1.6
Fast answer (<3 seconds):     +3 bonus
Long think correct (>10s):    no penalty (effort respected)
Long think wrong (>10s):      -8 instead of -12 (effort respected)
```

### Thresholds
| Zone | Score | Duration | Action |
|------|-------|----------|--------|
| Level Up | ≥ 85 | 3 consecutive problems | Trigger level-up celebration |
| Mastered | ≥ 85 | Sustained over 15 problems | Mark level complete, unlock next |
| Comfort | 50–84 | — | Normal play, no aids |
| Struggling | < 35 | — | Show inline learning aid |
| Critical | < 20 | 5 consecutive problems | Show AI teaching video |

### Decay
- Confidence decays **-1 per day of inactivity**, capped at -10 total
- Prevents "mastery decay" from feeling punishing
- Displayed visually as a slightly faded progress bar after long absence

### Response Time Tracking
- Measured per problem (tap start → answer tap)
- Stored as rolling 10-problem average per level
- Used only for fast-answer bonus — never blocks level up
- Shown to parents in progress view as "fluency indicator"

---

## 4. Learning Aids System

Three tiers that escalate automatically based on confidence score. Aids are per-level and per-operation-type — not per individual problem.

### Tier 1 — Visual Aids (score < 35, levels 1–7)
Shown **inline below the problem**, non-blocking:
- Animated dot counter (dots appear one by one as numbers are read aloud)
- Number line with animated jump highlighting the operation
- Finger counting animation for levels 1–3
- Child can tap to hide the aid ("I got it!")

### Tier 2 — Strategy Hints (score < 35, levels 5+)
Shown **inline below the problem**, non-blocking:
- Step-by-step breakdown: `"6 + 7 → make 10 first: 6 + 4 = 10, then 10 + 3 = 13"`
- Multiple strategies offered if first doesn't help:
  - Bridging through 10
  - Decomposition
  - Doubles and near-doubles
  - Counting up/back
- "Show me another way" button cycles strategies
- Strategy shown matches the level's cognitive milestone

### Tier 3 — AI Teaching Video (score < 20 for 5 consecutive problems)
Shown as **full-screen overlay**, child can replay or dismiss:
- 60–90 second video per level/operation type
- The child's **chosen superhero character** appears as the teacher in the video
- Multiple videos per level — app cycles through them if child continues to struggle
- Generated with AI tools (Sora, RunwayML, or similar)
- Stored in Firebase Storage, streamed on demand
- Narration in child's profile language (Hebrew or English)
- After video: "Ready to try again?" → resumes game

### Aid Selection Logic
```
if (confidenceScore < 20 AND last5Wrong) → Tier 3 video
else if (confidenceScore < 35 AND level >= 5) → Tier 2 hint
else if (confidenceScore < 35 AND level < 5) → Tier 1 visual
```
Aids shown only once per problem — not re-shown on next problem unless score stays critical.

---

## 5. Superhero Themes

Each profile has one superhero coach. The theme affects: color palette, UI icons, character art, voice lines, and AI teaching video character.

### Launch Themes
| Theme | Colors | Coach Voice Style |
|-------|--------|-------------------|
| Sonic | Blue/Gold | Fast, energetic, "Gotta go fast!" |
| Spiderman | Red/Blue | Friendly, encouraging, "With great math comes great power!" |

### Theme Coverage
- **Visual:** Full UI re-skin — backgrounds, buttons, score display, celebration animations
- **Voice:** Short audio clips for: correct answer, wrong answer, streak milestone, level up, encouragement during struggle
- **AI Videos:** The superhero character appears as the teacher/narrator
- **Character Art:** Static + animated sprite shown during feedback and celebrations

### Future Themes (designed for, not built now)
- Architecture supports adding themes as content drops (new Firestore config + asset bundle)
- No code changes needed to add a new theme — just assets + config

---

## 6. Leaderboard

### Global Leaderboard (per level)
- Top 10 nicknames with highest **sustained confidence score** per level
- Accessible from StartScreen via trophy button (after PIN unlock)
- Realtime via Firestore `onSnapshot`
- Displays: rank, nickname + theme avatar, level, best streak

### Hall of Fame
- Players who completed all 13 levels
- Shows completion date and total time played

### Privacy
- Only nickname shown — no UIDs, no device info
- Hebrew or English display based on viewer's profile language

---

## 7. Progress Visualization

Each child has a **personal progress screen** accessible from the start screen (after PIN unlock).

### Child View
- Visual "level map" — a road/path with 13 checkpoints, each showing completion status
- Confidence thermometer per current level (animated, color-coded: red → yellow → green)
- Current streak and best streak
- Stars earned per level (1–3 stars based on mastery speed)
- "You're on track!" / "Keep practicing!" message based on recent confidence trend

### Parent View (accessible via long-press on profile + PIN)
- Same level map with dates
- Accuracy trend chart (last 7 days)
- Average response time per level (fluency indicator)
- Time played per day (last 7 days)
- Learning aids triggered (how often Tier 1/2/3 activated)

---

## 8. Game Session Flow

```
App Open
  → Profile Switcher (who's playing?)
    → PIN Entry
      → StartScreen (themed, shows current level + progress)
        → [Start Training] button
          → GameScreen
            → Problems loop (confidence engine running silently)
            → Learning Aid appears inline if struggling
            → AI Video overlay if critical
            → Level Up! celebration screen (superhero animation + voice)
              → Continue to next level OR exit
            → [Exit] button → save progress → ResultScreen
              → session summary (problems, accuracy, rings/score, streak)
              → back to StartScreen
```

### Session Rules
- No fixed end — child plays until they exit or level up
- Auto-save every answer (Firestore debounced 2s, force-save on exit)
- If child closes app mid-session, progress is preserved from last auto-save

---

## 9. Internationalization (i18n)

- **Default language:** Hebrew (RTL layout)
- **Supported at launch:** Hebrew + English
- **Architecture:** i18n library (react-i18next) with per-profile language selection
- All UI strings in translation files (`/locales/he.json`, `/locales/en.json`)
- RTL/LTR layout switches automatically based on language
- AI video narration language matches profile language
- Voice clips recorded in both languages per theme

---

## 10. Technical Architecture (What Changes)

### New / Modified
| Component | Change |
|-----------|--------|
| `mathProblems.js` | Extend to support all 13 level configs (operations, ranges) |
| `useGameState.js` | Add confidence engine logic, response time tracking |
| `useGameProgress.js` | Add per-level progress, session tracking |
| `App.jsx` | Add profile switcher, PIN flow, language context |
| `GameScreen.jsx` | Add learning aid rendering, level-up celebration |
| New: `useConfidence.js` | Isolated confidence engine hook |
| New: `ProfileSwitcher.jsx` | Multi-profile UI |
| New: `LevelMap.jsx` | Progress visualization |
| New: `Leaderboard.jsx` | Global scores |
| New: `LearningAid.jsx` | Tier 1/2/3 aid renderer |
| New: `ThemeProvider.jsx` | Theme context (colors, assets, voice) |
| New: `/locales/he.json` | Hebrew translations |
| New: `/locales/en.json` | English translations |

### Firebase
- Firestore rules updated for per-user level progress
- Firebase Storage for AI teaching videos
- Firestore indexes for leaderboard queries

### Dependencies to Add
- `react-i18next` — internationalization
- `crypto-js` or native `SubtleCrypto` — PIN hashing
- Firebase Storage SDK (already in firebase package)

---

## 11. Out of Scope (Future)

- Real authentication (Google, Apple) — designed for clean swap
- Multiplication/division video content — generate after launch
- More than 2 superhero themes — add as content drops
- Teacher/classroom dashboard
- Offline mode (PWA cache already handles basic offline)
- Parent email reports

---

## 12. Go-to-Market (Deferred — Do After Product Is Built)

> **Status: Future.** Nothing here blocks development. Revisit when the core product is stable and ready for public users.

### Phase 1 — Custom Domain (when ready to go public)
- Buy a domain — suggested options: `mathtrainer.co.il` (Israeli audience), `sonicmath.app`, `mathheroes.app`
- Cost: ~$10–15/year for `.com`, ~$3–5/year for `.co.il`
- Setup: point DNS to Firebase Hosting — 30-minute config change
- Firebase Hosting supports custom domains natively (free SSL included)

### Phase 2 — SEO Foundation
React SPAs have a known SEO problem: Google sees a blank HTML shell until JavaScript loads. Fix with:

- **Server-Side Rendering (SSR) or Static Pre-rendering** — convert from pure Vite SPA to Vite + SSR, or use a static pre-render plugin (`vite-plugin-ssr`) to generate HTML for key pages
- **Meta tags per page** — title, description, Open Graph (for social sharing), Twitter card
- **Structured data** — add `JSON-LD` schema for `EducationalApplication` so Google shows rich results
- **`robots.txt` + `sitemap.xml`** — already partially handled by Firebase Hosting; needs proper sitemap
- **Performance** — Lighthouse score ≥ 90 (already close with current Vite + PWA setup)

### Phase 3 — App Store Presence (PWA + Native)
- **PWA install prompt** — already supported, but add a custom "Add to Home Screen" banner for iOS/Android
- **Google Play Store** — wrap PWA with [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) (free, Google tool) → publish as TWA (Trusted Web Activity)
- **Apple App Store** — requires a native wrapper (Capacitor or React Native shell) — more effort, consider later
- App Store presence dramatically increases discoverability for parents searching "math game kids"

### Phase 4 — AI Agent Discoverability
Modern parents find apps via ChatGPT, Gemini, and other AI assistants — not just Google. To be found:

- **Clear, descriptive landing page** at the root URL — one paragraph explaining what the app does, for whom, and why it's good
- **`llms.txt`** — a new emerging standard (like `robots.txt` for AI crawlers) — a plain text file at `/llms.txt` describing the app for AI agents
- **Blog/content** — a few short articles ("How to help your child learn math at home") drive organic search AND give AI agents context about the app's purpose
- **Backlinks** — list the app on educational directories (Common Sense Media, educational app lists)

### Phase 5 — Community & Word of Mouth
- Share in Israeli parent Facebook groups and WhatsApp groups
- Submit to `r/learnmath`, `r/homeschool`, Israeli parenting forums
- Ask teachers to share with parents (classroom use case)
- Add a "Share with a friend" button in the app (deep link to StartScreen)

### Key Metrics to Track (once live)
- Daily Active Users (DAU)
- Level completion rates (which levels are too hard/easy)
- Learning aid trigger frequency (how often children struggle)
- Session length and return rate
- Leaderboard participation rate

---

## Open Questions for PM/Architect

1. **PIN reset:** What happens if a child forgets their PIN? Parent override flow needed.
2. **AI video generation pipeline:** Who owns the content creation? Need tooling decision (Sora, RunwayML, HeyGen, etc.)
3. **Video storage costs:** Firebase Storage pricing for video — consider CDN or YouTube unlisted embeds instead.
4. **Leaderboard moderation:** Can nicknames be inappropriate? Need basic profanity filter or manual review.
5. **Stars per level:** Define exact criteria for 1, 2, 3 stars per level.
6. **Multiplication problems:** Does ×2 mean "2 × ?" or "? × 2" or both? Affects problem generator.
