import { Button } from '@stews/components/Button'
import { CurationItem } from '@stews/data/CurationItem'
import { getCssClass } from '@stews/helpers/getCssClass'
import {
  CoreAriaOrnamentsData,
  useInteractiveAria,
} from '@stews/hooks/useInteractiveAria'
import { UseViewPageApi } from '../../hooks'
import cssModule from './ViewPageNavigation.module.scss'

export interface ViewPageNavigationProps
  extends Pick<
      UseViewPageApi<CurationItem>,
      'setPageIndexToPrevious' | 'setPageIndexToNext'
    >,
    Pick<UseViewPageApi<CurationItem>['curationPageState'], 'viewPageIndex'> {
  viewPageCount: number
}

export function ViewPageNavigation(props: ViewPageNavigationProps) {
  const {
    viewPageIndex,
    setPageIndexToPrevious,
    viewPageCount,
    setPageIndexToNext,
  } = props
  const displayViewPageIndex = viewPageIndex + 1
  const { ariaElementRef } = useInteractiveAria({
    ariaOrnaments: {
      ariaRole: 'meter',
      ariaLabel: 'view pagination meter',
      ariaDescription: 'pagination meter for filtered and sorted view items',
      ariaValueMin: `${1}`,
      ariaValueNow: `${displayViewPageIndex}`,
      ariaValueMax: `${viewPageCount}`,
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
        viewPageIndex={viewPageIndex}
        setPageIndexToPrevious={setPageIndexToPrevious}
        buttonEnabled={viewPageIndex > 0}
      />
      <div className={cssModule.navigationMeterContainer} ref={ariaElementRef}>
        <div className={cssModule.navigationMeter}>
          {`${displayViewPageIndex} / ${viewPageCount}`}
        </div>
      </div>
      <NextPageButton
        viewPageIndex={viewPageIndex}
        setPageIndexToNext={setPageIndexToNext}
        buttonEnabled={viewPageIndex < viewPageCount - 1}
      />
    </div>
  )
}

interface PreviousPageButtonProps
  extends Pick<ViewPageNavigationProps, 'setPageIndexToPrevious'>,
    PageButtonBaseDataProps {}

function PreviousPageButton(props: PreviousPageButtonProps) {
  const { viewPageIndex, setPageIndexToPrevious, buttonEnabled } = props
  return (
    <PageButtonBase
      buttonLabel={'prev'}
      ariaLabel={'previous page'}
      ariaDescription={
        'a button that displays the previous page of filtered and sorted view items'
      }
      viewPageIndex={viewPageIndex}
      setPageIndex={setPageIndexToPrevious}
      buttonEnabled={buttonEnabled}
    />
  )
}

interface NextPageButtonProps
  extends Pick<ViewPageNavigationProps, 'setPageIndexToNext'>,
    PageButtonBaseDataProps {}

function NextPageButton(props: NextPageButtonProps) {
  const { viewPageIndex, setPageIndexToNext, buttonEnabled } = props
  return (
    <PageButtonBase
      buttonLabel={'next'}
      ariaLabel={'next page'}
      ariaDescription={
        'a button that displays the next page of filtered and sorted view items'
      }
      viewPageIndex={viewPageIndex}
      setPageIndex={setPageIndexToNext}
      buttonEnabled={buttonEnabled}
    />
  )
}

interface PageButtonBaseProps
  extends PageButtonBaseDataProps,
    PageButtonBaseConfigProps {}

interface PageButtonBaseDataProps
  extends Pick<ViewPageNavigationProps, 'viewPageIndex'> {
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
    viewPageIndex,
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
        setPageIndex(viewPageIndex)
      }}
    >
      {buttonLabel}
    </Button>
  )
}
