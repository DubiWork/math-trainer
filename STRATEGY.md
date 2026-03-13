# Math Trainer — Strategy Document

**Last updated:** 2026-03-13
**Status:** Active

---

## Vision

Math Trainer is a Sonic-themed progressive web app that makes arithmetic practice genuinely enjoyable for young children. Built for a 7-year-old, it replaces rote drilling with an adaptive confidence engine, vivid character-driven feedback, and offline-first reliability — so a child can sit down, play independently, and actually want to come back tomorrow.

---

## Strategy Fork

**Stage 1 — Personal tool, product-grade foundations**

Math Trainer starts as a personal app for one child. It is not marketed, not monetised, and not open to the public. However, every architectural and UX decision is made at product quality: adaptive algorithms, multi-profile support, accessibility, bilingual i18n, and a CI/CD pipeline with automated regression. The app is designed so that opening it to a wider audience in Stage 2 requires no rewrites.

**Stage 2 — Open to the public**

When the MVP acceptance checklist is met and the experience is stable, the app will be made publicly accessible. This requires no feature additions — only SEO, a custom domain, and light store submission work, all of which are already scoped.

This fork was chosen because it avoids the trap of either (a) shipping a throwaway prototype that cannot scale, or (b) delaying launch indefinitely waiting for "product-ready" polish. We ship now, we build right.

---

## North Star Metric

**Levels Advanced Per Active Week**

This metric captures the only outcome that matters: is the child making measurable progress? It normalises for intermittent usage (active week, not calendar week) and rewards the adaptive engine doing its job — moving the child forward at the right pace, not just generating session time.

Secondary signal: self-initiated sessions (child opens the app without being prompted). This is a leading indicator of intrinsic motivation, which is the long-term goal.

---

## MVP Acceptance Checklist

The app is considered production-ready for Stage 2 when ALL five criteria are met:

- [ ] Epic #21 (i18n Hebrew + English) promoted to production and stable for 3 days
- [ ] Epic #34 (Progress Visualization) promoted to production
- [ ] All 16 CRITICAL safety findings from Phase 0 audit resolved
- [ ] Child self-initiates sessions on 4 or more days within any 2-week window
- [ ] Offline mode confirmed working: full session playable with airplane mode on

These criteria are the minimum bar. They are not a wishlist — every item is binary and verifiable.

---

## 6-Month OKRs

### Objective 1: Ship a complete, reliable learning experience

| Key Result | Target | Measure |
|---|---|---|
| KR 1.1 | All P0 and P1 epics promoted to production | Phase 0 + #21 + #34 + #12 (Accessibility) + #13 (UX Polish) all merged and live |
| KR 1.2 | Zero production regressions lasting more than 24 hours | Monitor via daily regression CI run |
| KR 1.3 | Offline mode passes full regression suite | Playwright test with network disabled |

### Objective 2: Sustain genuine engagement from the primary user

| Key Result | Target | Measure |
|---|---|---|
| KR 2.1 | Child advances at least 2 levels within 6 weeks of MVP launch | Track via Firestore confidence scores |
| KR 2.2 | Child self-initiates at least 4 sessions per 2-week window | Parent observation log |
| KR 2.3 | Session abandonment rate below 20% (exits before completing a round) | Firestore session events |

---

## What Is Out of Scope and Why

