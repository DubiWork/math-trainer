import PropTypes from 'prop-types'
import { Problem, AnswerButtons, ScoreDisplay, Feedback } from './index'
import { LearningAid } from './aids'
import { useGameState } from '../hooks'

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
 */
function GameScreen({ onGameEnd, updateProgress = null, initialProgress = null, currentLevel = 1 }) {
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
  } = useGameState({ currentLevel, updateProgress, initialProgress })

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
        <p className="text-white font-game text-2xl">Loading...</p>
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
          aria-label="Exit game and return to start screen"
        >
          Exit
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
}

export default GameScreen
