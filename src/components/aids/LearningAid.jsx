/**
 * LearningAid -- Orchestrator for visual learning aids
 *
 * Selects and renders the appropriate visual aid based on the current level
 * and the child's struggling state. Aids are only shown when the confidence
 * engine signals that the child is struggling.
 *
 * Level routing:
 *   - Levels 1-4  -> DotCounter (coloured dot groups)
 *   - Levels 5+   -> StrategyHint (text-based mental math strategies)
 *
 * Dismiss behaviour:
 *   - "I got it!" button hides the aid for the current problem
 *   - Auto-resets when the parent supplies a new React `key` (new problem)
 *
 * @param {Object}         props
 * @param {boolean}        props.isStruggling  Whether the confidence engine signals struggle
 * @param {number}         props.currentLevel  Current difficulty level (1-13)
 * @param {number}         props.num1          Left operand
 * @param {number}         props.num2          Right operand
 * @param {'+' | '-' | '*' | '/'}  props.operator  Arithmetic operator
 */

import { useState } from 'react'
import PropTypes from 'prop-types'
import DotCounter from './DotCounter'
import StrategyHint from './StrategyHint'

/** Maximum level that shows the DotCounter aid */
const DOT_COUNTER_MAX_LEVEL = 4

/** Operators that DotCounter and NumberLine support */
const VISUAL_AID_OPERATORS = new Set(['+', '-'])

/**
 * Select the aid component for a given level and operator.
 *
 * DotCounter (levels 1-4) only supports + and -. For * and / operators
 * at those levels, fall through to StrategyHint instead.
 *
 * @param {number} level
 * @param {string} operator - '+', '-', '*', or '/'
 * @returns {Function|null} React component or null
 */
function selectAid(level, operator) {
  if (level >= 1 && level <= DOT_COUNTER_MAX_LEVEL && VISUAL_AID_OPERATORS.has(operator)) {
    return DotCounter
  }
  // Levels 5+ always use StrategyHint; levels 1-4 with * or / also fall through here
  if (level >= 1) {
    return StrategyHint
  }
  return null
}

function LearningAid({ isStruggling, currentLevel, num1, num2, operator }) {
  const [dismissed, setDismissed] = useState(false)

  // Nothing to show if not struggling or dismissed
  if (!isStruggling || dismissed) {
    return null
  }

  const AidComponent = selectAid(currentLevel, operator)

  // No aid available for this level tier
  if (!AidComponent) {
    return null
  }

  return (
    <div
      className="
        flex flex-col max-h-[50vh]
        bg-black/20 backdrop-blur-sm rounded-2xl p-3
        animate-aid-enter motion-reduce:animate-none
      "
      data-testid="learning-aid-container"
    >
      <div className="flex-1 overflow-y-auto min-h-0">
        <AidComponent num1={num1} num2={num2} operator={operator} />
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="
          mt-2 w-full min-h-[44px] shrink-0
          bg-sonic-gold hover:bg-yellow-400
          text-black font-game text-base
          rounded-xl shadow-md
          transform transition-all duration-200
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-yellow-300
        "
        aria-label="Dismiss learning aid"
        data-testid="dismiss-aid-button"
      >
        I got it!
      </button>
    </div>
  )
}

LearningAid.propTypes = {
  isStruggling: PropTypes.bool.isRequired,
  currentLevel: PropTypes.number.isRequired,
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-', '*', '/']).isRequired,
}

export default LearningAid
