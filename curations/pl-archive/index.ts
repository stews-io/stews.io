import { CuratorConfig } from '@stews/data/CuratorConfig'

import { musicItems } from './musicItems'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'pl-archive',
    curatorLocation: 'worldwide official',
    curatorStatus: 'the time has come for bad things to end...',
    curatorLinks: [
      {
        linkType: 'website',
        linkHref: 'http://prettylightsmusic.com',
      },
      {
        linkType: 'twitter',
        linkHref: 'https://twitter.com/prettylights',
      },
      {
        linkType: 'instagram',
        linkHref: 'https://www.instagram.com/prettylights/',
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
  },
  curationSegments: [
    {
      segmentDatasetId: 'music',
      segmentId: 'pretty',
      segmentLabel: 'pretty lights',
      segmentFilter: 'musicArtist:pretty lights',
      segmentViews: [
        {
          viewId: '67ZF',
          viewLabel: 'discography',
          viewFilter: 'musicTags:discography',
        },
        {
          viewId: 'C0L7',
          viewLabel: 'unreleased',
          viewFilter: 'musicTags:unreleased',
        },
        {
          viewId: 'YVFB',
          viewLabel: 'shows',
          viewFilter: 'recordingContext:concert AND sourceType:mix',
        },
        {
          viewId: 'UXA3',
          viewLabel: 'flips',
          viewFilter: 'musicTags:flips',
        },
        {
          viewId: '9TSA',
          viewLabel: 'oh gee',
          viewFilter: 'musicTags:o.g.',
        },
      ],
    },
    {
      segmentDatasetId: 'music',
      segmentId: 'menert',
      segmentLabel: 'michal menert',
      segmentFilter: 'musicArtist:michal menert',
      segmentViews: [
        {
          viewId: 'P41V',
          viewLabel: 'discography',
          viewFilter: 'musicTags:discography',
        },
      ],
    },
  ],
}
