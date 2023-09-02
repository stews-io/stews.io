import { CuratorConfig } from '@stews/data/CuratorConfig'
import { musicItems } from './musicItems'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'bakedgoods',
    curatorLocation: 'sandy eggo',
    curatorStatus: 'weekend warrior craving carbs',
    curatorEmail: 'curations@stews.io',
    curatorLinks: [],
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
  },
  curationSegments: [
    {
      segmentDatasetId: 'music',
      segmentId: 'music',
      segmentLabel: 'music',
      segmentFilter: null,
      segmentViews: [
        {
          viewId: 'IIW8',
          viewLabel: 'albums',
          viewFilter: 'collectionType:album OR collectionType:ep',
        },
        {
          viewId: '04KN',
          viewLabel: 'in the mix',
          viewFilter: 'sourceType:mix and recordingContext:studio',
        },
      ],
    },
  ],
}
