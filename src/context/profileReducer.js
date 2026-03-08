/**
 * ProfileContext internals — constants, actions, and reducer
 *
 * Separated from ProfileContext.jsx to satisfy react-refresh
 * (only components should be exported from JSX files).
 */

import { MAX_PROFILES } from '../utils/profiles'

// ─── Constants ──────────────────────────────────────────────────────────────

/** @type {string} sessionStorage key for active profile id */
export const SESSION_KEY = 'math-trainer-active-profile'

/** @type {number} Maximum PIN attempts before cooldown */
export const MAX_PIN_ATTEMPTS = 3

/** @type {number} Cooldown duration in seconds after max PIN attempts */
export const COOLDOWN_SECONDS = 30

/** Re-export for consumers that want the limit without importing utils */
export { MAX_PROFILES }

// ─── Reducer Actions ────────────────────────────────────────────────────────

export const Actions = Object.freeze({
  SET_PROFILES: 'SET_PROFILES',
  SET_ACTIVE: 'SET_ACTIVE',
  CLEAR_ACTIVE: 'CLEAR_ACTIVE',
  ADD_PROFILE: 'ADD_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  DELETE_PROFILE: 'DELETE_PROFILE',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
})

// ─── Reducer ────────────────────────────────────────────────────────────────

/** @type {Object} Initial reducer state */
export const initialState = {
  profiles: [],
  activeProfile: null,
  isLoading: true,
  error: null,
}

/**
 * Pure reducer for profile state transitions.
 *
 * @param {Object} state  Current state
 * @param {Object} action Dispatched action with `type` and optional payload
 * @returns {Object} New state
 */
export function profileReducer(state, action) {
  switch (action.type) {
    case Actions.SET_PROFILES:
      return { ...state, profiles: action.payload, isLoading: false }

    case Actions.SET_ACTIVE:
      return { ...state, activeProfile: action.payload, error: null }

    case Actions.CLEAR_ACTIVE:
      return { ...state, activeProfile: null }

    case Actions.ADD_PROFILE:
      return { ...state, profiles: [...state.profiles, action.payload] }

    case Actions.UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        activeProfile:
          state.activeProfile?.id === action.payload.id
            ? action.payload
            : state.activeProfile,
      }

    case Actions.DELETE_PROFILE: {
      const nextProfiles = state.profiles.filter((p) => p.id !== action.payload)
      return {
        ...state,
        profiles: nextProfiles,
        activeProfile:
          state.activeProfile?.id === action.payload
            ? null
            : state.activeProfile,
      }
    }

    case Actions.SET_LOADING:
      return { ...state, isLoading: action.payload }

    case Actions.SET_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
