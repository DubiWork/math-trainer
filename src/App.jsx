import { useState, useCallback } from 'react'
import { useFirebase, useGameProgress } from './hooks'
import { StartScreen, GameScreen, ResultScreen, LevelUpScreen, ProfileSwitcher, CreateProfile, ProgressView } from './components'
import { useProfile } from './context/useProfile'
import { MAX_LEVEL } from './config/levels'

/**
 * App Component - Main application with screen navigation
 *
 * Navigation Flow:
 *
 * [No activeProfile, !showCreate] -> ProfileSwitcher
 *                                      |
 *                                      v (Add Hero / Create Hero)
 * [No activeProfile, showCreate]  -> CreateProfile wizard
 *                                      |
 *                                      v (onComplete)
 * [activeProfile set]             -> StartScreen -> GameScreen -> ResultScreen
 *                                      ^    |       |    |         |
 *                                      +----+-------+----+---------+
 *                                      |    |
 *                                      |    v (My Progress)
 *                                      | ProgressView
 *                                      |    |
 *                                      +----+ (Close)
 *                                           |
 *                                                   v (shouldLevelUp)
 *                                               LevelUpScreen
 *                                                   |
 *                                                   v (Continue)
 *                                               GameScreen (next level)
 *
 * Manages:
 * - Profile-gated entry: shows ProfileSwitcher or CreateProfile when no active profile
 * - Screen state ('start', 'game', 'result', 'levelup', 'progress')
 * - Firebase authentication
 * - Game progress persistence (keyed to activeProfile.firebaseUid)
 * - Session statistics between screens
 */
