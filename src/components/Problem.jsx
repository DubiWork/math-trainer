import PropTypes from 'prop-types'

/**
 * Problem Component - Displays a math problem in Sonic theme
 *
 * Shows the math problem (e.g., "5 + 3 = ?") with large, readable text
 * on a Sonic blue background. Designed for 7-year-old readability.
 *
 * @param {number} num1 - First number in the problem
 * @param {number} num2 - Second number in the problem
 * @param {string} operator - Math operator (+, -, x, etc.)
 */
function Problem({ num1, num2, operator }) {
  return (
    <section
      className="bg-sonic-blue rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto"
      aria-label="Math Problem"
    >
      <div className="text-center">
        <p
          className="text-4xl md:text-6xl font-game text-white tracking-wide
                     drop-shadow-md select-none"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="inline-block mx-2">{num1}</span>
          <span className="inline-block mx-2 text-sonic-gold">{operator}</span>
          <span className="inline-block mx-2">{num2}</span>
          <span className="inline-block mx-2">=</span>
          <span className="inline-block mx-2 text-sonic-gold animate-pulse">?</span>
        </p>
      </div>
    </section>
  )
}

Problem.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired,
}

export default Problem
