declare const properties: {
    primaryOneDefault: string;
    primaryOneLight: string;
    primaryOneDark: string;
    secondaryDefault: string;
    secondaryLight: string;
    secondaryDark: string;
    textDefault: string;
    textLight: string;
    textDark: string;
    dangerDefault: string;
    dangerLight: string;
    dangerDark: string;
    successDefault: string;
    successLight: string;
    successDark: string;
    warningDefault: string;
    warningLight: string;
    warningDark: string;
};
/** Theme contract */
export type ColorContract = typeof properties;
/** Theme specific color */
export type ThemeColor = keyof typeof colorContract;
type InferColorGroup<T extends string> = T extends `${infer Prefix}Default` ? Prefix : never;
export type ColorGroup = InferColorGroup<ThemeColor>;
export declare const colorContract: {
    primaryOneDefault: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    primaryOneLight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    primaryOneDark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    secondaryDefault: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    secondaryLight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    secondaryDark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    textDefault: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    textLight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    textDark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    dangerDefault: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    dangerLight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    dangerDark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    successDefault: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    successLight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    successDark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    warningDefault: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    warningLight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    warningDark: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
export {};
