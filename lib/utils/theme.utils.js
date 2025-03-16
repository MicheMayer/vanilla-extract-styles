import { createTheme as createVanillaExtractTheme } from '@vanilla-extract/css';
import { colorContract } from '../contracts/color.contract.css';
import { typographyContract } from '../contracts/typography.contract.css';
export const createTheme = (colorProperties, typographyProperties) => createVanillaExtractTheme({
    colors: colorContract,
    typography: typographyContract,
}, {
    colors: colorProperties,
    typography: typographyProperties,
});
