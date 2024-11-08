declare const properties: {
    default: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
};
/** Type of the font size contract a responsive font set has to fulfill */
export type FontSizeContract = typeof properties;
/** Font size contract, to be able to use auto responsive fonts */
export declare const fontSizeContract: {
    default: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    xs: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    sm: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    md: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    lg: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    xl: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    '2xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    '3xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    '4xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    '5xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    '6xl': `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
export {};
