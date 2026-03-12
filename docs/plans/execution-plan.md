# Math Trainer Execution Plan: From 40.2/100 to Working MVP

**Date:** 2026-03-12
**Input:** CEO Strategic Audit (score: 40.2/100 -- Weak)
**Author:** Solution Designer Agent
**Constraint:** Solo developer, ~10 hrs/week, 2-week sprints, max 3 stories/sprint

---

## 1. Situation Assessment

### What the Audit Got Wrong

The CEO audit was based on the handoff document from March 7, which described a project with "0% of redesigned product implemented." That was accurate on March 7. It is not accurate on March 12.

**Actual progress as of 2026-03-12:**

| Phase | Status | Issues | Tests Added |
|-------|--------|--------|-------------|
| 1 -- Level Config + Problem Generator | COMPLETE | #12, #13 | ~40 |
| 2 -- Confidence Engine | COMPLETE | #15, #16 (6 sub-issues) | ~80 |
| 3 -- Multi-Profile + PIN | COMPLETE | #18, #19, #20 (12 sub-issues) | ~180 |
| 6 -- Learning Aids (Tier 1+2) | COMPLETE | #26, #27 (7 sub-issues) | ~130 |
| 7 -- Level Progression UI | COMPLETE (on epic branch) | #28 (5 sub-issues) | ~105 |
| **Total** | **5 of 11 phases done** | **32 sub-issues closed** | **613 tests passing** |

The current codebase is not a "basic prototype." It is a functional adaptive math trainer with 13 levels, a confidence engine, multi-profile support, learning aids, and a level progression UI. The remaining work is polish and distribution, not core engine.

### What the Audit Got Right

These findings remain valid and important:

1. **CRITICAL: No monetization model.** Still true. No premium tier, no pricing, no cost modeling.
2. **HIGH: IP risk from Sonic/Spiderman.** Still true. Themes are designed but not yet implemented (Phase 5 is in backlog). This is the right time to make the IP decision.
3. **HIGH: No distribution strategy.** Still true. No landing page, no app store presence, no SEO.
4. **HIGH: Content bottleneck.** Still true. Audio files and AI videos are external blockers. AI video PM scripts failed to generate.
5. **MEDIUM: COPPA compliance.** Still true. Anonymous auth is good, but leaderboard nicknames and analytics need review.
6. **MEDIUM: Son may outgrow it.** Partially addressed -- 5 phases are done. The faster we ship what exists, the less this risk matters.

### Current Blockers

| Blocker | Severity | Notes |
|---------|----------|-------|
| Issue #93: Production regression e2e failure | P0 | Must fix before any new work |
| Epic #25 promotion PR #76 | Blocking | 3 green bake days, ready to merge to main |
| Epic #28 staging | Queued | Waiting for #25 promotion |
| i18n not built into architecture | Technical debt | Phase 4 groomed but not started |

---

## 2. Strategic Decision: Path A (Personal Tool) First, Path B (Public Product) Later

The CEO audit's top recommendation is correct: **pick a path.** The recommended answer is:

> **Path A first.** Ship a working product the founder's son uses daily within 2-3 weeks. THEN evaluate Path B based on real usage data.

This means:
- **IN:** Hebrew toggle, basic progress view, fix the regression, promote what is built
- **OUT (for now):** Monetization, landing page, app store, SEO, AI videos, leaderboard
- **DECISION DEFERRED:** Superhero theme IP, COPPA compliance, distribution strategy

The reasoning: 5 phases of core engine are done. The son can start using this product today if it ships. Spending 4 more weeks on polish before shipping is the exact anti-pattern the audit warns about.

---

## 3. Revised Phase Prioritization

### Original 11-Phase Plan vs. MVP Execution Plan

