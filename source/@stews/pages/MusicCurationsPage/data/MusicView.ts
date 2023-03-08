import { ExtractStrictMenuOption } from '@stews/components/Select'

export type StrictMusicView = ExtractStrictMenuOption<MusicView, 'viewLabel'>

export type MusicView = DefaultMusicView | FilterMusicView

export interface DefaultMusicView extends MusicViewBase<'default'> {}

export interface FilterMusicView extends CustomMusicView<'filter'> {
  viewFilter: string
}

interface CustomMusicView<CustomType extends string>
  extends MusicViewBase<'custom'> {
  customType: CustomType
}

interface MusicViewBase<ViewType extends string> {
  viewType: ViewType
  viewId: number
  viewLabel: string
}
