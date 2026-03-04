import { describe, it, expect } from 'vitest'
import {
  REQUIRED_ENV_VARS,
  getMissingEnvVars,
  validateFirebaseEnv,
} from './validateEnv'

// Helper: returns a complete set of valid Firebase env vars
function makeFullEnv() {
  return {
    VITE_FIREBASE_API_KEY: 'test-api-key',
    VITE_FIREBASE_AUTH_DOMAIN: 'test.firebaseapp.com',
    VITE_FIREBASE_PROJECT_ID: 'test-project',
    VITE_FIREBASE_STORAGE_BUCKET: 'test.appspot.com',
    VITE_FIREBASE_MESSAGING_SENDER_ID: '123456789',
    VITE_FIREBASE_APP_ID: '1:123:web:abc',
  }
}

describe('REQUIRED_ENV_VARS', () => {
  it('should contain exactly 6 required variables', () => {
    expect(REQUIRED_ENV_VARS).toHaveLength(6)
  })

  it('should include all Firebase config variable names', () => {
    expect(REQUIRED_ENV_VARS).toContain('VITE_FIREBASE_API_KEY')
    expect(REQUIRED_ENV_VARS).toContain('VITE_FIREBASE_AUTH_DOMAIN')
    expect(REQUIRED_ENV_VARS).toContain('VITE_FIREBASE_PROJECT_ID')
    expect(REQUIRED_ENV_VARS).toContain('VITE_FIREBASE_STORAGE_BUCKET')
    expect(REQUIRED_ENV_VARS).toContain('VITE_FIREBASE_MESSAGING_SENDER_ID')
    expect(REQUIRED_ENV_VARS).toContain('VITE_FIREBASE_APP_ID')
  })

  it('should use VITE_ prefix for all variables', () => {
    REQUIRED_ENV_VARS.forEach((envVar) => {
      expect(envVar).toMatch(/^VITE_/)
    })
  })
})

describe('getMissingEnvVars', () => {
  it('should return empty array when all env vars are present', () => {
    const env = makeFullEnv()
    expect(getMissingEnvVars(env)).toEqual([])
  })

  it('should return all variable names when env is empty', () => {
    expect(getMissingEnvVars({})).toEqual(REQUIRED_ENV_VARS)
  })

  it('should detect a single missing variable', () => {
    const env = makeFullEnv()
    delete env.VITE_FIREBASE_API_KEY

    const missing = getMissingEnvVars(env)
    expect(missing).toEqual(['VITE_FIREBASE_API_KEY'])
  })

  it('should detect multiple missing variables', () => {
    const env = makeFullEnv()
    delete env.VITE_FIREBASE_API_KEY
    delete env.VITE_FIREBASE_APP_ID

    const missing = getMissingEnvVars(env)
    expect(missing).toContain('VITE_FIREBASE_API_KEY')
    expect(missing).toContain('VITE_FIREBASE_APP_ID')
    expect(missing).toHaveLength(2)
  })

  it('should treat empty string values as missing', () => {
    const env = makeFullEnv()
    env.VITE_FIREBASE_PROJECT_ID = ''

    const missing = getMissingEnvVars(env)
    expect(missing).toEqual(['VITE_FIREBASE_PROJECT_ID'])
  })

  it('should treat undefined values as missing', () => {
    const env = makeFullEnv()
    env.VITE_FIREBASE_STORAGE_BUCKET = undefined

    const missing = getMissingEnvVars(env)
    expect(missing).toEqual(['VITE_FIREBASE_STORAGE_BUCKET'])
  })

  it('should treat null values as missing', () => {
    const env = makeFullEnv()
    env.VITE_FIREBASE_MESSAGING_SENDER_ID = null

    const missing = getMissingEnvVars(env)
    expect(missing).toEqual(['VITE_FIREBASE_MESSAGING_SENDER_ID'])
  })

  it('should not flag extra variables as missing', () => {
    const env = { ...makeFullEnv(), EXTRA_VAR: 'extra' }
    expect(getMissingEnvVars(env)).toEqual([])
  })
})

describe('validateFirebaseEnv', () => {
  it('should not throw when all env vars are present', () => {
    const env = makeFullEnv()
    expect(() => validateFirebaseEnv(env)).not.toThrow()
  })

  it('should throw when env is empty', () => {
    expect(() => validateFirebaseEnv({})).toThrow(
      'Missing required Firebase environment variables'
    )
  })

  it('should include missing variable names in error message', () => {
    const env = makeFullEnv()
    delete env.VITE_FIREBASE_API_KEY
    delete env.VITE_FIREBASE_APP_ID

    expect(() => validateFirebaseEnv(env)).toThrow(
      'VITE_FIREBASE_API_KEY, VITE_FIREBASE_APP_ID'
    )
  })

  it('should mention .env.local in error message for local dev', () => {
    expect(() => validateFirebaseEnv({})).toThrow('.env.local')
  })

  it('should mention GitHub Secrets in error message for CI/CD', () => {
    expect(() => validateFirebaseEnv({})).toThrow('GitHub Secrets')
  })

  it('should throw Error type', () => {
    expect(() => validateFirebaseEnv({})).toThrow(Error)
  })

  it('should throw when only some variables are present', () => {
    const env = {
      VITE_FIREBASE_API_KEY: 'key',
      VITE_FIREBASE_AUTH_DOMAIN: 'domain',
    }

    expect(() => validateFirebaseEnv(env)).toThrow(
      'VITE_FIREBASE_PROJECT_ID'
    )
  })
})
