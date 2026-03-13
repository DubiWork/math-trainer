/**
 * Math Strategy Engine for Math Trainer
 *
 * Detects applicable mental math strategies for addition, subtraction,
 * multiplication, and division problems and returns step-by-step
 * explanations. Designed for children at grade 1-2 reading level.
 *
 * Addition/Subtraction strategies are ordered by priority:
 *   doubles > near-doubles > bridging > count-on/count-back.
 *   Count-on/count-back serve as universal fallbacks.
 *
 * Multiplication strategies:
 *   times-ten > doubles-mult > repeated-addition > commutative-mult.
 *   Inverse multiplication serves as universal fallback for division.
 *
 * Division strategies:
 *   halving > inverse-multiplication (universal fallback).
 *
 * All step text is defined as extractable template constants for future
 * i18n support (issue #22).
 */

// ─── Strategy IDs ───────────────────────────────────────────────────────────

/** @type {Object.<string, string>} Unique identifiers for each strategy */
export const STRATEGY_IDS = {
  BRIDGING_ADD: 'bridging_add',
  BRIDGING_SUB: 'bridging_sub',
  DOUBLES: 'doubles',
  NEAR_DOUBLES: 'near_doubles',
  COUNT_ON: 'count_on',
  COUNT_BACK: 'count_back',
  REPEATED_ADDITION: 'repeated_addition',
  COMMUTATIVE_MULT: 'commutative_mult',
  TIMES_TEN: 'times_ten',
  DOUBLES_MULT: 'doubles_mult',
  INVERSE_MULT: 'inverse_mult',
  HALVING: 'halving',
};

// ─── Strategy Names ─────────────────────────────────────────────────────────

/** @type {Object.<string, string>} Human-readable strategy names */
const STRATEGY_NAMES = {
  [STRATEGY_IDS.BRIDGING_ADD]: 'Bridge to 10',
  [STRATEGY_IDS.BRIDGING_SUB]: 'Bridge to 10',
  [STRATEGY_IDS.DOUBLES]: 'Use Doubles',
  [STRATEGY_IDS.NEAR_DOUBLES]: 'Near Doubles',
  [STRATEGY_IDS.COUNT_ON]: 'Count On',
  [STRATEGY_IDS.COUNT_BACK]: 'Count Back',
  [STRATEGY_IDS.REPEATED_ADDITION]: 'Repeated Addition',
  [STRATEGY_IDS.COMMUTATIVE_MULT]: 'Swap the Numbers',
  [STRATEGY_IDS.TIMES_TEN]: 'Times Ten',
  [STRATEGY_IDS.DOUBLES_MULT]: 'Use Doubles',
  [STRATEGY_IDS.INVERSE_MULT]: 'Think Multiplication',
  [STRATEGY_IDS.HALVING]: 'Halving',
};

// ─── Step Templates (extractable for i18n #22) ─────────────────────────────

/**
 * Step template functions for each strategy.
 * Each returns an array of strings (max 3 steps, <=30 chars each).
 * Steps NEVER reveal the final answer — use '?' instead.
 *
 * @type {Object.<string, Function>}
 */
