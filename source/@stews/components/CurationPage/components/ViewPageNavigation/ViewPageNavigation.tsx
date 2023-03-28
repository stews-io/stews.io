import { Button } from '@stews/components/Button'
import { getCssClass } from '@stews/helpers'
import { CoreAriaOrnamentsData, useAria } from '@stews/hooks/useAria'
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
  const displayPageIndex = adjustedPageIndex + 1
  const { ariaElementRef } = useAria({
    ariaOrnaments: {
      ariaRole: 'meter',
      ariaLabel: 'view pagination meter',
      ariaDescription: 'pagination meter for filtered and sorted view items',
      ariaValueMin: `${1}`,
      ariaValueNow: `${displayPageIndex}`,
      ariaValueMax: `${pageCount}`,
    },
    setCustomAriaAttributes: (ariaElement, ariaOrnaments) => {
      ariaElement.setAttribute('aria-valuemin', ariaOrnaments.ariaValueMin)
      ariaElement.setAttribute('aria-valuenow', ariaOrnaments.ariaValueNow)
      ariaElement.setAttribute('aria-valuemax', ariaOrnaments.ariaValueMax)
    },
  })
  return (
    <div className={cssModule.navigationContainer}>
      <PreviousPageButton
        adjustedPageIndex={adjustedPageIndex}
        setPageIndexToPrevious={setPageIndexToPrevious}
        buttonEnabled={adjustedPageIndex > 0}
      />
      <div className={cssModule.navigationMeterContainer} ref={ariaElementRef}>
        <div className={cssModule.navigationMeter}>
          {`${displayPageIndex} / ${pageCount}`}
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
      ariaLabel={'previous page'}
      ariaDescription={
        'a button that displays the previous page of filtered and sorted view items'
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
      ariaLabel={'next page'}
      ariaDescription={
        'a button that displays the next page of filtered and sorted view items'
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

interface PageButtonBaseConfigProps extends CoreAriaOrnamentsData {
  buttonLabel: string
  setPageIndex:
    | ViewPageNavigationProps['setPageIndexToPrevious']
    | ViewPageNavigationProps['setPageIndexToNext']
}

function PageButtonBase(props: PageButtonBaseProps) {
  const {
    ariaLabel,
    ariaDescription,
    buttonEnabled,
    setPageIndex,
    adjustedPageIndex,
    buttonLabel,
  } = props
  const buttonDisabled = !buttonEnabled
  return (
    <Button
      ariaLabel={ariaLabel}
      ariaDescription={ariaDescription}
      tabIndex={buttonEnabled ? 0 : -1}
      disabled={buttonDisabled}
      className={getCssClass(cssModule.navigationButtonBase, [
        cssModule.disabledButtonOverride,
        buttonDisabled,
      ])}
      onSelect={() => {
        setPageIndex(adjustedPageIndex)
      }}
    >
      {buttonLabel}
    </Button>
  )
}
