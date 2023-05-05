import { derived, writable } from 'svelte/store'
import { browser } from '$app/environment'
import { FontFamily, toPrettyFontFamilyName } from '$lib/types/FontFamily'
import { AppConfig } from '$lib/config/AppConfig'

const FONT_FAMILY_ATTR = 'data-font-family'
export const fontFamily = writable<FontFamily>()

fontFamily.subscribe(value => {
  // Sets the font family on the body element, and updates the local storage value
  if (browser) {
    const attr = document.body.attributes.getNamedItem(FONT_FAMILY_ATTR) ?? document.createAttribute(FONT_FAMILY_ATTR)
    attr.value = value

    document.body.attributes.setNamedItem(attr)
    AppConfig.getInstance().fontFamily = value
  }
})

// Prettifies the font family name for display in the UI
export const fontFamilyPrettyName = derived(fontFamily, $fontFamily => toPrettyFontFamilyName($fontFamily))
