import type { RequestHandler } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const GET: RequestHandler = async ({ url }) => {
  const q = url.searchParams.get('q')
  if (!q) {
    return json(undefined, {
      status: 400,
    })
  }

  const freeDictionaryUrl = `${BASE_URL}${q}`

  const response = await fetch(freeDictionaryUrl)

  if (response.ok) {
    const data = await response.json()
    return json(data)
  } else {
    return json(undefined, {
      status: response.status,
      statusText: response.statusText,
    })
  }
}
