import { curatorConfig } from '../curators/clumsycomputer'
import * as Liqe from 'liqe'
import ChildProcess from 'child_process'
import Path from 'path'
import FileSystem from 'fs'

buildCuratorApp({
  curatorConfigPath: Path.join(process.cwd(), './curators/clumsycomputer'),
})

interface BuildCuratorAppApi {
  curatorConfigPath: string
}

async function buildCuratorApp(api: BuildCuratorAppApi) {
  const {} = api
  const preactAppDirectoryPath = Path.join(process.cwd(), './source/app')
  const preactBuildDirectoryPath = Path.join(
    process.cwd(),
    `./${curatorConfig.curatorInfo.curatorName}_build`
  )
  const curationDatasetsDirectoryPath = Path.join(
    preactBuildDirectoryPath,
    './assets/curations'
  )
  const prerenderUrlsTempDirectoryPath = FileSystem.mkdtempSync(
    `temp_${curatorConfig.curatorInfo.curatorName}`
  )
  const prerenderUrlsJsonPath = `${Path.join(
    process.cwd(),
    prerenderUrlsTempDirectoryPath
  )}/prerender-urls.json`
  FileSystem.writeFileSync(
    prerenderUrlsJsonPath,
    JSON.stringify([
      {
        url: '/',
        adjustedCuratorConfig: {
          curatorInfo: curatorConfig.curatorInfo,
          curations: curatorConfig.curations.map(
            (someCuratorCurationConfig) => {
              return {
                curationType: someCuratorCurationConfig.curationType,
                curationViews: [
                  {
                    viewType: 'default',
                    viewLabel: 'all',
                    viewId: 0,
                    viewItemIds: someCuratorCurationConfig.curationItems.map(
                      (someCurationItem) => someCurationItem.musicId
                    ),
                  },
                  ...someCuratorCurationConfig.curationViews
                    .map((someCurationView) => ({
                      viewId: someCurationView.viewId,
                      viewLabel: someCurationView.viewLabel,
                      viewItemIds: Liqe.filter(
                        Liqe.parse(someCurationView.viewFilter),
                        someCuratorCurationConfig.curationItems
                      ).map((someViewItem) => someViewItem.musicId),
                    }))
                    .sort((viewA, viewB) =>
                      viewA.viewLabel.localeCompare(viewB.viewLabel)
                    ),
                ],
              }
            }
          ),
        },
      },
    ])
  )
  ChildProcess.execSync(
    `NODE_OPTIONS=--openssl-legacy-provider ./node_modules/.bin/preact build --src ${preactAppDirectoryPath} --dest ${preactBuildDirectoryPath} --prerenderUrls ${prerenderUrlsJsonPath} --sw false --esm false `,
    {
      stdio: 'inherit',
    }
  )
  FileSystem.rmSync(prerenderUrlsTempDirectoryPath, {
    recursive: true,
    force: true,
  })
  FileSystem.mkdirSync(curationDatasetsDirectoryPath)
  curatorConfig.curations.forEach((someCurationConfig) => {
    FileSystem.writeFileSync(
      Path.join(
        curationDatasetsDirectoryPath,
        `./${someCurationConfig.curationType}.json`
      ),
      JSON.stringify(
        someCurationConfig.curationItems.reduce<Record<string, object>>(
          (curationItemsMapResult, someCurationItem) => {
            curationItemsMapResult[someCurationItem.musicId] = someCurationItem
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
}
