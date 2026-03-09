/**
 * DotCounter -- Tier 1 visual aid for addition and subtraction
 *
 * Renders coloured dot groups so the child can count the answer visually.
 * The answer itself is NEVER displayed -- the child counts it themselves.
 *
 * Addition (+):
 *   - `num1` dots in sonic.blue, a "+" label, then `num2` dots in sonic.gold
 *   - Staggered fill animation (each dot delayed by 50 ms)
 *
 * Subtraction (-):
 *   - `num1` total dots in sonic.blue
 *   - The last `num2` dots are faded (opacity-50) to represent removal
 *   - A "-" label is shown
 *
 * @param {Object} props
 * @param {number} props.num1      Left operand
 * @param {number} props.num2      Right operand
 * @param {string} props.operator  '+' or '-'
 */

import PropTypes from 'prop-types'

/** Maximum dots per row before wrapping */
const DOTS_PER_ROW = 5

/**
 * Renders a single dot circle.
 *
 * @param {Object}  params
 * @param {string}  params.color   Tailwind bg-color class
 * @param {boolean} params.faded   Whether the dot is semi-transparent
 * @param {number}  params.index   Sequential index used for staggered delay
 * @param {string}  params.testId  data-testid value
 */
function Dot({ color, faded, index, testId }) {
  return (
    <span
      className={`
        inline-block rounded-full
        w-6 h-6 md:w-8 md:h-8
        ${color}
        ${faded ? 'opacity-50' : ''}
        animate-aid-enter motion-reduce:animate-none
      `}
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
      aria-hidden="true"
      data-testid={testId}
    />
  )
}

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  faded: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  testId: PropTypes.string.isRequired,
}

/**
 * Renders a group of dots wrapped in rows of {@link DOTS_PER_ROW}.
 */
function DotGroup({ count, color, faded, startIndex, testIdPrefix }) {
  return (
    <div className="flex flex-wrap gap-2" data-testid={`${testIdPrefix}-group`}>
      {Array.from({ length: count }).map((_, i) => (
        <Dot
          key={i}
          color={color}
          faded={faded}
          index={startIndex + i}
          testId={`${testIdPrefix}-dot-${i}`}
        />
      ))}
    </div>
  )
}

DotGroup.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  faded: PropTypes.bool.isRequired,
  startIndex: PropTypes.number.isRequired,
  testIdPrefix: PropTypes.string.isRequired,
}

// ── Main Component ──────────────────────────────────────────────────────────

function DotCounter({ num1, num2, operator }) {
  if (operator === '+') {
    return (
      <div
        className="flex flex-wrap items-center gap-3"
        role="img"
        aria-label={`${num1} plus ${num2}`}
        data-testid="dot-counter"
      >
        {/* num1 group in sonic.blue */}
        <DotGroup
          count={num1}
          color="bg-sonic-blue"
          faded={false}
          startIndex={0}
          testIdPrefix="num1"
        />

        {/* Operator label */}
        <span
          className="text-2xl md:text-3xl font-game text-white drop-shadow-md select-none"
          aria-hidden="true"
          data-testid="operator-label"
        >
          +
        </span>

        {/* num2 group in sonic.gold */}
        <DotGroup
          count={num2}
          color="bg-sonic-gold"
          faded={false}
          startIndex={num1}
          testIdPrefix="num2"
        />
      </div>
    )
  }

  // ── Subtraction ──────────────────────────────────────────────────────
  // Show num1 total dots. The last num2 dots are faded.
  const solidCount = num1 - num2
  return (
    <div
      className="flex flex-wrap items-center gap-3"
      role="img"
      aria-label={`${num1} minus ${num2}`}
      data-testid="dot-counter"
    >
      {/* Solid dots (remaining after subtraction) */}
      <DotGroup
        count={solidCount}
        color="bg-sonic-blue"
        faded={false}
        startIndex={0}
        testIdPrefix="solid"
      />

      {/* Operator label */}
      <span
        className="text-2xl md:text-3xl font-game text-white drop-shadow-md select-none"
        aria-hidden="true"
        data-testid="operator-label"
      >
        -
      </span>

      {/* Faded dots (the ones being subtracted) */}
      <DotGroup
        count={num2}
        color="bg-sonic-blue"
        faded={true}
        startIndex={solidCount}
        testIdPrefix="faded"
      />
    </div>
  )
}

DotCounter.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-']).isRequired,
}

export default DotCounter
