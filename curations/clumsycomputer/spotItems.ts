import { SpotItem } from '@stews/domains/spot/data'

export const spotItems: Array<SpotItem> = [
  {
    itemId: 0,
    spotName: 'bean cycle roasters',
    spotLocation: 'fort collins, colorado',
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      {
        linkLabel: 'google maps',
        linkHref: 'https://example.org',
      },
    ],
  },
  {
    itemId: 1,
    spotName: 'trailhead tavern',
    spotLocation: 'fort collins, colorado',
    spotTags: ['bar'],
    spotLinks: [
      {
        linkLabel: 'google maps',
        linkHref: 'https://example.org',
      },
    ],
  },
  {
    itemId: 2,
    spotName: 'town pump',
    spotLocation: 'fort collins, colorado',
    spotTags: ['bar'],
    spotLinks: [
      {
        linkLabel: 'google maps',
        linkHref: 'https://example.org',
      },
    ],
  },
]
