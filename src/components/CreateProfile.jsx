/**
 * CreateProfile -- 4-step wizard for creating new profiles
 *
 * A full-screen wizard that walks the child through profile creation:
 *   Step 1: Nickname input (max 12 chars, Unicode-safe)
 *   Step 2: Theme selection (Sonic / Spiderman)
 *   Step 3: PIN entry (via PinEntry component, no rate limiting)
 *   Step 4: PIN confirmation (via PinEntry, mismatch detection)
 *
 * After successful PIN confirmation:
 *   1. signInAnonymously(auth) to get a Firebase UID
 *   2. hashPin(pin) from profiles.js
 *   3. createProfile({ nickname, theme, pinHash, firebaseUid })
 *   4. onComplete(newProfile) -- parent handles context activation
 *
 * Wizard state is local (useReducer) -- ephemeral UI, not in ProfileContext.
 * Firebase auth is called ONLY on the final step to avoid orphaned accounts.
 * Cancel from step 1 returns to ProfileSwitcher immediately (no confirmation).
 * Back navigation preserves state (except PINs, cleared for security).
 *
 * @param {Object}   props
 * @param {Function} props.onComplete  Called with the new profile object on success
 * @param {Function} props.onCancel    Called when the user cancels the wizard
 */

import { useReducer, useCallback, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { signInAnonymously } from 'firebase/auth'
import { auth } from '../firebase/config'
import {
  createProfile,
  hashPin,
  VALID_THEMES,
  MAX_NICKNAME_LENGTH,
} from '../utils/profiles'
import PinEntry from './PinEntry'

// ---- Wizard Reducer Actions ------------------------------------------------

const WizardActions = Object.freeze({
  SET_NICKNAME: 'SET_NICKNAME',
  SET_THEME: 'SET_THEME',
  SET_PIN_HASH: 'SET_PIN_HASH',
  CONFIRM_MISMATCH: 'CONFIRM_MISMATCH',
  SET_SUBMITTING: 'SET_SUBMITTING',
  SET_ERROR: 'SET_ERROR',
  GO_BACK: 'GO_BACK',
  RESET: 'RESET',
})

/** @type {Object} Initial wizard state */
const wizardInitialState = {
  step: 1,
  nickname: '',
  theme: null,
  pinHash: null,
  isSubmitting: false,
  error: null,
}

/**
 * Pure reducer for wizard state transitions.
 *
 * @param {Object} state  Current wizard state
 * @param {Object} action Dispatched action { type, payload? }
 * @returns {Object} New state
 */
function wizardReducer(state, action) {
  switch (action.type) {
    case WizardActions.SET_NICKNAME:
      return { ...state, nickname: action.payload, step: 2, error: null }

    case WizardActions.SET_THEME:
      return { ...state, theme: action.payload, step: 3, error: null }

    case WizardActions.SET_PIN_HASH:
      return { ...state, pinHash: action.payload, step: 4, error: null }

    case WizardActions.CONFIRM_MISMATCH:
      return { ...state, error: 'PINs do not match. Try again!' }

    case WizardActions.SET_SUBMITTING:
      return { ...state, isSubmitting: action.payload, error: null }

    case WizardActions.SET_ERROR:
      return { ...state, error: action.payload, isSubmitting: false }

    case WizardActions.GO_BACK: {
      if (state.step === 2) return { ...state, step: 1, error: null }
      if (state.step === 3) return { ...state, step: 2, error: null }
      // Step 4 back: clear both PINs for security
      if (state.step === 4) return { ...state, step: 3, pinHash: null, error: null }
      return state
    }

    case WizardActions.RESET:
      return { ...wizardInitialState }

    default:
      return state
  }
}

// ---- Theme Config ----------------------------------------------------------

/** @type {number} Total wizard steps */
const TOTAL_STEPS = 4

/** Map theme id to display emoji */
const THEME_EMOJI = {
  sonic: '\u{1F994}',      // Hedgehog
  spiderman: '\u{1F577}',  // Spider
}

/** Map theme id to display label */
const THEME_LABEL = {
  sonic: 'Sonic',
  spiderman: 'Spiderman',
}

/** Map theme id to glow shadow class */
const THEME_GLOW = {
  sonic: 'shadow-blue-500/40',
  spiderman: 'shadow-red-500/40',
}

/** Map theme id to border color class */
const THEME_BORDER = {
  sonic: 'border-sonic-blue',
  spiderman: 'border-sonic-red',
}

// ---- StepIndicator ---------------------------------------------------------

/**
 * 4-dot progress indicator for the wizard.
 *
 * @param {Object} props
 * @param {number} props.currentStep Current step (1-based)
 */
function StepIndicator({ currentStep }) {
  return (
    <div
      className="flex justify-center gap-3 mb-6"
      role="group"
      aria-label="Profile creation progress"
    >
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
        const stepNum = i + 1
        const isCurrent = stepNum === currentStep
        const isFilled = stepNum < currentStep
        return (
          <div
            key={stepNum}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              motion-reduce:transition-none
              ${isFilled ? 'bg-sonic-gold' : ''}
              ${isCurrent ? 'bg-sonic-gold animate-pulse motion-reduce:animate-none' : ''}
              ${!isFilled && !isCurrent ? 'border-2 border-white/30 bg-transparent' : ''}
            `}
            aria-current={isCurrent ? 'step' : undefined}
            aria-label={`Step ${stepNum} of ${TOTAL_STEPS}${isCurrent ? ', current' : isFilled ? ', completed' : ''}`}
          />
        )
      })}
    </div>
  )
}

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
}

// ---- CreateProfile Component -----------------------------------------------

function CreateProfile({ onComplete, onCancel }) {
  const [state, dispatch] = useReducer(wizardReducer, wizardInitialState)
  const nicknameInputRef = useRef(null)
  const nextButtonRef = useRef(null)
  const isMountedRef = useRef(true)

  // Track mount status for async safety
  useEffect(() => {
    isMountedRef.current = true
    return () => { isMountedRef.current = false }
  }, [])

  // Auto-focus nickname input on step 1 mount
  useEffect(() => {
    if (state.step === 1 && nicknameInputRef.current) {
      nicknameInputRef.current.focus()
    }
  }, [state.step])

  // ---- Nickname state (local, not in reducer until submit) -----------------
  // We keep the live typing value separate so the reducer only stores the
  // validated/trimmed nickname when the user advances.
  const [nicknameInput, setNicknameInput] = useReducer(
    (_prev, next) => next,
    state.nickname
  )

  // Sync nicknameInput when navigating back to step 1
  useEffect(() => {
    if (state.step === 1) {
      setNicknameInput(state.nickname)
    }
  }, [state.step, state.nickname])

  // ---- Theme selection state (local for highlight before advancing) --------
  const [selectedTheme, setSelectedTheme] = useReducer(
    (_prev, next) => next,
    state.theme
  )

  // Sync selectedTheme when navigating back to step 2
  useEffect(() => {
    if (state.step === 2) {
      setSelectedTheme(state.theme)
    }
  }, [state.step, state.theme])

  // ---- Nickname helpers ----------------------------------------------------

  /** Unicode-safe character count */
  const nicknameCharCount = [...nicknameInput].length
  const remainingChars = MAX_NICKNAME_LENGTH - nicknameCharCount
  const isNicknameValid = nicknameInput.trim().length > 0 && nicknameCharCount <= MAX_NICKNAME_LENGTH

  /**
   * Handle nickname input change, enforcing max length (Unicode-safe).
   * @param {Event} e
   */
  const handleNicknameChange = useCallback((e) => {
    const value = e.target.value
    const chars = [...value]
    if (chars.length <= MAX_NICKNAME_LENGTH) {
      setNicknameInput(value)
    }
  }, [])

  /** Advance from step 1 to step 2 with the trimmed nickname. */
  const handleNicknameSubmit = useCallback(() => {
    const trimmed = nicknameInput.trim()
    if (trimmed.length > 0 && [...trimmed].length <= MAX_NICKNAME_LENGTH) {
      dispatch({ type: WizardActions.SET_NICKNAME, payload: trimmed })
    }
  }, [nicknameInput])

  /**
   * Handle Enter key on nickname input.
   * @param {KeyboardEvent} e
   */
  const handleNicknameKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleNicknameSubmit()
    }
  }, [handleNicknameSubmit])

  // ---- Theme helpers -------------------------------------------------------

  /** Advance from step 2 to step 3 with the selected theme. */
  const handleThemeSubmit = useCallback(() => {
    if (selectedTheme && VALID_THEMES.includes(selectedTheme)) {
      dispatch({ type: WizardActions.SET_THEME, payload: selectedTheme })
    }
  }, [selectedTheme])

  /**
   * Handle keyboard navigation on theme picker.
   * @param {KeyboardEvent} e
   */
  const handleThemeKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      const currentIndex = VALID_THEMES.indexOf(selectedTheme)
      const nextIndex = e.key === 'ArrowRight'
        ? (currentIndex + 1) % VALID_THEMES.length
        : (currentIndex - 1 + VALID_THEMES.length) % VALID_THEMES.length
      setSelectedTheme(VALID_THEMES[nextIndex])
    }
  }, [selectedTheme])

  // ---- PIN helpers ---------------------------------------------------------

  /**
   * Handle PIN entry on step 3 -- hash and store, then advance.
   * @param {string} pin 4-digit PIN string
   */
  const handlePinSet = useCallback(async (pin) => {
    try {
      const hash = await hashPin(pin)
      if (isMountedRef.current) {
        dispatch({ type: WizardActions.SET_PIN_HASH, payload: hash })
      }
    } catch {
      if (isMountedRef.current) {
        dispatch({ type: WizardActions.SET_ERROR, payload: 'Could not process PIN. Try again.' })
      }
    }
  }, [])

  /**
   * Handle PIN confirmation on step 4 -- hash and compare.
   * On match: proceed to Firebase auth + profile creation.
   * On mismatch: show error, clear confirmation, stay on step 4.
   * @param {string} pin 4-digit PIN string
   */
  const handlePinConfirm = useCallback(async (pin) => {
    try {
      const confirmHash = await hashPin(pin)
      if (!isMountedRef.current) return

      if (confirmHash !== state.pinHash) {
        dispatch({ type: WizardActions.CONFIRM_MISMATCH })
        return
      }

      // PINs match -- proceed to creation
      dispatch({ type: WizardActions.SET_SUBMITTING, payload: true })

      // 1. Firebase anonymous auth
      const userCredential = await signInAnonymously(auth)
      if (!isMountedRef.current) return
      const firebaseUid = userCredential.user.uid

      // 2. Create profile in localStorage
      const newProfile = createProfile({
        nickname: state.nickname,
        theme: state.theme,
        pinHash: state.pinHash,
        firebaseUid,
      })

      if (!isMountedRef.current) return

      // 3. Notify parent
      onComplete(newProfile)
    } catch (err) {
      if (!isMountedRef.current) return
      const message = err?.message?.includes('Maximum')
        ? err.message
        : 'Could not create hero. Try again!'
      dispatch({ type: WizardActions.SET_ERROR, payload: message })
    }
  }, [state.pinHash, state.nickname, state.theme, onComplete])

  /** Retry after error (re-attempts profile creation from step 4 state). */
  const handleRetry = useCallback(() => {
    dispatch({ type: WizardActions.SET_ERROR, payload: null })
  }, [])

  // ---- Back navigation -----------------------------------------------------

  const handleBack = useCallback(() => {
    dispatch({ type: WizardActions.GO_BACK })
  }, [])

  // ---- Keyboard: Escape for back/cancel ------------------------------------
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (state.step === 1) {
          onCancel()
        } else if (!state.isSubmitting) {
          handleBack()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [state.step, state.isSubmitting, onCancel, handleBack])

  // ---- Render helpers ------------------------------------------------------

  /** Render the back/cancel link for the current step. */
  const renderBackCancel = () => {
    if (state.isSubmitting) return null

    if (state.step === 1) {
      return (
        <button
          onClick={onCancel}
          className="text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                     hover:text-white transition-colors duration-150
                     focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg"
          aria-label="Cancel profile creation"
        >
          Cancel
        </button>
      )
    }

    return (
      <button
        onClick={handleBack}
        className="text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                   hover:text-white transition-colors duration-150
                   focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg"
        aria-label="Go back to previous step"
      >
        Back
      </button>
    )
  }

  // ---- Step renderers ------------------------------------------------------

  /** Step 1: Nickname input */
  const renderNicknameStep = () => (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      <h2 className="text-2xl md:text-3xl font-game text-white drop-shadow-md text-center">
        What is your name?
      </h2>

      <div className="w-full bg-black/20 backdrop-blur-sm rounded-2xl p-4">
        <input
          ref={nicknameInputRef}
          type="text"
          value={nicknameInput}
          onChange={handleNicknameChange}
          onKeyDown={handleNicknameKeyDown}
          placeholder="Type your name..."
          dir="auto"
          maxLength={MAX_NICKNAME_LENGTH * 2}
          className="w-full bg-transparent text-2xl font-game text-white text-center
                     placeholder-white/40 outline-none"
          aria-label="Enter your nickname"
        />
        <p className="text-white/70 text-xs font-game text-center mt-2">
          {remainingChars} characters left
        </p>
      </div>

      <button
        onClick={handleNicknameSubmit}
        disabled={!isNicknameValid}
        className="bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Continue to theme selection"
      >
        Next
      </button>

      {renderBackCancel()}
    </div>
  )

  /** Step 2: Theme picker */
  const renderThemeStep = () => (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      <h2 className="text-2xl md:text-3xl font-game text-white drop-shadow-md text-center">
        Choose your hero!
      </h2>

      <div
        className="grid grid-cols-2 gap-4 w-full"
        role="radiogroup"
        aria-label="Select a theme"
        onKeyDown={handleThemeKeyDown}
      >
        {VALID_THEMES.map((themeId) => {
          const isSelected = selectedTheme === themeId
          return (
            <button
              key={themeId}
              role="radio"
              aria-checked={isSelected}
              aria-label={`${THEME_LABEL[themeId]} theme`}
              onClick={() => setSelectedTheme(themeId)}
              className={`
                relative bg-black/20 backdrop-blur-sm rounded-2xl p-4
                border-2 min-h-[160px]
                flex flex-col items-center justify-center gap-2
                transform transition-all duration-300
                motion-reduce:transition-none
                hover:scale-105 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-sonic-gold
                ${isSelected
                  ? `${THEME_BORDER[themeId]} scale-105 shadow-lg ${THEME_GLOW[themeId]}`
                  : 'border-white/30'}
              `}
            >
              <span className="text-6xl" role="img" aria-hidden="true">
                {THEME_EMOJI[themeId]}
              </span>
              <span className="text-lg font-game text-white">
                {THEME_LABEL[themeId]}
              </span>
              {isSelected && (
                <span
                  className="absolute top-2 right-2 text-sonic-gold text-xl"
                  aria-hidden="true"
                >
                  &#x2714;
                </span>
              )}
            </button>
          )
        })}
      </div>

      <button
        ref={nextButtonRef}
        onClick={handleThemeSubmit}
        disabled={!selectedTheme}
        className="bg-gradient-to-r from-sonic-gold to-yellow-400
                   text-blue-900 font-game text-xl
                   px-10 py-4 rounded-2xl min-h-[48px]
                   shadow-lg shadow-yellow-500/50
                   transform transition-all duration-300
                   motion-reduce:transition-none
                   hover:scale-105 active:scale-95
                   disabled:opacity-40 disabled:hover:scale-100
                   focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Continue to PIN entry"
      >
        Next
      </button>

      {renderBackCancel()}
    </div>
  )

  /** Step 3: PIN entry */
  const renderPinStep = () => (
    <PinEntry
      key="pin-set"
      profileName="Choose a secret PIN"
      onSubmit={handlePinSet}
      onCancel={handleBack}
      isVerifying={false}
      error={state.error}
      attempts={0}
      maxAttempts={999}
      cooldownSeconds={0}
    />
  )

  /** Step 4: PIN confirmation */
  const renderPinConfirmStep = () => (
    <PinEntry
      key="pin-confirm"
      profileName="Confirm your PIN"
      onSubmit={handlePinConfirm}
      onCancel={handleBack}
      isVerifying={state.isSubmitting}
      error={state.error}
      attempts={0}
      maxAttempts={999}
      cooldownSeconds={0}
    />
  )

  // ---- Error + loading overlay for creation phase --------------------------

  if (state.isSubmitting) {
    return (
      <div
        className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center justify-center p-6"
        role="dialog"
        aria-label="Create a new hero profile"
      >
        <div className="text-center animate-pulse motion-reduce:animate-none">
          <span className="text-6xl block mb-4" role="img" aria-hidden="true">
            {THEME_EMOJI[state.theme] || '\u{1F31F}'}
          </span>
          <h2 className="text-2xl md:text-3xl font-game text-white drop-shadow-md">
            Creating your hero...
          </h2>
        </div>
      </div>
    )
  }

  if (state.error && state.step === 4 && state.pinHash) {
    // Error happened during profile creation (not PIN mismatch).
    // If it is a creation-phase error (post-PIN-confirm), show retry overlay.
    // PIN mismatch errors are handled inline by PinEntry's error prop.
    const isCreationError = state.error !== 'PINs do not match. Try again!'
      && state.error !== 'Could not process PIN. Try again.'

    if (isCreationError) {
      return (
        <div
          className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6"
          role="dialog"
          aria-label="Create a new hero profile"
        >
          <div className="text-center">
            <p className="text-red-300 text-lg font-game mb-6" role="alert">
              {state.error}
            </p>
            <button
              onClick={handleRetry}
              className="bg-gradient-to-r from-sonic-gold to-yellow-400
                         text-blue-900 font-game text-xl
                         px-10 py-4 rounded-2xl min-h-[48px]
                         shadow-lg shadow-yellow-500/50
                         transform transition-all duration-300
                         motion-reduce:transition-none
                         hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-4 focus:ring-yellow-300"
              aria-label="Try creating your hero again"
            >
              Try Again
            </button>
            <div className="mt-4">
              <button
                onClick={handleBack}
                className="text-white/70 font-game text-sm py-3 px-4 min-h-[44px]
                           hover:text-white transition-colors duration-150
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold rounded-lg"
                aria-label="Go back to previous step"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  // ---- Main wizard layout --------------------------------------------------

  // Steps 3 and 4 use PinEntry which is already a full-screen overlay
  if (state.step === 3) return renderPinStep()
  if (state.step === 4) return renderPinConfirmStep()

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                  flex flex-col items-center justify-center p-6"
      role="dialog"
      aria-label="Create a new hero profile"
    >
      <StepIndicator currentStep={state.step} />

      {state.step === 1 && renderNicknameStep()}
      {state.step === 2 && renderThemeStep()}
    </div>
  )
}

CreateProfile.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default CreateProfile
