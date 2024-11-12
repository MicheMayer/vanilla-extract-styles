import { globalFontFace } from "@vanilla-extract/css";
export const customFontFaces = (fontFaces) => fontFaces.forEach((fontFace) => globalFontFace(fontFace.fontFamily, {
    src: `local('${fontFace.src}')`,
    fontWeight: fontFace.fontWeight,
    fontStyle: fontFace.fontStyle,
    fontDisplay: 'swap',
}));
