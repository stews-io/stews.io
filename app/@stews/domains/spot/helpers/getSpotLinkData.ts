export interface GetWebsiteLinkDataApi {
  websiteHref: string
}

export function getWebsiteLinkData(api: GetWebsiteLinkDataApi) {
  const { websiteHref } = api
  return {
    linkLabel: 'website',
    linkHref: websiteHref,
  }
}

export interface GetGoogleLinkDataApi {
  googleSearchQuery: string
}

export function getGoogleLinkData(api: GetGoogleLinkDataApi) {
  const { googleSearchQuery } = api
  return {
    linkLabel: 'google',
    linkHref: `https://www.google.com/search?q=${googleSearchQuery
      .trim()
      .toLowerCase()
      .split('')
      .map(
        (someQueryChar) =>
          GOOGLE_QUERY_CHARACTER_ENCODING[someQueryChar] ?? someQueryChar
      )
      .join('')
      .replaceAll(/\s/g, '+')}`,
  }
}

const GOOGLE_QUERY_CHARACTER_ENCODING: Record<string, string> = {
  $: '%24',
  '-': '%2D',
  _: '%5F',
  '.': '%2E',
  '+': '%2B',
  '!': '%21',
  '*': '%2A',
  '"': '%22',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  ';': '%3B',
  '/': '%2F',
  '?': '%3F',
  ':': '%3A',
  '@': '%40',
  '=': '%3D',
  '&': '%26',
  '|': '%7C',
}
