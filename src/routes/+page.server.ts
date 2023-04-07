import type { PageServerLoad } from './$types'
import { freeDictionary } from '$lib/server/free-dictionary'

export const load: PageServerLoad = async ({
  url,
  fetch,
}) => {
  const q = url.searchParams.get('q')

  const searchResults = await freeDictionary.query(fetch, q || undefined)

  return {
    result: searchResults,
  }
}