const STEP_TEMPLATES = {
  bridging_add: (num1, num2) => {
    // Determine which operand is closer to the next 10
    // Pick the larger operand to bridge from for more intuitive steps
    let base, addend;
    if (num1 >= num2) {
      base = num1;
      addend = num2;
    } else {
      base = num2;
      addend = num1;
    }
    const complement = 10 - (base % 10);
    const remainder = addend - complement;
    const tens = base + complement;
    return [
      `Make ${tens}: ${base}+${complement}=${tens}`,
      `Left over: ${addend}-${complement}=${remainder}`,
      `Add: ${tens}+${remainder}=?`,
    ];
  },

  bridging_sub: (num1, num2) => {
    const onesOfNum1 = num1 % 10;
    const tens = num1 - onesOfNum1;
    const remainder = num2 - onesOfNum1;
    return [
      `Go to ${tens}: ${num1}-${onesOfNum1}=${tens}`,
      `Left: ${num2}-${onesOfNum1}=${remainder}`,
      `Take away: ${tens}-${remainder}=?`,
    ];
  },

  doubles_add: (num1) => {
    return [
      `It's a double!`,
      `Think: ${num1}+${num1}=?`,
    ];
  },

  doubles_sub: (num1) => {
    return [
      `Half of ${num1} is ?`,
      `${num1}-?=?`,
    ];
  },

  near_doubles_add: (num1, num2) => {
    const smaller = Math.min(num1, num2);
    const doubleVal = smaller + smaller;
    return [
      `Double ${smaller}: ${smaller}+${smaller}=${doubleVal}`,
      `Add 1 more: ${doubleVal}+1=?`,
    ];
  },

  near_doubles_sub: (num1, num2) => {
    const half = Math.floor(num1 / 2);
    const approx = num1 % 2 === 0 ? '' : '~';
    return [
      `Half of ${num1} is ${approx}${half}`,
      `Adjust by 1: ${num1}-${num2}=?`,
    ];
  },

  count_on: (num1, num2) => {
    // Count on from the larger number
    const larger = Math.max(num1, num2);
    const smaller = Math.min(num1, num2);
    if (smaller <= 3) {
      const countSeq = [];
      for (let i = 1; i < smaller; i++) {
        countSeq.push(larger + i);
      }
      const seqParts = countSeq.length > 0
        ? `${countSeq.join(',')},?`
        : '?';
      return [
        `Start at ${larger}`,
        `Count up ${smaller}: ${seqParts}`,
        `You land on ?`,
      ];
    }
    // Large-operand fallback: no enumeration
    return [
      `Start at ${larger}`,
      `Count up ${smaller} more`,
      `You land on ?`,
    ];
  },

  count_back: (num1, num2) => {
    if (num2 <= 3) {
      const countSeq = [];
      for (let i = 1; i < num2; i++) {
        countSeq.push(num1 - i);
      }
      const seqParts = countSeq.length > 0
        ? `${countSeq.join(',')},?`
        : '?';
      return [
        `Start at ${num1}`,
        `Count back ${num2}: ${seqParts}`,
        `You land on ?`,
      ];
    }
    // Large-operand fallback: no enumeration
    return [
      `Start at ${num1}`,
      `Count back ${num2} steps`,
      `You land on ?`,
    ];
  },

  // ─── Multiplication Templates ───────────────────────────────────────

  repeated_addition: (num1, num2) => {
    // Pick the smaller operand as the multiplier for skip counting
    const base = num1 <= num2 ? num1 : num2;
    const times = num1 <= num2 ? num2 : num1;
    const addends = Array.from({ length: times }, () => base).join('+');
    return [
      `${times} groups of ${base}`,
      `${addends}=?`,
    ];
  },

  commutative_mult: (num1, num2) => {
    return [
      `Don't know ${num1}x${num2}?`,
      `Try ${num2}x${num1}=?`,
    ];
  },

  times_ten: (num1, num2) => {
    const other = num1 === 10 ? num2 : num1;
    return [
      `Any numberx10: add a zero!`,
      `${other}x10=?`,
    ];
  },

  doubles_mult: (num1, num2) => {
    const other = num1 === 2 ? num2 : num1;
    return [
      `x2 = double it!`,
      `Double ${other}=?`,
    ];
  },

  // ─── Division Templates ─────────────────────────────────────────────

  inverse_mult: (num1, num2) => {
    return [
      `${num1} / ${num2} = ?`,
      `Think: ${num2} x ? = ${num1}`,
    ];
  },

  halving: (num1) => {
    return [
      `Divide by 2 = half!`,
      `Half of ${num1} = ?`,
    ];
  },
};

// ─── Strategy Detectors ─────────────────────────────────────────────────────

/**
 * Checks if an addition problem crosses the tens boundary.
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @returns {boolean}
 */
function isBridgingAdd(num1, num2) {
  return (num1 % 10) + (num2 % 10) > 10;
}

/**
 * Checks if a subtraction problem goes through the tens boundary.
 * @param {number} num1 - First operand (minuend)
 * @param {number} num2 - Second operand (subtrahend)
 * @returns {boolean}
 */
function isBridgingSub(num1, num2) {
  const onesDigit = num1 % 10;
  return onesDigit > 0 && onesDigit < num2;
}

