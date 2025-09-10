import type { FontFamily, BaseFontSize } from '@properties/font-faces.property'
import { createThemeContract } from '@vanilla-extract/css'

/** Type of the typography contract a theme has to fulfill */
export type TypographyContract = {
    primary: {
        fontFamily: FontFamily,
        fontSize: BaseFontSize,
    },
    secondary: {
        fontFamily: FontFamily,
        fontSize: BaseFontSize,
    },
}

/** Default values of typography contract */
const properties = {
    primary: {
        fontFamily: '',
        fontSize: '100%',
    },
    secondary: {
        fontFamily: '',
        fontSize: '100%',
    },
} as const satisfies TypographyContract

/** Typography contract, to be able to use theme specific fonts */
export const typographyContract = createThemeContract(properties)
