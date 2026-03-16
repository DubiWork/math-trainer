/**
 * ProfileSwitcher — Avatar card grid for selecting profiles
 *
 * Renders a "Who's playing?" screen with a 2-column grid of profile cards.
 * Each card shows:
 * - Theme emoji avatar
 * - Nickname (with dir="auto" for bidi support)
 * - Current level badge
 *
 * An "Add Hero" card is always appended when under MAX_PROFILES.
 * When zero profiles exist, the grid shows only a welcome message and
 * the "Add Hero" card (zero-profiles state is expected to redirect to
 * the create flow once #20 is implemented).
 *
 * Tapping a profile card opens the PinEntry overlay; PIN verification
 * is handled here via the ProfileContext.
 *
 * @param {Object}   props
 * @param {Function} props.onCreateProfile  Called when "Add Hero" is tapped
 * @param {Function} props.onProfileActivated  Called after a profile is successfully activated
 */

import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { useProfile } from '../context/useProfile'
import { MAX_PIN_ATTEMPTS, COOLDOWN_SECONDS } from '../context/profileReducer'
import PinEntry from './PinEntry'

// ─── Theme Config ───────────────────────────────────────────────────────────

/** Map theme id to display emoji */
const THEME_EMOJI = {
  sonic: '\u{1F994}',      // Hedgehog
  spiderman: '\u{1F577}',  // Spider
}

/** Map theme id to card border color class */
const THEME_BORDER = {
  sonic: 'border-sonic-blue',
  spiderman: 'border-sonic-red',
}

// ─── Component ──────────────────────────────────────────────────────────────

function ProfileSwitcher({ onCreateProfile, onProfileActivated }) {
  const { t } = useTranslation()
  const {
    profiles,
    selectProfile,
    maxProfiles,
  } = useProfile()

  // PIN entry state
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [pinError, setPinError] = useState(null)
  const [attempts, setAttempts] = useState(0)

  // ── Card tap ─────────────────────────────────────────────────────────
  const handleCardTap = useCallback((profile) => {
    setSelectedProfile(profile)
    setPinError(null)
    setAttempts(0)
  }, [])

  // ── PIN submit ───────────────────────────────────────────────────────
  const handlePinSubmit = useCallback(
    async (pin) => {
      if (!selectedProfile) return

      setIsVerifying(true)
      setPinError(null)

      try {
        const success = await selectProfile(selectedProfile, pin)
        if (success) {
          setSelectedProfile(null)
          if (onProfileActivated) {
            onProfileActivated()
          }
        } else {
          setAttempts((prev) => prev + 1)
          setPinError(t('profile.pinError'))
          // Haptic feedback (feature-detected)
          if (navigator.vibrate) {
            navigator.vibrate(100)
          }
        }
      } catch {
        setPinError(t('profile.genericError'))
      } finally {
        setIsVerifying(false)
      }
    },
    [selectedProfile, selectProfile, onProfileActivated, t]
  )

  // ── PIN cancel ───────────────────────────────────────────────────────
  const handlePinCancel = useCallback(() => {
    setSelectedProfile(null)
    setPinError(null)
    setAttempts(0)
  }, [])

  // ── Zero profiles → prompt to create ─────────────────────────────────
  if (profiles.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                      flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-4 text-center">
          {t('profile.welcomeTitle')}
        </h1>
        <p className="text-lg font-game text-white/80 mb-8 text-center">
          {t('profile.welcomeSubtitle')}
        </p>
        <button
          onClick={onCreateProfile}
          className="bg-gradient-to-r from-sonic-gold to-yellow-400
                     text-blue-900 font-game text-xl
                     px-10 py-5 rounded-2xl
                     shadow-lg shadow-yellow-500/50
                     transform transition-all duration-300
                     hover:scale-110 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label={t('profile.createFirstHero')}
        >
          {t('profile.createHero')}
        </button>
      </div>
    )
  }

  // ── Card grid ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                    flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-game text-white drop-shadow-lg mb-8 mt-8 text-center">
        {t('profile.title')}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {/* Profile cards */}
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleCardTap(profile)}
            className={`
              bg-black/20 backdrop-blur-sm rounded-2xl p-4
              border-2 ${THEME_BORDER[profile.theme] || 'border-white/30'}
              flex flex-col items-center gap-2
              transform transition-all duration-200
              hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-sonic-gold
            `}
            aria-label={t('profile.selectProfile', { name: profile.nickname, level: profile.currentLevel })}
          >
            {/* Avatar */}
            <span className="text-4xl" role="img" aria-hidden="true">
              {THEME_EMOJI[profile.theme] || profile.nickname.charAt(0).toUpperCase()}
            </span>
            {/* Nickname */}
            <span className="text-lg font-game text-white truncate w-full text-center" dir="auto">
              {profile.nickname}
            </span>
            {/* Level badge */}
            <span className="text-xs font-game text-sonic-gold bg-sonic-gold/20 px-2 py-0.5 rounded-full">
              {t('profile.level', { level: profile.currentLevel })}
            </span>
          </button>
        ))}

        {/* Add Hero card — hidden when at max */}
        {profiles.length < maxProfiles && (
          <button
            onClick={onCreateProfile}
            className="bg-transparent rounded-2xl p-4
                       border-2 border-dashed border-white/30
                       flex flex-col items-center justify-center gap-2
                       transform transition-all duration-200
                       hover:scale-105 hover:border-sonic-gold/50 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-sonic-gold
                       min-h-[140px]"
            aria-label={t('profile.createNewHero')}
          >
            <span className="text-4xl text-white/50">+</span>
            <span className="text-sm font-game text-white/50">{t('profile.addHero')}</span>
          </button>
        )}
      </div>

      {/* PIN Entry overlay */}
      {selectedProfile && (
        <PinEntry
          profileName={selectedProfile.nickname}
          onSubmit={handlePinSubmit}
          onCancel={handlePinCancel}
          isVerifying={isVerifying}
          error={pinError}
          attempts={attempts}
          maxAttempts={MAX_PIN_ATTEMPTS}
          cooldownSeconds={COOLDOWN_SECONDS}
        />
      )}
    </div>
  )
}

ProfileSwitcher.propTypes = {
  onCreateProfile: PropTypes.func.isRequired,
  onProfileActivated: PropTypes.func,
}

export default ProfileSwitcher
