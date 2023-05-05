import { FontFamily } from '$lib/font'
import { ThemeType, isDarkTheme } from '$lib/theme'

let appConfig: AppConfig | undefined

export class AppConfig {
  private static APP_NAME = 'fm-dictionary-web-app'
  private static FONT_FAMILY_KEY = `${AppConfig.APP_NAME}:fontFamily`
  private static SCHEME_KEY = `${AppConfig.APP_NAME}:scheme`

  private constructor() {
  }

  public get themeType(): ThemeType {
    const storedScheme = window.localStorage.getItem(AppConfig.SCHEME_KEY)

    if (storedScheme) {
      return storedScheme as ThemeType
    }

    return isDarkTheme() ? ThemeType.dark : ThemeType.light
  }

  public set themeType(value: ThemeType) {
    window.localStorage.setItem(AppConfig.SCHEME_KEY, value)
  }

  public get fontFamily(): FontFamily {
    const storedFontFamily = window.localStorage.getItem(AppConfig.FONT_FAMILY_KEY)

    if (storedFontFamily) {
      switch (storedFontFamily) {
        case 'serif':
          return FontFamily.Serif
        case 'sans-serif':
          return FontFamily.SansSerif
        case 'mono':
          return FontFamily.Mono
      }
    }

    return FontFamily.SansSerif
  }

  public set fontFamily(value: FontFamily) {
    if (!value) {
      return
    }

    window.localStorage.setItem(AppConfig.FONT_FAMILY_KEY, value)
  }

  public static getInstance(): AppConfig {
    if (!appConfig) {
      appConfig = new AppConfig()
    }

    return appConfig
  }
}
