import { globalFontFace } from "@vanilla-extract/css";
import { fontFaces } from "@properties/font-faces.property";
fontFaces.forEach((fontFace) => globalFontFace(fontFace.fontFamily, {
    src: `local('${fontFace.src}')`,
    fontWeight: fontFace.fontWeight,
    fontStyle: fontFace.fontStyle,
    fontDisplay: 'swap',
}));
