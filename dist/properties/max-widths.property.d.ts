/**
 * Object with all available max-widths and their pixel values. Mostly used to
 * limit container widths.
 */
export declare const maxWidths: {
    readonly none: "none";
    readonly xs: "550px";
    readonly sm: "738px";
    readonly md: "960px";
    readonly lg: "1200px";
    readonly xl: "1440px";
    readonly '2xl': "1760px";
    readonly full: "100%";
};
/** Type that holds possible values for a max width */
export type MaxWidth = keyof typeof maxWidths;
