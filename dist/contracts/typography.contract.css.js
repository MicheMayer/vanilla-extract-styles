import { createThemeContract } from '@vanilla-extract/css';
const properties = {
    primaryFontFamily: 'Bookman Old Style',
    secondaryFontFamily: 'Harlow Solid',
};
export const typographyContract = createThemeContract(properties);
