import { Button, ButtonProps } from '@stews/components/Button'
import { getCssClass } from '@stews/helpers'
import { UseViewPageApi } from '../../hooks/useViewPage'
import cssModule from './ViewPageNavigation.module.scss'

export interface ViewPageNavigationProps
  extends Pick<
    UseViewPageApi<object>,
    'setPageIndexToPrevious' | 'setPageIndexToNext'
  > {
  adjustedPageIndex: UseViewPageApi<object>['viewState']['pageIndex']
  pageCount: number
}

export function ViewPageNavigation(props: ViewPageNavigationProps) {
  const {
    adjustedPageIndex,
    setPageIndexToPrevious,
    pageCount,
    setPageIndexToNext,
  } = props
  return (
    <div className={cssModule.navigationContainer}>
      <PreviousPageButton
        adjustedPageIndex={adjustedPageIndex}
        setPageIndexToPrevious={setPageIndexToPrevious}
        buttonEnabled={adjustedPageIndex > 0}
      />
      <div className={cssModule.navigationMeterContainer}>
        <div className={cssModule.navigationMeter}>
          {`${adjustedPageIndex + 1} / ${pageCount}`}
        </div>
      </div>
      <NextPageButton
        adjustedPageIndex={adjustedPageIndex}
        setPageIndexToNext={setPageIndexToNext}
        buttonEnabled={adjustedPageIndex < pageCount - 1}
      />
    </div>
  )
}

interface PreviousPageButtonProps
  extends Pick<ViewPageNavigationProps, 'setPageIndexToPrevious'>,
    PageButtonBaseDataProps {}

function PreviousPageButton(props: PreviousPageButtonProps) {
  const { adjustedPageIndex, setPageIndexToPrevious, buttonEnabled } = props
  return (
    <PageButtonBase
      adjustedPageIndex={adjustedPageIndex}
      setPageIndex={setPageIndexToPrevious}
      buttonEnabled={buttonEnabled}
      buttonLabel={'prev'}
    />
  )
}

interface NextPageButtonProps
  extends Pick<ViewPageNavigationProps, 'setPageIndexToNext'>,
    PageButtonBaseDataProps {}

function NextPageButton(props: NextPageButtonProps) {
  const { adjustedPageIndex, setPageIndexToNext, buttonEnabled } = props
  return (
    <PageButtonBase
      adjustedPageIndex={adjustedPageIndex}
      setPageIndex={setPageIndexToNext}
      buttonEnabled={buttonEnabled}
      buttonLabel={'next'}
    />
  )
}

interface PageButtonBaseProps
  extends PageButtonBaseDataProps,
    PageButtonBaseConfigProps {}

interface PageButtonBaseDataProps
  extends Pick<ViewPageNavigationProps, 'adjustedPageIndex'> {
  buttonEnabled: boolean
}

interface PageButtonBaseConfigProps {
  buttonLabel: string
  setPageIndex:
    | ViewPageNavigationProps['setPageIndexToPrevious']
    | ViewPageNavigationProps['setPageIndexToNext']
}

function PageButtonBase(props: PageButtonBaseProps) {
  const { buttonEnabled, setPageIndex, adjustedPageIndex, buttonLabel } = props
  return (
    <Button
      className={getCssClass(cssModule.navigationButtonBase, [
        cssModule.disabledButtonOverride,
        !buttonEnabled,
      ])}
      tabIndex={buttonEnabled ? 0 : -1}
      onSelect={() => {
        if (buttonEnabled) {
          setPageIndex(adjustedPageIndex)
        }
      }}
    >
      {buttonLabel}
    </Button>
  )
}