| Original Phase | Original Priority | MVP Decision | Rationale |
|---------------|-------------------|--------------|-----------|
| 1 -- Level Config | P0 | DONE | Shipped 2026-03-08 |
| 2 -- Confidence Engine | P0 | DONE | Shipped 2026-03-08 |
| 3 -- Multi-Profile | P0 | DONE | Shipped 2026-03-08 |
| 6 -- Learning Aids | P0 | DONE | Shipped 2026-03-09 |
| 7 -- Level Progression UI | P0 | DONE (needs merge) | Epic branch complete 2026-03-11 |
| **4 -- i18n Hebrew/English** | **P1** | **MVP-IN (Sprint 1)** | **Son's primary language is Hebrew** |
| **9 -- Progress View** | **P1** | **MVP-IN (Sprint 2)** | **"How am I doing?" -- minimal child view** |
| 5 -- Superhero Themes | P1 | DEFER to V2 | IP risk + content dependency. Defer until path decision |
| 8 -- Leaderboard | P1 | DEFER to V2 | Requires other users to be meaningful |
| 10 -- AI Videos | P2 | DEFER indefinitely | Highest effort, lowest impact for personal use |
| 11 -- SEO + GTM | P2 | DEFER to V2 | No value until going public |

### What "MVP" Means (Shippable in 4-6 Weeks)

The son opens the app on a phone. He sees his profile. He enters his PIN. The app is in Hebrew. He plays math at his level. The confidence engine adapts. If he struggles, visual aids appear. When he masters a level, a celebration screen plays and the next level unlocks. He can see his progress on a level map. His father can see accuracy trends and time played.

That is a complete product for a 6-year-old. Everything else is enhancement.

---

## 4. Execution Plan (4 Sprints, 8 Weeks)

### Pre-Sprint: Unblock the Pipeline (Days 1-2)

These are blocking operations that must happen before sprint work begins.

