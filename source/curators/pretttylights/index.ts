import { CuratorConfig } from '@stews/data/CuratorConfig'
import {
  getAppleLinkData,
  getSpotifyLinkData,
  getYoutubeLinkData,
} from '@stews/domains/music/helpers'

export const curatorConfig: CuratorConfig = {
  curatorInfo: {
    curatorName: 'pretttylights',
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
        viewFilter: 'collectionType:*',
      },
      // {
      //   viewId: 'U5FX',
      //   viewLabel: 'crew',
      //   viewFilter: '',
      // },
      // {
      //   viewId: 'YVFB',
      //   viewLabel: 'concerts',
      //   viewFilter: '',
      // },
      // {
      //   viewId: '8CY7',
      //   viewLabel: 'flips',
      //   viewFilter: '',
      // },
      // {
      //   viewId: '2UBR',
      //   viewLabel: 'rare teas',
      //   viewFilter: '',
      // },
      // {
      //   viewId: 'Z4PD',
      //   viewLabel: 'moments',
      //   viewFilter: '',
      // },
      // {
      //   viewId: 'Z4PD',
      //   viewLabel: 'pl pre-set',
      //   viewFilter: '',
      // },
    ],
    curationItems: [
      {
        musicId: 0,
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
        musicId: 1,
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
        musicId: 2,
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
        musicId: 3,
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
        musicId: 4,
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
        musicId: 5,
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
        musicId: 6,
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
        musicId: 7,
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
        musicId: 8,
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
        musicId: 9,
        musicType: 'source',
        sourceType: 'collection',
        collectionType: 'single',
        musicThumbnailHref:
          'https://m.media-amazon.com/images/I/51Io0uxkrHL._UX716_FMwebp_QL85_.jpg',
        musicYear: 2011,
        musicTitle: 'I Know the Truth',
        musicArtist: ['Pretty Lights'],
        recordingContext: ['studio'],
        musicStyles: ['dubstep', 'soul'],
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
        musicId: 10,
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
        musicId: 11,
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
        musicId: 12,
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
        musicId: 13,
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
        musicId: 14,
        musicType: 'source',
        sourceType: 'collection',
        collectionType: 'single',
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
              'https://www.youtube.com/watch?v=1xehKUVkoEU&list=PL4F3F7016C211A2EB&pp=iAQB8AUB',
          }),
          {
            linkLabel: 'free zip',
            linkHref:
              'https://www.prettylightslive.com/Download/Unreleased-2010-Remixes.zip',
          },
          {
            linkLabel: 'plm ($0.00)',
            linkHref:
              'https://store.prettylightsmusic.com/products/2010-remixes-download',
          },
        ],
      },
      // {
      //   musicId: 15,
      //   musicType: 'source',
      //   sourceType: 'collection',
      //   collectionType: 'single',
      //   musicThumbnailHref:
      //     'https://cdn.shopify.com/s/files/1/0485/1009/products/plm_unreleasedremixes-476x476_large.jpg?v=1402688585',
      //   musicYear: 2011,
      //   musicTitle: 'Unreleased 2010 Remixes',
      //   musicArtist: ['Pretty Lights'],
      //   recordingContext: ['studio'],
      //   musicStyles: ['electronic', 'hip-hop'],
      //   externalLinks: [
      //     getYoutubeLinkData({
      //       youtubeHref:
      //         'https://www.youtube.com/watch?v=1xehKUVkoEU&list=PL4F3F7016C211A2EB&pp=iAQB8AUB',
      //     }),
      //     {
      //       linkLabel: 'free zip',
      //       linkHref:
      //         'https://www.prettylightslive.com/Download/Unreleased-2010-Remixes.zip',
      //     },
      //     {
      //       linkLabel: 'pretty lights store',
      //       linkHref:
      //         'https://store.prettylightsmusic.com/products/2010-remixes-download',
      //     },
      //   ],
      // },
    ],
  },
}
