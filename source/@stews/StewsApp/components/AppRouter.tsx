import { ConsumerCurationPage } from '@stews/components/CurationPage'
import { MusicItemDisplay } from '@stews/domains/music/components'
import Router, { RoutableProps } from 'preact-router'
import { UseAppResourcesResult } from '../hooks/useAppResources'
import { StewsAppProps } from '../StewsApp'

export interface AppRouterProps
  extends Pick<
      StewsAppProps['CLI_DATA']['preRenderData'],
      'adjustedCuratorConfig'
    >,
    Pick<UseAppResourcesResult, 'appResourcesStatus'> {}

export function AppRouter(props: AppRouterProps) {
  const { appResourcesStatus, adjustedCuratorConfig } = props
  return (
    <Router>
      <DefaultPageRedirect
        default={true}
        defaultPagePath={`/${adjustedCuratorConfig.musicCurationConfig.curationType}/0`}
      />
      <CurationRoutePage
        appResourcesStatus={appResourcesStatus}
        path={`/${adjustedCuratorConfig.musicCurationConfig.curationType}/:viewId`}
        curatorInfo={adjustedCuratorConfig.curatorInfo}
        someCuration={adjustedCuratorConfig.musicCurationConfig}
      />
    </Router>
  )
}

interface DefaultRedirectToMusicCurationPage
  extends Required<Pick<RoutableProps, 'default'>> {
  defaultPagePath: string
}

function DefaultPageRedirect(props: DefaultRedirectToMusicCurationPage) {
  const { defaultPagePath } = props
  if (typeof window !== 'undefined') {
    window.location.replace(defaultPagePath)
  }
  return null
}

interface CurationRoutePageProps
  extends Required<Pick<RoutableProps, 'path'>>,
    Pick<AppRouterProps, 'appResourcesStatus'>,
    Pick<AppRouterProps['adjustedCuratorConfig'], 'curatorInfo'> {
  someCuration: AppRouterProps['adjustedCuratorConfig']['musicCurationConfig']
}

function CurationRoutePage(props: CurationRoutePageProps) {
  const { appResourcesStatus, someCuration, curatorInfo } = props
  return appResourcesStatus === 'loaded' ? (
    <ConsumerCurationPage
      ItemDisplay={MusicItemDisplay}
      getItemSearchSpace={(someMusicItem) =>
        `${someMusicItem.musicTitle},${someMusicItem.musicArtist.join(
          ','
        )},${someMusicItem.musicStyles.join(',')},${
          someMusicItem.musicYear
        },${`${someMusicItem.recordingContext.join('/')} ${
          someMusicItem.sourceType === 'collection'
            ? someMusicItem.collectionType
            : someMusicItem.sourceType
        }${someMusicItem.musicType === 'clip' ? ' clip' : ''}`}`
      }
      viewSortConfig={[
        {
          fieldKey: 'musicTitle',
          fieldType: 'string',
          sortLabelBase: 'title',
        },
        {
          fieldKey: 'musicArtist',
          fieldType: 'orderedStringSet',
          sortLabelBase: 'artist',
        },
        {
          fieldKey: 'musicYear',
          fieldType: 'number',
          sortLabelBase: 'year',
        },
      ]}
      curationType={someCuration.curationType}
      curationViews={someCuration.curationViews}
      curatorInfo={curatorInfo}
    />
  ) : null
}
