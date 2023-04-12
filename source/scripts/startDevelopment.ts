import { throwInvalidPathError } from '@stews/helpers/throwInvalidPathError'
import ChildProcess from 'child_process'
import FileSystem from 'fs'
import Path from 'path'
import { buildApp } from './shared/buildApp'

startDevelopment({
  curatorConfigPath: Path.join(
    process.cwd(),
    process.argv.at(2) ??
      throwInvalidPathError('curatorConfigPath not provided')
  ),
})

interface StartDevelopmentApi {
  curatorConfigPath: string
}

async function startDevelopment(api: StartDevelopmentApi) {
  const { curatorConfigPath } = api
  const developmentBuildDirectoryPath = await buildApp({
    curatorConfigPath,
    getBuildDirectoryName: () => 'build',
  })
  const sourceAppDirectoryPath = Path.join(process.cwd(), `./source/app`)
  const targetAppDirectoryPath = Path.join(
    developmentBuildDirectoryPath,
    `./app`
  )
  FileSystem.cpSync(sourceAppDirectoryPath, targetAppDirectoryPath, {
    recursive: true,
  })
  const sourceCurationsDirectoryPath = Path.join(
    developmentBuildDirectoryPath,
    './assets/curations'
  )
  const targetCurationsDirectoryPath = Path.join(
    targetAppDirectoryPath,
    './assets/curations'
  )
  FileSystem.cpSync(
    sourceCurationsDirectoryPath,
    targetCurationsDirectoryPath,
    {
      recursive: true,
    }
  )
  const cliPrerenderDataJsonPath = Path.join(
    developmentBuildDirectoryPath,
    './preact_prerender_data.json'
  )
  const cliPrerenderData = JSON.parse(
    FileSystem.readFileSync(cliPrerenderDataJsonPath, {
      encoding: 'utf-8',
    })
  )
  const prerenderUrlsJsonPath = Path.join(
    developmentBuildDirectoryPath,
    './prerender-urls-.json'
  )
  FileSystem.writeFileSync(
    prerenderUrlsJsonPath,
    JSON.stringify([cliPrerenderData])
  )
  ChildProcess.execSync(
    `cross-env NODE_OPTIONS=--openssl-legacy-provider ./node_modules/.bin/preact watch --src ${targetAppDirectoryPath} --prerender --prerenderUrls ${prerenderUrlsJsonPath}  --host 127.0.0.1`,
    {
      stdio: 'inherit',
    }
  )
}
