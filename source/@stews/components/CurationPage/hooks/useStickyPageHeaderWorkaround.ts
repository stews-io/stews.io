import { throwInvalidPathError } from '@stews/helpers'
import { useLayoutEffect, useRef } from 'preact/hooks'
import cssModule from '../CurationPageBase.module.scss'

export function useStickyPageHeaderWorkaround() {
  const pageHeaderContainerRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const pageHeaderContainerElement =
      pageHeaderContainerRef.current ??
      throwInvalidPathError(
        'useStickyPageHeaderWorkaround.pageHeaderContainerElement'
      )
    const pageHeaderContainerObserver = new ResizeObserver(
      (observedElementEntries) => {
        const pageHeaderContainerEntry = observedElementEntries.at(0)
        if (pageHeaderContainerEntry instanceof ResizeObserverEntry) {
          pageHeaderContainerElement.style.setProperty(
            '--page-header-width',
            `${pageHeaderContainerEntry.contentRect.width}px`
          )
          pageHeaderContainerElement.classList.add(
            cssModule.stickyPageHeaderWorkaround ??
              throwInvalidPathError(
                'useStickyPageHeaderWorkaround.cssModule.stickyPageHeaderWorkaround'
              )
          )
        } else {
          throwInvalidPathError(
            'useStickyPageHeaderWorkaround.pageHeaderContainerEntry'
          )
        }
      }
    )
    pageHeaderContainerObserver.observe(pageHeaderContainerElement)
  }, [])
  return { pageHeaderContainerRef }
}
