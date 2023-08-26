import { SpotItem } from '@stews/domains/spot/data'
import {
  getGoogleLinkData,
  getWebsiteLinkData,
} from '@stews/domains/spot/helpers'

export const spotItems: Array<SpotItem> = [
  {
    itemId: 0,
    spotName: 'bean cycle roasters',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/beancycle.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.beancycleroasters.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'bean cycle roasters',
      }),
    ],
  },
  {
    itemId: 1,
    spotName: 'trailhead tavern',
    spotThumbnailHref:
      'http://images.squarespace-cdn.com/content/v1/561c0a97e4b0a62da65569e1/1444679412825-DSU10JCXH2NGNK9478PO/moosehead.png?format=300w',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'http://www.trailheadtavern.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'trailhead tavern fort collins',
      }),
    ],
  },
  {
    itemId: 2,
    spotName: 'town pump',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/townpump.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'town pump fort collins',
      }),
    ],
  },
  {
    itemId: 3,
    spotName: "hodi's half note",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/hodis.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['music venue', 'bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: "hodi's half note",
      }),
    ],
  },
  {
    itemId: 4,
    spotName: 'silver grill cafe',
    spotThumbnailHref:
      'https://www.silvergrill.com/wp-content/uploads/2020/02/silver-grill.png',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['diner'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.silvergrill.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'silver grill cafe',
      }),
    ],
  },
  {
    itemId: 5,
    spotName: 'choice city butcher & deli',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/choicecity.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['restaurant', 'butcher'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://choicecitybutcher.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'choice city butcher & deli',
      }),
    ],
  },
  {
    itemId: 6,
    spotName: 'brave new wheel',
    spotThumbnailHref:
      'https://static.wixstatic.com/media/3f278e_f39df8b849904b3f8a997262083b35c4~mv2.png',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['bicycle shop'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.bravenewwheel.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'brave new wheel',
      }),
    ],
  },
  {
    itemId: 7,
    spotName: 'equinox brewing',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/equinoxbrewing.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://equinoxbrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'equinox brewing',
      }),
    ],
  },
  {
    itemId: 8,
    spotName: 'wolverine farm publick house',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/wolverine.jpeg',
    spotLocation: ['river district', 'fort collins', 'colorado'],
    spotTags: ['cafe', 'letterpress', 'event space'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.wolverinefarm.org',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'wolverine farm publick house',
      }),
    ],
  },
  {
    itemId: 9,
    spotName: 'foco cafe',
    spotThumbnailHref:
      'https://fortcollinschamber.com/wp-content/uploads/2022/05/fococafe.jpg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['non-profit', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.fococafe.org',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'foco cafe',
      }),
    ],
  },
  {
    itemId: 10,
    spotName: 'the forge publick house',
    spotThumbnailHref:
      'https://images.squarespace-cdn.com/content/v1/573a165786db43d0365d91ca/1565977014340-VIBS2EJFXJAO8VO6JYDR/forge.jpeg?format=2500w',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['tap house', 'bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.theforgepublickhouse.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the forge publick house',
      }),
    ],
  },
  {
    itemId: 11,
    spotName: 'high point bar',
    spotThumbnailHref:
      'http://images.squarespace-cdn.com/content/v1/56464a9ee4b0d770f6df5be4/1467930880912-R0GA8XCGU7X3KOF240NO/high-point-logo-csu.jpg?format=1500w',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.highpointbar.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'high point bar fort collins',
      }),
    ],
  },
  {
    itemId: 12,
    spotName: 'surfside 7',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/surfside.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['bar', 'music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.surfsideseven.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'surfside 7',
      }),
    ],
  },
  {
    itemId: 13,
    spotName: 'aggie theater',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/aggie.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.z2ent.com/aggie-theatre',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'aggie theater',
      }),
    ],
  },
  {
    itemId: 14,
    spotName: 'pizza casbah',
    spotThumbnailHref:
      'https://static.mywebsites360.com/a33b2e6a61fd434190ea0306d9ec5ee3/i/cfdc6d109355467682195440aa81bca1/1/5feFb8zhrk/Layer%201%20%25281%2529.png?dpr=2',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['pizza shop'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.thepizzacasbah.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'pizza casbah',
      }),
    ],
  },
  {
    itemId: 15,
    spotName: "panhandler's pizza",
    spotThumbnailHref:
      'https://static.spotapps.co/web/panhandlerspizza--com/custom/logo_new.png',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['pizza shop'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://panhandlerspizza.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "panhandler's pizza",
      }),
    ],
  },
  {
    itemId: 16,
    spotName: 'the lyric',
    spotThumbnailHref:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68Rns37hGUnaFg4qqlU-9pjGyniUGhFs29WasMSDa1DeAIVudmsmjtS2MhP2PH7oOuoU&usqp=CAU',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['cinema', 'music venue', 'restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.lyriccinema.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the lyric cinema',
      }),
    ],
  },
  {
    itemId: 17,
    spotName: 'cafe mexicali',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/cafemexicali.jpeg',
    spotLocation: ['colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.cafemexicali.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'cafe mexicali',
      }),
    ],
  },
  {
    itemId: 18,
    spotName: 'zwei brewing',
    spotThumbnailHref:
      'https://www.coloradobrewerylist.com/wp-content/uploads/2014/03/zwei.jpg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.zweibrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'zwei brewing',
      }),
    ],
  },
  {
    itemId: 19,
    spotName: 'stodgy brewing company',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/stodgy.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.stodgybrewingcompany.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'stodgy brewing company',
      }),
    ],
  },
  {
    itemId: 20,
    spotName: 'horse & dragon brewing company',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/horsedragon.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.horseanddragonbrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'horse & dragon brewing company',
      }),
    ],
  },
  {
    itemId: 21,
    spotName: 'funkwerks',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/funkwerks.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.funkwerks.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'funkwerks brewery',
      }),
    ],
  },
  {
    itemId: 22,
    spotName: 'purpose brewing and cellars',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/purpose.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.purposebrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'purpose brewing and cellars',
      }),
    ],
  },
  {
    itemId: 23,
    spotName: 'odell brewing company',
    spotThumbnailHref:
      'https://upload.wikimedia.org/wikipedia/en/3/33/Odell_Brewing_Company_logo.png',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.odellbrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'odell brewing',
      }),
    ],
  },
  {
    itemId: 24,
    spotName: 'the fox den: no waste cafe & roastery',
    spotThumbnailHref:
      'https://d2s742iet3d3t1.cloudfront.net/restaurant_service/restaurants/83ed1282-df01-4698-b2b6-86fb124153fb/Restaurant/ce72921b-59ef-4f9b-aede-decbbabf8dbd.png?size=small',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://nowastecoffeeshop.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the fox den: no waste cafe & roastery',
      }),
    ],
  },
  {
    itemId: 25,
    spotName: 'the colorado room',
    spotThumbnailHref:
      'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/tkjuchy3hvnj1xge8mq0',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://thecoloradoroom.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the colorado room',
      }),
    ],
  },
  {
    itemId: 26,
    spotName: 'little bird bakeshop',
    spotThumbnailHref:
      'https://images.squarespace-cdn.com/content/v1/5f453ad417c8f930b05c0f0c/1598372803653-375MSWIWF117ZAOWVOZL/LB-Primary-Full-Color-WEB.png',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['cafe', 'bakery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://thelittlebirdbakeshop.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'little bird bakeshop',
      }),
    ],
  },
  {
    itemId: 27,
    spotName: 'waltzing kangaroo',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/waltzingkangaroo.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://waltzingkangaroo.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'waltzing kangaroo',
      }),
    ],
  },
  {
    itemId: 28,
    spotName: 'yum yum social',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/yumyum.png',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://eatmoreyumyum.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'yum yum social',
      }),
    ],
  },
  {
    itemId: 29,
    spotName: 'road 34 bike shop and tavern',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/road34.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['bar', 'bike shop'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://road34.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'road 34 bike shop and tavern',
      }),
    ],
  },
  {
    itemId: 30,
    spotName: "lucile's creole cafe",
    spotThumbnailHref:
      'https://vrconcierge.com/wp-content/uploads/2021/11/luciles-restaurant-fort-collins-co-logo-1-1.jpg',
    spotLocation: ['colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.luciles.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "lucile's creole cafe",
      }),
    ],
  },
  {
    itemId: 31,
    spotName: 'music city hot chicken',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/musiccity.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.mchcco.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'music city hot chicken',
      }),
    ],
  },
  {
    itemId: 32,
    spotName: 'bawarchi biryanis - fort collins',
    spotThumbnailHref:
      'https://www.pringleapi.com/Documents/eac9e169-c3c7-460b-8e01-863e7a70f9d7/Bawarchi_Biryanis_Logox150.png',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.bawarchifortcollins.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'bawarchi biryanis fort collins',
      }),
    ],
  },
  {
    itemId: 33,
    spotName: 'backyard bird chicken & donuts',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/backyardbird.jpeg',
    spotLocation: ['timnath', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.backyardbirdco.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'backyard bird chicken & donuts',
      }),
    ],
  },
  {
    itemId: 34,
    spotName: 'timnath beerwerks',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/timnathbeerwerks.png',
    spotLocation: ['timnath', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.timnathbeerwerks.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'timnath beerwerks',
      }),
    ],
  },
  {
    itemId: 35,
    spotName: 'high hops brewery',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/highhops.png',
    spotLocation: ['windsor', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.highhopsbrewery.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'high hops brewery',
      }),
    ],
  },
  {
    itemId: 36,
    spotName: 'mash lab brewing & kitchen',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/mashlab.jpeg',
    spotLocation: ['windsor', 'colorado'],
    spotTags: ['brewery', 'restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://mashlabbrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'mash lab brewing',
      }),
    ],
  },
  {
    itemId: 37,
    spotName: 'windsor mill tavern',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/windsormill.png',
    spotLocation: ['windsor', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://windsormilltavern.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'windsor mill tavern',
      }),
    ],
  },
  {
    itemId: 38,
    spotName: 'grimm brothers brewhouse',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/grimmbrothers.png',
    spotLocation: ['loveland', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://grimmbrosbrewhouse.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'grimm brothers brewhouse',
      }),
    ],
  },
  {
    itemId: 39,
    spotName: 'verboten brewing & barrel project',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/verboten.png',
    spotLocation: ['loveland', 'colorado'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://verbotenbrewing.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'verboten brewing & barrel project',
      }),
    ],
  },
  {
    itemId: 40,
    spotName: 'dark heart coffee bar',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/darkheart.png',
    spotLocation: ['loveland', 'colorado'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.darkheartcoffeebar.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'dark heart coffee bar',
      }),
    ],
  },
  {
    itemId: 41,
    spotName: 'the welsh rabbit bistro',
    spotThumbnailHref:
      'https://images.squarespace-cdn.com/content/v1/58adcc2a1b10e34e35111e96/f3602fd5-40ff-4446-a22a-cf8cb04a7ec6/Shop%2B%282%29.jpg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.thewelshrabbit.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the welsh rabbit bistro',
      }),
    ],
  },
  {
    itemId: 42,
    spotName: 'the still whiskey steaks',
    spotThumbnailHref:
      'https://static.spotapps.co/website_images/ab_websites/71713_website/logo.png',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref:
          'https://thestillwhiskeysteaks.com/fort-collins-old-town-the-still-whiskey-steaks-food-menu',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the still whiskey steaks',
      }),
    ],
  },
  {
    itemId: 43,
    spotName: "avogadro's number",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/avogadros.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant', 'music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.avogadros.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "avogadro's number fort collins",
      }),
    ],
  },
  {
    itemId: 44,
    spotName: 'the mishawaka',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/themishawaka.jpeg',
    spotLocation: ['bellvue', 'colorado'],
    spotTags: ['music venue', 'restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.themishawaka.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the mishawaka amphitheatre',
      }),
    ],
  },
  {
    itemId: 45,
    spotName: 'big city burrito',
    spotThumbnailHref:
      'https://img.cdn4dd.com/p/fit=contain,width=200,height=200,format=auto,quality=95/media/restaurant/cover_square/b7a93d3b-5dc4-490b-b0c5-f6584e876548.png',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.bigcityburrito.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'big city burrito',
      }),
    ],
  },
  {
    itemId: 46,
    spotName: 'village smithy',
    spotThumbnailHref:
      'https://villagesmithy.com/wp-content/uploads/2016/07/VS_Logo_Carbondale_OL.png',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.villagesmithy.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'village smithy',
      }),
    ],
  },
  {
    itemId: 47,
    spotName: 'silo',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/bonfire.jpeg',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.silocarbondale.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'silo carbondale',
      }),
    ],
  },
  {
    itemId: 48,
    spotName: 'bonfire coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/bonfire.png',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.bonfirecoffee.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'bonfire coffee carbondale',
      }),
    ],
  },
  {
    itemId: 49,
    spotName: 'white house pizza',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/whitehousepizza.png',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.whitehousepizza.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'white house pizza',
      }),
    ],
  },
  {
    itemId: 50,
    spotName: 'allegria',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/allegria.jpeg',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.allegriacarbondale.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'allegria carbondale',
      }),
    ],
  },
  {
    itemId: 51,
    spotName: 'dos gringos burritos',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/brassanvil.jpeg',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'http://www.dosgringosburritos.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'dos gringos carbondale',
      }),
    ],
  },
  {
    itemId: 52,
    spotName: 'brass anvil',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/brassanvil.png',
    spotLocation: ['carbondale', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.brassanvilcarbondale.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'brass anvil carbondale',
      }),
    ],
  },
  {
    itemId: 53,
    spotName: 'propaganda pie',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/propagandapie.jpeg',
    spotLocation: ['redstone', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.propagandapie.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'propaganda pie redstone',
      }),
    ],
  },
  {
    itemId: 54,
    spotName: 'the white house tavern',
    spotThumbnailHref:
      'https://i0.wp.com/resortworkers.com/wp-content/uploads/2017/06/The-White-House-Tavern-1.png?w=680&ssl=1',
    spotLocation: ['aspen', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.aspenwhitehouse.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the white house tavern aspen',
      }),
    ],
  },
  {
    itemId: 55,
    spotName: 'belly up - aspen',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/bellyup.jpeg',
    spotLocation: ['aspen', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.bellyupaspen.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the belly up aspen',
      }),
    ],
  },
  {
    itemId: 56,
    spotName: 'the regional',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/theregional.jpeg',
    spotLocation: ['old town', 'fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.theregionalfood.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the regional fort collins',
      }),
    ],
  },
  {
    itemId: 57,
    spotName: 'dillon amphitheater',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/dillon.jpeg',
    spotLocation: ['dillon', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.dillonamphitheater.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'dillon amphitheater',
      }),
    ],
  },
  {
    itemId: 58,
    spotName: 'red rocks amphitheater',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/redrocks.png',
    spotLocation: ['morrison', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.redrocksonline.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'red rocks amphitheater',
      }),
    ],
  },
  {
    itemId: 59,
    spotName: 'telluride town park & campground',
    spotThumbnailHref:
      'https://ams.allmountainsigns.com/wp-content/uploads/2020/08/logo-telluride.png',
    spotLocation: ['telluride', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.telluride.com/business/telluride-town-park',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'telluride town park & campground',
      }),
    ],
  },
  {
    itemId: 60,
    spotName: 'sheridan opera house',
    spotThumbnailHref:
      'https://imagecdn.mightycause.com/b4a1ed63-73cb-4a3d-8ef6-2ba2b5327c31/-/overlay/1b39c48a-d462-46f7-ba12-abb47e287a2a/80px80p/center/',
    spotLocation: ['telluride', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://sheridanoperahouse.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'sheridan opera house',
      }),
    ],
  },
  {
    itemId: 61,
    spotName: 'the ogden theater',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/theogden.jpeg',
    spotLocation: ['denver', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.ogdentheatre.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the ogden theater',
      }),
    ],
  },
  {
    itemId: 62,
    spotName: 'fillmore auditorium - denver',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/fillmoredenver.jpeg',
    spotLocation: ['denver', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'http://www.fillmoreauditorium.org',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'fillmore auditorium denver',
      }),
    ],
  },
  {
    itemId: 63,
    spotName: 'boulder theater',
    spotThumbnailHref:
      'https://thevendry.com/cdn-cgi/image/format=auto,width=240/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24986%2F1669894977199_df5281e9-cf09-4049-b98c-52ad1ff72a35.jpg',
    spotLocation: ['boulder', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.z2ent.com/boulder-theater-venue',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'boulder theater',
      }),
    ],
  },
  {
    itemId: 64,
    spotName: "cervantes' masterpiece ballroom",
    spotThumbnailHref:
      'https://pbs.twimg.com/profile_images/1529170228466200576/-jhrX-Sw_400x400.jpg',
    spotLocation: ['denver', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://cervantesmasterpiece.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'cervantes masterpiece ballroom',
      }),
    ],
  },
  {
    itemId: 65,
    spotName: 'gothic theatre',
    spotThumbnailHref:
      'https://thevendry.com/cdn-cgi/image/height=400,width=400,fit=contain,metadata=none/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fuploads.thevendry.co%2F24985%2F1666988814627_07f59c25-0657-4004-88f1-20f4b7f7f200.jpg',
    spotLocation: ['denver', 'colorado'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.gothictheatre.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'gothic theatre',
      }),
    ],
  },
  {
    itemId: 66,
    spotName: 'tortilleria las 4 americas',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/las4americas.jpeg',
    spotLocation: ['fort collins', 'colorado'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.las4americas.com/tortilleria-las-4-americans',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'tortilleria las 4 americas',
      }),
    ],
  },
  {
    itemId: 67,
    spotName: 'the wormhole coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/wormhole.jpeg',
    spotLocation: ['chicago', 'illinos'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.thewormhole.us',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the wormhole coffee',
      }),
    ],
  },
  {
    itemId: 70,
    spotName: 'damen tavern',
    spotThumbnailHref:
      'https://pbs.twimg.com/profile_images/920684258326450176/J_LfJCOM_400x400.jpg',
    spotLocation: ['chicago', 'illinos'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.damentavern.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'damen tavern',
      }),
    ],
  },
  {
    itemId: 71,
    spotName: 'bikes & coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/bikescoffee.jpeg',
    spotLocation: ['woodbridge', 'detroit', 'michigan'],
    spotTags: ['coffee', 'bike shop'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'bikes and coffee detroit',
      }),
    ],
  },
  {
    itemId: 72,
    spotName: 'lagerhaus no. 5',
    spotThumbnailHref:
      'https://assets.untappd.com/site/brewery_logos_hd/brewery-467763_a986c_hd.jpeg',
    spotLocation: ['eastern market', 'detroit', 'michigan'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.lagerhausno5.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'lagerhaus no. 5',
      }),
    ],
  },
  {
    itemId: 73,
    spotName: 'gryphon coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/gryphon.png',
    spotLocation: ['philadelphia', 'pennsylvania'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://gryphoncoffee.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'gryphon coffee',
      }),
    ],
  },
  {
    itemId: 74,
    spotName: 'evil genius',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/evilgenius.png',
    spotLocation: ['fishtown', 'philadelphia', 'pennsylvania'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://evilgeniusbeer.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'evil genius beer company',
      }),
    ],
  },
  {
    itemId: 75,
    spotName: 'brooklyn bowl - philadelphia',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/brooklynbowlphil.jpeg',
    spotLocation: ['fishtown', 'philadelphia', 'pennsylvania'],
    spotTags: ['music venue', 'bowling alley'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.brooklynbowl.com/philadelphia',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'brooklyn bowl philadelphia',
      }),
    ],
  },
  {
    itemId: 76,
    spotName: 'malelani cafe',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/malelani.jpeg',
    spotLocation: ['germantown', 'philadelphia', 'pennsylvania'],
    spotTags: ['cafe', 'restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://malelani.cafe',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'malelani cafe',
      }),
    ],
  },
  {
    itemId: 77,
    spotName: 'love & honey fried chicken',
    spotThumbnailHref:
      'https://media.licdn.com/dms/image/C4E0BAQH_-nP24iYLtA/company-logo_200_200/0/1677595896828?e=1700697600&v=beta&t=-507EJ0Y-f8B_VtiNUO0kQz43k_hPiyKLgDYPep6faM',
    spotLocation: ['philadelphia', 'pennsylvania'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.loveandhoneyfriedchicken.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'love and honey fried chicken',
      }),
    ],
  },
  {
    itemId: 78,
    spotName: 'evil twin brewing',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/eviltwin.jpeg',
    spotLocation: ['DUMBO', 'brooklyn', 'new york'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://eviltwin.nyc',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'evil twin brewing',
      }),
    ],
  },
  {
    itemId: 79,
    spotName: "david's brisket house",
    spotThumbnailHref:
      'https://davidsbriskethouse.com/wp-content/uploads/2021/03/davids-brisket-house_dark.png',
    spotLocation: ['brooklyn', 'new york'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://davidsbriskethouse.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "david's brisket house",
      }),
    ],
  },
  {
    itemId: 80,
    spotName: 'captain dan\'s "good time" tavern',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/captaindans.jpeg',
    spotLocation: ['brooklyn', 'new york'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://captdansgoodtimetavern.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "captain dan's good time tavern",
      }),
    ],
  },
  {
    itemId: 81,
    spotName: 'emerald city bagels',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/emeraldcity.png',
    spotLocation: ['atlanta', 'georgia'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.emeraldcitybagels.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'emerald city bagels',
      }),
    ],
  },
  {
    itemId: 82,
    spotName: 'chrome yellow trading co.',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/chromeyellow.jpeg',
    spotLocation: ['old fourth ward', 'atlanta', 'georgia'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://chrome-yellow.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'chrome yellow trading co.',
      }),
    ],
  },
  {
    itemId: 83,
    spotName: 'edgewood pizzeria',
    spotThumbnailHref:
      'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/vxcwxhyfqtkwmnr8kdv6',
    spotLocation: ['old fourth ward', 'atlanta', 'georgia'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://edgewoodpizzeria.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'edgewood pizzeria',
      }),
    ],
  },
  {
    itemId: 84,
    spotName: 'handlebar atl',
    spotThumbnailHref:
      'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/vnkmhl34mrfaa2h0mphg',
    spotLocation: ['old fourth ward', 'atlanta', 'georgia'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://handlebar-atl.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'handlebar atl',
      }),
    ],
  },
  {
    itemId: 85,
    spotName: "madame vic's",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/madamevics.jpeg',
    spotLocation: ['new orleans', 'louisiana'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://madamevics.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "madame vic's",
      }),
    ],
  },
  {
    itemId: 86,
    spotName: 'st. roch market',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/stroch.png',
    spotLocation: ['new orleans', 'louisiana'],
    spotTags: ['food hall'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.strochmarket.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'st roch market',
      }),
    ],
  },
  {
    itemId: 87,
    spotName: 'mardi gras world',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/mardigrasworld.jpeg',
    spotLocation: ['new orleans', 'louisiana'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://mardigrasworld.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'mardi gras world',
      }),
    ],
  },
  {
    itemId: 88,
    spotName: 'catalina coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/catalinacoffee.png',
    spotLocation: ['houston', 'texas'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.catalinacoffeeshop.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'catalina coffee',
      }),
    ],
  },
  {
    itemId: 89,
    spotName: 'red ash italia',
    spotThumbnailHref:
      'http://images.squarespace-cdn.com/content/v1/56f0111422482e2ea032f239/1471580094092-HZ53NCVSWSUT88M5DND2/REDASH_logo.png?format=1500w',
    spotLocation: ['austin', 'texas'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.redashgrill.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'red ash italia',
      }),
    ],
  },
  {
    itemId: 90,
    spotName: "frazier's long and low",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/fraziers.jpeg',
    spotLocation: ['austin', 'texas'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.fraziersbar.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "frazier's long and low",
      }),
    ],
  },
  {
    itemId: 91,
    spotName: 'el tacorrido',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/eltacorrido.png',
    spotLocation: ['austin', 'texas'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.eltacorrido.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'el tacorrido',
      }),
    ],
  },
  {
    itemId: 92,
    spotName: 'jester king brewery',
    spotThumbnailHref:
      'https://lh3.googleusercontent.com/3aX5DpF_C7HjnECccDYP0Si1V5SAJ2hHrRr825aIkOE6XIa8TOY3P-lBEQ-h6dgOZUqn1s4YdP3d3Bc4V883gQ5rfWvt=s750',
    spotLocation: ['austin', 'texas'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://jesterkingbrewery.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'jester king brewery',
      }),
    ],
  },
  {
    itemId: 93,
    spotName: 'paperboy',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/paperboy.jpeg',
    spotLocation: ['austin', 'texas'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.paperboyaustin.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'paperboy austin',
      }),
    ],
  },
  {
    itemId: 94,
    spotName: 'veracruz all natural',
    spotThumbnailHref:
      'https://www.thelinehotel.com/wp-content/uploads/sites/4/2022/03/14154411/veracruz_logo.png',
    spotLocation: ['austin', 'texas'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://veracruzallnatural.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'veracruz all natural',
      }),
    ],
  },
  {
    itemId: 95,
    spotName: 'fleet coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/fleetcoffee.jpeg',
    spotLocation: ['austin', 'texas'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'http://www.fleetcoffee.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'fleet coffee',
      }),
    ],
  },
  {
    itemId: 96,
    spotName: 'easy tiger',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/easytiger.jpeg',
    spotLocation: ['austin', 'texas'],
    spotTags: ['restaurant', 'bakery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.easytigerusa.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'easy tiger austin',
      }),
    ],
  },
  {
    itemId: 97,
    spotName: 'oscars mexican seafood',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/oscarspb.jpeg',
    spotLocation: ['pacific beach', 'san diego', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://oscarsmexicanseafood.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'oscars pacific beach',
      }),
    ],
  },
  {
    itemId: 98,
    spotName: 'homestyle hawaiian',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/homestylehawaiian.jpeg',
    spotLocation: ['pacific beach', 'san diego', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://homestylehawaiian.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'homestyle hawaiian',
      }),
    ],
  },
  {
    itemId: 99,
    spotName: 'coffee cycle roasting',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/coffeecyclepb.jpeg',
    spotLocation: ['pacific beach', 'san diego', 'california'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.coffeecycleroasting.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'coffee cycle roasting',
      }),
    ],
  },
  {
    itemId: 100,
    spotName: 'fall brewing company',
    spotThumbnailHref:
      'https://www.fallbrewingcompany.com/wp-content/uploads/2018/05/fall_red-dotlogo.png',
    spotLocation: ['north park', 'san diego', 'california'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.fallbrewingcompany.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'fall brewing company',
      }),
    ],
  },
  {
    itemId: 101,
    spotName: 'bobboi gelato',
    spotThumbnailHref:
      'https://i1.wp.com/bobboi.com/wp-content/uploads/2019/03/logo350.png?w=1200&ssl=1',
    spotLocation: ['la jolla', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://bobboi.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'bobboi natural gelato',
      }),
    ],
  },
  {
    itemId: 102,
    spotName: "caroline's seaside cafe",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/carolinesseaside.jpeg',
    spotLocation: ['la jolla', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://carolinesseasidecafe.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "caroline's seaside cafe",
      }),
    ],
  },
  {
    itemId: 103,
    spotName: 'viejas arena',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/viejasarena.jpeg',
    spotLocation: ['san diego', 'california'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://as.sdsu.edu/viejas_arena',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'viejas arena',
      }),
    ],
  },
  {
    itemId: 104,
    spotName: 'lodge room',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/lodgeroom.jpeg',
    spotLocation: ['los angeles', 'california'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.lodgeroomhlp.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'lodge room',
      }),
    ],
  },
  {
    itemId: 105,
    spotName: 'matsuri',
    spotThumbnailHref:
      'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/kptondeebfuu8js0awun',
    spotLocation: ['pasadena', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'matsuri pasadena',
      }),
    ],
  },
  {
    itemId: 106,
    spotName: 'los angeles state historic park',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/lahistoric.png',
    spotLocation: ['los angeles', 'california'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://lastatehistoricpark.org',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'los angeles state historic park',
      }),
    ],
  },
  {
    itemId: 107,
    spotName: 'the semi-tropic',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/thesemitropic.jpeg',
    spotLocation: ['echo park', 'los angeles', 'california'],
    spotTags: ['restaurant', 'bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://thesemitropic.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the semi-tropic',
      }),
    ],
  },
  {
    itemId: 108,
    spotName: "fambrini's cafe",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/fambriniscafe.jpeg',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.fambriniscafe.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "fambrini's cafe",
      }),
    ],
  },
  {
    itemId: 109,
    spotName: 'zombie runner coffee',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/zombierunner.jpeg',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['coffee', 'shoe store'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.zombierunner.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'zombie runner coffee',
      }),
    ],
  },
  {
    itemId: 110,
    spotName: "zareen's",
    spotThumbnailHref:
      'https://images-platform.99static.com/Z3uYs4zpOwMeMZ-TErdpjVK1T6U=/0x0:1057x1057/500x500/top/smart/99designs-contests-attachments/94/94356/attachment_94356138',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.zareensrestaurant.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "zareen's palo alto",
      }),
    ],
  },
  {
    itemId: 111,
    spotName: "izzy's brooklyn bagels",
    spotThumbnailHref:
      'https://images.squarespace-cdn.com/content/577dbc32414fb5812b97f65e/1477543032926-JZBW8F22N27EUL3SJPTJ/Logo-Izzys-WhiteShadow.png?format=500w&content-type=image%2Fpng',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.izzysbrooklynbagels.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "izzy's brooklyn bagels",
      }),
    ],
  },
  {
    itemId: 112,
    spotName: 'backyard brew',
    spotThumbnailHref:
      'https://83dffecb572e36498f22.cdn6.editmysite.com/uploads/b/83dffecb572e36498f22402c55e150fd79731fb3c65b943e74aa311e5cc06b3e/5293940E-A3BB-4712-8932-9683B642AF7C_1_102_o_1658888731.jpeg?width=1200&optimize=medium',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://backyardbrew.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'backyard brew palo alto',
      }),
    ],
  },
  {
    itemId: 113,
    spotName: 'mediterranean wraps',
    spotThumbnailHref:
      'https://774f080d04abeb32c00f.cdn6.editmysite.com/uploads/b/774f080d04abeb32c00f86306e26a1d3be267632b1effee4ff8e291abb545259/2021-10-02_20-03-07_1633230203.jpg?width=400&optimize=medium',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.mediterraneanwraps.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'mediterranean wraps palo alto',
      }),
    ],
  },
  {
    itemId: 114,
    spotName: "antonio's nut house",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/nuthouse.png',
    spotLocation: ['palo alto', 'california'],
    spotTags: ['bar', 'restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: "antonio's nut house",
      }),
    ],
  },
  {
    itemId: 115,
    spotName: "nick's crispy tacos",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/nickscrispy.jpeg',
    spotLocation: ['san francisco', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.nickscrispytacos.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "nick's crispy tacos",
      }),
    ],
  },
  {
    itemId: 117,
    spotName: 'trattoria contadina',
    spotThumbnailHref:
      'https://www.trattoriacontadina.com/uploads/2/4/8/8/24884547/tratt-logo_orig.png',
    spotLocation: ['san francisco', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.trattoriacontadina.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'trattoria contadina',
      }),
    ],
  },
  {
    itemId: 118,
    spotName: 'kozy kar bar',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/kozykar.jpeg',
    spotLocation: ['san francisco', 'california'],
    spotTags: ['bar'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'http://www.kozykar.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'kozy kar bar',
      }),
    ],
  },
  {
    itemId: 119,
    spotName: "fenton's creamery",
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/fentons.jpeg',
    spotLocation: ['oakland', 'california'],
    spotTags: ['ice cream shop'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.fentonscreamery.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: "fenton's creamery",
      }),
    ],
  },
  {
    itemId: 120,
    spotName: 'm.h. bread and butter',
    spotThumbnailHref:
      'https://pbs.twimg.com/profile_images/2429575878/g2ognrwoy76z7sqft3n5_400x400.jpeg',
    spotLocation: ['san anselmo', 'california'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.mhbreadandbutter.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'm.h. bread and butter',
      }),
    ],
  },
  {
    itemId: 121,
    spotName: 'the gorge amphitheater',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/thegorge.jpeg',
    spotLocation: ['grant county', 'washington'],
    spotTags: ['music venue'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.georgeamphitheatre.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'the gorge amphitheater',
      }),
    ],
  },
  {
    itemId: 122,
    spotName: 'bienvenido pariente',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/pariente.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['restaurant', 'bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'bienvenido pariente',
      }),
    ],
  },
  {
    itemId: 123,
    spotName: 'las argentinas, empanadas a la leña',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/lasargentinas.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['cafe'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'las argentinas, empanadas a la leña',
      }),
    ],
  },
  {
    itemId: 124,
    spotName: 'el habanero negro',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/elhabanero.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['restaurant', 'bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'el habanero negro guadalajara',
      }),
    ],
  },
  {
    itemId: 125,
    spotName: 'lúdico comedor y café botánico',
    spotThumbnailHref:
      'https://lh3.googleusercontent.com/p/AF1QipMM3_Jq2zbOXzy3_C232JivsljZFRQg7A-GlMgA=w960-h960-n-o-v1',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['cafe'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://ludico-cafe-botanico.business.site',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'lúdico comedor y café botánico',
      }),
    ],
  },
  {
    itemId: 126,
    spotName: 'café fábula',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/cafefabula.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['coffee', 'cafe'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'café fábula guadalajara',
      }),
    ],
  },
  {
    itemId: 127,
    spotName: 'el frutero',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/elfrutero.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['cafe'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'el frutero guadalajara',
      }),
    ],
  },
  {
    itemId: 128,
    spotName: 'vietnam bar',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/vietnam.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'vietnam bar guadalajara',
      }),
    ],
  },
  {
    itemId: 129,
    spotName: 'asadas dany',
    spotThumbnailHref:
      'https://s3-media0.fl.yelpcdn.com/bphoto/fiTp3PIOtXOy8kLzsOfi3A/348s.jpg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'asadas dany guadalajara',
      }),
    ],
  },
  {
    itemId: 130,
    spotName: 'cerveza loba',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/loba.png',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['brewery'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.cervezaloba.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'cerveza loba guadalajara',
      }),
    ],
  },
  {
    itemId: 132,
    spotName: 'la chukirruki pulqueria',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/chukirruki.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'la chukirruki pulqueria guadalajara',
      }),
    ],
  },
  {
    itemId: 133,
    spotName: 'hot dogs el chino',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/elchino.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'hot dogs el chino guadalajara',
      }),
    ],
  },
  {
    itemId: 134,
    spotName: 'tortas ahogadas el rika',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/elchino.png',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://www.tortasahogadaselrika.com.mx',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'tortas ahogadas el rika guadalajara',
      }),
    ],
  },
  {
    itemId: 135,
    spotName: 'las ahogadas del negro',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/ahogadasdelnegro.jpeg',
    spotLocation: ['guadalajara', 'jalisco', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'las ahogadas del negro guadalajara',
      }),
    ],
  },
  {
    itemId: 136,
    spotName: 'gorditas, tacos y quesadillas "alondra"',
    spotThumbnailHref:
      'https://lh3.googleusercontent.com/p/AF1QipPSbghGxSidwxQCcMGyJhgw-DKPhdroZ6V4VErN=s1360-w1360-h1020',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'gorditas, tacos y quesadillas "alondra" guanajuato',
      }),
    ],
  },
  {
    itemId: 137,
    spotName: 'los huacales',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/loshuacales.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'los huacales guanajuato',
      }),
    ],
  },
  {
    itemId: 138,
    spotName: 'la victoriana',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/lavictoriana.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'la victoriana guanajuato',
      }),
    ],
  },
  {
    itemId: 139,
    spotName: 'la cocina de laura',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/lacocinadelaura.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'la cocina de laura guanajuato',
      }),
    ],
  },
  {
    itemId: 140,
    spotName: 'macanela',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/macanela.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'macanela guanajuato',
      }),
    ],
  },
  {
    itemId: 141,
    spotName: 'gorditas "las güeras"',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/lasgueras.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'gorditas "las güeras" guanajuato',
      }),
    ],
  },
  {
    itemId: 142,
    spotName: 'oajillo',
    spotThumbnailHref: 'https://oajillo.com/img/logo.png',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getWebsiteLinkData({
        websiteHref: 'https://oajillo.com',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'oajillo guanajuato',
      }),
    ],
  },
  {
    itemId: 143,
    spotName: 'nota negra bar',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/notanegra.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'nota negra bar guanajuato',
      }),
    ],
  },
  {
    itemId: 144,
    spotName: 'pulques “el guiso”',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/elguiso.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['bar'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'pulques “el guiso” guanajuato',
      }),
    ],
  },
  {
    itemId: 146,
    spotName: 'cielo verde',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/cieloverde.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'cielo verde guanajuato',
      }),
    ],
  },
  {
    itemId: 147,
    spotName: 'vivo café',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/vivocafe.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['cafe'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'vivo café guanajuato',
      }),
    ],
  },
  {
    itemId: 148,
    spotName: 'plaza allende',
    spotThumbnailHref:
      'https://thumbs.dreamstime.com/b/estátua-guanajuato-méxico-de-don-quixote-5172094.jpg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['music venue'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'plaza allende guanajuato',
      }),
    ],
  },
  {
    itemId: 149,
    spotName: 'pacifico surf',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/pacificosurf.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'pacifico surf antojería del mar guanajuato',
      }),
    ],
  },
  {
    itemId: 150,
    spotName: 'street garden',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/streetgarden.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'street garden guanajuato',
      }),
    ],
  },
  {
    itemId: 151,
    spotName: 'habibti falafel',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/habibti.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'habibti falafel guanajuato',
      }),
    ],
  },
  {
    itemId: 152,
    spotName: 'los campos cantina y restaurante',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/loscampos.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'los campos cantina y restaurante guanajuato',
      }),
    ],
  },
  {
    itemId: 153,
    spotName: 'birria club',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/birriaclub.jpeg',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'birria club guanajuato',
      }),
    ],
  },
  {
    itemId: 154,
    spotName: 'la ronda',
    spotThumbnailHref:
      'https://lh3.googleusercontent.com/p/AF1QipN2FiCITm8pKANrjWkWHQHDDalM8JGAZQBgWZde=s1360-w1360-h1020',
    spotLocation: ['guanajuato', 'guanajuato', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'la ronda guanajuato',
      }),
    ],
  },
  {
    itemId: 156,
    spotName: 'tacos los alexis',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/tacoslosalexis.jpeg',
    spotLocation: ['roma norte', 'mexico city', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'tacos los alexis mexico city',
      }),
    ],
  },
  {
    itemId: 157,
    spotName: 'cariñito tacos',
    spotThumbnailHref:
      'https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2023/01/taquerias-bonitas-cdmx-carinito.jpeg?resize=600%2C682&ssl=1',
    spotLocation: ['roma norte', 'mexico city', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'cariñito tacos mexico city',
      }),
    ],
  },
  {
    itemId: 158,
    spotName: 'el habanerito',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/habanerito.jpeg',
    spotLocation: ['roma norte', 'mexico city', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'el habanerito mexico city',
      }),
    ],
  },
  {
    itemId: 159,
    spotName: 'falafel',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/falafelcientos.jpeg',
    spotLocation: ['san cristobal del las casas', 'chiapas', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery:
          'falafel 100% vegetariano san cristobal del las casas',
      }),
    ],
  },
  {
    itemId: 160,
    spotName: 'pachamama',
    spotThumbnailHref:
      'https://raw.githubusercontent.com/clumsycomputer/clumsy-thumbs/main/pachamama.jpeg',
    spotLocation: ['san cristobal del las casas', 'chiapas', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'pachamama san cristobal del las casas',
      }),
    ],
  },
  {
    itemId: 161,
    spotName: 'la viña de bacco',
    spotThumbnailHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Viña_de_Bacco.jpg?20150626103511',
    spotLocation: ['san cristobal del las casas', 'chiapas', 'mexico'],
    spotTags: ['restaurant'],
    spotLinks: [
      getGoogleLinkData({
        googleSearchQuery: 'la viña de bacco san cristobal del las casas',
      }),
    ],
  },
]