function App() {
  const { activeProfile, isLoading: profileLoading, clearActiveProfile, createAndActivate, updateProfile } = useProfile()
  const { user, loading: authLoading, error: authError } = useFirebase()
  const {
    progress,
    updateProgress,
    forceSave,
    loading: progressLoading,
  } = useGameProgress(activeProfile?.firebaseUid ?? user?.uid)

  // Extract currentLevel from active profile (default to 1 when no profile)
  const currentLevel = activeProfile?.currentLevel ?? 1

  // Screen navigation state
  const [screen, setScreen] = useState('start')

  // Session statistics (captured when game ends, passed to ResultScreen)
  const [sessionStats, setSessionStats] = useState(null)

  // Whether to show CreateProfile wizard (when no active profile)
  const [showCreate, setShowCreate] = useState(false)

  // Track which level was just completed (for LevelUpScreen)
  const [completedLevel, setCompletedLevel] = useState(null)

  // Combine loading states
  const loading = profileLoading || authLoading || progressLoading

  // Handle game end - capture session stats and navigate to result screen
  const handleGameEnd = useCallback((stats) => {
    if (stats) {
      // Calculate accuracy if not provided
      const accuracy =
        stats.accuracy ??
        (stats.totalProblems > 0
          ? Math.round((stats.correctAnswers / stats.totalProblems) * 100)
          : 0)

      setSessionStats({
        score: stats.score ?? 0,
        streak: stats.streak ?? 0,
        totalProblems: stats.totalProblems ?? 0,
        correctAnswers: stats.correctAnswers ?? 0,
        accuracy,
      })
      setScreen('result')
    } else {
      // If no stats provided (user clicked exit), go back to start
      setScreen('start')
    }
  }, [])

  // Handle starting a new game
  const handleStartGame = useCallback(() => {
    setSessionStats(null) // Clear previous session stats
    setScreen('game')
  }, [])

  // Handle play again from result screen
  const handlePlayAgain = useCallback(() => {
    setSessionStats(null) // Clear previous session stats
    setScreen('game')
  }, [])

  // Handle exit to start screen
  const handleExit = useCallback(() => {
    forceSave() // Save pending progress to Firebase
    setSessionStats(null) // Clear session stats
    setScreen('start')
  }, [forceSave])

  // Handle navigating to progress view
  const handleViewProgress = useCallback(() => {
    setScreen('progress')
  }, [])

  // Handle switching profile (back to switcher)
  const handleSwitchProfile = useCallback(() => {
    forceSave()
    clearActiveProfile()
    setSessionStats(null)
    setScreen('start')
  }, [forceSave, clearActiveProfile])

  // Handle "Add Hero" / "Create Hero" in ProfileSwitcher — show CreateProfile wizard
  const handleCreateProfile = useCallback(() => {
    setShowCreate(true)
  }, [])

  // Handle CreateProfile wizard completion — activate the new profile and enter game
  const handleCreateComplete = useCallback((profile) => {
    createAndActivate(profile)
    setShowCreate(false)
  }, [createAndActivate])

  // Handle CreateProfile wizard cancellation — return to ProfileSwitcher
  const handleCreateCancel = useCallback(() => {
    setShowCreate(false)
  }, [])

  // Handle level-up detection from GameScreen
  const handleLevelUp = useCallback((level) => {
    setCompletedLevel(level)
    setScreen('levelup')
  }, [])

  // Handle continue after level-up celebration
  const handleContinueAfterLevelUp = useCallback(() => {
    if (completedLevel !== null && activeProfile) {
      const nextLevel = completedLevel + 1
      // Max level guard: do not update profile beyond MAX_LEVEL
      if (nextLevel <= MAX_LEVEL) {
        updateProfile(activeProfile.id, { currentLevel: nextLevel })
      }
    }
    setCompletedLevel(null)
    setScreen('game')
  }, [completedLevel, activeProfile, updateProfile])

  // Show loading state while authenticating or loading progress
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4">
        <div className="animate-pulse">
          <h1 className="text-4xl md:text-6xl font-game text-sonic-gold drop-shadow-lg text-center">
            Loading...
          </h1>
          <p className="text-xl text-white mt-4 font-game text-center">
            {profileLoading
              ? 'Loading heroes...'
              : authLoading
                ? 'Connecting to Sonic Speed!'
                : 'Loading your progress...'}
          </p>
        </div>
      </div>
    )
  }

  // ── No active profile → show CreateProfile wizard or ProfileSwitcher ──
  if (!activeProfile && showCreate) {
    return (
      <CreateProfile
        onComplete={handleCreateComplete}
        onCancel={handleCreateCancel}
      />
    )
  }

  if (!activeProfile) {
    return (
      <ProfileSwitcher
        onCreateProfile={handleCreateProfile}
      />
    )
  }

  // Show error state if authentication failed (user can still play, progress won't persist)
  if (authError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sonic-blue to-blue-900 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-game text-red-500 drop-shadow-lg">
            Oops!
          </h1>
          <p className="text-xl text-white mt-4 font-game">
            Could not connect to save your progress
          </p>
          <p className="text-sm text-white mt-2 opacity-75">
            {authError.message}
          </p>
          <button
            onClick={() => setScreen('game')}
            className="mt-6 bg-sonic-gold text-sonic-blue font-game px-8 py-4 rounded-full
                       hover:bg-yellow-400 transform hover:scale-105 transition-all
                       shadow-lg active:scale-95 text-xl"
          >
            Play Anyway!
          </button>
        </div>
      </div>
    )
  }

  // Render the current screen
  return (
    <>
      {screen === 'start' && (
        <StartScreen
          onStart={handleStartGame}
          onViewProgress={handleViewProgress}
          progress={progress}
          onSwitchProfile={handleSwitchProfile}
          activeProfile={activeProfile}
          currentLevel={currentLevel}
        />
      )}

      {screen === 'progress' && (
        <ProgressView
          currentLevel={currentLevel}
          progress={progress}
          activeProfile={activeProfile}
          onClose={() => setScreen('start')}
        />
      )}

      {screen === 'game' && (
        <GameScreen
          onGameEnd={handleGameEnd}
          updateProgress={updateProgress}
          initialProgress={progress}
          currentLevel={currentLevel}
          onLevelUp={handleLevelUp}
          activeProfile={activeProfile}
        />
      )}

      {screen === 'levelup' && completedLevel !== null && (
        <LevelUpScreen
          completedLevel={completedLevel}
          onContinue={handleContinueAfterLevelUp}
        />
      )}

      {screen === 'result' && sessionStats && (
        <ResultScreen
          sessionStats={sessionStats}
          onPlayAgain={handlePlayAgain}
          onExit={handleExit}
          theme={activeProfile?.theme}
        />
      )}
    </>
  )
}

export default App
