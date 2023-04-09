import ChildProcess from 'child_process'
import FileSystem from 'fs'
import Path from 'path'
import { buildApp } from './shared/buildApp'

startDevelopment({
  curatorConfigPath: Path.join(
    process.cwd(),
    './source/curators/clumsycomputer'
  ),
})

interface StartDevelopmentApi {
  curatorConfigPath: string
}

async function startDevelopment(api: StartDevelopmentApi) {
  const { curatorConfigPath } = api
  await buildApp({
    curatorConfigPath,
    getBuildDirectoryName: () => 'build',
  })
  const developmentBuildDirectoryPath = Path.join(process.cwd(), './build')
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
  const sourcePrerenderUrlsJsonPath = Path.join(
    developmentBuildDirectoryPath,
    './preact_prerender_data.json'
  )
  const prerenderDataJson = JSON.parse(
    FileSystem.readFileSync(sourcePrerenderUrlsJsonPath, { encoding: 'utf-8' })
  )
  const targetPrerenderUrlsJsonPath = Path.join(
    developmentBuildDirectoryPath,
    './prerender-urls-.json'
  )
  FileSystem.writeFileSync(
    targetPrerenderUrlsJsonPath,
    JSON.stringify([prerenderDataJson])
  )
  ChildProcess.execSync(
    `cross-env NODE_OPTIONS=--openssl-legacy-provider ./node_modules/.bin/preact watch --src ${targetAppDirectoryPath} --prerender --prerenderUrls ${targetPrerenderUrlsJsonPath}  --H 127.0.0.1`,
    {
      stdio: 'inherit',
    }
  )
}
