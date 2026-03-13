/**
 * LevelUpScreen -- Celebration screen when player completes a level
 *
 * Shown as a full-screen state in App.jsx's state machine (peer to
 * 'start', 'game', 'result'). Displays celebration animation,
 * completed level info, and a CTA to continue to the next level.
 *
 * When the player completes the final level (MAX_LEVEL), a special
 * "Champion" variant is shown with a trophy emoji, a distinct title,
 * and a "Play Again at Level 13!" button that does NOT increment.
 *
 * Visual MVP: emoji hero + CSS confetti particles, no audio.
 *
 * @param {Object}   props
 * @param {number}   props.completedLevel  The level just completed (1-13)
 * @param {Function} props.onContinue      Callback when user clicks Continue
 */

import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { LEVELS, MAX_LEVEL } from '../config/levels'

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
  const { t } = useTranslation()
  const completedLevelConfig = LEVELS[completedLevel - 1]
  const isChampion = completedLevel >= MAX_LEVEL
  const nextLevelConfig = isChampion ? null : LEVELS[completedLevel]

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

      {/* Hero emoji with bounce animation -- trophy for champion, rocket otherwise */}
      <div
        data-testid="hero-emoji"
        className="text-7xl md:text-8xl mb-4 animate-bounce-hero motion-reduce:animate-none"
        aria-hidden="true"
      >
        {isChampion ? '\uD83C\uDFC6' : '\uD83D\uDE80'}
      </div>

      {/* Screen-reader announcement */}
      <div role="status" aria-live="polite" className="sr-only">
        {isChampion
          ? t('levelup.srChampion', { count: MAX_LEVEL })
          : t('levelup.srComplete', { completed: completedLevelConfig?.name, next: nextLevelConfig?.name })}
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center mb-2">
        {isChampion ? t('levelup.mathChampion') : t('levelup.levelComplete')}
      </h1>

      {/* Sub-message */}
      <p className="text-xl md:text-2xl font-game text-white text-center mb-1">
        {isChampion
          ? t('levelup.masteredAll', { count: MAX_LEVEL })
          : completedLevelConfig?.name}
      </p>

      {/* Next level subheading (normal flow only) */}
      {nextLevelConfig && (
        <p className="text-lg md:text-xl font-game text-yellow-200 text-center mb-8">
          {t('levelup.next', { name: nextLevelConfig.name })}
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
          isChampion
            ? t('levelup.playAgainAtLevel', { level: MAX_LEVEL })
            : t('levelup.continueToLevel', { level: completedLevel + 1 })
        }
      >
        {isChampion
          ? t('levelup.playAgainButton', { level: MAX_LEVEL })
          : t('levelup.continueButton', { level: completedLevel + 1 })}
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
