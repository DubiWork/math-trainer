import { describe, it, expect } from 'vitest'
import {
  LEVELS,
  OPERATION_TYPES,
  GRADES,
  MAX_LEVEL,
  getLevelConfig,
  getLevelsByGrade,
  getGradeForLevel,
} from './levels'

describe('Level Configuration', () => {
  it('LEVELS array has exactly 20 entries', () => {
    expect(LEVELS).toHaveLength(20)
  })

  it('MAX_LEVEL equals 20', () => {
    expect(MAX_LEVEL).toBe(20)
  })

  it('all level IDs are sequential 1-20', () => {
    LEVELS.forEach((level, i) => {
      expect(level.id).toBe(i + 1)
    })
  })

  it('each level has required fields', () => {
    LEVELS.forEach((level, i) => {
      expect(level, `level ${i + 1}`).toHaveProperty('id')
      expect(level, `level ${i + 1}`).toHaveProperty('grade')
      expect(level, `level ${i + 1}`).toHaveProperty('name')
      expect(level, `level ${i + 1}`).toHaveProperty('nameHe')
      expect(level, `level ${i + 1}`).toHaveProperty('operationType')
      expect(level, `level ${i + 1}`).toHaveProperty('operators')
      expect(level, `level ${i + 1}`).toHaveProperty('numberRange')
      expect(level, `level ${i + 1}`).toHaveProperty('ageTarget')
      expect(level, `level ${i + 1}`).toHaveProperty('levelVersion')
    })
  })

  it('all levels have operationType === integer-arithmetic', () => {
    LEVELS.forEach((level) => {
      expect(level.operationType).toBe(OPERATION_TYPES.INTEGER_ARITHMETIC)
    })
  })

  it('all levels have levelVersion === 2', () => {
    LEVELS.forEach((level) => {
      expect(level.levelVersion).toBe(2)
    })
  })

  it('Grade 1 levels have grade === 1', () => {
    const grade1 = LEVELS.filter((l) => l.id >= 1 && l.id <= 8)
    grade1.forEach((level) => expect(level.grade).toBe(1))
  })

  it('Grade 2 levels have grade === 2', () => {
    const grade2 = LEVELS.filter((l) => l.id >= 9 && l.id <= 14)
    grade2.forEach((level) => expect(level.grade).toBe(2))
  })

  it('Grade 3 levels have grade === 3', () => {
    const grade3 = LEVELS.filter((l) => l.id >= 15 && l.id <= 20)
    grade3.forEach((level) => expect(level.grade).toBe(3))
  })

  describe('getLevelConfig', () => {
    it('returns first level for id 1', () => {
      const level = getLevelConfig(1)
      expect(level.id).toBe(1)
      expect(level.name).toBe('Add within 5')
    })

    it('returns last level for id 20', () => {
      const level = getLevelConfig(20)
      expect(level.id).toBe(20)
      expect(level.name).toBe('Mixed All Ops (to 1000)')
    })

    it('throws for id 0', () => {
      expect(() => getLevelConfig(0)).toThrow()
    })

    it('throws for id 21', () => {
      expect(() => getLevelConfig(21)).toThrow()
    })

    it('returns minNumber/maxNumber shim fields', () => {
      const level = getLevelConfig(1)
      expect(level.minNumber).toBe(level.numberRange.min)
      expect(level.maxNumber).toBe(level.numberRange.max)
    })

    it('shim values match numberRange for level 8 (tens)', () => {
      const level = getLevelConfig(8)
      expect(level.minNumber).toBe(10)
      expect(level.maxNumber).toBe(100)
    })

    it('shim values match numberRange for level 20', () => {
      const level = getLevelConfig(20)
      expect(level.minNumber).toBe(1)
      expect(level.maxNumber).toBe(1000)
    })
  })

  describe('getLevelsByGrade', () => {
    it('returns 8 levels for grade 1', () => {
      expect(getLevelsByGrade(1)).toHaveLength(8)
    })

    it('returns 6 levels for grade 2', () => {
      expect(getLevelsByGrade(2)).toHaveLength(6)
    })

    it('returns 6 levels for grade 3', () => {
      expect(getLevelsByGrade(3)).toHaveLength(6)
    })

    it('returns empty array for unknown grade', () => {
      expect(getLevelsByGrade(99)).toEqual([])
    })
  })

  describe('getGradeForLevel', () => {
    it('returns 1 for level 1', () => {
      expect(getGradeForLevel(1)).toBe(1)
    })

    it('returns 2 for level 10', () => {
      expect(getGradeForLevel(10)).toBe(2)
    })

    it('returns 3 for level 15', () => {
      expect(getGradeForLevel(15)).toBe(3)
    })

    it('returns 3 for level 20', () => {
      expect(getGradeForLevel(20)).toBe(3)
    })
  })

  describe('OPERATION_TYPES', () => {
    it('is frozen', () => {
      expect(Object.isFrozen(OPERATION_TYPES)).toBe(true)
    })

    it('has INTEGER_ARITHMETIC key', () => {
      expect(OPERATION_TYPES.INTEGER_ARITHMETIC).toBe('integer-arithmetic')
    })
  })

  describe('GRADES', () => {
    it('is frozen', () => {
      expect(Object.isFrozen(GRADES)).toBe(true)
    })

    it('has GRADE_1 through GRADE_6', () => {
      expect(GRADES.GRADE_1).toBe(1)
      expect(GRADES.GRADE_6).toBe(6)
    })
  })
})
