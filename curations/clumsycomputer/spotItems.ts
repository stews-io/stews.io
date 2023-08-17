import { SpotItem } from '@stews/domains/spot/data'

export const spotItems: Array<SpotItem> = [
  {
    itemId: 0,
    spotName: 'foo',
    spotLocation: 'big city, little town',
    spotTags: ['eatery'],
    externalLinks: [
      {
        linkLabel: 'google maps',
        linkHref: 'https://example.org',
      },
    ],
  },
]
