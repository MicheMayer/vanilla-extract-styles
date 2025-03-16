import { tint, shade } from 'polished'
import type { TintsAndShades } from '@properties/colors.property'

type ColorValues<ColorName extends string> = {
    [K in `${ColorName}${keyof TintsAndShades}`]: string
}

/** Defines, how many tints and shades (per) */
const NUMBER_PER_TINTS_AND_SHADES = 4

interface Params<ColorName extends string> {
    /** The baseline color to create tints and shades from. */
    baseline: `#${string}`

    /** The name of the color, used to prefix the tints and shades */
    name: ColorName
}

/**
 * Helper that creates four tints and shades from a given baseline.
 *
 * @returns Object with tint and shades for the given baseline
 *
 * @example
 * ```ts
 * createTintAndShades({baseline: ##55b7f0, prefix: 'myColor'});
 * =>
 * {myColor60: #66899e, myColor70: #4c758e ...}
 * ```
 */
export const createTintAndShades = <ColorName extends string>({
    baseline,
    name,
}: Params<ColorName>) => {
    const array = Array.from({ length: NUMBER_PER_TINTS_AND_SHADES });

    /**
     * Create tints by making the baseline color lighter without hue shifts by
     * increasing the tint percentage by 10 with each step
     */
    const tints = array
        .map((_, index) => tint(((index + 1) * 10) / 100, baseline))
        .reduce(
            (acc, val, index) => ({ ...acc, [`${name}0${90 - index * 10}`]: val }),
            {}
        )

    /**
     * Create shades by making the baseline color darker without hue shifts by
     * increasing the shade percentage by 10 with each step
     */
    const shades = array
        .map((_, index) => shade(((index + 1) * 10) / 100, baseline))
        .reduce(
            (acc, val, index) => ({ ...acc, [`${name}${110 + index * 10}`]: val }),
            {}
        )

    return {
        ...tints,
        [`${name}100`]: baseline,
        ...shades,
    } as ColorValues<ColorName>
}

export default {
    createTintAndShades,
}