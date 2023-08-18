import { CurationItemBase } from '@stews/data/CurationItem'
import { AdjustedCurationSegment } from '@stews/data/CurationSegment'
import {
  AdjustedCuratorConfig,
  CuratorConfig,
  CuratorConfigSchema,
} from '@stews/data/CuratorConfig'
import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import { ArrayOfAtLeastOne } from '@stews/helpers/types'
import ChildProcess from 'child_process'
import FileSystem from 'fs'
import * as Liqe from 'liqe'
import Path from 'path'

export interface BuildAppApi {
  curatorConfigPath: string
  getBuildDirectoryName: (api: { curatorConfig: CuratorConfig }) => string
}

export async function buildApp(api: BuildAppApi) {
  const { curatorConfigPath, getBuildDirectoryName } = api
  const curatorConfigModule = await import(curatorConfigPath)
  const curatorConfig: CuratorConfig = CuratorConfigSchema.parse(
    curatorConfigModule.curatorConfig
  )
  const preactAppDirectoryPath = Path.join(process.cwd(), './app/boilerplate')
  const preactBuildDirectoryPath = Path.join(
    process.cwd(),
    `./${getBuildDirectoryName({ curatorConfig })}`
  )
  const curationDatasetsDirectoryPath = Path.join(
    preactBuildDirectoryPath,
    './assets/curations'
  )
  const prerenderUrlsTempDirectoryPath = FileSystem.mkdtempSync(
    `temp_${curatorConfig.curatorInfo.curatorName}`
  )
  const prerenderUrlsJsonPath = Path.join(
    prerenderUrlsTempDirectoryPath,
    `./prerender-urls.json`
  )
  const adjustedCuratorConfig: AdjustedCuratorConfig = {
    ...curatorConfig,
    curationSegments:
      curatorConfig.curationSegments.map<AdjustedCurationSegment>(
        (someCurationSegment) => {
          const segmentDataset =
            curatorConfig.curationDatasets[
              someCurationSegment.segmentDataset
            ] ?? throwInvalidPathError('buildApp.segmentDataset')
          return {
            segmentKey: someCurationSegment.segmentKey,
            segmentLabel: someCurationSegment.segmentLabel,
            segmentDataset: someCurationSegment.segmentDataset,
            segmentViews: [
              {
                viewId: 'AAAA',
                viewLabel: 'all',
                viewItemIds: segmentDataset.datasetItems.map(
                  (someCurationItem) => someCurationItem.itemId
                ),
              },
              ...someCurationSegment.segmentViews.map((someCurationView) => ({
                viewId: someCurationView.viewId,
                viewLabel: someCurationView.viewLabel,
                viewItemIds: Liqe.filter<CurationItemBase>(
                  Liqe.parse(someCurationView.viewFilter),
                  segmentDataset.datasetItems
                ).map((someViewItem) => someViewItem.itemId),
              })),
            ],
          }
        }
      ) as ArrayOfAtLeastOne<AdjustedCurationSegment>,
  }
  FileSystem.writeFileSync(
    prerenderUrlsJsonPath,
    JSON.stringify([
      {
        url: '/',
        headTitle: curatorConfig.curatorInfo.curatorName,
        metaDescription: `curations by ${curatorConfig.curatorInfo.curatorName}`,
        adjustedCuratorConfig,
      },
    ])
  )
  ChildProcess.execSync(
    `NODE_OPTIONS=--openssl-legacy-provider ./node_modules/.bin/preact build --src ${preactAppDirectoryPath} --dest ${preactBuildDirectoryPath} --prerenderUrls ${prerenderUrlsJsonPath} --sw false --esm false`,
    {
      stdio: 'inherit',
    }
  )
  FileSystem.rmSync(prerenderUrlsTempDirectoryPath, {
    recursive: true,
    force: true,
  })
  FileSystem.writeFileSync(
    Path.join(preactBuildDirectoryPath, './manifest.json'),
    JSON.stringify({
      name: `stews.io: ${curatorConfig.curatorInfo.curatorName}`,
      short_name: curatorConfig.curatorInfo.curatorName,
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
      icons: [
        {
          src: 'assets/icon-192x192.png',
          type: 'image/png',
          sizes: '192x192',
        },
        {
          src: 'assets/icon-384x384.png',
          type: 'image/png',
          sizes: '384x384',
        },
        {
          src: 'assets/icon-512x512.png',
          type: 'image/png',
          sizes: '512x512',
        },
      ],
    })
  )
  FileSystem.mkdirSync(curationDatasetsDirectoryPath)
  curatorConfig.curationSegments.forEach((someCurationSegment) => {
    const segmentDataset =
      curatorConfig.curationDatasets[someCurationSegment.segmentDataset] ??
      throwInvalidPathError('buildApp.segmentDataset_2')
    FileSystem.writeFileSync(
      Path.join(
        curationDatasetsDirectoryPath,
        `./${someCurationSegment.segmentDataset}.json`
      ),
      JSON.stringify(
        segmentDataset.datasetItems.reduce<Record<string, CurationItemBase>>(
          (curationItemsMapResult, someCurationItem) => {
            curationItemsMapResult[someCurationItem.itemId] = someCurationItem
            return curationItemsMapResult
          },
          {}
        )
      )
    )
  })
  ChildProcess.execSync(
    `cp ${Path.join(preactAppDirectoryPath, './assets/robots.txt')} ${Path.join(
      preactBuildDirectoryPath,
      './robots.txt'
    )}`,
    { stdio: 'inherit' }
  )
  ChildProcess.execSync(
    `cp ${Path.join(
      preactAppDirectoryPath,
      './assets/favicon.svg'
    )} ${Path.join(preactBuildDirectoryPath, './favicon.svg')}`,
    { stdio: 'inherit' }
  )
  return preactBuildDirectoryPath
}
