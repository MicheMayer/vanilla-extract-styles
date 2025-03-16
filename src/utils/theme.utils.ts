import { createTheme as createVanillaExtractTheme } from '@vanilla-extract/css'
import { colorContract, type ColorContract } from '@contracts/color.contract.css'
import { typographyContract, type TypographyContract } from '@contracts/typography.contract.css'
import { fontSizeContract, type FontSizeContract } from '@contracts/font-size.contract.css'

export const createTheme = (
    colorProperties: ColorContract,
    typographyProperties: TypographyContract,
    fontSizeProperties: FontSizeContract,
) =>
createVanillaExtractTheme(
    {
        colors: colorContract,
        typography: typographyContract,
        fontsize: fontSizeContract,
    },
    {
        colors: colorProperties,
        typography: typographyProperties,
        fontsize: fontSizeProperties,
    }
)