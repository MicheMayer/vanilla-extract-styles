import { createTheme as createVanillaExtractTheme } from '@vanilla-extract/css'
import { colorContract, type ColorContract } from '@contracts/color.contract.css'

export const createTheme = (
    colors: ColorContract,
) =>
createVanillaExtractTheme(
    {
        colors: colorContract,
    },
    {
        colors: colors,
    }
)