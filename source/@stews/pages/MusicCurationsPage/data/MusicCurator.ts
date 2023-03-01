export interface MusicCurator {
  curatorName: string
  curatorLocation: string
  curatorStatus: string
  curatorLinks: Array<CuratorLink>
}

type CuratorLink =
  | WebsiteCuratorLink
  | GithubCuratorLink
  | TwitterCuratorLink
  | InstagramCuratorLink

interface WebsiteCuratorLink extends CuratorLinkBase<'website'> {}

interface GithubCuratorLink extends CuratorLinkBase<'github'> {}

interface InstagramCuratorLink extends CuratorLinkBase<'twitter'> {}

interface TwitterCuratorLink extends CuratorLinkBase<'instagram'> {}

interface CuratorLinkBase<LinkType extends string> {
  linkType: LinkType
  linkHref: string
}
