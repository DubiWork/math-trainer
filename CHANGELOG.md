# Changelog

All notable changes to the Math Trainer project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-03-08

### Added
- Level configuration data structure with 13 difficulty levels (#12)
- `getLevelConfig()` utility for retrieving level settings
- Problem generator now accepts level configuration (#13)
- `generateProblem(levelConfig)` supports operation types, number ranges, and carry/borrow settings per level
- Comprehensive test suite for problem generation (268 lines of tests)

### Changed
- `generateProblem()` refactored from hardcoded logic to configurable, level-driven generation

## [1.0.1] - 2026-03-06

### Fixed
- "Back to Start" button now saves stats and resets score correctly (#5)

### Added
- Firebase Hosting CD pipeline via GitHub Actions (#8)
- Health check verification in deploy workflow

## [1.0.0] - 2026-03-04

### Added
- Sonic-themed Math Trainer MVP (#1)
- Addition and subtraction problems for first-graders
- Anonymous Firebase Authentication (COPPA compliant)
- Firestore progress persistence
- PWA support with offline capability
- Sonic character animations and sound effects
- Environment variable validation (6 Firebase config vars)

[1.1.0]: https://github.com/DubiWork/math-trainer/compare/v1.0.0...v1.1.0
[1.0.1]: https://github.com/DubiWork/math-trainer/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/DubiWork/math-trainer/releases/tag/v1.0.0
