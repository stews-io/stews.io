import { CuratorConfig } from '@stews/data/CuratorConfig'

import { musicItems } from './musicItems'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'pl-archive',
    curatorLocation: 'worldwide official',
    curatorStatus: 'the time has come for bad things to end...',
    curatorEmail: 'pl-archive@stews.io',
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
      {
        linkType: 'email',
        linkHref: 'mailto:pl-archive@stews.io',
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
      segmentFilter: 'musicArtist:"Pretty Lights"',
      segmentViews: [
        {
          viewId: '62FF',
          viewLabel: 'soundship',
          viewFilter: 'musicTags:"soundship spacesystem"',
        },
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
      segmentFilter: 'musicArtist:"Michal Menert"',
      segmentViews: [
        {
          viewId: 'P41V',
          viewLabel: 'discography',
          viewFilter: 'musicTags:discography',
        },
      ],
    },
    {
      segmentDatasetId: 'music',
      segmentId: 'related',
      segmentLabel: 'related artist',
      segmentFilter:
        'musicArtist:"Break Science" OR musicArtist:"Paul Basic" OR musicArtist:"Eliot Lipp" OR musicArtist:"Paper Diamond" OR musicArtist:"Motifv" OR musicArtist:"Gramatik" OR musicArtist:"SuperVision" OR musicArtist:"Borahm Lee" OR musicArtist:"Chris Karns"',
      segmentViews: [
        {
          viewId: 'JQZ1',
          viewLabel: 'break science',
          viewFilter: 'musicArtist:"Break Science" OR musicArtist:"Borahm Lee"',
        },
        {
          viewId: '5HE5',
          viewLabel: 'karns',
          viewFilter: 'musicArtist:"Chris Karns"',
        },
        {
          viewId: '88G4',
          viewLabel: 'motifv',
          viewFilter: 'musicArtist:"Motifv"',
        },
        {
          viewId: '0L54',
          viewLabel: 'paul basic',
          viewFilter: 'musicArtist:"Paul Basic"',
        },
        {
          viewId: 'BVZ9',
          viewLabel: 'eliot lipp',
          viewFilter: 'musicArtist:"Eliot Lipp"',
        },
        {
          viewId: 'OQX7',
          viewLabel: 'supervision',
          viewFilter: 'musicArtist:"SuperVision"',
        },
      ],
    },
  ],
}
