export enum FontFamily {
  Serif = 'serif',
  SansSerif = 'sans-serif',
  Mono = 'mono',
}

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