| Item | Decision | Reason |
|---|---|---|
| Leaderboard (Phase 8) | Eliminated | A global leaderboard rewards speed and discourages kids who are behind. This directly conflicts with the adaptive philosophy: the app should make every child feel capable at their current level, not ranked against others. |
| SEO and App Store (Phase 11) | Deferred to Stage 2, light-only | Full SEO requires SSR or pre-rendering, which adds complexity that is premature before the core experience is stable. When deferred, only basic PWA manifest optimisation is done. |
| AI Teaching Videos (Phase 10) | Deferred to P3 | Requires an image style guide (character consistency), a video generation pipeline decision (Kling/Runway/HeyGen), and Firebase Storage cost modelling. None of these are blocked on code — they are content and process decisions. The architecture already supports them; they will be added when the content is ready. |
| Superhero Theme System (Phase 5) | Deferred to P3 | Sonic theme ships at launch. Additional themes (Spiderman etc.) require full asset sets and voice lines. The architecture is theme-agnostic; adding a theme is a config + assets change. Blocked on content, not code. |
| Custom Domain | Deferred to Stage 2 | Not needed for personal use. Cost is ~$10/year. Will be added when the app opens to the public. |
| Nickname profanity filter | Deferred to Stage 2 | Not relevant while the app is private. Required before public launch. |

---

## Competitive Positioning

Math Trainer occupies a specific niche that none of the major players own: a fully offline, character-driven, adaptive trainer for early primary maths in Hebrew.

| Dimension | Khan Academy Kids | IXL Math | Prodigy Math Game | Mathway | Photomath | SplashLearn |
|---|---|---|---|---|---|---|
| **Age Range** | 2–8 | K–12 | 1–8 | Middle+High | Middle+High | Pre-K–5 |
| **Adaptive Learning** | Partial (curriculum-paced) | Yes (difficulty adapts) | Yes (quest-based) | No (lookup tool) | No (lookup tool) | Yes |
| **Offline Support** | No | No | No | No | Partial (camera) | No |
| **Gamification** | High (stickers, videos) | Low (points only) | High (RPG quests) | None | None | Medium |
| **Free Tier** | Fully free | Limited (paywalled past basics) | Free core | Free (ads) | Free (ads) | Limited free |
| **Hebrew / RTL** | No | No | No | No | No | No |
| **Math Trainer** | Ages 5–13 | Adaptive confidence engine | Offline-first PWA | Character-driven | Hebrew + English | No ads, no paywall |

Key differentiators:

1. **Offline-first.** No competitor supports full offline play. For a home tablet without reliable connectivity, this is a hard requirement, not a nice-to-have.
2. **Hebrew as a first-class language.** RTL layout, Hebrew as the default locale, profile-level language switching. No competitor in this space supports Hebrew at all.
3. **Adaptive confidence engine, not curriculum pace.** The child advances when they are genuinely ready (confidence score >= 85 for 3 consecutive sessions), not when a timer or a curriculum calendar says so.
4. **No ads, no paywall, no accounts.** Anonymous auth only (COPPA compliant). No email, no personal data, no upsell.

---

## Roadmap Summary

| Priority | Epic | Title | Status |
|---|---|---|---|
| P0 | #11 | Phase 1 — Level Config + Problem Generator | Promoted (v1.1.0) |
| P0 | #14 | Phase 2 — Confidence Engine | Complete |
| P0 | #17 | Phase 3 — Multi-Profile System | Promoted (v1.2.0) |
| P0 | #25 | Phase 6 — Learning Aids | Promoted (v1.3.0) |
| P0 | #28 | Phase 7 — Level Progression UI | Promoted (v1.4.0) |
| P0 | #117 | Phase 0 — Critical Safety + Infrastructure | Epic-complete, queued |
| P1 | #21 | Phase 4 — i18n Hebrew + English | Baking on staging |
| P1 | #33 | Phase 9 — Progress Visualization | Epic-complete, queued |
| P1 | — | Phase 12 — Accessibility + Contrast | Planned |
| P1 | — | Phase 13 — UX Polish + Pedagogical | Planned |
| P2 | — | Phase 14 — Design System Foundation | Planned |
| P2 | — | Phase 16 — Performance + Architecture | Planned |
| P3 | #23 | Phase 5 — Superhero Theme System | Deferred |
| P3 | #35 | Phase 10 — AI Teaching Videos | Deferred |
| P3 | #37 | Phase 11 — SEO + PWA + Go-to-Market | Deferred (light PWA only) |
| Eliminated | #31 | Phase 8 — Leaderboard | Eliminated |
