import type { RequestHandler } from '@sveltejs/kit'
import { json, error } from '@sveltejs/kit'
import { freeDictionary } from '$lib/server/free-dictionary'

export const GET: RequestHandler = async ({ url }) => {
  const q = url.searchParams.get('q')

  if (!q) {
    throw error(400, {
      message: 'Missing search query',
    })
  }

  try {
    const searchResults = await freeDictionary.query(fetch, q)

    return json(searchResults)
  } catch (e) {
    throw error(500, {
      message: 'Something went wrong',
    })
  }
}
