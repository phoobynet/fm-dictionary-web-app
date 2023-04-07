import type { RequestHandler } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'
import { freeDictionary } from '$lib/server/free-dictionary'

export const GET: RequestHandler = async ({ url }) => {
  const q = url.searchParams.get('q')
  if (!q) {
    return json(undefined, {
      status: 400,
    })
  }
  const searchResults = await freeDictionary.query(fetch, q)
  return json(searchResults)
}
