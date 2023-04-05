import { writable } from 'svelte/store'
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
    switch (value) {
      case FontFamily.Serif:
        document.body.style.fontFamily = 'serif'
        break
      case FontFamily.SansSerif:
        document.body.style.fontFamily = 'sans-serif'
        break
      case FontFamily.Mono:
        document.body.style.fontFamily = 'monospace'
        break
    }
  }
})
