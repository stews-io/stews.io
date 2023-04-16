import { MusicCuratorCurationConfig } from '@stews/domains/music/data'
import {
  getAppleLinkData,
  getSpotifyLinkData,
  getYoutubeLinkData,
} from '@stews/domains/music/helpers'

export const musicCurationConfig: MusicCuratorCurationConfig = {
  curationType: 'music',
  curationViews: [
    {
      viewId: 'XUZ8',
      viewLabel: '1990s',
      viewFilter: 'musicYear:[1990 TO 1999]',
    },
    {
      viewId: 'COSZ',
      viewLabel: '2000s',
      viewFilter: 'musicYear:[2000 TO 2009]',
    },
    {
      viewId: 'TE06',
      viewLabel: '2010s',
      viewFilter: 'musicYear:[2010 TO 2019]',
    },
    {
      viewId: '22T8',
      viewLabel: '2020s',
      viewFilter: 'musicYear:[2020 TO 2029]',
    },
    {
      viewId: 'N4RQ',
      viewLabel: 'electronic',
      viewFilter: 'musicTags:electronic',
    },
    {
      viewId: 'Z014',
      viewLabel: 'hip-hop',
      viewFilter: 'musicTags:hip-hop',
    },
    {
      viewId: '0BA4',
      viewLabel: 'jazz',
      viewFilter: 'musicTags:jazz',
    },
    {
      viewId: '0I1O',
      viewLabel: 'rock',
      viewFilter: 'musicTags:rock',
    },
    {
      viewId: '75II',
      viewLabel: 'in the now',
      viewFilter: 'recordingContext:live OR recordingContext:concert',
    },
  ],
  curationItems: [
    {
      itemId: 0,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41lpwGEQvoL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'IC-01 Hanoi',
      musicArtist: ['Unknown Mortal Orchestra'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'jazz', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=pvkk7REuV1E&list=OLAK5uy_nCjQf37f4TiIDL2budDY-NCgch1gRrPH0&pp=8AUB',
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
      itemId: 1,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61XiJrQYpuL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1997,
      musicTitle: 'Premiers Symptômes',
      musicArtist: ['Air'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=tl7dASVOY-U&list=OLAK5uy_ly5-qc6sTJFqfArTGCB9HoBaRZFWWpLMM&pp=8AUB',
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
      itemId: 2,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51ZKa067uhL._UX500_FMwebp_QL85_.jpg',
      musicTitle: 'Live Vol. 1',
      musicYear: 2020,
      musicArtist: ['Parcels'],
      recordingContext: ['live'],
      musicTags: ['disco', 'funk', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=siY7GGocJbY&list=OLAK5uy_lLJK7Z5OSt6XzI7rcgDmeIWpqervk2ycE&pp=8AUB',
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
      itemId: 3,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'compilation',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41WZvHEcbuL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2006,
      musicTitle: "The Best Of What's Around Vol. 01",
      musicArtist: ['Dave Matthews Band'],
      recordingContext: ['studio', 'concert'],
      musicTags: ['jam', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=wILVn4QrNxU&list=OLAK5uy_mnKHdXzQnlF54alv4i-UTCtpxLc-ujwfo&pp=8AUB',
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
      itemId: 4,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51qCkOpjBYL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Blank Face LP',
      musicArtist: ['ScHoolboy Q'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=HFfQ5rXZxBI&list=OLAK5uy_nn39BWFdkmInyIa8zuRv16th53bELbtBQ&pp=8AUB',
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
      itemId: 5,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61LlZokVjxL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2004,
      musicTitle: "Pickin' on Modest Mouse: A Bluegrass Tribute",
      musicArtist: ['Iron Horse', 'Modest Mouse'],
      recordingContext: ['studio'],
      musicTags: ['bluegrass'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=Qbmpx8xumlQ&list=OLAK5uy_lR47WSacINRlobDIqT57PVHE-Hp5FKizg&pp=8AUB',
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
      itemId: 6,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61yiLjG7QQL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: 'Trouble',
      musicArtist: ['Totally Extinct Enormous Dinosaurs'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=wG0YCR-3FYY&list=OLAK5uy_n9kdQogDwJvVlB5KLTebiUjyPQ5TXKxGQ&pp=8AUB',
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
      itemId: 7,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51OoNPSy4IL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'Room 41',
      musicArtist: ['Paul Cauthen'],
      recordingContext: ['studio'],
      musicTags: ['country', 'rock', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=xa2uRlL3zhY&list=OLAK5uy_liodoEz6-VjfyY_RJpJgLW2IMA2Eo-nGc&pp=8AUB',
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
      itemId: 8,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41wnneBCjFL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'Organ Recital',
      musicArtist: ['Bastien Keb'],
      recordingContext: ['studio'],
      musicTags: ['r&b', 'folk', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=PKq1UbpkbRQ&list=OLAK5uy_mZIP4yLMAoq7d2wa8NojzttHzBPuV3PY0&pp=8AUB',
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
      itemId: 9,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61UpX7MWpML._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Filling Up the City Skies - Disc 1',
      musicArtist: ['Pretty Lights'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'hip-hop', 'soul'],
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
      itemId: 10,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://preview.redd.it/t55x4lyak2y51.jpg?auto=webp&s=6cffa2dd89b7bb9f41a7abe3979ab41f93313c72',
      musicYear: 2012,
      musicTitle: 'Bon Iver at AIR studios',
      musicArtist: ['Bon Iver', 'Sean Carey'],
      recordingContext: ['live'],
      musicTags: ['folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/A9Tp5fl18Ho',
        }),
      ],
    },
    {
      itemId: 11,
      musicType: 'source',
      sourceType: 'mix',
      musicThumbnailHref:
        'https://is4-ssl.mzstatic.com/image/thumb/Features125/v4/f4/6b/a9/f46ba999-c102-ea24-7efa-a8e48b43bebd/mza_4437830076440205700.jpg/600x600bb.webp',
      musicYear: 2021,
      musicTitle: 'WhoMadeWho',
      musicArtist: ['WhoMadeWho live at Abu Simbel'],
      recordingContext: ['live'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/BDwAlto-NKU',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/cercle-whomadewho-in-abu-simbel-egypt-live/1585737974',
        }),
      ],
    },
    {
      itemId: 12,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://cdn.albumoftheyear.org/album/55039-in-rainbows-from-the-basement.jpg',
      musicYear: 2008,
      musicTitle: 'In Rainbows From the Basement',
      musicArtist: ['Radiohead', 'Nigel Godrich'],
      recordingContext: ['live'],
      musicTags: ['experimental', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/DWuAn6C8Mfc',
        }),
      ],
    },
    {
      itemId: 13,
      musicType: 'source',
      sourceType: 'mix',
      musicThumbnailHref:
        'https://i1.sndcdn.com/artworks-000484735170-v2qg5l-t500x500.jpg',
      musicYear: 2016,
      musicTitle: 'Nicolás Jaar Presents the Network',
      musicArtist: ['Nicolás Jaar'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'ambient', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/JqjhIrys238',
        }),
        {
          linkLabel: 'soundcloud(1)',
          linkHref:
            'https://soundcloud.com/otherpeoplerecords/nicolas-jaar-presents-the-network-part-1-sept-7-2016',
        },
        {
          linkLabel: 'soundcloud(2)',
          linkHref:
            'https://soundcloud.com/otherpeoplerecords/nicolas-jaar-presents-the-network-part-2-sept-7-2016',
        },
      ],
    },
    {
      itemId: 14,
      musicType: 'clip',
      sourceType: 'mix',
      musicThumbnailHref:
        'https://e.snmc.io/i/1200/s/af23292a9abbba762d6e0d96ffa7eb03/7962041',
      musicYear: 2016,
      musicTitle: 'hip-hop portion - Nicolás Jaar Presents the Network',
      musicArtist: ['Nicolás Jaar'],
      recordingContext: ['studio'],
      musicTags: ['ambient', 'electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=JqjhIrys238&start=7260&end=9320',
        }),
      ],
    },
    {
      itemId: 15,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41BZxoiQn3L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'iridescence',
      musicArtist: ['BROCKHAMPTON'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=8CfWTV5kQUM&list=OLAK5uy_nGAVB_h2YgCbmGLq2I5j3gGXNDdpUkJfI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3Mj4A4nNJzIdxOyS4yzOhj?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/iridescence/1436535889',
        }),
      ],
    },
    {
      itemId: 16,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51NdilLHVTL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Beyond Serious',
      musicArtist: ['Bibio'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=AXljOsLI534&list=OLAK5uy_meOmPY5SdCTsCv6wm6BN0RerkZxW2hfFU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0aPIoyP4acTVSfbd2VgQQF?autoplay=true&source_application=google_assistant',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/beyond-serious-ep/1228243251',
        }),
      ],
    },
    {
      itemId: 17,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/31TJO2-BIvL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2003,
      musicTitle: 'Surrounded',
      musicArtist: ['Tipper'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=O_8w56Cx5NI&list=OLAK5uy_kRf5h8JiqTHMJnHP-KCq_Gpoc-cfCgJ4g&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3wE8r7MmysKGOtVTqm7ac9?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/surrounded/283227098',
        }),
      ],
    },
    {
      itemId: 18,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/413-5cIlSdL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'OOFIE',
      musicArtist: ['Wiki'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=-UYjnTSVy2U&list=OLAK5uy_nwNPu8L9UeH0F6OmbX-7XfOeriSJljt9k&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5Ye9kDYxIZM0LVj1M1CvC6?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/oofie/1486639899',
        }),
      ],
    },
    {
      itemId: 19,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41+Ai+nR7WL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1996,
      musicTitle: 'Entroducing',
      musicArtist: ['DJ Shadow'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=em2aSt_k9eY&list=OLAK5uy_mGy2XHO_iuRHzN_QHcOcz9R5_yowNEp-c&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4wvqGLk1HThPA0b5lzRK2l?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/endtroducing/1448896560',
        }),
      ],
    },
    {
      itemId: 20,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://i.pinimg.com/736x/1c/f5/1c/1cf51c9f6658424cafaf0cd2a9079865.jpg',
      musicYear: 2003,
      musicTitle: 'The Love Below',
      musicArtist: ['Andre 3000', 'Outkast'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://m.youtube.com/watch?v=egKtZBPi1U4&list=OLAK5uy_m3lgBREvjnTGcUIPoD1e1Z1uCVwI5sjeo&index=20',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1UsmQ3bpJTyK6ygoOOjG1r?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/speakerboxxx-the-love-below/281430653',
        }),
      ],
    },
    {
      itemId: 21,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51cFB2HlgsL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Los Angeles',
      musicArtist: ['Flying Lotus'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'experimental', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=ucgLjQ-PFag&list=OLAK5uy_nlsLRecArw04-4_Vo3qGJjlIUYXJ3a8Yc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7pdhnkO0t8HiRv4dmggt2I?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/los-angeles/279977486',
        }),
      ],
    },
    {
      itemId: 22,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51qvf6oULJL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2007,
      musicTitle: 'Alive 2007',
      musicArtist: ['Daft Punk'],
      recordingContext: ['concert'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=lVKbF8khsrI&list=OLAK5uy_ndzMGozj4WUls-asc1dYQ_srOAacIY4yM&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7u6zL7kqpgLPISZYXNTgYk?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/alive-2007-live-deluxe-edition/717067737',
        }),
      ],
    },
    {
      itemId: 23,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41Vjs9jFvwL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Con Todo El Mundo',
      musicArtist: ['Khruangbin'],
      recordingContext: ['studio'],
      musicTags: ['funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=GHzIl82165g&list=OLAK5uy_kuJ7H1aJ5o6nLTCfQVV3rMqUdb4LLZ8U0&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/09AkhNYWocEZWbeYl1YBf7?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/con-todo-el-mundo/1299241642',
        }),
      ],
    },
    {
      itemId: 24,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51ff-TQODYL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1983,
      musicTitle: 'Speaking in Tongues',
      musicArtist: ['Talking Heads'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'new wave'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=_3eC35LoF4U&list=OLAK5uy_nYHzD9LEtWIKxLhNm8OfmtIJ2Pu324MfU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/78MM8HrabEGPLVWaJkM2t1?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/speaking-in-tongues/300202199',
        }),
      ],
    },
    {
      itemId: 25,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61lPDPdkfYL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Witches Stew',
      musicArtist: ['Lettuce'],
      recordingContext: ['live'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=ozy-wuxpg6U&list=OLAK5uy_kpSCH55anM5tIYEjIKdLUAY3RTrvUoceM&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5p0YrSUdEeURL2Ei1WNLZP?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/witches-stew/1292424573',
        }),
      ],
    },
    {
      itemId: 26,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41JbqQVjLkL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Blonde',
      musicArtist: ['Frank Ocean'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'r&b'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=diIFhc_Kzng&list=OLAK5uy_kClWWfWghQXro7ONQ-DfH3RZ1oxiu0kMA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/blonde/1146195596',
        }),
      ],
    },
    {
      itemId: 27,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61l+GoCpryL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Little Dark Age',
      musicArtist: ['MGMT'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=e0QT4N-5PA4&list=OLAK5uy_kBFHQWSR3V3RPeRDSA1JKl_HpHDVgYYEA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7GjVWG39IOj4viyWplJV4H?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/little-dark-age/1334814526',
        }),
      ],
    },
    {
      itemId: 28,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61Zt+yZ1coL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2015,
      musicTitle: 'Choose Your Weapon',
      musicArtist: ['Hiatus Kaiyote'],
      recordingContext: ['studio'],
      musicTags: ['funk', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=25aGMj4C9bI&list=OLAK5uy_mxQdlK-tNsc1GCJG5XZ64I3fQBBt5ijv4&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3qzmmmRmVBiOuMvrerfW4z?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/choose-your-weapon/972218237',
        }),
      ],
    },
    {
      itemId: 29,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51N5HSJz9MS._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Mister Mellow',
      musicArtist: ['Washed Out'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=pW8truBfgiM&list=OLAK5uy_kgLpntHizHSMzb85u4xPEDwVCm3gTINPA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6Rfsivv6DPegVm4oYLeAsm?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/mister-mellow/1243853548',
        }),
      ],
    },
    {
      itemId: 30,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41jm4pUABmL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2015,
      musicTitle: 'STUDIO',
      musicArtist: ['Benny Sings'],
      recordingContext: ['studio'],
      musicTags: ['pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=x5jEUfGbUe8&list=OLAK5uy_kTsALwS42z9SeG0UZ3vVeyEybgmN9S9fI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6lud7M9JXFZ0QHoY2CeYCk?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/studio/1050342885',
        }),
      ],
    },
    {
      itemId: 31,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61V5APQ63eL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Ctrl',
      musicArtist: ['SZA'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'r&b'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=Tiixq9rT_J0&list=OLAK5uy_nc7f_y7E_3cXhJmMkV8yq9CU2iqpnooug&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/76290XdXVF9rPzGdNRWdCh?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/ctrl/1239976329',
        }),
      ],
    },
    {
      itemId: 32,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/4198maCNIwL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1997,
      musicTitle: 'Overcast!',
      musicArtist: ['Atmosphere'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=gogNs2ZY8RM&list=OLAK5uy_l6ka6bY5unpGPgYZhsNDDGRZmLJQGGkL4&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/30qOEMzZYtb5VJYk5cRKxS?si=SFj5Gjh_S3urZBu-4dQlkA?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/overcast/1516916379',
        }),
      ],
    },
    {
      itemId: 33,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41EF0hxIr6L._UX500_FMwebp_QL85_.jpg',
      musicYear: 1996,
      musicTitle: 'The Score',
      musicArtist: ['Fugees'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=CW8buGIi59k&list=OLAK5uy_ljAN3FWIIkF0zqP_32xyMpC5WrheadLAQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4z6F5s3RVaOsekuaegbLfD?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/the-score/281701670',
        }),
      ],
    },
    {
      itemId: 34,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51XQywmFasL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Evil Friends',
      musicArtist: ['Portugal. The Man'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=7brVyb8MomQ&list=OLAK5uy_k1SkzsVL3L_X97PnTRlRJg4GQBRJAWLos&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6VoOCCv0bXPrTHDncJyIgF?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/evil-friends/613557623',
        }),
      ],
    },
    {
      itemId: 35,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61sx5GAnvfL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Flight of the Conchords',
      musicArtist: ['Flight of the Conchords'],
      recordingContext: ['studio'],
      musicTags: ['parody'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=e6oFHWKCcIc&list=OLAK5uy_lmWE5WDOJdEPaDEuFWW78-MsDjeRp5LN8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0YFBrqatMlyDCqqYhhoizO?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/flight-of-the-conchords/278064216',
        }),
      ],
    },
    {
      itemId: 36,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51Jx+T890oL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1967,
      musicTitle: 'The Doors',
      musicArtist: ['The Doors'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=NFeUko-lQHg&list=OLAK5uy_mx98OhRuCf1iPS49rGdS-PxBTvjXdlU6I&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/the-doors/1622368510',
        }),
      ],
    },
    {
      itemId: 37,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51YHX77vkwL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1962,
      musicTitle: 'Le Sacre du Printemps',
      musicArtist: ['Igor Stravinsky'],
      recordingContext: ['live'],
      musicTags: ['atonal', 'classical'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/EkwqPJZe8ms',
        }),
        getSpotifyLinkData({
          spotifyHref: 'https://open.spotify.com/album/4JSlgU7UYZWKuYspYvP00h',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/stravinsky-conducts-le-sacre-du-printemps-rite-spring/257253660',
        }),
      ],
    },
    {
      itemId: 38,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41e6DSuUdDL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2020,
      musicTitle: 'Adult Themes',
      musicArtist: ['El Michels Affair'],
      recordingContext: ['studio'],
      musicTags: ['downtempo'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=aTAxW1ELZpY&list=OLAK5uy_mFc2D3li3lEnZGOa5sPoYsoYdLdgAHSS8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2btMPVa8QYYO6japUqGsZl?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/adult-themes/1497327175',
        }),
      ],
    },
    {
      itemId: 39,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51iY-50F1AL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'No Better Time Than Now',
      musicArtist: ['Shigeto'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=08lCPZrgWJU&list=OLAK5uy_noKjXkmoXHZpg3PiwVvfOYJMIgKMSYdW8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/62tmAcovHK4IMrHxNO3h0s?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/no-better-time-than-now/661873896',
        }),
      ],
    },
    {
      itemId: 40,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41D+IHLrtNL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Whitehouse Road',
      musicArtist: ['Tyler Childers'],
      recordingContext: ['concert'],
      musicTags: ['country'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/WtVrDud1gZM',
        }),
      ],
    },
    {
      itemId: 41,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61XofOaiGNL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2006,
      musicTitle: 'Girlfriend is Better',
      musicArtist: ['Yonder Mountain String Band', 'Talking Heads'],
      recordingContext: ['concert'],
      musicTags: ['bluegrass'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/7Owzmf9vp3E',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/track/0MSvkx1j6loHy3UYTVcLiS?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/girlfriend-is-better/1229254751?i=1229254761',
        }),
      ],
    },
    {
      itemId: 42,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51RMSBoXEEL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2007,
      musicTitle: 'Little Dragon',
      musicArtist: ['Little Dragon'],
      recordingContext: ['studio'],
      musicTags: ['synth', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/dHMs91l4XKU',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/34AtsFexhxnKPVJFtLIN1I?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/little-dragon/258615649',
        }),
      ],
    },
    {
      itemId: 43,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61KSacLEgbL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Tinfoil & Turmoil',
      musicArtist: ['Billy Strings'],
      recordingContext: ['studio'],
      musicTags: ['bluegrass'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=_zcXYg1tv_s&list=OLAK5uy_mUZqe4t8Kj9nBNfFN0xgsfiRSaVt0eza4&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3CKP5G9f93RBbUi73HnyVC?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/turmoil-tinfoil/1285696865',
        }),
      ],
    },
    {
      itemId: 44,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51bVeULg4hL._AC_UY436_QL65_.jpg',
      musicYear: 2015,
      musicTitle: 'Natureboy',
      musicArtist: ['Natureboy Flako'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=lvfbHQ5kNTo&list=OLAK5uy_nDgp2lEchi1x_c3JnF9i9yjQXM2YJvVmk&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6y5l3VyZmHrIabKU0Lrp8n?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/natureboy/962791803',
        }),
      ],
    },
    {
      itemId: 45,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/612eezueHrL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: 'Shark Wolf Rabbit Snake',
      musicArtist: ['Eliot Lipp'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=QByM9Kk14wc&list=OLAK5uy_nA-a4QgGruRJy24mbLh8HkZocpZo_ZM6I&pp=8AUB',
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
      itemId: 46,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51zyZfXjF9L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'The Forever Story',
      musicArtist: ['JID'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=SOdbgUKx-s8&list=PL7FP4DkWGBb5BmcBuFaDjBVEaePMeE866&pp=iAQB8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3QVjpIxcksDkJmOnvlOJjg?si=jO1mnqDaR9aivCY24AnVtQ?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-forever-story/1637738689',
        }),
      ],
    },
    {
      itemId: 47,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51XwxD4CiEL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Golden Hour',
      musicArtist: ['Kacey Musgraves'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'country'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=NC7cmWkBoz4&list=OLAK5uy_kSDZsWub6uFJmTYpR5JhZdtpbp6sQ_Mv0&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7f6xPqyaolTiziKf5R5Z0c?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/golden-hour/1440918116',
        }),
      ],
    },
    {
      itemId: 48,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51ehsnfmZIL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1993,
      musicTitle: 'On the Night',
      musicArtist: ['Dire Straits'],
      recordingContext: ['concert'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=oJXhzVUNMEE&list=OLAK5uy_n-exWbyjA99NNGScaAjNOVLS8HOVWXcGw&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3tybckgVqaIsR5oGnfWKpA?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/on-the-night-remastered-live/1440910981',
        }),
      ],
    },
    {
      itemId: 49,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51lGB1vZOnL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2006,
      musicTitle: '10 000 Days',
      musicArtist: ['Tool'],
      recordingContext: ['studio'],
      musicTags: ['metal'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=h_TUP2vuaDs&list=OLAK5uy_l7KrE4YuWhZsfCdXlLJERHyk4YlwydukA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1fvWYcbjuycyHpzNPH1Vfk?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/10-000-days/1474250650',
        }),
      ],
    },
    {
      itemId: 50,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51ZXbgjtobL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Nü Religion: HYENA',
      musicArtist: ['THEY.'],
      recordingContext: ['studio'],
      musicTags: ['r&b', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=hPdxYIcCuHM&list=OLAK5uy_ly1GjQX6ksVI_JPynYXAssySTmgKsCN0U&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4XNJu6IYQqODqryQy8KjPo?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/nü-religion-hyena/1199639601',
        }),
      ],
    },
    {
      itemId: 51,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51dH2Rh-1sL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Wildflower',
      musicArtist: ['The Avalanches'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'downtempo', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=-Y_akY6-Pgc&list=OLAK5uy_mU6NoiUNrq0gGFf-7y2gR7GXaW2VA-huY&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0j0djiGxLnBiW7meVc2PER?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/wildflower/1440837124',
        }),
      ],
    },
    {
      itemId: 52,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/418It7qCWoL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'Bronco',
      musicArtist: ['Orville Peck'],
      recordingContext: ['studio'],
      musicTags: ['country'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=OoJaV-rqsiU&list=OLAK5uy_kLBv1ZbTasPgNhwBRetBKPuqPxHNyp1Ls&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2hCcPHWTbvF81CiXPUrM6I?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/bronco/1607593873',
        }),
      ],
    },
    {
      itemId: 53,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51JzY2Ksr6L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2010,
      musicTitle: 'Timeless: Suite For Ma Dukes',
      musicArtist: ['Miguel Atwood-Ferguson', 'J Dilla'],
      recordingContext: ['studio'],
      musicTags: ['classical', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=ZS4l3NuSjDM&list=OLAK5uy_mBml-e54liexygnBq2s9lYACv9J_QTzaE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/47TTaPKE8uOi4jiCatDCad?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/timeless-suite-for-ma-dukes/1609098487',
        }),
      ],
    },
    {
      itemId: 54,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51tm8shm6WL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1998,
      musicTitle: 'Roseland NYC Live',
      musicArtist: ['Portishead'],
      recordingContext: ['concert'],
      musicTags: ['downtempo', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=DAFV5RFmY9Y&list=OLAK5uy_mG_O2IZQqda0JOo1RQ9CHDrMjTcD8HJiw&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1Td5bSMxDrTIDAvxJQIo5t?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/roseland-nyc-live/1440913466',
        }),
      ],
    },
    {
      itemId: 55,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61RRvrNYAAL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'We Got It From Here... Thank You 4 Your Service',
      musicArtist: ['A Tribe Called Quest'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=qTrqmNieVKI&list=OLAK5uy_l1UCXPjqeTGO130ZjhMRPrHRaNukHqLZU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3WvQpufOsPzkZvcSuynCf3?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/we-got-it-from-here-thank-you-4-your-service/1173106678',
        }),
      ],
    },
    {
      itemId: 56,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51bxil4Hu2L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2020,
      musicTitle: '2017–2019',
      musicArtist: ['Against All Logic', 'Nicolás Jaar'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=boQGrt3sJDo&list=OLAK5uy_mlZY0r--p4ZD7KKBWjM9S3ecIZMptm3Tc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/75vFTgDgdfVhbniLoyCNKh?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/2017-2019/1496655403',
        }),
      ],
    },
    {
      itemId: 57,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51upfK1l2JL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Anything in Return',
      musicArtist: ['Toro y Moi'],
      recordingContext: ['studio'],
      musicTags: ['synth', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=sod7Ev_o54E&list=OLAK5uy_msQ0hAZIcKla4svG74tee8-KValomznQY&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6x1wyRPGlqGJ1b8uQ9UQdX?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/anything-in-return/1583617153',
        }),
      ],
    },
    {
      itemId: 58,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51BZte7XfeL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Death to the Planet',
      musicArtist: ['The Comet is Coming', 'Shabaka Hutchings'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=g7Px2wK10jg&list=OLAK5uy_kDIyut2vE2O5z0CCn2MyhBhm-ojwP2Bns&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3qFgijcQbTS5frVRo3wt9R?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/death-to-the-planet-ep/1384684762',
        }),
      ],
    },
    {
      itemId: 59,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51TKPzaSFfL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2010,
      musicTitle: 'Palomino',
      musicArtist: ['Trampled By Turtles'],
      recordingContext: ['studio'],
      musicTags: ['bluegrass', 'country'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=vGh-EvmZVCQ&list=OLAK5uy_mEzcfTNRVCifyQ0frr0G7PGD_JouHSD-4&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5sT4iQKiMLVJvOQKPVxn62?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/palomino/370090822',
        }),
      ],
    },
    {
      itemId: 60,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51fK06Sf7PL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1998,
      musicTitle: 'Mezzanine',
      musicArtist: ['Massive Attack', 'Tricky'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=hbe3CQamF8k&list=OLAK5uy_k2Qyv7jShU8WuWSBxfK5r20PZrwb81TPY&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/49MNmJhZQewjt06rpwp6QR?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/mezzanine/724466069',
        }),
      ],
    },
    {
      itemId: 61,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51Eorz17p1L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2001,
      musicTitle: 'Melody A.M.',
      musicArtist: ['Röyksopp'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=5Mcj_YtQhbQ&list=OLAK5uy_nWbm1n0nx7GV9PMjwqdoF9a5MJuA_JBuI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1WHbPhjPCBhjo49DpKvYbL?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/melody-a-m/1049806381',
        }),
      ],
    },
    {
      itemId: 62,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51tuHve4KIL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2005,
      musicTitle: 'Artifact',
      musicArtist: ['STS9'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'jam'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=M2ePKxZ6_QM&list=OLAK5uy_l27tUNcpmHN5RPafx4QHnzfUY6m2GA9CA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5c3Yycwt69IZn6fevjQ0Ky?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/artifact/274859333',
        }),
      ],
    },
    {
      itemId: 63,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51yzWaNgxCL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'obZen',
      musicArtist: ['Meshuggah'],
      recordingContext: ['studio'],
      musicTags: ['metal'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=fsIk5-ab38M&list=OLAK5uy_mgNjCiPvJes7uDGvGD0EtIKJrWNa0Hd_M&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2x2VoPa1pG2jSElA73a9Xa?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/obzen/274547457',
        }),
      ],
    },
    {
      itemId: 64,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51b6CP2xdiL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Isolation',
      musicArtist: ['Kali Uchis'],
      recordingContext: ['studio'],
      musicTags: ['r&b', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=evfM1QDfleM&list=OLAK5uy_mDBx9zKmDyvGMR1obcyOGwq-knkpK7ez8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4EPQtdq6vvwxuYeQTrwDVY?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/isolation/1358285249',
        }),
      ],
    },
    {
      itemId: 65,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'soundtrack',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51GPCRVZO5L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'For Ever',
      musicArtist: ['Jungle'],
      recordingContext: ['studio'],
      musicTags: ['funk', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=Z03ThlGgVFo&list=OLAK5uy_nzsuqiqd2_BIUSjIA9R77yLv_CfWnha7M&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5gYCZgmXzzWXxOCb9fMfBm?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/for-ever/1409552051',
        }),
      ],
    },
    {
      itemId: 66,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/517I+0LWGIL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'I Tell A Fly',
      musicArtist: ['Benjamin Clementine'],
      recordingContext: ['studio'],
      musicTags: ['soul', 'folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=NaevkdTeAb8&list=OLAK5uy_kGWaGiCU6342KcXYWOsXcFgcBzcWkA37I&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1v4zmET7gBMnQ9UTfPatgs?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/i-tell-a-fly/1440883967',
        }),
      ],
    },
    {
      itemId: 67,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61H0B6ZkUCL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2009,
      musicTitle: 'Butter',
      musicArtist: ['Hudson Mohawke'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=bwCKiw7VVa4&list=OLAK5uy_lllYOGq5U_RWH8jEK367eUgoetZIOlKMU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5mM1wM86RvYN7IPwAcyxLR?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/butter/331305005',
        }),
      ],
    },
    {
      itemId: 68,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51pT0R4OFxL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Amygdala',
      musicArtist: ['DJ Koze'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=UMbNfVIN2Bg&list=PLJXDRKQUE7CAwc4ycTxQdEhmHhUMFaiBt&pp=iAQB8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4W6mTFGMa5Zc4lWp7sOifv?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/amygdala/604071430',
        }),
      ],
    },
    {
      itemId: 69,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41+yrqt7VGS._UX500_FMwebp_QL85_.jpg',
      musicYear: 1997,
      musicTitle: 'The Lonesome Crowded West',
      musicArtist: ['Modest Mouse'],
      recordingContext: ['studio'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=VuCXo7Vtrks&list=OLAK5uy_l8YHyFTor9ODe5M80fUoSo5W3Ava4KwRo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5mvHTVy1iUIkAflIufoOpj?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-lonesome-crowded-west/1566174024',
        }),
      ],
    },
    {
      itemId: 70,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41SzxWmko3L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2005,
      musicTitle: 'Prefuse 73 Reads The Books E.P.',
      musicArtist: ['Prefuse 73', 'The Books'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=2CHr63JjgGM&list=OLAK5uy_ljP5OGG4FVLyDdsAW80PnBZHNgl3KOvOA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3NVmiw6v7IGahPrrvVGEAc?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/prefuse-73-reads-the-books/292788233',
        }),
      ],
    },
    {
      itemId: 71,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61a4Emiuf3L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2014,
      musicTitle: 'Our Love',
      musicArtist: ['Caribou'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=sdwXDAitXGs&list=OLAK5uy_k-Homl-MhTJmgWrYh4Vl9LaK1apMwKcK0&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1J9DdlpYK1NxXL6ciqSVoJ?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/our-love/883739153',
        }),
      ],
    },
    {
      itemId: 72,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41E0neZS+mL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Harry Hard-On',
      musicArtist: ['Allan Rayman'],
      recordingContext: ['studio'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=CcRvM_OuRn0&list=OLAK5uy_noItPgVtIYqK5GoaAkjc1tQbZ9tFHKr0A&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1eN0asiUp2OoMuRkI61cmm?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/harry-hard-on/1440609229',
        }),
      ],
    },
    {
      itemId: 73,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51bmAqjAv4L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Danish & Blue',
      musicArtist: ['Lilacs & Champagne'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=NNEYkm7c-jk&list=OLAK5uy_khGVsZgYtss5nGHpgwNNDPylcXbWP4ruc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/75EUlG7J74DW9ocTmJ6sh1?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/danish-blue/1602628444',
        }),
      ],
    },
    {
      itemId: 74,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41s9LnNp5CL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2011,
      musicTitle: 'SBTRKT',
      musicArtist: ['SBTRKT'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=zGGxF7x7-qk&list=OLAK5uy_n5h-Iqdogy6kMId3BriCkKjgr09dgRwto&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4ncktAfHYJlko5yZgqce3H?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/sbtrkt/1573470216',
        }),
      ],
    },
    {
      itemId: 75,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41TZusHUilL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'Grotto',
      musicArtist: ['Wilma Vritra'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=U4GqwMaEasw&list=OLAK5uy_kkbTa04DN2fq6ZttwNDi3CIopqwsmJ4ZY&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/12betAHniGpAyDzg4ty8ER?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/grotto/1610003157',
        }),
      ],
    },
    {
      itemId: 76,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51VmF8pZVZL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'IV',
      musicArtist: ['BADBADNOTGOOD'],
      recordingContext: ['studio'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=CXX-1gNz1ko&list=OLAK5uy_kqhKkmbySqG4EMUgLHLkavMNLOEXmZQKw&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5wAGlQICfKYQfaBppnUbmP?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/iv/1608122086',
        }),
      ],
    },
    {
      itemId: 77,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51Nc7RIH1JL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: "Even If It Isn't Right",
      musicArtist: ['Michal Menert'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=qXeOwKQ7mCk&list=OLAK5uy_mH-IhOeeJOXkDhlSKaR2PQSmZ7lKl79l8&pp=8AUB',
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
      itemId: 78,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/21VT4tYkuGL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2011,
      musicTitle: 'Black Up',
      musicArtist: ['Shabazz Palaces'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=yjOrbNFVnNY&list=OLAK5uy_m4osqPwgG9lghYoipG9XQZbxz6Uop8WIg&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2dNexssEWbK7rgh0veTjjz?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/black-up/669854622',
        }),
      ],
    },
    {
      itemId: 79,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/515FDvfvkbL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'Louie',
      musicArtist: ['Kenny Beats'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=duMX-T4qDm8&list=PLOa7rvaTYe0Z96jY1oifR4AQ_YA9oAbC5&pp=iAQB8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3SKVtzmihlnGFylW5nC5kj?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/louie/1635648979',
        }),
      ],
    },
    {
      itemId: 80,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51cq-0hWQXL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1992,
      musicTitle: 'Rage Against The Machine',
      musicArtist: ['Rage Against The Machine'],
      recordingContext: ['studio'],
      musicTags: ['rock', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=MUaL1FnotRQ&list=OLAK5uy_mG7ndizgcX0QrrKh3zF9lFyU6eFzprgiE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4Io5vWtmV1rFj4yirKb4y4?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/rage-against-the-machine-xx-20th-anniversary-special/578028823',
        }),
      ],
    },
    {
      itemId: 81,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51KDF5v8X1L._UX500_FMwebp_QL85_.jpg',
      musicYear: 1984,
      musicTitle: 'Love Kills',
      musicArtist: ['Freddie Mercury', 'Giorgio Moroder'],
      recordingContext: ['studio'],
      musicTags: ['synth', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/YcgBgJCaC-M',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/track/4HeNuE5fHrBQFErXCdVU7s?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/love-kills-special-edition/1478416229?i=1478416406',
        }),
      ],
    },
    {
      itemId: 82,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61Y8zY9DcBL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: 'Be Strong',
      musicArtist: ['The 2 Bears'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=nOYX5GhPlnA&list=OLAK5uy_noXzslSBp14rG_4GcV90IFNxepFTUXaSY&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0DSCXv8rx9jJgdqZnJ2LH9?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/be-strong/482128355',
        }),
      ],
    },
    {
      itemId: 83,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51dH7OtfXGL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Loaded',
      musicArtist: ['The Wood Brothers'],
      recordingContext: ['studio'],
      musicTags: ['rock', 'blues'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=w8qydN1w4m4&list=OLAK5uy_mm0bQQzoFsaWkr90K_qrnhtVYBWti6ABU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1IOJo40EKOLngOzy09pQMi?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/loaded/721290211',
        }),
      ],
    },
    {
      itemId: 84,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61OfIe4JirL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2005,
      musicTitle: 'Visions of Backbeat',
      musicArtist: ['BoomBox'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=rmqp0RfS-1o&list=OLAK5uy_lmxfos_kLmLAiSr3D8YM9f9uKaKaD9xnU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6lXhc0jECygZK464JIUvRb?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/visions-of-backbeat/152216551',
        }),
      ],
    },
    {
      itemId: 85,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61J5q+6hieL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: '99.9%',
      musicArtist: ['Kaytranada'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=3-0-vDbjdqQ&list=OLAK5uy_lH2xUVNwi41nO_YeXVWSkTcejBwDN2MdE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6JD4Qerb8IcaAzFgpFw0sa?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/99-9/1092026376',
        }),
      ],
    },
    {
      itemId: 86,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/615kPrlw-HL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'Hi This Is Flume',
      musicArtist: ['Flume'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=OfHz4bIaqE8&list=OLAK5uy_mebYgGjMINiO11XqdRUSOHf7i30KuJ4Ns&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2Vx9FC6Um8i6kEtY7HNswB?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/hi-this-is-flume-mixtape/1455360241',
        }),
      ],
    },
    {
      itemId: 87,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51ehbJbCYKS._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Bloom',
      musicArtist: ['Rüfüs Du Sol'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=iuThobnjcc8&list=OLAK5uy_kLHp8BUH2y4BTmLG8Ou7imVSnqEQ01z6k&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/56GSVkl0UZdallOvJuMOaO?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/bloom/1569160808',
        }),
      ],
    },
    {
      itemId: 88,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41OmwgSEy0L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Traditional Synthesizer Music',
      musicArtist: ['Venetian Snares'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=0oJI3vxKZXY&list=OLAK5uy_kY6oiIafXcHlROlDvHDUb4IgwYoGw2sCU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7nqOcV9Ilnrnuzwvq77xn4?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/traditional-synthesizer-music/1063392214',
        }),
      ],
    },
    {
      itemId: 89,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41sMeY50WeL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2015,
      musicTitle: 'Computer Controlled Acoustic Instruments pt2',
      musicArtist: ['Aphex Twin'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=laMkR-fxg6g&list=OLAK5uy_lNgiqMe1FzN7OlTUBG73a39yyzqV8tuBY&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5IUjJ4VcmUvZnGAONAp2IX?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/computer-controlled-acoustic-instruments-pt-2/955440196',
        }),
      ],
    },
    {
      itemId: 90,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/614WuP4jf5L._UX500_FMwebp_QL85_.jpg',
      musicYear: 1999,
      musicTitle: 'Ghetty Green',
      musicArtist: ['Project Pat'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=cpzmsHB0INE&list=OLAK5uy_n0f6DLL-pfoGJamPKFsqo25lR0pvF0rSQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/60dkMXwuRlDMnOis7Y4L2t?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/ghetty-green/413579602',
        }),
      ],
    },
    {
      itemId: 91,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61ouDVI1jBL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Paradise',
      musicArtist: ['Knox Fortune'],
      recordingContext: ['studio'],
      musicTags: ['pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=OgAcUup67Mk&list=OLAK5uy_nGEtbcXMhfXIhpf5n7wMiHzwdhcthin4w&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0yCW3blpXzA0owDGQVQ5xY?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/paradise/1281804676',
        }),
      ],
    },
    {
      itemId: 92,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51gYvSDtu2L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: '24K Magic',
      musicArtist: ['Bruno Mars'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=UqyT8IEBkvY&list=OLAK5uy_nkOzLA76zVCUotP8td84Cvi4I788jjC1s&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4PgleR09JVnm3zY1fW3XBA?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/24k-magic/1161503945',
        }),
      ],
    },
    {
      itemId: 93,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/613wW1S1PsL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2009,
      musicTitle: "Guns Don't Kill People... Lazers Do",
      musicArtist: ['Major Lazer'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'reggae'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=kQsOSkgGwBU&list=OLAK5uy_lsVLUb5HMhJ10EVmUIrJbvhpSoU8cZSxI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/690h3YPCXOCE022G31IUaH?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/guns-dont-kill-people-lazers-do-bonus-track-version/1443153977',
        }),
      ],
    },
    {
      itemId: 94,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61xutJvvOUL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Funk Wav Bounces Vol. 1',
      musicArtist: ['Calvin Harris'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=8Ee4QjCEHHc&list=PLKDRMeFOOHVgv9c0wPQqt_4lDUyWGv5nI&pp=iAQB8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2HaqChIDc5go3qxVunBDK0?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/funk-wav-bounces-vol-1/1233869908',
        }),
      ],
    },
    {
      itemId: 95,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61ry6fRAEqL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2010,
      musicTitle: 'Lucky Shiner',
      musicArtist: ['Gold Panda'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=YexwvQx1ukg&list=OLAK5uy_lnXmxUy2fhwy881e88r2_-4zIeS5WCMBQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2wSMFAWmbsbXCitByPWPLk?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/lucky-shiner/679905330',
        }),
      ],
    },
    {
      itemId: 96,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'ep',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41PZqyDKwYL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Channel Tres',
      musicArtist: ['Channel Tres'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'house'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=1bVl6vCo-4k&list=OLAK5uy_lXO8ouPsTDuM2jpY9R95Gwd1ob7Mbw5NQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/01Vvrmisrvr1YOIGRn4brG?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/channel-tres-ep/1591988570',
        }),
      ],
    },
    {
      itemId: 97,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41TW9snxRgL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Cold Spring Fault Less Youth',
      musicArtist: ['Mount Kimbie'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=c8YPaW3ExNo&list=OLAK5uy_lkJ_5y5TaPnSZto82qlNfRFcIZd2JHWBE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6ETAoJJ5NhxsGyD53cHApT?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/cold-spring-fault-less-youth/627943335',
        }),
      ],
    },
    {
      itemId: 98,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51vMhxO6TrL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2001,
      musicTitle: 'Fahrenheit Fair Enough',
      musicArtist: ['Telefon Tel Aviv'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=9NZZOWC1YJQ&list=OLAK5uy_miDydIpPg4OVMW9EFqiXzX2NL9kUtm1Is&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/27teXombBxDGNa9f5jtOr2?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/fahrenheit-fair-enough/1163911790',
        }),
      ],
    },
    {
      itemId: 99,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41Bt31ZEFqL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'Imagination & the Misfit Kid',
      musicArtist: ['Labrinth'],
      recordingContext: ['studio'],
      musicTags: ['pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=A06rb4QCXz4&list=OLAK5uy_milII0AL66b3Z-LdHfEemlrpwLWSjdcxo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0FSsRH1jeZqKbGcHwq3UO0?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/imagination-the-misfit-kid/1485285334',
        }),
      ],
    },
    {
      itemId: 100,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/416adyFdguS._UX500_FMwebp_QL85_.jpg',
      musicYear: 2006,
      musicTitle: 'Donuts',
      musicArtist: ['J Dilla'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=HOHa6j6Pd5E&list=OLAK5uy_m8VPjbn9rF3ninCB-n_ToxxHH5U3_TkvE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5fMlysqhFE0itGn4KezMBW?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/donuts/108233171',
        }),
      ],
    },
    {
      itemId: 101,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/616fELvttAL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: '"AWAKEN, MY LOVE!"',
      musicArtist: ['Childish Gambino'],
      recordingContext: ['studio'],
      musicTags: ['r&b', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=_hZCsgcKa-g&list=OLAK5uy_lbuUPQuPZcgV0-GZ-1CXsNPWZsTqzNPCM&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4Carzsnpd6yvuHZ49I0oz8?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/awaken-my-love/1450975800',
        }),
      ],
    },
    {
      itemId: 102,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41KLi267rgL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Swimming',
      musicArtist: ['Mac Miller'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=W4ocPPhtglU&list=OLAK5uy_nDheeuXYg9hksmCezWxswPTivVoqyNCQc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/swimming/1408996052',
        }),
      ],
    },
    {
      itemId: 103,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51hNMl0yO2L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2015,
      musicTitle: 'Elaenia',
      musicArtist: ['Floating Points'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=xiVNoKARAQc&list=OLAK5uy_nymiUNxoqFZEzgvf4t0SW8ej2glgpTFRI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/51QBkcL7S3KYdXSSA0zM9R?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/elaenia/1030953710',
        }),
      ],
    },
    {
      itemId: 104,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51OEecp-0yL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2010,
      musicTitle: 'Plastic Beach',
      musicArtist: ['Gorillaz'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=KESIZbP4R8U&list=OLAK5uy_mYzpOFB-6D0ooK-rCL5PuR9zjAxFIV9lo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/plastic-beach/850569437',
        }),
      ],
    },
    {
      itemId: 105,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/319bGSNLyqL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'Amnioverse',
      musicArtist: ['Lapalux'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=4mz_3AL7wzI&list=OLAK5uy_lyUazMI1Dzud6YTMopEEaMoefFQ_F0L80&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0xwvefY0dNUton1yVR6jal?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/amnioverse/1480355473',
        }),
      ],
    },
    {
      itemId: 106,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51C19Sc2SmL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1978,
      musicTitle: 'Ambient 1: Music for Airports',
      musicArtist: ['Brian Eno'],
      recordingContext: ['studio'],
      musicTags: ['ambient', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=LKZ3fGR2SDY&list=OLAK5uy_mfRTetqFB_MtRhjeOxR5tp0uVfK1YH-Sw&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/063f8Ej8rLVTz9KkjQKEMa?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/ambient-1-music-for-airports/724435863',
        }),
      ],
    },
    {
      itemId: 107,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51LBlAoj-DL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Elephant Revival',
      musicArtist: ['Elephant Revival'],
      recordingContext: ['studio'],
      musicTags: ['folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=rI-tgeaAEnc&list=OLAK5uy_lod7nZPYLV_S1fF4PlB_WQgR2yt680jYg&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1Qyc6kxZYssUHELLcImDnX?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/elephant-revival/1133319156',
        }),
      ],
    },
    {
      itemId: 108,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41XDwJZFL0L._UX500_FMwebp_QL85_.jpg',
      musicYear: 1998,
      musicTitle: 'Permutation',
      musicArtist: ['Amon Tobin'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=V4zGRmrG20w&list=OLAK5uy_kzoWUKmY03AQ8TpSRznZOusi-IQX3y5FM&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7jxs0XY2yJS36PZCjUv4Hp?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/permutation/416328412',
        }),
      ],
    },
    {
      itemId: 109,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/515WLLCQOjL._UX500_FMwebp_QL10_.jpg',
      musicYear: 2008,
      musicTitle: 'GEA',
      musicArtist: ['Mia Doi Todd'],
      recordingContext: ['studio'],
      musicTags: ['folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=RDHs_k5Fm2s&list=OLAK5uy_m-_It5NCT_EsFze1o2V0_mKYYtyVnKUNE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6PKJSufT6gVNjQ7dQ5c72V?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/gea/432067242',
        }),
      ],
    },
    {
      itemId: 110,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/416q2EVuheL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2011,
      musicTitle: 'Dive',
      musicArtist: ['Tycho'],
      recordingContext: ['studio'],
      musicTags: ['downtempo'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=SDNA934EEVk&list=OLAK5uy_lkCgIijL5sMC8ks-r6oAlOJXDZMt8mUQI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4CBUbnGFz2iKFJjYqRIwst?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/dive/679251532',
        }),
      ],
    },
    {
      itemId: 111,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51TjcVN952L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2014,
      musicTitle: 'This Is All Yours',
      musicArtist: ['alt-J'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=UCbt_x5K7c8&list=OLAK5uy_k0ZBPQh_nb1yaxillHshHa80jdM2Q96t0&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4oktVvRuO1In9B7Hz0xm0a?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/this-is-all-yours/1625672169',
        }),
      ],
    },
    {
      itemId: 112,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61lb2MMKUuL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: '22, A Million',
      musicArtist: ['Bon Iver'],
      recordingContext: ['studio'],
      musicTags: ['psychedelic', 'folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=ISCEilPMNak&list=OLAK5uy_nwQaP_wXtJiNSkfmaUkQYxY7RztNFtLIU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4bJCKmpKgti10f3ltz6LLl?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/22-a-million/1141107722',
        }),
      ],
    },
    {
      itemId: 113,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/414riTT7KOL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2020,
      musicTitle: 'Heaven To A Tortured Mind',
      musicArtist: ['Yves Tumour'],
      recordingContext: ['studio'],
      musicTags: ['experimental', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=G-9QCsH3OQM&list=OLAK5uy_ke9gfBt56OHmCZr7SONStxmyMKu5zZdqI&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5wnCTZtzIZxasRSHzI1JeW?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/heaven-to-a-tortured-mind/1494929769',
        }),
      ],
    },
    {
      itemId: 114,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/414om-EA5XL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2021,
      musicTitle: 'Sunsetter',
      musicArtist: ['Leisure'],
      recordingContext: ['studio'],
      musicTags: ['pop', 'funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=DpXwAUYlu9A&list=OLAK5uy_kO1qhmbRQWD-9EnC6P0bP1IbQbRuFbm-8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2jzhUfQcf0ypdVTs5eViUU?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/sunsetter/1593348262',
        }),
      ],
    },
    {
      itemId: 115,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51f0-qjHSPL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2011,
      musicTitle: 'Galactic Melt',
      musicArtist: ['Com Truise'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=54HQpe_2p1E&list=OLAK5uy_mBQkB2kJcdmt0pEhNzVCvkJ6au1ROUnyg&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1PSr89gL5T8Ki87t4V5BGZ?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/galactic-melt-10th-anniversary-edition/1593742194',
        }),
      ],
    },
    {
      itemId: 116,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://i.discogs.com/s3FSO_b2zSfYnJZFRHi--gg-Dt5dcw_cizXWg48BviM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyMjMy/ODMtMTQxNDEwNzcy/Ny02NDg3LmpwZWc.jpeg',
      musicYear: 2013,
      musicTitle: 'Studio Sessions From A Color Map of the Sun',
      musicArtist: ['Pretty Lights', 'Joel Hamilton'],
      recordingContext: ['live'],
      musicTags: ['funk', 'soul', 'instrumental'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=q_YrcGRzIE0&list=PLRI0bqhn-VeZz9_SpgRkNMoHF8BsZbXwn&pp=iAQB8AUB',
        }),
        {
          linkLabel: 'soundcloud',
          linkHref:
            'https://soundcloud.com/prettylights/sets/a-color-map-of-the-sun-live',
        },
      ],
    },
    {
      itemId: 117,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61vKtD942xL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1998,
      musicTitle: 'Psyence Fiction',
      musicArtist: ['Unkle'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=MjEzEQdjQec&list=OLAK5uy_nl7mHg_l7FRu7pINT5r348Y2337k9KAcM&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6Dxx0vxLQ83LK1PMZezlcY?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/psyence-fiction/1440922148',
        }),
      ],
    },
    {
      itemId: 118,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61AnhrPSfzL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Cloak',
      musicArtist: ['Jordan Rakei'],
      recordingContext: ['studio'],
      musicTags: ['soul', 'funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=r9n2lKVJPi8&list=OLAK5uy_lpWWJEDKyxBhoJDIj4Jqvn9TtMWQUKgPc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6iuOPJ2AAEdG71e5Y1mDMy?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/cloak/1540037358',
        }),
      ],
    },
    {
      itemId: 119,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61A2MYHIdHL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2009,
      musicTitle: 'Water 4 The Soul',
      musicArtist: ['Gramatik'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'hip-hop', 'funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=3S6u8FHkIeE&list=OLAK5uy_mRl7Fkins6Y3F1l6WXlYvcgjvF0FmUlPw&pp=8AUB',
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
      itemId: 120,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51yUN63IFZL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'French Kiwi Juice',
      musicArtist: ['FKJ'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'jazz', 'funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=wLNxSDYNjQA&list=OLAK5uy_m9VyQofRLP7MOGChiLyrW0ConRAorzVvo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0jJ7mMkCkTe7p9EJgSRxgi?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/french-kiwi-juice/1199108601',
        }),
      ],
    },
    {
      itemId: 121,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61co1M3i09L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2020,
      musicTitle: 'Synchronicity',
      musicArtist: ['WhoMadeWho'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=kBXCB2jTxdA&list=OLAK5uy_ld_sn54tu8SauZbwd1nE1l2B5GhTfgbwU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/51my18W1EFlHAMZf10r5vn?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/synchronicity/1534598303',
        }),
      ],
    },
    {
      itemId: 122,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/31ddLn+yXGL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2007,
      musicTitle: 'Justice',
      musicArtist: ['Justice'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=VKzWLUQizz8&list=PLH3lfNtPhUxjcC11tohb73LKyZFo6v9hB&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5P4Wx3YhpsD4zFTvmPskWd?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/justice/259751732',
        }),
      ],
    },
    {
      itemId: 123,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/511GdjPg8fL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2011,
      musicTitle: 'Collections 01',
      musicArtist: ['Teebs'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=d9eyIpAvANo&list=OLAK5uy_n8o8zzM1VvkMTBhELfpCzuc37Bwzih9u8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6MfmIuNJmgLZ0kGE5ot8vi?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/collections-01/472038029',
        }),
      ],
    },
    {
      itemId: 124,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41du5OP2RVL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'The Far Field',
      musicArtist: ['Future Islands'],
      recordingContext: ['studio'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=5PFZnKYnL1s&list=OLAK5uy_ng4N3XsgdNZashXG2Xl07KP59F_PFc72g&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/37Xk4WSzbCfYBFTHUHgDYv?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-far-field/1195221378',
        }),
      ],
    },
    {
      itemId: 125,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41oq+vfuB8L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: "Tomorrow's Harvest",
      musicArtist: ['Boards of Canada'],
      recordingContext: ['studio'],
      musicTags: ['downtempo', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=RjBJI5WVUCY&list=OLAK5uy_kj-NXH-Dp19sAf08Q04Zkn-bWXMUb-_hk&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/72a7uA2qJvC7sXxvBqmIvz?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/tomorrows-harvest/641229267',
        }),
      ],
    },
    {
      itemId: 126,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/31XkIJsoOYL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2009,
      musicTitle: 'Drift',
      musicArtist: ['Nosaj Thing'],
      recordingContext: ['studio'],
      musicTags: ['electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=vzQP6-II0oE&list=OLAK5uy_mgky2T34Kbdail-Cfmz8ka62izlZzMVFs&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1OQOqtUzBQ7zouOQyhTbLk?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/drift/1499854243',
        }),
      ],
    },
    {
      itemId: 127,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41m+gasD2YL._UX500_FMwebp_QL10_.jpg',
      musicYear: 2010,
      musicTitle: 'My Beautiful Dark Twisted Fantasy',
      musicArtist: ['Kanye West'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=UTH1VNHLjng&list=OLAK5uy_mRFuqe0IIrexXkU7JOxo4rOb0WLEcwuz8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/my-beautiful-dark-twisted-fantasy-deluxe-edition/1440621197',
        }),
      ],
    },
    {
      itemId: 128,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/413i4eHi+yL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'untitled unmastered.',
      musicArtist: ['Kendrick Lamar'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=oIoZgIOgu3o&list=OLAK5uy_ni-4jK_Z1iHKOkLAL1_6wzbnmJi-SXG-8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0kL3TYRsSXnu0iJvFO3rud?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/untitled-unmastered/1440844834',
        }),
      ],
    },
    {
      itemId: 129,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/419g40cERRL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Veteran',
      musicArtist: ['JPEGMAFIA'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=PO3mri47s7M&list=OLAK5uy_ndXRQcfXenF1Uw-0aAIjlJhJSI2fvtp2I&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/51WLEfPEEkzAWurvuY6Gco?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/veteran/1429075456',
        }),
      ],
    },
    {
      itemId: 130,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61linIwAqbL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'Big Fish Theory',
      musicArtist: ['Vince Staples'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=xa4vBlzMaeQ&list=OLAK5uy_n98-iurWG5FdxK2pdV71vltAvY-fzrcHo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5h3WJG0aZjNOrayFu3MhCS?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/big-fish-theory/1440887126',
        }),
      ],
    },
    {
      itemId: 131,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61M1agK-UAL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1998,
      musicTitle: 'Aquemini',
      musicArtist: ['Outkast'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=qxrTf5qAW5Y&list=OLAK5uy_lwzyxndqmZUFugX14sD1uEOw22Lbwq7_c&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/aquemini/266365274',
        }),
      ],
    },
    {
      itemId: 132,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/615MFwjSLxL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Atrocity Exhibition',
      musicArtist: ['Danny Brown'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=cS3xfMAUFMc&list=OLAK5uy_mRg0fag70i_uNV_4XSkw6ueMJzPk4sV18&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3e7vtKJ3m1zVh38VGq2g3H?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/atrocity-exhibition/1142690534',
        }),
      ],
    },
    {
      itemId: 133,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41P7j800n7L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2015,
      musicTitle: "If You're Reading This It's Too Late",
      musicArtist: ['Drake'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=nSf3pBIX2RU&list=OLAK5uy_mzFOUXdaAgjlZjJFNOcXOqMuXVwXUOw0I&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0ptlfJfwGTy0Yvrk14JK1I?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/if-youre-reading-this-its-too-late/1440839718',
        }),
      ],
    },
    {
      itemId: 134,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/418XoY1l0PL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: "Passion, Pain, and Demon Slayin'",
      musicArtist: ['Kid Cudi'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=KzvywmVRWAo&list=OLAK5uy_lWegs8qXAGPC1bpf8uT6lJPOuEV4nRvJQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5bCk3kWAy2JbbTfHqzZCII?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/passion-pain-demon-slayin/1440866929',
        }),
      ],
    },
    {
      itemId: 135,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61IQfmxHsKL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2014,
      musicTitle: 'Piñata',
      musicArtist: ['Freddie Gibbs', 'Madlib'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=V74famrJi5M&list=OLAK5uy_nWgYNwy_If96pi6iiOHTPqJ4JHmuQxs1M&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/43uErencdmuTRFZPG3zXL1?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/piñata/826080165',
        }),
      ],
    },
    {
      itemId: 136,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/518StsD3DYL._UX500_FMwebp_QL10_.jpg',
      musicYear: 1995,
      musicTitle: 'The Infamous',
      musicArtist: ['Mobb Deep'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=q5apUhTJdwE&list=OLAK5uy_nRBW1WQYURvrK2sGYyppRD0urZmMWuC-I&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1cCAb1vN8uUsdfEylVmTLs?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/the-infamous/255342338',
        }),
      ],
    },
    {
      itemId: 137,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51RAO0+buIL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1993,
      musicTitle: 'Enter The Wu-Tang (36 Chambers)',
      musicArtist: ['Wu-Tang Clan'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=Z1IMp9KwNMg&list=OLAK5uy_ndleDeDM1b2BP8QnQFb3FrSAacMZ6s1ms&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3tQd5mwBtVyxCoEo4htGAV?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/enter-the-wu-tang-36-chambers-expanded-edition/269842381',
        }),
      ],
    },
    {
      itemId: 138,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41dOH78jnqL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: 'Blacklisted',
      musicArtist: ['Skepta'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=FyH-QuLSEcM&list=OLAK5uy_lx7sboO8BIrw40JskC50zPciHZV-6c16Y&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1w9JFLfJEGPibnydqQlPAO?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/blacklisted/1493380203',
        }),
      ],
    },
    {
      itemId: 139,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/71L9StkT45L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'At What Cost',
      musicArtist: ['Goldlink'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=3TNMZeFisY0&list=OLAK5uy_m7XvFMv9lIVAUzROJ5lCLbXk2pGpa46Nc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/18JrBX1QkpnUSJF3oxX6RX?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/at-what-cost/1215426121',
        }),
      ],
    },
    {
      itemId: 140,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61jqPZQ7IQL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Double Cup',
      musicArtist: ['DJ Rashad'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=y31HIQuz7J8&list=OLAK5uy_lX-poAvJBtrLW_JSreTbJhGW9Y_8_Ujjw&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/21dsgJBSUM6IvAGFjfotgF?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/double-cup/897998509',
        }),
      ],
    },
    {
      itemId: 141,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51GzjXnSoJL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'IGOR',
      musicArtist: ['Tyler, The Creator'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=6S20mJvr4vs&list=OLAK5uy_mao9YHfZtBBTlxeT138lO0prcGHzNSWQM&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/igor/1463409338',
        }),
      ],
    },
    {
      itemId: 142,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51o30tHym2L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: 'PRETTY GIRLS LIKE TRAP MUSIC',
      musicArtist: ['2 Chainz'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=cugjazbGYgQ&list=OLAK5uy_n6xUHqxPh80G5tZ1iUYQ3oorop6NjEj5A&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5vvvo79z68vWj9yimoygfS?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/pretty-girls-like-trap-music/1440880354',
        }),
      ],
    },
    {
      itemId: 143,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref: 'https://f4.bcbits.com/img/a1983573620_16.jpg',
      musicYear: 2005,
      musicTitle: 'Three Piece Puzzel',
      musicArtist: ['Jneiro Jarel'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/PcWK10DaQL4',
        }),
        {
          linkLabel: 'bandcamp',
          linkHref:
            'https://jneirojarel.bandcamp.com/album/three-piece-puzzle-uk-version',
        },
      ],
    },
    {
      itemId: 144,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51+fQK2Cj+L._UX500_FMwebp_QL85_.jpg',
      musicYear: 1959,
      musicTitle: 'Kind of Blue',
      musicArtist: ['Miles Davis'],
      recordingContext: ['studio'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=ylXk1LBvIqU&list=OLAK5uy_nNowSDRXeotBWkCyljP2pnYkLOvj9CMnA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1weenld61qoidwYuZ1GESA?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/kind-of-blue/268443092',
        }),
      ],
    },
    {
      itemId: 145,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41wQNS4R+AL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1958,
      musicTitle: 'Blue Train',
      musicArtist: ['John Coltrane', 'Rudy Van Gelder'],
      recordingContext: ['studio'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=HT_Zs5FKDZE&list=PLKZWLu6q09LN0kEPS7OkuCoNfnWdDqqRM&pp=iAQB8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2Z11cXWEa2qqYQBGkJrCga?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/blue-train/1468202477',
        }),
      ],
    },
    {
      itemId: 146,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://i.discogs.com/tz4tsa5_pTztKx_mWvRvKp7jZ2YyztvF69PTEmVFlLg/rs:fit/g:sm/q:90/h:600/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzg0/NTAyLTE1NjQ4NDQ1/MTMtMTEwNi5qcGVn.jpeg',
      musicYear: 1959,
      musicTitle: 'Time Out',
      musicArtist: ['Dave Brubeck'],
      recordingContext: ['studio'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=FqPC-BkylxA&list=OLAK5uy_nzNqlLAs3PLitt_FR1-_pO-1Vswhe8ff8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4jEfuEYJ34e3N8AHccUJ7u?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/time-out/193085545',
        }),
      ],
    },
    {
      itemId: 147,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://i.discogs.com/YyhQF7q8v9Fd5g108OTKRDBazdJQTF5KfGa7fukaSs0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1Nzk0/NS0xNjM4MDE0MjMx/LTMxNDIuanBlZw.jpeg',
      musicYear: 1959,
      musicTitle: "Moanin'",
      musicArtist: ['Art Blakey', 'Rudy Van Gelder'],
      recordingContext: ['studio'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=IJLGf8om63g&list=OLAK5uy_nmXv5bzBPXOZ3NKknqdRQZPS4OsFosUY8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7h42sjCPyY31q6sIk52JbX?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/moanin/1459438950',
        }),
      ],
    },
    {
      itemId: 148,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51l4PExv10L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2008,
      musicTitle: 'Actual Factual Pterodactyl',
      musicArtist: ['Homeboy Sandman'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=9hAhUtSo_cs&list=OLAK5uy_mxkjFCnH2TghtjbYERjk0DXkHjKK1s9KU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/1PBIkjzjBSGabsgruRPpaz?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/actual-factual-pterodactyl/287788208',
        }),
      ],
    },
    {
      itemId: 149,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41ATaaJZn6L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2020,
      musicTitle: 'Imaginary Audience',
      musicArtist: ['Mindchatter'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'r&b', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=dVkdlcGvbLw&list=OLAK5uy_n11RbnA-499JA8KZvuaSc2m61ADPbwLV8&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5cupSOKi7oIVsQ1LfpWKqv?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/imaginary-audience/1534035829',
        }),
      ],
    },
    {
      itemId: 150,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://i.discogs.com/mA5Z-COqYtSJ2CkbxL1FlclKyIZVOKYioy1YeKplO-Q/rs:fit/g:sm/q:90/h:600/w:588/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjQy/NTQtMTQ3MTQ3NDc2/Ni0zNDkzLmpwZWc.jpeg',
      musicYear: 1959,
      musicTitle: 'Portrait in Jazz',
      musicArtist: ['Bill Evans'],
      recordingContext: ['studio'],
      musicTags: ['jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=YuuFffOrpGU&list=OLAK5uy_kCi14IYffUedwbnb0nSH50RaMoS8tq7pg&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/093nLQ4H81HusNsFdGS4Or?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/portrait-in-jazz/1440941536',
        }),
      ],
    },
    {
      itemId: 151,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51FEGMzU6nL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'The Man from Waco',
      musicArtist: ['Charley Crockett'],
      recordingContext: ['studio'],
      musicTags: ['cajun', 'country'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=P9Ce1rSdGRY&list=OLAK5uy_ljVZnWy6vv0AYRrdmDX0zl0qnab2b9OeE&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/04BNAzlQVg15tcK7jieje6?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-man-from-waco/1629479107',
        }),
      ],
    },
    {
      itemId: 152,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51MZrKlqyUL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2015,
      musicTitle: 'DS2',
      musicArtist: ['Future'],
      recordingContext: ['studio'],
      musicTags: ['rap', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=W3J9-OvxNpo&list=OLAK5uy_n0UUwQ0J6b5pUhLbzGvGsowXv6i5EGJXA&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/ds2-deluxe/1017053934',
        }),
      ],
    },
    {
      itemId: 153,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/418WshrgALL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2004,
      musicTitle: 'Ratatat',
      musicArtist: ['Ratatat'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=3NFqqUoh3BI&list=OLAK5uy_kcg-bvjRqOWwcUuevJ3FJR5Z7sMnPVDJo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/7nqSnoxmIdcfxAJBxl9AIh?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/ratatat/1540685260',
        }),
      ],
    },
    {
      itemId: 154,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61UWEqlXsrL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2019,
      musicTitle: 'Everything Not Saved Will Be Lost - Part 1',
      musicArtist: ['Foals'],
      recordingContext: ['studio'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=s9DMDulMIz4&list=OLAK5uy_lHrVYnUmTzoxyS_ltzi8T9jJuwK-myu7Q&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6uVaLj0YV3mWRFUw4xJ6eR?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/everything-not-saved-will-be-lost-part-i/1551376342',
        }),
      ],
    },
    {
      itemId: 155,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61a3cnxLbJL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2004,
      musicTitle: 'Official Space Tape',
      musicArtist: ['Kool Keith'],
      recordingContext: ['studio'],
      musicTags: ['left-field', 'rap', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=5_mI0jN1mqY&list=OLAK5uy_lrKI_KkjMoczpTzM6OY_w6vqJP2uNmWDQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/6CwSY8MpOvEf8lPujm6YEL?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/official-space-tape/286565876',
        }),
      ],
    },
    {
      itemId: 156,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41Hknp7zc9L._UX500_FMwebp_QL85_.jpg',
      musicYear: 1996,
      musicTitle: 'All Eyez on Me',
      musicArtist: ['2Pac'],
      recordingContext: ['studio'],
      musicTags: ['rap', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=77nB_9uIcN4&list=OLAK5uy_m9IB94zMFAkv9cTMvr_5bDNET3vnxwuMQ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/78iX7tMceN0FsnmabAtlOC?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/all-eyez-on-me/1588480719',
        }),
      ],
    },
    {
      itemId: 157,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41ERQnawWoL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2007,
      musicTitle: 'Boxer',
      musicArtist: ['The National'],
      recordingContext: ['studio'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=8WRWno_c_W8&list=OLAK5uy_kafrkwlOgNnuXlp3AlIvUuG0i_nF8THTw&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2pwNkShhY1uip80rLMHUgX?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/boxer/220311706',
        }),
      ],
    },
    {
      itemId: 158,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41Wob7wsgpL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2022,
      musicTitle: 'How Can I Make It Ok? – (The Pool Sessions)',
      musicArtist: ['Wolf Alice'],
      recordingContext: ['live', 'studio'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/Jdb8ODEMmb4',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/music-video/how-can-i-make-it-ok-live-the-pool-sessions/1603677296',
        }),
      ],
    },
    {
      itemId: 159,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://pbs.twimg.com/media/DXunE23U8AMfcSg.jpg:medium',
      musicYear: 2018,
      musicTitle: 'Formidable Cool',
      musicArtist: ['Wolf Alice'],
      recordingContext: ['concert'],
      musicTags: ['rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/_ohA_T3n3VA',
        }),
      ],
    },
    {
      itemId: 160,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://i1.sndcdn.com/avatars-xy9z67yMn7B5c6YD-PzVMbw-t500x500.jpg',
      musicYear: 2014,
      musicTitle: 'Burn Them',
      musicArtist: ['Greensky Bluegrass'],
      recordingContext: ['live'],
      musicTags: ['bluegrass'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/KVfX1qiZWEs',
        }),
      ],
    },
    {
      itemId: 161,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://s3.amazonaws.com/bit-photos/large/12504359.jpeg',
      musicYear: 2023,
      musicTitle: 'Big Jet Plane',
      musicArtist: ['Angus Stone', 'Post Malone'],
      recordingContext: ['concert'],
      musicTags: ['folk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/WEIuAB7FTtk',
        }),
      ],
    },
    {
      itemId: 162,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'single',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61GWeClwpkL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Have a Cigar',
      musicArtist: ['Elephant Revival', 'Pink Floyd'],
      recordingContext: ['concert'],
      musicTags: ['folk', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/L0gnM9h-hjs',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/track/3xQ1t0ABHBITfmai3jpU9R?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/have-a-cigar-live-at-red-rocks/1375142322?i=1375142336',
        }),
      ],
    },
    {
      itemId: 163,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://i.discogs.com/Q3qBX3dKw5F9nttCsGpvmPgv4vxz_y9doieYy1aP_40/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1OTQz/Mi0xNDcwNDA5ODQ3/LTg1OTYucG5n.jpeg',
      musicYear: 2003,
      musicTitle: 'The Black Album',
      musicArtist: ['Jay-Z'],
      recordingContext: ['studio'],
      musicTags: ['rap', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=4X8E1hkfGgM&list=PLdH-RUFy-XJXr_XN60gD7Bk-F0KEH4muW&pp=iAQB8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4FWvo9oS4gRgHtAwDwUjiO?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-black-album/1440785433',
        }),
      ],
    },
    {
      itemId: 164,
      musicType: 'source',
      sourceType: 'mix',
      musicThumbnailHref:
        'https://i1.sndcdn.com/artworks-000362632845-thiglr-t500x500.jpg',
      musicYear: 2016,
      musicTitle: 'Contact High Mixtape',
      musicArtist: ['Poolside', 'Misc.'],
      recordingContext: ['studio'],
      musicTags: ['groove', 'alternative'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/fY1IXtyyRp0',
        }),
        {
          linkLabel: 'soundcloud',
          linkHref: 'https://soundcloud.com/poolside/contact-high-mixtape',
        },
      ],
    },
    {
      itemId: 165,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51PRDqUXkVL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Hesitation Marks',
      musicArtist: ['Nine Inch Nails'],
      recordingContext: ['studio'],
      musicTags: ['industrial', 'electronic'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=vXHay7TDLik&list=OLAK5uy_nQmtk2WggYtvlCJzrJKq1ePRGOp5izHc4&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/26m96TIXkNAiL4fl4aiFvd?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/hesitation-marks/655150305',
        }),
      ],
    },
    {
      itemId: 166,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://i1.sndcdn.com/artworks-000505307811-39wbxx-t500x500.jpg',
      musicYear: 2016,
      musicTitle: 'Rule The World',
      musicArtist: ['Michael Kiwanuka'],
      recordingContext: ['live', 'studio'],
      musicTags: ['soul', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/VTPCbmXX4Qw',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/tt/music-video/rule-the-world-live-session/1445140893',
        }),
      ],
    },
    {
      itemId: 167,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://media.pitchfork.com/photos/63bebc39a795af62e49c604a/1:1/w_720,h_720,c_limit/Black-Thought.jpg',
      musicYear: 2023,
      musicTitle: 'Grateful',
      musicArtist: ['Black Thought', 'El Michels Affair'],
      recordingContext: ['live'],
      musicTags: ['rap', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/IgLf2TyuYXc',
        }),
      ],
    },
    {
      itemId: 168,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61r2aLgwH9L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2003,
      musicTitle: 'Grand Champ',
      musicArtist: ['DMX'],
      recordingContext: ['studio'],
      musicTags: ['rap', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=Qy8LChcoBm8&list=OLAK5uy_kAILYwC1vnfqo8oEVqZ_ILjvMHIO85Xps&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0FeqrLI13XnYNY1s414uQd?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/grand-champ/1434896071',
        }),
      ],
    },
    {
      itemId: 169,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51V2HZNGsbL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1981,
      musicTitle: 'Computer Love',
      musicArtist: ['Kraftwerk'],
      recordingContext: ['studio'],
      musicTags: ['electronic', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/CFmmzFcM-MA',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/track/7CZdd0S4WTktuiiARS8pY4?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/computer-love/830083942?i=830083954',
        }),
      ],
    },
    {
      itemId: 170,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51KC4AjeeGL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1973,
      musicTitle: 'Head Hunters',
      musicArtist: ['Herbie Hancock'],
      recordingContext: ['studio'],
      musicTags: ['funk'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=WYRrIBqKsJ4&list=OLAK5uy_m789U0dt-J4aLVd7p-dXJxSfDliep-NT0&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/5fmIolILp5NAtNYiRPjhzA?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/head-hunters/158571524',
        }),
      ],
    },
    {
      itemId: 171,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51fHn-+pMgL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1962,
      musicTitle: 'Soul Bossa Nova',
      musicArtist: ['Quincy Jones'],
      recordingContext: ['studio'],
      musicTags: ['orchestral', 'jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/T5ALPzS0QfQ',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/track/0Jw3cPBXlGnA6DEJrZSTI0?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/soul-bossa-nova/1440871985?i=1440872209',
        }),
      ],
    },
    {
      itemId: 172,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61VZzwX5CoL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Your Queen Is A Reptile',
      musicArtist: ['Sons of Kemet'],
      recordingContext: ['studio'],
      musicTags: ['primal', 'jazz'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=T19IrfO3-LQ&list=OLAK5uy_mdR5-PUuPUSgBH5P9NE3YqHbSIHawdriU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4pxnDGBdoGu88h8ZInX5f5?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/your-queen-is-a-reptile/1440908967',
        }),
      ],
    },
    {
      itemId: 173,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41kxaBE4TsL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'The Silent Partner',
      musicArtist: ['Havoc', 'The Alchemist'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=wYa-CVUjNKw&list=PLHM1MRwUfb-gWiyI5aYq30B6rUayX44x1&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0ZmFxitDMDj0FMBKGY1Rnc?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/the-silent-partner/1095760832',
        }),
      ],
    },
    {
      itemId: 174,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41Q9HD2Ra2L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2013,
      musicTitle: 'Albert Einstein',
      musicArtist: ['Prodigy', 'The Alchemist'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=JyuVc8pV-Pw&list=OLAK5uy_lLGOJgIZnDUaJsYbnQxTBmxGjw5pCSpbc&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0PRSoLxeEZXSvk3Hh606ig?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/albert-einstein-p-mc2-deluxe-edition/1623258631',
        }),
      ],
    },
    {
      itemId: 175,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51Y9a8pQv0L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2017,
      musicTitle: "Rapper's Best Friend 4",
      musicArtist: ['The Alchemist'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=XTvxyK11PvA&list=PLPS9FyI3nqbet4mQJgmioL2TF3kat0CzZ&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/2KcgndSRaT7yKbYPDR3SsZ?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/rappers-best-friend-4-an-instrumental-series/1208654209',
        }),
      ],
    },
    {
      itemId: 176,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51mT-6UU5yS._UX500_FMwebp_QL85_.jpg',
      musicYear: 2016,
      musicTitle: 'Yes Lawd!',
      musicArtist: ['NxWorries', 'Knxwledge', 'Anderson .Paak'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=rrU2P6_VCWw&list=OLAK5uy_meZUV0Bdg_ubTLnVJ9b_fSpdpXaRJCOLo&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0gpxUkqSnLwD50aaRir6jH?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/yes-lawd/1150640159',
        }),
      ],
    },
    {
      itemId: 177,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/5113QCYDPIL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1995,
      musicTitle: 'KRS-One',
      musicArtist: ['KRS-One'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=2z-dn5-4qPc&list=OLAK5uy_maR74vljzUi_hxY7Aa7BKbcnrtxLObE24&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/17C90B1H8gxYa664SSVM9x?autoplay=true',
        }),
        getAppleLinkData({
          appleHref: 'https://music.apple.com/us/album/krs-one/254976930',
        }),
      ],
    },
    {
      itemId: 178,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61uhvrac+sL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1998,
      musicTitle: 'Extinction Level Event: The Final World Front',
      musicArtist: ['Busta Rhymes'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=KGLH8e_dtOQ&list=OLAK5uy_lwtHEgimb2GIy6d-PIQbpFG-4TaPZ97JU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4zb4gmGzDYtlWMjmc1NZWW?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/extinction-level-event-the-final-world-front/322122753',
        }),
      ],
    },
    {
      itemId: 179,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxV5upOQfjettgg6SCciDVa8jF6L7I3F5KA&usqp=CAU',
      musicYear: 2017,
      musicTitle: 'Teardrop',
      musicArtist: ['AURORA', 'Massive Attack'],
      recordingContext: ['live', 'studio'],
      musicTags: ['downtempo', 'electronic', 'pop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/GPTY6l_PX5k',
        }),
      ],
    },
    {
      itemId: 180,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://i1.sndcdn.com/avatars-zXgGs26rSNYeO4eN-HIZ6FA-t500x500.jpg',
      musicYear: 2023,
      musicTitle: 'UMI Says',
      musicArtist: ['Joey Bada$$', 'Mos Def'],
      recordingContext: ['live', 'studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/nP6EoNotPZk',
        }),
      ],
    },
    {
      itemId: 181,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/41vxyDrOCfL._UX500_FMwebp_QL85_.jpg',
      musicYear: 1999,
      musicTitle: 'When The Pawn...',
      musicArtist: ['Fiona Apple'],
      recordingContext: ['studio'],
      musicTags: ['soul', 'rock'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=7c6OVI7MUvs&list=OLAK5uy_nOn6YPJa_ZmbxxdFKFOIpJUJ7o7_UD7ck&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/3o5EnVZNJXtfPV8tCoagjI?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/when-the-pawn-hits-the-conflicts-he-thinks-like-a-king/153019510',
        }),
      ],
    },
    {
      itemId: 182,
      musicType: 'source',
      sourceType: 'track',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51K2gpvDQAL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2018,
      musicTitle: 'Up',
      musicArtist: ['EarthGang'],
      recordingContext: ['live', 'studio'],
      musicTags: ['hip-hop', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref: 'https://youtu.be/zgNVvtOp8mU',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/track/7dEa0aHVVIMTZnDL8OM7yn?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/up-a-colors-show/1483839728?i=1483839734',
        }),
      ],
    },
    {
      itemId: 183,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/61A4jIdyo3L._UX500_FMwebp_QL85_.jpg',
      musicYear: 2005,
      musicTitle: 'Welcom To Jamrock',
      musicArtist: ['Damian Marley'],
      recordingContext: ['studio'],
      musicTags: ['reggae', 'rap', 'soul'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=9Fgp93HIa6I&list=OLAK5uy_lkPJ4TlfxoHe3ICM5VDSXwYVEw8Fjof1Q&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4Y0PrDckfFKxKaVXsscDLB?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/welcome-to-jamrock/1440766268',
        }),
      ],
    },
    {
      itemId: 184,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/519vHU5YGiL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2012,
      musicTitle: 'Eternal Champ',
      musicArtist: ['Sweet Valley'],
      recordingContext: ['studio'],
      musicTags: ['left-field', 'electronic', 'hip-hop'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=2dZUqEBL2qo&list=OLAK5uy_mKdb_NHNzhC3URl9l8q1gVOnV6BX3LvYg&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/4c7iuSPb81diFdaaxed9nV?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/eternal-champ/1513484002',
        }),
      ],
    },
    {
      itemId: 185,
      musicType: 'source',
      sourceType: 'collection',
      collectionType: 'album',
      musicThumbnailHref:
        'https://m.media-amazon.com/images/I/51e2lNiYTxL._UX500_FMwebp_QL85_.jpg',
      musicYear: 2023,
      musicTitle: 'Glorious Game',
      musicArtist: ['El Michels Affair', 'Black Thought'],
      recordingContext: ['studio'],
      musicTags: ['hip-hop', 'soul', 'rap'],
      externalLinks: [
        getYoutubeLinkData({
          youtubeHref:
            'https://www.youtube.com/watch?v=6YX2QMCVZD8&list=OLAK5uy_mY5asfdnOqc208xtc3J7GMcPZQh6r1KmU&pp=8AUB',
        }),
        getSpotifyLinkData({
          spotifyHref:
            'https://open.spotify.com/album/0gsCTUrsjKnfF3TgYkgtEn?autoplay=true',
        }),
        getAppleLinkData({
          appleHref:
            'https://music.apple.com/us/album/glorious-game/1659479903',
        }),
      ],
    },
  ],
}
