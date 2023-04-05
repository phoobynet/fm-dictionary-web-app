import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export type ThemeType = 'dark' | 'light'

export const theme = writable<ThemeType>(undefined, (set) => {
  const onChange = (e: MediaQueryListEvent) => {
    const themeType: ThemeType = e.matches
      ? 'dark'
      : 'light'

    theme.set(themeType)
  }

  if (browser) {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    media.addEventListener('change', onChange)

    if (media.matches) {
      set('dark')
    } else {
      set('light')
    }
  }

  return () => {
    if (browser) {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', onChange)
    }
  }
})

if (browser) {
  theme.subscribe((value) => {
    if (value === 'dark') {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  })
}
