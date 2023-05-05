import { derived, writable } from 'svelte/store'
import { browser } from '$app/environment'
import type { FontFamily } from '$lib/font/FontFamily'
import { toPrettyFontFamilyName } from '$lib/font/toPrettyFontFamilyName'

const FONT_FAMILY_ATTR = 'data-font-family'
export const fontFamily = writable<FontFamily>()

fontFamily.subscribe(value => {
  // Sets the font family on the body element, and updates the local storage value
  if (browser) {
    const attr = document.body.attributes.getNamedItem(FONT_FAMILY_ATTR) ?? document.createAttribute(FONT_FAMILY_ATTR)
    attr.value = value

    document.body.attributes.setNamedItem(attr)

    // Lazy import to avoid issues with accessing lexical declaration
    // I can't figure out why this would be an issue
    import('$lib/config/AppConfig').then(({ AppConfig }) => {
      if (AppConfig.getInstance()) {
        AppConfig.getInstance().fontFamily = value
      }
    })
  }
})

// Prettifies the font family name for display in the UI
export const fontFamilyPrettyName = derived(fontFamily, $fontFamily => toPrettyFontFamilyName($fontFamily))
