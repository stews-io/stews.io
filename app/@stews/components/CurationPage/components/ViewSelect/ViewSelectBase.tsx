import { CustomAnchorButtonProps } from '@stews/components/Button'
import {
  SelectBase,
  SelectBaseConfigProps,
  SelectBaseDataProps,
} from '@stews/components/Select'
import { AdjustedSegmentView } from '@stews/data/CuratorConfig'
import { Fragment } from 'preact/jsx-runtime'
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
  extends SelectBaseDataProps<AdjustedSegmentView> {
  viewAriaHeader: string
}

export interface ViewSelectBaseConfigProps<
  CustomOptionActionItemProps extends Record<string, unknown>,
  CustomMenuFooterProps extends Record<string, unknown>
> extends Pick<
    SelectBaseConfigProps<
      AdjustedSegmentView,
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
    viewAriaHeader,
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
    <Fragment>
      <h2 style={{ display: 'none' }}>{viewAriaHeader}</h2>
      <SelectBase
        optionTypeLabel={'view'}
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
    </Fragment>
  )
}
