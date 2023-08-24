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
]
