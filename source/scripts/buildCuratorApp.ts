import Path from 'path'
import { buildApp } from './shared/buildApp'

buildApp({
  curatorConfigPath: Path.join(
    process.cwd(),
    './source/curators/clumsycomputer'
  ),
  getBuildDirectoryName: ({ curatorConfig }) =>
    `${curatorConfig.curatorInfo.curatorName}_build`,
})
