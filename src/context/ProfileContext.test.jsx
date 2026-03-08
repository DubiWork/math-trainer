/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { createElement } from 'react'

// ─── localStorage mock ────────────────────────────────────────────────────────

function createLocalStorageMock() {
  let store = {}
  return {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => { store[key] = String(value) },
    removeItem: (key) => { delete store[key] },
    clear: () => { store = {} },
    get length() { return Object.keys(store).length },
    key: (index) => Object.keys(store)[index] ?? null,
  }
}

const storageMock = createLocalStorageMock()
vi.stubGlobal('localStorage', storageMock)

// ─── sessionStorage mock ──────────────────────────────────────────────────────

function createSessionStorageMock() {
  let store = {}
  return {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => { store[key] = String(value) },
    removeItem: (key) => { delete store[key] },
    clear: () => { store = {} },
    get length() { return Object.keys(store).length },
    key: (index) => Object.keys(store)[index] ?? null,
  }
}

const sessionMock = createSessionStorageMock()
vi.stubGlobal('sessionStorage', sessionMock)

// ─── Module mocks ─────────────────────────────────────────────────────────────

// Mock profiles util — controls what getProfiles/updateProfile/deleteProfile/verifyPin do
vi.mock('../utils/profiles', () => {
  let profileStore = []
  return {
    MAX_PROFILES: 4,
    getProfiles: vi.fn(() => profileStore),
    updateProfile: vi.fn((id, updates) => {
      const profile = profileStore.find((p) => p.id === id)
      if (!profile) throw new Error(`Profile not found: ${id}`)
      const updated = { ...profile, ...updates, lastActiveAt: new Date().toISOString() }
      profileStore = profileStore.map((p) => (p.id === id ? updated : p))
      return updated
    }),
    deleteProfile: vi.fn((id) => {
      const before = profileStore.length
      profileStore = profileStore.filter((p) => p.id !== id)
      return profileStore.length < before
    }),
    verifyPin: vi.fn(async () => true),
    // Test-only helper to set profile store
    __setProfiles: (profiles) => { profileStore = [...profiles] },
    __reset: () => { profileStore = [] },
  }
})

// Import after mocks
const { useProfile } = await import('./useProfile')
const ProfileProvider = (await import('./ProfileContext.jsx')).default
const { SESSION_KEY } = await import('./profileReducer')
const profilesUtil = await import('../utils/profiles')

// ─── Helpers ──────────────────────────────────────────────────────────────────

const VALID_PIN_HASH = 'a'.repeat(64)

function makeProfile(overrides = {}) {
  return {
    id: `profile-${Math.random().toString(36).slice(2, 8)}`,
    nickname: 'TestHero',
    theme: 'sonic',
    pinHash: VALID_PIN_HASH,
    firebaseUid: null,
    currentLevel: 1,
    createdAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
    ...overrides,
  }
}

