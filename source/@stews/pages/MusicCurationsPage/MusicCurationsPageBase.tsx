import { Page } from '@stews/components/Page'
import { throwInvalidPathError } from '@stews/helpers'
import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { DeterminedProfileBoppersProps } from './components/ProfileBopper/ProfileBopperBase'
import { DeterminedViewSelectProps } from './components/ViewSelect'
import { MusicCurator, MusicView } from './data'
import cssModule from './MusicCurationsPageBase.module.scss'

export interface MusicCurationsPageBaseProps<CustomViewSelectProps> {
  musicCurator: MusicCurator
  musicViews: Array<MusicView>
  customViewSelectProps: CustomViewSelectProps
  ViewSelect: FunctionComponent<ViewSelectProps<CustomViewSelectProps>>
  ProfileBopper: FunctionComponent<DeterminedProfileBoppersProps>
}

type ViewSelectProps<CustomViewSelectProps> = DeterminedViewSelectProps &
  CustomViewSelectProps

export function MusicCurationsPageBase<CustomViewSelectProps>(
  props: MusicCurationsPageBaseProps<CustomViewSelectProps>
) {
  const {
    musicViews,
    ViewSelect,
    customViewSelectProps,
    ProfileBopper,
    musicCurator,
  } = props
  const [selectedView, setSelectedView] = useState<
    DeterminedViewSelectProps['optionList'][number]
  >(
    musicViews[0] !== undefined
      ? musicViews[0]
      : throwInvalidPathError('MusicCurationsPageBase.useState.selectedView')
  )
  return (
    <Page>
      <div className={cssModule.pageHeader}>
        <div className={cssModule.viewSelectContainer}>
          <ViewSelect
            optionList={musicViews}
            selectedOption={selectedView}
            selectOption={(nextSelectedView) => {
              setSelectedView(nextSelectedView)
            }}
            {...customViewSelectProps}
          />
        </div>
        <div className={cssModule.actionContainer}>
          <ProfileBopper musicCurator={musicCurator} />
        </div>
      </div>
    </Page>
  )
}
