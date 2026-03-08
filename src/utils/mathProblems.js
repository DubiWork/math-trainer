/**
 * Math Problem Generator for Math Trainer
 *
 * Generates age-appropriate math problems using level configuration.
 * Supports addition, subtraction, multiplication, and division.
 */

import { getLevelConfig } from '../config/levels'

/**
 * Game UI constants (not level-dependent)
 */
const GAME_CONFIG = {
  NUM_OPTIONS: 4,
  WRONG_ANSWER_RANGE: 3
};

/**
 * Default level config for backward compatibility (Level 2: Addition Hero, +/-, 1-10)
 */
const DEFAULT_CONFIG = getLevelConfig(2);

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random multiple of `multiple` within [min, max] (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} multiple - The multiple to use
 * @returns {number} A random multiple of `multiple` within the range
 */
export function getRandomMultiple(min, max, multiple) {
  const start = Math.ceil(min / multiple) * multiple;
  const multiples = [];
  for (let v = start; v <= max; v += multiple) {
    multiples.push(v);
  }
  return multiples[getRandomInt(0, multiples.length - 1)];
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array (new array, original unchanged)
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generates wrong answers that are close to the correct answer
 * @param {number} correctAnswer - The correct answer
 * @param {number} count - Number of wrong answers to generate
 * @param {number} [maxAnswer] - Maximum plausible answer value
 * @returns {number[]} Array of wrong answers
 */
function generateWrongAnswers(correctAnswer, count, maxAnswer) {
  if (maxAnswer === undefined) {
    maxAnswer = correctAnswer + 20;
  }
  const wrongAnswers = new Set();
  const minAnswer = 0; // Allow 0 as a plausible wrong answer

  // Generate wrong answers within +-3 of correct answer
  const possibleWrong = [];
  for (let offset = -GAME_CONFIG.WRONG_ANSWER_RANGE; offset <= GAME_CONFIG.WRONG_ANSWER_RANGE; offset++) {
    if (offset === 0) continue; // Skip the correct answer
    const candidate = correctAnswer + offset;
    if (candidate >= minAnswer && candidate <= maxAnswer) {
      possibleWrong.push(candidate);
    }
  }

  // Shuffle and pick the required number of wrong answers
  const shuffledCandidates = shuffleArray(possibleWrong);

  for (const candidate of shuffledCandidates) {
    if (wrongAnswers.size >= count) break;
    wrongAnswers.add(candidate);
  }

  // If we still need more wrong answers (edge cases), expand the range
  let expandedOffset = GAME_CONFIG.WRONG_ANSWER_RANGE + 1;
  while (wrongAnswers.size < count) {
    const candidatePlus = correctAnswer + expandedOffset;
    const candidateMinus = correctAnswer - expandedOffset;

    if (candidatePlus <= maxAnswer && !wrongAnswers.has(candidatePlus)) {
      wrongAnswers.add(candidatePlus);
    }
    if (wrongAnswers.size < count && candidateMinus >= minAnswer && !wrongAnswers.has(candidateMinus)) {
      wrongAnswers.add(candidateMinus);
    }
    expandedOffset++;

    // Safety check to prevent infinite loop
    if (expandedOffset > maxAnswer) break;
  }

  return Array.from(wrongAnswers).slice(0, count);
}

/**
 * Generates a random math problem based on level configuration
 *
 * @param {Object} [levelConfig] - Level configuration object from getLevelConfig()
 * @returns {Object} Problem object containing:
 *   - num1: First number
 *   - num2: Second number
 *   - operator: '+', '-', '*', or '/'
 *   - correctAnswer: The correct answer
 *   - options: Array of 4 answer options (shuffled, includes correct answer)
 *
 * @example
 * const problem = generateProblem();
 * // Returns: { num1: 7, num2: 3, operator: '+', correctAnswer: 10, options: [9, 10, 11, 8] }
 *
 * @example
 * const problem = generateProblem(getLevelConfig(10));
 * // Returns multiplication problem using level 10 config
 */
export function generateProblem(levelConfig = DEFAULT_CONFIG) {
  const { operators, minNumber, maxNumber, multiplesOf, multipliers, divisors } = levelConfig;

  // Pick random operator from level's operator list
  const operator = operators[getRandomInt(0, operators.length - 1)];

  let num1, num2, correctAnswer, maxAnswer;

  if (operator === '+') {
    num1 = multiplesOf
      ? getRandomMultiple(minNumber, maxNumber, multiplesOf)
      : getRandomInt(minNumber, maxNumber);
    num2 = multiplesOf
      ? getRandomMultiple(minNumber, maxNumber, multiplesOf)
      : getRandomInt(minNumber, maxNumber);
    correctAnswer = num1 + num2;
    maxAnswer = maxNumber * 2;
  } else if (operator === '-') {
    num1 = multiplesOf
      ? getRandomMultiple(minNumber, maxNumber, multiplesOf)
      : getRandomInt(minNumber, maxNumber);
    num2 = multiplesOf
      ? getRandomMultiple(minNumber, num1, multiplesOf)
      : getRandomInt(minNumber, num1);
    // Ensure num1 >= num2 to avoid negative results
    if (num1 < num2) {
      [num1, num2] = [num2, num1];
    }
    correctAnswer = num1 - num2;
    maxAnswer = maxNumber;
  } else if (operator === '*') {
    const multiplierList = multipliers || [2, 3, 4, 5, 6, 7, 8, 9, 10];
    num1 = multiplierList[getRandomInt(0, multiplierList.length - 1)];
    num2 = getRandomInt(1, 10);
    correctAnswer = num1 * num2;
    maxAnswer = Math.max(...multiplierList) * 10;
  } else {
    // Division
    const divisorList = divisors || [2, 3, 4, 5];
    num2 = divisorList[getRandomInt(0, divisorList.length - 1)];
    const quotient = getRandomInt(1, 10);
    num1 = num2 * quotient;
    correctAnswer = quotient;
    maxAnswer = Math.max(...divisorList) * 10;
  }

  // Generate wrong answers
  const wrongAnswers = generateWrongAnswers(correctAnswer, GAME_CONFIG.NUM_OPTIONS - 1, maxAnswer);

  // Combine correct and wrong answers, then shuffle
  const options = shuffleArray([correctAnswer, ...wrongAnswers]);

  return {
    num1,
    num2,
    operator,
    correctAnswer,
    options
  };
}

/**
 * Validates if the user's answer matches the correct answer
 *
 * @param {number} userAnswer - The answer selected by the user
 * @param {number} correctAnswer - The correct answer
 * @returns {boolean} True if the answer is correct, false otherwise
 *
 * @example
 * validateAnswer(10, 10); // true
 * validateAnswer(9, 10);  // false
 */
export function validateAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

/**
 * Formats a problem for display
 *
 * @param {Object} problem - Problem object from generateProblem()
 * @param {number} problem.num1 - First number
 * @param {number} problem.num2 - Second number
 * @param {string} problem.operator - Mathematical operator
 * @returns {string} Formatted string like "5 + 3 = ?"
 *
 * @example
 * formatProblem({ num1: 5, num2: 3, operator: '+' }); // "5 + 3 = ?"
 */
export function formatProblem(problem) {
  const { num1, num2, operator } = problem;
  return `${num1} ${operator} ${num2} = ?`;
}

/**
 * Generates multiple problems at once
 *
 * @param {number} count - Number of problems to generate
 * @param {Object} [levelConfig] - Level configuration object from getLevelConfig()
 * @returns {Object[]} Array of problem objects
 *
 * @example
 * const problems = generateProblems(10);
 * const problems = generateProblems(10, getLevelConfig(5));
 */
export function generateProblems(count, levelConfig) {
  return Array.from({ length: count }, () => generateProblem(levelConfig));
}

export default {
  generateProblem,
  validateAnswer,
  formatProblem,
  generateProblems
};
