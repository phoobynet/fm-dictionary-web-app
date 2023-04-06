export interface SearchResultLicense {
  name: string
  url: string
}

export interface SearchResultPhonetic {
  text: string
  audio: string
  sourceUrl?: string
  license?: SearchResultLicense
}

export interface SearchResultDefinition {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

export interface SearchResultMeaning {
  partOfSpeech: string
  definitions: SearchResultDefinition[]
  synonyms: string[]
  antonyms: string[]
}

export interface SearchResult {
  word: string
  phonetic: string
  phonetics: SearchResultPhonetic[],
  meanings: SearchResultMeaning[],
  sourceUrls: string[]
  license: SearchResultLicense
}

