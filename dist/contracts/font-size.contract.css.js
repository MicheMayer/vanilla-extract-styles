import { createThemeContract } from '@vanilla-extract/css';
const properties = {
    default: '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
    '5xl': '',
    '6xl': '',
};
/** Font size contract, to be able to use auto responsive fonts */
export const fontSizeContract = createThemeContract(properties);
