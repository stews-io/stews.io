import { StateUpdater, useEffect, useState } from 'preact/hooks'

export interface UseAppResourcesResult {
  appResourcesStatus: AppResourcesStatus
}

type AppResourcesStatus = 'loading' | 'loaded'

export function useAppResources() {
  const [appResourcesStatus, setAppResourcesStatus] =
    useState<AppResourcesStatus>('loading')
  useEffect(() => {
    loadAppResources({
      setAppResourcesStatus,
    })
  }, [])
  return {
    appResourcesStatus,
  }
}

interface LoadAppResourcesApi {
  setAppResourcesStatus: StateUpdater<AppResourcesStatus>
}

async function loadAppResources(api: LoadAppResourcesApi) {
  const { setAppResourcesStatus } = api
  document.body.style.overflow = 'hidden'
  const regularRedHatMonoFontFace = new FontFace(
    'Red Hat Mono',
    'url(/assets/fonts/RedHatMonoVF.woff2)',
    {
      weight: '200 900',
    }
  )
  const italicRedHatMonoFontFace = new FontFace(
    'Red Hat Mono',
    'url(/assets/fonts/RedHatMonoVF-Italic.woff2)',
    {
      style: 'italic',
      weight: '200 900',
    }
  )
  document.fonts.add(regularRedHatMonoFontFace)
  document.fonts.add(italicRedHatMonoFontFace)
  regularRedHatMonoFontFace.load()
  italicRedHatMonoFontFace.load()
  await Promise.all([
    document.fonts.ready,
    new Promise<void>((resolve) => {
      const minDisplayTime = 400
      setTimeout(() => {
        resolve()
      }, minDisplayTime)
    }),
  ])
  setAppResourcesStatus('loaded')
  document.body.style.overflow = 'inherit'
}
