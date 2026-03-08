/**
 * useProfile hook — consumes ProfileContext
 *
 * Separated from ProfileContext.jsx so the .jsx file only exports
 * the ProfileProvider component (satisfies react-refresh/only-export-components).
 */

import { useContext } from 'react'
import ProfileContext from './profileContext'

/**
 * Hook to consume profile context.
 * Must be used inside a <ProfileProvider>.
 *
 * @returns {Object} Profile state and action functions
 */
export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (ctx === null) {
    throw new Error('useProfile must be used within a <ProfileProvider>')
  }
  return ctx
}
