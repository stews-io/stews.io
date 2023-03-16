import {
  ConsumerCurationPage,
  CuratorCurationPage,
} from '@stews/components/CurationPage'
import { CurationView, CuratorInfo } from '@stews/data'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import { MusicItemDisplay } from './components/MusicItemDisplay'
import { MusicItem } from './data/MusicItem'
import {
  getAppleLinkData,
  getSpotifyLinkData,
  getYoutubeLinkData,
} from './helpers/getMusicLinkData'

export interface MusicCurationPageProps {}

export function MusicCurationPage(props: MusicCurationPageProps) {
  const {} = props
  const curatorInfo: CuratorInfo = {
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
  }
  const musicViews: ArrayOfAtLeastOne<CurationView> = [
    {
      viewId: 0,
      viewLabel: 'all',
      viewType: 'default',
    },
    {
      viewId: 1,
      viewLabel: '2010s',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'musicYear:[2010 TO 2019]',
    },
    {
      viewId: 2,
      viewLabel: '2000s',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'musicYear:[2000 TO 2009]',
    },
    {
      viewId: 3,
      viewLabel: '1990s',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'musicYear:[1990 TO 1999]',
    },
    {
      viewId: 4,
      viewLabel: 'hip-hop',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'musicStyles:hip-hop',
    },
    {
      viewId: 5,
      viewLabel: 'jazz',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'musicStyles:jazz',
    },
    {
      viewId: 6,
      viewLabel: 'electronic',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'musicStyles:electronic',
    },
    {
      viewId: 7,
      viewLabel: 'in the now',
      viewType: 'custom',
      customType: 'filter',
      viewFilter: 'recordingContext:live OR recordingContext:concert',
    },
  ]
  const curationItems: Array<MusicItem> = [
    {
      musicId: 0,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41lpwGEQvoL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'IC-01 Hanoi',
      musicArtist: ['Unknown Mortal Orchestra'],
      recordingContext: ['studio'],
      musicStyles: ['experimental', 'jazz', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_nCjQf37f4TiIDL2budDY-NCgch1gRrPH0&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1gmj1UwTm2mT6DoS8H4jke?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/ic-01-hanoi/1434607269',
        }),
      ],
    },
    {
      musicId: 1,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61XiJrQYpuL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1997,
      musicTitle: 'Premiers Symptômes',
      musicArtist: ['Air'],
      recordingContext: ['studio'],
      musicStyles: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=tl7dASVOY-U&list=OLAK5uy_ly5-qc6sTJFqfArTGCB9HoBaRZFWWpLMM&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3g9O7pvuaaFRvdzsoSJXVc?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/premiers-sympt%C3%B4mes-ep/966652812',
        }),
      ],
    },
    {
      musicId: 2,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51ZKa067uhL._UX500_FMwebp_QL85_.jpg',
      musicTitle: 'Live Vol. 1',
      musicYear: 2020,
      musicArtist: ['Parcels'],
      recordingContext: ['live'],
      musicStyles: ['disco', 'funk', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_lLJK7Z5OSt6XzI7rcgDmeIWpqervk2ycE&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4ckyPfMqe26PrOgEWdjWns?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/live-vol-1/1506250361',
        }),
      ],
    },
    {
      musicId: 3,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'compilation',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41WZvHEcbuL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2006,
      musicTitle: "The Best Of What's Around Vol. 01",
      musicArtist: ['Dave Matthews Band'],
      recordingContext: ['studio', 'concert'],
      musicStyles: ['jam', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=wILVn4QrNxU&list=OLAK5uy_mnKHdXzQnlF54alv4i-UTCtpxLc-ujwfo&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1kae5MA0gbXveSdJDYtFHo?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-best-of-whats-around-vol-1/311604755',
        }),
      ],
    },
    {
      musicId: 4,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51qCkOpjBYL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Blank Face LP',
      musicArtist: ['ScHoolboy Q'],
      recordingContext: ['studio'],
      musicStyles: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_nn39BWFdkmInyIa8zuRv16th53bELbtBQ&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0YbpATCIng8Fz2JrfHmEf7?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/blank-face-lp/1440870906',
        }),
      ],
    },
    {
      musicId: 5,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61LlZokVjxL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2004,
      musicTitle: "Pickin' on Modest Mouse: A Bluegrass Tribute",
      musicArtist: ['Iron Horse', 'Modest Mouse'],
      recordingContext: ['studio'],
      musicStyles: ['bluegrass'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_lR47WSacINRlobDIqT57PVHE-Hp5FKizg&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3hewWfO0hKXbAFfcsmpYk5?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/pickin-on-modest-mouse/983448014',
        }),
      ],
    },
    {
      musicId: 6,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61yiLjG7QQL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: 'Trouble',
      musicArtist: ['Totally Extinct Enormous Dinosaurs'],
      recordingContext: ['studio'],
      musicStyles: ['electronic', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_n9kdQogDwJvVlB5KLTebiUjyPQ5TXKxGQ&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1srFzlchwSOzxO8n99tJxP?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/trouble/1442636211',
        }),
      ],
    },
    {
      musicId: 7,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51OoNPSy4IL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'Room 41',
      musicArtist: ['Paul Cauthen'],
      recordingContext: ['studio'],
      musicStyles: ['country', 'rock', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_liodoEz6-VjfyY_RJpJgLW2IMA2Eo-nGc&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4ABV7fsu8iN6eAmnQhvd0a?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/room-41/1466095577',
        }),
      ],
    },
    {
      musicId: 8,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41wnneBCjFL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'Organ Recital',
      musicArtist: ['Bastien Keb'],
      recordingContext: ['studio'],
      musicStyles: ['r&b', 'folk', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_mZIP4yLMAoq7d2wa8NojzttHzBPuV3PY0&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2CmRxlrIhDSmpM3STHxB5A?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/organ-recital/1626095915',
        }),
      ],
    },
    {
      musicId: 9,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61UpX7MWpML._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Filling Up the City Skies - Disc 1',
      musicArtist: ['Pretty Lights'],
      recordingContext: ['studio'],
      musicStyles: ['downtempo', 'hip-hop', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/playlist?list=OLAK5uy_mQuwlK3nAsIdmW9FCAZe-VHy94NRlzt34&playnext=1&index=1',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/48DZzoUru3KKjcgZD6ZjTg?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/filling-up-the-city-skies-vol-1/301057252',
        }),
      ],
    },
    {
      musicId: 10,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://preview.redd.it/t55x4lyak2y51.jpg?auto=webp&s=6cffa2dd89b7bb9f41a7abe3979ab41f93313c72',
      musicYear: 2012,
      musicTitle: 'Bon Iver at AIR studios',
      musicArtist: ['Bon Iver', 'Sean Carey'],
      recordingContext: ['live'],
      musicStyles: ['folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://www.youtube.com/watch?v=A9Tp5fl18Ho',
        }),
      ],
    },
  ]
  // return (
  //   <CuratorCurationPage
  //     CurationItemDisplay={MusicItemDisplay}
  //     viewSortConfig={[
  //       {
  //         fieldKey: 'musicTitle',
  //         fieldType: 'string',
  //         sortLabelBase: 'title',
  //       },
  //       {
  //         fieldKey: 'musicArtist',
  //         fieldType: 'string',
  //         sortLabelBase: 'artist',
  //       },
  //       {
  //         fieldKey: 'musicYear',
  //         fieldType: 'number',
  //         sortLabelBase: 'year',
  //       },
  //     ]}
  //     curatorInfo={curatorInfo}
  //     curationViews={musicViews}
  //     curationItems={curationItems}
  //   />
  // )
  return (
    <ConsumerCurationPage
      ItemDisplay={MusicItemDisplay}
      getItemSearchSpace={(someMusicItem) =>
        `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
          ','
        )},${someMusicItem.musicStyles.join(',')},${
          someMusicItem.musicYear
        },${`${someMusicItem.recordingContext.join('/')} ${
          someMusicItem.sourceType === 'collection'
            ? someMusicItem.collectionType
            : someMusicItem.sourceType
        }${someMusicItem.musicType === 'clip' ? ' clip' : ''}`}`
      }
      viewSortConfig={[
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
      ]}
      curatorInfo={curatorInfo}
      curationViews={musicViews}
      curationItems={curationItems}
    />
  )
}
