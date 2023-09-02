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
          'https://youtu.be/CEIBdiNW5gI?list=OLAK5uy_kiRtxDKp8a2KlgDla3CjXD5CrOmH3i6kk&si=9cez66SINFPO0Zp7',
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
  {
    itemId: 10,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51oIUsOS14L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2014,
    musicTitle: 'Brush',
    musicArtist: ['Manatee Commune'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/manateecommune/sets/brush-933331172',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/33l2A8UO9xbgoBt58PD1kZ?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/brush/882455894',
      }),
    ],
  },
  {
    itemId: 11,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/31rMeDgdhZL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2012,
    musicTitle: "Summer's Gone",
    musicArtist: ['ODESZA'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/odesza/sets/summers-gone',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/93I_iZViT1k?list=OLAK5uy_lGbrhgnYVwzLywKP767u3lNOpZ-Eeq1co&si=fMNj9oE-PkU8rTLL',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0ebTxbNe07spVPn7uxKOb1?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/summers-gone/1140187592',
      }),
    ],
  },
  {
    itemId: 12,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51E62789PXL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'All That Fiberglass',
    musicArtist: ['Blindsmyth'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/alexconnaisseurrecordings/sets/blindsmyth-all-that-fiberglass',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/B3EwwgUDPuo?list=OLAK5uy_mkjCHPRPSjBWORzbqvBC9EFztiPaI2SW4&si=7z_r23p2uuKALEBz',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0HeoSD72gYVQcxTEvxu4lp?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/all-that-fiberglass/1588916016',
      }),
    ],
  },
  {
    itemId: 13,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Aw0Fll99S._UX500_FMwebp_QL85_.jpg',
    musicYear: 2015,
    musicTitle: 'Something in Context',
    musicArtist: ['Neo Geo'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/neogeo/sets/somethingincontext',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/u_GrZnp4Bw4?list=OLAK5uy_mwut7LKPWKoe7-GICp755q2qxs5JkwnvI&si=s03fer9y2vUCI78q',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0157P4y6mOWcQSmnaSwCMd?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/something-in-context-2021-remaster/1565902347',
      }),
    ],
  },
  {
    itemId: 14,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/31CdK0f5z3L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2019,
    musicTitle: 'Wild',
    musicArtist: ['Tourist'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/G3DmWlfDPdc?list=OLAK5uy_nSScZA--InqtGHm7U66T25G5hhmBudzxE&si=xBdAg_rz5-pjs3D6',
      }),
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/touristmusic/sets/wild-821713835',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2oegpcBiGzsD1JBXKZ9nWD?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/wild/1480919558',
      }),
    ],
  },
  {
    itemId: 15,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41nbnwjmBGL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Picture: Innellea',
    musicArtist: ['Innellea'],
    recordingContext: ['studio'],
    musicTags: ['house'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/EGf3fLaNYNE?list=OLAK5uy_mN_ZmbrbOR3MkHQfSKDK3kRUPscgCMpY4&si=owUhigq6HjiZvGhe',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2gxcmUtAmQEE8CmAdoQycx?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/picture-innellea/1680176872',
      }),
    ],
  },
  {
    itemId: 16,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51J3ge3AtLL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2007,
    musicTitle: 'Dandelion Gum',
    musicArtist: ['Black Moth Super Rainbow'],
    recordingContext: ['studio'],
    musicTags: ['psychedelic', 'rock'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/AzgfGGuQBCk?list=OLAK5uy_mi0OOVMC2H3RGrd-HACw1lG7GTj0wEXpQ&si=2ouoHOxdc9wtdgZS',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2Y6tp2sNS5GPr4kIXyIMnU?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/dandelion-gum/1558012599',
      }),
    ],
  },
  {
    itemId: 17,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51W9xjaRXxL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2008,
    musicTitle: 'Late Night Cinema',
    musicArtist: ['Blue Sky Black Death'],
    recordingContext: ['studio'],
    musicTags: ['downtempo', 'hip-hop'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/blueskyblackdeathofficial/sets/late-night-cinema',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/dS3UPs8eMmY?list=OLAK5uy_lmjY4ssCzvTHZLAa8i_andq0YaRqwRbic&si=JCN1K_TXVm7rsTxV',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5OLGAAYCiEnt0Xa22rTSg7?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/late-night-cinema/276904097',
      }),
    ],
  },
  {
    itemId: 18,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41SyXt9HrDL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'SOLACE',
    musicArtist: ['RÜFÜS DU SOL'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/rufusdusol/sets/solace',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/1hwgDgaHoPo?list=OLAK5uy_noJtm1NjTdQL2e6y0umMC7wfr5hTubJS0&si=46kK5cjKcu6YbgGg',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5Jazpq8mEgSgQs06mdwkQd?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/solace/1434579572',
      }),
    ],
  },
  {
    itemId: 19,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51EWNIvl3fL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Drink the Sea',
    musicArtist: ['The Glitch Mob'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/theglitchmob/sets/drink-the-sea',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/cefY0sXQo0U?list=OLAK5uy_noncWAPC1UmvfucH2GXX4s4es550y_14E&si=zyVmtRxoNZ-8vW1R',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4c5fhgLoAaFzwjNTxC57jK?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/drink-the-sea/367738582',
      }),
    ],
  },
]
