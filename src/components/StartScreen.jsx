import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useProfile } from '../context/useProfile'
import LevelMap from './LevelMap'

/**
 * StartScreen Component - Welcome screen before game starts
 *
 * Displays a welcoming, Sonic-themed start screen for the Math Trainer.
 * Designed for 7-year-old children with large, friendly text and engaging visuals.
 *
 * Features:
 * - Welcome message with Sonic theme
 * - Subtitle explaining game purpose
 * - Level progress map showing all 13 levels
 * - Large, prominent "Start Game" button
 * - Previous best score/streak display (if available)
 *
 * @param {function} onStart - Callback when user clicks Start Game
 * @param {object} progress - Optional progress data from Firestore
 * @param {number} progress.score - Best score achieved
 * @param {number} progress.streak - Best streak achieved
 * @param {number} progress.totalProblems - Total problems attempted
 * @param {number} progress.correctAnswers - Total correct answers
 * @param {number} [currentLevel=1] - The player's current level (1-13)
 */
function StartScreen({ onStart, progress = null, currentLevel = 1 }) {
  const { i18n } = useTranslation()
  const { activeProfile, updateProfile } = useProfile()

  // Check if user has previous progress to display
  const hasPreviousProgress = progress && (progress.score > 0 || progress.streak > 0)

  const currentLang = activeProfile?.language || i18n.language || 'he'

  const handleLanguageToggle = (lang) => {
    if (lang === currentLang) return
    if (activeProfile) {
      updateProfile(activeProfile.id, { language: lang })
    }
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900
                 flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Language Toggle — compact pill for parent use */}
      <div
        className="absolute top-4 end-4 z-20 flex rounded-full overflow-hidden
                   border border-white/30 text-sm font-game"
        role="radiogroup"
        aria-label="Language selection"
        data-testid="language-toggle"
      >
        <button
          role="radio"
          aria-checked={currentLang === 'he'}
          aria-label="Hebrew"
          onClick={() => handleLanguageToggle('he')}
          className={`px-3 py-1.5 transition-colors duration-200 ${
            currentLang === 'he'
              ? 'bg-sonic-blue text-white'
              : 'bg-white/10 text-white/60 hover:bg-white/20'
          }`}
        >
          HE
        </button>
        <button
          role="radio"
          aria-checked={currentLang === 'en'}
          aria-label="English"
          onClick={() => handleLanguageToggle('en')}
          className={`px-3 py-1.5 transition-colors duration-200 ${
            currentLang === 'en'
              ? 'bg-sonic-blue text-white'
              : 'bg-white/10 text-white/60 hover:bg-white/20'
          }`}
        >
          EN
        </button>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Floating stars */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-50">*</div>
        <div className="absolute top-20 right-16 text-3xl animate-pulse opacity-40">*</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-bounce opacity-30">*</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-pulse opacity-50">*</div>
      </div>

      {/* Main Content Container */}
      <div className="z-10 text-center max-w-lg w-full">
        {/* Main Title with Sonic Theme */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-game text-white
                     drop-shadow-lg mb-4 animate-pulse-scale"
        >
          Sonic Math Trainer!
        </h1>

        {/* Sonic Emoji Row */}
        <div className="flex justify-center gap-2 text-4xl md:text-5xl mb-6">
          <span role="img" aria-label="hedgehog">&#x1F994;</span>
          <span role="img" aria-label="dash">&#x1F4A8;</span>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-game text-white/90 mb-8 drop-shadow-md">
          Time to boost your math power!
        </p>

        {/* Previous Progress Display */}
        {hasPreviousProgress && (
          <div
            className="bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm
                       transform transition-all duration-300 hover:scale-105"
            role="status"
            aria-label={`Your best: ${progress.score} points, ${progress.streak} streak`}
          >
            <p className="text-lg md:text-xl font-game text-sonic-gold mb-2">
              Your Best:
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {/* Best Score */}
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-game text-white">
                  {progress.score}
                </p>
                <p className="text-sm md:text-base text-white/70 font-game">
                  points
                </p>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-white/30" aria-hidden="true" />

              {/* Best Streak */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-3xl md:text-4xl font-game text-white">
                    {progress.streak}
                  </p>
                  <span className="text-2xl" role="img" aria-label="fire">&#x1F525;</span>
                </div>
                <p className="text-sm md:text-base text-white/70 font-game">
                  streak
                </p>
              </div>
            </div>

            {/* Accuracy if available */}
            {progress.totalProblems > 0 && (
              <p className="text-base text-white/80 font-game mt-4">
                Accuracy: {Math.round((progress.correctAnswers / progress.totalProblems) * 100)}%
              </p>
            )}
          </div>
        )}

        {/* Level Progress Map */}
        <div className="mb-8">
          <LevelMap currentLevel={currentLevel} />
        </div>

        {/* Start Game Button - Large and Prominent */}
        <button
          onClick={onStart}
          className="
            bg-gradient-to-r from-sonic-gold to-yellow-400
            text-blue-900 font-game text-2xl md:text-3xl
            px-12 py-6 rounded-2xl
            shadow-lg shadow-yellow-500/50
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/60
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-yellow-300
            animate-pulse-scale
          "
          aria-label="Start the math game"
        >
          Start Game!
        </button>

        {/* Encouraging Tip */}
        <p className="text-lg md:text-xl font-game text-white/70 mt-8">
          <span role="img" aria-label="star">&#x2B50;</span> Tap the correct answer to score points!{' '}
          <span role="img" aria-label="star">&#x2B50;</span>
        </p>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-4 text-center text-white/40 font-game text-sm">
        Math is fun!
      </div>
    </div>
  )
}

StartScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
  progress: PropTypes.shape({
    score: PropTypes.number,
    streak: PropTypes.number,
    totalProblems: PropTypes.number,
    correctAnswers: PropTypes.number,
  }),
  currentLevel: PropTypes.number,
}

export default StartScreen