/**
 * Checks if both operands are equal (doubles).
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @returns {boolean}
 */
function isDoubles(num1, num2) {
  return num1 === num2;
}

/**
 * Checks if the operands differ by exactly 1 (near-doubles).
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @returns {boolean}
 */
function isNearDoubles(num1, num2) {
  return Math.abs(num1 - num2) === 1;
}

/**
 * Checks if the smallest operand is <= 3 (count-on for addition).
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @returns {boolean}
 */
function isCountOn(num1, num2) {
  return Math.min(num1, num2) <= 3;
}

/**
 * Checks if the subtrahend is <= 3 (count-back for subtraction).
 * @param {number} num2 - Subtrahend
 * @returns {boolean}
 */
function isCountBack(num2) {
  return num2 <= 3;
}

// ─── Multiplication Detectors ──────────────────────────────────────────────

/**
 * Checks if either operand is 10 (times-ten shortcut).
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
function isTimesTen(num1, num2) {
  return num1 === 10 || num2 === 10;
}

/**
 * Checks if either operand is 2 (doubles/double-it strategy).
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
function isDoublesMult(num1, num2) {
  return num1 === 2 || num2 === 2;
}

/**
 * Checks if either operand is <= 5 (repeated addition / skip counting).
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
function isRepeatedAddition(num1, num2) {
  return Math.min(num1, num2) <= 5;
}

/**
 * Checks if swapping operands could be easier (num2 < num1).
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
function isCommutativeMult(num1, num2) {
  return num2 < num1;
}

// ─── Division Detectors ────────────────────────────────────────────────────

/**
 * Checks if divisor is 2 (halving strategy).
 * @param {number} num2 - Divisor
 * @returns {boolean}
 */
function isHalving(num2) {
  return num2 === 2;
}

// ─── Main API ───────────────────────────────────────────────────────────────

/**
 * Returns applicable math strategies for a given problem, ordered by priority.
 *
 * Addition/Subtraction priority: doubles > near-doubles > bridging > count-on/count-back.
 * At least one strategy is guaranteed for every +, -, *, or / problem.
 *
 * Multiplication priority: times-ten > doubles-mult > repeated-addition > commutative-mult.
 * Repeated-addition serves as universal fallback for multiplication.
 *
 * Division priority: halving > inverse-multiplication (universal fallback).
 *
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @param {string} operator - Mathematical operator ('+', '-', '*', '/')
 * @returns {Array<{id: string, name: string, steps: string[]}>} Ordered strategies
 *
 * @example
 * getStrategies(8, 5, '+');
 * // [{ id: 'bridging_add', name: 'Bridge to 10', steps: ['Make 10: 8+2=10', ...] },
 * //  { id: 'count_on', name: 'Count On', steps: ['Start at 8', ...] }]
 *
 * @example
 * getStrategies(3, 4, '*');
 * // [{ id: 'repeated_addition', name: 'Repeated Addition', steps: [...] }, ...]
 */
