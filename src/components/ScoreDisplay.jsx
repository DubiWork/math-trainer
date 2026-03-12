import PropTypes from 'prop-types'
import { getTheme } from '../config/themes'

/**
 * ScoreDisplay Component - Shows score and streak in Sonic theme
 *
 * Displays the current score and streak with animated numbers
 * and Sonic-themed visuals. Uses emojis for fun appeal to 7-year-olds.
 *
 * @param {number} score - Current game score
 * @param {number} streak - Current correct answer streak
 */
function ScoreDisplay({ score, streak, theme: themeKey = null }) {
  const themeObj = getTheme(themeKey)

  // Determine streak emoji based on streak count
  const getStreakEmoji = () => {
    if (streak >= 10) return { emoji: '\u{1F525}', label: 'On Fire!' }  // Fire
    if (streak >= 5) return { emoji: '\u{26A1}', label: 'Lightning!' }  // Lightning
    if (streak >= 3) return { emoji: themeObj.streakEmoji, label: 'Speedy!' }
    return { emoji: '\u{2B50}', label: 'Keep going!' }                  // Star
  }

  const streakInfo = getStreakEmoji()

  return (
    <div
      className="flex justify-between items-center w-full max-w-md mx-auto
                 bg-black/30 rounded-xl p-4 md:p-5"
      role="status"
      aria-label={`Score: ${score}, Streak: ${streak}`}
    >
      {/* Score Section */}
      <div className="text-center flex-1">
        <p className="text-sm md:text-base text-white/70 font-game uppercase tracking-wide">
          Score
        </p>
        <p
          className="text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                     transition-all duration-300"
          aria-live="polite"
        >
          {score}
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-white/20 mx-4" aria-hidden="true" />

      {/* Streak Section */}
      <div className="text-center flex-1">
        <p className="text-sm md:text-base text-white/70 font-game uppercase tracking-wide">
          Streak
        </p>
        <div className="flex items-center justify-center gap-2">
          <p
            className={`text-3xl md:text-4xl font-game text-sonic-gold drop-shadow-md
                       transition-all duration-300
                       ${streak > 0 ? 'animate-bounce' : ''}`}
            aria-live="polite"
          >
            {streak}
          </p>
          {streak > 0 && (
            <span
              className="text-2xl md:text-3xl transition-transform duration-300"
              aria-label={streakInfo.label}
              role="img"
            >
              {streakInfo.emoji}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  streak: PropTypes.number.isRequired,
  theme: PropTypes.string,
}

export default ScoreDisplay
