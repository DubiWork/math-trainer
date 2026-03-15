import { describe, it, expect } from 'vitest'
import { generateProblem, generateProblems, validateAnswer, formatProblem, getRandomInt, getRandomMultiple } from './mathProblems'
import { getLevelConfig } from '../config/levels'

describe('mathProblems', () => {
  describe('getRandomInt', () => {
    it('returns values within the specified range', () => {
      for (let i = 0; i < 100; i++) {
        const val = getRandomInt(5, 10);
        expect(val).toBeGreaterThanOrEqual(5);
        expect(val).toBeLessThanOrEqual(10);
      }
    });
  });

  describe('getRandomMultiple', () => {
    it('returns multiples of 10 within range', () => {
      for (let i = 0; i < 100; i++) {
        const val = getRandomMultiple(10, 100, 10);
        expect(val % 10).toBe(0);
        expect(val).toBeGreaterThanOrEqual(10);
        expect(val).toBeLessThanOrEqual(100);
      }
    });

    it('handles non-aligned min values correctly', () => {
      // min=3, max=20, multiple=5 -> valid: 5, 10, 15, 20
      for (let i = 0; i < 50; i++) {
        const val = getRandomMultiple(3, 20, 5);
        expect(val % 5).toBe(0);
        expect(val).toBeGreaterThanOrEqual(5);
        expect(val).toBeLessThanOrEqual(20);
      }
    });

    it('returns the only valid multiple when range is tight', () => {
      const val = getRandomMultiple(10, 10, 10);
      expect(val).toBe(10);
    });
  });

  describe('backward compatibility - no args', () => {
    it('generateProblem() with no args uses level 2 defaults (operator -, range 0-5)', () => {
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem();
        expect(problem.operator).toBe('-');
        expect(problem.num1).toBeGreaterThanOrEqual(0);
        expect(problem.num1).toBeLessThanOrEqual(5);
        expect(problem.num2).toBeGreaterThanOrEqual(0);
        expect(problem.num2).toBeLessThanOrEqual(5);
      }
    });

    it('generateProblems() with no levelConfig uses defaults', () => {
      const problems = generateProblems(5);
      expect(problems).toHaveLength(5);
      problems.forEach(p => {
        expect(['+', '-']).toContain(p.operator);
        expect(p).toHaveProperty('correctAnswer');
        expect(p).toHaveProperty('options');
      });
    });
  });

  describe('level config usage', () => {
    it('passes level config through to generate correct operator types', () => {
      const level1 = getLevelConfig(1); // addition only, 0-5
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem(level1);
        expect(problem.operator).toBe('+');
        expect(problem.num1).toBeGreaterThanOrEqual(0);
        expect(problem.num1).toBeLessThanOrEqual(5);
        expect(problem.num2).toBeGreaterThanOrEqual(0);
        expect(problem.num2).toBeLessThanOrEqual(5);
      }
    });

    it('generateProblems passes levelConfig through', () => {
      const level2 = getLevelConfig(2); // subtraction only, 0-5
      const problems = generateProblems(20, level2);
      problems.forEach(p => {
        expect(p.operator).toBe('-');
      });
    });
  });

  describe('multiplication', () => {
    it('picks num1 from multipliers array and produces correct answer', () => {
      const level10 = getLevelConfig(10); // multipliers: [2, 5, 10]
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level10);
        expect(problem.operator).toBe('*');
        expect([2, 5, 10]).toContain(problem.num1);
        expect(problem.num2).toBeGreaterThanOrEqual(1);
        expect(problem.num2).toBeLessThanOrEqual(10);
        expect(problem.correctAnswer).toBe(problem.num1 * problem.num2);
      }
    });

    it('uses default multipliers when none specified (level 14)', () => {
      const level14 = getLevelConfig(14);
      const defaultMultipliers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
      let sawMultiply = false;
      for (let i = 0; i < 200; i++) {
        const problem = generateProblem(level14);
        if (problem.operator === '*') {
          sawMultiply = true;
          expect(defaultMultipliers).toContain(problem.num1);
          expect(problem.correctAnswer).toBe(problem.num1 * problem.num2);
        }
      }
      expect(sawMultiply).toBe(true);
    });
  });

  describe('division', () => {
    it('always produces a whole number answer', () => {
      const level12 = getLevelConfig(12); // divisors: [2, 5, 10]
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level12);
        expect(problem.operator).toBe('/');
        expect(Number.isInteger(problem.correctAnswer)).toBe(true);
        expect(problem.num1 % problem.num2).toBe(0);
        expect(problem.correctAnswer).toBe(problem.num1 / problem.num2);
      }
    });

    it('picks num2 from divisors array', () => {
      const level12 = getLevelConfig(12);
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level12);
        expect([2, 5, 10]).toContain(problem.num2);
      }
    });

    it('quotient is between 1 and 10', () => {
      const level12 = getLevelConfig(12);
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level12);
        expect(problem.correctAnswer).toBeGreaterThanOrEqual(1);
        expect(problem.correctAnswer).toBeLessThanOrEqual(10);
      }
    });
  });

  describe('subtraction', () => {
    it('never produces a negative answer across 100 iterations', () => {
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem();
        if (problem.operator === '-') {
          expect(problem.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(problem.num1).toBeGreaterThanOrEqual(problem.num2);
        }
      }
    });

    it('never produces negative for large ranges (level 9, 1-100)', () => {
      const level9 = getLevelConfig(9);
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level9);
        if (problem.operator === '-') {
          expect(problem.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(problem.num1).toBeGreaterThanOrEqual(problem.num2);
        }
      }
    });
  });

  describe('wrong answers / options', () => {
    it('always has 4 options total with no duplicates', () => {
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem();
        expect(problem.options).toHaveLength(4);
        const unique = new Set(problem.options);
        expect(unique.size).toBe(4);
      }
    });

    it('options always include the correct answer', () => {
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem();
        expect(problem.options).toContain(problem.correctAnswer);
      }
    });
  });

  describe('mixed operators (level 14)', () => {
    it('produces all 4 operator types across many iterations', () => {
      const level14 = getLevelConfig(14);
      const seenOps = new Set();
      for (let i = 0; i < 200; i++) {
        const problem = generateProblem(level14);
        seenOps.add(problem.operator);
        // Validate each problem regardless of operator
        expect(problem).toHaveProperty('num1');
        expect(problem).toHaveProperty('num2');
        expect(problem).toHaveProperty('correctAnswer');
        expect(problem.options).toHaveLength(4);
        expect(problem.options).toContain(problem.correctAnswer);
      }
      expect(seenOps).toEqual(new Set(['+', '-', '*', '/']));
    });
  });

  describe('multiplesOf constraint (level 8)', () => {
    it('operands are multiples of 10', () => {
      const level8 = getLevelConfig(8); // multiplesOf: 10, range 10-100
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level8);
        expect(problem.num1 % 10).toBe(0);
        expect(problem.num2 % 10).toBe(0);
        expect(problem.num1).toBeGreaterThanOrEqual(10);
        expect(problem.num1).toBeLessThanOrEqual(100);
      }
    });
  });

  describe('property tests - operator invariants', () => {
    it('addition: correctAnswer always equals num1 + num2', () => {
      const level3 = getLevelConfig(3); // addition only, 0-10
      for (let i = 0; i < 100; i++) {
        const p = generateProblem(level3);
        expect(p.correctAnswer).toBe(p.num1 + p.num2);
      }
    });

    it('subtraction: correctAnswer always equals num1 - num2', () => {
      const level2 = getLevelConfig(2); // subtraction only, 0-5
      for (let i = 0; i < 100; i++) {
        const p = generateProblem(level2);
        expect(p.correctAnswer).toBe(p.num1 - p.num2);
      }
    });

    it('multiplication: correctAnswer always equals num1 * num2', () => {
      const level10 = getLevelConfig(10);
      for (let i = 0; i < 100; i++) {
        const p = generateProblem(level10);
        expect(p.correctAnswer).toBe(p.num1 * p.num2);
      }
    });

    it('division: correctAnswer always equals num1 / num2', () => {
      const level12 = getLevelConfig(12);
      for (let i = 0; i < 100; i++) {
        const p = generateProblem(level12);
        expect(p.correctAnswer).toBe(p.num1 / p.num2);
      }
    });
  });

  describe('validateAnswer', () => {
    it('returns true for correct answer', () => {
      expect(validateAnswer(10, 10)).toBe(true);
    });

    it('returns false for wrong answer', () => {
      expect(validateAnswer(9, 10)).toBe(false);
    });
  });

  describe('formatProblem', () => {
    it('formats problem as expected string', () => {
      expect(formatProblem({ num1: 5, num2: 3, operator: '+' })).toBe('5 + 3 = ?');
      expect(formatProblem({ num1: 12, num2: 4, operator: '*' })).toBe('12 * 4 = ?');
    });
  });

  describe('numberRange field (new schema — no shim)', () => {
    it('accepts config with numberRange directly (no minNumber/maxNumber shim)', () => {
      // This config has NO minNumber/maxNumber shim — only numberRange
      const config = { operators: ['+'], numberRange: { min: 0, max: 5 } };
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem(config);
        expect(problem.operator).toBe('+');
        // num1 and num2 must be valid numbers (not NaN), proving numberRange is used
        expect(typeof problem.num1).toBe('number');
        expect(Number.isNaN(problem.num1)).toBe(false);
        expect(problem.num1).toBeGreaterThanOrEqual(0);
        expect(problem.num1).toBeLessThanOrEqual(5);
        expect(typeof problem.num2).toBe('number');
        expect(Number.isNaN(problem.num2)).toBe(false);
        expect(problem.num2).toBeGreaterThanOrEqual(0);
        expect(problem.num2).toBeLessThanOrEqual(5);
      }
    });

    it('3-digit level (range 100-999) generates valid addition problems', () => {
      const level13 = getLevelConfig(13); // 3-Digit Add/Sub, numberRange 100-999
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem(level13);
        if (problem.operator === '+') {
          expect(problem.num1).toBeGreaterThanOrEqual(100);
          expect(problem.num1).toBeLessThanOrEqual(999);
          expect(problem.num2).toBeGreaterThanOrEqual(100);
          expect(problem.num2).toBeLessThanOrEqual(999);
          expect(problem.correctAnswer).toBe(problem.num1 + problem.num2);
        }
      }
    });

    it('3-digit level (range 100-999) generates valid subtraction problems — never negative', () => {
      const level13 = getLevelConfig(13);
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem(level13);
        if (problem.operator === '-') {
          expect(problem.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(problem.num1).toBeGreaterThanOrEqual(problem.num2);
          expect(problem.correctAnswer).toBe(problem.num1 - problem.num2);
        }
      }
    });

    it('4-digit level (range 1000-9999) generates valid addition problems', () => {
      const level17 = getLevelConfig(17); // 4-Digit Add/Sub, numberRange 1000-9999
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem(level17);
        if (problem.operator === '+') {
          expect(problem.num1).toBeGreaterThanOrEqual(1000);
          expect(problem.num1).toBeLessThanOrEqual(9999);
          expect(problem.num2).toBeGreaterThanOrEqual(1000);
          expect(problem.num2).toBeLessThanOrEqual(9999);
          expect(problem.correctAnswer).toBe(problem.num1 + problem.num2);
        }
      }
    });

    it('4-digit level subtraction never produces negative answer', () => {
      const level17 = getLevelConfig(17);
      for (let i = 0; i < 50; i++) {
        const problem = generateProblem(level17);
        if (problem.operator === '-') {
          expect(problem.correctAnswer).toBeGreaterThanOrEqual(0);
          expect(problem.num1).toBeGreaterThanOrEqual(problem.num2);
        }
      }
    });

    it('wrong answers are within reasonable range for large numbers (3-digit answer)', () => {
      const level13 = getLevelConfig(13);
      let saw3DigitAddition = false;
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level13);
        if (problem.operator === '+' && problem.correctAnswer >= 200) {
          saw3DigitAddition = true;
          const wrongOptions = problem.options.filter(o => o !== problem.correctAnswer);
          // Wrong options must be within ±50 (not hundreds away)
          wrongOptions.forEach(opt => {
            expect(Math.abs(opt - problem.correctAnswer)).toBeLessThanOrEqual(50);
          });
          // Wrong options must be at least ±5 apart from correct (not within ±3 only)
          // This ensures the options are meaningful as multiple choice for large numbers
          const maxDistance = Math.max(...wrongOptions.map(o => Math.abs(o - problem.correctAnswer)));
          expect(maxDistance).toBeGreaterThan(3);
        }
      }
      expect(saw3DigitAddition).toBe(true);
    });

    it('multiplication with multipliers array works for grade-3 levels', () => {
      const level15 = getLevelConfig(15); // Times Tables ×6,×7
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level15);
        expect(problem.operator).toBe('*');
        expect([6, 7]).toContain(problem.num1);
        expect(problem.num2).toBeGreaterThanOrEqual(1);
        expect(problem.num2).toBeLessThanOrEqual(10);
        expect(problem.correctAnswer).toBe(problem.num1 * problem.num2);
      }
    });

    it('division with divisors array works for grade-3 division mastery level', () => {
      const level19 = getLevelConfig(19); // Division Mastery, divisors [2..10]
      for (let i = 0; i < 100; i++) {
        const problem = generateProblem(level19);
        expect(problem.operator).toBe('/');
        expect([2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(problem.num2);
        expect(Number.isInteger(problem.correctAnswer)).toBe(true);
        expect(problem.num1 % problem.num2).toBe(0);
        expect(problem.correctAnswer).toBe(problem.num1 / problem.num2);
      }
    });

    it('default config works when no levelConfig is passed', () => {
      for (let i = 0; i < 30; i++) {
        const problem = generateProblem();
        expect(problem).toHaveProperty('num1');
        expect(problem).toHaveProperty('num2');
        expect(problem).toHaveProperty('operator');
        expect(problem).toHaveProperty('correctAnswer');
        expect(problem.options).toHaveLength(4);
        expect(problem.options).toContain(problem.correctAnswer);
      }
    });
  });
});
