import { derived } from 'svelte/store'
import { searchResult } from './searchResult'

export const audioUrl = derived(searchResult, $searchResult => {
  let audioUrl = ''

  if ($searchResult) {
    audioUrl = $searchResult.phonetics.find(x => !!x.audio)?.audio || ''
  }

  return audioUrl
})
