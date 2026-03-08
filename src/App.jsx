import { useState, useCallback } from 'react'
import { useFirebase, useGameProgress } from './hooks'
import { StartScreen, GameScreen, ResultScreen, ProfileSwitcher } from './components'
import { useProfile } from './context/useProfile'

/**
 * App Component - Main application with screen navigation
 *
 * Navigation Flow:
 *
 * [No activeProfile] -> ProfileSwitcher
 *                        |
 *                        v (correct PIN)
 * [activeProfile set] -> StartScreen -> GameScreen -> ResultScreen
 *                             ^            |              |
 *                             +------------+--------------+
 *
 * Manages:
 * - Profile-gated entry: shows ProfileSwitcher when no active profile
 * - Screen state ('start', 'game', 'result')
 * - Firebase authentication
 * - Game progress persistence (keyed to activeProfile.firebaseUid)
 * - Session statistics between screens
 */
function App() {
  const { activeProfile, isLoading: profileLoading, clearActiveProfile } = useProfile()
  const { user, loading: authLoading, error: authError } = useFirebase()
  const {
    progress,
    updateProgress,
    forceSave,
    loading: progressLoading,
  } = useGameProgress(activeProfile?.firebaseUid ?? user?.uid)

  // Screen navigation state
  const [screen, setScreen] = useState('start')

  // Session statistics (captured when game ends, passed to ResultScreen)
  const [sessionStats, setSessionStats] = useState(null)

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

  // Handle switching profile (back to switcher)
  const handleSwitchProfile = useCallback(() => {
    forceSave()
    clearActiveProfile()
    setSessionStats(null)
    setScreen('start')
  }, [forceSave, clearActiveProfile])

  // Handle "Add Hero" in switcher — placeholder until #20 implements create flow
  const handleCreateProfile = useCallback(() => {
    // Intentionally empty: wired by #20 (Create profile flow)
    console.info('[App] Create profile flow not yet implemented (see #20)')
  }, [])

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

  // ── No active profile → show ProfileSwitcher ──────────────────────────
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
          progress={progress}
          onSwitchProfile={handleSwitchProfile}
          activeProfile={activeProfile}
        />
      )}

      {screen === 'game' && (
        <GameScreen
          onGameEnd={handleGameEnd}
          updateProgress={updateProgress}
          initialProgress={progress}
        />
      )}

      {screen === 'result' && sessionStats && (
        <ResultScreen
          sessionStats={sessionStats}
          onPlayAgain={handlePlayAgain}
          onExit={handleExit}
        />
      )}
    </>
  )
}

export default App
