# Changelog

All notable changes to the Math Trainer project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-03-13

### Added
- Level progression UI with 13-node LevelMap visualization (#80)
- Level-up celebration screen with Sonic-themed animations (#78)
- Max-level champion screen for completing all 13 levels (#79)
- Wire currentLevel prop through game flow for level-aware problems (#77)
- Level progression integration tests — 22 new tests (#81)
- 18 new e2e regression scenarios (REG-061 to REG-078)

### Fixed
- LevelMap locked level styling (#104)
- LevelUpScreen animation jank (#105)
- Champion screen confetti performance (#106)
- Level name display in GameScreen (#107)
- Progress not saving on level up (#108)
- StartScreen LevelMap not updating after level change (#109)

## [1.3.0] - 2026-03-12

### Added
- Learning aids system with DotCounter and NumberLine visualizations (#25)
- Strategy hint engine with text-based math strategies (#27)
- LearningAid orchestrator integrating confidence-driven aid display (#26)
- Tier 1 visual aids: dot counting, number line for addition/subtraction
- Tier 2 strategy hints: counting-on, doubles, near-doubles, make-ten, subtract-from-ten
- 160+ new tests across learning aid components

## [1.2.0] - 2026-03-09

### Added
- Multi-profile system with PIN-protected profiles (#17)
- Profile storage utilities with SHA-256 PIN hashing (#18)
- ProfileContext provider and ProfileSwitcher UI (#19)
- Create Profile wizard with nickname, avatar, PIN, and language (#20)
- Anonymous Firebase auth per profile
- 300+ new tests for profile system

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

[1.4.0]: https://github.com/DubiWork/math-trainer/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/DubiWork/math-trainer/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/DubiWork/math-trainer/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/DubiWork/math-trainer/compare/v1.0.0...v1.1.0
[1.0.1]: https://github.com/DubiWork/math-trainer/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/DubiWork/math-trainer/releases/tag/v1.0.0
