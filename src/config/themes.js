/**
 * Theme configuration for Math Trainer
 *
 * Defines hero-specific branding (titles, emojis, messages) so that
 * downstream components can render themed content based on the
 * player's chosen hero profile.
 *
 * Each theme key must match the `theme` field stored on a profile object.
 */

export const THEMES = {
  sonic: {
    name: 'Sonic',
    emoji: '\u{1F994}\u{1F4A8}',       // hedgehog + dash
    titlePrefix: 'Sonic',
    streakEmoji: '\u{1F994}',            // hedgehog
    correctMessage: 'Sonic Speed!',
    amazingMessage: 'Sonic Speed! Amazing!',
  },
  spiderman: {
    name: 'Spiderman',
    emoji: '\u{1F577}\u{FE0F}\u{1F578}\u{FE0F}', // spider + web
    titlePrefix: 'Spiderman',
    streakEmoji: '\u{1F577}\u{FE0F}',   // spider
    correctMessage: 'Spider Sense!',
    amazingMessage: 'Spider Power! Amazing!',
  },
}

export const DEFAULT_THEME = 'sonic'

/**
 * Returns the theme object for the given key, falling back to sonic.
 *
 * @param {string} themeKey - Key into THEMES (e.g. 'sonic', 'spiderman')
 * @returns {object} Theme configuration object
 */
export const getTheme = (themeKey) => THEMES[themeKey] || THEMES[DEFAULT_THEME]
