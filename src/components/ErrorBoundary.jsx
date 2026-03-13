import React from 'react'

/**
 * ErrorBoundary — Root-level error catcher for Math Trainer
 *
 * Intentionally uses NO i18n, context providers, or Firebase.
 * This component sits ABOVE all providers so it must be self-contained.
 * Error details (message, stack, componentStack) are intentionally
 * withheld from the UI to prevent information leakage.
 *
 * Bilingual fallback UI (Hebrew + English) is hardcoded here
 * since the i18n provider may itself be the source of the error.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
    this.handleReset = this.handleReset.bind(this)
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // Sentry-ready: replace with Sentry.captureException(error, { extra: info })
    console.error('ErrorBoundary caught:', error, info)
  }

  handleReset() {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <div
        role="alert"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #0066cc, #003d7a)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <div
          style={{ fontSize: '4rem', marginBottom: '1rem' }}
          role="img"
          aria-label="hedgehog"
        >
          &#x1F994;
        </div>

        <h1
          style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}
          dir="rtl"
        >
          אופס! משהו קרה...
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: 0.85,
          }}
          lang="en"
        >
          Oops! Something happened...
        </p>

        <button
          onClick={this.handleReset}
          style={{
            background: 'linear-gradient(to right, #ffd700, #ffc107)',
            color: '#003d7a',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            padding: '0.875rem 2.5rem',
            borderRadius: '1rem',
            border: 'none',
            cursor: 'pointer',
            minHeight: '44px',
            boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)',
          }}
          aria-label="Try again"
        >
          <span dir="rtl">בוא ננסה שוב</span>
          {' / '}
          <span lang="en">Let&#x27;s try again</span>
        </button>
      </div>
    )
  }
}

export default ErrorBoundary
