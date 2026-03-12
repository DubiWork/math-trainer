/**
 * ProgressView -- Child-facing full-screen progress dashboard
 *
 * Displays overall stats (accuracy, problems solved, best streak, level)
 * and embeds the existing LevelMap component in read-only mode.
 * Includes a PIN-gated parent stats section with extended metrics.
 *
 * Designed as a peer to StartScreen / GameScreen / ResultScreen.
 * All data sourced from existing Firestore progress + profile state.
 *
 * i18n: Strings are centralized via a local t() helper reading from
 * en.json keys. When epic #21 (react-i18next) merges, replace with
 * useTranslation() — all keys live in the progress.* namespace.
 *
 * @param {Object} props
 * @param {Object}   props.progress       - Firestore progress object
 * @param {number}   props.progress.totalProblems
 * @param {number}   props.progress.correctAnswers
 * @param {number}   props.progress.streak - Best streak
 * @param {number}   props.progress.score
 * @param {string}   [props.progress.lastPlayed] - ISO date of last game
 * @param {number}   [props.currentLevel=1] - Player's current level (1-13)
 * @param {function} props.onClose         - Returns user to StartScreen
 * @param {Object}   [props.activeProfile] - Active profile (theme, pinHash, nickname, createdAt)
 */

import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import LevelMap from './LevelMap'
import PinEntry from './PinEntry'
import { getLevelConfig } from '../config/levels'
import { getTheme } from '../config/themes'
import { verifyPin } from '../utils/profiles'
import progressKeys from '../i18n/locales/en.json'

// ── Lightweight i18n helper (replaced by useTranslation when epic #21 merges) ─

const translations = progressKeys.progress

/**
 * Simple interpolation: replaces {{key}} placeholders with values.
 * Mirrors react-i18next t() signature for easy migration.
 */
function t(key, params) {
  // Strip "progress." prefix if present
  const shortKey = key.startsWith('progress.') ? key.slice(9) : key
  let value = translations[shortKey]
  if (!value) return key
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      value = value.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), String(v))
    })
  }
  return value
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Computes accuracy percentage from progress data, guarding against NaN.
 */
function computeAccuracy(progress) {
  if (!progress || progress.totalProblems === 0) return 0
  return Math.round((progress.correctAnswers / progress.totalProblems) * 100)
}

/**
 * Returns a performance message based on accuracy percentage.
 */
function getPerformanceMessage(accuracy) {
  if (accuracy >= 80) {
    return {
      key: 'performanceGreat',
      text: t('progress.performanceGreat'),
      emoji: '\u2B50', // star
      color: 'text-green-400',
    }
  }
  if (accuracy >= 50) {
    return {
      key: 'performancePractice',
      text: t('progress.performancePractice'),
      emoji: '\u2B50', // star
      color: 'text-sonic-gold',
    }
  }
  return {
    key: 'performanceEncouragement',
    text: t('progress.performanceEncouragement'),
    emoji: '\u{1F4AA}', // muscle
    color: 'text-orange-400',
  }
}

/**
 * Safely reads the level config, clamping out-of-range values to 1.
 */
function safeLevelConfig(level) {
  try {
    return getLevelConfig(level)
  } catch {
    return getLevelConfig(1)
  }
}

/**
 * Formats an ISO date string into a human-readable date.
 * Returns null for falsy input.
 */
function formatDate(isoString) {
  if (!isoString) return null
  try {
    const date = new Date(isoString)
    if (isNaN(date.getTime())) return null
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return null
  }
}

/**
 * Returns a confidence status message based on accuracy percentage.
 */
function getConfidenceMessage(accuracy) {
  if (accuracy >= 90) return t('progress.confidenceExcellent')
  if (accuracy >= 70) return t('progress.confidenceGood')
  if (accuracy >= 50) return t('progress.confidenceDeveloping')
  return t('progress.confidenceBuilding')
}

/** Maximum PIN attempts before lockout in parent stats gate */
const MAX_PARENT_PIN_ATTEMPTS = 3

/** Cooldown duration in seconds after max attempts */
const PARENT_PIN_COOLDOWN = 30

// ── Component ────────────────────────────────────────────────────────────────

