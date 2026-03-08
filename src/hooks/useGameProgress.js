/**
 * useGameProgress Hook
 *
 * Manages game progress state with Firestore persistence.
 * - Auto-loads progress when user authenticates
 * - Auto-saves progress on changes (debounced to avoid excessive writes)
 * - Handles network errors gracefully
 *
 * @param {string} userId - Firebase user ID (from useFirebase hook)
 * @returns {Object} { progress, updateProgress, resetProgress, loading, error, saving }
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  loadProgress,
  saveProgress,
  resetProgress as resetProgressFirestore,
  DEFAULT_PROGRESS,
} from '../firebase/firestore'

// Debounce delay for auto-save (ms)
const SAVE_DEBOUNCE_MS = 2000

export function useGameProgress(userId) {
  const [progress, setProgress] = useState(DEFAULT_PROGRESS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  // Track if initial load is complete to avoid saving on mount
  const initialLoadComplete = useRef(false)
  // Track pending save timeout for debouncing
  const saveTimeoutRef = useRef(null)
  // Track if component is mounted to avoid state updates after unmount
  const isMountedRef = useRef(true)

  // Load progress when userId becomes available
  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    let isCancelled = false

    async function fetchProgress() {
      try {
        setLoading(true)
        setError(null)
        const data = await loadProgress(userId)

        if (!isCancelled && isMountedRef.current) {
          setProgress(data)
          initialLoadComplete.current = true
        }
      } catch (err) {
        if (!isCancelled && isMountedRef.current) {
          console.error('useGameProgress: Failed to load progress', err)
          setError(err)
          // Use defaults on error
          setProgress(DEFAULT_PROGRESS)
          initialLoadComplete.current = true
        }
      } finally {
        if (!isCancelled && isMountedRef.current) {
          setLoading(false)
        }
      }
    }

    fetchProgress()

    return () => {
      isCancelled = true
    }
  }, [userId])

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      // Clear any pending save
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [])

  // Debounced save function
  const debouncedSave = useCallback(
    (newProgress) => {
      if (!userId || !initialLoadComplete.current) {
        return
      }

      // Clear any existing timeout
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }

      // Set new timeout for debounced save
      saveTimeoutRef.current = setTimeout(async () => {
        if (!isMountedRef.current) return

        try {
          setSaving(true)
          await saveProgress(userId, newProgress)
          if (isMountedRef.current) {
            setError(null)
          }
        } catch (err) {
          console.error('useGameProgress: Failed to save progress', err)
          if (isMountedRef.current) {
            setError(err)
          }
        } finally {
          if (isMountedRef.current) {
            setSaving(false)
          }
        }
      }, SAVE_DEBOUNCE_MS)
    },
    [userId]
  )

  // Update progress with partial data
  const updateProgress = useCallback(
    (updates) => {
      setProgress((prev) => {
        const newProgress = {
          ...prev,
          ...updates,
        }
        // Trigger debounced save
        debouncedSave(newProgress)
        return newProgress
      })
    },
    [debouncedSave]
  )

  // Reset progress to defaults
  const resetProgress = useCallback(async () => {
    if (!userId) {
      setProgress(DEFAULT_PROGRESS)
      return true
    }

    try {
      setSaving(true)
      setError(null)
      await resetProgressFirestore(userId)
      if (isMountedRef.current) {
        setProgress(DEFAULT_PROGRESS)
      }
      return true
    } catch (err) {
      console.error('useGameProgress: Failed to reset progress', err)
      if (isMountedRef.current) {
        setError(err)
      }
      return false
    } finally {
      if (isMountedRef.current) {
        setSaving(false)
      }
    }
  }, [userId])

  // Force save immediately (useful before navigation or when user explicitly saves)
  const forceSave = useCallback(async () => {
    if (!userId || !initialLoadComplete.current) {
      return false
    }

    // Clear any pending debounced save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }

    try {
      setSaving(true)
      await saveProgress(userId, progress)
      if (isMountedRef.current) {
        setError(null)
      }
      return true
    } catch (err) {
      console.error('useGameProgress: Failed to force save', err)
      if (isMountedRef.current) {
        setError(err)
      }
      return false
    } finally {
      if (isMountedRef.current) {
        setSaving(false)
      }
    }
  }, [userId, progress])

  return {
    progress,
    updateProgress,
    resetProgress,
    forceSave,
    loading,
    saving,
    error,
  }
}
