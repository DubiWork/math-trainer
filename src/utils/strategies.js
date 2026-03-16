/**
 * Math Strategy Engine for Math Trainer
 *
 * Detects applicable mental math strategies for addition, subtraction,
 * multiplication, and division problems and returns step-by-step
 * explanations as i18n-ready objects.
 * Designed for children at grade 1-2 reading level.
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
 * Steps are returned as { key, params } objects for i18n support.
 * Translation happens at the component level (StrategyHint calls t()).
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

// ─── Strategy Name Keys ─────────────────────────────────────────────────────

/** @type {Object.<string, string>} Translation keys for strategy names */
const STRATEGY_NAME_KEYS = {
  [STRATEGY_IDS.BRIDGING_ADD]: 'strategy.names.bridging_add',
  [STRATEGY_IDS.BRIDGING_SUB]: 'strategy.names.bridging_sub',
  [STRATEGY_IDS.DOUBLES]: 'strategy.names.doubles',
  [STRATEGY_IDS.NEAR_DOUBLES]: 'strategy.names.near_doubles',
  [STRATEGY_IDS.COUNT_ON]: 'strategy.names.count_on',
  [STRATEGY_IDS.COUNT_BACK]: 'strategy.names.count_back',
  [STRATEGY_IDS.REPEATED_ADDITION]: 'strategy.names.repeated_addition',
  [STRATEGY_IDS.COMMUTATIVE_MULT]: 'strategy.names.commutative_mult',
  [STRATEGY_IDS.TIMES_TEN]: 'strategy.names.times_ten',
  [STRATEGY_IDS.DOUBLES_MULT]: 'strategy.names.doubles_mult',
  [STRATEGY_IDS.INVERSE_MULT]: 'strategy.names.inverse_mult',
  [STRATEGY_IDS.HALVING]: 'strategy.names.halving',
};

// ─── Step Templates (i18n-ready) ────────────────────────────────────────────

/**
 * Step template functions for each strategy.
 * Each returns an array of { key, params } objects (max 3 steps).
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
      { key: 'strategy.bridgingAdd.step1', params: { tens, base, complement } },
      { key: 'strategy.bridgingAdd.step2', params: { addend, complement, remainder } },
      { key: 'strategy.bridgingAdd.step3', params: { tens, remainder } },
    ];
  },

  bridging_sub: (num1, num2) => {
    const onesOfNum1 = num1 % 10;
    const tens = num1 - onesOfNum1;
    const remainder = num2 - onesOfNum1;
    return [
      { key: 'strategy.bridgingSub.step1', params: { tens, num1, onesOfNum1 } },
      { key: 'strategy.bridgingSub.step2', params: { num2, onesOfNum1, remainder } },
      { key: 'strategy.bridgingSub.step3', params: { tens, remainder } },
    ];
  },

  doubles_add: (num1) => {
    return [
      { key: 'strategy.doublesAdd.step1', params: {} },
      { key: 'strategy.doublesAdd.step2', params: { num1 } },
    ];
  },

  doubles_sub: (num1) => {
    return [
      { key: 'strategy.doublesSub.step1', params: { num1 } },
      { key: 'strategy.doublesSub.step2', params: { num1 } },
    ];
  },

  near_doubles_add: (num1, num2) => {
    const smaller = Math.min(num1, num2);
    const doubleVal = smaller + smaller;
    return [
      { key: 'strategy.nearDoublesAdd.step1', params: { smaller, doubleVal } },
      { key: 'strategy.nearDoublesAdd.step2', params: { doubleVal } },
    ];
  },

  near_doubles_sub: (num1, num2) => {
    const half = Math.floor(num1 / 2);
    const approx = num1 % 2 === 0 ? '' : '~';
    return [
      { key: 'strategy.nearDoublesSub.step1', params: { num1, approx, half } },
      { key: 'strategy.nearDoublesSub.step2', params: { num1, num2 } },
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
        { key: 'strategy.countOn.step1', params: { larger } },
        { key: 'strategy.countOn.step2enum', params: { smaller, seqParts } },
        { key: 'strategy.countOn.step3', params: {} },
      ];
    }
    // Large-operand fallback: no enumeration
    return [
      { key: 'strategy.countOn.step1', params: { larger } },
      { key: 'strategy.countOn.step2more', params: { smaller } },
      { key: 'strategy.countOn.step3', params: {} },
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
        { key: 'strategy.countBack.step1', params: { num1 } },
        { key: 'strategy.countBack.step2enum', params: { num2, seqParts } },
        { key: 'strategy.countBack.step3', params: {} },
      ];
    }
    // Large-operand fallback: no enumeration
    return [
      { key: 'strategy.countBack.step1', params: { num1 } },
      { key: 'strategy.countBack.step2steps', params: { num2 } },
      { key: 'strategy.countBack.step3', params: {} },
    ];
  },

  // ─── Multiplication Templates ───────────────────────────────────────

  repeated_addition: (num1, num2) => {
    // Pick the smaller operand as the multiplier for skip counting
    const base = num1 <= num2 ? num1 : num2;
    const times = num1 <= num2 ? num2 : num1;
    const addends = Array.from({ length: times }, () => base).join('+');
    return [
      { key: 'strategy.repeatedAddition.step1', params: { times, base } },
      { key: 'strategy.repeatedAddition.step2', params: { addends } },
    ];
  },

  commutative_mult: (num1, num2) => {
    return [
      { key: 'strategy.commutativeMult.step1', params: { num1, num2 } },
      { key: 'strategy.commutativeMult.step2', params: { num2, num1 } },
    ];
  },

  times_ten: (num1, num2) => {
    const other = num1 === 10 ? num2 : num1;
    return [
      { key: 'strategy.timesTen.step1', params: {} },
      { key: 'strategy.timesTen.step2', params: { other } },
    ];
  },

  doubles_mult: (num1, num2) => {
    const other = num1 === 2 ? num2 : num1;
    return [
      { key: 'strategy.doublesMult.step1', params: {} },
      { key: 'strategy.doublesMult.step2', params: { other } },
    ];
  },

  // ─── Division Templates ─────────────────────────────────────────────

  inverse_mult: (num1, num2) => {
    return [
      { key: 'strategy.inverseMult.step1', params: { num1, num2 } },
      { key: 'strategy.inverseMult.step2', params: { num2, num1 } },
    ];
  },

  halving: (num1) => {
    return [
      { key: 'strategy.halving.step1', params: {} },
      { key: 'strategy.halving.step2', params: { num1 } },
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
 * @returns {Array<{id: string, nameKey: string, steps: Array<{key: string, params: Object}>}>}
 */
