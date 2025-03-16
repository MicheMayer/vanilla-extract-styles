import type { ThemeColor } from '@contracts/color.contract.css'
import { createTintAndShades } from '@utils/color.utils'

/* eslint-disable jsdoc/require-jsdoc */
export type TintsAndShades = {
    '060': string;
    '070': string;
    '080': string;
    '090': string;
    '110': string;
    '100': string;
    '120': string;
    '130': string;
    '140': string;
  }

/** All common colors, that are not theme specific */
export const colors = {
    ...createTintAndShades({ baseline: '#f5f5f5', name: 'whiteSmoke' }),
    ...createTintAndShades({ baseline: '#101921', name: 'graphite' }),
    ...createTintAndShades({ baseline: '#eff0fb', name: 'oldIvory' }),
    ...createTintAndShades({ baseline: '#eeedec', name: 'skeletonLight' }),
    ...createTintAndShades({ baseline: '#fffd66', name: 'mark' }),
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    inherit: 'inherit',
} as const

/** Type of a global, theme unspecific color */
export type GlobalColor = keyof typeof colors

/** Type of a color, including theme and common colors */
export type Color = GlobalColor | ThemeColor