/**
 * StrategyHint -- Tier 2 text-based learning aid for mental math strategies
 *
 * Renders step-by-step strategy hints that guide the child through
 * mental math techniques. Supports cycling through multiple applicable
 * strategies via a "Show me another way" button.
 *
 * The answer is NEVER displayed -- steps use "?" instead.
 *
 * Returns null for * and / operators (no strategies available).
 *
 * Steps are received as { key, params } objects from the strategy engine.
 * Translation is performed here at the component level using t().
 *
 * @param {Object} props
 * @param {number} props.num1      Left operand
 * @param {number} props.num2      Right operand
 * @param {string} props.operator  '+', '-', '*', or '/'
 */

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { getStrategies } from '../../utils/strategies'

/**
 * Resolve a step to a translated string.
 * Handles both { key, params } objects (new format) and plain strings (legacy).
 */
function resolveStep(step, t) {
  if (typeof step === 'string') {
    return step
  }
  if (step && typeof step === 'object' && step.key) {
    return t(step.key, step.params)
  }
  return String(step)
}

function StrategyHint({ num1, num2, operator }) {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset to first strategy when the problem changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [num1, num2, operator])

  const strategies = getStrategies(num1, num2, operator)

  if (strategies.length === 0) {
    return null
  }

  // Clamp index to valid range (guards the render before useEffect resets)
  const safeIndex = currentIndex < strategies.length ? currentIndex : 0
  const strategy = strategies[safeIndex]
  const hasMultiple = strategies.length > 1

  function handleCycle() {
    setCurrentIndex((prev) => (prev + 1) % strategies.length)
  }

  const strategyName = t(strategy.nameKey)

  return (
    <div
      className="flex max-h-[160px] flex-col gap-2 overflow-y-auto text-start"
      role="region"
      aria-label={t('strategy.hintFor', { num1, operator, num2 })}
      data-testid="strategy-hint"
    >
      {/* Strategy content area with live updates */}
      <div aria-live="polite">
        {/* Strategy name */}
        <p className="text-sonic-gold font-game text-base font-bold">
          {strategyName}
        </p>

        {/* Numbered steps */}
        <ol className="mt-1 flex list-none flex-col gap-1 ps-0">
          {strategy.steps.map((step, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-white animate-step-fade motion-reduce:animate-none"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sonic-gold/30 text-xs font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span dir="ltr">{resolveStep(step, t)}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Strategy counter and cycle button */}
      <div className="mt-1 flex items-center justify-between">
        <span className="text-xs text-white/60">
          {t('strategy.counter', { current: safeIndex + 1, total: strategies.length })}
        </span>

        {hasMultiple && (
          <button
            type="button"
            className="min-h-[44px] rounded-lg bg-white/15 px-3 py-2 text-sm text-white transition-colors hover:bg-white/25 motion-reduce:transition-none"
            onClick={handleCycle}
            aria-label={t('strategy.showAnotherLabel')}
          >
            {t('strategy.showAnother')}
          </button>
        )}
      </div>
    </div>
  )
}

StrategyHint.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-', '*', '/']).isRequired,
}

export default StrategyHint
