import type { FontFamily } from '@properties/font-faces.property'
import { createThemeContract } from '@vanilla-extract/css'

/** Type of the typography contract a theme has to fulfill */
export type TypographyContract = {
    primaryFontFamily: FontFamily,
    secondaryFontFamily: FontFamily,
}

/** Default values of typography contract */
const properties = {
    primaryFontFamily: '',
    secondaryFontFamily: '',
} as const satisfies TypographyContract

/** Typography contract, to be able to use theme specific fonts */
export const typographyContract = createThemeContract(properties)
