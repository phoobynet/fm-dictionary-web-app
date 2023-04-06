import type { SearchResult } from '$lib/types/SearchResult'
import { derived, writable } from 'svelte/store'
import { first } from 'lodash-es'

export const searchResults = writable<SearchResult[]>([])

export const searchResult = derived(searchResults, $searchResult => {
  return first($searchResult)
})

export const audioUrl = derived(searchResult, $searchResult => {
  let audioUrl = ''

  if ($searchResult) {
    audioUrl = $searchResult.phonetics.find(x => !!x.audio)?.audio || ''
  }

  return audioUrl
})

export const search = async (query: string = ''): Promise<void> => {
  if (query.trim().length < 2) {
    return
  }

  const response = await fetch(`/api/search?q=${query}`)

  if (response.ok) {
    const data = await response.json()
    searchResults.set(data)
  } else {
    searchResults.set([])
    console.error(response.statusText)
  }
}
