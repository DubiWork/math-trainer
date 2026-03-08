/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import {
  SESSION_KEY,
  MAX_PIN_ATTEMPTS,
  COOLDOWN_SECONDS,
  MAX_PROFILES,
  Actions,
  initialState,
  profileReducer,
} from './profileReducer'

// ─── Constants ────────────────────────────────────────────────────────────────

describe('profileReducer - constants', () => {
  it('SESSION_KEY is the expected string', () => {
    expect(SESSION_KEY).toBe('math-trainer-active-profile')
  })

  it('MAX_PIN_ATTEMPTS is 3', () => {
    expect(MAX_PIN_ATTEMPTS).toBe(3)
  })

  it('COOLDOWN_SECONDS is 30', () => {
    expect(COOLDOWN_SECONDS).toBe(30)
  })

  it('re-exports MAX_PROFILES from utils/profiles (4)', () => {
    expect(MAX_PROFILES).toBe(4)
  })

  it('Actions is frozen with 8 action types', () => {
    expect(Object.isFrozen(Actions)).toBe(true)
    expect(Object.keys(Actions)).toHaveLength(8)
    expect(Actions).toEqual({
      SET_PROFILES: 'SET_PROFILES',
      SET_ACTIVE: 'SET_ACTIVE',
      CLEAR_ACTIVE: 'CLEAR_ACTIVE',
      ADD_PROFILE: 'ADD_PROFILE',
      UPDATE_PROFILE: 'UPDATE_PROFILE',
      DELETE_PROFILE: 'DELETE_PROFILE',
      SET_LOADING: 'SET_LOADING',
      SET_ERROR: 'SET_ERROR',
    })
  })
})

// ─── Initial State ────────────────────────────────────────────────────────────

describe('profileReducer - initialState', () => {
  it('has expected shape', () => {
    expect(initialState).toEqual({
      profiles: [],
      activeProfile: null,
      isLoading: true,
      error: null,
    })
  })
})

// ─── Reducer Actions ──────────────────────────────────────────────────────────

describe('profileReducer - SET_PROFILES', () => {
  it('replaces profiles array and sets isLoading to false', () => {
    const profiles = [{ id: '1', nickname: 'A' }, { id: '2', nickname: 'B' }]
    const next = profileReducer(initialState, {
      type: Actions.SET_PROFILES,
      payload: profiles,
    })
    expect(next.profiles).toEqual(profiles)
    expect(next.isLoading).toBe(false)
  })

  it('preserves activeProfile when setting profiles', () => {
    const active = { id: '1', nickname: 'Active' }
    const state = { ...initialState, activeProfile: active }
    const next = profileReducer(state, {
      type: Actions.SET_PROFILES,
      payload: [active],
    })
    expect(next.activeProfile).toBe(active)
  })
})

describe('profileReducer - SET_ACTIVE', () => {
  it('sets activeProfile and clears error', () => {
    const state = { ...initialState, error: 'some error' }
    const profile = { id: '1', nickname: 'Dubi' }
    const next = profileReducer(state, {
      type: Actions.SET_ACTIVE,
      payload: profile,
    })
    expect(next.activeProfile).toBe(profile)
    expect(next.error).toBeNull()
  })
})

describe('profileReducer - CLEAR_ACTIVE', () => {
  it('sets activeProfile to null', () => {
    const state = {
      ...initialState,
      activeProfile: { id: '1', nickname: 'X' },
    }
    const next = profileReducer(state, { type: Actions.CLEAR_ACTIVE })
    expect(next.activeProfile).toBeNull()
  })
})

describe('profileReducer - ADD_PROFILE', () => {
  it('appends a profile to the array', () => {
    const existing = { id: '1', nickname: 'A' }
    const state = { ...initialState, profiles: [existing] }
    const newProfile = { id: '2', nickname: 'B' }
    const next = profileReducer(state, {
      type: Actions.ADD_PROFILE,
      payload: newProfile,
    })
    expect(next.profiles).toHaveLength(2)
    expect(next.profiles[1]).toBe(newProfile)
  })
})

describe('profileReducer - UPDATE_PROFILE', () => {
  it('replaces matching profile in the array', () => {
    const p1 = { id: '1', nickname: 'Old' }
    const p2 = { id: '2', nickname: 'Other' }
    const state = { ...initialState, profiles: [p1, p2] }
    const updated = { id: '1', nickname: 'New' }
    const next = profileReducer(state, {
      type: Actions.UPDATE_PROFILE,
      payload: updated,
    })
    expect(next.profiles[0]).toBe(updated)
    expect(next.profiles[1]).toBe(p2)
  })

  it('updates activeProfile when it matches the updated profile', () => {
    const active = { id: '1', nickname: 'Active' }
    const state = {
      ...initialState,
      profiles: [active],
      activeProfile: active,
    }
    const updated = { id: '1', nickname: 'Updated' }
    const next = profileReducer(state, {
      type: Actions.UPDATE_PROFILE,
      payload: updated,
    })
    expect(next.activeProfile).toBe(updated)
  })

  it('does not change activeProfile when another profile is updated', () => {
    const active = { id: '1', nickname: 'Active' }
    const other = { id: '2', nickname: 'Other' }
    const state = {
      ...initialState,
      profiles: [active, other],
      activeProfile: active,
    }
    const updated = { id: '2', nickname: 'Updated Other' }
    const next = profileReducer(state, {
      type: Actions.UPDATE_PROFILE,
      payload: updated,
    })
    expect(next.activeProfile).toBe(active)
  })
})

describe('profileReducer - DELETE_PROFILE', () => {
  it('removes matching profile from array', () => {
    const p1 = { id: '1', nickname: 'A' }
    const p2 = { id: '2', nickname: 'B' }
    const state = { ...initialState, profiles: [p1, p2] }
    const next = profileReducer(state, {
      type: Actions.DELETE_PROFILE,
      payload: '1',
    })
    expect(next.profiles).toHaveLength(1)
    expect(next.profiles[0]).toBe(p2)
  })

  it('clears activeProfile when the active profile is deleted', () => {
    const active = { id: '1', nickname: 'Active' }
    const state = {
      ...initialState,
      profiles: [active],
      activeProfile: active,
    }
    const next = profileReducer(state, {
      type: Actions.DELETE_PROFILE,
      payload: '1',
    })
    expect(next.activeProfile).toBeNull()
  })

  it('preserves activeProfile when a different profile is deleted', () => {
    const active = { id: '1', nickname: 'Active' }
    const other = { id: '2', nickname: 'Other' }
    const state = {
      ...initialState,
      profiles: [active, other],
      activeProfile: active,
    }
    const next = profileReducer(state, {
      type: Actions.DELETE_PROFILE,
      payload: '2',
    })
    expect(next.activeProfile).toBe(active)
  })
})

describe('profileReducer - SET_LOADING', () => {
  it('sets isLoading to the given boolean', () => {
    const next = profileReducer(initialState, {
      type: Actions.SET_LOADING,
      payload: false,
    })
    expect(next.isLoading).toBe(false)
  })
})

describe('profileReducer - SET_ERROR', () => {
  it('sets error to the given payload', () => {
    const next = profileReducer(initialState, {
      type: Actions.SET_ERROR,
      payload: 'Something broke',
    })
    expect(next.error).toBe('Something broke')
  })
})

describe('profileReducer - unknown action', () => {
  it('returns the same state for an unknown action type', () => {
    const state = { ...initialState, profiles: [{ id: '1' }] }
    const next = profileReducer(state, { type: 'UNKNOWN_ACTION' })
    expect(next).toBe(state)
  })
})
