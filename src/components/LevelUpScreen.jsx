/**
 * LevelUpScreen -- Celebration screen when player completes a level
 *
 * Shown as a full-screen state in App.jsx's state machine (peer to
 * 'start', 'game', 'result'). Displays celebration animation,
 * completed level info, and a CTA to continue to the next level.
 *
 * Visual MVP: emoji hero + CSS confetti particles, no audio.
 *
 * @param {Object}   props
 * @param {number}   props.completedLevel  The level just completed (1-13)
 * @param {Function} props.onContinue      Callback when user clicks Continue
 */

import PropTypes from 'prop-types'
import { LEVELS } from '../config/levels'

/** Number of confetti particles to render */
const CONFETTI_COUNT = 12

/** Confetti color palette */
const CONFETTI_COLORS = [
  'bg-yellow-400',
  'bg-pink-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-purple-400',
  'bg-red-400',
]

function LevelUpScreen({ completedLevel, onContinue }) {
  const completedLevelConfig = LEVELS[completedLevel - 1]
  const isMaxLevel = completedLevel >= LEVELS.length
  const nextLevelConfig = isMaxLevel ? null : LEVELS[completedLevel]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti particles (pure CSS animation) */}
      {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
        <span
          key={i}
          data-testid="confetti-particle"
          className={`
            absolute w-3 h-3 rounded-full
            ${CONFETTI_COLORS[i % CONFETTI_COLORS.length]}
            animate-confetti-fall motion-reduce:hidden
            opacity-80
          `}
          style={{
            left: `${8 + (i * 84) / CONFETTI_COUNT}%`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: `${1.5 + (i % 3) * 0.5}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Hero emoji with bounce animation */}
      <div
        data-testid="hero-emoji"
        className="text-7xl md:text-8xl mb-4 animate-bounce-hero motion-reduce:animate-none"
        aria-hidden="true"
      >
        🚀
      </div>

      {/* Screen-reader announcement */}
      <div role="status" aria-live="polite" className="sr-only">
        Level complete! You finished {completedLevelConfig?.name}.
        {nextLevelConfig ? ` Next up: ${nextLevelConfig.name}.` : ' You have completed all levels!'}
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center mb-2">
        Level Complete!
      </h1>

      {/* Completed level name */}
      <p className="text-xl md:text-2xl font-game text-white text-center mb-1">
        {completedLevelConfig?.name}
      </p>

      {/* Next level subheading */}
      {nextLevelConfig && (
        <p className="text-lg md:text-xl font-game text-yellow-200 text-center mb-8">
          Next: {nextLevelConfig.name}
        </p>
      )}

      {/* Spacer when no next level */}
      {!nextLevelConfig && <div className="mb-8" />}

      {/* Continue CTA button */}
      <button
        onClick={onContinue}
        className="
          min-h-[44px] px-8 py-4
          bg-sonic-gold text-sonic-blue font-game text-xl md:text-2xl
          rounded-full shadow-lg
          transform transition-all duration-200
          hover:bg-yellow-400 hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-yellow-300
        "
        aria-label={
          isMaxLevel
            ? 'Continue playing'
            : `Continue to Level ${completedLevel + 1}`
        }
      >
        {isMaxLevel
          ? 'Keep Playing!'
          : `Continue to Level ${completedLevel + 1}!`}
      </button>

      {/* Audio placeholder for future audio hook */}
      <span data-testid="audio-placeholder" aria-hidden="true" />
    </div>
  )
}

LevelUpScreen.propTypes = {
  completedLevel: PropTypes.number.isRequired,
  onContinue: PropTypes.func.isRequired,
}

export default LevelUpScreen
