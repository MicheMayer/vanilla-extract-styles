export type FontFace = {
    fontFamily: FontFamily;
    src: string;
    fontWeight: string;
    fontStyle: string;
    preload?: boolean;
};
export type FontFamily = 'Bookman Old Style' | 'Harlow Solid';
/**
 * Object with all available font-faces and their metadata
 */
export declare const fontFaces: FontFace[];
