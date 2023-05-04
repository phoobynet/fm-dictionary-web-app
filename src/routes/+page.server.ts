import type { PageServerLoad } from './$types'
import { freeDictionary } from '$lib/server/free-dictionary'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async (request) => {
  const { url } = request

  const q = url.searchParams.get('q')

  try {
    const result = await freeDictionary.query(fetch, q || undefined)
    return {
      result,
    }
  } catch (e) {
    console.error(e)
    throw error(500, {
      message: 'Something went wrong'
    })
  }
}
