// import { AdjustedCurationView } from '@stews/data/CurationView'
// import { AdjustedCuratorConfig } from '@stews/data/CuratorConfig'
// import ChildProcess from 'child_process'
// import FileSystem from 'fs'
// import Path from 'path'
export {}
// startDevelopment()

// function startDevelopment() {
//   const adjustedCuratorConfig: AdjustedCuratorConfig = {
//     ...curatorConfig,
//     musicCurationConfig: {
//       curationType: curatorConfig.musicCurationConfig.curationType,
//       curationViews: [
//         {
//           viewId: 0,
//           viewLabel: 'all',
//           viewItemIds: curatorConfig.musicCurationConfig.curationItems.map(
//             (someCurationItem) => someCurationItem.musicId
//           ),
//         },
//         ...curatorConfig.musicCurationConfig.curationViews.map(
//           (someCurationView): AdjustedCurationView => ({
//             viewId: someCurationView.viewId,
//             viewLabel: someCurationView.viewLabel,
//             viewItemIds: Liqe.filter(
//               Liqe.parse(someCurationView.viewFilter),
//               curatorConfig.musicCurationConfig.curationItems
//             ).map((someViewItem) => someViewItem.musicId),
//           })
//         ),
//       ],
//     },
//   }
//   const prerenderUrlsJsonData = [
//     {
//       url: '/',
//       headTitle: curatorConfig.curatorInfo.curatorName,
//       metaDescription: `curations by ${curatorConfig.curatorInfo.curatorName}`,
//       adjustedCuratorConfig,
//     },
//   ]
//   const prerenderUrlsTempDirectoryPath = FileSystem.mkdtempSync(
//     `temp_${curatorConfig.curatorInfo.curatorName}`
//   )
//   const prerenderUrlsJsonPath = `${Path.join(
//     process.cwd(),
//     prerenderUrlsTempDirectoryPath
//   )}/prerender-urls.json`
//   FileSystem.writeFileSync(
//     prerenderUrlsJsonPath,
//     JSON.stringify(prerenderUrlsJsonData)
//   )
//   ChildProcess.execSync(
//     `cross-env NODE_OPTIONS=--openssl-legacy-provider ./node_modules/.bin/preact watch --src ${} --prerenderUrls ${prerenderUrlsJsonPath} --H 127.0.0.1`
//   )
//   FileSystem.rmSync(prerenderUrlsTempDirectoryPath, {
//     recursive: true,
//     force: true,
//   })
// }
