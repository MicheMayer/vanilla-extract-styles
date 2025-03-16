import { createTheme as createVanillaExtractTheme } from '@vanilla-extract/css'
import { colorContract, type ColorContract } from '@contracts/color.contract.css'
import { typographyContract, type TypographyContract } from '@contracts/typography.contract.css'

export const createTheme = (
    colorProperties: ColorContract,
    typographyProperties: TypographyContract,
) =>
createVanillaExtractTheme(
    {
        colors: colorContract,
        typography: typographyContract,
    },
    {
        colors: colorProperties,
        typography: typographyProperties,
    }
)