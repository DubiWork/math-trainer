/**
 * Shared level test fixtures
 *
 * Re-exports the real LEVELS and MAX_LEVEL from the config so tests
 * always reflect the current schema without hardcoding magic numbers.
 * Also provides helpers for building lightweight test-specific level objects.
 */

import { LEVELS, MAX_LEVEL, OPERATION_TYPES, GRADES, getLevelConfig } from '../config/levels'

export { LEVELS as MOCK_LEVELS, MAX_LEVEL as MOCK_MAX_LEVEL, getLevelConfig }

/**
 * Creates a minimal valid level config for use in unit tests.
 * All fields default to sensible values; pass overrides to customise.
 *
 * @param {Object} [overrides]
 * @returns {Object} Level config object
 */
export function createMockLevel(overrides = {}) {
  return {
    id: 1,
    grade: GRADES.GRADE_1,
    name: 'Test Level',
    nameHe: 'שלב בדיקה',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+'],
    numberRange: { min: 0, max: 10 },
    ageTarget: '7',
    levelVersion: 2,
    ...overrides,
  }
}
