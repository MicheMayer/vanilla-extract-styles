/**
 * Object with available SPACES including shorthands and precise values,
 * that are available in most spacing props like margin, paddings.
 *
 * Values are provides in rem for better a11y and calculated on browsers default
 * font-size of 16px. The keys correspond to the px value for easier lookup.
 */
export declare const spaces: {
    readonly none: "0px";
    readonly auto: "auto";
    readonly px: "0.0625rem";
    readonly '3xs': "0.375rem";
    readonly '2xs': "0.75rem";
    readonly xs: "0.875rem";
    readonly sm: "1rem";
    readonly md: "1.5rem";
    readonly lg: "2.25rem";
    readonly xl: "2.5rem";
    readonly '2xl': "3rem";
    readonly '3xl': "5.625rem";
    readonly '4xl': "9.375rem";
};
export type Space = keyof typeof spaces;
