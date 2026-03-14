export const OPERATION_TYPES = Object.freeze({
  INTEGER_ARITHMETIC: 'integer-arithmetic',
  DIVISION_WITH_REMAINDER: 'division-with-remainder',
  FRACTION: 'fraction',
  DECIMAL: 'decimal',
  PERCENTAGE: 'percentage',
  ORDER_OF_OPERATIONS: 'order-of-operations',
})

export const GRADES = Object.freeze({
  GRADE_1: 1,
  GRADE_2: 2,
  GRADE_3: 3,
  GRADE_4: 4,
  GRADE_5: 5,
  GRADE_6: 6,
})

export const LEVELS = [
  // ── Grade 1 (8 levels) ─────────────────────────────────────────────────────
  {
    id: 1,
    grade: 1,
    name: 'Add within 5',
    nameHe: 'חיבור עד 5',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+'],
    numberRange: { min: 0, max: 5 },
    ageTarget: '6',
    levelVersion: 2,
  },
  {
    id: 2,
    grade: 1,
    name: 'Subtract within 5',
    nameHe: 'חיסור עד 5',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['-'],
    numberRange: { min: 0, max: 5 },
    ageTarget: '6',
    levelVersion: 2,
  },
  {
    id: 3,
    grade: 1,
    name: 'Add to 10',
    nameHe: 'חיבור עד 10',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+'],
    numberRange: { min: 0, max: 10 },
    ageTarget: '6',
    levelVersion: 2,
  },
  {
    id: 4,
    grade: 1,
    name: 'Mixed +/- to 10',
    nameHe: 'חיבור וחיסור עד 10',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-'],
    numberRange: { min: 0, max: 10 },
    ageTarget: '6-7',
    levelVersion: 2,
  },
  {
    id: 5,
    grade: 1,
    name: 'Bridge the 10 (Add)',
    nameHe: 'חציית ה-10 (חיבור)',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+'],
    numberRange: { min: 1, max: 20 },
    ageTarget: '7',
    levelVersion: 2,
  },
  {
    id: 6,
    grade: 1,
    name: 'Bridge the 10 (Sub)',
    nameHe: 'חציית ה-10 (חיסור)',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['-'],
    numberRange: { min: 1, max: 20 },
    ageTarget: '7',
    levelVersion: 2,
  },
  {
    id: 7,
    grade: 1,
    name: 'Mixed +/- to 20',
    nameHe: 'חיבור וחיסור עד 20',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-'],
    numberRange: { min: 1, max: 20 },
    ageTarget: '7',
    levelVersion: 2,
  },
  {
    id: 8,
    grade: 1,
    name: 'Tens Structure',
    nameHe: 'מבנה העשרות',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-'],
    numberRange: { min: 10, max: 100 },
    ageTarget: '7',
    levelVersion: 2,
    multiplesOf: 10,
  },
  // ── Grade 2 (6 levels) ─────────────────────────────────────────────────────
  {
    id: 9,
    grade: 2,
    name: 'Automaticity +/- to 20',
    nameHe: 'אוטומטיות עד 20',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-'],
    numberRange: { min: 1, max: 20 },
    ageTarget: '7-8',
    levelVersion: 2,
  },
  {
    id: 10,
    grade: 2,
    name: 'Multiply ×2,×5,×10',
    nameHe: 'כפל ב-2, 5, 10',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['*'],
    numberRange: { min: 1, max: 10 },
    ageTarget: '8',
    levelVersion: 2,
    multipliers: [2, 5, 10],
  },
  {
    id: 11,
    grade: 2,
    name: 'Times Tables ×3,×4',
    nameHe: 'לוח הכפל ×3, ×4',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['*'],
    numberRange: { min: 1, max: 10 },
    ageTarget: '8',
    levelVersion: 2,
    multipliers: [3, 4],
  },
  {
    id: 12,
    grade: 2,
    name: 'Easy Division',
    nameHe: 'חילוק קל',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['/'],
    numberRange: { min: 1, max: 100 },
    ageTarget: '8',
    levelVersion: 2,
    divisors: [2, 5, 10],
  },
  {
    id: 13,
    grade: 2,
    name: '3-Digit Add/Sub',
    nameHe: 'חיבור וחיסור תלת-ספרתי',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-'],
    numberRange: { min: 100, max: 999 },
    ageTarget: '8',
    levelVersion: 2,
  },
  {
    id: 14,
    grade: 2,
    name: 'Mixed Operations to 100',
    nameHe: 'פעולות מעורבות עד 100',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-', '*', '/'],
    numberRange: { min: 1, max: 100 },
    ageTarget: '8',
    levelVersion: 2,
  },
  // ── Grade 3 (6 levels) ─────────────────────────────────────────────────────
  {
    id: 15,
    grade: 3,
    name: 'Times Tables ×6,×7',
    nameHe: 'לוח הכפל ×6, ×7',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['*'],
    numberRange: { min: 1, max: 10 },
    ageTarget: '9',
    levelVersion: 2,
    multipliers: [6, 7],
  },
  {
    id: 16,
    grade: 3,
    name: 'Times Tables ×8,×9',
    nameHe: 'לוח הכפל ×8, ×9',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['*'],
    numberRange: { min: 1, max: 10 },
    ageTarget: '9',
    levelVersion: 2,
    multipliers: [8, 9],
  },
  {
    id: 17,
    grade: 3,
    name: '4-Digit Add/Sub',
    nameHe: 'חיבור וחיסור ארבע-ספרתי',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-'],
    numberRange: { min: 1000, max: 9999 },
    ageTarget: '9',
    levelVersion: 2,
  },
  {
    id: 18,
    grade: 3,
    name: 'Mixed All Ops (to 100)',
    nameHe: 'כל הפעולות עד 100',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-', '*', '/'],
    numberRange: { min: 1, max: 100 },
    ageTarget: '9',
    levelVersion: 2,
  },
  {
    id: 19,
    grade: 3,
    name: 'Division Mastery',
    nameHe: 'שליטה בחילוק',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['/'],
    numberRange: { min: 1, max: 100 },
    ageTarget: '9',
    levelVersion: 2,
    divisors: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 20,
    grade: 3,
    name: 'Mixed All Ops (to 1000)',
    nameHe: 'כל הפעולות עד 1000',
    operationType: OPERATION_TYPES.INTEGER_ARITHMETIC,
    operators: ['+', '-', '*', '/'],
    numberRange: { min: 1, max: 1000 },
    ageTarget: '9',
    levelVersion: 2,
  },
]

