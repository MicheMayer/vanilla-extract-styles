import type { FontFamily } from '@properties/font-faces.property'
import { createThemeContract } from '@vanilla-extract/css'

export type TypographyContract = {
    primaryFontFamily: FontFamily,
    secondaryFontFamily: FontFamily,
};

/** Type of the typography contract a theme has to fulfill */
const properties = {
    primaryFontFamily: '',
    secondaryFontFamily: '',
} as const satisfies TypographyContract;

/** Typography contract, to be able to use theme specific fonts */
export const typographyContract = createThemeContract(properties)
