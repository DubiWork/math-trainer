/**
 * Visual learning aids for Math Trainer
 *
 * Tier 1 aids help children visualise math operations:
 * - DotCounter: Coloured dot groups for addition and subtraction
 * - NumberLine: SVG number line with animated jump arcs
 *
 * Tier 2 aids provide text-based mental math strategies:
 * - StrategyHint: Step-by-step strategy hints with cycling support
 *
 * Orchestrator:
 * - LearningAid: Selects the right aid for the current level
 */

export { default as DotCounter } from './DotCounter'
export { default as NumberLine } from './NumberLine'
export { default as StrategyHint } from './StrategyHint'
export { default as LearningAid } from './LearningAid'