function ProgressView({ progress = null, currentLevel = 1, onClose, activeProfile = null }) {
  const theme = getTheme(activeProfile?.theme)

  // Parent stats PIN gate state
  const [showPinEntry, setShowPinEntry] = useState(false)
  const [parentUnlocked, setParentUnlocked] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [pinError, setPinError] = useState(null)
  const [pinAttempts, setPinAttempts] = useState(0)

  // Normalize progress — treat null/undefined as zeros
  const safeProgress = {
    totalProblems: progress?.totalProblems ?? 0,
    correctAnswers: progress?.correctAnswers ?? 0,
    streak: progress?.streak ?? 0,
    score: progress?.score ?? 0,
    lastPlayed: progress?.lastPlayed ?? null,
  }

  const isEmpty = safeProgress.totalProblems === 0
  const accuracy = computeAccuracy(safeProgress)
  const levelConfig = safeLevelConfig(currentLevel)
  const performance = getPerformanceMessage(accuracy)

  // ── Parent view handlers ──────────────────────────────────────────────

  const handleParentViewClick = useCallback(() => {
    setShowPinEntry(true)
    setPinError(null)
  }, [])

  const handlePinSubmit = useCallback(
    async (pin) => {
      if (!activeProfile?.pinHash) return

      setIsVerifying(true)
      setPinError(null)

      try {
        const isValid = await verifyPin(pin, activeProfile.pinHash)
        if (isValid) {
          setParentUnlocked(true)
          setShowPinEntry(false)
          setPinAttempts(0)
        } else {
          setPinAttempts((prev) => prev + 1)
          setPinError(t('progress.pinWrong'))
        }
      } catch {
        setPinError(t('progress.pinError'))
      } finally {
        setIsVerifying(false)
      }
    },
    [activeProfile?.pinHash]
  )

  const handlePinCancel = useCallback(() => {
    setShowPinEntry(false)
    setPinError(null)
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center p-6 relative overflow-hidden"
      data-testid="progress-view"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-50">*</div>
        <div className="absolute top-20 right-16 text-3xl animate-pulse opacity-40">*</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-bounce opacity-30">*</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-pulse opacity-50">*</div>
      </div>

      {/* Header with close button */}
      <header className="z-10 w-full max-w-lg flex items-center justify-between mb-6">
        <h1
          className="text-3xl md:text-4xl font-game text-white drop-shadow-lg"
        >
          {t('progress.title')}
        </h1>
        <button
          onClick={onClose}
          className="
            bg-white/20 hover:bg-white/30
            text-white font-game text-base md:text-lg
            px-5 py-2.5 rounded-xl
            shadow-md min-w-[44px] min-h-[44px]
            transform transition-all duration-300
            hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-white/50
          "
          aria-label={t('progress.close')}
          data-testid="close-button"
        >
          {t('progress.close')}
        </button>
      </header>

      {/* Main content */}
      <div className="z-10 w-full max-w-lg flex flex-col items-center gap-6 flex-1">
        {isEmpty ? (
          /* ── Empty state ─────────────────────────────────────────── */
          <div
            className="flex-1 flex flex-col items-center justify-center text-center gap-4"
            data-testid="empty-state"
          >
            <div className="text-6xl mb-2">
              <span role="img" aria-label={theme.name}>{theme.emoji}</span>
            </div>
            <p className="text-xl md:text-2xl font-game text-white drop-shadow-md">
              {t('progress.emptyState')}
            </p>
            <p className="text-base md:text-lg font-game text-white/60">
              {t('progress.emptyStateSubtitle')}
            </p>
          </div>
        ) : (
          /* ── Stats content ───────────────────────────────────────── */
          <>
            {/* Performance message */}
            <div
              className={`text-xl md:text-2xl font-game ${performance.color} text-center drop-shadow-md`}
              aria-label={performance.text}
              data-testid="performance-message"
            >
              {performance.text}{' '}
              <span role="img" aria-label="performance icon">{performance.emoji}</span>
            </div>

            {/* Stats grid */}
            <div
              className="bg-black/30 rounded-2xl p-6 w-full backdrop-blur-sm"
              role="status"
              aria-label="Progress statistics"
              data-testid="stats-container"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Accuracy card */}
                <div
                  className="bg-white/10 rounded-xl p-4 col-span-2"
                  data-testid="accuracy-card"
                >
                  <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                    {t('progress.accuracy')}
                  </p>
                  <p className="text-2xl md:text-3xl font-game text-sonic-gold drop-shadow-md mb-1">
                    {t('progress.accuracyFraction', {
                      correct: safeProgress.correctAnswers,
                      total: safeProgress.totalProblems,
                    })}
                  </p>
                  <p className="text-lg md:text-xl font-game text-white/80">
                    {t('progress.accuracyPercentage', { percent: accuracy })}
                  </p>
                </div>

                {/* Total problems card */}
                <div
                  className="bg-white/10 rounded-xl p-4"
                  data-testid="total-problems-card"
                >
                  <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                    {t('progress.totalProblems')}
                  </p>
                  <p className="text-3xl md:text-4xl font-game text-white drop-shadow-md">
                    {safeProgress.totalProblems}
                  </p>
                </div>

                {/* Best streak card */}
                <div
                  className="bg-white/10 rounded-xl p-4"
                  data-testid="streak-card"
                >
                  <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                    {t('progress.bestStreak')}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-3xl md:text-4xl font-game text-white drop-shadow-md">
                      {safeProgress.streak}
                    </p>
                    <span className="text-2xl" role="img" aria-label="fire">&#x1F525;</span>
                  </div>
                </div>

                {/* Current level card */}
                <div
                  className="bg-white/10 rounded-xl p-4 col-span-2"
                  data-testid="level-card"
                >
                  <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                    {t('progress.currentLevel')}
                  </p>
                  <p className="text-2xl md:text-3xl font-game text-sonic-gold drop-shadow-md">
                    {t('progress.levelName', { level: currentLevel, name: levelConfig.name })}
                  </p>
                </div>
              </div>
            </div>

            {/* Level Map */}
            <div className="w-full" data-testid="progress-level-map">
              <LevelMap currentLevel={currentLevel} />
            </div>

            {/* Parent View Button */}
            {activeProfile?.pinHash && !parentUnlocked && (
              <button
                onClick={handleParentViewClick}
                className="
                  bg-white/10 hover:bg-white/20
                  text-white/70 hover:text-white
                  font-game text-sm md:text-base
                  px-6 py-3 rounded-xl
                  shadow-sm min-w-[44px] min-h-[44px]
                  transform transition-all duration-300
                  hover:scale-105 active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-white/50
                "
                aria-label={t('progress.parentViewLabel')}
                data-testid="parent-view-button"
              >
                {t('progress.parentView')}
              </button>
            )}

            {/* Parent Stats Section (unlocked) */}
            {parentUnlocked && (
              <div
                className="bg-black/30 rounded-2xl p-6 w-full backdrop-blur-sm"
                role="region"
                aria-label={t('progress.parentStatsLabel')}
                data-testid="parent-stats-section"
              >
                <h2 className="text-xl md:text-2xl font-game text-sonic-gold drop-shadow-md mb-4 text-center">
                  {t('progress.parentStatsTitle')}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {/* Total score */}
                  <div
                    className="bg-white/10 rounded-xl p-4"
                    data-testid="parent-total-score"
                  >
                    <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                      {t('progress.totalScore')}
                    </p>
                    <p className="text-2xl md:text-3xl font-game text-white drop-shadow-md">
                      {safeProgress.score}
                    </p>
                  </div>

                  {/* Accuracy percentage */}
                  <div
                    className="bg-white/10 rounded-xl p-4"
                    data-testid="parent-accuracy"
                  >
                    <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                      {t('progress.accuracy')}
                    </p>
                    <p className="text-2xl md:text-3xl font-game text-white drop-shadow-md">
                      {accuracy}%
                    </p>
                  </div>

                  {/* Member since */}
                  <div
                    className="bg-white/10 rounded-xl p-4"
                    data-testid="parent-member-since"
                  >
                    <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                      {t('progress.memberSince')}
                    </p>
                    <p className="text-lg md:text-xl font-game text-white drop-shadow-md">
                      {formatDate(activeProfile?.createdAt) || t('progress.dateUnknown')}
                    </p>
                  </div>

                  {/* Last played */}
                  <div
                    className="bg-white/10 rounded-xl p-4"
                    data-testid="parent-last-played"
                  >
                    <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                      {t('progress.lastPlayed')}
                    </p>
                    <p className="text-lg md:text-xl font-game text-white drop-shadow-md">
                      {formatDate(safeProgress.lastPlayed) || t('progress.never')}
                    </p>
                  </div>

                  {/* Confidence status */}
                  <div
                    className="bg-white/10 rounded-xl p-4 col-span-2"
                    data-testid="parent-confidence"
                  >
                    <p className="text-sm md:text-base text-white/70 font-game uppercase mb-1">
                      {t('progress.confidenceStatus')}
                    </p>
                    <p className="text-lg md:text-xl font-game text-sonic-gold drop-shadow-md">
                      {getConfidenceMessage(accuracy)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-4 text-center text-white/40 font-game text-sm z-10">
        {t('progress.keepGoing')}
      </div>

      {/* PIN Entry overlay */}
      {showPinEntry && (
        <PinEntry
          profileName={activeProfile?.nickname || ''}
          onSubmit={handlePinSubmit}
          onCancel={handlePinCancel}
          isVerifying={isVerifying}
          error={pinError}
          attempts={pinAttempts}
          maxAttempts={MAX_PARENT_PIN_ATTEMPTS}
          cooldownSeconds={PARENT_PIN_COOLDOWN}
        />
      )}
    </div>
  )
}

ProgressView.propTypes = {
  progress: PropTypes.shape({
    totalProblems: PropTypes.number,
    correctAnswers: PropTypes.number,
    streak: PropTypes.number,
    score: PropTypes.number,
    lastPlayed: PropTypes.string,
  }),
  currentLevel: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  activeProfile: PropTypes.shape({
    theme: PropTypes.string,
    pinHash: PropTypes.string,
    nickname: PropTypes.string,
    createdAt: PropTypes.string,
  }),
}

export default ProgressView
