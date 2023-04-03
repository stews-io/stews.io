import { CuratorConfig } from '@stews/data/CurationConfig'
import { MusicCurationCuratorConfig } from '@stews/domains/music'
import { musicCurationConfig } from './musicCurationConfig'

export const curatorConfig: CuratorConfig<[MusicCurationCuratorConfig]> = {
  curatorInfo: {
    curatorName: 'clumsycomputer',
    curatorLocation: 'guadalajara, jalisco',
    curatorStatus: 'just trying to listen and groove',
    curatorLinks: [
      {
        linkType: 'website',
        linkHref: 'https://clumsycomputer.com',
      },
      {
        linkType: 'github',
        linkHref: 'https://github.com/clumsycomputer',
      },
      {
        linkType: 'twitter',
        linkHref: 'https://twitter.com/c1umsyc0mputer',
      },
    ],
  },
  curations: [musicCurationConfig],
}
