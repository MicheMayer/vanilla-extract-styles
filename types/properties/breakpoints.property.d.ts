import type { SizeVariant } from '@properties/size-variant.property';
/** Names of all available breakpoints */
export declare const breakpointNames: readonly SizeVariant[];
/** Type that holds possible values for a breakpoint */
export type Breakpoint = SizeVariant;
/** Value map of all available breakpoints and their corresponding screen widths */
export declare const breakpoints: Record<Breakpoint, string>;
