import { CuratorConfig } from '@stews/data/CuratorConfig'
import {
  getAppleLinkData,
  getSoundcloudLinkData,
  getSpotifyLinkData,
  getYoutubeLinkData,
} from '@stews/domains/music/helpers'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'pl-archive',
    curatorLocation: 'worldwide official',
    curatorStatus: 'dreams dreams dreams...',
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
  musicCurationConfig: {
    curationType: 'music',
    curationViews: [
      {
        viewId: '67ZF',
        viewLabel: 'discography',
        viewFilter: 'collectionType:* AND NOT recordingContext:concert',
      },
      {
        viewId: 'YVFB',
        viewLabel: 'in the now',
        viewFilter: 'recordingContext:concert',
      },
      {
        viewId: 'C0L7',
        viewLabel: 'one time',
        viewFilter: 'sourceType:track',
      },
    ],
    curationItems: [
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
        musicStyles: ['downtempo', 'electronic', 'hip-hop'],
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
        musicStyles: ['downtempo', 'electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicYear: 20010,
        musicTitle: 'Making Up a Changing Mind',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['studio'],
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['heavy', 'soul'],
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
        musicStyles: ['electronic', 'hip-hop', 'soul', 'funk'],
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
        musicStyles: ['downtempo', 'hip-hop', 'soul'],
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
        musicStyles: ['hip-hop', 'soul'],
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
        musicStyles: ['hip-hop', 'dubstep', 'soul'],
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
        musicTitle: 'Unreleased 2010 Remixes',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['studio'],
        musicStyles: ['electronic', 'hip-hop'],
        externalLinks: [
          getYoutubeLinkData({
            youtubeHref:
              'https://www.youtube.com/watch?v=kxS7VgnPeGc&list=PLP7qiRflB78QaFGwy1h0QWIQklcbO5yTX&pp=8AUB',
          }),
          {
            linkLabel: 'pretty lights',
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicTitle: "It's Tricky (remix)",
        musicArtist: ['Pretty Lights', 'Run-DMC'],
        recordingContext: ['studio'],
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
          'https://raw.githubusercontent.com/untitledthumbs/ra_thumbs/main/Frame-12-04-2023-12-04-34.jpeg',
        musicYear: 2015,
        musicTitle: 'Dionysus Break',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['concert'],
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['electronic', 'hip-hop'],
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
        musicTitle: '2016 Flips',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['concert'],
        musicStyles: ['electronic', 'hip-hop'],
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
        musicTitle: '2009 NYE (Midnight At The Vic Theatre)',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['concert'],
        musicStyles: ['electronic', 'hip-hop'],
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
        musicStyles: ['hypnotic', 'electronic'],
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
        musicTitle: 'Beyond Right Now (remix)',
        musicArtist: ['Pretty Lights', 'STS9'],
        recordingContext: ['studio'],
        musicStyles: ['hypnotic', 'electronic'],
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
        musicStyles: ['hip-hop', 'soul'],
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
        musicTitle: 'Country Roads (remix)',
        musicArtist: ['Pretty Lights', 'John Denver'],
        recordingContext: ['studio'],
        musicStyles: ['electronic', 'hip-hop'],
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
        musicTitle: 'Solar Sailer (remix)',
        musicArtist: ['Pretty Lights', 'Daft Punk'],
        recordingContext: ['studio'],
        musicStyles: ['hypnotic', 'electronic'],
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
        musicTitle: 'I Put A Spell on You (remix)',
        musicArtist: ['Pretty Lights', 'Nina Simone'],
        recordingContext: ['studio'],
        musicStyles: ['electronic', 'soul'],
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
        musicTitle: 'Exodus (remix)',
        musicArtist: ['Pretty Lights', 'Bob Marley'],
        recordingContext: ['studio'],
        musicStyles: ['electronic', 'reggae'],
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
        musicStyles: ['electronic', 'rock'],
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
        musicStyles: ['electronic', 'country'],
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
        musicTitle: 'Speaking of Happiness [blacklisted]',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['studio'],
        musicStyles: ['downtempo', 'electronic', 'hip-hop'],
        externalLinks: [
          getYoutubeLinkData({
            youtubeHref: 'https://youtu.be/4sKOVrjsr0Q',
          }),
          getSoundcloudLinkData({
            soundcloudHref:
              'https://soundcloud.com/di-o/5-8-2012-pretty-lights',
          }),
        ],
      },
      {
        itemId: 37,
        musicType: 'source',
        sourceType: 'track',
        musicThumbnailHref:
          'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/GorgePoster.jpeg',
        musicYear: 2017,
        musicTitle: 'Gorge Amphitheatre - 08/04/17',
        musicArtist: ['Pretty Lights', 'Michal Menert', 'Lazer Shark'],
        recordingContext: ['concert'],
        musicStyles: ['electronic', 'hip-hop', 'soul'],
        externalLinks: [
          getYoutubeLinkData({
            youtubeHref: 'https://youtu.be/jyqm9r4YYFA',
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
        sourceType: 'track',
        musicThumbnailHref:
          'https://raw.githubusercontent.com/untitledthumbs/pl_thumbs/main/GorgePoster.jpeg',
        musicYear: 2017,
        musicTitle: 'Gorge Amphitheatre - 08/05/17',
        musicArtist: ['Pretty Lights', 'Lazer Shark'],
        recordingContext: ['concert'],
        musicStyles: ['electronic', 'hip-hop', 'soul'],
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
    ],
  },
}
