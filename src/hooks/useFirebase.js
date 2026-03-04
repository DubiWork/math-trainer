/**
 * useFirebase Hook
 *
 * Manages Firebase anonymous authentication.
 * Auto-initializes authentication on mount.
 *
 * @returns {Object} { user, loading, error }
 *   - user: The authenticated Firebase user object (or null)
 *   - loading: Boolean indicating auth state is being determined
 *   - error: Error object if authentication failed (or null)
 */

import { useState, useEffect, useCallback } from 'react'
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'

export function useFirebase() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Sign in anonymously
  const signIn = useCallback(async () => {
    try {
      setError(null)
      await signInAnonymously(auth)
    } catch (err) {
      console.error('Anonymous sign-in failed:', err.message)
      setError(err)
    }
  }, [])

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        if (firebaseUser) {
          // User is signed in
          setUser(firebaseUser)
          setLoading(false)
          console.log('User authenticated with ID:', firebaseUser.uid)
        } else {
          // User is signed out, initiate anonymous sign-in
          setUser(null)
          signIn()
        }
      },
      (err) => {
        console.error('Auth state change error:', err.message)
        setError(err)
        setLoading(false)
      }
    )

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [signIn])

  return { user, loading, error }
}
