import { globalFontFace } from "@vanilla-extract/css"
import type { FontFace } from "@properties/font-faces.property"

export const customFontFaces = (fontFaces: FontFace[]) =>
  fontFaces.forEach((fontFace: FontFace) => globalFontFace(fontFace.fontFamily, {
    src: `local('${fontFace.src}')`,
    fontWeight: fontFace.fontWeight,
    fontStyle: fontFace.fontStyle,
    fontDisplay: 'swap',
  }))