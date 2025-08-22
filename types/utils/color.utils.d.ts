import type { TintsAndShades } from '@properties/colors.property';
type ColorValues<ColorName extends string> = {
    [K in `${ColorName}${keyof TintsAndShades}`]: string;
};
interface Params<ColorName extends string> {
    /** The baseline color to create tints and shades from. */
    baseline: `#${string}`;
    /** The name of the color, used to prefix the tints and shades */
    name: ColorName;
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
export declare const createTintAndShades: <ColorName extends string>({ baseline, name, }: Params<ColorName>) => ColorValues<ColorName>;
declare const _default: {
    createTintAndShades: <ColorName extends string>({ baseline, name, }: Params<ColorName>) => ColorValues<ColorName>;
};
export default _default;
