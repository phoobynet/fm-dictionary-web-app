import type { RequestHandler } from '@sveltejs/kit'
import { json, error } from '@sveltejs/kit'
import { freeDictionary } from '$lib/server/free-dictionary'
import { z } from 'zod'

const QuerySchema = z.object({
  q: z.string().nonempty('Search query cannot be empty'),
})

export const GET: RequestHandler = async ({ url }) => {
  try {
    const result = QuerySchema.parse(url.searchParams.get('q'))

    const searchResults = await freeDictionary.query(fetch, result.q)

    return json(searchResults)
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw error(400, {
        message: e.issues.map((issue) => issue.message).join(', '),
      })
    } else {
      throw error(500, {
        message: 'Something went wrong',
      })
    }
  }
}
