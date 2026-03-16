/**
 * PinEntry — Presentational 4-dot numpad PIN overlay
 *
 * A pure presentational component: it knows nothing about profile storage
 * or verification.  Parent passes callbacks and error state via props.
 *
 * Features:
 * - 4-dot visual feedback (empty = outline, filled = solid gold)
 * - Shake animation on error (reuses `animate-shake` from Tailwind config)
 * - 3x4 numpad with large touch targets (min 48px, actually ~85px)
 * - Rate limiting: after `maxAttempts` wrong tries, shows countdown
 * - Accessible: aria-labels, aria-live region for dot status
 * - prefers-reduced-motion respected via Tailwind `motion-reduce:`
 *
 * @param {Object}   props
 * @param {string}   props.profileName  Name shown in the header
 * @param {Function} props.onSubmit     Called with the 4-digit string
 * @param {Function} props.onCancel     Called when Cancel is tapped
 * @param {boolean}  props.isVerifying  True while async PIN check runs
 * @param {string|null} props.error     Error message (triggers shake)
 * @param {number}   props.attempts     Number of failed attempts so far
 * @param {number}   props.maxAttempts  Threshold before cooldown (default 3)
 * @param {number}   props.cooldownSeconds Cooldown duration (default 30)
 */

import { useState, useCallback, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

/** @type {number} Required PIN length */
const PIN_LENGTH = 4

function PinEntry({
  profileName,
  onSubmit,
  onCancel,
  isVerifying = false,
  error = null,
  attempts = 0,
  maxAttempts = 3,
  cooldownSeconds = 30,
}) {
  const { t } = useTranslation()
  const [digits, setDigits] = useState('')
  const [shaking, setShaking] = useState(false)
  const [cooldownRemaining, setCooldownRemaining] = useState(0)
  const cooldownTimerRef = useRef(null)

  const isLockedOut = cooldownRemaining > 0

  // ── Start cooldown when attempts reach max ──────────────────────────
  useEffect(() => {
    if (attempts >= maxAttempts && cooldownRemaining === 0) {
      setCooldownRemaining(cooldownSeconds)
    }
  }, [attempts, maxAttempts, cooldownSeconds, cooldownRemaining])

  // ── Countdown timer ─────────────────────────────────────────────────
  useEffect(() => {
    if (cooldownRemaining <= 0) return

    cooldownTimerRef.current = setInterval(() => {
      setCooldownRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownTimerRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(cooldownTimerRef.current)
  }, [cooldownRemaining])

  // ── Trigger shake on error change ───────────────────────────────────
  useEffect(() => {
    if (error) {
      setShaking(true)
      setDigits('')
      const timer = setTimeout(() => setShaking(false), 500)
      return () => clearTimeout(timer)
    }
  }, [error])

  // ── Digit handlers ──────────────────────────────────────────────────
  const handleDigit = useCallback(
    (digit) => {
      if (isVerifying || isLockedOut) return

      setDigits((prev) => {
        if (prev.length >= PIN_LENGTH) return prev
        const next = prev + digit
        if (next.length === PIN_LENGTH) {
          // Defer submit to next tick so state updates first
          setTimeout(() => onSubmit(next), 0)
        }
        return next
      })
    },
    [isVerifying, isLockedOut, onSubmit]
  )

  const handleBackspace = useCallback(() => {
    if (isVerifying || isLockedOut) return
    setDigits((prev) => prev.slice(0, -1))
  }, [isVerifying, isLockedOut])

  // ── Keyboard support ────────────────────────────────────────────────
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(e.key)
      } else if (e.key === 'Backspace') {
        handleBackspace()
      } else if (e.key === 'Escape') {
        onCancel()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleDigit, handleBackspace, onCancel])

  // ── Numpad layout ───────────────────────────────────────────────────
  const numpadRows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['backspace', '0', 'cancel'],
  ]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                 flex items-center justify-center p-4"
      role="dialog"
      aria-label={t('pin.enterPinFor', { name: profileName })}
      aria-modal="true"
    >
      <div className="bg-gradient-to-b from-sonic-blue to-blue-900
                      rounded-3xl p-6 w-full max-w-xs shadow-2xl">
        {/* Header */}
        <h2 className="text-xl font-game text-white text-center mb-1 drop-shadow-md">
          {t('pin.enterPin')}
        </h2>
        <p className="text-sm font-game text-white/70 text-center mb-5" dir="auto">
          {profileName}
        </p>

        {/* Dots */}
        <div
          className={`flex justify-center gap-3 mb-5 ${shaking ? 'animate-shake' : ''}`}
          role="status"
          aria-live="polite"
          aria-label={t('pin.digitsEntered', { count: digits.length, total: PIN_LENGTH })}
        >
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <div
              key={i}
              className={`
                w-5 h-5 rounded-full border-2 transition-all duration-150
                motion-reduce:transition-none
                ${
                  i < digits.length
                    ? 'bg-sonic-gold border-sonic-gold shadow-md shadow-yellow-500/30 scale-110'
                    : 'border-white/50 bg-transparent'
                }
                ${shaking && i < digits.length ? 'border-red-400 bg-red-400' : ''}
              `}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Error message */}
        {error && (
          <p
            className="text-red-300 text-sm font-game text-center mb-3"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Cooldown message */}
        {isLockedOut && (
          <p
            className="text-red-300 text-sm font-game text-center mb-3"
            role="alert"
          >
            {t('pin.tooManyTries', { seconds: cooldownRemaining })}
          </p>
        )}

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto">
          {numpadRows.flat().map((key) => {
            if (key === 'backspace') {
              return (
                <button
                  key={key}
                  onClick={handleBackspace}
                  disabled={isVerifying || isLockedOut || digits.length === 0}
                  className="aspect-square rounded-xl bg-white/10 hover:bg-white/20
                             text-white font-game text-xl
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90 disabled:opacity-30
                             focus:outline-none focus:ring-2 focus:ring-sonic-gold"
                  aria-label={t('pin.deleteDigit')}
                >
                  &#x232B;
                </button>
              )
            }
            if (key === 'cancel') {
              return (
                <button
                  key={key}
                  onClick={onCancel}
                  className="aspect-square rounded-xl bg-sonic-red/60 hover:bg-sonic-red/80
                             text-white font-game text-sm
                             flex items-center justify-center
                             transition-all duration-150
                             active:scale-90
                             focus:outline-none focus:ring-2 focus:ring-red-300"
                  aria-label={t('pin.cancelPin')}
                >
                  {t('pin.back')}
                </button>
              )
            }
            // Digit button
            return (
              <button
                key={key}
                onClick={() => handleDigit(key)}
                disabled={isVerifying || isLockedOut || digits.length >= PIN_LENGTH}
                className="aspect-square rounded-xl bg-white/15 hover:bg-white/25
                           text-white font-game text-2xl
                           flex items-center justify-center
                           transition-all duration-150
                           active:scale-90 disabled:opacity-30
                           focus:outline-none focus:ring-2 focus:ring-sonic-gold"
                aria-label={t('pin.digit', { key })}
              >
                {key}
              </button>
            )
          })}
        </div>

        {/* Loading indicator */}
        {isVerifying && (
          <p className="text-white/70 text-sm font-game text-center mt-4 animate-pulse">
            {t('pin.checking')}
          </p>
        )}
      </div>
    </div>
  )
}

PinEntry.propTypes = {
  profileName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isVerifying: PropTypes.bool,
  error: PropTypes.string,
  attempts: PropTypes.number,
  maxAttempts: PropTypes.number,
  cooldownSeconds: PropTypes.number,
}

export default PinEntry
