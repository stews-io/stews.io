import { CuratorConfig } from '@stews/data/CuratorConfig'
import { musicItems } from './musicItems'
import { spotItems } from './spotItems'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'clumsycomputer',
    curatorLocation: 'guadalajara, jalisco',
    curatorStatus: 'just trying to listen and groove',
    curatorLinks: [
      {
        linkType: 'website',
        linkHref: 'https://clumsycomputer.com',
      },
      {
        linkType: 'github',
        linkHref: 'https://github.com/clumsycomputer',
      },
      {
        linkType: 'twitter',
        linkHref: 'https://twitter.com/c1umsyc0mputer',
      },
    ],
  },
  curationSegments: [
    {
      segmentType: 'music',
      segmentLabel: 'music',
      segmentViews: [
        {
          viewId: 'XUZ8',
          viewLabel: '1990s',
          viewFilter: 'musicYear:[1990 TO 1999]',
        },
        {
          viewId: 'COSZ',
          viewLabel: '2000s',
          viewFilter: 'musicYear:[2000 TO 2009]',
        },
        {
          viewId: 'TE06',
          viewLabel: '2010s',
          viewFilter: 'musicYear:[2010 TO 2019]',
        },
        {
          viewId: '22T8',
          viewLabel: '2020s',
          viewFilter: 'musicYear:[2020 TO 2029]',
        },
        {
          viewId: 'N4RQ',
          viewLabel: 'electronic',
          viewFilter: 'musicTags:electronic',
        },
        {
          viewId: 'Z014',
          viewLabel: 'hip-hop',
          viewFilter: 'musicTags:hip-hop',
        },
        {
          viewId: '0BA4',
          viewLabel: 'jazz',
          viewFilter: 'musicTags:jazz',
        },
        {
          viewId: '0I1O',
          viewLabel: 'rock',
          viewFilter: 'musicTags:rock',
        },
        {
          viewId: '75II',
          viewLabel: 'in the now',
          viewFilter: 'recordingContext:live OR recordingContext:concert',
        },
      ],
      segmentItems: musicItems,
    },
    {
      segmentType: 'spot',
      segmentLabel: 'spots',
      segmentViews: [
        {
          viewId: 'G3BC',
          viewLabel: 'eateries',
          viewFilter: 'mugsTags:eatery',
        },
      ],
      segmentItems: spotItems,
    },
  ],
}
