import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import { ThemeType } from '$lib/theme/ThemeType'
import { AppConfig } from '$lib/config/AppConfig'

export const theme = writable<ThemeType>(undefined, (set) => {
  const onChange = (e: MediaQueryListEvent) => {
    const themeType: ThemeType = e.matches
      ? ThemeType.dark
      : ThemeType.light

    theme.set(themeType)
    AppConfig.getInstance().themeType = themeType
  }

  if (browser) {
    const themeType = AppConfig.getInstance().themeType

    set(themeType)

    const media = window.matchMedia(`(prefers-color-scheme: ${ThemeType.dark})`)
    media.addEventListener('change', onChange)
  }

  return () => {
    if (browser) {
      window.matchMedia(`(prefers-color-scheme: ${ThemeType.dark})`).removeEventListener('change', onChange)
    }
  }
})

if (browser) {
  theme.subscribe((value) => {
    const { classList } = document.body
    const addTheme = value === ThemeType.dark ? ThemeType.dark : ThemeType.light
    const removeTheme = value === ThemeType.dark ? ThemeType.light : ThemeType.dark
    classList.add(addTheme)
    classList.remove(removeTheme)
    AppConfig.getInstance().themeType = addTheme
  })
}
