import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

/**
 * ResultScreen Component - End-of-game summary screen
 *
 * Displays game results with a celebratory, Sonic-themed design.
 * Shows session statistics and provides options to play again or exit.
 *
 * Features:
 * - Celebratory "Great Job!" message
 * - Session statistics (score, streak, accuracy, problems completed)
 * - Performance-based encouraging messages
 * - "Play Again" (primary) and "Back to Start" (secondary) buttons
 *
 * @param {object} sessionStats - Statistics from the completed game session
 * @param {number} sessionStats.score - Points earned this session
 * @param {number} sessionStats.streak - Best streak achieved
 * @param {number} sessionStats.totalProblems - Total problems attempted
 * @param {number} sessionStats.correctAnswers - Number of correct answers
 * @param {number} sessionStats.accuracy - Accuracy percentage (0-100)
 * @param {function} onPlayAgain - Callback when user wants to play again
 * @param {function} onExit - Callback when user wants to go back to start
 */
function ResultScreen({ sessionStats, onPlayAgain, onExit }) {
  const { t } = useTranslation()

  // Destructure stats with defaults
  const {
    score = 0,
    streak = 0,
    totalProblems = 0,
    correctAnswers = 0,
    accuracy = 0,
  } = sessionStats || {}

  // Determine performance message based on accuracy
  const getPerformanceMessage = () => {
    if (accuracy >= 80) {
      return {
        text: t('result.performance.high'),
        emoji: '\u{1F994}\u{1F4A8}', // hedgehog + dash
        color: 'text-green-400',
      }
    }
    if (accuracy >= 50) {
      return {
        text: t('result.performance.medium'),
        emoji: '\u{2B50}', // star
        color: 'text-sonic-gold',
      }
    }
    return {
      text: t('result.performance.low'),
      emoji: '\u{1F4AA}', // muscle
      color: 'text-orange-400',
    }
  }

  const performance = getPerformanceMessage()

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Celebratory Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Confetti-like stars */}
        <div className="absolute top-10 left-8 text-3xl animate-bounce opacity-60">*</div>
        <div className="absolute top-16 right-12 text-4xl animate-pulse opacity-50">*</div>
        <div className="absolute top-32 left-20 text-2xl animate-bounce opacity-40">*</div>
        <div className="absolute bottom-40 right-20 text-4xl animate-pulse opacity-50">*</div>
        <div className="absolute bottom-24 left-12 text-3xl animate-bounce opacity-60">*</div>
        <div className="absolute top-48 right-8 text-2xl animate-pulse opacity-40">*</div>
      </div>

      {/* Main Content Container */}
      <div className="z-10 text-center max-w-lg w-full">
        {/* Main Celebration Title */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-2 animate-pulse-scale"
        >
          {t('result.title')}
        </h1>

        {/* Celebration Emoji */}
        <div className="text-5xl md:text-6xl mb-6">
          <span role="img" aria-label="party">&#x1F389;</span>
        </div>

        {/* Performance Message */}
        <p className={`text-xl md:text-2xl font-game ${performance.color} mb-6 drop-shadow-md`}>
          {performance.text}{' '}
          <span role="img" aria-label="performance icon">{performance.emoji}</span>
        </p>

        {/* Stats Container */}
        <div
          className="bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm"
          role="status"
          aria-label={`Session stats: ${score} points, ${streak} streak, ${accuracy}% accuracy`}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Score */}
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                {t('result.points')}
              </p>
              <p className="text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md">
                {score}
              </p>
            </div>

            {/* Streak */}
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                {t('result.bestStreak')}
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md">
                  {streak}
                </p>
                {streak >= 3 && (
                  <span className="text-2xl" role="img" aria-label="fire">&#x1F525;</span>
                )}
              </div>
            </div>

            {/* Accuracy */}
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                {t('result.accuracy')}
              </p>
              <p className="text-3xl md:text-4xl font-game text-white drop-shadow-md">
                {Math.round(accuracy)}%
              </p>
            </div>

            {/* Problems Completed */}
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                {t('result.problems')}
              </p>
              <p className="text-3xl md:text-4xl font-game text-white drop-shadow-md">
                {correctAnswers}/{totalProblems}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          {/* Play Again - Primary Button */}
          <button
            onClick={onPlayAgain}
            className="
              bg-gradient-to-r from-sonic-gold to-yellow-400
              text-blue-900 font-game text-2xl md:text-3xl
              px-10 py-5 rounded-2xl w-full
              shadow-lg shadow-yellow-500/50
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/60
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              animate-pulse-scale
            "
            aria-label={t('result.playAgain')}
          >
            {t('result.playAgain')}
          </button>

          {/* Back to Start - Secondary Button */}
          <button
            onClick={onExit}
            className="
              bg-white/20 hover:bg-white/30
              text-white font-game text-lg md:text-xl
              px-8 py-4 rounded-xl w-full
              shadow-md
              transform transition-all duration-300
              hover:scale-105
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
            aria-label={t('result.backToStart')}
          >
            {t('result.backToStart')}
          </button>
        </div>

        {/* Encouraging Footer */}
        <p className="text-lg font-game text-white/60 mt-8">
          {t('result.footer')}{' '}
          <span role="img" aria-label="trophy">&#x1F3C6;</span>
        </p>
      </div>
    </div>
  )
}

ResultScreen.propTypes = {
  sessionStats: PropTypes.shape({
    score: PropTypes.number,
    streak: PropTypes.number,
    totalProblems: PropTypes.number,
    correctAnswers: PropTypes.number,
    accuracy: PropTypes.number,
  }).isRequired,
  onPlayAgain: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
}

export default ResultScreen
