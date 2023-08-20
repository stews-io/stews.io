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
      'http://images.squarespace-cdn.com/content/v1/561c0a97e4b0a62da65569e1/1444679412825-DSU10JCXH2NGNK9478PO/moosehead.png?format=1500w',
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
      'https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-dotster-v1-0-9%2F339%2F294339%2FgrzUsDCa%2Fb2a1425a4b734ac0a33745f25931ed36&methods=resize%2C500%2C5000',
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
        websiteHref: 'https://www.thepizzacasbah.com/',
      }),
      getGoogleLinkData({
        googleSearchQuery: 'pizza casbah',
      }),
    ],
  },
]
