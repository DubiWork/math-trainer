/**
 * NumberLine -- Tier 1 visual aid for addition and subtraction
 *
 * Renders an SVG number line with animated jump arcs so the child can
 * count their way to the answer visually.
 * The answer itself is NEVER displayed -- only a "?" marker.
 *
 * Addition (+):
 *   - Start marker (sonic.blue dot) at `num1`
 *   - Jump arcs going RIGHT from `num1` by `num2` unit steps
 *   - "?" at the answer position
 *
 * Subtraction (-):
 *   - Start marker (sonic.blue dot) at `num1`
 *   - Jump arcs going LEFT from `num1` by `num2` unit steps
 *   - "?" at the answer position
 *
 * @param {Object} props
 * @param {number} props.num1      Left operand
 * @param {number} props.num2      Right operand
 * @param {string} props.operator  '+' or '-'
 */

import PropTypes from 'prop-types'

// ── Layout Constants ─────────────────────────────────────────────────────────

/** Left/right padding inside the SVG (px) */
const PADDING_X = 24

/** SVG viewBox height */
const VIEWBOX_HEIGHT = 120

/** Y position of the number line */
const LINE_Y = 85

/** Height of a normal tick mark */
const TICK_HEIGHT = 8

/** Height of a major tick mark (0, 5, 10, 15, 20) */
const MAJOR_TICK_HEIGHT = 14

/** Radius of the start-position dot */
const DOT_RADIUS = 6

/** Arc height (peak above the line) in px */
const ARC_HEIGHT = 22

/** Staggered delay between arcs (ms) */
const ARC_DELAY_MS = 100

/** Stroke dash length for arc-draw animation */
const ARC_DASH_LENGTH = 60

// ── Colour Tokens ────────────────────────────────────────────────────────────

const COLOR_LINE = '#666666'
const COLOR_TICK = '#999999'
const COLOR_SONIC_BLUE = '#0066cc'
const COLOR_SONIC_GOLD = '#ffd700'

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Calculate the maximum value shown on the number line.
 * Ensures the scale covers at least 0..20 and fits the answer.
 */
function getMaxValue(num1, num2, operator) {
  const answer = operator === '+' ? num1 + num2 : num1 - num2
  return Math.max(num1, num1 + num2, answer, 20)
}

/**
 * Return true when `n` is a major tick (0, 5, 10, 15, ...).
 */
function isMajorTick(n) {
  return n % 5 === 0
}

/**
 * Convert a number-line value to an x-coordinate within the viewBox.
 */
function valueToX(value, maxValue, viewBoxWidth) {
  const usable = viewBoxWidth - 2 * PADDING_X
  return PADDING_X + (value / maxValue) * usable
}

/**
 * Build an SVG quadratic-bezier arc path between two x-positions.
 * The arc bulges upward (lower y) above LINE_Y.
 */
function arcPath(x1, x2) {
  const midX = (x1 + x2) / 2
  const peakY = LINE_Y - ARC_HEIGHT
  return `M ${x1} ${LINE_Y} Q ${midX} ${peakY} ${x2} ${LINE_Y}`
}

/**
 * Build a readable aria-label for the SVG.
 */
function buildAriaLabel(num1, num2, operator) {
  const opWord = operator === '+' ? 'plus' : 'minus'
  return `Number line showing ${num1} ${opWord} ${num2}, answer hidden`
}

// ── Sub-components ───────────────────────────────────────────────────────────

/** Horizontal base line */
function BaseLine({ maxValue, viewBoxWidth }) {
  const x1 = valueToX(0, maxValue, viewBoxWidth)
  const x2 = valueToX(maxValue, maxValue, viewBoxWidth)
  return (
    <line
      x1={x1}
      y1={LINE_Y}
      x2={x2}
      y2={LINE_Y}
      stroke={COLOR_LINE}
      strokeWidth={2}
      data-testid="number-line-base"
    />
  )
}

BaseLine.propTypes = {
  maxValue: PropTypes.number.isRequired,
  viewBoxWidth: PropTypes.number.isRequired,
}

