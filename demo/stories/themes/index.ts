import lightTheme from './light-theme.css'
import darkTheme from './dark-theme.css'
import typographyTheme from './typography-theme.css'

export const colorThemes = {
    light: lightTheme,
    dark: darkTheme,
}

export const typographyThemes = {
    default: typographyTheme,
}

export type ColorTheme = keyof typeof colorThemes