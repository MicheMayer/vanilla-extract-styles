import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@michemayer/vanilla-extract-styles'

export const heading = recipe({
  base: {
    fontFamily: vars.typography.fonts.primaryFontFamily,
    fontWeight: 'bold',
  },
  variants: {
    level: {
      '1': { fontSize: vars.typography.fontSizes['2xl'] },
      '2': { fontSize: vars.typography.fontSizes['xl'] },
      '3': { fontSize: vars.typography.fontSizes['lg'] },
      '4': { fontSize: vars.typography.fontSizes['md'] },
      '5': { fontSize: vars.typography.fontSizes['sm'] },
      '6': { fontSize: vars.typography.fontSizes['xs'] },
    },
  },
})
