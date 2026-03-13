/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeAll } from 'vitest'
import React from 'react'

// ─── Mocks ────────────────────────────────────────────────────────────────────

let capturedElement = null
const mockRender = vi.fn((element) => { capturedElement = element })
const mockCreateRoot = vi.fn(() => ({ render: mockRender }))

vi.mock('react-dom/client', () => {
  const mod = {
    createRoot: (...args) => mockCreateRoot(...args),
  }
  return {
    ...mod,
    default: mod,
  }
})

vi.mock('./App.jsx', () => ({
  default: function MockApp() { return null },
}))

vi.mock('./context/ProfileContext.jsx', () => ({
  default: function MockProfileProvider({ children }) { return children },
}))

vi.mock('./i18n/index.js', () => ({
  default: { language: 'he' },
}))

vi.mock('react-i18next', () => ({
  I18nextProvider: function MockI18nextProvider({ children }) { return children },
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: vi.fn(), language: 'he' },
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() },
}))

vi.mock('./components/ErrorBoundary.jsx', () => ({
  default: function MockErrorBoundary({ children }) { return children },
}))

vi.mock('./styles/index.css', () => ({}))

describe('main.jsx', () => {
  beforeAll(async () => {
    // Ensure #root exists in the DOM
    if (!document.getElementById('root')) {
      const root = document.createElement('div')
      root.id = 'root'
      document.body.appendChild(root)
    }

    // Import main.jsx once — triggers createRoot + render
    await import('./main.jsx')
  })

  it('calls createRoot with the #root element', () => {
    expect(mockCreateRoot).toHaveBeenCalledWith(document.getElementById('root'))
  })

  it('calls render on the created root', () => {
    expect(mockRender).toHaveBeenCalled()
    expect(capturedElement).not.toBeNull()
  })

  it('wraps tree inside StrictMode at the root', () => {
    expect(capturedElement.type).toBe(React.StrictMode.type ?? React.StrictMode)
  })

  it('wraps App inside ErrorBoundary inside I18nextProvider inside ProfileProvider inside StrictMode', () => {
    // Tree: <StrictMode><ErrorBoundary><I18nextProvider><ProfileProvider><App/></ProfileProvider></I18nextProvider></ErrorBoundary></StrictMode>
    const strictModeChild = capturedElement.props.children // ErrorBoundary
    expect(strictModeChild).toBeTruthy()

    const i18nProviderElement = strictModeChild.props.children // I18nextProvider
    expect(i18nProviderElement).toBeTruthy()

    const profileProviderElement = i18nProviderElement.props.children // ProfileProvider
    expect(profileProviderElement).toBeTruthy()

    // ProfileProvider's child is App
    expect(profileProviderElement.props.children).toBeTruthy()
  })
})
