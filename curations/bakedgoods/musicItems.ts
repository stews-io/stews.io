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
  {
    itemId: 20,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Vrw9zmLvL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'Telescopic',
    musicArtist: ['SuperVision'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/879DsGDET2s?list=OLAK5uy_n5tAG6nW8Zv60CSvudWq81Ym7OyRI5AEI&si=m4jGGNSdDoPIdSr1',
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
    itemId: 21,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41w6+WAJDdL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Disconnected',
    musicArtist: ['Jan Blomqvist'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/janblomqvist/sets/disconnected-17',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/hrQLPy9q3UM?list=OLAK5uy_kulFyYpwAV7WYz0-PSFJTkjameiTEaL1M&si=FPSJII3lT_Igu00P',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4CN2IioUNoLoInMTVRYNTw?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/disconnected/1436314742',
      }),
    ],
  },
  {
    itemId: 22,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/517myMAgBuL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Laps',
    musicArtist: ['Cassian'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/cassian88/sets/laps-248837761',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/EYGxrWnI-8k?list=OLAK5uy_kn2L8gRupyTv9gwHS1uBpx4H7UfFiJLqU&si=uOrFuA7ffhm_M91A',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5QWoAS89O3VclOrdfGR4If?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/in/album/laps/1700492139',
      }),
    ],
  },
  {
    itemId: 23,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/612rWwXRvkL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2013,
    musicTitle: 'Psychic',
    musicArtist: ['DARKSIDE'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/daftside-2/sets/psychic-6',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/d8NaWT0WvEE?list=OLAK5uy_ltdJgbl5uszkvgxozzfNDmqxh0Th1X5uI&si=s-IRVTMxrJ53Fcsd',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1rnogXkMBXDVzDPFSq4dDe?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/psychic/1589169582',
      }),
    ],
  },
  {
    itemId: 24,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51iyTUN2iTL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2011,
    musicTitle: 'Group Therapy',
    musicArtist: ['Above & Beyond'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/eNvIIJWEOqg?list=OLAK5uy_mKH0tOTZLto8r_fCTuyylnioRyeQ6idh4&si=A3XMZgQLJnsBNsFz',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1u4j72Z4fVMoMDRPfFEE3o?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/group-therapy-bonus-track-version/435967416',
      }),
    ],
  },
  {
    itemId: 25,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51K52iB+3HL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2018,
    musicTitle: 'Through the Walls',
    musicArtist: ['WhoMadeWho'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/90Lm8ZRHLzw?list=OLAK5uy_mgKjBCQPoefI88m2vUhejcTMtOrDcnV5c&si=DbO0ThEj8hjUdalt',
      }),
      getSpotifyLinkData({
        spotifyHref: 'https://open.spotify.com/album/58NWdqyxvKIUlzHEXqfeiv',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/through-the-walls/1299809377',
      }),
    ],
  },
  {
    itemId: 26,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61Kz-w+3qJL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2006,
    musicTitle: 'Taking Up Your Precious Time',
    musicArtist: ['Pretty Lights'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/EAhMAn9O2tA?list=PL070472FFBF08BDD5&si=Gkpmmn1aaoVzsq7q',
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
    itemId: 27,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51NSa23js8L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2017,
    musicTitle: 'Onism',
    musicArtist: ['Photay'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/photay/sets/on-hold-1',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/FGB15JIQoMs?list=OLAK5uy_kE_S-iQRruqu8N2N546cypzfWmZCb5ckk&si=DkzQNizvEpu8w9Lu',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/6lw2Nl3pITEMMuhVFMWKj0?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/onism/1254524399',
      }),
    ],
  },
  {
    itemId: 28,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/21uwfU5MUZL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2015,
    musicTitle: 'Days Gone By',
    musicArtist: ['Bob Moses'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/the-bob-moses/sets/days-gone-by-3',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/OPK67ZvJfuw?list=OLAK5uy_kgyujLM8gTHJzUI2QLqapwutLlx2agOcM&si=QINCw0dr0KTSgOfU',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/0u3Rl4KquP15smujFrgGz4?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/days-gone-by-never-enough-edition/1140193778',
      }),
    ],
  },
  {
    itemId: 29,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/4165vyxrd0L._UX500_FMwebp_QL85_.jpg',
    musicYear: 2014,
    musicTitle: 'Jungle',
    musicArtist: ['Jungle'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/the-bob-moses/sets/days-gone-by-3',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/AoyxL6fpSeM?list=OLAK5uy_l63n9GLY3_cdd5e_Q90ntUTi-6HlI4iFc&si=HKzrGUPVF-wAbkfn',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/5dYCfDcz1KB5E9i2kgWXXr?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/jungle/872853887',
      }),
    ],
  },
  {
    itemId: 30,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/413k3ktbZpL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2008,
    musicTitle: 'Random Album Title',
    musicArtist: ['deadmau5'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/deadmau5/sets/random-album-title-2',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/p2UIBLAMyBc?list=OLAK5uy_njGt-pVkypxo_8ikmtn8bCFPyBGcwU_Qg&si=AgTW2yefXkYV7fyt',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4mcOY3wX8ZISk590p80GCl?autoplay=true',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/random-album-title/1695954713',
      }),
    ],
  },
  {
    itemId: 31,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/611LlS1AcyL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2020,
    musicTitle: 'Light, Dust',
    musicArtist: ['Kerala West'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/keraladust/sets/light-west-1',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/GyqgBkL1IZE?list=PL9fLKewO0NK4o62GQaAyFNbqCm43DSatV&si=LfrJGLsDx7JUwL6T',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2942biAKKQFqcATNWMzsFT?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/ca/album/light-west/1637202272',
      }),
    ],
  },
  {
    itemId: 32,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/41XNFmG0bML._UX500_FMwebp_QL85_.jpg',
    musicYear: 2015,
    musicTitle: 'In Colour',
    musicArtist: ['Jamie xx'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/jamie-xx-official/sets/in-colour-6',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/fyZ8aCHuN-8?list=OLAK5uy_kpSsO-tz6WVsp9QQJBd-oHiZSUL-I1Fn8&si=pMxdtLlmsvkGqPNW',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/2ObJQuucr37qoW0XuWWZVL?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/in-colour/1525506447',
      }),
    ],
  },
  {
    itemId: 33,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51Ql9VM3qeL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2007,
    musicTitle: 'Untrue',
    musicArtist: ['Burial'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/8k_f2QK77ew?list=PL333NRV9w0mXU72yJa3pX7_-QY5nW5i4H&si=LBQM6QvkDMAIIFQF',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/1C30LhZB9I48LdpVCRRYvq?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/untrue/893175779',
      }),
    ],
  },
  {
    itemId: 34,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/51bKB4RJuiL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2022,
    musicTitle: 'Fragments',
    musicArtist: ['Bonobo'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/bonobo/sets/fragments-684225281',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/mlFMIxy1p34?list=OLAK5uy_l01lp9GD95yFBKhB6kVU0RckwwbF_nC0A&si=-wvFlVnbG1TSyByr',
      }),
      getSpotifyLinkData({
        spotifyHref:
          'https://open.spotify.com/album/4KjbNbnTnJ97kZgQkOHr6v?autoplay=true',
      }),
      getAppleLinkData({
        appleHref: 'https://music.apple.com/us/album/fragments/1584968878',
      }),
    ],
  },
  {
    itemId: 35,
    musicType: 'source',
    sourceType: 'collection',
    collectionType: 'album',
    musicThumbnailHref:
      'https://m.media-amazon.com/images/I/61w++SaZzhL._UX500_FMwebp_QL85_.jpg',
    musicYear: 2010,
    musicTitle: 'Dreaming of a Bigger Life',
    musicArtist: ['Michal Menert'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/michalmenert/sets/dreaming-of-a-bigger-life',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://youtu.be/73GQ6PV8Diw?list=OLAK5uy_lW7rHDJqQhSMuNQPfl8j_FBd4ri7FunG8&si=hoPKUj3dNsowLmCr',
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
    itemId: 36,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-1ctqtKi77y5L7zru-swV92g-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Spring 2023 Mixtape',
    musicArtist: ['Lane 8'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/thisneverhappenedlabel/lane-8-spring-2023-mixtape?in=thisneverhappenedlabel/sets/mixes',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/cFy4Mz9yAes?si=x-BVBuETEdMkNYYV',
      }),
      getAppleLinkData({
        appleHref:
          'https://music.apple.com/us/album/lane-8-spring-2023-mixtape-dj-mix/1674666916',
      }),
    ],
  },
  {
    itemId: 37,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-RXIzpSI8SaLMSRUQ-WfnzlA-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Anjunadeep Edition 453',
    musicArtist: ['Natascha Polké'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/anjunadeep/the-anjunadeep-edition-453',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/live/_i3RbSgWMbE?si=egYk_RxC1fZiyDr6',
      }),
    ],
  },
  {
    itemId: 38,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-I3VDRxn2rLiLg7gX-9chejw-t500x500.jpg',
    musicYear: 2022,
    musicTitle: 'Anjunadeep Edition 453',
    musicArtist: ['Nox Vahn'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/anjunadeep/the-anjunadeep-edition-414',
      }),
      getYoutubeLinkData({
        youtubeHref:
          'https://www.youtube.com/live/Ul1hNFGvK4w?si=1P9SJHOB5Yiw4Die',
      }),
    ],
  },
  {
    itemId: 39,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-rZfVGCYmOhmCm1gb-1zE1KQ-t500x500.jpg',
    musicYear: 2021,
    musicTitle: 'Retrograde Mixtape V',
    musicArtist: ['paraleven'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/paraleven/retrograde-mixtape-v?in=paraleven/sets/mixes',
      }),
    ],
  },
  {
    itemId: 40,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000192760625-7374lz-t500x500.jpg',
    musicYear: 2016,
    musicTitle: 'Afterlife Voyage 001',
    musicArtist: ['Tale Of Us'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/taleofus/afterlife-voyage-001?in=afterlifeofc/sets/afterlife-voyage',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/q8EZhJfLwgk?si=-0mUXtYBslQ-sznL',
      }),
    ],
  },
  {
    itemId: 41,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-grSrTAk9tS1WjiVD-WySplw-t500x500.jpg',
    musicYear: 2023,
    musicTitle: 'Rose Ave Radio Ep 21',
    musicArtist: ['Adult Art Club'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/roseavenuerecords/rose-ave-radio-ep-21-adult-art-clubdj-set',
      }),
    ],
  },
  {
    itemId: 42,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-se514UENnKg5Aweg-Igz43A-t500x500.jpg',
    musicYear: 2021,
    musicTitle: 'BBC Essential Mix - 06/25/21',
    musicArtist: ['Enrico Sangiuliano'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/enricosangiuliano/enrico-sangiuliano-bbc-radio-1-essential-mix-june-5th-2021',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/6_avgA02K4U?si=mk4yNUUiY2aGxmAR',
      }),
    ],
  },
  {
    itemId: 43,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000118987822-aeflx6-t500x500.jpg',
    musicYear: 2015,
    musicTitle: 'NO.SLEEP - Mix.09',
    musicArtist: ['ODESZA'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/odesza/nosleep-mix-09?in=odesza/sets/no-sleep&si=aa49be7b8c1549e690164984539f3c8f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/ZFec7NjwoWw?si=xO2JAPXYe5tTUPvB',
      }),
    ],
  },
  {
    itemId: 44,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-ou0yfWR54SjIfzya-QNngkQ-t500x500.jpg',
    musicYear: 2022,
    musicTitle: 'LOST MIRACLE Radio 047',
    musicArtist: ['Sébastien Léger'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/sebastienleger/lost-miracle-radio-047',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/0ZJUocqG4Yg?si=ry94Zf9DqEMwyMS8',
      }),
    ],
  },
  {
    itemId: 45,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-vbHBJoRHVoYTEyUW-W6oT4A-t500x500.jpg',
    musicYear: 2022,
    musicTitle: 'Ad Astra Mix',
    musicArtist: ['Coccolino Deep'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/coccolino-deep/coccolino-deep-ad-astra',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/YF_kgdpkO1w?si=RaO7UHQkEccK7_46',
      }),
    ],
  },
  {
    itemId: 46,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-KiIgK83jRejoScRX-hi3qKQ-t500x500.jpg',
    musicYear: 2021,
    musicTitle: 'Nectar of the Deep',
    musicArtist: ['Local Honey'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/djlocalhoney/nectar-of-the-deep',
      }),
    ],
  },
  {
    itemId: 47,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-FO0dYTzz3wxKXoGT-u1umqw-t500x500.jpg',
    musicYear: 2021,
    musicTitle: 'EMOTIONAL #90',
    musicArtist: ['EMOTIONAL'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/emotionalmusic/emotional-90',
      }),
    ],
  },
  {
    itemId: 48,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-000443794662-fdi55x-t500x500.jpg',
    musicYear: 2018,
    musicTitle: 'The Dig - Winter 2018-2019 Chillout Mix',
    musicArtist: ['Artifakts'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/artifakts/the-dig-18-19',
      }),
    ],
  },
  {
    itemId: 49,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-6eV3WULJnIzpOojV-tarh0A-t500x500.jpg',
    musicYear: 2022,
    musicTitle: 'Jon Gurd Mixtape - January 2022',
    musicArtist: ['Jon Gurd'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/jon-gurd/jon-gurd-mixtape-january-2022',
      }),
    ],
  },
  {
    itemId: 50,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-Xf6fGjL8FeyZ1j16-vSTVqQ-t500x500.jpg',
    musicYear: 2022,
    musicTitle: 'Heart Opener Vol. 12 | PHOENIX RISES',
    musicArtist: ['CRSTO'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref:
          'https://soundcloud.com/crsto/heart-opener-vol-12-phoenix-rises',
      }),
    ],
  },
  {
    itemId: 51,
    musicType: 'source',
    sourceType: 'mix',
    musicThumbnailHref:
      'https://i1.sndcdn.com/artworks-TZXNx7W5sfRSibab-VSSdfQ-t500x500.jpg',
    musicYear: 2020,
    musicTitle: 'Home Sweet Home (the mixtape)',
    musicArtist: ['Polo & Pan'],
    recordingContext: ['studio'],
    musicTags: ['electronic'],
    externalLinks: [
      getSoundcloudLinkData({
        soundcloudHref: 'https://soundcloud.com/polo-pan/home-sweet-home-mix',
      }),
      getYoutubeLinkData({
        youtubeHref: 'https://youtu.be/uxnUeZ8QQYg?si=G_ALl4X9nsUaaWXf',
      }),
    ],
  },
]
