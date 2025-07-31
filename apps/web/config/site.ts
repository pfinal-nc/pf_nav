export const siteConfig = {
  name: 'AI 工具导航 - 精选人工智能工具集合',
  url: 'https://nav.friday-go.icu',
  ogImage: 'https://nav.friday-go.icu/og-image.jpg',
  description: '精选全球优质 AI 工具，涵盖对话、绘画、编程、办公、生产力等各类人工智能应用，助力提升工作效率和创造力',
  keywords: ['AI工具', '人工智能', 'AI导航', 'ChatGPT', 'AI绘画', 'AI编程', 'AI办公', 'PFinalClub', 'AI工具导航'],
  author: 'PFinalClub',
  language: 'zh-CN',
  links: {
    homepage: 'https://friday-go.icu/',
    twitter: 'https://twitter.com/pfinal_nc',
    github: 'https://github.com/pfinal-nc'
  },
  seo: {
    titleTemplate: '%s - AI 工具导航',
    defaultTitle: 'AI 工具导航 - 精选人工智能工具集合',
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
        title: 'AI 工具导航 RSS Feed',
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