| # | Action | Est. | Existing Issue |
|---|--------|------|----------------|
| 0.1 | Fix production regression (Issue #93) | 2h | #93 |
| 0.2 | Merge Epic #25 promotion PR #76 (learning aids to main) | 30m | PR #76 |
| 0.3 | Stage Epic #28 (level progression UI) for bake | 1h | TL_STATE queue |
| 0.4 | Wait for Epic #28 bake period (3 green days) | 3 days | CI automated |
| 0.5 | Promote Epic #28 to main | 30m | -- |

**Gate:** After 0.5, `main` has Phases 1-3, 6, 7 merged. The app on production has all core features except i18n and progress view.

---

### Sprint 1: Hebrew Language (Weeks 1-2)

**Goal:** The app speaks Hebrew. RTL layout works. The son's profile defaults to Hebrew.

**Epic:** #21 -- Phase 4 -- i18n Hebrew + English
**Sub-issues (already groomed):** #87, #88, #89, #90, #91, #92

| Story | Issue | Description | Size | Sprint Slot |
|-------|-------|-------------|------|-------------|
| i18n Infrastructure | #87 | react-i18next setup, translation files, LanguageProvider | S | Week 1 |
| Profile Language + RTL | #88 | Per-profile language switching, document dir attribute | S | Week 1 |
| Core Screens Strings | #89 | Externalize all hardcoded strings in StartScreen, GameScreen, ResultScreen | M | Week 1-2 |
| Profile Components | #90 | Externalize strings in ProfileSwitcher, PinEntry, CreateProfile | S | Week 2 |
| Strategy Engine i18n | #91 | Translate strategy hint text, number line labels | S | Week 2 |
| Test Infrastructure | #92 | i18n test helpers, integration tests for RTL layout | S | Week 2 |

**Sprint capacity:** 6 sub-issues is aggressive for a 2-week sprint. Sub-issues #87-#90 are the critical path. #91 and #92 can slip to Sprint 2 if needed.

**Acceptance criteria:**
- [ ] App renders in Hebrew with RTL layout when profile language is "he"
- [ ] App renders in English with LTR layout when profile language is "en"
- [ ] All visible UI strings come from translation files (no hardcoded text)
- [ ] Profile creation lets child pick language
- [ ] Strategy hints display in profile language
- [ ] All existing tests pass + new i18n tests added

**Dependencies:** None. Phase 4 was groomed with 6 sub-issues and an execution plan.

**CEO audit alignment:** Addresses [PRD-04] "build i18n into architecture from day one" and is the single most important feature for the son's actual usage.

---

### Sprint 2: Progress View + Stabilization (Weeks 3-4)

**Goal:** The child can see "how am I doing" and the parent can see accuracy trends.

**Epic:** #33 -- Phase 9 -- Progress Visualization
**Existing issue:** #34 (Task 15: ProgressView component)

This issue needs grooming and sub-issue breakdown before sprint start. Suggested decomposition:

| Story | New Issue? | Description | Size |
|-------|-----------|-------------|------|
| Child progress view | Sub-issue of #34 | Level map with completion status, current confidence thermometer, streak display | M |
| Parent stats view | Sub-issue of #34 | Accuracy trend (7-day), time played per day, learning aids triggered | M |
| Navigation integration | Sub-issue of #34 | Add progress button to StartScreen, long-press for parent view | S |

**Scope cut from original design:**
- NO stars-per-level (criteria undefined, not needed for MVP)
- NO trend chart library -- use simple CSS bars or text stats initially
- Parent view can be basic text stats, not charts

**Acceptance criteria:**
- [ ] Child can tap a progress button on StartScreen to see level map with completion status
- [ ] Current level shows confidence thermometer (animated, color-coded)
- [ ] Best streak displayed per level
- [ ] Parent can access stats via long-press + PIN
- [ ] Parent sees: accuracy %, problems solved, time played per day (last 7 days)
- [ ] Works in both Hebrew and English

**Dependencies:** Sprint 1 (i18n) should be done so progress view ships bilingual from day one.

**Remaining Sprint 2 capacity (if i18n items slipped):** Absorb #91, #92 from Sprint 1.

---

### Sprint 3: Ship + Son Testing (Weeks 5-6)

**Goal:** Product is deployed to production. Son uses it daily. Father observes and collects feedback.

This is NOT a coding sprint. This is a validation sprint.

| # | Action | Est. | Notes |
|---|--------|------|-------|
| 3.1 | Final merge: promote Sprint 1+2 code to main | 2h | Follow bake process |
| 3.2 | Deploy to production Firebase | 30m | CD pipeline handles this |
| 3.3 | Son testing (daily, 15-20 min) | 2 weeks | Observe: what levels? where stuck? engagement? |
| 3.4 | Fix bugs found during son testing | 4-6h | Budget for 2-3 issues |
| 3.5 | Test with 2-3 other kids (friends/family) | 2h setup | Watch silently, take notes |
| 3.6 | Validate level map vs. son's textbooks | 1h | Check levels 1-7 specifically |
| 3.7 | Document findings in `docs/plans/mvp-validation-report.md` | 1h | What worked, what didn't, what's next |

**CEO audit alignment:** Directly addresses [UX-01] "test with real children", [STK-01] "ship something your son can use within 4 weeks", [STK-03] "celebrate milestones visibly."

**This sprint has minimal coding.** The developer's job is to watch, listen, and learn.

---

### Sprint 4: Decide Path + V2 Planning (Weeks 7-8)

**Goal:** Based on validation data, decide: personal project or public product. Plan accordingly.

| # | Action | Est. | Depends On |
|---|--------|------|------------|
| 4.1 | Analyze validation report from Sprint 3 | 1h | Sprint 3 complete |
| 4.2 | **PATH DECISION:** Write 1-paragraph vision statement | 30m | 4.1 |
| 4.3a | IF personal: plan confidence tuning + minor UX fixes | 2h | 4.2 |
| 4.3b | IF public: design monetization model (free vs premium tiers) | 3h | 4.2 |
| 4.4b | IF public: calculate Firebase cost ceiling at 100/1K/10K users | 2h | 4.3b |
| 4.5b | IF public: create original characters to replace Sonic/Spiderman | 4h | 4.3b |
| 4.6b | IF public: build landing page | 4h | 4.5b |
| 4.7 | Create V2 roadmap based on path decision | 2h | All above |

**CEO audit alignment:** Addresses [VIS-01] "vision ambiguity", [FIN-01] "no monetization model", [MKT-03] "IP risk", [GTM-03] "no landing page."

---

## 5. GitHub Issue Mapping

### Issues to Reuse As-Is

| Issue | Title | Sprint | Notes |
|-------|-------|--------|-------|
| #93 | Production regression | Pre-Sprint | P0 bug, fix immediately |
| #87 | #21.1: i18n Infrastructure + Translation Files | Sprint 1 | Groomed, ready |
| #88 | #21.2: Profile-Driven Language Switching + RTL Setup | Sprint 1 | Groomed, ready |
| #89 | #21.3: Externalize Strings -- Core Screens | Sprint 1 | Groomed, ready |
| #90 | #21.4: Externalize Strings -- Profile Components | Sprint 1 | Groomed, ready |
| #91 | #21.5: Strategy Engine i18n Refactoring | Sprint 1-2 | Groomed, can slip |
| #92 | #21.6: Test Infrastructure + Integration Tests | Sprint 1-2 | Groomed, can slip |
| #34 | Task 15: ProgressView component | Sprint 2 | Needs grooming + sub-issue breakdown |

### Issues to Keep Open but Explicitly Defer

| Issue | Title | Defer Until | CEO Audit Ref |
|-------|-------|-------------|---------------|
| #24 | Task 9: ThemeProvider + voice lines | V2 (post path decision) | [MKT-03] IP risk |
| #23 | Phase 5 -- Superhero Theme System | V2 | [MKT-03] IP risk |
| #32 | Task 14: Leaderboard | V2 | Needs other users |
| #31 | Phase 8 -- Leaderboard | V2 | Needs other users |
| #36 | Task 16: AI Teaching Videos | V2+ or indefinite | [PRD-02] Content bottleneck |
| #35 | Phase 10 -- AI Teaching Videos | V2+ or indefinite | [PRD-02] Content bottleneck |
| #38 | Task 17: SEO + llms.txt | V2 (post path decision) | [GTM-01] No value until public |
| #37 | Phase 11 -- SEO + GTM | V2 (post path decision) | [GTM-01] No value until public |

### Issues to Close (Already Done)

These parent issues should be closed since their sub-issues are all complete:

| Issue | Title | Reason |
|-------|-------|--------|
| #26 | Task 10: Tier 1 visual aids | All sub-issues (#63-#66) closed |
| #28 | Phase 7 -- Level Progression UI | All sub-issues (#77-#81) closed, pending merge |

*(Note: #26 and #28 may already be partially closed based on workflow state. Verify before acting.)*

### New Issues Needed

| Title | Parent | Sprint | Priority |
|-------|--------|--------|----------|
| MVP Validation: Son testing protocol | -- | Sprint 3 | P0 |
| MVP Validation: Level map vs textbook verification | -- | Sprint 3 | P1 |
| MVP Validation: Test with 3 external kids | -- | Sprint 3 | P1 |
| Path Decision: Write vision statement | -- | Sprint 4 | P0 |
| Path Decision: Monetization model (if public) | -- | Sprint 4 | P0 |
| Path Decision: Firebase cost ceiling model | -- | Sprint 4 | P1 |

Do NOT create these issues now. Create them at sprint boundary when context is fresh.

---

## 6. Dependency Graph

```
[Pre-Sprint]
  Fix #93 (regression) ──┐
  Promote Epic #25 ──────┤
                         ├──> Stage Epic #28 ──> Bake (3 days) ──> Promote #28
                         │
[Sprint 1 - i18n]        │
  #87 (infra) ───────────┤
       │                 │
       ├──> #88 (profile lang + RTL)
       │         │
       ├──> #89 (core screens) ──> #91 (strategy i18n)
       │         │
       └──> #90 (profile components) ──> #92 (test infra)
                                              │
[Sprint 2 - Progress]                         │
  #34.1 (child view) ────────────────────────>│
  #34.2 (parent view) ──> #34.3 (nav)        │
                                              │
[Sprint 3 - Ship]                             │
  Promote all to main ──> Deploy ──> Son tests│
                                              │
[Sprint 4 - Decide]                           │
  Validation report ──> Path decision ──> V2 plan
```

**Critical path:** Fix #93 --> Promote #25 --> Stage #28 --> Bake --> Promote #28 --> Sprint 1 start

**Parallel opportunity:** Sprint 1 i18n work can begin on `develop` branch while Epic #28 bakes on staging. The i18n epic creates its own epic branch from `develop`.

---

## 7. Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Regression #93 reveals deeper issue | 20% | High | Timebox to 4h. If complex, skip e2e and ship with unit tests only |
| i18n scope creep (every string needs Hebrew) | 40% | Medium | Define "good enough" list: game UI + profile UI. Defer admin/debug text |
| Son finds app boring without superhero theme | 30% | High | Add simple color theming (blue vs red) without IP-protected characters |
| Level map does not match son's school curriculum | 50% | Medium | Sprint 3 validation catches this. Levels are config-driven, easy to reorder |
| Developer burnout from 10h/week pace | 30% | Critical | Sprint 3 is intentionally light (observation, not coding). Budget slack |
| Firebase free tier exceeded during testing | 5% | Low | Current usage is negligible. Monitor Firestore reads in console |

---

## 8. What Is Explicitly NOT in This Plan

These items from the original 11-phase plan and the CEO audit are intentionally excluded:

| Item | Reason for Exclusion |
|------|---------------------|
| Superhero themes (Phase 5) | IP risk must be resolved before any theme work. Theme system is designed but not needed for personal use |
| AI Teaching Videos (Phase 10) | Highest effort, lowest impact. Content creation pipeline undefined. Defer indefinitely |
| Leaderboard (Phase 8) | Meaningless with 1 user. Build when there are 10+ active children |
| SEO + GTM (Phase 11) | No value until the path decision is made |
| Monetization model | Premature before validation. Sprint 4 addresses this |
| Landing page | Premature before path decision |
| COPPA compliance | Only relevant if going public. Sprint 4 addresses this |
| App Store submission | Only relevant if going public |
| Custom domain | Only relevant if going public |
| Voice audio files | Content dependency. Son can use app without voice lines |
| Competitive analysis (Israeli app stores) | Important but not blocking MVP. Can happen during Sprint 3 idle time |
| Daily streak / retention hook | Good idea from audit [UX-02]. Add in V2 Sprint 1 -- trivial feature, high impact |

---

## 9. Success Criteria

### MVP is "Done" When:

1. Son opens the app on a phone, in Hebrew, plays math at his level, sees progress -- all without help
2. 613+ tests passing (regression + new i18n + progress view tests)
3. Production deployment is green (CI/CD pipeline, no regression failures)
4. Father has a written validation report with observations from 2+ weeks of usage
5. A conscious, documented path decision (personal vs public) has been made

### Score Improvement Estimate

If this plan executes successfully, the CEO audit score would improve roughly as follows:

| Domain | Current | After MVP | Driver |
|--------|---------|-----------|--------|
| Vision & Clarity | 62 | 75 | Path decision documented |
| Market Position | 36 | 40 | Niche validated with real usage (minimal change) |
| Product Strategy | 55 | 80 | Scope reduced to shippable MVP, executed |
| Financial Strategy | 10 | 25 | Cost awareness, decision framework (not yet monetized) |
| Org Capacity | 58 | 70 | Shipped something with realistic scope |
| Technology | 68 | 72 | i18n built in, 700+ tests |
| UX & PMF | 50 | 70 | Real child testing, validation report |
| Go-to-Market | 20 | 25 | Minimal change (intentional -- premature until path decided) |
| Risk Management | 45 | 55 | IP decision deferred properly, regression fixed |
| Sustainability | 65 | 80 | Son using the product, motivation sustained |
| **Estimated Total** | **40.2** | **~58** | **+18 points from shipping + validating** |

The score does not reach 80+ because monetization, GTM, and distribution are intentionally deferred. That is the correct strategic choice: validate first, invest second.

---

## 10. Immediate Next Actions (For Today)

1. **Fix Issue #93** (production regression e2e failure). Read the workflow run log, identify the failing test, fix it.
2. **Merge PR #76** (Epic #25 promotion to main). Approve and merge.
3. **Stage Epic #28** (level progression UI) for bake period.
4. **Add "deferred" label** to issues #24, #23, #32, #31, #36, #35, #38, #37 with a comment: "Deferred to V2 per MVP execution plan. See docs/plans/math-trainer-execution-plan.md"
5. **Begin Sprint 1** with Issue #87 (i18n infrastructure).

---

## Appendix A: Timeline Summary

```
Week 0 (Mar 12-13):  Unblock pipeline -- fix #93, promote #25, stage #28
Week 1 (Mar 14-20):  Sprint 1a -- i18n infrastructure (#87, #88, #89)
Week 2 (Mar 21-27):  Sprint 1b -- i18n completion (#90, #91, #92)
Week 3 (Mar 28-Apr 3): Sprint 2a -- Progress view child (#34 sub-issues)
Week 4 (Apr 4-10):   Sprint 2b -- Progress view parent + polish
Week 5 (Apr 11-17):  Sprint 3a -- Ship to production, son starts testing
Week 6 (Apr 18-24):  Sprint 3b -- Observe, fix bugs, test with other kids
Week 7 (Apr 25-May 1): Sprint 4a -- Analyze validation data
Week 8 (May 2-8):    Sprint 4b -- Path decision + V2 roadmap
```

**MVP in son's hands: Week 5 (April 11)**
**Path decision: Week 8 (May 8)**

---

## Appendix B: CEO Audit Finding Disposition

| Finding ID | Severity | Disposition | When |
|-----------|----------|-------------|------|
| VIS-01 | MEDIUM | Sprint 4 -- path decision | Week 7-8 |
| VIS-02 | LOW | Sprint 4 -- vision statement | Week 7-8 |
| MKT-01 | HIGH | Accept for now. Niche focus inherent in Hebrew-first design | -- |
| MKT-02 | HIGH | Sprint 3 idle time -- search Israeli app stores | Week 5-6 |
| MKT-03 | MEDIUM | Defer themes to V2. No IP-protected content in MVP | V2 |
| MKT-04 | LOW | Acknowledged. Niche strategy is the answer | -- |
| PRD-01 | CRITICAL | THIS PLAN is the response. Scoped to 4 sprints | Now |
| PRD-02 | HIGH | Content deferred entirely. No audio/video in MVP | V2+ |
| PRD-03 | MEDIUM | Sprint 3 -- validate level map vs textbooks | Week 5-6 |
| PRD-04 | MEDIUM | Sprint 1 -- i18n built in from this point forward | Week 1-2 |
| FIN-01 | CRITICAL | Sprint 4 -- monetization model IF going public | Week 7-8 |
| FIN-02 | CRITICAL | Sprint 4 -- Firebase cost modeling IF going public | Week 7-8 |
| FIN-03 | MEDIUM | Acknowledged. Time tracking is personal discipline | Ongoing |
| ORG-01 | HIGH | THIS PLAN scopes to solo capacity | Now |
| ORG-02 | MEDIUM | Defer CONTRIBUTING.md to V2 | V2 |
| ORG-03 | MEDIUM | No content in MVP. Eliminates the skills gap for now | -- |
| TECH-01 | LOW | No action. Stack is solid | -- |
| TECH-02 | MEDIUM | Defer auth upgrade to V2. Document ADR in Sprint 4 | V2 |
| TECH-03 | LOW | Accept risk for personal use. Firestore backup in V2 | V2 |
| TECH-04 | LOW | 613 tests and growing. Healthy trajectory | Ongoing |
| UX-01 | MEDIUM | Sprint 3 -- test with real children | Week 5-6 |
| UX-02 | MEDIUM | V2 Sprint 1 -- daily streak (trivial, high impact) | V2 |
| UX-03 | LOW | Defer accessibility to V2 | V2 |
| GTM-01 | HIGH | Sprint 4 IF going public | Week 7-8 |
| GTM-02 | HIGH | V2 -- Capacitor/TWA wrapper | V2 |
| GTM-03 | MEDIUM | Sprint 4 IF going public | Week 7-8 |
| RISK-01 | HIGH | No IP content in MVP. Decision in Sprint 4 | Week 7-8 |
| RISK-02 | MEDIUM | Sprint 4 IF going public | Week 7-8 |
| RISK-03 | MEDIUM | Enable Firebase daily backups today (1-click) | Today |
| RISK-04 | LOW | Accept for personal use | -- |
| STK-01 | MEDIUM | THIS PLAN -- son uses it in 5 weeks | Week 5 |
| STK-02 | MEDIUM | Sprint 3 is intentionally light to prevent burnout | Week 5-6 |
| STK-03 | LOW | Acknowledged. Sprint 3 is "play together" time | Week 5-6 |

---

*This plan turns 14 CEO audit findings into 4 sprints of focused work. Everything that matters for a father building a math game for his son ships in 5 weeks. Everything that matters for a public product gets a decision framework in 8 weeks. Nothing is wasted -- deferred work stays in groomed GitHub issues, ready to execute when the path is clear.*
