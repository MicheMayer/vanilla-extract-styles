import type { Breakpoint } from './properties/breakpoints.property';
interface ResponsiveConditions {
    /** Breakpoints and their corresponding media queries */
    conditions: {
        [K in Breakpoint]: {
            /** The media query */
            '@media': string;
        };
    };
    /** The default condition */
    defaultCondition: Extract<Breakpoint, 'xs'>;
    /** Array of breakpoints */
    responsiveArray: Breakpoint[];
}
/**
 * Provides the base for all responsive properties build with sprinkles
 */
export declare const responsiveConditions: ResponsiveConditions;
/** Responsive properties provided to the "sprinkles"-utility function. */
export declare const responsiveProperties: {
    conditions: {
        defaultCondition: "xs";
        conditionNames: import("./types").SizeVariant[];
    };
    styles: {
        alignItems: {
            values: {
                baseline: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        display: {
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "inline-flex": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        flexDirection: {
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "column-reverse": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "row-reverse": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        flexWrap: {
            values: {
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                wrap: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "wrap-reverse": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        fontSize: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                default: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "5xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "6xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        gap: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        rowGap: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        height: {
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                screen: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        minHeight: {
            values: {
                screen: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        justifyContent: {
            values: {
                "space-around": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "space-between": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        marginBottom: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        marginLeft: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        marginRight: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        marginTop: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        maxWidth: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        paddingBottom: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        paddingLeft: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        paddingRight: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        paddingTop: {
            values: {
                xs: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                sm: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                md: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                lg: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                xl: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "4xl": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                px: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "3xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                "2xs": {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        position: {
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        textAlign: {
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                justify: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
        width: {
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        "2xl": string;
                        "3xl": string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        margin: {
            mappings: ("marginBottom" | "marginLeft" | "marginRight" | "marginTop")[];
        };
        marginX: {
            mappings: ("marginLeft" | "marginRight")[];
        };
        marginY: {
            mappings: ("marginBottom" | "marginTop")[];
        };
        padding: {
            mappings: ("paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop")[];
        };
        paddingX: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        paddingY: {
            mappings: ("paddingBottom" | "paddingTop")[];
        };
    };
};
/**
 * Sprinkles function to be further processed in the sprinkles()-utility
 */
export declare const sprinkles: ((props: {
    color?: "primaryOneDefault" | "primaryOneLight" | "primaryOneDark" | "secondaryDefault" | "secondaryLight" | "secondaryDark" | "textDefault" | "textLight" | "textDark" | "dangerDefault" | "dangerLight" | "dangerDark" | "successDefault" | "successLight" | "successDark" | "warningDefault" | "warningLight" | "warningDark" | "whiteSmoke060" | "whiteSmoke070" | "whiteSmoke080" | "whiteSmoke090" | "whiteSmoke110" | "whiteSmoke100" | "whiteSmoke120" | "whiteSmoke130" | "whiteSmoke140" | "graphite060" | "graphite070" | "graphite080" | "graphite090" | "graphite110" | "graphite100" | "graphite120" | "graphite130" | "graphite140" | "oldIvory060" | "oldIvory070" | "oldIvory080" | "oldIvory090" | "oldIvory110" | "oldIvory100" | "oldIvory120" | "oldIvory130" | "oldIvory140" | "skeletonLight060" | "skeletonLight070" | "skeletonLight080" | "skeletonLight090" | "skeletonLight110" | "skeletonLight100" | "skeletonLight120" | "skeletonLight130" | "skeletonLight140" | "mark060" | "mark070" | "mark080" | "mark090" | "mark110" | "mark100" | "mark120" | "mark130" | "mark140" | "transparent" | "inherit" | "white" | "black" | {
        default?: "primaryOneDefault" | "primaryOneLight" | "primaryOneDark" | "secondaryDefault" | "secondaryLight" | "secondaryDark" | "textDefault" | "textLight" | "textDark" | "dangerDefault" | "dangerLight" | "dangerDark" | "successDefault" | "successLight" | "successDark" | "warningDefault" | "warningLight" | "warningDark" | "whiteSmoke060" | "whiteSmoke070" | "whiteSmoke080" | "whiteSmoke090" | "whiteSmoke110" | "whiteSmoke100" | "whiteSmoke120" | "whiteSmoke130" | "whiteSmoke140" | "graphite060" | "graphite070" | "graphite080" | "graphite090" | "graphite110" | "graphite100" | "graphite120" | "graphite130" | "graphite140" | "oldIvory060" | "oldIvory070" | "oldIvory080" | "oldIvory090" | "oldIvory110" | "oldIvory100" | "oldIvory120" | "oldIvory130" | "oldIvory140" | "skeletonLight060" | "skeletonLight070" | "skeletonLight080" | "skeletonLight090" | "skeletonLight110" | "skeletonLight100" | "skeletonLight120" | "skeletonLight130" | "skeletonLight140" | "mark060" | "mark070" | "mark080" | "mark090" | "mark110" | "mark100" | "mark120" | "mark130" | "mark140" | "transparent" | "inherit" | "white" | "black" | undefined;
        hover?: "primaryOneDefault" | "primaryOneLight" | "primaryOneDark" | "secondaryDefault" | "secondaryLight" | "secondaryDark" | "textDefault" | "textLight" | "textDark" | "dangerDefault" | "dangerLight" | "dangerDark" | "successDefault" | "successLight" | "successDark" | "warningDefault" | "warningLight" | "warningDark" | "whiteSmoke060" | "whiteSmoke070" | "whiteSmoke080" | "whiteSmoke090" | "whiteSmoke110" | "whiteSmoke100" | "whiteSmoke120" | "whiteSmoke130" | "whiteSmoke140" | "graphite060" | "graphite070" | "graphite080" | "graphite090" | "graphite110" | "graphite100" | "graphite120" | "graphite130" | "graphite140" | "oldIvory060" | "oldIvory070" | "oldIvory080" | "oldIvory090" | "oldIvory110" | "oldIvory100" | "oldIvory120" | "oldIvory130" | "oldIvory140" | "skeletonLight060" | "skeletonLight070" | "skeletonLight080" | "skeletonLight090" | "skeletonLight110" | "skeletonLight100" | "skeletonLight120" | "skeletonLight130" | "skeletonLight140" | "mark060" | "mark070" | "mark080" | "mark090" | "mark110" | "mark100" | "mark120" | "mark130" | "mark140" | "transparent" | "inherit" | "white" | "black" | undefined;
    } | undefined;
    backgroundColor?: "primaryOneDefault" | "primaryOneLight" | "primaryOneDark" | "secondaryDefault" | "secondaryLight" | "secondaryDark" | "textDefault" | "textLight" | "textDark" | "dangerDefault" | "dangerLight" | "dangerDark" | "successDefault" | "successLight" | "successDark" | "warningDefault" | "warningLight" | "warningDark" | "whiteSmoke060" | "whiteSmoke070" | "whiteSmoke080" | "whiteSmoke090" | "whiteSmoke110" | "whiteSmoke100" | "whiteSmoke120" | "whiteSmoke130" | "whiteSmoke140" | "graphite060" | "graphite070" | "graphite080" | "graphite090" | "graphite110" | "graphite100" | "graphite120" | "graphite130" | "graphite140" | "oldIvory060" | "oldIvory070" | "oldIvory080" | "oldIvory090" | "oldIvory110" | "oldIvory100" | "oldIvory120" | "oldIvory130" | "oldIvory140" | "skeletonLight060" | "skeletonLight070" | "skeletonLight080" | "skeletonLight090" | "skeletonLight110" | "skeletonLight100" | "skeletonLight120" | "skeletonLight130" | "skeletonLight140" | "mark060" | "mark070" | "mark080" | "mark090" | "mark110" | "mark100" | "mark120" | "mark130" | "mark140" | "transparent" | "inherit" | "white" | "black" | {
        default?: "primaryOneDefault" | "primaryOneLight" | "primaryOneDark" | "secondaryDefault" | "secondaryLight" | "secondaryDark" | "textDefault" | "textLight" | "textDark" | "dangerDefault" | "dangerLight" | "dangerDark" | "successDefault" | "successLight" | "successDark" | "warningDefault" | "warningLight" | "warningDark" | "whiteSmoke060" | "whiteSmoke070" | "whiteSmoke080" | "whiteSmoke090" | "whiteSmoke110" | "whiteSmoke100" | "whiteSmoke120" | "whiteSmoke130" | "whiteSmoke140" | "graphite060" | "graphite070" | "graphite080" | "graphite090" | "graphite110" | "graphite100" | "graphite120" | "graphite130" | "graphite140" | "oldIvory060" | "oldIvory070" | "oldIvory080" | "oldIvory090" | "oldIvory110" | "oldIvory100" | "oldIvory120" | "oldIvory130" | "oldIvory140" | "skeletonLight060" | "skeletonLight070" | "skeletonLight080" | "skeletonLight090" | "skeletonLight110" | "skeletonLight100" | "skeletonLight120" | "skeletonLight130" | "skeletonLight140" | "mark060" | "mark070" | "mark080" | "mark090" | "mark110" | "mark100" | "mark120" | "mark130" | "mark140" | "transparent" | "inherit" | "white" | "black" | undefined;
        hover?: "primaryOneDefault" | "primaryOneLight" | "primaryOneDark" | "secondaryDefault" | "secondaryLight" | "secondaryDark" | "textDefault" | "textLight" | "textDark" | "dangerDefault" | "dangerLight" | "dangerDark" | "successDefault" | "successLight" | "successDark" | "warningDefault" | "warningLight" | "warningDark" | "whiteSmoke060" | "whiteSmoke070" | "whiteSmoke080" | "whiteSmoke090" | "whiteSmoke110" | "whiteSmoke100" | "whiteSmoke120" | "whiteSmoke130" | "whiteSmoke140" | "graphite060" | "graphite070" | "graphite080" | "graphite090" | "graphite110" | "graphite100" | "graphite120" | "graphite130" | "graphite140" | "oldIvory060" | "oldIvory070" | "oldIvory080" | "oldIvory090" | "oldIvory110" | "oldIvory100" | "oldIvory120" | "oldIvory130" | "oldIvory140" | "skeletonLight060" | "skeletonLight070" | "skeletonLight080" | "skeletonLight090" | "skeletonLight110" | "skeletonLight100" | "skeletonLight120" | "skeletonLight130" | "skeletonLight140" | "mark060" | "mark070" | "mark080" | "mark090" | "mark110" | "mark100" | "mark120" | "mark130" | "mark140" | "transparent" | "inherit" | "white" | "black" | undefined;
    } | undefined;
    boxShadow?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | {
        default?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | undefined;
        hover?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | undefined;
    } | undefined;
} & {
    alignItems?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | {
        xs?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        sm?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        md?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        lg?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        xl?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        "2xl"?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        "3xl"?: "baseline" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined;
    display?: "none" | "flex" | "block" | "inline" | "inline-flex" | {
        xs?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
        sm?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
        md?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
        lg?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
        xl?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
        "2xl"?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
        "3xl"?: "none" | "flex" | "block" | "inline" | "inline-flex" | undefined;
    } | undefined;
    flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | {
        xs?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        sm?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        md?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        lg?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        xl?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        "2xl"?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
        "3xl"?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
    } | undefined;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | {
        xs?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        sm?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        md?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        lg?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        xl?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        "2xl"?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        "3xl"?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    } | undefined;
    fontSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "default" | "4xl" | "5xl" | "6xl" | "inherit" | undefined;
    } | undefined;
    gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    rowGap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    height?: "auto" | "screen" | "full" | {
        xs?: "auto" | "screen" | "full" | undefined;
        sm?: "auto" | "screen" | "full" | undefined;
        md?: "auto" | "screen" | "full" | undefined;
        lg?: "auto" | "screen" | "full" | undefined;
        xl?: "auto" | "screen" | "full" | undefined;
        "2xl"?: "auto" | "screen" | "full" | undefined;
        "3xl"?: "auto" | "screen" | "full" | undefined;
    } | undefined;
    minHeight?: "screen" | "full" | {
        xs?: "screen" | "full" | undefined;
        sm?: "screen" | "full" | undefined;
        md?: "screen" | "full" | undefined;
        lg?: "screen" | "full" | undefined;
        xl?: "screen" | "full" | undefined;
        "2xl"?: "screen" | "full" | undefined;
        "3xl"?: "screen" | "full" | undefined;
    } | undefined;
    justifyContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | {
        xs?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        sm?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        md?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        lg?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        xl?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        "2xl"?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
        "3xl"?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
    } | undefined;
    marginBottom?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    marginLeft?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    marginRight?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    marginTop?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "none" | "full" | undefined;
    } | undefined;
    paddingBottom?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    paddingLeft?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    paddingRight?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    paddingTop?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    position?: "fixed" | "absolute" | "relative" | {
        xs?: "fixed" | "absolute" | "relative" | undefined;
        sm?: "fixed" | "absolute" | "relative" | undefined;
        md?: "fixed" | "absolute" | "relative" | undefined;
        lg?: "fixed" | "absolute" | "relative" | undefined;
        xl?: "fixed" | "absolute" | "relative" | undefined;
        "2xl"?: "fixed" | "absolute" | "relative" | undefined;
        "3xl"?: "fixed" | "absolute" | "relative" | undefined;
    } | undefined;
    textAlign?: "left" | "right" | "center" | "justify" | {
        xs?: "left" | "right" | "center" | "justify" | undefined;
        sm?: "left" | "right" | "center" | "justify" | undefined;
        md?: "left" | "right" | "center" | "justify" | undefined;
        lg?: "left" | "right" | "center" | "justify" | undefined;
        xl?: "left" | "right" | "center" | "justify" | undefined;
        "2xl"?: "left" | "right" | "center" | "justify" | undefined;
        "3xl"?: "left" | "right" | "center" | "justify" | undefined;
    } | undefined;
    width?: "auto" | "full" | {
        xs?: "auto" | "full" | undefined;
        sm?: "auto" | "full" | undefined;
        md?: "auto" | "full" | undefined;
        lg?: "auto" | "full" | undefined;
        xl?: "auto" | "full" | undefined;
        "2xl"?: "auto" | "full" | undefined;
        "3xl"?: "auto" | "full" | undefined;
    } | undefined;
    margin?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    marginX?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    marginY?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    padding?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    paddingX?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
    paddingY?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | {
        xs?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        sm?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        md?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        lg?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        xl?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "2xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
        "3xl"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "auto" | "4xl" | "none" | "px" | "3xs" | "2xs" | undefined;
    } | undefined;
} & {
    fontWeight?: "normal" | "bold" | undefined;
    fontFamily?: "secondary" | "primary" | undefined;
}) => string) & {
    properties: Set<"alignItems" | "backgroundColor" | "boxShadow" | "color" | "display" | "flexDirection" | "flexWrap" | "fontFamily" | "fontSize" | "fontWeight" | "height" | "justifyContent" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxWidth" | "minHeight" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "rowGap" | "textAlign" | "width" | "gap" | "margin" | "padding" | "marginX" | "marginY" | "paddingX" | "paddingY">;
};
/**
 * Type that holds the possible values for the "sprinkles"-utility
 */
export type Sprinkles = Parameters<typeof sprinkles>[0];
export {};
