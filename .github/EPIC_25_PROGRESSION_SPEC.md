# Progression Spec: Epic #25 -- Learning Aids

**Created:** 2026-03-11
**Sub-issues:** #26, #27
**Status:** Baking on staging (2/3 green days)
**Purpose:** Tracks e2e test coverage for this epic. After production promotion, these tests graduate to the regression suite.

## Background

Epic #25 adds a two-tier learning aid system that appears during gameplay when the confidence engine signals the child is struggling:

- **Tier 1 (visual aids):** DotCounter (levels 1-4), NumberLine (built but bypassed by `selectAid`)
- **Tier 2 (text hints):** StrategyHint with 6 strategy detectors (levels 5+)
- **Orchestrator:** LearningAid selects the correct tier, handles dismiss via "I got it!" button, auto-resets on new problem via React `key`

### Unit Test Coverage (existing)

The following unit test files already cover component logic in isolation (613 total tests across the project):

| Test File | Count | Scope |
|-----------|-------|-------|
| `src/components/aids/DotCounter.test.jsx` | 24 | Dot rendering, addition/subtraction layouts, faded dots |
| `src/components/aids/NumberLine.test.jsx` | 30 | SVG structure, arcs, ticks, aria labels |
| `src/components/aids/LearningAid.test.jsx` | 30+11 | selectAid routing, dismiss, isStruggling gate, integration |
| `src/components/aids/StrategyHint.test.jsx` | 41 | Strategy display, cycling, reset on problem change |
| `src/utils/strategies.test.js` | 74 | All 6 detectors, priority ordering, step templates, edge cases |

The progression spec below covers **e2e scenarios** that exercise these features in the context of a running app, not in isolation.

## Test Coverage

| ID | Scenario | Priority | Test File | Source | Status |
|----|----------|----------|-----------|--------|--------|
| **Orchestrator Integration** | | | | | |
| PS-1 | LearningAid container appears when confidence engine signals struggling | P0 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-2 | LearningAid does NOT appear when student is not struggling | P0 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-3 | LearningAid auto-resets (reappears) on new problem after dismiss | P1 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-4 | LearningAid renders DotCounter for levels 1-4 | P0 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-5 | LearningAid renders StrategyHint for levels 5+ | P0 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| **DotCounter (Tier 1)** | | | | | |
| PS-6 | Addition: shows num1 blue dots + operator + num2 gold dots | P0 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-7 | Subtraction: shows solid dots and faded dots with operator | P1 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-8 | Dots animate with staggered delay (60ms per dot) | P2 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-9 | Dot grid wraps at 5 dots per row | P2 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| **StrategyHint (Tier 2)** | | | | | |
| PS-10 | Strategy name and numbered steps are visible | P0 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-11 | "Show me another way" button appears when multiple strategies apply | P0 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-12 | Clicking "Show me another way" cycles to next strategy | P1 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-13 | Strategy counter shows "Strategy X of Y" | P1 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-14 | "Show me another way" button is hidden when only one strategy applies | P1 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-15 | Strategy steps never reveal the final answer (show "?" instead) | P0 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-16 | Strategy resets to first when problem changes | P1 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| PS-17 | Returns null (no hint) for * and / operators | P2 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |
| **Dismiss Behaviour** | | | | | |
| PS-18 | "I got it!" button is visible inside the aid container | P0 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-19 | Clicking "I got it!" hides the aid for the current problem | P0 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-20 | After dismiss, aid reappears on next problem if still struggling | P1 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| **Accessibility** | | | | | |
| PS-21 | DotCounter has role="img" and descriptive aria-label | P0 | `e2e/features/learning-aids-a11y.spec.js` | #26 | needs-test |
| PS-22 | StrategyHint has role="region" and descriptive aria-label | P0 | `e2e/features/learning-aids-a11y.spec.js` | #27 | needs-test |
| PS-23 | StrategyHint content area has aria-live="polite" | P1 | `e2e/features/learning-aids-a11y.spec.js` | #27 | needs-test |
| PS-24 | Individual dots have aria-hidden="true" (decorative) | P2 | `e2e/features/learning-aids-a11y.spec.js` | #26 | needs-test |
| PS-25 | "I got it!" button has aria-label="Dismiss learning aid" | P1 | `e2e/features/learning-aids-a11y.spec.js` | #26 | needs-test |
| PS-26 | "Show me another way" button has descriptive aria-label | P1 | `e2e/features/learning-aids-a11y.spec.js` | #27 | needs-test |
| **Reduced Motion** | | | | | |
| PS-27 | DotCounter dots do not animate when prefers-reduced-motion is active | P1 | `e2e/features/learning-aids-a11y.spec.js` | #26 | needs-test |
| PS-28 | LearningAid container entrance animation is disabled with reduced motion | P1 | `e2e/features/learning-aids-a11y.spec.js` | #26 | needs-test |
| PS-29 | StrategyHint step-fade animation is disabled with reduced motion | P1 | `e2e/features/learning-aids-a11y.spec.js` | #27 | needs-test |
| PS-30 | "Show me another way" button transition is disabled with reduced motion | P2 | `e2e/features/learning-aids-a11y.spec.js` | #27 | needs-test |
| **Touch Targets** | | | | | |
| PS-31 | "I got it!" button meets 44px minimum touch target height | P0 | `e2e/features/learning-aids-a11y.spec.js` | #26 | needs-test |
| PS-32 | "Show me another way" button meets 44px minimum touch target height | P0 | `e2e/features/learning-aids-a11y.spec.js` | #27 | needs-test |
| **Visual Containment** | | | | | |
| PS-33 | DotCounter container respects max-h-[120px] overflow boundary | P1 | `e2e/features/learning-aids.spec.js` | #26 | needs-test |
| PS-34 | StrategyHint container respects max-h-[160px] with overflow-y-auto | P1 | `e2e/features/learning-aids.spec.js` | #27 | needs-test |

