import { createThemeContract } from '@vanilla-extract/css';
const properties = {
    primaryOneDefault: '',
    primaryOneLight: '',
    primaryOneDark: '',
    secondaryDefault: '',
    secondaryLight: '',
    secondaryDark: '',
    textDefault: '',
    textLight: '',
    textDark: '',
    dangerDefault: '',
    dangerLight: '',
    dangerDark: '',
    successDefault: '',
    successLight: '',
    successDark: '',
    warningDefault: '',
    warningLight: '',
    warningDark: '',
};
/** Color contract, to be able to use theme specific colors */
export const colorContract = createThemeContract(properties);
