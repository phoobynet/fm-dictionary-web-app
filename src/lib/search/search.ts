import { browser } from '$app/environment'
import { searchResults } from './searchResults'
import { searchError } from './searchError'
import { searching } from './searching'

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
