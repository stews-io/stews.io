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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/292186524_463260845800985_5075220980112804423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6R08qr_fXQwAX9Sv7hY&_nc_ht=scontent-ord5-2.xx&oh=00_AfAf_cgN40st2uWNXLOt6vbW-l63OPVKRmk_bTnONaT8vA&oe=64E606ED',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/358632350_749260110539108_8839275904061938728_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=hoPuPTBo4oUAX8WnIBo&_nc_ht=scontent-ord5-2.xx&oh=00_AfBpmlauKvN8v2CPvNFjyWSI--NPh-fCGckeomA7b-f8TQ&oe=64E50453',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/327284290_874234860292708_2829908986263781346_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fkFZdLmhHRkAX-Eeh6z&_nc_ht=scontent-ord5-1.xx&oh=00_AfBInAXFsN5sHsoKfZel0oX6Q-R0_AJOgt1ZSm-cwW3NHg&oe=64E55530',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/302321491_495283662603060_3798504435445018740_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=-K1Hi9Za3kwAX-v6Vgh&_nc_ht=scontent-ord5-1.xx&oh=00_AfAhpUE8Bm8AZolp4HFfA_6GO8OFYvjYK2I1uCpWNhFQ7Q&oe=64E8EB8C',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/326823744_711353057243859_607534128356595092_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ji-L7TkYolUAX9pO9rf&_nc_ht=scontent-ord5-2.xx&oh=00_AfCe95W7y2sLW0X3aN0E_-JjeEcn9Uy5f8SkbhOlBbcbFw&oe=64E598BB',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t1.18169-9/12038051_1566031040288477_3980547755360620334_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=Vf4wiO1dRLUAX8eQWrr&_nc_ht=scontent-ord5-2.xx&oh=00_AfBnpPq3ujcnHtNL7XceENR8Vgop0yiCtI02ze3d8JXomA&oe=6508E56F',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/305207362_616345646524011_4639620687507353827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8NeQpv2dNbsAX83d2qf&_nc_ht=scontent-ord5-1.xx&oh=00_AfDHkKBXNth4ZiySeLjBLJ3JcFpoEMSPJ60y8eVEiEqzoQ&oe=64E66BC5',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/315875372_10159987800086072_9160164090776982857_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UlZZm1ZiD3MAX_N655g&_nc_ht=scontent-ord5-2.xx&oh=00_AfAsUxXZWdDynvQetMqetw5dyYRmgFdiJaWLniLQT-hemw&oe=64E70162',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/311622688_10160081392926745_2936117687525779294_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7HZY02EASNQAX9lD467&_nc_ht=scontent-ord5-2.xx&oh=00_AfAKR07IYQbys03jqLk4YNJGWaMvieaB-Wz1ed7FS4lPBg&oe=64E70E34',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/304771484_765081268197661_4394019071070162870_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3GUF9Q0iHMEAX9xn1XM&_nc_ht=scontent-ord5-1.xx&oh=00_AfAqFapPOx7O2XdpaFb-p5jWTEAlK-eruhvPIQGHqGZeTw&oe=64E92DC4',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/326447146_3427664694184702_5487083264382146924_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=i09-Vf8u7uAAX_sNdml&_nc_ht=scontent-ord5-1.xx&oh=00_AfBYdMUXInPW7GZ2e3xiR4e-ph2PoqZ-o2DpyoPmiGgovg&oe=64E7AE28',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/327251903_719087859865314_2885636209532399650_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H16Idqz1_hUAX-UNE7X&_nc_ht=scontent-ord5-2.xx&oh=00_AfAa2X-7FTHA_W3-pFZPNGj2da4ljetdukGZjFGhgOnoEA&oe=64E7642E',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t1.18169-9/19961610_1913137888958989_2878020470256493585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=8orRReEbLPEAX9BUXqY&_nc_ht=scontent-ord5-2.xx&oh=00_AfCAgpbbFXZVgwn68DV7yyjKHyTJ3Mga5Tc0GA7ZWB8w1A&oe=650AD4BD',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/311196677_991711345055401_8722327404145045356_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Z-hsaVRWGEAX8f-M7K&_nc_ht=scontent-ord5-1.xx&oh=00_AfA3RNF8f2piidOei9efg_xannMhNqqCEapYKojBVnLHRg&oe=64E9183B',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/186480893_154316366703504_2245738722628080324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NwPxvDfVjx0AX9sirdb&_nc_ht=scontent-ord5-2.xx&oh=00_AfDH1WuBr7ptQu7c2vTFvyeLR9LRKj7S_70cEh5-zvjhBw&oe=650ADCC6',
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
      'http://www.road34.com/uploads/5/3/1/3/53136643/published/road-badge-1-lr.jpg?1631655413',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t31.18172-8/12513677_1264477590233995_561542058801255627_o.png?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UvNL2hgTNugAX_nLnRq&_nc_ht=scontent-ord5-2.xx&oh=00_AfCHs17YuwL7VsETsZyI3HeWle3RjO_wvxpLJHKo3PVrFQ&oe=650AC441',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/305320902_491625269637778_2838435630559681450_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RPEmcaa5MGQAX8QKo3P&_nc_ht=scontent-ord5-1.xx&oh=00_AfB5Cx_Zv3A42eRLlCNUIyQRABMvrw2f6B9JLrkp5DiLDQ&oe=64E7AF82',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/310295167_516276607174219_806696050503286216_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UpFP1_O7g0IAX_-QhZF&_nc_ht=scontent-ord5-1.xx&oh=00_AfDx3XjtdDwY8mzHLb8y7AchQ8cRG_xDdr4ghrYXE6dvOw&oe=64E89024',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/326471997_541674691263798_1634348039746274108_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pU5tz_rpgG0AX97VRht&_nc_ht=scontent-ord5-1.xx&oh=00_AfB_HvIlWD6dH7qB5PavlE8A_epRCHBl0a3aJ4GfpzAbYg&oe=64E7FCCF',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/302062544_599644051630069_7739087489248454502_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hA1PHNbLYnEAX-paOHG&_nc_ht=scontent-ord5-1.xx&oh=00_AfDD8W5MWeuTQ7GAoSyNIJLrJ-aWh3v2EwqV6brqWsYNjw&oe=64E85C6D',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/69520295_2128178570621866_9152977995319738368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WhBkPyPfXtMAX_IbM_U&_nc_ht=scontent-ord5-1.xx&oh=00_AfBefkoGMl4gRmerm69Nvrq_RC7VwvqfZo1ckcne8rlQ9A&oe=650ADBD3',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/226340860_10159026945006187_1259887181604280676_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H98-6iA-CeoAX-EB-ID&_nc_ht=scontent-ord5-2.xx&oh=00_AfBOF8QA7XWOIlRJv8HucwiB0knXDjtnOcg55bmojl3byQ&oe=64E87392',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t1.18169-9/15977420_1180224822095975_3859725115814649469_n.png?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=hOFmQJ5BunIAX_xByWe&_nc_ht=scontent-ord5-1.xx&oh=00_AfC5_o-5WR7VpfPk6fuCj_lycT_-aliGdWPJoqVNHjxtmA&oe=650AED97',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/305623044_487927620012205_4427799904039870633_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jhyOAaS46agAX_YM2zx&_nc_ht=scontent-ord5-2.xx&oh=00_AfCIg6-Nj97juiz-3L4MnoYXvKSOFzjotBLQwKPOfy5Wvw&oe=64E93DF1',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/326321202_473229528350225_5573854040675408754_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L586ZN0e60oAX8k4trF&_nc_ht=scontent-ord5-2.xx&oh=00_AfB-eXe7FJvJwSClfy1gD-gcnZbpshcP1wIzPYlk3YQTfA&oe=64E7C1FF',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/309595143_144214351665979_7990827627426424696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SCtHVJMdtGcAX_BI-oJ&_nc_ht=scontent-ord5-1.xx&oh=00_AfCAzpJZ2_-9b5hqGdr4vboIjwOxI7HMd28JX75sTRxehw&oe=64E8E2B2',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t1.18169-9/10703526_585228981582914_3952569593611833500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=mmUHvCZ4x9cAX9x6IIT&_nc_ht=scontent-ord5-1.xx&oh=00_AfAgdWHeQq1SskFfdPFEc1TiCGuUJphuIUBRObePuDAI4A&oe=650AD1E2',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/310597910_555564296569578_89937143620770694_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1lyWHiD2qiAAX_OsLo6&_nc_ht=scontent-ord5-2.xx&oh=00_AfDEsKuepwB0cP7-8rC86wsHyktdgcY4AVdl-CCuAUZf7w&oe=64E89C7C',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/277581712_411128531015059_7393133236994346570_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1SsEIC1M5qEAX8DHXuM&_nc_ht=scontent-ord5-1.xx&oh=00_AfCTTeqDowm9QvMNextC6XK7pSOY1Rl2D6tXgT9zRjuaOg&oe=64E879AB',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/275426515_469593611532637_6249378466039998173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=73ApdzWc3QsAX8sNXpX&_nc_ht=scontent-ord5-1.xx&oh=00_AfDtiZfcoaAjcfR5ikLWcpYtxWqLuVI94N9LXckvzBGBXQ&oe=64E8DAE3',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t31.18172-8/1597254_710881832275727_2065693438_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hwPXp_G9KTgAX-qYcW0&_nc_ht=scontent-ord5-1.xx&oh=00_AfAq_22xJ9N26yBr1Ol6ynhlX920A07NTn3eM2wl6yfJLQ&oe=650AD0F3',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/298457594_726896935147631_3897566443918674611_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ruzjClXvrikAX9Kaoeu&_nc_ht=scontent-ord5-1.xx&oh=00_AfBeUZYS2dao2sp11ewy0r1uD2_VBx_CPb25a2U1mn4yiQ&oe=64E91B33',
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
      'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/301769842_572429888007501_5534751458112006141_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CcllEeuTDwoAX8qijIL&_nc_ht=scontent-ord5-1.xx&oh=00_AfDPJ_OF6jbXRQyN_j91C-epp5H9NtOS7TbyTMLgwTmT7Q&oe=64E8360E',
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
      'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/334743115_156949907163917_6620175190276611379_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZGsa-vuJwXkAX9Jqj_R&_nc_ht=scontent-ord5-2.xx&oh=00_AfDVEN6CsRaIPzP1GMqZcqL7PHuCOjNq_VP-KJntZXDUAQ&oe=64E93088',
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
]
