/**
 * Object with all available font sizes and their corresponding values for
 * screens from 0px < breakpoints.medium
 */
export declare const fontSizesXsToSm: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly default: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.375rem";
    readonly '3xl': "1.5rem";
    readonly '4xl': "1.625rem";
    readonly '5xl': "1.75rem";
    readonly '6xl': "3rem";
};
/**
 * Object with all available font sizes and their corresponding values for
 * screens >= breakpoints.medium < breakpoints.lg
 */
export declare const fontSizesMdTo3Xl: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly default: "1.125rem";
    readonly lg: "1.25rem";
    readonly xl: "1.5rem";
    readonly '2xl': "1.875rem";
    readonly '3xl': "2.25rem";
    readonly '4xl': "2.5rem";
    readonly '5xl': "3rem";
    readonly '6xl': "4.5rem";
};
/**
 * Object with all available font sizes and their corresponding values for
 * screens >= breakpoints.3xl
 */
export declare const fontSizesFrom3Xl: {
    readonly xs: "0.75rem";
    readonly sm: " 0.875rem";
    readonly md: "1rem";
    readonly default: "1.25rem";
    readonly lg: "1.375rem";
    readonly xl: "1.625rem";
    readonly '2xl': "2rem";
    readonly '3xl': "3rem";
    readonly '4xl': "3.625rem";
    readonly '5xl': "4.5rem";
    readonly '6xl': "5.625rem";
};
export type FontSize = keyof typeof fontSizesXsToSm;
