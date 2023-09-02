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
  {
    itemId: 4,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51R1OMTsOeL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Neon Jungle',
    musicArtist: ['CloZee'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/clozee/sets/neon-jungle',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/B0C7W5QDo1A?list=OLAK5uy_m6HmTn43kRNmTgBRIw5m2VvfKiUSqdC50&si=wa-37XDkwxgvIoNb',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/63HO6iGZB9OZRpW9gMEIwg?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/neon-jungle/1683581375',
      }),
    ],
  },
  {
    itemId: 5,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41D2abak8LL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Actual Life 3',
    musicArtist: ['Fred again..'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/fredagain/sets/actual-life-3-january-1',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/jRVnYzlyCh4?list=PLlAz0EOC2qClB2rtTkuxrzxdG-Y2GI4AG&si=08yMWXvhgp_vR8F7',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5q2iMctlDvEMYVIawF6Vop?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/actual-life-3-january-1-september-9-2022/1640463893',
      }),
    ],
  },
  {
    itemId: 6,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61cwTi50cVL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Amniotic',
    musicArtist: ['Monolink'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/monolink/sets/monolink-amniotic-album-2018',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/q-z7bkisv7E?list=OLAK5uy_n2GQI4aC_0Ge_VzUToipYHOh9arqP2oho&si=-_krG3TnirX_b157',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3JdtES0NPLHDJZgCf3ZxUz?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/amniotic-deluxe-version/1493969293',
      }),
    ],
  },
  {
    itemId: 7,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41fZSy5x6BL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2012,
    musicTitle: 'shrines',
    musicArtist: ['Purity Ring'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/O9DmOxGmE9E?list=OLAK5uy_mQIAkzEeYLoYyNIHIOT0vx2RoJBwyLe6M&si=FdMy3xaudvhqUkhI',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/34qsY2V9hsXviGPlq5tvco?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/shrines/535907905',
      }),
    ],
  },
  {
    itemId: 8,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51SdfamIqXL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Kingdoms in Colour',
    musicArtist: ['Maribou State'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/mariboustate/sets/kingdoms-in-colour',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/oyX3EWdtbmA?list=OLAK5uy_nzhKUS--ZCqL3glx8sDnHBtqhiSAsPAi8&si=skXaZGZoZU9ZtBlp',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/70FGsJuLXPQHYdKmEZZFq9?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/kingdoms-in-colour/1385072561',
      }),
    ],
  },
  {
    itemId: 9,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51H9anLEewL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2021,
    musicTitle: 'Isles',
    musicArtist: ['BICEP'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/feelmybicep/sets/bicep-isles',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/oyX3EWdtbmA?list=OLAK5uy_nzhKUS--ZCqL3glx8sDnHBtqhiSAsPAi8&si=skXaZGZoZU9ZtBlp',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0EdtTRCl3J22AnWrNpH1w9?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/isles/1531704818',
      }),
    ],
  },
]