function wrapper({ children }) {
  return createElement(ProfileProvider, null, children)
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('ProfileContext + useProfile', () => {
  beforeEach(() => {
    storageMock.clear()
    sessionMock.clear()
    profilesUtil.__reset()
    vi.clearAllMocks()
  })

  // ── Bootstrap ─────────────────────────────────────────────────────────

  describe('bootstrap on mount', () => {
    it('loads profiles from localStorage on mount', async () => {
      const profiles = [makeProfile({ id: 'p1', nickname: 'Dubi' })]
      profilesUtil.__setProfiles(profiles)

      const { result } = renderHook(() => useProfile(), { wrapper })

      // After mount effect runs
      await act(async () => {})

      expect(profilesUtil.getProfiles).toHaveBeenCalled()
      expect(result.current.profiles).toHaveLength(1)
      expect(result.current.profiles[0].nickname).toBe('Dubi')
      expect(result.current.isLoading).toBe(false)
    })

    it('restores activeProfile from sessionStorage when id is valid', async () => {
      const profile = makeProfile({ id: 'p1' })
      profilesUtil.__setProfiles([profile])
      sessionMock.setItem(SESSION_KEY, 'p1')

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      expect(result.current.activeProfile).not.toBeNull()
      expect(result.current.activeProfile.id).toBe('p1')
    })

    it('cleans up stale sessionStorage reference', async () => {
      profilesUtil.__setProfiles([])
      sessionMock.setItem(SESSION_KEY, 'nonexistent-id')

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      expect(result.current.activeProfile).toBeNull()
      expect(sessionMock.getItem(SESSION_KEY)).toBeNull()
    })

    it('does not set activeProfile when sessionStorage is empty', async () => {
      profilesUtil.__setProfiles([makeProfile()])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      expect(result.current.activeProfile).toBeNull()
    })
  })

  // ── selectProfile ─────────────────────────────────────────────────────

  describe('selectProfile', () => {
    it('activates profile on correct PIN and stores id in sessionStorage', async () => {
      const profile = makeProfile({ id: 'p1' })
      profilesUtil.__setProfiles([profile])
      profilesUtil.verifyPin.mockResolvedValue(true)

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      let success
      await act(async () => {
        success = await result.current.selectProfile(profile, '1234')
      })

      expect(success).toBe(true)
      expect(result.current.activeProfile).not.toBeNull()
      expect(sessionMock.getItem(SESSION_KEY)).toBe('p1')
    })

    it('returns false on wrong PIN and does not activate', async () => {
      const profile = makeProfile({ id: 'p1' })
      profilesUtil.__setProfiles([profile])
      profilesUtil.verifyPin.mockResolvedValue(false)

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      let success
      await act(async () => {
        success = await result.current.selectProfile(profile, '0000')
      })

      expect(success).toBe(false)
      expect(result.current.activeProfile).toBeNull()
    })
  })

  // ── clearActiveProfile ────────────────────────────────────────────────

  describe('clearActiveProfile', () => {
    it('clears activeProfile and removes sessionStorage entry', async () => {
      const profile = makeProfile({ id: 'p1' })
      profilesUtil.__setProfiles([profile])
      profilesUtil.verifyPin.mockResolvedValue(true)

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      // Activate first
      await act(async () => {
        await result.current.selectProfile(profile, '1234')
      })
      expect(result.current.activeProfile).not.toBeNull()

      // Clear
      act(() => {
        result.current.clearActiveProfile()
      })

      expect(result.current.activeProfile).toBeNull()
      expect(sessionMock.getItem(SESSION_KEY)).toBeNull()
    })
  })

  // ── refreshProfiles ───────────────────────────────────────────────────

  describe('refreshProfiles', () => {
    it('re-reads profiles from localStorage into state', async () => {
      profilesUtil.__setProfiles([])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      expect(result.current.profiles).toHaveLength(0)

      // Simulate external mutation
      profilesUtil.__setProfiles([makeProfile({ id: 'new' })])

      act(() => {
        result.current.refreshProfiles()
      })

      expect(result.current.profiles).toHaveLength(1)
    })
  })

  // ── addProfile ────────────────────────────────────────────────────────

  describe('addProfile', () => {
    it('appends a profile to state without reading storage', async () => {
      profilesUtil.__setProfiles([])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      const newProfile = makeProfile({ id: 'added' })
      act(() => {
        result.current.addProfile(newProfile)
      })

      expect(result.current.profiles).toHaveLength(1)
      expect(result.current.profiles[0].id).toBe('added')
    })
  })

  // ── createAndActivate ──────────────────────────────────────────────

  describe('createAndActivate', () => {
    it('adds profile to state and sets it as active', async () => {
      profilesUtil.__setProfiles([])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      const newProfile = makeProfile({ id: 'new-hero', nickname: 'NewHero' })
      act(() => {
        result.current.createAndActivate(newProfile)
      })

      expect(result.current.profiles).toHaveLength(1)
      expect(result.current.profiles[0].id).toBe('new-hero')
      expect(result.current.activeProfile).not.toBeNull()
      expect(result.current.activeProfile.id).toBe('new-hero')
    })

    it('writes profile id to sessionStorage', async () => {
      profilesUtil.__setProfiles([])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      const newProfile = makeProfile({ id: 'session-hero' })
      act(() => {
        result.current.createAndActivate(newProfile)
      })

      expect(sessionMock.getItem(SESSION_KEY)).toBe('session-hero')
    })

    it('works alongside existing profiles', async () => {
      const existing = makeProfile({ id: 'existing-1' })
      profilesUtil.__setProfiles([existing])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      expect(result.current.profiles).toHaveLength(1)

      const newProfile = makeProfile({ id: 'new-1' })
      act(() => {
        result.current.createAndActivate(newProfile)
      })

      expect(result.current.profiles).toHaveLength(2)
      expect(result.current.activeProfile.id).toBe('new-1')
    })
  })

  // ── updateProfile ─────────────────────────────────────────────────────

  describe('updateProfile', () => {
    it('updates profile in state and localStorage', async () => {
      const profile = makeProfile({ id: 'p1', currentLevel: 1 })
      profilesUtil.__setProfiles([profile])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      act(() => {
        result.current.updateProfile('p1', { currentLevel: 5 })
      })

      expect(profilesUtil.updateProfile).toHaveBeenCalledWith('p1', { currentLevel: 5 })
      expect(result.current.profiles[0].currentLevel).toBe(5)
    })
  })

  // ── deleteProfile ─────────────────────────────────────────────────────

  describe('deleteProfile', () => {
    it('removes profile from state and localStorage', async () => {
      const profile = makeProfile({ id: 'p1' })
      profilesUtil.__setProfiles([profile])

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      let deleted
      act(() => {
        deleted = result.current.deleteProfile('p1')
      })

      expect(deleted).toBe(true)
      expect(result.current.profiles).toHaveLength(0)
    })

    it('clears sessionStorage when the active profile is deleted', async () => {
      const profile = makeProfile({ id: 'p1' })
      profilesUtil.__setProfiles([profile])
      profilesUtil.verifyPin.mockResolvedValue(true)

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      // Activate
      await act(async () => {
        await result.current.selectProfile(profile, '1234')
      })
      expect(sessionMock.getItem(SESSION_KEY)).toBe('p1')

      // Delete active
      act(() => {
        result.current.deleteProfile('p1')
      })

      expect(sessionMock.getItem(SESSION_KEY)).toBeNull()
    })

    it('does not clear sessionStorage when a different profile is deleted', async () => {
      const p1 = makeProfile({ id: 'p1' })
      const p2 = makeProfile({ id: 'p2' })
      profilesUtil.__setProfiles([p1, p2])
      profilesUtil.verifyPin.mockResolvedValue(true)

      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})

      // Activate p1
      await act(async () => {
        await result.current.selectProfile(p1, '1234')
      })

      // Delete p2
      act(() => {
        result.current.deleteProfile('p2')
      })

      expect(sessionMock.getItem(SESSION_KEY)).toBe('p1')
    })
  })

  // ── maxProfiles ───────────────────────────────────────────────────────

  describe('context value', () => {
    it('exposes maxProfiles from utils', async () => {
      const { result } = renderHook(() => useProfile(), { wrapper })
      await act(async () => {})
      expect(result.current.maxProfiles).toBe(4)
    })
  })

  // ── useProfile outside provider ───────────────────────────────────────

  describe('useProfile outside provider', () => {
    it('throws when used outside ProfileProvider', () => {
      // Suppress console.error from React
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
      expect(() => {
        renderHook(() => useProfile())
      }).toThrow('useProfile must be used within a <ProfileProvider>')
      spy.mockRestore()
    })
  })
})
