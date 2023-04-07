export const getQuery = (): string => {
  const searchParams = new URLSearchParams(window.location.search)

  return searchParams.get('q') || ''
}
