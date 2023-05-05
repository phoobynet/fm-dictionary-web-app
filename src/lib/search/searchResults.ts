import { writable } from 'svelte/store'
import type { SearchResult } from '$lib/search/SearchResult'

export const searchResults = writable<SearchResult[]>([])
