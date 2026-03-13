import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/index.js'
import App from './App.jsx'
import ProfileProvider from './context/ProfileContext.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </I18nextProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
