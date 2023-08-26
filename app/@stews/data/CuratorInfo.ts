export interface CuratorInfo {
  curatorName: string
  curatorLocation: string
  curatorStatus: string
  curatorEmail: string
  curatorLinks: Array<CuratorLink>
}

type CuratorLink =
  | WebsiteCuratorLink
  | GithubCuratorLink
  | TwitterCuratorLink
  | InstagramCuratorLink
  | EmailCuratorLink

interface WebsiteCuratorLink extends CuratorLinkBase<'website'> {}

interface GithubCuratorLink extends CuratorLinkBase<'github'> {}

interface InstagramCuratorLink extends CuratorLinkBase<'twitter'> {}

interface TwitterCuratorLink extends CuratorLinkBase<'instagram'> {}

interface EmailCuratorLink extends CuratorLinkBase<'email'> {}

interface CuratorLinkBase<LinkType extends string> {
  linkType: LinkType
  linkHref: string
}
