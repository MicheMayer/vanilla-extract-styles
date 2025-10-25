import type { StyleRule } from '@vanilla-extract/css'
import type { Breakpoint } from '@properties/breakpoints.property'
import { mediaQueries } from '@properties/media-queries.property'
import { fontSizes, type FontSizeContract } from '@contracts/font-size.contract.css'

type CSSProps = Omit<StyleRule, '@media' | '@supports'>
type ResponsiveStyle = Partial<Record<Breakpoint, CSSProps>>

/**
 * Generates a media query for a given breakpoint
 *
 * @param breakpoint The breakpoint to generate the media query for
 * @returns The media query for the given breakpoint
 */
const makeMediaQuery =
  (breakpoint: Breakpoint) => (styles?: CSSProps) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : { [mediaQueries[breakpoint]]: styles }

/**
 * Helper to generate responsive styles to be used within vanilla-extracts
 * style()-function. Use only, when styles can't be responsively generated
 * with the sprinkles()-utility.
 *
 * @param styles Object containing styles for specific breakpoint
 * @returns Style rule to be passed to vanilla-extracts style()-function
 */
export const responsiveFontSizes = (styles: ResponsiveStyle): StyleRule => ({
  ...styles.xs,
  ...(styles.sm ||
    styles.md ||
    styles.lg ||
    styles.xl ||
    styles['2xl'] ||
    styles['3xl']
    ? {
      '@media': {
        ...makeMediaQuery('sm')(styles.sm ?? {}),
        ...makeMediaQuery('md')(styles.md ?? {}),
        ...makeMediaQuery('lg')(styles.lg ?? {}),
        ...makeMediaQuery('xl')(styles.xl ?? {}),
        ...makeMediaQuery('2xl')(styles['2xl'] ?? {}),
        ...makeMediaQuery('3xl')(styles['3xl'] ?? {}),
      },
    }
    : {}),
})

export const generateFontSizes = (xsSize: number, maxSize: number): FontSizeContract => {
  const scaleFactor = Math.pow(maxSize / xsSize, 1 / (Object.keys(fontSizes).length - 1))
  const sizes = Object.keys(fontSizes)
    .filter(key => key !== 'default')
    .reduce((acc, key, index) => {
      const size = xsSize * Math.pow(scaleFactor, index)
      return { ...acc, [key]: `${size}rem` }
    }, {} as FontSizeContract)

  sizes.default = sizes.md

  return sizes satisfies FontSizeContract
}