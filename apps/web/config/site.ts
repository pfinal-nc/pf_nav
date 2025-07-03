export const siteConfig = {
  name: 'PFinalClub Nav - 精选网站导航',
  url: 'https://nav.friday-go.icu',
  ogImage: 'https://nav.friday-go.icu/og-image.jpg',
  description: 'PFinalClub精心收集的优质网站导航，涵盖技术、设计、工具、学习等各类精选网站，助力提升工作效率和学习体验',
  keywords: ['网站导航', '技术导航', '设计导航', '工具导航', '学习资源', 'PFinalClub', '导航网站'],
  author: 'PFinalClub',
  language: 'zh-CN',
  links: {
    homepage: 'https://friday-go.icu/',
    twitter: 'https://twitter.com/pfinal_nc',
    github: 'https://github.com/pfinal-nc'
  },
  seo: {
    titleTemplate: '%s - PFinalClub Nav',
    defaultTitle: 'PFinalClub Nav - 精选网站导航',
    titleSeparator: ' | ',
    additionalMetaTags: [
      {
        name: 'author',
        content: 'PFinalClub'
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      },
      {
        name: 'googlebot',
        content: 'index, follow'
      }
    ],
    additionalLinkTags: [
      {
        rel: 'canonical',
        href: 'https://nav.friday-go.icu'
      },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'PFinalClub Nav RSS Feed',
        href: '/rss.xml'
      }
    ]
  }
}

export type SiteConfig = typeof siteConfig

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
}
