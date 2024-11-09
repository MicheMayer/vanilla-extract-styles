import { globalFontFace } from "@vanilla-extract/css"
import { fontFaces } from "@properties/font-faces.property"
import type { FontFace } from "@properties/font-faces.property"

fontFaces.forEach((fontFace: FontFace) => globalFontFace(fontFace.fontFamily, {
  src: `local('${fontFace.src}')`,
  fontWeight: fontFace.fontWeight,
  fontStyle: fontFace.fontStyle,
  fontDisplay: 'swap',
}))

export default fontFaces