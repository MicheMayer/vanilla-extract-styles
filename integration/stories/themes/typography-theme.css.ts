import { themes } from '@michemayer/vanilla-extract-styles'
import type { TypographyContract } from '@michemayer/vanilla-extract-styles'

export const typographyProperties = {
  primary: {
    fontFamily: 'Verdana',
    fontSize: '100%',
  },
  secondary: {
    fontFamily: 'Roboto',
    fontSize: '100%',
  },
} satisfies TypographyContract;

export default themes.typography.createTheme(
    typographyProperties,
);