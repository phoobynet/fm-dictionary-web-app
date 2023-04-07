import type { SearchResult } from '$lib/types/SearchResult'
import { browser } from '$app/environment'

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

// TODO: fetch type hack

export const freeDictionary = {
  query: async (
    fetch: (input: (URL | RequestInfo), init?: (RequestInit | undefined)) => Promise<Response>,
    query?: string,
  ): Promise<SearchResult[]> => {
    if (browser) {
      console.error('Should not be called in browser')
      return []
    }

    if (!query || query.trim().length < 2) {
      return []
    }

    const freeDictionaryUrl = `${BASE_URL}${query}`

    const response = await fetch(freeDictionaryUrl)

    if (response.ok) {
      return await response.json()
    }

    console.error(`Error: ${response.status}: ${response.statusText}`)
    return []
  },
}
