import { describe, it, expect } from 'vitest'
import { LEVELS, getLevelConfig } from './levels'

describe('Level Configuration', () => {
  it('LEVELS has 13 entries', () => {
    expect(LEVELS).toHaveLength(13)
  })

  it('each level has required fields', () => {
    LEVELS.forEach((level, i) => {
      expect(level).toHaveProperty('id', i + 1)
      expect(level).toHaveProperty('name')
      expect(level).toHaveProperty('operators')
      expect(level).toHaveProperty('minNumber')
      expect(level).toHaveProperty('maxNumber')
      expect(level).toHaveProperty('ageTarget')
    })
  })

  it('getLevelConfig returns correct level', () => {
    expect(getLevelConfig(1).operators).toEqual(['+'])
    expect(getLevelConfig(1).maxNumber).toBe(5)
    expect(getLevelConfig(4).operators).toEqual(['+', '-'])
    expect(getLevelConfig(13).operators).toEqual(['+', '-', '*', '/'])
  })

  it('getLevelConfig throws for invalid level', () => {
    expect(() => getLevelConfig(0)).toThrow()
    expect(() => getLevelConfig(14)).toThrow()
  })
})