export function getStrategies(num1, num2, operator) {
  const strategies = [];

  if (operator === '+') {
    // Priority 1: doubles
    if (isDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.DOUBLES,
        name: STRATEGY_NAMES[STRATEGY_IDS.DOUBLES],
        steps: STEP_TEMPLATES.doubles_add(num1),
      });
    }

    // Priority 2: near-doubles
    if (isNearDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.NEAR_DOUBLES,
        name: STRATEGY_NAMES[STRATEGY_IDS.NEAR_DOUBLES],
        steps: STEP_TEMPLATES.near_doubles_add(num1, num2),
      });
    }

    // Priority 3: bridging (crosses tens boundary)
    if (isBridgingAdd(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.BRIDGING_ADD,
        name: STRATEGY_NAMES[STRATEGY_IDS.BRIDGING_ADD],
        steps: STEP_TEMPLATES.bridging_add(num1, num2),
      });
    }

    // Priority 4: count-on (prefer when small operand, fallback otherwise)
    if (isCountOn(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.COUNT_ON,
        name: STRATEGY_NAMES[STRATEGY_IDS.COUNT_ON],
        steps: STEP_TEMPLATES.count_on(num1, num2),
      });
    } else if (strategies.length === 0) {
      // Universal fallback for addition problems with no other strategy
      strategies.push({
        id: STRATEGY_IDS.COUNT_ON,
        name: STRATEGY_NAMES[STRATEGY_IDS.COUNT_ON],
        steps: STEP_TEMPLATES.count_on(num1, num2),
      });
    }
  } else if (operator === '-') {
    // Priority 1: doubles (num1 === num2 → answer is 0)
    if (isDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.DOUBLES,
        name: STRATEGY_NAMES[STRATEGY_IDS.DOUBLES],
        steps: STEP_TEMPLATES.doubles_sub(num1),
      });
    }

    // Priority 2: near-doubles
    if (isNearDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.NEAR_DOUBLES,
        name: STRATEGY_NAMES[STRATEGY_IDS.NEAR_DOUBLES],
        steps: STEP_TEMPLATES.near_doubles_sub(num1, num2),
      });
    }

    // Priority 3: bridging (subtract through tens boundary)
    if (isBridgingSub(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.BRIDGING_SUB,
        name: STRATEGY_NAMES[STRATEGY_IDS.BRIDGING_SUB],
        steps: STEP_TEMPLATES.bridging_sub(num1, num2),
      });
    }

    // Priority 4: count-back (prefer when small subtrahend, fallback otherwise)
    if (isCountBack(num2)) {
      strategies.push({
        id: STRATEGY_IDS.COUNT_BACK,
        name: STRATEGY_NAMES[STRATEGY_IDS.COUNT_BACK],
        steps: STEP_TEMPLATES.count_back(num1, num2),
      });
    } else if (strategies.length === 0) {
      // Universal fallback for subtraction problems with no other strategy
      strategies.push({
        id: STRATEGY_IDS.COUNT_BACK,
        name: STRATEGY_NAMES[STRATEGY_IDS.COUNT_BACK],
        steps: STEP_TEMPLATES.count_back(num1, num2),
      });
    }
  } else if (operator === '*') {
    // Priority 1: times-ten (highest priority — simplest rule)
    if (isTimesTen(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.TIMES_TEN,
        name: STRATEGY_NAMES[STRATEGY_IDS.TIMES_TEN],
        steps: STEP_TEMPLATES.times_ten(num1, num2),
      });
    }

    // Priority 2: doubles-mult (x2 = double it)
    if (isDoublesMult(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.DOUBLES_MULT,
        name: STRATEGY_NAMES[STRATEGY_IDS.DOUBLES_MULT],
        steps: STEP_TEMPLATES.doubles_mult(num1, num2),
      });
    }

    // Priority 3: repeated addition (when either operand <= 5)
    if (isRepeatedAddition(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.REPEATED_ADDITION,
        name: STRATEGY_NAMES[STRATEGY_IDS.REPEATED_ADDITION],
        steps: STEP_TEMPLATES.repeated_addition(num1, num2),
      });
    }

    // Priority 4: commutative property (swap when num2 < num1)
    if (isCommutativeMult(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.COMMUTATIVE_MULT,
        name: STRATEGY_NAMES[STRATEGY_IDS.COMMUTATIVE_MULT],
        steps: STEP_TEMPLATES.commutative_mult(num1, num2),
      });
    }

    // Universal fallback: repeated addition if nothing else matched
    if (strategies.length === 0) {
      strategies.push({
        id: STRATEGY_IDS.REPEATED_ADDITION,
        name: STRATEGY_NAMES[STRATEGY_IDS.REPEATED_ADDITION],
        steps: STEP_TEMPLATES.repeated_addition(num1, num2),
      });
    }
  } else if (operator === '/') {
    // Priority 1: halving (divide by 2)
    if (isHalving(num2)) {
      strategies.push({
        id: STRATEGY_IDS.HALVING,
        name: STRATEGY_NAMES[STRATEGY_IDS.HALVING],
        steps: STEP_TEMPLATES.halving(num1),
      });
    }

    // Priority 2 / Universal fallback: inverse multiplication
    strategies.push({
      id: STRATEGY_IDS.INVERSE_MULT,
      name: STRATEGY_NAMES[STRATEGY_IDS.INVERSE_MULT],
      steps: STEP_TEMPLATES.inverse_mult(num1, num2),
    });
  }

  return strategies;
}
