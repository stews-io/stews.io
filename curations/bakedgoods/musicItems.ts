import { MusicItem } from '@stews/domains/music/data'
import {
  getAppleLinkData,
  getSoundcloudLinkData,
  getSpotifyLinkData,
  getYoutubeLinkData,
} from '@stews/domains/music/helpers'

export const musicItems: Array<MusicItem> = [
  {
    itemId: 0,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41s5xA4r2UL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2017,
    musicTitle: 'Ethereal Moments',
    musicArtist: ['Dreamers Delight'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/dreamers-delight/sets/ethereal-moments',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/xxCD-Gwd_ro?list=PLnHAzl9A8DC3kJYD1Ie9KP9in2XM-jqOW&si=6EvwBf5J-Y0fbXzh',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/03Z0dRFbTCwSZvAYHvJj6M?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/ethereal-moments/1614964971',
      }),
    ],
  },
  {
    itemId: 1,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41cHu3PEjmL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2015,
    musicTitle: 'Convex',
    musicArtist: ['Nym'],
    recordingContext: ['studio'],
    musicTags: ['downtempo', 'electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/locirecords/sets/nym-convex-nest-hq-premier',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/T9KQZp3DNJI?list=OLAK5uy_n9V-d7nJYrp_qLWF2USkFtWT1mfmW5t_M&si=WiBh16TNecFnycg0',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5PdC3w96iVkyAEK4izJPvD?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/convex/1537443598',
      }),
    ],
  },
  {
    itemId: 2,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51v+Md+56IL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2016,
    musicTitle: 'Fantastic Voyage Pt. 1',
    musicArtist: ['Justin Jay'],
    recordingContext: ['studio'],
    musicTags: ['dance'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/justin-jay/sets/fantastic-voyage-part-1-black',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/37XwJqjRXDWsqjxblz6YbA?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/fantastic-voyage-pt-1-ep/1434873071',
      }),
    ],
  },
  {
    itemId: 3,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51by+6CUZ6L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Little by Little',
    musicArtist: ['Lane 8'],
    recordingContext: ['studio'],
    musicTags: ['dance'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/by8Cx3LheHc?list=OLAK5uy_lz5AIa6liq6f0sGDE0kaaQDIGC2Oaxabk&si=IR6dhFWxZpM7qzgJ',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4nv9KsGfQvZwIOuzDnbWY8?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/little-by-little/1495406432',
      }),
    ],
  },
]
