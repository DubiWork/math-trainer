import PropTypes from 'prop-types'

/**
 * AnswerButtons Component - Grid of answer options in Sonic theme
 *
 * Displays 4 large, touch-friendly answer buttons with Sonic gold styling.
 * Designed for 7-year-old children with large tap targets.
 *
 * @param {number[]} options - Array of 4 answer options
 * @param {function} onAnswer - Callback when an answer is selected
 * @param {boolean} disabled - Whether buttons are disabled (during feedback)
 */
function AnswerButtons({ options, onAnswer, disabled = false }) {
  const handleClick = (answer) => {
    if (!disabled) {
      onAnswer(answer)
    }
  }

  const handleKeyDown = (event, answer) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick(answer)
    }
  }

  return (
    <div
      className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto mt-6"
      role="group"
      aria-label="Answer Options"
    >
      {options.map((answer, index) => (
        <button
          key={`answer-${index}-${answer}`}
          onClick={() => handleClick(answer)}
          onKeyDown={(e) => handleKeyDown(e, answer)}
          disabled={disabled}
          className={`
            bg-sonic-gold text-sonic-blue font-game
            text-3xl md:text-4xl
            py-6 md:py-8 px-4
            rounded-xl shadow-lg
            transform transition-all duration-200
            select-none
            ${
              disabled
                ? 'opacity-50 cursor-not-allowed'
                : `hover:bg-yellow-400 hover:scale-105
                   active:scale-95 active:bg-yellow-500
                   focus:outline-none focus:ring-4 focus:ring-yellow-300`
            }
          `}
          aria-label={`Answer: ${answer}`}
        >
          {answer}
        </button>
      ))}
    </div>
  )
}

AnswerButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAnswer: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default AnswerButtons
