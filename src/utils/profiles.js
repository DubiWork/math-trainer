/**
 * Profile CRUD and PIN Hashing Utilities for Math Trainer
 *
 * Manages user profiles in localStorage with synchronous CRUD operations
 * and async PIN hashing via SubtleCrypto (SHA-256).
 *
 * Design decisions:
 * - No salt for PIN hashing (threat model is sibling, not attacker)
 * - SHA-256 via SubtleCrypto only
 * - All CRUD is synchronous (localStorage is sync)
 * - hashPin and verifyPin are async (SubtleCrypto returns Promises)
 * - Throws on invalid input for write operations, returns gracefully for reads
 */

// ─── Constants ──────────────────────────────────────────────────────────────

/** @type {string} localStorage key for profiles array */
export const STORAGE_KEY = 'math-trainer-profiles';

/** @type {number} Maximum number of profiles allowed */
export const MAX_PROFILES = 4;

/** @type {number} Maximum nickname length (characters, Unicode-safe) */
export const MAX_NICKNAME_LENGTH = 12;

/** @type {number} Required PIN length (digits only) */
export const PIN_LENGTH = 4;

/** @type {string[]} Valid theme identifiers */
export const VALID_THEMES = ['sonic', 'spiderman'];

/** @type {string[]} Valid language identifiers */
export const VALID_LANGUAGES = ['he', 'en'];

/** @type {string} Default language for new profiles */
export const DEFAULT_LANGUAGE = 'he';

// ─── Internal Helpers ───────────────────────────────────────────────────────

/**
 * Reads the profiles array from localStorage.
 * Returns an empty array if data is missing, corrupt, or not an array.
 * @returns {Object[]}
 */
function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      console.warn('[profiles] Corrupt data in localStorage — expected array, got', typeof parsed);
      return [];
    }
    return parsed;
  } catch (err) {
    console.warn('[profiles] Failed to parse localStorage data:', err.message);
    return [];
  }
}

/**
 * Writes the profiles array to localStorage.
 * @param {Object[]} profiles
 */
function writeStorage(profiles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
}

/**
 * Converts an ArrayBuffer to a hex string.
 * @param {ArrayBuffer} buffer
 * @returns {string} Hex string (lowercase)
 */
function bufferToHex(buffer) {
  const bytes = new Uint8Array(buffer);
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, '0');
  }
  return hex;
}

// ─── CRUD Functions (Synchronous) ───────────────────────────────────────────

/**
 * Returns all profiles from localStorage.
 * Never throws — returns an empty array if data is missing or corrupt.
 *
 * @returns {Object[]} Array of profile objects, or empty array
 *
 * @example
 * const profiles = getProfiles();
 * // [{ id: '...', nickname: 'Sonic', theme: 'sonic', ... }]
 */
export function getProfiles() {
  return readStorage();
}

/**
 * Returns a single profile by its id.
 * Never throws — returns null if not found.
 *
 * @param {string} id - Profile UUID
 * @returns {Object|null} Profile object, or null if not found
 *
 * @example
 * const profile = getProfileById('abc-123');
 * // { id: 'abc-123', nickname: 'Dubi', ... } or null
 */
export function getProfileById(id) {
  const profiles = readStorage();
  return profiles.find(p => p.id === id) || null;
}

/**
 * Creates a new profile and persists it to localStorage.
 * Generates a unique id, sets timestamps, and applies defaults.
 *
 * @param {Object} data - Profile creation data
 * @param {string} data.nickname - Display name (1-12 chars after trimming, Unicode-safe)
 * @param {string} data.theme - Theme identifier (must be in VALID_THEMES)
 * @param {string} data.pinHash - SHA-256 hex digest of the PIN (64 chars)
 * @param {string|null} [data.firebaseUid=null] - Firebase anonymous auth UID
 * @param {number} [data.currentLevel=1] - Starting level
 * @param {string} [data.language='he'] - Language preference ('he' or 'en')
 * @returns {Object} The newly created profile object
 * @throws {Error} If MAX_PROFILES reached, or if nickname/theme/pinHash are invalid
 *
 * @example
 * const profile = createProfile({
 *   nickname: 'Dubi',
 *   theme: 'sonic',
 *   pinHash: 'a1b2c3...64chars'
 * });
 */
