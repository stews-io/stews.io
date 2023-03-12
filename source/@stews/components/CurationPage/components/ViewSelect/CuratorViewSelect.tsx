import { Button } from '@stews/components/Button'
import {
  SelectMenuBase,
  SelectMenuBaseConfigProps,
} from '@stews/components/Select'
import { getCssClass } from '@stews/helpers'
import { ComponentProps } from 'preact'
import { CurationViewSelectOption } from '../../data'
import {
  ViewSelectBase,
  ViewSelectBaseConfigProps,
  ViewSelectBaseDataProps,
} from './ViewSelectBase'
import cssModule from './CuratorViewSelect.module.scss'

export interface CuratorViewSelectProps extends ViewSelectBaseDataProps {
  navigateToEditViewPage: (someViewOption: CurationViewSelectOption) => void
  navigateToCreateViewPage: () => void
}

export function CuratorViewSelect(props: CuratorViewSelectProps) {
  const {
    navigateToEditViewPage,
    navigateToCreateViewPage,
    ...viewSelectBaseProps
  } = props
  return (
    <ViewSelectBase
      SelectMenu={CuratorSelectMenu}
      customOptionActionItemProps={{
        navigateToEditViewPage,
      }}
      customMenuFooterProps={{
        navigateToCreateViewPage,
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
    CurationViewSelectOption,
    'viewLabel',
    CustomCuratorOptionActionItemProps,
    CustomCuratorMenuFooterProps
  > {}

interface CuratorOptionActionItemProps
  extends ComponentProps<CuratorSelectMenuPropsConfig['OptionActionItem']> {}

interface CustomCuratorOptionActionItemProps
  extends Pick<CuratorViewSelectProps, 'navigateToEditViewPage'> {}

function CuratorOptionActionItem(props: CuratorOptionActionItemProps) {
  const {
    getMenuNavigationOptionActionButtonProps,
    optionIndex,
    navigateToEditViewPage,
    someOption,
    latestFocusedOptionIndex,
  } = props
  return (
    <div className={cssModule.optionActionItem}>
      <Button
        {...getMenuNavigationOptionActionButtonProps(optionIndex)}
        onSelect={() => {
          navigateToEditViewPage(someOption)
        }}
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
      </Button>
    </div>
  )
}

interface CuratorMenuFooterProps
  extends ComponentProps<CuratorSelectMenuPropsConfig['MenuFooter']> {}

interface CustomCuratorMenuFooterProps
  extends Pick<CuratorViewSelectProps, 'navigateToCreateViewPage'> {}

function CurtatorMenuFooter(props: CuratorMenuFooterProps) {
  const { menuNavigationFooterActionButtonProps, navigateToCreateViewPage } =
    props
  return (
    <div className={cssModule.footerContainer}>
      <div className={cssModule.footerDivider} />
      <div className={cssModule.footerActionButtonContainer}>
        <Button
          {...menuNavigationFooterActionButtonProps}
          className={cssModule.footerActionButton}
          onSelect={navigateToCreateViewPage}
        >
          create view
        </Button>
      </div>
    </div>
  )
}
