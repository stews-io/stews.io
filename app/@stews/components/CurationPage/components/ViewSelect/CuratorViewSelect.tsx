import { LinkButton } from '@stews/components/Button'
import {
  SelectMenuBase,
  SelectMenuBaseConfigProps,
} from '@stews/components/Select'
import { getCssClass } from '@stews/helpers/getCssClass'
import { ComponentProps } from 'preact'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'
import { CurationPageBaseDataProps } from '../../CurationPageBase'
import cssModule from './CuratorViewSelect.module.scss'
import { CurationItemBase } from '@stews/data/CurationItem'
import { AdjustedSegmentView } from '@stews/data/CuratorConfig'

export interface CuratorViewSelectProps
  extends ViewSelectBaseDataProps,
    Pick<CurationPageBaseDataProps<CurationItemBase>, 'curationType'> {}

export function CuratorViewSelect(props: CuratorViewSelectProps) {
  const { curationType, ...viewSelectBaseProps } = props
  return (
    <ViewSelectBase
      popoverAriaRole={'menu'}
      anchorAriaLabel={`show ${curationType} view menu`}
      anchorAriaDescription={`a button that displays a popover with options for selecting, editing, or creating a ${curationType} view`}
      SelectMenu={CuratorSelectMenu}
      customOptionActionItemProps={{
        curationType,
      }}
      customMenuFooterProps={{
        curationType,
      }}
      {...viewSelectBaseProps}
    />
  )
}

interface CuratorSelectMenuProps
  extends ComponentProps<
    ViewSelectBaseConfigProps<
      CustomCuratorOptionActionItemProps,
      CustomCuratorMenuFooterProps
    >['SelectMenu']
  > {}

function CuratorSelectMenu(props: CuratorSelectMenuProps) {
  return (
    <SelectMenuBase
      OptionActionItem={CuratorOptionActionItem}
      MenuFooter={CurtatorMenuFooter}
      {...props}
    />
  )
}

interface CuratorSelectMenuPropsConfig
  extends SelectMenuBaseConfigProps<
    AdjustedSegmentView,
    CustomCuratorOptionActionItemProps,
    CustomCuratorMenuFooterProps
  > {}

interface CuratorOptionActionItemProps
  extends ComponentProps<CuratorSelectMenuPropsConfig['OptionActionItem']> {}

interface CustomCuratorOptionActionItemProps
  extends Pick<CuratorViewSelectProps, 'curationType'> {}

function CuratorOptionActionItem(props: CuratorOptionActionItemProps) {
  const {
    curationType,
    someOption,
    getMenuNavigationOptionActionButtonProps,
    optionIndex,
    latestFocusedOptionIndex,
  } = props
  return (
    <div className={cssModule.optionActionItem}>
      <LinkButton
        target={'_self'}
        href={`${curationType}/view/${someOption.viewId}/edit`}
        ariaLabel={`edit "${someOption.viewLabel}" ${curationType} view`}
        ariaDescription={`a button that navigates to the edit view page for "${someOption.viewLabel}"`}
        {...getMenuNavigationOptionActionButtonProps(optionIndex)}
      >
        <svg
          className={getCssClass(cssModule.optionActionIcon, [
            cssModule.latestFocusedOptionActionIcon,
            latestFocusedOptionIndex === optionIndex,
          ])}
          viewBox={'0 0 24 24'}
        >
          <g>
            <g>
              <path
                d={
                  'M20.08,11.42l-4.04-5.65C15.7,5.29,15.15,5,14.56,5h0c-1.49,0-2.35,1.68-1.49,2.89L16,12l-2.93,4.11 c-0.87,1.21,0,2.89,1.49,2.89h0c0.59,0,1.15-0.29,1.49-0.77l4.04-5.65C20.33,12.23,20.33,11.77,20.08,11.42z'
                }
              />
              <path
                d={
                  'M13.08,11.42L9.05,5.77C8.7,5.29,8.15,5,7.56,5h0C6.07,5,5.2,6.68,6.07,7.89L9,12l-2.93,4.11C5.2,17.32,6.07,19,7.56,19h0 c0.59,0,1.15-0.29,1.49-0.77l4.04-5.65C13.33,12.23,13.33,11.77,13.08,11.42z'
                }
              />
            </g>
          </g>
        </svg>
      </LinkButton>
    </div>
  )
}

interface CuratorMenuFooterProps
  extends ComponentProps<CuratorSelectMenuPropsConfig['MenuFooter']> {}

interface CustomCuratorMenuFooterProps
  extends Pick<CuratorViewSelectProps, 'curationType'> {}

function CurtatorMenuFooter(props: CuratorMenuFooterProps) {
  const { curationType, menuNavigationFooterActionButtonProps } = props
  return (
    <div className={cssModule.footerContainer}>
      <div className={cssModule.footerDivider} />
      <div className={cssModule.footerActionButtonContainer}>
        <LinkButton
          target={'_self'}
          href={`${curationType}/view/create`}
          ariaLabel={`create ${curationType} view`}
          ariaDescription={''}
          className={cssModule.footerActionButton}
          {...menuNavigationFooterActionButtonProps}
        >
          create view
        </LinkButton>
      </div>
    </div>
  )
}