## Test File Mapping

| File | Scenarios | Purpose |
|------|-----------|---------|
| `e2e/features/learning-aids.spec.js` | PS-1 through PS-20, PS-33, PS-34 | Functional e2e tests for aid rendering, routing, cycling, dismiss, containment |
| `e2e/features/learning-aids-a11y.spec.js` | PS-21 through PS-32 | Accessibility: ARIA, reduced motion, touch targets |

## Priority Definitions

| Priority | Meaning | Count |
|----------|---------|-------|
| P0 | Must pass before promotion to production | 11 |
| P1 | Should pass; may defer with documented risk | 16 |
| P2 | Nice to have; visual polish and animation details | 7 |

## Implementation Notes

1. **Triggering the struggling state:** E2e tests will need to answer problems incorrectly to trigger the confidence engine's `isStruggling` flag. The exact threshold depends on the useConfidence hook (consecutive wrong answers lower confidence below the struggle threshold).

2. **Level control:** GameScreen currently hardcodes `currentLevel={2}` when passing to LearningAid. E2e tests for StrategyHint (PS-5, PS-10 through PS-17) will need either a way to set the level to 5+ via the UI, or a test-only route/query param. This is a known gap.

3. **Reduced motion tests (PS-27 through PS-30):** Playwright supports `page.emulateMedia({ reducedMotion: 'reduce' })` to simulate the `prefers-reduced-motion: reduce` media query. All four components use the Tailwind `motion-reduce:` variant.

4. **Touch target measurement (PS-31, PS-32):** Use `element.boundingBox()` in Playwright to assert `height >= 44`. Both buttons use `min-h-[44px]` in Tailwind.

5. **NumberLine is built but bypassed:** The `selectAid` function in LearningAid.jsx routes levels 1-4 to DotCounter and levels 5+ to StrategyHint. NumberLine has unit tests but no e2e scenario here because it is not reachable through the orchestrator. If NumberLine is activated in a future epic, add e2e scenarios at that time.

6. **Answer not revealed:** PS-15 verifies that strategy steps use "?" instead of the actual answer. This is a critical pedagogical requirement -- the child must count/compute the answer themselves.

## Graduation Criteria

When all P0 scenarios pass on staging for 3 consecutive green days:
- Move `e2e/features/learning-aids.spec.js` and `e2e/features/learning-aids-a11y.spec.js` into the regression suite
- Promote develop to main
- Tag release

## Summary

- **Total scenarios:** 34
- **Covered (passing):** 0
- **Gaps (needs-test):** 34
- **P0 (blocking promotion):** 11
- **P1 (should-have):** 16
- **P2 (nice-to-have):** 7
