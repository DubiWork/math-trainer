/**
 * LearningAid -- Orchestrator for visual learning aids
 *
 * Selects and renders the appropriate visual aid based on the current level
 * config and the child's struggling state. Aids are only shown when the
 * confidence engine signals that the child is struggling.
 *
 * Aid routing (grade/operationType-based):
 *   - Grade 1 + integer-arithmetic + only +/- operators -> DotCounter
 *   - All other configurations                          -> StrategyHint
 *
 * Dismiss behaviour:
 *   - "I got it!" button hides the aid for the current problem
 *   - Auto-resets when the parent supplies a new React `key` (new problem)
 *
 * @param {Object}         props
 * @param {boolean}        props.isStruggling   Whether the confidence engine signals struggle
 * @param {Object}         [props.levelConfig]  Full level config object (preferred)
 * @param {number}         [props.currentLevel] Fallback level number (resolved via getLevelConfig)
 * @param {number}         props.num1           Left operand
 * @param {number}         props.num2           Right operand
 * @param {'+' | '-' | '*' | '/'}  props.operator  Arithmetic operator
 */

import { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import DotCounter from './DotCounter'
import StrategyHint from './StrategyHint'
import { getLevelConfig } from '../../config/levels'

/**
 * Select the aid component based on level config properties.
 *
 * Grade 1 integer-arithmetic levels that only use + and - operators
 * show the DotCounter visual aid. Everything else uses StrategyHint.
 *
 * @param {Object} levelConfig - Full level configuration object
 * @returns {Function} React component (DotCounter or StrategyHint)
 */
function selectAid(levelConfig) {
  if (
    levelConfig.grade === 1 &&
    levelConfig.operationType === 'integer-arithmetic' &&
    levelConfig.operators.every((op) => ['+', '-'].includes(op))
  ) {
    return DotCounter
  }
  return StrategyHint
}

function LearningAid({ isStruggling, levelConfig, currentLevel, num1, num2, operator }) {
  const { t } = useTranslation()
  const [dismissed, setDismissed] = useState(false)

  // Nothing to show if not struggling or dismissed
  if (!isStruggling || dismissed) {
    return null
  }

  // Resolve level config: prefer explicit prop, fall back to level number
  const resolvedConfig = levelConfig ?? getLevelConfig(currentLevel)

  const AidComponent = selectAid(resolvedConfig)

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
        aria-label={t('learningAid.dismissLabel')}
        data-testid="dismiss-aid-button"
      >
        {t('learningAid.dismiss')}
      </button>
    </div>
  )
}

LearningAid.propTypes = {
  isStruggling: PropTypes.bool.isRequired,
  levelConfig: PropTypes.shape({
    grade: PropTypes.number.isRequired,
    operationType: PropTypes.string.isRequired,
    operators: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  currentLevel: PropTypes.number,
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-', '*', '/']).isRequired,
}

export default LearningAid
