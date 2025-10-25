import { createTheme as createColorTheme } from './color.theme'
import { createTheme as createTypographyTheme } from './typography.theme'

export default {
    colors: {
        createTheme: createColorTheme,
    },
    typography: {
        createTheme: createTypographyTheme,
    },
}