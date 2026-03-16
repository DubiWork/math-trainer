import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

/**
 * Feedback Component
 *
 * Shows animated visual feedback after answer submission.
 * Designed for a 7-year-old with hero theming - fun and encouraging!
 *
 * @param {boolean} isCorrect - Whether the answer was correct
 * @param {function} onComplete - Callback when animation finishes
 * @param {string} theme - Theme key (e.g. 'sonic', 'spiderman') — accepted for API compat, unused (messages via i18n)
 */

// Correct answer emojis (text comes from translations)
const CORRECT_EMOJIS = [
  '\u{1F994}\u{1F4A8}', // hedgehog + dash
  '\u{2B50}',           // star
  '\u{1F3AF}',          // bullseye
  '\u{1F389}',          // party popper
  '\u{1F525}',          // fire
  '\u{1F31F}',          // glowing star
  '\u{2728}',           // sparkles
  '\u{1F4AB}',          // dizzy star
]

// Wrong answer emojis (text comes from translations)
const WRONG_EMOJIS = [
  '\u{1F4AA}',  // muscle
  '\u{1F388}',  // balloon
  '\u{1F680}',  // rocket
  '\u{1F44D}',  // thumbs up
  '\u{1F308}',  // rainbow
  '\u{1F3AE}',  // game controller
]

// Animation timing constants (in ms)
const FADE_IN_DURATION = 200
const SHOW_DURATION = 1500
const FADE_OUT_DURATION = 200

function Feedback({ isCorrect, onComplete = null }) {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [message, setMessage] = useState({ text: '', emoji: '' })

  // Pick a random message based on correctness
  const pickMessage = useCallback(() => {
    const texts = isCorrect
      ? t('feedback.correct', { returnObjects: true })
      : t('feedback.wrong', { returnObjects: true })
    const emojis = isCorrect ? CORRECT_EMOJIS : WRONG_EMOJIS
    const randomIndex = Math.floor(Math.random() * texts.length)
    return { text: texts[randomIndex], emoji: emojis[randomIndex % emojis.length] }
  }, [isCorrect, t])

  useEffect(() => {
    // Pick message and start animation
    setMessage(pickMessage())
    setVisible(true)
    setFadeOut(false)

    // Start fade out after show duration
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
    }, FADE_IN_DURATION + SHOW_DURATION)

    // Call onComplete after full animation
    const completeTimer = setTimeout(() => {
      setVisible(false)
      if (onComplete) {
        onComplete()
      }
    }, FADE_IN_DURATION + SHOW_DURATION + FADE_OUT_DURATION)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(completeTimer)
    }
  }, [isCorrect, onComplete, pickMessage])

  if (!visible) {
    return null
  }

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        transition-opacity duration-200
        ${fadeOut ? 'opacity-0' : 'opacity-100'}
      `}
      aria-live="polite"
      role="status"
    >
      <div
        className={`
          flex flex-col items-center justify-center
          p-8 rounded-3xl
          ${isCorrect
            ? 'bg-gradient-to-br from-green-500 to-emerald-600 animate-feedback-correct'
            : 'bg-gradient-to-br from-orange-400 to-amber-500 animate-feedback-wrong'
          }
          shadow-2xl
          transform
          ${fadeOut ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}
          transition-all duration-200
        `}
      >
        {/* Main Icon */}
        <div className={`text-6xl md:text-7xl mb-4 ${isCorrect ? 'animate-bounce-custom' : 'animate-shake'}`}>
          {isCorrect ? '\u{2705}' : '\u{1F504}'}
        </div>

        {/* Message Text */}
        <h2
          className={`
            text-3xl md:text-4xl font-game text-white text-center
            drop-shadow-lg
            ${isCorrect ? 'animate-pulse-scale' : ''}
          `}
        >
          {message.text}
        </h2>

        {/* Emoji */}
        <span className="text-4xl md:text-5xl mt-3 animate-bounce">
          {message.emoji}
        </span>

        {/* Sparkles/Confetti for correct answers */}
        {isCorrect && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="sparkle sparkle-1">{'\u{2728}'}</div>
            <div className="sparkle sparkle-2">{'\u{2B50}'}</div>
            <div className="sparkle sparkle-3">{'\u{1F4AB}'}</div>
            <div className="sparkle sparkle-4">{'\u{1F31F}'}</div>
            <div className="sparkle sparkle-5">{'\u{2728}'}</div>
            <div className="sparkle sparkle-6">{'\u{2B50}'}</div>
          </div>
        )}
      </div>
    </div>
  )
}

Feedback.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
  theme: PropTypes.string,
}

export default Feedback
