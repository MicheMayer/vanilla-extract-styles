export type * from './color.contract.css';
export type * from './font-size.contract.css';
export type * from './typography.contract.css';
declare const _default: {
    colorContract: {
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
    fontSizeContract: {
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
    typographyContract: {
        readonly primaryFontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        readonly secondaryFontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export default _default;
