/**
 * Firestore Operations for Game Progress
 *
 * Helper functions for saving and loading game progress from Firestore.
 * Uses Firestore v9+ modular syntax.
 *
 * Data Structure:
 * users/{userId}/progress/gameData
 *   - score: number
 *   - streak: number
 *   - currentStreak: number
 *   - totalProblems: number
 *   - correctAnswers: number
 *   - lastPlayed: timestamp
 */

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './config'

// Default progress for new users
export const DEFAULT_PROGRESS = {
  score: 0,
  streak: 0,
  currentStreak: 0,
  totalProblems: 0,
  correctAnswers: 0,
  lastPlayed: null,
}

/**
 * Get document reference for user's progress
 * @param {string} userId - Firebase user ID
 * @returns {DocumentReference} Firestore document reference
 */
function getProgressRef(userId) {
  return doc(db, 'users', userId, 'progress', 'gameData')
}

/**
 * Save complete progress data for a user
 * @param {string} userId - Firebase user ID
 * @param {Object} progressData - Progress data to save
 * @returns {Promise<boolean>} Success status
 */
export async function saveProgress(userId, progressData) {
  if (!userId) {
    console.error('saveProgress: userId is required')
    return false
  }

  try {
    const progressRef = getProgressRef(userId)
    await setDoc(progressRef, {
      ...progressData,
      lastPlayed: serverTimestamp(),
    })
    console.log('Progress saved successfully for user:', userId.substring(0, 8))
    return true
  } catch (error) {
    console.error('Failed to save progress:', error.message)
    throw error
  }
}

/**
 * Load existing progress for a user
 * @param {string} userId - Firebase user ID
 * @returns {Promise<Object>} Progress data or default if not found
 */
export async function loadProgress(userId) {
  if (!userId) {
    console.error('loadProgress: userId is required')
    return DEFAULT_PROGRESS
  }

  try {
    const progressRef = getProgressRef(userId)
    const docSnap = await getDoc(progressRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      console.log('Progress loaded for user:', userId.substring(0, 8))
      return {
        ...DEFAULT_PROGRESS,
        ...data,
        // Convert Firestore timestamp to JS Date if present
        lastPlayed: data.lastPlayed?.toDate() || null,
      }
    } else {
      console.log('No progress found for user, returning defaults:', userId.substring(0, 8))
      return DEFAULT_PROGRESS
    }
  } catch (error) {
    console.error('Failed to load progress:', error.message)
    // Return defaults on error to allow graceful degradation
    return DEFAULT_PROGRESS
  }
}

/**
 * Update specific stats fields for a user
 * @param {string} userId - Firebase user ID
 * @param {Object} statsUpdate - Partial stats to update
 * @returns {Promise<boolean>} Success status
 */
export async function updateStats(userId, statsUpdate) {
  if (!userId) {
    console.error('updateStats: userId is required')
    return false
  }

  if (!statsUpdate || Object.keys(statsUpdate).length === 0) {
    console.error('updateStats: statsUpdate is required')
    return false
  }

  try {
    const progressRef = getProgressRef(userId)
    const docSnap = await getDoc(progressRef)

    if (docSnap.exists()) {
      // Document exists, use updateDoc
      await updateDoc(progressRef, {
        ...statsUpdate,
        lastPlayed: serverTimestamp(),
      })
    } else {
      // Document doesn't exist, create with setDoc
      await setDoc(progressRef, {
        ...DEFAULT_PROGRESS,
        ...statsUpdate,
        lastPlayed: serverTimestamp(),
      })
    }

    console.log('Stats updated for user:', userId.substring(0, 8))
    return true
  } catch (error) {
    console.error('Failed to update stats:', error.message)
    throw error
  }
}

/**
 * Reset progress to defaults for a user
 * @param {string} userId - Firebase user ID
 * @returns {Promise<boolean>} Success status
 */
export async function resetProgress(userId) {
  if (!userId) {
    console.error('resetProgress: userId is required')
    return false
  }

  try {
    const progressRef = getProgressRef(userId)
    await setDoc(progressRef, {
      ...DEFAULT_PROGRESS,
      lastPlayed: serverTimestamp(),
    })
    console.log('Progress reset for user:', userId.substring(0, 8))
    return true
  } catch (error) {
    console.error('Failed to reset progress:', error.message)
    throw error
  }
}
