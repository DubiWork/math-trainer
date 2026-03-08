/**
 * Custom React hooks for Math Trainer
 *
 * Available hooks:
 * - useFirebase: Firebase authentication (anonymous auth)
 * - useGameProgress: Game progress persistence with Firestore
 * - useGameState: Game state management (score, streak, problem flow)
 * - useConfidence: Adaptive confidence scoring engine
 *
 * Future hooks:
 * - useTimer: Timer functionality for timed challenges
 * - useSound: Sound effects management
 */

export { useFirebase } from './useFirebase'
export { useGameProgress } from './useGameProgress'
export { useGameState } from './useGameState'
export { useConfidence } from './useConfidence'
