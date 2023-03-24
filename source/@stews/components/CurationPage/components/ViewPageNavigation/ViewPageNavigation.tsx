import { Button } from '@stews/components/Button'
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
      <div
        role={'meter'}
        aria-description={'pagination meter for filtered and sorted view items'}
        aria-valuemin={1}
        className={cssModule.navigationMeterContainer}
        aria-valuenow={adjustedPageIndex}
        aria-valuemax={pageCount}
      >
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
      buttonLabel={'prev'}
      accessibilityDescription={
        'button for viewing the previous page of filtered and sorted view items'
      }
      adjustedPageIndex={adjustedPageIndex}
      setPageIndex={setPageIndexToPrevious}
      buttonEnabled={buttonEnabled}
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
      buttonLabel={'next'}
      accessibilityDescription={
        'button for viewing the next page of filtered and sorted view items'
      }
      adjustedPageIndex={adjustedPageIndex}
      setPageIndex={setPageIndexToNext}
      buttonEnabled={buttonEnabled}
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
  accessibilityDescription: string
  buttonLabel: string
  setPageIndex:
    | ViewPageNavigationProps['setPageIndexToPrevious']
    | ViewPageNavigationProps['setPageIndexToNext']
}

function PageButtonBase(props: PageButtonBaseProps) {
  const {
    accessibilityDescription,
    buttonEnabled,
    setPageIndex,
    adjustedPageIndex,
    buttonLabel,
  } = props
  return (
    <Button
      aria-description={accessibilityDescription}
      tabIndex={buttonEnabled ? 0 : -1}
      className={getCssClass(cssModule.navigationButtonBase, [
        cssModule.disabledButtonOverride,
        !buttonEnabled,
      ])}
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
