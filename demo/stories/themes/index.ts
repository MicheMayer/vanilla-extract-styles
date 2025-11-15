import lightTheme from './light-theme.css'
import darkTheme from './dark-theme.css'
import typographyTheme from './typography-theme.css'

export const colorThemes: Record<string, string> = {
    light: lightTheme,
    dark: darkTheme,
}

export const typographyThemes: Record<string, string> = {
    default: typographyTheme,
}

export type ColorTheme = keyof typeof colorThemes