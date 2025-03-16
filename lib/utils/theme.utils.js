import { createTheme as createVanillaExtractTheme } from '@vanilla-extract/css';
import { colorContract } from '../contracts/color.contract.css';
import { typographyContract } from '../contracts/typography.contract.css';
import { fontSizeContract } from '../contracts/font-size.contract.css';
export const createTheme = (colorProperties, typographyProperties, fontSizeProperties) => createVanillaExtractTheme({
    colors: colorContract,
    typography: typographyContract,
    fontsize: fontSizeContract,
}, {
    colors: colorProperties,
    typography: typographyProperties,
    fontsize: fontSizeProperties,
});