/** Total number of levels — use this instead of a magic number */
export const MAX_LEVEL = LEVELS.length

/**
 * Returns the level config for a given level ID.
 * Includes backward-compatibility shim: adds minNumber and maxNumber
 * as aliases for numberRange.min and numberRange.max.
 *
 * @param {number} levelId - 1-based level identifier
 * @returns {Object} Level configuration with minNumber/maxNumber shim fields
 * @throws {Error} If levelId is out of range
 */
export function getLevelConfig(levelId) {
  if (levelId < 1 || levelId > LEVELS.length) {
    throw new Error(`Invalid level: ${levelId}. Must be 1-${LEVELS.length}`)
  }
  const level = LEVELS[levelId - 1]
  return {
    ...level,
    minNumber: level.numberRange.min,
    maxNumber: level.numberRange.max,
  }
}

/**
 * Returns all levels for a given grade.
 *
 * @param {number} grade - Grade number
 * @returns {Object[]} Array of level objects for that grade
 */
export function getLevelsByGrade(grade) {
  return LEVELS.filter((level) => level.grade === grade)
}

/**
 * Returns the grade number for a given level ID.
 *
 * @param {number} levelId - 1-based level identifier
 * @returns {number} Grade number
 */
export function getGradeForLevel(levelId) {
  return getLevelConfig(levelId).grade
}

export default LEVELS
