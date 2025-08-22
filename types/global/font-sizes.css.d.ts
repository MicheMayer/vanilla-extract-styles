import type { StyleRule } from '@vanilla-extract/css';
import type { Breakpoint } from '@properties/breakpoints.property';
type CSSProps = Omit<StyleRule, '@media' | '@supports'>;
type ResponsiveStyle = Partial<Record<Breakpoint, CSSProps>>;
/**
 * Helper to generate responsive styles to be used within vanilla-extracts
 * style()-function. Use only, when styles can't be responsively generated
 * with the atoms()-utility.
 *
 * @param styles Object containing styles for specific breakpoint
 * @returns Style rule to be passed to vanilla-extracts style()-function
 */
export declare const responsiveStyle: (styles: ResponsiveStyle) => StyleRule;
export {};