/** Tick marks and number labels */
function Ticks({ maxValue, viewBoxWidth }) {
  const ticks = []
  for (let n = 0; n <= maxValue; n++) {
    const x = valueToX(n, maxValue, viewBoxWidth)
    const major = isMajorTick(n)
    const height = major ? MAJOR_TICK_HEIGHT : TICK_HEIGHT
    ticks.push(
      <g key={n} data-testid={`tick-${n}`}>
        <line
          x1={x}
          y1={LINE_Y - height / 2}
          x2={x}
          y2={LINE_Y + height / 2}
          stroke={COLOR_TICK}
          strokeWidth={1}
        />
        {major && (
          <text
            x={x}
            y={LINE_Y + height / 2 + 14}
            textAnchor="middle"
            fontSize="11"
            fill={COLOR_TICK}
            fontFamily="Comic Sans MS, cursive, sans-serif"
            data-testid={`tick-label-${n}`}
          >
            {n}
          </text>
        )}
      </g>,
    )
  }
  return <>{ticks}</>
}

Ticks.propTypes = {
  maxValue: PropTypes.number.isRequired,
  viewBoxWidth: PropTypes.number.isRequired,
}

/** Blue dot marking the start position */
function StartDot({ num1, maxValue, viewBoxWidth }) {
  const cx = valueToX(num1, maxValue, viewBoxWidth)
  return (
    <circle
      cx={cx}
      cy={LINE_Y}
      r={DOT_RADIUS}
      fill={COLOR_SONIC_BLUE}
      data-testid="start-dot"
    />
  )
}

StartDot.propTypes = {
  num1: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  viewBoxWidth: PropTypes.number.isRequired,
}

/** Animated jump arcs */
function JumpArcs({ num1, num2, operator, maxValue, viewBoxWidth }) {
  const direction = operator === '+' ? 1 : -1
  const arcs = []

  for (let i = 0; i < num2; i++) {
    const from = num1 + i * direction
    const to = from + direction
    const x1 = valueToX(from, maxValue, viewBoxWidth)
    const x2 = valueToX(to, maxValue, viewBoxWidth)
    const d = arcPath(x1, x2)

    arcs.push(
      <path
        key={i}
        d={d}
        fill="none"
        stroke={COLOR_SONIC_BLUE}
        strokeWidth={2}
        strokeDasharray={ARC_DASH_LENGTH}
        strokeDashoffset={ARC_DASH_LENGTH}
        className="animate-arc-draw motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
        style={{
          animationDelay: `${i * ARC_DELAY_MS}ms`,
          animationFillMode: 'forwards',
        }}
        data-testid={`arc-${i}`}
      />,
    )
  }

  return <>{arcs}</>
}

JumpArcs.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-']).isRequired,
  maxValue: PropTypes.number.isRequired,
  viewBoxWidth: PropTypes.number.isRequired,
}

/** Golden "?" marker at the answer position */
function AnswerMarker({ num1, num2, operator, maxValue, viewBoxWidth }) {
  const answer = operator === '+' ? num1 + num2 : num1 - num2
  const x = valueToX(answer, maxValue, viewBoxWidth)
  return (
    <text
      x={x}
      y={LINE_Y - ARC_HEIGHT - 8}
      textAnchor="middle"
      fontSize="20"
      fontWeight="bold"
      fill={COLOR_SONIC_GOLD}
      fontFamily="Comic Sans MS, cursive, sans-serif"
      data-testid="answer-marker"
    >
      ?
    </text>
  )
}

AnswerMarker.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-']).isRequired,
  maxValue: PropTypes.number.isRequired,
  viewBoxWidth: PropTypes.number.isRequired,
}

// ── Main Component ───────────────────────────────────────────────────────────

/** Default viewBox width for responsive scaling */
const VIEWBOX_WIDTH = 400

function NumberLine({ num1, num2, operator }) {
  const maxValue = getMaxValue(num1, num2, operator)
  const ariaLabel = buildAriaLabel(num1, num2, operator)

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className="w-full max-h-[120px]"
      role="img"
      aria-label={ariaLabel}
      data-testid="number-line"
    >
      <BaseLine maxValue={maxValue} viewBoxWidth={VIEWBOX_WIDTH} />
      <Ticks maxValue={maxValue} viewBoxWidth={VIEWBOX_WIDTH} />
      <StartDot num1={num1} maxValue={maxValue} viewBoxWidth={VIEWBOX_WIDTH} />
      <JumpArcs
        num1={num1}
        num2={num2}
        operator={operator}
        maxValue={maxValue}
        viewBoxWidth={VIEWBOX_WIDTH}
      />
      <AnswerMarker
        num1={num1}
        num2={num2}
        operator={operator}
        maxValue={maxValue}
        viewBoxWidth={VIEWBOX_WIDTH}
      />
    </svg>
  )
}

NumberLine.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
  operator: PropTypes.oneOf(['+', '-']).isRequired,
}

export default NumberLine
