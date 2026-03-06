/**
 * Firebase Environment Variable Validation
 *
 * Pure validation logic separated from Firebase initialization
 * to enable unit testing without Firebase SDK side effects.
 */

// All 6 Firebase environment variables required for full functionality
export const REQUIRED_ENV_VARS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
]

/**
 * Returns a list of required Firebase env var names that are missing or empty.
 * @param {Record<string, string>} env - An object containing environment variables
 * @returns {string[]} Array of missing variable names (empty if all present)
 */
export function getMissingEnvVars(env) {
  return REQUIRED_ENV_VARS.filter((envVar) => !env[envVar])
}

/**
 * Validates that all required Firebase environment variables are present.
 * Throws a descriptive error listing which variables are missing.
 * @param {Record<string, string>} env - An object containing environment variables
 * @throws {Error} If any required environment variable is missing
 */
export function validateFirebaseEnv(env) {
  const missing = getMissingEnvVars(env)

  if (missing.length > 0) {
    throw new Error(
      `Missing required Firebase environment variables: ${missing.join(', ')}. ` +
      'Ensure variables are set in .env.local (local dev) or GitHub Secrets (CI/CD).'
    )
  }
}
