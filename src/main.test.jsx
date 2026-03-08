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

  it('wraps App inside ProfileProvider inside StrictMode', () => {
    // The rendered element is: <StrictMode><ProfileProvider><App /></ProfileProvider></StrictMode>
    expect(capturedElement.type).toBe(React.StrictMode.type ?? React.StrictMode)

    const providerElement = capturedElement.props.children
    expect(providerElement).toBeTruthy()
    // ProfileProvider wraps App
    expect(providerElement.props.children).toBeTruthy()
  })
})
