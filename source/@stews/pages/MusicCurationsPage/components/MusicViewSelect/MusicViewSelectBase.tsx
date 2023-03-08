import { SelectBase, SelectBaseProps } from '@stews/components/Select'
import { StrictMusicView } from '@stews/pages/MusicCurationsPage/data'
import { ComponentProps } from 'preact'

export interface MusicViewSelectBaseProps<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
> extends Pick<
    SelectBaseProps<
      StrictMusicView,
      'viewLabel',
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >,
    | 'SelectMenu'
    | 'selectedOption'
    | 'selectOption'
    | 'optionList'
    | 'customOptionActionItemProps'
    | 'customMenuFooterProps'
  > {}

export interface DeterminedMusicViewSelectProps
  extends Pick<
    MusicViewSelectBaseProps<unknown, unknown>,
    'optionList' | 'selectedOption' | 'selectOption'
  > {}

export interface MusicViewSelectMenuProps
  extends ComponentProps<
    MusicViewSelectBaseProps<unknown, unknown>['SelectMenu']
  > {}

export function MusicViewSelectBase<
  CustomOptionActionItemProps,
  CustomMenuFooterProps
>(
  props: MusicViewSelectBaseProps<
    CustomOptionActionItemProps,
    CustomMenuFooterProps
  >
) {
  const {
    SelectMenu,
    optionList,
    selectedOption,
    selectOption,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <SelectBase
      SelectMenu={SelectMenu}
      optionLabelKey={'viewLabel'}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={customOptionActionItemProps}
      customMenuFooterProps={customMenuFooterProps}
    />
  )
}
