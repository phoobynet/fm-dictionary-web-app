import { FontFamily } from '$lib/font/FontFamily'

export const toPrettyFontFamilyName = (fontFamily: FontFamily) => {
  switch (fontFamily) {
    case FontFamily.SansSerif:
      return 'Sans Serif'
    case FontFamily.Serif:
      return 'Serif'
    case FontFamily.Mono:
      return 'Mono'
    default:
      return 'Sans Serif'
  }
}
