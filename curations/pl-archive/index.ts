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
      datasetKey: 'music',
      datasetType: 'music',
      datasetItems: musicItems,
    },
  },
  curationSegments: [
    {
      segmentDataset: 'music',
      segmentKey: 'pretty',
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
      segmentDataset: 'music',
      segmentKey: 'menert',
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
