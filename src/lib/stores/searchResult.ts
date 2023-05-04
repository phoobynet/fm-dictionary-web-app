import type { SearchResult } from '$lib/types/SearchResult'
import { derived, writable } from 'svelte/store'
import { first } from 'lodash-es'
import { browser } from '$app/environment'

export const searchQuery = writable<string>('')

export const searchError = writable<boolean>(false)

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

export const searching = writable<boolean>(false)

export const search = async (query: string = ''): Promise<boolean> => {
  if (!browser) {
    return false
  }

  let result = false

  query = query.trim() ?? ''

  if (query.length === 0) {
    searchResults.set([])
    searchError.set(true)
  } else {
    searchError.set(false)
  }

  if (query.length < 2) {
    return result
  }

  searching.set(true)

  const response = await fetch(`/api/search?q=${query}`)

  if (response.ok) {
    const data = await response.json()
    searchResults.set(data)
    result = true
  } else {
    searchResults.set([])
    console.error(response.statusText)
    result = false
  }

  searching.set(false)

  return result
}
