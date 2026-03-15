/**
 * Profile migration utilities for curriculum restructure.
 *
 * When the level configuration was restructured, some old level IDs (1-13)
 * were remapped to new IDs. Profiles stored with the old IDs need a one-time
 * migration so that a player's progress maps to the correct new level.
 *
 * levelVersion field:
 *   missing / < 2  →  needs migration (was created before curriculum restructure)
 *   2              →  already migrated (no action needed)
 */

/** Maps old level IDs (1-13) to new level IDs */
const OLD_TO_NEW_MAP = {
  1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8,
  9: 13, 10: 10, 11: 11, 12: 12, 13: 18,
}

/**
 * Maps a single old level ID to its new ID.
 * Falls back to 1 for any unknown or invalid input.
 *
 * @param {number} oldLevel
 * @returns {number}
 */
export function migrateLevel(oldLevel) {
  return OLD_TO_NEW_MAP[oldLevel] ?? 1
}

/**
 * Returns true when the given profile was created before the curriculum
 * restructure and its currentLevel has not yet been remapped.
 *
 * @param {Object} profile
 * @returns {boolean}
 */
export function needsMigration(profile) {
  return !profile.levelVersion || profile.levelVersion < 2
}

/**
 * Returns a migrated copy of the profile with currentLevel remapped to the
 * new ID and levelVersion set to 2.  If the profile does not need migration
 * the original object is returned unchanged (referential equality preserved).
 *
 * This function is idempotent: calling it twice produces the same result as
 * calling it once.
 *
 * @param {Object} profile
 * @returns {Object}
 */
export function migrateProfile(profile) {
  if (!needsMigration(profile)) return profile
  return {
    ...profile,
    currentLevel: migrateLevel(profile.currentLevel),
    levelVersion: 2,
  }
}
