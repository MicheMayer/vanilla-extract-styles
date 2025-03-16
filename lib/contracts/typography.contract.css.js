import { createThemeContract } from '@vanilla-extract/css';
/** Default values of typography contract */
const properties = {
    primaryFontFamily: '',
    secondaryFontFamily: '',
};
/** Typography contract, to be able to use theme specific fonts */
export const typographyContract = createThemeContract(properties);
