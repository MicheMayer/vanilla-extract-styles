import lightTheme from './light-theme.css'
import darkTheme from './dark-theme.css'

export const themes = {
    light: lightTheme,
    dark: darkTheme,
}

export type Theme = keyof typeof themes