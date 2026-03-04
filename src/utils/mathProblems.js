/**
 * Math Problem Generator for Math Trainer
 *
 * Generates age-appropriate math problems for 7-year-olds
 * practicing addition and subtraction with numbers 1-10.
 */

/**
 * Configuration constants
 */
const CONFIG = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 10,
  NUM_OPTIONS: 4,
  WRONG_ANSWER_RANGE: 3,
  OPERATORS: ['+', '-']
};

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
 * @returns {number[]} Array of wrong answers
 */
function generateWrongAnswers(correctAnswer, count) {
  const wrongAnswers = new Set();
  const minAnswer = 0; // Allow 0 as a plausible wrong answer
  const maxAnswer = CONFIG.MAX_NUMBER * 2; // Maximum possible sum

  // Generate wrong answers within +-3 of correct answer
  const possibleWrong = [];
  for (let offset = -CONFIG.WRONG_ANSWER_RANGE; offset <= CONFIG.WRONG_ANSWER_RANGE; offset++) {
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
  let expandedOffset = CONFIG.WRONG_ANSWER_RANGE + 1;
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
 * Generates a random math problem appropriate for a 7-year-old
 *
 * @returns {Object} Problem object containing:
 *   - num1: First number (1-10)
 *   - num2: Second number (1-10)
 *   - operator: '+' or '-'
 *   - correctAnswer: The correct answer
 *   - options: Array of 4 answer options (shuffled, includes correct answer)
 *
 * @example
 * const problem = generateProblem();
 * // Returns: { num1: 7, num2: 3, operator: '+', correctAnswer: 10, options: [9, 10, 11, 8] }
 */
export function generateProblem() {
  // Pick random operator
  const operator = CONFIG.OPERATORS[getRandomInt(0, CONFIG.OPERATORS.length - 1)];

  let num1, num2, correctAnswer;

  if (operator === '+') {
    // Addition: any two numbers 1-10
    num1 = getRandomInt(CONFIG.MIN_NUMBER, CONFIG.MAX_NUMBER);
    num2 = getRandomInt(CONFIG.MIN_NUMBER, CONFIG.MAX_NUMBER);
    correctAnswer = num1 + num2;
  } else {
    // Subtraction: ensure num1 >= num2 to avoid negative results
    num1 = getRandomInt(CONFIG.MIN_NUMBER, CONFIG.MAX_NUMBER);
    num2 = getRandomInt(CONFIG.MIN_NUMBER, num1); // num2 is at most equal to num1
    correctAnswer = num1 - num2;
  }

  // Generate wrong answers
  const wrongAnswers = generateWrongAnswers(correctAnswer, CONFIG.NUM_OPTIONS - 1);

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
 * @param {string} problem.operator - Mathematical operator ('+' or '-')
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
 * @returns {Object[]} Array of problem objects
 *
 * @example
 * const problems = generateProblems(10);
 */
export function generateProblems(count) {
  return Array.from({ length: count }, () => generateProblem());
}

export default {
  generateProblem,
  validateAnswer,
  formatProblem,
  generateProblems
};
