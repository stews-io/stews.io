import Path from 'path'

export default (preactConfig) => {
  preactConfig.resolve.alias['@stews'] = Path.join(process.cwd(), 'app/@stews')
}
