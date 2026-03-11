/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Node 25+ ships a built-in localStorage that shadows DOM environments.
// We stub it with a proper implementation before importing the module under test.
function createLocalStorageMock() {
  let store = {};
  return {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; },
    get length() { return Object.keys(store).length; },
    key: (index) => Object.keys(store)[index] ?? null,
  };
}

const storageMock = createLocalStorageMock();
vi.stubGlobal('localStorage', storageMock);

// Import the module AFTER the stub is in place
const {
  STORAGE_KEY,
  MAX_PROFILES,
  MAX_NICKNAME_LENGTH,
  PIN_LENGTH,
  VALID_THEMES,
  VALID_LANGUAGES,
  DEFAULT_LANGUAGE,
  getProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
  hashPin,
  verifyPin
} = await import('./profiles');

// Known SHA-256 hash of '1234'
const HASH_1234 = '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';

// Valid pinHash placeholder (64 hex chars)
const VALID_PIN_HASH = 'a'.repeat(64);

describe('profiles', () => {
  beforeEach(() => {
    storageMock.clear();
  });

  // ─── Constants ──────────────────────────────────────────────────────────

  describe('constants', () => {
    it('STORAGE_KEY is the expected string', () => {
      expect(STORAGE_KEY).toBe('math-trainer-profiles');
    });

    it('MAX_PROFILES is 4', () => {
      expect(MAX_PROFILES).toBe(4);
    });

    it('MAX_NICKNAME_LENGTH is 12', () => {
      expect(MAX_NICKNAME_LENGTH).toBe(12);
    });

    it('PIN_LENGTH is 4', () => {
      expect(PIN_LENGTH).toBe(4);
    });

    it('VALID_THEMES contains sonic and spiderman', () => {
      expect(VALID_THEMES).toEqual(['sonic', 'spiderman']);
    });

    it('VALID_LANGUAGES contains he and en', () => {
      expect(VALID_LANGUAGES).toEqual(['he', 'en']);
    });

    it('DEFAULT_LANGUAGE is he', () => {
      expect(DEFAULT_LANGUAGE).toBe('he');
    });
  });

  // ─── getProfiles ──────────────────────────────────────────────────────

  describe('getProfiles', () => {
    it('returns empty array when localStorage is empty', () => {
      expect(getProfiles()).toEqual([]);
    });

    it('returns empty array when data is corrupt JSON', () => {
      localStorage.setItem(STORAGE_KEY, 'not-json{{{');
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(getProfiles()).toEqual([]);
      expect(warnSpy).toHaveBeenCalled();
      warnSpy.mockRestore();
    });

    it('returns empty array when data is not an array', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ foo: 'bar' }));
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(getProfiles()).toEqual([]);
      expect(warnSpy).toHaveBeenCalled();
      warnSpy.mockRestore();
    });

    it('returns empty array when data is a string', () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify('hello'));
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(getProfiles()).toEqual([]);
      warnSpy.mockRestore();
    });

    it('returns stored profiles array', () => {
      const profiles = [{ id: '1', nickname: 'Test' }];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
      expect(getProfiles()).toEqual(profiles);
    });

    it('never throws', () => {
      localStorage.setItem(STORAGE_KEY, undefined);
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(() => getProfiles()).not.toThrow();
      warnSpy.mockRestore();
    });
  });

  // ─── getProfileById ───────────────────────────────────────────────────

  describe('getProfileById', () => {
    it('returns null when no profiles exist', () => {
      expect(getProfileById('nonexistent')).toBeNull();
    });

    it('returns null when id does not match', () => {
      const profile = createProfile({ nickname: 'A', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(getProfileById('wrong-id')).toBeNull();
      // Cleanup
      deleteProfile(profile.id);
    });

    it('returns the correct profile', () => {
      const created = createProfile({ nickname: 'Dubi', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const found = getProfileById(created.id);
      expect(found).not.toBeNull();
      expect(found.id).toBe(created.id);
      expect(found.nickname).toBe('Dubi');
    });

    it('never throws even with corrupt data', () => {
      localStorage.setItem(STORAGE_KEY, 'corrupt');
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(() => getProfileById('any')).not.toThrow();
      expect(getProfileById('any')).toBeNull();
      warnSpy.mockRestore();
    });
  });

  // ─── createProfile ───────────────────────────────────────────────────

  describe('createProfile', () => {
    it('creates a profile with required fields', () => {
      const profile = createProfile({ nickname: 'Dubi', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.id).toBeDefined();
      expect(typeof profile.id).toBe('string');
      expect(profile.nickname).toBe('Dubi');
      expect(profile.theme).toBe('sonic');
      expect(profile.pinHash).toBe(VALID_PIN_HASH);
      expect(profile.firebaseUid).toBeNull();
      expect(profile.currentLevel).toBe(1);
      expect(profile.createdAt).toBeDefined();
      expect(profile.lastActiveAt).toBeDefined();
    });

    it('persists profile to localStorage', () => {
      createProfile({ nickname: 'Test', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      expect(stored).toHaveLength(1);
      expect(stored[0].nickname).toBe('Test');
    });

    it('generates unique ids for each profile', () => {
      const p1 = createProfile({ nickname: 'A', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const p2 = createProfile({ nickname: 'B', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(p1.id).not.toBe(p2.id);
    });

    it('sets createdAt and lastActiveAt as ISO 8601 timestamps', () => {
      const before = new Date().toISOString();
      const profile = createProfile({ nickname: 'Time', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const after = new Date().toISOString();
      expect(profile.createdAt >= before).toBe(true);
      expect(profile.createdAt <= after).toBe(true);
      expect(profile.lastActiveAt).toBe(profile.createdAt);
    });

    it('trims nickname whitespace', () => {
      const profile = createProfile({ nickname: '  Dubi  ', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.nickname).toBe('Dubi');
    });

    it('accepts Hebrew Unicode nicknames', () => {
      const profile = createProfile({ nickname: 'דובי', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.nickname).toBe('דובי');
    });

    it('applies custom firebaseUid and currentLevel', () => {
      const profile = createProfile({
        nickname: 'Custom',
        theme: 'spiderman',
        pinHash: VALID_PIN_HASH,
        firebaseUid: 'uid-abc',
        currentLevel: 5
      });
      expect(profile.firebaseUid).toBe('uid-abc');
      expect(profile.currentLevel).toBe(5);
    });

    // Validation errors
    it('throws when nickname is empty string', () => {
      expect(() => createProfile({ nickname: '', theme: 'sonic', pinHash: VALID_PIN_HASH }))
        .toThrow('Nickname is required');
    });

    it('throws when nickname is only whitespace', () => {
      expect(() => createProfile({ nickname: '   ', theme: 'sonic', pinHash: VALID_PIN_HASH }))
        .toThrow('Nickname is required');
    });

    it('throws when nickname exceeds MAX_NICKNAME_LENGTH', () => {
      const longName = 'A'.repeat(MAX_NICKNAME_LENGTH + 1);
      expect(() => createProfile({ nickname: longName, theme: 'sonic', pinHash: VALID_PIN_HASH }))
        .toThrow(`Nickname must be ${MAX_NICKNAME_LENGTH} characters or fewer`);
    });

    it('allows exactly MAX_NICKNAME_LENGTH characters', () => {
      const exactName = 'A'.repeat(MAX_NICKNAME_LENGTH);
      const profile = createProfile({ nickname: exactName, theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.nickname).toBe(exactName);
    });

    it('measures Unicode character count correctly (Hebrew)', () => {
      // 12 Hebrew characters should be allowed
      const hebrewName = 'אבגדהוזחטיכל'; // 12 chars
      const profile = createProfile({ nickname: hebrewName, theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.nickname).toBe(hebrewName);

      // 13 Hebrew characters should be rejected
      const tooLong = 'אבגדהוזחטיכלם'; // 13 chars
      expect(() => createProfile({ nickname: tooLong, theme: 'sonic', pinHash: VALID_PIN_HASH }))
        .toThrow();
    });

    it('throws when theme is invalid', () => {
      expect(() => createProfile({ nickname: 'X', theme: 'mario', pinHash: VALID_PIN_HASH }))
        .toThrow('Theme must be one of: sonic, spiderman');
    });

    it('throws when pinHash is wrong length', () => {
      expect(() => createProfile({ nickname: 'X', theme: 'sonic', pinHash: 'tooshort' }))
        .toThrow('pinHash must be a 64-character hex string');
    });

    it('throws when pinHash is not a string', () => {
      expect(() => createProfile({ nickname: 'X', theme: 'sonic', pinHash: 12345 }))
        .toThrow('pinHash must be a 64-character hex string');
    });

    it('throws when MAX_PROFILES is reached', () => {
      for (let i = 0; i < MAX_PROFILES; i++) {
        createProfile({ nickname: `P${i}`, theme: 'sonic', pinHash: VALID_PIN_HASH });
      }
      expect(() => createProfile({ nickname: 'Extra', theme: 'sonic', pinHash: VALID_PIN_HASH }))
        .toThrow(`Maximum of ${MAX_PROFILES} profiles reached`);
    });

    it('allows creating exactly MAX_PROFILES profiles', () => {
      for (let i = 0; i < MAX_PROFILES; i++) {
        createProfile({ nickname: `P${i}`, theme: 'sonic', pinHash: VALID_PIN_HASH });
      }
      expect(getProfiles()).toHaveLength(MAX_PROFILES);
    });
  });

  // ─── Language Field ──────────────────────────────────────────────────

  describe('language field', () => {
    it('defaults to Hebrew when language is not specified', () => {
      const profile = createProfile({ nickname: 'NoLang', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.language).toBe('he');
    });

    it('accepts Hebrew as explicit language', () => {
      const profile = createProfile({ nickname: 'Hebrew', theme: 'sonic', pinHash: VALID_PIN_HASH, language: 'he' });
      expect(profile.language).toBe('he');
    });

    it('accepts English as explicit language', () => {
      const profile = createProfile({ nickname: 'English', theme: 'sonic', pinHash: VALID_PIN_HASH, language: 'en' });
      expect(profile.language).toBe('en');
    });

    it('falls back to Hebrew for invalid language', () => {
      const profile = createProfile({ nickname: 'Invalid', theme: 'sonic', pinHash: VALID_PIN_HASH, language: 'fr' });
      expect(profile.language).toBe('he');
    });

    it('persists language to localStorage', () => {
      createProfile({ nickname: 'Persist', theme: 'sonic', pinHash: VALID_PIN_HASH, language: 'en' });
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      expect(stored[0].language).toBe('en');
    });

    it('can update language via updateProfile', () => {
      const profile = createProfile({ nickname: 'Switch', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.language).toBe('he');
      const updated = updateProfile(profile.id, { language: 'en' });
      expect(updated.language).toBe('en');
    });

    it('language is preserved after updating other fields', () => {
      const profile = createProfile({ nickname: 'Keep', theme: 'sonic', pinHash: VALID_PIN_HASH, language: 'en' });
      const updated = updateProfile(profile.id, { currentLevel: 5 });
      expect(updated.language).toBe('en');
    });
  });

  // ─── updateProfile ───────────────────────────────────────────────────

  describe('updateProfile', () => {
    it('updates a profile field', () => {
      const profile = createProfile({ nickname: 'Old', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const updated = updateProfile(profile.id, { nickname: 'New' });
      expect(updated.nickname).toBe('New');
    });

    it('persists updates to localStorage', () => {
      const profile = createProfile({ nickname: 'Before', theme: 'sonic', pinHash: VALID_PIN_HASH });
      updateProfile(profile.id, { currentLevel: 7 });
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      expect(stored[0].currentLevel).toBe(7);
    });

    it('strips immutable field: id', () => {
      const profile = createProfile({ nickname: 'Keep', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const originalId = profile.id;
      const updated = updateProfile(profile.id, { id: 'hacked-id' });
      expect(updated.id).toBe(originalId);
    });

    it('strips immutable field: createdAt', () => {
      const profile = createProfile({ nickname: 'Keep', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const originalCreatedAt = profile.createdAt;
      const updated = updateProfile(profile.id, { createdAt: '2000-01-01T00:00:00.000Z' });
      expect(updated.createdAt).toBe(originalCreatedAt);
    });

    it('updates lastActiveAt automatically', () => {
      const profile = createProfile({ nickname: 'Time', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const originalLastActive = profile.lastActiveAt;
      // Small delay to ensure different timestamp
      const updated = updateProfile(profile.id, { currentLevel: 2 });
      expect(updated.lastActiveAt).toBeDefined();
      expect(typeof updated.lastActiveAt).toBe('string');
    });

    it('shallow merges updates (does not overwrite unrelated fields)', () => {
      const profile = createProfile({ nickname: 'Merge', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const updated = updateProfile(profile.id, { currentLevel: 3 });
      expect(updated.nickname).toBe('Merge');
      expect(updated.theme).toBe('sonic');
      expect(updated.pinHash).toBe(VALID_PIN_HASH);
      expect(updated.currentLevel).toBe(3);
    });

    it('throws when profile not found', () => {
      expect(() => updateProfile('nonexistent', { nickname: 'X' }))
        .toThrow('Profile not found: nonexistent');
    });

    it('allows updating theme', () => {
      const profile = createProfile({ nickname: 'Theme', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const updated = updateProfile(profile.id, { theme: 'spiderman' });
      expect(updated.theme).toBe('spiderman');
    });

    it('allows updating firebaseUid', () => {
      const profile = createProfile({ nickname: 'Uid', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(profile.firebaseUid).toBeNull();
      const updated = updateProfile(profile.id, { firebaseUid: 'uid-123' });
      expect(updated.firebaseUid).toBe('uid-123');
    });
  });

  // ─── deleteProfile ────────────────────────────────────────────────────

  describe('deleteProfile', () => {
    it('deletes an existing profile and returns true', () => {
      const profile = createProfile({ nickname: 'Delete', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(deleteProfile(profile.id)).toBe(true);
      expect(getProfiles()).toHaveLength(0);
    });

    it('returns false when profile not found', () => {
      expect(deleteProfile('nonexistent')).toBe(false);
    });

    it('removes only the targeted profile', () => {
      const p1 = createProfile({ nickname: 'Keep', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const p2 = createProfile({ nickname: 'Remove', theme: 'sonic', pinHash: VALID_PIN_HASH });
      deleteProfile(p2.id);
      const remaining = getProfiles();
      expect(remaining).toHaveLength(1);
      expect(remaining[0].id).toBe(p1.id);
    });

    it('never throws even with corrupt data', () => {
      localStorage.setItem(STORAGE_KEY, 'corrupt');
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(() => deleteProfile('any')).not.toThrow();
      warnSpy.mockRestore();
    });

    it('returns false on corrupt data (no profiles to delete)', () => {
      localStorage.setItem(STORAGE_KEY, 'corrupt');
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      // With corrupt data, readStorage returns [], filtered.length === profiles.length (0 === 0)
      expect(deleteProfile('any')).toBe(false);
      warnSpy.mockRestore();
    });

    it('persists deletion to localStorage', () => {
      const profile = createProfile({ nickname: 'Gone', theme: 'sonic', pinHash: VALID_PIN_HASH });
      deleteProfile(profile.id);
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      expect(stored).toHaveLength(0);
    });
  });

  // ─── hashPin ──────────────────────────────────────────────────────────

  describe('hashPin', () => {
    it('returns a 64-character hex string', async () => {
      const hash = await hashPin('1234');
      expect(hash).toHaveLength(64);
      expect(/^[0-9a-f]{64}$/.test(hash)).toBe(true);
    });

    it('produces the known SHA-256 hash for "1234"', async () => {
      const hash = await hashPin('1234');
      expect(hash).toBe(HASH_1234);
    });

    it('produces consistent results for the same input', async () => {
      const hash1 = await hashPin('0000');
      const hash2 = await hashPin('0000');
      expect(hash1).toBe(hash2);
    });

    it('produces different hashes for different PINs', async () => {
      const hash1 = await hashPin('1234');
      const hash2 = await hashPin('5678');
      expect(hash1).not.toBe(hash2);
    });

    it('throws on non-4-digit input: letters', async () => {
      await expect(hashPin('abcd')).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on non-4-digit input: too short', async () => {
      await expect(hashPin('123')).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on non-4-digit input: too long', async () => {
      await expect(hashPin('12345')).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on empty string', async () => {
      await expect(hashPin('')).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on non-string input: number', async () => {
      await expect(hashPin(1234)).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on non-string input: null', async () => {
      await expect(hashPin(null)).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on mixed digits and letters', async () => {
      await expect(hashPin('12ab')).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });
  });

  // ─── verifyPin ────────────────────────────────────────────────────────

  describe('verifyPin', () => {
    it('returns true for matching PIN', async () => {
      const hash = await hashPin('1234');
      expect(await verifyPin('1234', hash)).toBe(true);
    });

    it('returns false for non-matching PIN', async () => {
      const hash = await hashPin('1234');
      expect(await verifyPin('5678', hash)).toBe(false);
    });

    it('works with the known hash constant', async () => {
      expect(await verifyPin('1234', HASH_1234)).toBe(true);
      expect(await verifyPin('0000', HASH_1234)).toBe(false);
    });

    it('throws on invalid PIN format', async () => {
      await expect(verifyPin('abcd', HASH_1234)).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });

    it('throws on non-string PIN', async () => {
      await expect(verifyPin(1234, HASH_1234)).rejects.toThrow(`PIN must be exactly ${PIN_LENGTH} digits`);
    });
  });

  // ─── Integration ──────────────────────────────────────────────────────

  describe('integration', () => {
    it('full CRUD lifecycle: create, read, update, delete', () => {
      // Create
      const profile = createProfile({ nickname: 'Lifecycle', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(getProfiles()).toHaveLength(1);

      // Read
      const found = getProfileById(profile.id);
      expect(found.nickname).toBe('Lifecycle');

      // Update
      updateProfile(profile.id, { currentLevel: 10 });
      expect(getProfileById(profile.id).currentLevel).toBe(10);

      // Delete
      expect(deleteProfile(profile.id)).toBe(true);
      expect(getProfiles()).toHaveLength(0);
      expect(getProfileById(profile.id)).toBeNull();
    });

    it('multiple profiles coexist correctly', () => {
      const p1 = createProfile({ nickname: 'Player1', theme: 'sonic', pinHash: VALID_PIN_HASH });
      const p2 = createProfile({ nickname: 'Player2', theme: 'spiderman', pinHash: VALID_PIN_HASH });
      const p3 = createProfile({ nickname: 'Player3', theme: 'sonic', pinHash: VALID_PIN_HASH });

      expect(getProfiles()).toHaveLength(3);
      expect(getProfileById(p2.id).theme).toBe('spiderman');

      deleteProfile(p2.id);
      expect(getProfiles()).toHaveLength(2);
      expect(getProfileById(p1.id)).not.toBeNull();
      expect(getProfileById(p3.id)).not.toBeNull();
    });

    it('create + hashPin + verifyPin end-to-end', async () => {
      const pin = '9876';
      const pinHash = await hashPin(pin);

      const profile = createProfile({ nickname: 'Secure', theme: 'sonic', pinHash });
      const stored = getProfileById(profile.id);

      expect(await verifyPin('9876', stored.pinHash)).toBe(true);
      expect(await verifyPin('0000', stored.pinHash)).toBe(false);
    });

    it('can create profile after deleting one at MAX_PROFILES', () => {
      const profiles = [];
      for (let i = 0; i < MAX_PROFILES; i++) {
        profiles.push(createProfile({ nickname: `P${i}`, theme: 'sonic', pinHash: VALID_PIN_HASH }));
      }
      expect(getProfiles()).toHaveLength(MAX_PROFILES);

      // Should fail
      expect(() => createProfile({ nickname: 'Extra', theme: 'sonic', pinHash: VALID_PIN_HASH }))
        .toThrow();

      // Delete one and create again
      deleteProfile(profiles[0].id);
      const newProfile = createProfile({ nickname: 'New', theme: 'sonic', pinHash: VALID_PIN_HASH });
      expect(getProfiles()).toHaveLength(MAX_PROFILES);
      expect(newProfile.nickname).toBe('New');
    });
  });
});
