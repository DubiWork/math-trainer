# Math Trainer - Sonic Edition

[![Deploy to Firebase Hosting](https://github.com/DubiWork/math-trainer/actions/workflows/deploy.yml/badge.svg)](https://github.com/DubiWork/math-trainer/actions/workflows/deploy.yml)

A Sonic-themed math training game for kids, designed to make learning addition and subtraction fun!

Live Demo: https://math-trainer-1a632.web.app

## Features (Planned)

- Addition and subtraction practice with numbers 1-10
- Sonic-themed visuals and sound effects
- Progressive difficulty levels
- Score tracking and achievements
- Works offline as a PWA (Progressive Web App)

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **PWA** - Offline capability and installable app
- **Firebase** (coming soon) - Authentication and data persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/    # React components (GameScreen, Problem, AnswerInput, etc.)
  hooks/         # Custom React hooks (useGameState, useTimer, etc.)
  utils/         # Utility functions (math problem generation, scoring)
  styles/        # Global CSS styles with Tailwind
  App.jsx        # Main application component
  main.jsx       # Application entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
