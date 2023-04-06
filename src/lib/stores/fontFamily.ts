import { derived, writable } from 'svelte/store'
import { browser } from '$app/environment'

export enum FontFamily {
  Serif = 'serif',
  SansSerif = 'sans-serif',
  Mono = 'mono',
}

export const fontFamily = writable<FontFamily>(FontFamily.SansSerif, (set) => {
  if (browser) {
    // TODO: Add code to read from localStorage
    set(FontFamily.SansSerif)
  }
})

fontFamily.subscribe(value => {
  if (browser) {
    let attr = document.body.attributes.getNamedItem('data-font-family')

    if (!attr) {
      attr = document.createAttribute('data-font-family')
    }

    switch (value) {
      case FontFamily.Serif:
        attr.value = 'serif'
        break
      case FontFamily.SansSerif:
        attr.value = 'sans-serif'
        break
      case FontFamily.Mono:
        attr.value = 'mono'
        break
    }

    document.body.attributes.setNamedItem(attr)
  }
})

export const toPrettyName = (fontFamily: FontFamily) => {
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

export const fontFamilyPrettyName = derived(fontFamily, $fontFamily => toPrettyName($fontFamily))
