import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Problem, AnswerButtons, ScoreDisplay, Feedback } from './index'
import { LearningAid } from './aids'
import { useGameState } from '../hooks'

const STUCK_TIMEOUT_MS = 10000

/**
 * GameScreen Component - Main game interface for Math Trainer
 *
 * Composes all game components into a cohesive play experience.
 * Integrates with useGameState hook for game logic and flow.
 *
 * Features:
 * - Full-screen Sonic-themed game area
 * - Score and streak display at top
 * - Large problem display in center
 * - 2x2 grid of answer buttons
 * - Animated feedback overlay on answer
 * - Exit button to return to start screen
 *
 * @param {function} onGameEnd - Callback when user exits the game
 * @param {function} updateProgress - Optional callback for Firestore persistence
 * @param {object} initialProgress - Optional initial progress from Firestore
 * @param {number} currentLevel - Current difficulty level (1-13, default 1)
 * @param {function} onLevelUp - Optional callback when confidence engine signals level-up
 * @param {object} activeProfile - Optional active profile (provides theme)
 * @param {number} stuckTimeoutMs - Timeout before showing "Go Back" (default 10000, injectable for tests)
 */
function GameScreen({ onGameEnd, updateProgress = null, initialProgress = null, currentLevel = 1, onLevelUp, activeProfile = null, stuckTimeoutMs = STUCK_TIMEOUT_MS }) {
  const { t } = useTranslation()
  const {
    currentProblem,
    score,
    streak,
    bestStreak,
    showFeedback,
    isCorrect,
    handleAnswer,
    startGame,
    isPlaying,
    totalProblems,
    correctAnswers,
    accuracy,
    isStruggling,
    shouldLevelUp,
  } = useGameState({ currentLevel, updateProgress, initialProgress })

  // Timeout dead-end: show "Go Back" after stuckTimeoutMs of no interaction
  const [showStuck, setShowStuck] = useState(false)
  const stuckTimerRef = useRef(null)

  // Detect level-up: when confidence engine signals shouldLevelUp AND feedback
  // animation has cleared, notify the parent (App) to transition to LevelUpScreen.
  // The parent unmounts GameScreen, so no race condition with auto-advance.
  useEffect(() => {
    if (shouldLevelUp && !showFeedback && onLevelUp) {
      onLevelUp(currentLevel)
    }
  }, [shouldLevelUp, showFeedback, onLevelUp, currentLevel])

  // Start stuck timer on mount and reset whenever totalProblems changes
  // (new problem presented) or showFeedback changes (user interacted).
  useEffect(() => {
    setShowStuck(false)
    if (stuckTimerRef.current) {
      clearTimeout(stuckTimerRef.current)
    }
    stuckTimerRef.current = setTimeout(() => {
      setShowStuck(true)
    }, stuckTimeoutMs)
    return () => {
      if (stuckTimerRef.current) {
        clearTimeout(stuckTimerRef.current)
      }
    }
  }, [totalProblems, showFeedback, stuckTimeoutMs])

  // Start game automatically if not playing
  // This handles the initial mount
  if (!isPlaying) {
    startGame()
    return null // Render nothing while starting
  }

  // Safety check - should not happen but prevents crash
  if (!currentProblem) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex items-center justify-center">
        <p className="text-white font-game text-2xl">{t('game.loading')}</p>
      </div>
    )
  }

  const handleExit = () => {
    if (onGameEnd) {
      // Pass session stats to App for ResultScreen
      onGameEnd({
        score,
        streak: bestStreak,
        totalProblems,
        correctAnswers,
        accuracy,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col p-4 md:p-6 relative">
      {/* Top Bar - Score Display and Exit Button */}
      <header className="flex justify-between items-start gap-4 mb-6 md:mb-8">
        {/* Score Display */}
        <div className="flex-1">
          <ScoreDisplay score={score} streak={streak} />
        </div>

        {/* Exit Button */}
        <button
          onClick={handleExit}
          className="
            bg-sonic-red/80 hover:bg-sonic-red
            text-white font-game text-sm md:text-base
            px-4 py-2 rounded-lg
            shadow-lg
            transform transition-all duration-200
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-red-300
          "
          aria-label={t('game.exit')}
        >
          {t('game.exit')}
        </button>
      </header>

      {/* Main Game Area - Centered Problem and Answers */}
      <main className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8">
        {/* Problem Display */}
        <div className="w-full transform transition-all duration-300 ease-out">
          <Problem
            num1={currentProblem.num1}
            num2={currentProblem.num2}
            operator={currentProblem.operator}
          />
        </div>

        {/* Learning Aid - shown when child is struggling */}
        <LearningAid
          key={totalProblems}
          isStruggling={isStruggling}
          currentLevel={currentLevel}
          num1={currentProblem.num1}
          num2={currentProblem.num2}
          operator={currentProblem.operator}
        />

        {/* Answer Buttons - 2x2 Grid */}
        <div className="w-full">
          <AnswerButtons
            options={currentProblem.options}
            onAnswer={handleAnswer}
            disabled={showFeedback}
          />
        </div>
      </main>

      {/* Footer Spacer - Ensures content doesn't touch bottom */}
      <footer className="h-8 md:h-12" aria-hidden="true" />

      {/* Stuck Timeout - Non-intrusive "Go Back" escape hatch */}
      {showStuck && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          data-testid="stuck-banner"
        >
          <p className="text-white/80 font-game text-sm">{t('app.game.stuck')}</p>
          <button
            onClick={() => onGameEnd(null)}
            className="
              bg-white/20 hover:bg-white/30 text-white font-game text-sm
              px-6 py-2 rounded-full border border-white/40
              transform transition-all duration-200 hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
            data-testid="go-back-button"
          >
            {t('app.game.goBack')}
          </button>
        </div>
      )}

      {/* Feedback Overlay - Shows on answer */}
      {showFeedback && (
        <Feedback isCorrect={isCorrect} />
      )}
    </div>
  )
}

GameScreen.propTypes = {
  onGameEnd: PropTypes.func.isRequired,
  updateProgress: PropTypes.func,
  initialProgress: PropTypes.shape({
    score: PropTypes.number,
    streak: PropTypes.number,
    totalProblems: PropTypes.number,
    correctAnswers: PropTypes.number,
  }),
  currentLevel: PropTypes.number,
  onLevelUp: PropTypes.func,
  activeProfile: PropTypes.shape({
    theme: PropTypes.string,
  }),
  stuckTimeoutMs: PropTypes.number,
}

export default GameScreen