export function getStrategies(num1, num2, operator) {
  const strategies = [];

  if (operator === '+') {
    // Priority 1: doubles
    if (isDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.DOUBLES,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.DOUBLES],
        steps: STEP_TEMPLATES.doubles_add(num1),
      });
    }

    // Priority 2: near-doubles
    if (isNearDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.NEAR_DOUBLES,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.NEAR_DOUBLES],
        steps: STEP_TEMPLATES.near_doubles_add(num1, num2),
      });
    }

    // Priority 3: bridging (crosses tens boundary)
    if (isBridgingAdd(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.BRIDGING_ADD,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.BRIDGING_ADD],
        steps: STEP_TEMPLATES.bridging_add(num1, num2),
      });
    }

    // Priority 4: count-on (prefer when small operand, fallback otherwise)
    if (isCountOn(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.COUNT_ON,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.COUNT_ON],
        steps: STEP_TEMPLATES.count_on(num1, num2),
      });
    } else if (strategies.length === 0) {
      // Universal fallback for addition problems with no other strategy
      strategies.push({
        id: STRATEGY_IDS.COUNT_ON,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.COUNT_ON],
        steps: STEP_TEMPLATES.count_on(num1, num2),
      });
    }
  } else if (operator === '-') {
    // Priority 1: doubles (num1 === num2 -> answer is 0)
    if (isDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.DOUBLES,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.DOUBLES],
        steps: STEP_TEMPLATES.doubles_sub(num1),
      });
    }

    // Priority 2: near-doubles
    if (isNearDoubles(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.NEAR_DOUBLES,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.NEAR_DOUBLES],
        steps: STEP_TEMPLATES.near_doubles_sub(num1, num2),
      });
    }

    // Priority 3: bridging (subtract through tens boundary)
    if (isBridgingSub(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.BRIDGING_SUB,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.BRIDGING_SUB],
        steps: STEP_TEMPLATES.bridging_sub(num1, num2),
      });
    }

    // Priority 4: count-back (prefer when small subtrahend, fallback otherwise)
    if (isCountBack(num2)) {
      strategies.push({
        id: STRATEGY_IDS.COUNT_BACK,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.COUNT_BACK],
        steps: STEP_TEMPLATES.count_back(num1, num2),
      });
    } else if (strategies.length === 0) {
      // Universal fallback for subtraction problems with no other strategy
      strategies.push({
        id: STRATEGY_IDS.COUNT_BACK,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.COUNT_BACK],
        steps: STEP_TEMPLATES.count_back(num1, num2),
      });
    }
  } else if (operator === '*') {
    // Priority 1: times-ten (highest priority — simplest rule)
    if (isTimesTen(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.TIMES_TEN,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.TIMES_TEN],
        steps: STEP_TEMPLATES.times_ten(num1, num2),
      });
    }

    // Priority 2: doubles-mult (x2 = double it)
    if (isDoublesMult(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.DOUBLES_MULT,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.DOUBLES_MULT],
        steps: STEP_TEMPLATES.doubles_mult(num1, num2),
      });
    }

    // Priority 3: repeated addition (when either operand <= 5)
    if (isRepeatedAddition(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.REPEATED_ADDITION,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.REPEATED_ADDITION],
        steps: STEP_TEMPLATES.repeated_addition(num1, num2),
      });
    }

    // Priority 4: commutative property (swap when num2 < num1)
    if (isCommutativeMult(num1, num2)) {
      strategies.push({
        id: STRATEGY_IDS.COMMUTATIVE_MULT,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.COMMUTATIVE_MULT],
        steps: STEP_TEMPLATES.commutative_mult(num1, num2),
      });
    }

    // Universal fallback: repeated addition if nothing else matched
    if (strategies.length === 0) {
      strategies.push({
        id: STRATEGY_IDS.REPEATED_ADDITION,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.REPEATED_ADDITION],
        steps: STEP_TEMPLATES.repeated_addition(num1, num2),
      });
    }
  } else if (operator === '/') {
    // Priority 1: halving (divide by 2)
    if (isHalving(num2)) {
      strategies.push({
        id: STRATEGY_IDS.HALVING,
        nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.HALVING],
        steps: STEP_TEMPLATES.halving(num1),
      });
    }

    // Priority 2 / Universal fallback: inverse multiplication
    strategies.push({
      id: STRATEGY_IDS.INVERSE_MULT,
      nameKey: STRATEGY_NAME_KEYS[STRATEGY_IDS.INVERSE_MULT],
      steps: STEP_TEMPLATES.inverse_mult(num1, num2),
    });
  }

  return strategies;
}
