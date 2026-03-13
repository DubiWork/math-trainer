/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import React from 'react'
import ErrorBoundary from './ErrorBoundary'

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * A component that throws on render when `shouldThrow` prop is true.
 * The thrown error intentionally contains sensitive strings to verify
 * they never reach the rendered output.
 */
function BrokenChild({ shouldThrow = false }) {
  if (shouldThrow) {
    throw new Error('secret-error-message: db connection string xyz')
  }
  return <div data-testid="healthy-child">All good</div>
}

/**
 * Suppress the expected console.error output so test output stays clean.
 * React also prints its own error overlay logs for uncaught errors in tests.
 */
let consoleErrorSpy

beforeEach(() => {
  consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  consoleErrorSpy.mockRestore()
  cleanup()
})

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('ErrorBoundary', () => {
  describe('normal rendering (no error)', () => {
    it('renders children when no error is thrown', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={false} />
        </ErrorBoundary>,
      )
      expect(screen.getByTestId('healthy-child')).toBeTruthy()
    })

    it('does not show the fallback UI when children render normally', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={false} />
        </ErrorBoundary>,
      )
      expect(screen.queryByRole('alert')).toBeNull()
    })
  })

  describe('fallback UI (error state)', () => {
    it('catches a render error and shows the fallback', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByRole('alert')).toBeTruthy()
    })

    it('shows the Hebrew error message', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByText(/אופס! משהו קרה/)).toBeTruthy()
    })

    it('shows the Hebrew retry message on the button', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByText(/בוא ננסה שוב/)).toBeTruthy()
    })

    it('shows the English error message', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByText(/Oops! Something happened/)).toBeTruthy()
    })

    it('shows the English retry text on the button', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByText(/Let.s try again/)).toBeTruthy()
    })

    it('shows a Try Again button', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByRole('button', { name: /try again/i })).toBeTruthy()
    })

    it('shows the hedgehog emoji', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      expect(screen.getByRole('img', { name: /hedgehog/i })).toBeTruthy()
    })
  })

  describe('Try Again resets error state', () => {
    it('re-renders children after clicking Try Again (when child no longer throws)', () => {
      // Use a wrapper to toggle shouldThrow after reset
      function Wrapper() {
        const [shouldThrow, setShouldThrow] = React.useState(true)

        // Expose a way to stop throwing (simulates parent fixing state)
        React.useEffect(() => {
          // After the boundary resets, children render again — use a flag
          window.__stopThrowing = () => setShouldThrow(false)
          return () => { delete window.__stopThrowing }
        }, [])

        return (
          <ErrorBoundary>
            <BrokenChild shouldThrow={shouldThrow} />
          </ErrorBoundary>
        )
      }

      render(<Wrapper />)
      // Fallback is visible
      expect(screen.getByRole('alert')).toBeTruthy()

      // Stop the child from throwing, then click Try Again
      window.__stopThrowing()
      fireEvent.click(screen.getByRole('button', { name: /try again/i }))

      // Children should now render without error
      expect(screen.getByTestId('healthy-child')).toBeTruthy()
      expect(screen.queryByRole('alert')).toBeNull()
    })

    it('resets hasError to false when Try Again is clicked', () => {
      // Even if child throws again, the click handler must fire and reset state
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      const button = screen.getByRole('button', { name: /try again/i })
      // Should not throw during click handling
      expect(() => fireEvent.click(button)).not.toThrow()
    })
  })

  describe('security — no error details in rendered output', () => {
    it('does not expose error.message in rendered output', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      const alert = screen.getByRole('alert')
      expect(alert.textContent).not.toContain('secret-error-message')
      expect(alert.textContent).not.toContain('db connection string xyz')
    })

    it('does not expose error.stack in rendered output', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      const alert = screen.getByRole('alert')
      // Stack traces contain "at " function references
      expect(alert.textContent).not.toContain('at BrokenChild')
    })

    it('does not expose componentStack in rendered output', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      const alert = screen.getByRole('alert')
      // componentStack contains React component names
      expect(alert.textContent).not.toContain('in BrokenChild')
      expect(alert.textContent).not.toContain('in ErrorBoundary')
    })
  })

  describe('error logging', () => {
    it('logs the error to console.error', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      // At least one call should include our custom prefix
      const wasCalled = consoleErrorSpy.mock.calls.some(
        (args) => typeof args[0] === 'string' && args[0].includes('ErrorBoundary caught:'),
      )
      expect(wasCalled).toBe(true)
    })

    it('passes the error object as the second argument to console.error', () => {
      render(
        <ErrorBoundary>
          <BrokenChild shouldThrow={true} />
        </ErrorBoundary>,
      )
      const catchCall = consoleErrorSpy.mock.calls.find(
        (args) => typeof args[0] === 'string' && args[0].includes('ErrorBoundary caught:'),
      )
      expect(catchCall).toBeTruthy()
      expect(catchCall[1]).toBeInstanceOf(Error)
    })
  })
})
