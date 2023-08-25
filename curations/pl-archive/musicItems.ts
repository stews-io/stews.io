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
      'https://m.media-amazon.com/images/I/61Kz-w+3qJL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2006,
    musicTitle: 'Taking Up Your Precious Time',
    musicArtist: ['Pretty Lights', 'Derek Vincent Smith', 'Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography', 'o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=EAhMAn9O2tA&list=OLAK5uy_k_J7JWLyTRZCDtjqnThPb7pBb5AKvFwfE&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5E5U9ckjlBvJ3qkNAAqESY?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/taking-up-your-precious-time/294600592',
      }),
    ],
  },
  {
    itemId: 1,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61UpX7MWpML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2008,
    musicTitle: 'Filling Up the City Skies [Disc 1]',
    musicArtist: ['Pretty Lights', 'Derek Vincent Smith'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=CFe-LdCgy_4&list=OLAK5uy_mQuwlK3nAsIdmW9FCAZe-VHy94NRlzt34&pp=8AUB',
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
    itemId: 2,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61UpX7MWpML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2008,
    musicTitle: 'Filling Up the City Skies [Disc 2]',
    musicArtist: ['Pretty Lights', 'Derek Vincent Smith'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=_lNWO4ImyxI&list=PL73E43D96EC1D09B6&pp=iAQB8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0IiPSY2KKMKpBApop7KuYH?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/filling-up-the-city-skies-vol-2/384175787',
      }),
    ],
  },
  {
    itemId: 3,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/516gkU2HIyL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2009,
    musicTitle: 'Passing by Behind Your Eyes',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=acxR76dpTE0&list=OLAK5uy_lhXjGLOmkZ5Iv0Wz21yXITvAfowaJBrto&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5ZNtxgQFNDTH8LMFgPYO9G?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/passing-by-behind-your-eyes/338593160',
      }),
    ],
  },
  {
    itemId: 4,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51dCgAuvHlL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Making Up a Changing Mind',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=uN9xrkguKZU&list=OLAK5uy_knsQGrKPCOWJ93jXbpnmOyvQNGjJ1t4yQ&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1YwnzOoFiexSqIOTCRPWOG?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/making-up-a-changing-mind/360397469',
      }),
    ],
  },
  {
    itemId: 5,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/518VtNFxwNL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Spilling over Every Side',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=VaqcwgI-G0E&list=OLAK5uy_leOXJGriB9el9VV6RGYkjk_i9zykJR0Yg&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2eVhDmqxQ9nzSs34hhXBFR?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/spilling-over-every-side/391834663',
      }),
    ],
  },
  {
    itemId: 6,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51HD2i7+IML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Glowing in the Darkest Night',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=IwPsF5hTIgA&list=OLAK5uy_mYWRAG-Gz_vnac0iAfJ8gZYGB9mzg-Pe8&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3lawFLkGWS6AfkpRcbc7oI?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/glowing-in-the-darkest-night/401321594',
      }),
    ],
  },
  {
    itemId: 7,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61zZUfB56kL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2013,
    musicTitle: 'A Color Map of the Sun',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=4a1_GVRtme0&list=OLAK5uy_l-TlfPnLP7_TQt9kDS58MQ1uvXYgyQdNs&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0okq27WOMbdHpDiyCWhnZC?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/a-color-map-of-the-sun-deluxe-version/658111358',
      }),
    ],
  },
  {
    itemId: 8,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51aY3r5ByUL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2014,
    musicTitle: 'The Hidden Shades',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=JkRnhOej9u4&list=OLAK5uy_mpXywwiYxPVzwsiPE9iYQPuyT6xIp4Zv0&pp=8AUB',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3epEu0CFx0xqGoI881sNB8?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/the-hidden-shades/850881384',
      }),
    ],
  },
  {
    itemId: 9,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Io0uxkrHL._UX716_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'I Know the Truth',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/8wCgxkQj_Qo',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/4SMciQoW2tOVieBAg6U2Qj?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/i-know-the-truth/465221211?i=465221242',
      }),
    ],
  },
  {
    itemId: 10,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51XrVBhqwwL._UX716_FMwebp_QL85_.jpg',
    musicYear: 2012,
    musicTitle: 'You Get High',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/uv3Sj3Qdhx8',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3Dhwr3x6uuwLet1B3fJ7fK?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/you-get-high/529535004?i=529535103',
      }),
    ],
  },
  {
    itemId: 11,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51nLk1KQ1YL._UX716_FMwebp_QL85_.jpg',
    musicYear: 2013,
    musicTitle: 'We Must Go On',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/9Z5NMHKY5PE',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5w49Wgw5ikIJNV40HkSSHM?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/we-must-go-on/634051831?i=634051837',
      }),
    ],
  },
  {
    itemId: 12,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61aRV5T3S9L._UX716_FMwebp_QL85_.jpg',
    musicYear: 2016,
    musicTitle: 'Only Yesterday',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/wMt2shWPaOw',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/2M6tHJVrNXZta3Hsjbi70z?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/only-yesterday/1095768291?i=1095768405',
      }),
    ],
  },
  {
    itemId: 13,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51rncWKofFL._UX716_FMwebp_QL85_.jpg',
    musicYear: 2017,
    musicTitle: 'Rainbows & Waterfalls',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/7NSVB-4q3kk',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/4bJbr3OZKvkFx57s2BIu8V?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/rainbows-waterfalls/1293973414?i=1293973630',
      }),
    ],
  },
  {
    itemId: 14,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://cdn.shopify.com/s/files/1/0485/1009/products/plm_unreleasedremixes-476x476_large.jpg?v=1402688585',
    musicYear: 2011,
    musicTitle: '2010 Remixes',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=kxS7VgnPeGc&list=PLP7qiRflB78QaFGwy1h0QWIQklcbO5yTX&pp=8AUB',
      }),
      {
        linkLabel: 'plm store',
        linkHref:
          'https://store.prettylightsmusic.com/products/2010-remixes-download',
      },
    ],
  },
  {
    itemId: 15,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i.discogs.com/YXWlffY10UpLnKBmaCxzU3EhJn--U9nyuDC_zgSGmMg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5NjI3/MTk1LTE2MjcyNzgx/NjktMTcxNy5wbmc.jpeg',
    musicYear: 2011,
    musicTitle: 'Radiohead vs Nirvana vs NIN',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'mashup'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/vou6F9Q2u6Q',
      }),
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/drugoy/pretty-lights-vs',
      }),
    ],
  },
  {
    itemId: 16,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-07-45.jpeg',
    musicYear: 2011,
    musicTitle: 'Pretty Lights vs Summertime',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'mashup'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/9-X08mLwFV0',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/djneez/pretty-lights-vs-summertime',
      }),
    ],
  },
  {
    itemId: 17,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/cruise.jpeg',
    musicYear: 2011,
    musicTitle: 'Pretty Lights vs Led Zeppelin',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'mashup'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/W-0u5bUrRdM',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/blueskyeer/pretty-lights-vs-led-zeppelin',
      }),
    ],
  },
  {
    itemId: 18,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-03-43.jpeg',
    musicYear: 2011,
    musicTitle: 'How We Do [Remix]',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/q_TtoiQ3cwM',
      }),
    ],
  },
  {
    itemId: 19,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/sciencebtch.jpeg',
    musicYear: 2011,
    musicTitle: "It's Tricky",
    musicArtist: ['Pretty Lights', 'Run-DMC'],
    recordingContext: ['studio'],
    musicTags: ['remix', 'commission'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/mGEJMmzKviY',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/6gUG1VnMhce9CrBaxAkqw1?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/ca/album/its-tricky-ssx-pretty-lights-remix-single/504647825',
      }),
    ],
  },
  {
    itemId: 20,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-10-05.jpeg',
    musicYear: 2012,
    musicTitle: 'Halloween Funtime REMIXMONSTRousMASHup',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'mashup'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/p7ZubVyNTwI',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/more-pl-rarities/halloween-funtime-remixmonstrousmashup',
      }),
    ],
  },
  {
    itemId: 21,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-03-18.jpeg',
    musicYear: 2013,
    musicTitle: 'The Day Is Gone',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/YdtICIYXvg4',
      }),
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/superfueg/the-day-is-gone',
      }),
    ],
  },
  {
    itemId: 22,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-06-52.jpeg',
    musicYear: 2013,
    musicTitle: 'Give Your Love Away',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'analog future band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/M6ZNu-bLMFI',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/pretty-lights-family/pretty-lights-give-your-love',
      }),
    ],
  },
  {
    itemId: 23,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-09-26.jpeg',
    musicYear: 2014,
    musicTitle: 'Dionysus Break',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['unreleased', 'analog future band', 'colorado symphony'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ezuIJtX9nMM',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/brett-shredmunds/dionysus-break-live-from-red-rocks',
      }),
    ],
  },
  {
    itemId: 24,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000157936781-ca4smv-t500x500.jpg',
    musicYear: 2015,
    musicTitle: 'Live in Telluride',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['analog future band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=couldU-H-C4&list=PLRI0bqhn-VebdI_moiZg4JOJ-UwoNTwH3&pp=8AUB',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/slidingcolors/sets/pretty-lights-live-in-telluride-2015',
      }),
    ],
  },
  {
    itemId: 25,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://i1.sndcdn.com/avatars-000299423614-ubnxos-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Flips :: 2016',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['live band', 'flips'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=L6KYju6sNxc&list=PLRI0bqhn-Vebh0JS-KlZsloeAarOCEIdP&pp=iAQB8AUB',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/plflips/sets/pretty-lights-flips',
      }),
    ],
  },
  {
    itemId: 26,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://cdn.shopify.com/s/files/1/0485/1009/products/NYE_2009_Cover_large.jpg?v=1402688355',
    musicYear: 2009,
    musicTitle: '2009 NYE (Midnight At The Vic Theater)',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/watch?v=IXXkOR9SDOc&list=PLP7qiRflB78Swkk1Li4_PzisZRBc8IGaj&pp=gAQBiAQB8AUB&pp=8AUB',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/babollinger/sets/pretty-lights-nye-2009',
      }),
    ],
  },
  {
    itemId: 27,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-11-07.jpeg',
    musicYear: 2015,
    musicTitle: 'Ethereal',
    musicArtist: ['Pretty Lights', 'Nosaj Thing'],
    recordingContext: ['studio'],
    musicTags: ['collab', 'commission'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/cxa1Y71Lgyg',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/0HFUgGLJNa738pJ1BFf9mV?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/ethereal/1469760343?i=1469760349',
      }),
    ],
  },
  {
    itemId: 28,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a0960972328_16.jpg',
    musicYear: 2009,
    musicTitle: 'Beyond Right Now',
    musicArtist: ['Pretty Lights', 'STS9'],
    recordingContext: ['studio'],
    musicTags: ['o.g.', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/figC40YNABQ',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/beyond-right-now-pretty-lights-remix/318240604?i=318241042',
      }),
    ],
  },
  {
    itemId: 29,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-10-55.jpeg',
    musicYear: 2005,
    musicTitle: 'Summer Love',
    musicArtist: ['Michal Menert', 'Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['o.g.', 'collab', '???'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/DwGdV-f9_AM',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/troubledr/michal-menert-and-derek',
      }),
    ],
  },
  {
    itemId: 30,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-08-48.jpeg',
    musicYear: 2011,
    musicTitle: 'Country Roads',
    musicArtist: ['Pretty Lights', 'John Denver'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/NAXz2z4giws',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/howo-music/pretty-lights-country-roads',
      }),
    ],
  },
  {
    itemId: 31,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-05-07.jpeg',
    musicYear: 2011,
    musicTitle: 'Solar Sailer',
    musicArtist: ['Pretty Lights', 'Daft Punk'],
    recordingContext: ['studio'],
    musicTags: ['commission', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/LXetZiLyiIw',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/4OgB6TRmIGBRT4NoFxxIQd?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/solar-sailer-remixed-by-pretty-lights/1440617977?i=1440618237',
      }),
    ],
  },
  {
    itemId: 32,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i.scdn.co/image/ab67616d0000b27339113b398256f76ab7d4ee89',
    musicYear: 2013,
    musicTitle: 'I Put A Spell on You',
    musicArtist: ['Pretty Lights', 'Nina Simone'],
    recordingContext: ['studio'],
    musicTags: ['commission', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/XYrXcBawnhE',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/52ml3ut1WD9308zSJtKaYv?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/song/i-put-a-spell-on-you-pretty-lights-remix/1440859992',
      }),
    ],
  },
  {
    itemId: 33,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-N6WVn90hc5AO-0-t500x500.jpg',
    musicYear: 2013,
    musicTitle: 'Exodus',
    musicArtist: ['Pretty Lights', 'Bob Marley'],
    recordingContext: ['studio'],
    musicTags: ['commission', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/dQiH237y9dc',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/59jrOy7jDfyyU9QMQEFh2x?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/exodus-pretty-lights-remix/1442830055?i=1442830347',
      }),
    ],
  },
  {
    itemId: 34,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-09-11.jpeg',
    musicYear: 2018,
    musicTitle: 'One Nation',
    musicArtist: ['Pretty Lights', 'Tom Morello'],
    recordingContext: ['studio'],
    musicTags: ['commission', 'collab'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/LjdvfjKq40Y',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/1WjiaXCZZJPOq9bSIFZ0C7?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/one-nation-feat-pretty-lights/1405707225?i=1405707940',
      }),
    ],
  },
  {
    itemId: 35,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-05-51.jpeg',
    musicYear: 2012,
    musicTitle: 'Wayfaring Stranger',
    musicArtist: ['Pretty Lights', 'LeAnn Rimes', 'Dr Ralph Stanley'],
    recordingContext: ['studio'],
    musicTags: ['commission', 'collab', 'cover'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/XqMGKf4qSSw',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/samorlik/pretty-lights-wayfaring',
      }),
    ],
  },
  {
    itemId: 36,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-05-23.jpeg',
    musicYear: 2008,
    musicTitle: 'Speaking of Happiness',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['blacklisted'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/4sKOVrjsr0Q',
      }),
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/di-o/5-8-2012-pretty-lights',
      }),
    ],
  },
  {
    itemId: 37,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499692459-mizk1m-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Gorge - 08/04/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/GYpwTZLfO7E',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-08-04-live-the-gorge-amphitheatre',
      }),
    ],
  },
  {
    itemId: 38,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499692459-mizk1m-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Gorge - 08/05/17',
    musicArtist: ['Pretty Lights', 'Michal Menert', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/jyqm9r4YYFA',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-08-05-live-the-gorge-amphitheatre',
      }),
    ],
  },
  {
    itemId: 39,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499710954-nd1eio-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Red Rocks - 08/11/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/lmf1qqJFjx8',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-08-11-live-red-rocks',
      }),
    ],
  },
  {
    itemId: 40,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499710954-nd1eio-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Red Rocks - 08/12/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/qvDeZXmwENU',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-08-12-live-red-rocks',
      }),
    ],
  },
  {
    itemId: 41,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499754661-qnlqo8-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Chicago - 08/18/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ilhtEsP3K7w',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-08-18-live-chicago',
      }),
    ],
  },
  {
    itemId: 42,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499754661-qnlqo8-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Chicago - 08/19/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/RYChdFUZrp8',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-08-19-live-chicago',
      }),
    ],
  },
  {
    itemId: 43,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499694196-56cm6r-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Gilford - 09/15/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/AW0Ms7ggE2o',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-09-05-live-new-hampshire',
      }),
    ],
  },
  {
    itemId: 44,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499694196-56cm6r-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Gilford - 09/16/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/mCpEl2vjRNY',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2017-09-06-live-new-hampshire',
      }),
    ],
  },
  {
    itemId: 45,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/Whitewater.jpeg',
    musicYear: 2017,
    musicTitle: 'Whitewater - 09/29/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/HcTDeqtzCo',
      }),
    ],
  },
  {
    itemId: 46,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/Whitewater.jpeg',
    musicYear: 2017,
    musicTitle: 'Whitewater - 09/30/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/PUpnvFB-CkQ',
      }),
    ],
  },
  {
    itemId: 47,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/PrettyLights_DetroitNYE_TWYoast.jpeg',
    musicYear: 2017,
    musicTitle: 'Detroit - 12/28/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/1z3uzH4rs9U',
      }),
    ],
  },
  {
    itemId: 48,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/PrettyLights_DetroitNYE_TWYoast.jpeg',
    musicYear: 2017,
    musicTitle: 'Detroit - 12/29/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/mvfJlCdkEeY',
      }),
    ],
  },
  {
    itemId: 49,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/PrettyLights_PhillyNYE_TWYoast_UPDATED.jpeg',
    musicYear: 2017,
    musicTitle: 'Philly - 12/31/17',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/WXLNryvr03c',
      }),
    ],
  },
  {
    itemId: 50,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/redrocks18.jpeg',
    musicYear: 2018,
    musicTitle: 'Red Rocks - 08/10/18',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/8kB_mU2OUvU',
      }),
    ],
  },
  {
    itemId: 51,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/redrocks18.jpeg',
    musicYear: 2018,
    musicTitle: 'Red Rocks - 08/11/18',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/8VY6yAFD5tU',
      }),
    ],
  },
  {
    itemId: 52,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000186426272-9dq891-t500x500.jpg',
    musicYear: 2008,
    musicTitle: 'Electro City',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unofficial', 'unreleased', 'o.g.'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/pretty-lights-rarities/sets/electro-city-ep',
      }),
    ],
  },
  {
    itemId: 53,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/recreation2008.jpeg',
    musicYear: 2008,
    musicTitle: 'Re:Creation Festival',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/J7WyWXq4e90',
      }),
    ],
  },
  {
    itemId: 54,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/mishawaka.jpeg',
    musicYear: 2008,
    musicTitle: 'Mishawaka - 07/06/2008',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/UmabwUVC2KE',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2008-07-06-live-mishawaka',
      }),
    ],
  },
  {
    itemId: 55,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/og_c.jpeg',
    musicYear: 2007,
    musicTitle: 'Re:Creation - 09/14/2007',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2007-09-14-live-re_creation',
      }),
    ],
  },
  {
    itemId: 56,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/og_a.jpeg',
    musicYear: 2008,
    musicTitle: 'STS9 After Party - 01/25/2008',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/4tO79CVrwUo',
      }),
    ],
  },
  {
    itemId: 57,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/og_b.jpeg',
    musicYear: 2008,
    musicTitle: 'GSP CD Release Party - 04/20/2008',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/Db0npvXDt0Q',
      }),
    ],
  },
  {
    itemId: 58,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/og_a.jpeg',
    musicYear: 2008,
    musicTitle: 'Crystallization - 09/13/2008',
    musicArtist: ['Pretty Lights', 'Corey Eberhard'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/pqd1IJ9XZ7I',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2008-09-13-live-crystallization',
      }),
    ],
  },
  {
    itemId: 59,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/monome_i.jpeg',
    musicYear: 2007,
    musicTitle: 'monome i',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['o.g.', 'monome'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/hXHsXzaoFkI',
      }),
    ],
  },
  {
    itemId: 60,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/monome_ii.jpeg',
    musicYear: 2007,
    musicTitle: 'monome ii',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['o.g.', 'monome'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/qPqTdOERX3c',
      }),
    ],
  },
  {
    itemId: 61,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/monome_iii.jpeg',
    musicYear: 2008,
    musicTitle: 'monome iii (finally moving)',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['o.g.', 'monome'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/hsYcLnGmzVE',
      }),
    ],
  },
  {
    itemId: 62,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/monome_iv.jpeg',
    musicYear: 2008,
    musicTitle: 'monome iv',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['o.g.', 'monome'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/dR7qEd-jll0',
      }),
    ],
  },
  {
    itemId: 63,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/truck.jpeg',
    musicYear: 2016,
    musicTitle: 'campground fuck around',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live'],
    musicTags: ['modular synth'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/cv4jbQKks_s',
      }),
    ],
  },
  {
    itemId: 64,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/transmission.jpeg',
    musicYear: 2016,
    musicTitle: 'analog transmission',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['modular synth'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/r3mAAfsgJHE',
      }),
    ],
  },
  {
    itemId: 65,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/moogfactory.jpeg',
    musicYear: 2010,
    musicTitle: "moog factory (can't stop me now remix)",
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['monome'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/hcPGbJt3uVA',
      }),
    ],
  },
  {
    itemId: 66,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000235625449-v12i4e-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'USB 2.0',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/pretty-lights-rarities/sets/pretty-lights-usb-20',
      }),
    ],
  },
  {
    itemId: 67,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/yearbook.jpeg',
    musicYear: 2017,
    musicTitle: 'Jam Cruise USB',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/more-pl-rarities/sets/jam-cruise-flash-drive',
      }),
    ],
  },
  {
    itemId: 68,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000160309121-801r0v-t500x500.jpg',
    musicYear: 2014,
    musicTitle: 'Maida Vale (BBC)',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['analog future band'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/more-pl-rarities/sets/pretty-lights-bbc-radio-1',
      }),
    ],
  },
  {
    itemId: 69,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/worldcafe.jpeg',
    musicYear: 2013,
    musicTitle: 'World Cafe (NPR)',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['live', 'studio'],
    musicTags: ['analog future band'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://www.npr.org/sections/world-cafe/2013/12/20/255846882/pretty-lights-on-world-cafe',
      }),
    ],
  },
  {
    itemId: 70,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000222468808-zacj50-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Flips :: Okeechobee',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['live band', 'flips'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/moreplflips/sets/pretty-lights-flips-okeechobee',
      }),
    ],
  },
  {
    itemId: 71,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000222468808-zacj50-t500x500.jpg',
    musicYear: 2017,
    musicTitle: 'Flips :: Euphoria',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['live band', 'flips'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/moreplflips/sets/pretty-lights-flips-euphoria',
      }),
    ],
  },
  {
    itemId: 72,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'compilation',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000222468808-zacj50-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Flips :: Telluride',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['live band', 'flips'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/moreplflips/sets/pretty-lights-flips-telluride',
      }),
    ],
  },
  {
    itemId: 73,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000091222683-cjvl6c-t500x500.jpg',
    musicYear: 2015,
    musicTitle: 'Savages',
    musicArtist: ['Pretty Lights', 'Five Knives'],
    recordingContext: ['studio'],
    musicTags: ['commission', 'remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/2QLExN6SNOI',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://i1.sndcdn.com/artworks-000091222683-cjvl6c-t500x500.jpg',
      }),
    ],
  },
  {
    itemId: 74,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/prefaces.jpeg',
    musicYear: 2015,
    musicTitle: 'Prefaces',
    musicArtist: ['Michal Menert', 'Derek Vincent Smith'],
    recordingContext: ['studio'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/gleZ_ykFcCw',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/old-school-pl-rarities-1/sets/prefaces',
      }),
    ],
  },
  {
    itemId: 75,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000026298248-1g3fom-t500x500.jpg',
    musicYear: 2003,
    musicTitle: 'Hindsight',
    musicArtist: ['Michal Menert', 'Derek Vincent Smith'],
    recordingContext: ['studio'],
    musicTags: ['o.g.', 'collab'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/michalmenert/hindsight-w-derek-vincent',
      }),
    ],
  },
  {
    itemId: 76,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499686756-yo9ra8-t500x500.jpg',
    musicYear: 2018,
    musicTitle: 'The Hive - 09/02/16',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/9TF8ZDXk',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/nick-schacherer-1/pretty-lights-live-the-hive-1',
      }),
    ],
  },
  {
    itemId: 77,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/bumbershoot.jpeg',
    musicYear: 2018,
    musicTitle: 'Bumbershoot - 09/03/16',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/gvyS76n10os',
      }),
    ],
  },
  {
    itemId: 78,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/illumination.jpeg',
    musicYear: 2013,
    musicTitle: 'San Francisco - 11/30/13',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['analog future band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/0ySGpCfm-rA',
      }),
    ],
  },
  {
    itemId: 79,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000497682195-cki1wg-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Nashville - 10/07/16',
    musicArtist: ['Pretty Lights', 'Lazer Shark'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/kUjRaNTM_EU',
      }),
    ],
  },
  {
    itemId: 80,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000499666107-vl28is-t500x500.jpg',
    musicYear: 2014,
    musicTitle: 'Madison - 06/06/09',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/4YrsSgHtG3s',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2009-06-06-live-madison-wi',
      }),
    ],
  },
  {
    itemId: 81,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000496664679-p5a4b8-t500x500.jpg',
    musicYear: 2014,
    musicTitle: 'Ibiza - 05/22/14',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['solo'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/WmnBf3Nn-I0',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2014-05-22-live-ibiza',
      }),
      {
        linkLabel: 'mixcloud',
        linkHref:
          'https://www.mixcloud.com/EFMrage/pretty-lights-live-live-at-ims-2014-dalt-vila-ibiza-22052014/',
      },
    ],
  },
  {
    itemId: 82,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000497674404-dw6ad9-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Chicago - 09/24/16',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/C6ucFZoU1Pk',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2016-09-24-live-chicago',
      }),
    ],
  },
  {
    itemId: 83,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-08-28.jpeg',
    musicYear: 2008,
    musicTitle: 'Regulators',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio', 'live'],
    musicTags: ['unreleased', 'o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/hQo__Rx7Zx8',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/old-school-pl-rarities-1/regulators?in=old-school-pl-rarities-1/sets/defocused-on-the-bright-diamonds',
      }),
    ],
  },
  {
    itemId: 84,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-06-36.jpeg',
    musicYear: 2008,
    musicTitle: 'Bump N Hustle',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'o.g.'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/xf1j1SWluiU',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/old-school-pl-rarities-1/bump-n-hustle?in=old-school-pl-rarities-1/sets/defocused-on-the-bright-diamonds',
      }),
    ],
  },
  {
    itemId: 85,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://upload.wikimedia.org/wikipedia/commons/5/54/%27Tub_Thumpin%27.jpg',
    musicYear: 2012,
    musicTitle: 'Pretty Lights vs The End of the World 2012',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['unreleased', 'mashup'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/qUtVWKveS7w',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/luccarpenter/pretty-lights-vs-the-end-of-the-world-2012',
      }),
    ],
  },
  {
    itemId: 86,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61w++SaZzhL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Dreaming of a Bigger Life',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/73GQ6PV8Diw?list=OLAK5uy_lW7rHDJqQhSMuNQPfl8j_FBd4ri7FunG8&si=_WXc_J35sC5vvBK5',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/7rGfXsQO2ji5pg3FmPEQbX?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/dreaming-of-a-bigger-life/382272298',
      }),
    ],
  },
  {
    itemId: 87,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Nc7RIH1JL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2012,
    musicTitle: "Even If It Isn't Right",
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/qXeOwKQ7mCk?list=OLAK5uy_mH-IhOeeJOXkDhlSKaR2PQSmZ7lKl79l8&si=sjVpoSlqCf_e0Olv',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5hvWMXFoeAxCK3RcBdgt7N?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/even-if-it-isnt-right/521981386',
      }),
    ],
  },
  {
    itemId: 88,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61qHS-pRbWL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2015,
    musicTitle: 'Space Jazz',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/7dzBMWFdrhE?list=OLAK5uy_n4diRNxqKSjaKG7rJ1WofjJ689KaUR4jg&si=hU-R3oXGsl2vZBO9',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/7iGzK8x76ATOfNCsnpucPI?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/space-jazz/982326566',
      }),
    ],
  },
  {
    itemId: 89,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61cH95uoKhL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2015,
    musicTitle: '1',
    musicArtist: ['Michal Menert', 'The Pretty Fantastics'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/zjYh84Ick2M?list=OLAK5uy_lFW5EZFjOlVS8abHAfu9DFg8KWSV8mjm4&si=BxNmuCqWeoXtdSRP',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/7LSHJT6JDmqx00cnie6Elu?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/1/1045643640',
      }),
    ],
  },
  {
    itemId: 90,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51g6Z+dfIuL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'From the Sea',
    musicArtist: ['Michal Menert', 'The Pretty Fantastics'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/FPpuGuwnJn8?list=OLAK5uy_nVJUItjMLH96TDFdyn6Sg8VV2GxLzYfps&si=kpz9-cMAwe1-TZdA',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4AxuJt95BRZYNBvPrNLw7M?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/from-the-sea/1438895439',
      }),
    ],
  },
  {
    itemId: 91,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61-4Yycl9aL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Permanent Vacation',
    musicArtist: ['Michal Menert', 'The Pretty Fantastics'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/YP1ZWcgSXvo?list=OLAK5uy_mnEwVlJYfCCTyMLiXP4PNQanE5KYZvqkQ&si=0A3-L_HtoaUSSMTg',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1DXbt2oHXspH3x30z5YTxp?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/permanent-vacation/1516661702',
      }),
    ],
  },
  {
    itemId: 92,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41khUIfrVoL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2014,
    musicTitle: 'Elements',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/DPmu6b83LCc?list=PLeaAVf9FuLyWSWv0dglMRA18sPFjOZbIB&si=OwMG0tN98vGLNGWP',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0HGZQgAGNrkLF88CqoMSTS?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/uz/album/elements-ep/955200967',
      }),
    ],
  },
  {
    itemId: 93,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41xBSyav5LL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2014,
    musicTitle: 'Victory',
    musicArtist: ['Michal Menert', 'Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3dqscq7oyCG0RoyBDZ9JNl?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/victory-single/1492500170',
      }),
    ],
  },
  {
    itemId: 94,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Sjz4IEAkL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Fearless',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/4hzMMTaaXB8?list=PLeaAVf9FuLyVfy7iPdYdSmLpmbsHRKybv&si=-f8AkA8q_Jr-MfZ0',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/7EiH4hFNsCREVmjIULaIic?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/fearless-ep/1509521215',
      }),
    ],
  },
  {
    itemId: 96,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a3942226336_16.jpg',
    musicYear: 2015,
    musicTitle: 'Slow Coast',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      {
        linkLabel: 'bandcamp',
        linkHref: 'https://michalmenert.bandcamp.com/album/slow-coast-ep',
      },
    ],
  },
  {
    itemId: 98,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51LEhCk4h5L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Slow Coast II',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/C8OwMo7-ayk?list=OLAK5uy_ns_WUYBnCu7FJ9RaeZCpNfVEj_wInh9To&si=RyzjaemSPDNCG1Wy',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2Gs70M9kVv0kMVpSNdIT7G?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/slow-coast-ii-ep/1402910716',
      }),
    ],
  },
  {
    itemId: 99,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Pn1pqWAqL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Slow Coast III',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/7b0Th5837A4?list=OLAK5uy_lcrmM4pcScOLH-_gNJCSSh5SUcMZQYGJQ&si=50tOiWM7T2dfug43',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/7nL01w7pQZkIyP3W18y3Bh?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/slow-coast-iii/1453735338',
      }),
    ],
  },
  {
    itemId: 100,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41cocZRtMiL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Body Hi',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/2GeBJL0uIfA?list=OLAK5uy_n7CgoGHFMkwqDHVAoatbuyG8Ub9Ck2P2A&si=IATu3GPqtjKB2KQh',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3hBK05GF4f0mu3Qni5QKcW?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/body-hi-ep/1612160811',
      }),
    ],
  },
  {
    itemId: 101,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/511oIPWy0LL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Sorry',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/iT1kBfJRGGM?si=rCdETznQkf-NwXLi',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/09q15lTeH0bFpsodosoZdT?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/sorry/1510569868?i=1510571120',
      }),
    ],
  },
  {
    itemId: 102,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a2669821566_16.jpg',
    musicYear: 2012,
    musicTitle: 'Twilight Frequency',
    musicArtist: ['Michal Menert', 'Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      {
        linkLabel: 'bandcamp',
        linkHref:
          'https://twilightfrequency.bandcamp.com/album/twilight-frequency',
      },
    ],
  },
  {
    itemId: 103,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51pDuWTIcfL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Slow Burn',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/Xh_49BmnVRc?list=OLAK5uy_lEMCxZDNHer419eLDzZy-wKrtsMY0u2LE&si=zjlKhinSnRKpjlcj',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5CRexExmGFz37MuUCh0PNb?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/slow-burn-ep/1645870539',
      }),
    ],
  },
  {
    itemId: 104,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/515xSOpUQxL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Adrift',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/2O9P519aqIo?si=juYo308K_X20aA81',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6ymBexntxmbQvBhjeQnlJr?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/adrift-single/1488112737',
      }),
    ],
  },
  {
    itemId: 105,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a0780691966_16.jpg',
    musicYear: 2021,
    musicTitle: 'Diffused Light',
    musicArtist: ['Wooden Flowers', 'Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/e94rvibp6G8?list=PLeaAVf9FuLyVJIIJu1a0jtaYHN2u5CW5M&si=CCsijdMYzUX6JuVN',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5jYLVXR5V3S0zvUeo7goPl?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/diffused-light/1593019887',
      }),
    ],
  },
  {
    itemId: 106,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/613zV6g8UTL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'Further Than Our Eyes Can See',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/qDR1qtsLVTg?list=OLAK5uy_kusO6hBuDX1u_V_mQQNrP35MrFCWrtCho&si=_6uJjB-lzzfouJyM',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/50g0lzP2QYIVfVq3iSmAzC?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/further-than-our-eyes-can-see-ep/1402892120',
      }),
    ],
  },
  {
    itemId: 107,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51-vkNa5TWL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2012,
    musicTitle: 'Monolith Code',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/-mCVnQWMjZo?list=PLF3CEC6589FF5DF44&si=KyBkmBTGF-gozxWe',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/50g0lzP2QYIVfVq3iSmAzC?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/monolith-code-ep/1402888461',
      }),
    ],
  },
  {
    itemId: 108,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61oYTgInutL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2013,
    musicTitle: 'Seven Bridges',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/Xv5JHk-Uho0?list=OLAK5uy_l-3JA6cu2PutGkkW2pyo94FuHr1NViV5Y&si=F7XJJnY995oKenxV',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4p8bsXV9k5qarnHBK2azlN?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/seven-bridges/1402909336',
      }),
    ],
  },
  {
    itemId: 109,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61yYx37+d9L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Grid of Souls',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/T9YIZFYrOkw?list=OLAK5uy_kHDpb31gWUMZAJa6_7mT1HeM45TKswJPs&si=3anSuAOC074zmY9T',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2tAfPDTMtyeE1LqpZD3MRS?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/grid-of-souls/1342067042',
      }),
    ],
  },
  {
    itemId: 110,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/516NhwDqENL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2023,
    musicTitle: 'Mecha Flora',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/uvF480eb5Y8?list=PLX6K4NIjMX1V0Tpb3GasgGVMBYdFfNjzl&si=4r0OPPWNICQFL-jC',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2BQkZumGI5iMwfdXqBhLXg?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/mecha-flora-ep/1660492965',
      }),
    ],
  },
  {
    itemId: 111,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a3137555505_16.jpg',
    musicYear: 2012,
    musicTitle: 'Electric Feel (Remix)',
    musicArtist: ['Break Science', 'MGMT'],
    recordingContext: ['studio'],
    musicTags: ['remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/w8K_SOLVPSQ?si=HoMQwkbsUND6PL7R',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/electric-feel-break-science-remix',
      }),
      {
        linkLabel: 'bandcamp',
        linkHref:
          'https://breakscience.bandcamp.com/track/electric-feel-mgmt-remix',
      },
    ],
  },
  {
    itemId: 112,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a2275910188_16.jpg',
    musicYear: 2011,
    musicTitle: 'Moment 4 Life (Remix)',
    musicArtist: ['Break Science', 'Nicki Minaj'],
    recordingContext: ['studio'],
    musicTags: ['remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/Q9fGQeNnLtM?si=KxvJ0hIE3VYR8NyQ',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/moment-4-life-break-science',
      }),
      {
        linkLabel: 'bandcamp',
        linkHref:
          'https://breakscience.bandcamp.com/track/moment-4-life-nicki-minaj-remix',
      },
    ],
  },
  {
    itemId: 113,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a3277117740_16.jpg',
    musicYear: 2012,
    musicTitle: 'Talk That Talk (Remix)',
    musicArtist: ['Break Science', 'Rihanna', 'Jay-Z'],
    recordingContext: ['studio'],
    musicTags: ['remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/Z30FSdOAVuQ?si=rVLrJijdZ7Ntzj9P',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/talk-that-talk-rihanna-feat',
      }),
      {
        linkLabel: 'bandcamp',
        linkHref:
          'https://breakscience.bandcamp.com/track/talk-that-talk-rihanna-ft-jay-z-remix',
      },
    ],
  },
  {
    itemId: 114,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref: 'https://f4.bcbits.com/img/a0336923726_16.jpg',
    musicYear: 2011,
    musicTitle: 'Boogie Down',
    musicArtist: ['Break Science', 'Gramatik'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/n95Mv_URyu8?si=KTnp4dNS_38k5YQm',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/break-science-gramatik-boogie',
      }),
      {
        linkLabel: 'bandcamp',
        linkHref: 'https://breakscience.bandcamp.com/track/boogie-down',
      },
    ],
  },
  {
    itemId: 115,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000094133768-u6mvu7-t500x500.jpg',
    musicYear: 2014,
    musicTitle: 'Vibe Walk',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['mashup'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/LJhfusKIfQM?si=h00KwPJ5xww6BK5t',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/kendrick-lamar-vs-tycho-vibe-walk-break-science-remix',
      }),
    ],
  },
  {
    itemId: 116,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000141310448-pvf52f-t500x500.jpg',
    musicYear: 2015,
    musicTitle: 'Fu-Gee-La (Remix)',
    musicArtist: ['Break Science', 'The Fugees'],
    recordingContext: ['studio'],
    musicTags: ['remix'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/fu-gee-la-break-science-remix',
      }),
    ],
  },
  {
    itemId: 117,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000148658272-du4agc-t500x500.jpg',
    musicYear: 2015,
    musicTitle: 'Mexico (Remix)',
    musicArtist: ['Break Science', 'Sonya Kitchell'],
    recordingContext: ['studio'],
    musicTags: ['remix'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/sonya-kitchell-mexico-break-science-remix-1',
      }),
    ],
  },
  {
    itemId: 118,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/avatars-FCse6g8ZumcEBXsj-juyccA-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Sirius XM',
    musicArtist: ['Break Science'],
    recordingContext: ['studio', 'live'],
    musicTags: ['live band', 'interview'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/break-science-band-at-the-sirius-xm-jam-on-studios',
      }),
      {
        linkLabel: 'archive',
        linkHref: 'https://archive.org/details/breakscience2016-01-27',
      },
    ],
  },
  {
    itemId: 119,
    musicType: 'source',
    sourceType: 'track',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000198319599-t30vh0-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Reno (Live at Brooklyn Bowl)',
    musicArtist: ['Break Science'],
    recordingContext: ['concert'],
    musicTags: ['live band'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/break-science/reno-live-at-brooklyn-bowl',
      }),
      {
        linkLabel: 'archive',
        linkHref:
          'https://archive.org/details/breakscience2016-01-29.cmc621.sbd.matrix.flac24/breakscience2016-01-29.cmc621.sbd.matrix-t17.flac',
      },
    ],
  },
  {
    itemId: 120,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51UdIdAi0yL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2017,
    musicTitle: 'Dream Sequence',
    musicArtist: ['Break Science', 'Dreamers Delight'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/8Xzu3qB_Yvw?si=2w4t-kPMYj4_y3EX',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/5RQ7PrbagaKJcsp6NvRThB?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/dream-sequence-feat-break-science-single/1614965502',
      }),
    ],
  },
  {
    itemId: 121,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61WVtkzUhiL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Coded Theory',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/kN78Es1TX5g?si=kRi695HpRzSKSjPs',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/78a3Ebppfju8sO2RZVRkHt?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/coded-theory-single/1458833693',
      }),
    ],
  },
  {
    itemId: 122,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61kUQ5kV62L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Oshun',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/dNZBFuXhtC4?si=1SB0sm1Tftv5PBfk',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/0wSjSo8TaCdnWuBCTSkb4x?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/oshun-single/1479257025',
      }),
    ],
  },
  {
    itemId: 123,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61-o79abb6L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Take You There',
    musicArtist: ['Break Science'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/KVa_TSsbfSA?si=RP9cY9T3j0JywUYH',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/0sl1HpU6VY6TDsBUmM1u7Z?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/take-you-there-single/1506855334',
      }),
    ],
  },
  {
    itemId: 124,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51m6v4SPFlL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Mettawave',
    musicArtist: ['Break Science', 'Manic Focus'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/0JkUg-0TWmg?si=70XrpQ1NRwQdTDfn',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/5TAQNXHZncVROjbZB9UlEU?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/mettawave-single/1540199378',
      }),
    ],
  },
  {
    itemId: 125,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51vFU+QQFCL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'Levitate',
    musicArtist: ['Paper Diamond'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/f107G_AwU9U?list=OLAK5uy_n84eOjGnGMVCSTz4PSel_sO8pO0U05cAM&si=8vAI7CqS-6FnLdTw',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6Uzxfq05xF5jQYPvMcjhSF?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/levitate/976212718',
      }),
    ],
  },
  {
    itemId: 126,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51nyGI0ixjL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'The Mirror',
    musicArtist: ['Paul Basic'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/Dix_C8DUDSc?list=OLAK5uy_lTt3q1rWPTd7RXLUdIidv2mtkWVsAFmVM&si=_rvzBoir96BUkgdn',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6bWxob5MNKzzrXkoOY5ddH?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/gb/album/the-mirror/466901533',
      }),
    ],
  },
  {
    itemId: 127,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51u7E5EAMsL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2013,
    musicTitle: 'Transient Horizons',
    musicArtist: ['Paul Basic'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/BY3Fwmlg5ZI?list=PL2uWggAFuEsVMznz8htmj07y-BSSAzEhF&si=RN4kTEmLwg3We0QV',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3VJJO5JgTnSNDaUGkcwbpW?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/transient-horizons/766945930',
      }),
    ],
  },
  {
    itemId: 128,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41uEcN8ZkdL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2017,
    musicTitle: 'Skywave',
    musicArtist: ['Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/m9uZmegygzA?list=OLAK5uy_lD3bXqwMRn-d9UlQVydOBxzD42SBtJIak&si=c33We7FdiP63jN4y',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4JJSKO7wyM13rDCqiSw4Un?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/skywave/1494375793',
      }),
    ],
  },
  {
    itemId: 129,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/612eezueHrL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2012,
    musicTitle: 'Shark Wolf Rabbit Snake',
    musicArtist: ['Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/BY3Fwmlg5ZI?list=PL2uWggAFuEsVMznz8htmj07y-BSSAzEhF&si=f5APkOtn-M9yMqIz',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5A7rqZVUTMf4uYUHQaxLkn?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/shark-wolf-rabbit-snake/1553491366',
      }),
    ],
  },
  {
    itemId: 130,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61bqDA5-VML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'Beatz & Pieces Vol. 1',
    musicArtist: ['Gramatik'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/6DCChe9hnlM?list=OLAK5uy_nWIzBLBiO36qHEXFKPT7R3p2WwkPRt4VI&si=u7dD7_3eG4JtToAt',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2jufxlYnmvY235bVECkCCq?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/beatz-pieces-vol-1/903552156',
      }),
    ],
  },
  {
    itemId: 131,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51HXKhhYp9L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2008,
    musicTitle: 'Street Bangerz Vol. 1',
    musicArtist: ['Gramatik'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/CEtAkb3IFZE?list=OLAK5uy_lFRFxlMv3J407KIyT8sNa618Gan97VIZk&si=HLL2MKNhPGNtpT31',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1p1w828sU7QewePqhfZKwh?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/sb-1/797311480',
      }),
    ],
  },
  {
    itemId: 132,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51nfDpWzIxL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2009,
    musicTitle: 'Street Bangerz Vol. 2',
    musicArtist: ['Gramatik'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/dlVpM_eiwec?list=OLAK5uy_mX8cWLGUPzdNdIE0lKZdoQaCXKR2GgPyI&si=VrNf9lsnrua4t2e9',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4NyU7oAsBsOvTAH2vnYPem?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/sb-2/806697096',
      }),
    ],
  },
  {
    itemId: 133,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51A2dPe+XrL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Street Bangerz Vol. 3',
    musicArtist: ['Gramatik'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/yjXKLstzAgE?list=OLAK5uy_nUWnzorGhDZ4FYq9MOxAxDRFvkC33TxnE&si=EITAnDC1t4xrw-4Y',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6zRPOKKIiUEQPGYnLoavVj?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/sb-3/806756155',
      }),
    ],
  },
  {
    itemId: 134,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'ep',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61A2MYHIdHL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2009,
    musicTitle: 'Water 4 The Soul',
    musicArtist: ['Gramatik'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/3S6u8FHkIeE?list=OLAK5uy_mRl7Fkins6Y3F1l6WXlYvcgjvF0FmUlPw&si=Y4ruFZv6JPklnr7W',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/09ffEBtiinB8HP4FDJ2apt?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/water-4-the-soul/806754280',
      }),
    ],
  },
  {
    itemId: 135,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51LuNnkVreL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'The  Path',
    musicArtist: ['Motifv'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/dMGP32y4pHI?list=PLhwlP8Zj_bg3DPR7yUIh4_RGVYIhkkcGF&si=-G3m5Icsg2LUZtqV',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1LD9EEIsQvUEV4Vqe2bSy7?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/the-path/1455791759',
      }),
    ],
  },
  {
    itemId: 136,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51IasxEjbsS._UX500_FMwebp_QL85_.jpg',
    musicYear: 2021,
    musicTitle: 'Dilated Mind',
    musicArtist: ['Motifv'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/mq3xde84Gto?list=OLAK5uy_ntaFdPoNdrpVIEdNxil59eFX1AB75fYTI&si=u-Dz4mhjwdHbqVMF',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6wHSuNf35VoDcBAZbFIUWh?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/dilated-mind/1569682391',
      }),
    ],
  },
  {
    itemId: 137,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51r0r8UfjcL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2023,
    musicTitle: 'Hold On',
    musicArtist: ['Motifv', 'Late Night Radio'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/Yoc12hpjI4Y?si=Rh1e78fwXRB7Ibxw',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/6TUzH5O2cjvZhOPBQuJNyT?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/hold-on-single/1664672603',
      }),
    ],
  },
  {
    itemId: 138,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51m+szUslJL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2023,
    musicTitle: 'Hold On',
    musicArtist: ['Motifv'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/t0gH3Bu_cs4?si=CW-1BmAPVOPd0klR',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/4da7BYmmVA12d4JyXdpcJ9?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/hold-on-single/1664672603',
      }),
    ],
  },
  {
    itemId: 139,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Vrw9zmLvL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'Telescopic',
    musicArtist: ['SuperVision'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/879DsGDET2s?list=OLAK5uy_n5tAG6nW8Zv60CSvudWq81Ym7OyRI5AEI&si=dFYJpGaRxq6uSd77',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1FLa8UyI19VikqlgmGjHtf?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/telescopic/467650758',
      }),
    ],
  },
  {
    itemId: 140,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51BnogldxpL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2013,
    musicTitle: 'Telekinetic',
    musicArtist: ['SuperVision'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/A01i9OxjtkE?list=OLAK5uy_mcuUI6SC545JAll_NUDmcNHpqUgdAuR2E&si=A5R6XKhDrZJFQocw',
      }),
      getSpotifyLinkData({
        spotifyHref: 'https://music.amazon.com/albums/B00D384H7S?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/super-like-vision/655749351?i=655749682',
      }),
    ],
  },
  {
    itemId: 141,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61owoN0DTGL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Reset',
    musicArtist: ['SuperVision', 'Chris Karns', 'Josh Rubin'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/pv5o2eSzn_g?si=kFx9UGiArk8CrcSQ',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/2W9Urwy917YA01JqxWp02j?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/reset-feat-josh-rubin-chris-karns-single/1474514700',
      }),
    ],
  },
  {
    itemId: 142,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51fAMRbzkoL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2023,
    musicTitle: 'Echoic Memory',
    musicArtist: ['Borahm Lee'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/NtI6k53r2bs?list=OLAK5uy_lixW0jk5lWDtDI6OXv0i5KRiyeFNsgMLA&si=Z1BfmURWBxR3f-pC',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/64W95Nk6fXAYRVeTMGQvtH?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/echoic-memory/1671325484',
      }),
    ],
  },
  {
    itemId: 143,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51TheYIK+OL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Light Up the Night',
    musicArtist: ['SuperVision', 'Josh Rubin'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/PRQYDaFEFYg?si=G3kN8dUSXYGb8Ha3',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/345jPHJ1IKeFGdfYA9luA7?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/light-up-the-night-feat-josh-rubin-single/1470169355',
      }),
    ],
  },
  {
    itemId: 144,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51E1clTyceL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Encounters',
    musicArtist: ['Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/3SIZd1pmobo?list=OLAK5uy_nok21cP2VCgePLL5U7xfKZat5UAnO33L8&si=zmbuxUQTXn34y9Uo',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3ZyIj9g1SROtF0qbdKoLCX?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/encounters/1647398049',
      }),
    ],
  },
  {
    itemId: 145,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61YoPwSRsmL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'In The Nude',
    musicArtist: ['Eliot Lipp', 'Blockhead'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/huMWcMrBT2k?list=OLAK5uy_lgNzsbyWI8QsuRI9l3jjnYSZpZnNDRhko&si=N81ehVB0lMvzUk6s',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3phCtZpvocWeaq4WuqfTjQ?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/in-the-nude/1620647361',
      }),
    ],
  },
  {
    itemId: 146,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61YxtZc1SqL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2008,
    musicTitle: 'The Outside',
    musicArtist: ['Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/SONsiDvTQAk?list=PL2uWggAFuEsWkQkicw59sQnvkeoanpuFA&si=e7DQgYYj2j0lUmmy',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1GP03idSUOHLbtliq7h587?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/the-outside/475557751',
      }),
    ],
  },
  {
    itemId: 147,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41+3lpRgZdL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2007,
    musicTitle: 'City Synthesis',
    musicArtist: ['Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/rukJhSrHxGM?list=OLAK5uy_lVTBkdG6Mz9h0K_M7-_RUZ1kzHoBfF_a8&si=pNcu3-G2K5rhujMA',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4tVYweopk8uGeq3Yw6qZkM?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/city-synthesis/256479011',
      }),
    ],
  },
  {
    itemId: 148,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51VFvhdZi+L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Choice Kuts',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/nhrqKSb_QQw?list=OLAK5uy_kNFb97swaqYdWRHiH94hwwCHzNjPCRmKA&si=kRU0yBPJOEDhGyjz',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3o3IODSZ3FzKtkrTNlu9y5?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/choice-kuts/1416330843',
      }),
    ],
  },
  {
    itemId: 149,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61xntwnBGTL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2009,
    musicTitle: 'Peace Love Weed 3D',
    musicArtist: ['Eliot Lipp'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/avfSTCWtY04?list=PL2uWggAFuEsUd0QPwoy4zigdrKHEb9fUJ&si=ay8_fj5wz4rbl59H',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6nycUJupVxrPVmsfyF7WgE?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/peace-love-weed-3d/1493413718',
      }),
    ],
  },
  {
    itemId: 150,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51cNgPLXEoL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: "Nerd's Eye View",
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ya3z0fAcJXI?si=EntttAxyEMU2UXyu',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/0QYHyKJrrEsAt5JBB2COI9?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/nerds-eye-view-single/1439377290',
      }),
    ],
  },
  {
    itemId: 151,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/6163xZaWrML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Soul Feelers',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/4mvhwj5yfOQ?si=ZxwVcERJSRZHagPS',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4DXtOYqsdWhdlKRQAQrjP2?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/soul-feelers-single/1441834415',
      }),
    ],
  },
  {
    itemId: 152,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61Bv5jjJXEL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Funk Face',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/97zJDVJwL8Y?si=2LPEu5SvEQOjGGRZ',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2kr3AjoLlXaiRft4sf5tUi?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/funk-face-single/1442297468',
      }),
    ],
  },
  {
    itemId: 153,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51n5wSgClzL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'The Dank Panther',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/-POuSyxwPZo?si=FOnYbKF2W0GecMK4',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6Rd0B2SZGq57EQ2kIrQiwU?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/the-dank-panther-single/1443937015',
      }),
    ],
  },
  {
    itemId: 154,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/71UgmgvUNqL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Bumper Sticker',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/nX3oVXjRIqQ?si=4rBlJUUllMkT23zJ',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3JO8SbPUtKRhzgJggWfABO?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/bumper-sticker-single/1445204905',
      }),
    ],
  },
  {
    itemId: 155,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61CqVjy+0+L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'I Luv You 25x',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/atWp6E-jRGk?si=H4gwLWIGigr9o0_C',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0Jor1p9orxleo490F0I9fG?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/i-luv-you-25x-single/1450736356',
      }),
    ],
  },
  {
    itemId: 156,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51M4NUlk8IL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Maybe',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/CyV05SpTDsQ?si=SvYEiQA28SriCg2e',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4ggLyRdVbmB8CP8brrdcCg?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/ca/album/maybe-single/1459303855',
      }),
    ],
  },
  {
    itemId: 157,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/513YEUWHQfL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'SPARKLEMUFFIN',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/lo9cqTm_NH4?si=PVRb8DIhBA2dHWWW',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6JFxTB0Pah14x84p4e47Zr?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/sparklemuffin-single/1463367888',
      }),
    ],
  },
  {
    itemId: 158,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51ZqfWxTLHL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Pangolin (Remix)',
    musicArtist: ['Chris Karns', 'Sunsquabi'],
    recordingContext: ['studio'],
    musicTags: ['remix'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/9upF8IE87Bk?si=Svzo3YHZieWMGVef',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/7akHZmEOQYXDzWNVRXkF3R?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/pangolin-chris-karns-remix-single/1476017533',
      }),
    ],
  },
  {
    itemId: 159,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51u+dbOySzL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Perrier for Your Derrière',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/H5n3l0A88aI?si=PMIdES3tH2qgwQF7',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0JU9OgucLoGCYFwipxZb3S?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/perrier-for-your-derri%C3%A8re-single/1478518075',
      }),
    ],
  },
  {
    itemId: 160,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51vxAFjKl1L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: "Hi, I'm Doing Fine",
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/G6j39A_5xeg?si=yBBYk1IPycciDSjf',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/27NPkAqNkbIZDnCmwrnjbA?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/hi-im-doing-fine-single/1495747211',
      }),
    ],
  },
  {
    itemId: 161,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51vQqKFR+yL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Welcome to the Kush Club',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/rd8JWsstWpo?si=IP8AaYKM6G_fKTng',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6yqCyOFdfWoQvUK101LENg?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/in/album/welcome-to-the-kush-club-single/1501763986',
      }),
    ],
  },
  {
    itemId: 162,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61wy77NXPVL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Open Your Earlids',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/e_8eF1AYHgk?si=DYZBUyJUYcHBlw8z',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0IKoHPoyKXj66bpUD2SEgc?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/open-your-earlids-single/1502602393',
      }),
    ],
  },
  {
    itemId: 163,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61oQquTUXHL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Vibrational Rotation',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/7EV6OA4mDiA?si=ARz5LPkJyUnjFAny',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/6A3fdF6XmMbybxQJrjQIfE?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/vibrational-rotation-single/1623292967',
      }),
    ],
  },
  {
    itemId: 164,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61BAmqdJIKL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Love Life, Live Life',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/i5uTlU73kg0?si=X62EjtAX4E_Q09k6',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4mCu3H4FoO3UZMQ6nhjjqF?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/love-life-live-life-single/1624895062',
      }),
    ],
  },
  {
    itemId: 165,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51AbbHpwOPL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'My Love For You',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/O1rBlBFHkuo?si=XI5xfmNnVp3vzQxK',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/2Fj7rJn2DNngiKuL5Vdui9?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/my-love-for-you-single/1624933436',
      }),
    ],
  },
  {
    itemId: 166,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61BF7Jl+YpL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'It Goes On and On',
    musicArtist: ['Chris Karns', 'Borahm Lee'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ddzTI6ddHVE?si=ChC9Z3b5O80QkpGO',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/3USbMRQMiXEJHR5DXk4v2U?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/it-goes-on-and-on-single/1625939802',
      }),
    ],
  },
  {
    itemId: 167,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51VjkOcxrML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Take Me Away',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/6UV4CGuXl4w?si=iW35EVUEVfgSQ6l8',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/4DVK7sxjcLedkPrcUtVPnL?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/take-me-away-single/1628358711',
      }),
    ],
  },
  {
    itemId: 168,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51U8gVatYOL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Searching For Truth',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ysVzWqNRbos?si=wzERaYIEbP9H6VlK',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/7uK8M514DCOG0LahFouBrH?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/searching-for-truth-single/1630803548',
      }),
    ],
  },
  {
    itemId: 169,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61YMl1KW+CL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Together',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/YDxbKESB5VE?si=KjJMUD0ug29IEazs',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/2z2WUJjYzvYxi5K5WzSq0t?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/together-single/1631365413',
      }),
    ],
  },
  {
    itemId: 170,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41KqATOj5EL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Sent To Higher Heights',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/HrNxygvB_jM?si=WASap0LmIbgVa0iG',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0qqfCjFwfSnORxRG4MztDH?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/sent-to-higher-heights-single/1631842140',
      }),
    ],
  },
  {
    itemId: 171,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51mQxIto5nL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Make This World Better',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/5cq5-JdzLkE?si=xck81ChwylUx7BEw',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/42i2bV9tfPFpSBRok7nDGo?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/make-this-world-better-single/1632053011',
      }),
    ],
  },
  {
    itemId: 172,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/611PJ1Pr3AL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Wokelore',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/RvsqPolAjTk?si=q9Vs064DX5pG3Oit',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3g5eQrCqGzxI1U49nI7MQi?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/wokelore-single/1634266714',
      }),
    ],
  },
  {
    itemId: 173,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61Nzd6mI19L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2023,
    musicTitle: 'Laid Back',
    musicArtist: ['Chris Karns'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/iInRs3EteF0?si=h2bcbuFOYWTCSou_',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1PxRCwZ9aQozojJslhA5IF?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/laid-back-feat-eric-benny-bloom-single/1681589123',
      }),
    ],
  },
  {
    itemId: 174,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61gxmxFh6TL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2023,
    musicTitle: 'I Need A Beach In My Life, ASAP',
    musicArtist: ['Chris Karns', 'Seb Zillner'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/mf5qMvHLE7U?si=cFkUOyaNo8QyNbeM',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/track/6GOZkJHyChtH4fuYWmt5AZ?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/i-need-a-beach-in-my-life-asap-feat-seb-zillner-single/1684504520',
      }),
    ],
  },
  {
    itemId: 175,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'single',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61Cfzl+vm5L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Visible Sound',
    musicArtist: ['Chris Karns', 'Dominic Lalli'],
    recordingContext: ['studio'],
    musicTags: ['discography'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ALr3F-S6vx4?si=4s6SMOWiOsze5FVe',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/3udh3G56nmzlbDrObTF5CZ?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/ca/album/visible-sound-single/1531507884',
      }),
    ],
  },
  {
    itemId: 176,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-S1Vce6KFfubbP63V-9W3JPQ-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Denver - 08/04/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: [
      'soundship spacesystem',
      'pl live in dub',
      'the fantastic pretty lights',
    ],
    externalLinks: [
      {
        linkLabel: 'twitch',
        linkHref: 'https://www.twitch.tv/videos/1890446916',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/mission-night-1',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/yePzyEKuyjE?si=iD0gCQQIrQ29kxfe',
      }),
    ],
  },
  {
    itemId: 177,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-S1Vce6KFfubbP63V-9W3JPQ-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Denver - 08/05/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['soundship spacesystem'],
    externalLinks: [
      {
        linkLabel: 'twitch',
        linkHref: 'https://www.twitch.tv/videos/1891321151',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2023-08-05-live-mission-ballroom',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/gqP1QsKB5RA?si=HVb7ZcRBT6SosOs6',
      }),
    ],
  },
  {
    itemId: 178,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-S1Vce6KFfubbP63V-9W3JPQ-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Denver - 08/06/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['soundship spacesystem'],
    externalLinks: [
      {
        linkLabel: 'twitch',
        linkHref: 'https://www.twitch.tv/videos/1892188730',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2023-08-06-live-mission-ballroom',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/CqiAydHR4QQ?si=EJDEAadVtakkVjRF',
      }),
    ],
  },
  {
    itemId: 179,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-EQHqCZ3Nlr8ti9ZL-r9Jyow-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Dillon - 08/10/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['soundship spacesystem'],
    externalLinks: [
      {
        linkLabel: 'twitch (1)',
        linkHref: 'https://www.twitch.tv/videos/1895530701',
      },
      {
        linkLabel: 'twitch (2)',
        linkHref: 'https://www.twitch.tv/videos/1895629728',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2023-08-10-live-dillon-amphitheater-1',
      }),
      {
        linkLabel: 'youtube (1)',
        linkHref: 'https://youtu.be/fSajuCFjJpA?si=P_X6mrGc6wsrtip5',
      },
      {
        linkLabel: 'youtube (2)',
        linkHref: 'https://youtu.be/FBB860JvN4k?si=D87zkyZdOhqNCR6i',
      },
    ],
  },
  {
    itemId: 180,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-EQHqCZ3Nlr8ti9ZL-r9Jyow-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Dillon - 08/11/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['soundship spacesystem'],
    externalLinks: [
      {
        linkLabel: 'twitch',
        linkHref: 'https://www.twitch.tv/videos/1896412978',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2023-08-11-live-dillon-amphitheater-1',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/LeUldFcbBjM?si=iVHpJabHc0wuv0VG',
      }),
    ],
  },
  {
    itemId: 181,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-EQHqCZ3Nlr8ti9ZL-r9Jyow-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Dillon - 08/12/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['soundship spacesystem'],
    externalLinks: [
      {
        linkLabel: 'twitch',
        linkHref: 'https://www.twitch.tv/videos/1897290919',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/prettylightslive/sets/2023-08-12-live-dillon-amphitheater',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/TiivjwjWWhg?si=4yWiPiv5s8WGLA_0',
      }),
    ],
  },
  {
    itemId: 182,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-EQHqCZ3Nlr8ti9ZL-r9Jyow-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Atlanta - 08/24/23',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['concert'],
    musicTags: ['soundship spacesystem'],
    externalLinks: [
      {
        linkLabel: 'twitch',
        linkHref: 'https://www.twitch.tv/videos/1907712237',
      },
      getSoundcloudLinkData({
        soundcloudHref:
          'https://i1.sndcdn.com/artworks-3nqvEe9AJVVj2ySN-zQg33w-t500x500.jpg',
      }),
    ],
  },
]
