import { createThemeContract } from '@vanilla-extract/css';
/** Type of the typography contract a theme has to fulfill */
const properties = {
    primaryFontFamily: '',
    secondaryFontFamily: '',
};
/** Typography contract, to be able to use theme specific fonts */
export const typographyContract = createThemeContract(properties);
