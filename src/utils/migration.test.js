import { describe, it, expect } from 'vitest'
import { migrateLevel, needsMigration, migrateProfile } from './migration'

describe('migrateLevel', () => {
  it('returns 1 for level 1 (identity mapping)', () => {
    expect(migrateLevel(1)).toBe(1)
  })

  it('returns 13 for level 9 (non-trivial mapping)', () => {
    expect(migrateLevel(9)).toBe(13)
  })

  it('returns 18 for level 13 (max old level)', () => {
    expect(migrateLevel(13)).toBe(18)
  })

  it('returns 1 for level 0 (fallback for invalid)', () => {
    expect(migrateLevel(0)).toBe(1)
  })

  it('returns 1 for level 14 (fallback for out-of-range)', () => {
    expect(migrateLevel(14)).toBe(1)
  })

  it('returns 1 for undefined (fallback for missing)', () => {
    expect(migrateLevel(undefined)).toBe(1)
  })
})

describe('needsMigration', () => {
  it('returns true when profile has no levelVersion', () => {
    expect(needsMigration({ currentLevel: 5 })).toBe(true)
  })

  it('returns true when profile has levelVersion 1 (old version)', () => {
    expect(needsMigration({ currentLevel: 5, levelVersion: 1 })).toBe(true)
  })

  it('returns false when profile has levelVersion 2 (already migrated)', () => {
    expect(needsMigration({ currentLevel: 5, levelVersion: 2 })).toBe(false)
  })
})

describe('migrateProfile', () => {
  it('migrates currentLevel and sets levelVersion 2', () => {
    const result = migrateProfile({ currentLevel: 13, score: 100 })
    expect(result).toEqual({ currentLevel: 18, score: 100, levelVersion: 2 })
  })

  it('is a no-op when profile already has levelVersion 2', () => {
    const profile = { currentLevel: 5, levelVersion: 2, score: 100 }
    expect(migrateProfile(profile)).toBe(profile)
  })

  it('is idempotent: migrateProfile(migrateProfile(profile)) equals migrateProfile(profile)', () => {
    const profile = { currentLevel: 9, score: 50 }
    const once = migrateProfile(profile)
    const twice = migrateProfile(once)
    expect(twice).toEqual(once)
  })
})
