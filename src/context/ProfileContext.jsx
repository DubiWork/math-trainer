/**
 * ProfileContext — React context for multi-profile management
 *
 * Provides profile state (loaded from localStorage) and actions to the
 * entire component tree.  Uses useReducer for predictable state transitions.
 *
 * Persistence:
 * - Profile list: localStorage  (via src/utils/profiles.js)
 * - Active profile id: sessionStorage  (survives refresh, clears on tab close)
 *
 * Exports from this file:
 * - ProfileProvider (component)
 * - ProfileContext  (context object — consumed by useProfile.js)
 *
 * Constants, actions, and reducer are in ./profileReducer.js
 * The useProfile hook lives in ./useProfile.js
 */

import { useReducer, useEffect, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  getProfiles,
  updateProfile as updateProfileStorage,
  deleteProfile as deleteProfileStorage,
  verifyPin,
  MAX_PROFILES,
} from '../utils/profiles'
import {
  SESSION_KEY,
  Actions,
  initialState,
  profileReducer,
} from './profileReducer'
import ProfileContext from './profileContext'

// ─── Provider ───────────────────────────────────────────────────────────────

/**
 * ProfileProvider — wraps the component tree with profile state.
 *
 * On mount:
 * 1. Reads profiles from localStorage.
 * 2. Checks sessionStorage for a previously-active profile id.
 * 3. If the stored id maps to a valid profile, restores it.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState)

  // ── Bootstrap: load profiles + restore session ────────────────────────
  useEffect(() => {
    const profiles = getProfiles()
    dispatch({ type: Actions.SET_PROFILES, payload: profiles })

    const storedId = sessionStorage.getItem(SESSION_KEY)
    if (storedId) {
      const found = profiles.find((p) => p.id === storedId) || null
      if (found) {
        dispatch({ type: Actions.SET_ACTIVE, payload: found })
      } else {
        // Stale reference — clean up
        sessionStorage.removeItem(SESSION_KEY)
      }
    }
  }, [])

  // ── Actions exposed to consumers ──────────────────────────────────────

  /**
   * Verify PIN and activate a profile.
   *
   * @param {Object} profile  The profile to activate
   * @param {string} pin      4-digit PIN string
   * @returns {Promise<boolean>} True if PIN was correct
   */
  const selectProfile = useCallback(async (profile, pin) => {
    const isValid = await verifyPin(pin, profile.pinHash)
    if (!isValid) return false

    // Update lastActiveAt in storage
    const updated = updateProfileStorage(profile.id, {})
    dispatch({ type: Actions.SET_ACTIVE, payload: updated })
    sessionStorage.setItem(SESSION_KEY, profile.id)
    return true
  }, [])

  /**
   * Clear the active profile (logout).
   * Removes sessionStorage entry so a tab refresh shows the switcher.
   */
  const clearActiveProfile = useCallback(() => {
    dispatch({ type: Actions.CLEAR_ACTIVE })
    sessionStorage.removeItem(SESSION_KEY)
  }, [])

  /**
   * Re-read profiles from localStorage into state.
   * Useful after external mutation (e.g., create-profile flow in #20).
   */
  const refreshProfiles = useCallback(() => {
    const profiles = getProfiles()
    dispatch({ type: Actions.SET_PROFILES, payload: profiles })
  }, [])

  /**
   * Add a newly-created profile to state (without re-reading all of storage).
   * @param {Object} profile
   */
  const addProfile = useCallback((profile) => {
    dispatch({ type: Actions.ADD_PROFILE, payload: profile })
  }, [])

  /**
   * Create a new profile and immediately activate it.
   * Combines ADD_PROFILE + SET_ACTIVE dispatches and writes to sessionStorage
   * in a single call for atomic profile creation flows.
   *
   * @param {Object} profile The newly-created profile object
   */
  const createAndActivate = useCallback((profile) => {
    dispatch({ type: Actions.ADD_PROFILE, payload: profile })
    dispatch({ type: Actions.SET_ACTIVE, payload: profile })
    sessionStorage.setItem(SESSION_KEY, profile.id)
  }, [])

  /**
   * Update an existing profile in state + localStorage.
   * @param {string} id       Profile UUID
   * @param {Object} updates  Fields to merge
   * @returns {Object} Updated profile
   */
  const updateProfile = useCallback((id, updates) => {
    const updated = updateProfileStorage(id, updates)
    dispatch({ type: Actions.UPDATE_PROFILE, payload: updated })
    return updated
  }, [])

  /**
   * Delete a profile from state + localStorage.
   * @param {string} id Profile UUID
   * @returns {boolean} True if deleted
   */
  const deleteProfile = useCallback((id) => {
    const deleted = deleteProfileStorage(id)
    if (deleted) {
      dispatch({ type: Actions.DELETE_PROFILE, payload: id })
      // If the deleted profile was active, clear session
      const storedId = sessionStorage.getItem(SESSION_KEY)
      if (storedId === id) {
        sessionStorage.removeItem(SESSION_KEY)
      }
    }
    return deleted
  }, [])

  // ── Memoised context value ────────────────────────────────────────────
  const value = useMemo(
    () => ({
      // State
      profiles: state.profiles,
      activeProfile: state.activeProfile,
      isLoading: state.isLoading,
      error: state.error,
      maxProfiles: MAX_PROFILES,

      // Actions
      selectProfile,
      clearActiveProfile,
      refreshProfiles,
      addProfile,
      createAndActivate,
      updateProfile,
      deleteProfile,
    }),
    [
      state.profiles,
      state.activeProfile,
      state.isLoading,
      state.error,
      selectProfile,
      clearActiveProfile,
      refreshProfiles,
      addProfile,
      createAndActivate,
      updateProfile,
      deleteProfile,
    ]
  )

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
