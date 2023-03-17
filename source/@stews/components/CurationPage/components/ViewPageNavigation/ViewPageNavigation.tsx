import { Button, ButtonProps } from '@stews/components/Button'
import { getCssClass } from '@stews/helpers'
import { UseViewPageApi } from '../../hooks/useViewPage'
import cssModule from './ViewPageNavigation.module.scss'

export interface ViewPageNavigationProps
  extends Pick<
      UseViewPageApi<object>,
      'setPageIndexToPrevious' | 'setPageIndexToNext'
    >,
    Pick<UseViewPageApi<object>['viewState'], 'pageIndex'> {
  pageCount: number
}

export function ViewPageNavigation(props: ViewPageNavigationProps) {
  const { setPageIndexToPrevious, pageIndex, pageCount, setPageIndexToNext } =
    props
  return (
    <div className={cssModule.navigationContainer}>
      <PreviousPageButton
        setPageIndexToPrevious={setPageIndexToPrevious}
        buttonEnabled={pageIndex > 0}
      />
      <div className={cssModule.navigationMeterContainer}>
        <div className={cssModule.navigationMeter}>
          {`${pageIndex + 1} / ${pageCount}`}
        </div>
      </div>
      <NextPageButton
        setPageIndexToNext={setPageIndexToNext}
        buttonEnabled={pageIndex < pageCount - 1}
      />
    </div>
  )
}

interface PreviousPageButtonProps
  extends Pick<UseViewPageApi<object>, 'setPageIndexToPrevious'>,
    PageButtonBaseDataProps {}

function PreviousPageButton(props: PreviousPageButtonProps) {
  const { buttonEnabled, setPageIndexToPrevious } = props
  return (
    <PageButtonBase
      buttonEnabled={buttonEnabled}
      buttonLabel={'prev'}
      onSelect={setPageIndexToPrevious}
    />
  )
}

interface NextPageButtonProps
  extends Pick<UseViewPageApi<object>, 'setPageIndexToNext'>,
    PageButtonBaseDataProps {}

function NextPageButton(props: NextPageButtonProps) {
  const { buttonEnabled, setPageIndexToNext } = props
  return (
    <PageButtonBase
      buttonEnabled={buttonEnabled}
      buttonLabel={'next'}
      onSelect={setPageIndexToNext}
    />
  )
}

interface PageButtonBaseProps
  extends PageButtonBaseDataProps,
    PageButtonBaseConfigProps {}

interface PageButtonBaseDataProps {
  buttonEnabled: boolean
}

interface PageButtonBaseConfigProps extends Pick<ButtonProps, 'onSelect'> {
  buttonLabel: string
}

function PageButtonBase(props: PageButtonBaseProps) {
  const { buttonEnabled, onSelect, buttonLabel } = props
  return (
    <Button
      className={getCssClass(cssModule.navigationButtonBase, [
        cssModule.disabledButtonOverride,
        !buttonEnabled,
      ])}
      tabIndex={buttonEnabled ? 0 : -1}
      onSelect={() => {
        if (buttonEnabled) {
          onSelect()
        }
      }}
    >
      {buttonLabel}
    </Button>
  )
}
