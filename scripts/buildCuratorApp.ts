import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import Path from 'path'
import { buildApp } from './shared/buildApp'

buildApp({
  curatorConfigPath: Path.join(
    process.cwd(),
    process.argv.at(2) ??
      throwInvalidPathError('curatorConfigPath not provided')
  ),
  getBuildDirectoryName: ({ curatorConfig }) =>
    `${curatorConfig.curatorInfo.curatorName}_build`,
})
