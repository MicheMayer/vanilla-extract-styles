import type { FontFamily } from '@properties/font-faces.property';
export type TypographyContract = {
    primaryFontFamily: FontFamily;
    secondaryFontFamily: FontFamily;
};
export declare const typographyContract: {
    readonly primaryFontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    readonly secondaryFontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
