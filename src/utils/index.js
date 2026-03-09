/**
 * Utility functions for Math Trainer
 *
 * This directory contains:
 * - mathProblems.js: Generate random math problems
 * - profiles.js: Profile CRUD and PIN hashing utilities
 * - scoring.js: Score calculation logic (to be added)
 * - constants.js: Game configuration constants (to be added)
 */

export {
  generateProblem,
  validateAnswer,
  formatProblem,
  generateProblems
} from './mathProblems.js';

export {
  STORAGE_KEY,
  MAX_PROFILES,
  MAX_NICKNAME_LENGTH,
  PIN_LENGTH,
  VALID_THEMES,
  getProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
  hashPin,
  verifyPin
} from './profiles.js';
