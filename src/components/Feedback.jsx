import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

/**
 * Feedback Component
 *
 * Shows animated visual feedback after answer submission.
 * Designed for a 7-year-old with Sonic theming - fun and encouraging!
 *
 * @param {boolean} isCorrect - Whether the answer was correct
 * @param {function} onComplete - Callback when animation finishes
 */

// Correct answer messages - exciting and rewarding!
const CORRECT_MESSAGES = [
  { text: 'Sonic Speed!', emoji: '🦔💨' },
  { text: 'Amazing!', emoji: '⭐' },
  { text: 'Perfect!', emoji: '🎯' },
  { text: 'Great Job!', emoji: '🎉' },
  { text: "You're on Fire!", emoji: '🔥' },
  { text: 'Super Star!', emoji: '🌟' },
  { text: 'Awesome!', emoji: '✨' },
  { text: 'Incredible!', emoji: '💫' },
]

// Wrong answer messages - gentle and encouraging!
const WRONG_MESSAGES = [
  { text: 'Try Again!', emoji: '💪' },
  { text: 'Almost There!', emoji: '🎈' },
  { text: 'Keep Going!', emoji: '🚀' },
  { text: "You've Got This!", emoji: '👍' },
  { text: 'So Close!', emoji: '🌈' },
  { text: 'One More Try!', emoji: '🎮' },
]

// Animation timing constants (in ms)
const FADE_IN_DURATION = 200
const SHOW_DURATION = 1500
const FADE_OUT_DURATION = 200

function Feedback({ isCorrect, onComplete = null }) {
  const [visible, setVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [message, setMessage] = useState({ text: '', emoji: '' })

  // Pick a random message based on correctness
  const pickMessage = useCallback(() => {
    const messages = isCorrect ? CORRECT_MESSAGES : WRONG_MESSAGES
    const randomIndex = Math.floor(Math.random() * messages.length)
    return messages[randomIndex]
  }, [isCorrect])

  useEffect(() => {
    // Pick message and start animation
    setMessage(pickMessage())
    setVisible(true)
    setFadeOut(false)

    // TODO: Play success/failure sound here
    // if (isCorrect) {
    //   playSound('success')
    // } else {
    //   playSound('tryAgain')
    // }

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
          {isCorrect ? '✅' : '🔄'}
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
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">⭐</div>
            <div className="sparkle sparkle-3">💫</div>
            <div className="sparkle sparkle-4">🌟</div>
            <div className="sparkle sparkle-5">✨</div>
            <div className="sparkle sparkle-6">⭐</div>
          </div>
        )}
      </div>
    </div>
  )
}

Feedback.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  onComplete: PropTypes.func,
}

export default Feedback
