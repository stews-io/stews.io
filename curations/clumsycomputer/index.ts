import { CuratorConfig } from '@stews/data/CuratorConfig'
import { musicItems } from './musicItems'
import { spotItems } from './spotItems'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'clumsycomputer',
    curatorLocation: 'colorful colorado',
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
  curationDatasets: {
    music: {
      datasetItems: musicItems,
      datasetId: 'music',
      datasetType: 'music',
      datasetSortConfig: [
        {
          fieldKey: 'musicTitle',
          fieldType: 'string',
          sortLabelBase: 'title',
        },
        {
          fieldKey: 'musicArtist',
          fieldType: 'orderedStringSet',
          sortLabelBase: 'artist',
        },
        {
          fieldKey: 'musicYear',
          fieldType: 'number',
          sortLabelBase: 'year',
        },
      ],
    },
    spots: {
      datasetItems: spotItems,
      datasetId: 'spots',
      datasetType: 'spot',
      datasetSortConfig: [
        {
          fieldKey: 'spotName',
          fieldType: 'string',
          sortLabelBase: 'name',
        },
        {
          fieldKey: 'spotLocation',
          fieldType: 'orderedStringSet',
          sortLabelBase: 'location',
        },
      ],
    },
  },
  curationSegments: [
    {
      segmentFilter: null,
      segmentId: 'music',
      segmentDatasetId: 'music',
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
    },
    {
      segmentFilter: null,
      segmentId: 'spots',
      segmentDatasetId: 'spots',
      segmentLabel: 'spots',
      segmentViews: [
        {
          viewId: '6U8S',
          viewLabel: 'fort collins',
          viewFilter: 'spotLocation:fort collins',
        },
        {
          viewId: 'UUCS',
          viewLabel: 'mexico',
          viewFilter: 'spotLocation:mexico',
        },
        {
          viewId: 'PT4M',
          viewLabel: 'breweries',
          viewFilter: 'spotTags:brewery',
        },
        {
          viewId: '7Y17',
          viewLabel: 'music venues',
          viewFilter: 'spotTags:music venue',
        },
      ],
    },
  ],
}
