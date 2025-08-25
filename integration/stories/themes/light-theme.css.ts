import { utils } from '@michemayer/vanilla-extract-styles'
import type { ColorContract } from '@michemayer/vanilla-extract-styles'
import type { TypographyContract } from '@michemayer/vanilla-extract-styles'

/**
 * Theme exclusive colors
 *
 * For simplicity and maintainability, only a subset is used within the theme.
 */
export const colors = {
  ...utils.colors.createTintAndShades({ baseline: '#1a1a18', name: 'spacegray' }),
  ...utils.colors.createTintAndShades({ baseline: '#eaeaef', name: 'ivory' }),
  ...utils.colors.createTintAndShades({ baseline: '#9e2a2f', name: 'rust' }),
  ...utils.colors.createTintAndShades({ baseline: '#b4cdb4', name: 'sage' }),
  ...utils.colors.createTintAndShades({ baseline: '#ffac00', name: 'sun' }),
  ...utils.colors.createTintAndShades({ baseline: '#00aaff', name: 'ocean' }),
} as const

export const colorProperties = {
  primaryOneDefault: colors.ivory100,
  primaryOneLight: colors.ivory080,
  primaryOneDark: colors.ivory120,

  secondaryDefault: colors.ocean100,
  secondaryLight: colors.ocean080,
  secondaryDark: colors.ocean120,

  textDefault: colors.spacegray100,
  textLight: colors.spacegray080,
  textDark: colors.spacegray120,

  dangerDefault: colors.rust100,
  dangerLight: colors.rust060,
  dangerDark: colors.rust140,

  successDefault: colors.sage130,
  successLight: colors.sage060,
  successDark: colors.sage140,

  warningDefault: colors.sun100,
  warningLight: colors.sun060,
  warningDark: colors.sun140,
} satisfies ColorContract;

export const typographyProperties = {
  primaryFontFamily: 'Verdana',
  secondaryFontFamily: 'Roboto',
} satisfies TypographyContract;

export default utils.themes.createTheme(
    colorProperties,
    typographyProperties,
);