export function createProfile({ nickname, theme, pinHash, firebaseUid = null, currentLevel = 1, language = DEFAULT_LANGUAGE }) {
  const profiles = readStorage();

  if (profiles.length >= MAX_PROFILES) {
    throw new Error(`Maximum of ${MAX_PROFILES} profiles reached`);
  }

  // Validate nickname
  if (typeof nickname !== 'string' || nickname.trim().length === 0) {
    throw new Error('Nickname is required');
  }
  const trimmedNickname = nickname.trim();
  if ([...trimmedNickname].length > MAX_NICKNAME_LENGTH) {
    throw new Error(`Nickname must be ${MAX_NICKNAME_LENGTH} characters or fewer`);
  }

  // Validate theme
  if (!VALID_THEMES.includes(theme)) {
    throw new Error(`Theme must be one of: ${VALID_THEMES.join(', ')}`);
  }

  // Validate pinHash
  if (typeof pinHash !== 'string' || !/^[0-9a-f]{64}$/.test(pinHash)) {
    throw new Error('pinHash must be a 64-character hex string');
  }

  const now = new Date().toISOString();
  const profile = {
    id: crypto.randomUUID(),
    nickname: trimmedNickname,
    theme,
    pinHash,
    firebaseUid,
    currentLevel,
    language: VALID_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE,
    createdAt: now,
    lastActiveAt: now
  };

  profiles.push(profile);
  writeStorage(profiles);
  return profile;
}

/**
 * Updates an existing profile with a shallow merge.
 * Immutable fields (id, createdAt) are stripped from updates.
 * Automatically updates lastActiveAt to the current time.
 *
 * @param {string} id - Profile UUID to update
 * @param {Object} updates - Fields to update (id and createdAt are ignored)
 * @returns {Object} The updated profile object
 * @throws {Error} If profile with given id is not found
 *
 * @example
 * const updated = updateProfile('abc-123', { currentLevel: 5 });
 */
export function updateProfile(id, updates) {
  const profiles = readStorage();
  const index = profiles.findIndex(p => p.id === id);

  if (index === -1) {
    throw new Error(`Profile not found: ${id}`);
  }

  // Strip immutable fields
  const { id: _id, createdAt: _createdAt, ...safeUpdates } = updates;

  profiles[index] = {
    ...profiles[index],
    ...safeUpdates,
    lastActiveAt: new Date().toISOString()
  };

  writeStorage(profiles);
  return profiles[index];
}

/**
 * Deletes a profile by its id.
 * Never throws — returns false if the profile was not found.
 *
 * @param {string} id - Profile UUID to delete
 * @returns {boolean} True if deleted, false if not found
 *
 * @example
 * const deleted = deleteProfile('abc-123'); // true or false
 */
export function deleteProfile(id) {
  const profiles = readStorage();
  const filtered = profiles.filter(p => p.id !== id);

  if (filtered.length === profiles.length) {
    return false;
  }

  writeStorage(filtered);
  return true;
}

// ─── PIN Hashing (Async) ───────────────────────────────────────────────────

/**
 * Hashes a 4-digit PIN using SHA-256 via SubtleCrypto.
 * Returns a 64-character lowercase hex string.
 *
 * @param {string} pin - Exactly 4 digits (e.g. '1234')
 * @returns {Promise<string>} 64-character hex digest
 * @throws {Error} If pin is not exactly 4 digits
 *
 * @example
 * const hash = await hashPin('1234');
 * // '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'
 */
export async function hashPin(pin) {
  if (typeof pin !== 'string' || !/^\d{4}$/.test(pin)) {
    throw new Error(`PIN must be exactly ${PIN_LENGTH} digits`);
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(pin);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return bufferToHex(hashBuffer);
}

/**
 * Verifies a PIN against a stored SHA-256 hash.
 * Hashes the provided PIN and compares it to the stored hash.
 *
 * @param {string} pin - Exactly 4 digits to verify
 * @param {string} storedHash - Previously stored SHA-256 hex digest
 * @returns {Promise<boolean>} True if the PIN matches the stored hash
 * @throws {Error} If pin is not exactly 4 digits
 *
 * @example
 * const match = await verifyPin('1234', storedHash); // true or false
 */
export async function verifyPin(pin, storedHash) {
  const hash = await hashPin(pin);
  return hash === storedHash;
}

export default {
  getProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
  hashPin,
  verifyPin,
  VALID_LANGUAGES,
  DEFAULT_LANGUAGE
};
