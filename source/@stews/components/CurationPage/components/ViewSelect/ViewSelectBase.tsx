import { CustomAnchorButtonProps } from '@stews/components/Button'
import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
} from '@stews/components/Select'
import { CurationView } from '@stews/data'
import { CurationPageBaseDataProps } from '../../CurationPageBase'
import cssModule from './ViewSelectBase.module.scss'

interface ViewSelectBaseProps<
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends ViewSelectBaseDataProps,
    ViewSelectBaseConfigProps<
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    > {}

export interface ViewSelectBaseDataProps
  extends SelectBaseDataProps<CurationView> {}

export interface ViewSelectBaseConfigProps<
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends Pick<
    SelectBaseConfigProps<
      CurationView,
      'viewLabel',
      Omit<CustomAnchorButtonProps, keyof CustomAnchorButtonProps>,
      CustomOptionActionItemProps,
      CustomMenuFooterProps
    >,
    | 'SelectMenu'
    | 'popoverAriaRole'
    | 'anchorAriaLabel'
    | 'anchorAriaDescription'
    | 'customOptionActionItemProps'
    | 'customMenuFooterProps'
  > {}

export function ViewSelectBase<
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
>(
  props: ViewSelectBaseProps<CustomOptionActionItemProps, CustomMenuFooterProps>
) {
  const {
    SelectMenu,
    popoverAriaRole,
    anchorAriaLabel,
    anchorAriaDescription,
    optionList,
    selectedOption,
    selectOption,
    customOptionActionItemProps,
    customMenuFooterProps,
  } = props
  return (
    <SelectBase
      optionLabelKey={'viewLabel'}
      anchorBorderClassName={cssModule.viewSelectAnchorBorder}
      fontSizeClassName={cssModule.viewSelectFontSize}
      SelectMenu={SelectMenu}
      popoverAriaRole={popoverAriaRole}
      anchorAriaLabel={anchorAriaLabel}
      anchorAriaDescription={anchorAriaDescription}
      optionList={optionList}
      selectedOption={selectedOption}
      selectOption={selectOption}
      customOptionActionItemProps={customOptionActionItemProps}
      customMenuFooterProps={customMenuFooterProps}
      customSelectAnchorButtonProps={{}}
    />
  )
}
