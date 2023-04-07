export const pushQuery = (query: string): void => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set('q', query)

  window.history.pushState({
    path: `${window.location.host}/`,
  }, '', `/?${searchParams.toString()}`)
}
