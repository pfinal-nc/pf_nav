export const siteConfig = {
  name: 'AI Tools Directory - Curated AI Tools Collection | Free AI Tools Recommendation',
  url: 'https://nav.friday-go.icu',
  ogImage: 'https://nav.friday-go.icu/og-image.svg',
  description: 'Discover the best AI tools worldwide, including ChatGPT, Claude, Gemini, Midjourney, Cursor, GitHub Copilot, Kling, DeepSeek and more. Free AI tools directory covering AI chat, painting, video, programming, office and translation. Continuously updated AI tools recommendations for 2026.',
  descriptionZh: '免费 AI 工具导航（PFinalClub）：精选 ChatGPT、Claude、Gemini、Midjourney、Cursor、Kling、DeepSeek 等全球优质人工智能工具，覆盖对话、绘画、视频、编程、办公与翻译，2026 持续更新。',
  keywords: [
    'AI tools',
    'AI tools directory',
    'AI 工具导航',
    'AI 工具推荐',
    '免费 AI 工具',
    'ChatGPT',
    'Claude',
    'Midjourney',
    'artificial intelligence tools',
    'AI software',
    'AI chat',
    'AI image generator',
    'AI writing tools',
    'AI programming',
    'AI office tools',
    'free AI tools',
    'best AI tools 2026',
    '2026 AI 工具',
    'AI tools collection',
    'AI platform',
    'AI assistant',
    'AI music generator',
    'AI video generator',
    'AI translation',
    'DeepSeek',
    'Grok',
    'Perplexity',
    'Cursor AI',
    'Copilot',
    'Gemini',
    'Suno',
    'Kling AI',
    'DALL-E',
    'v0',
    'Windsurf',
    'Lovable',
    'OpenRouter',
    'NotebookLM',
    'AI productivity',
    'AI tools for developers',
    'AI tools for business',
  ],
  author: 'PFinalClub',
  language: 'zh-CN',
  links: {
    homepage: 'https://friday-go.icu/',
    twitter: 'https://twitter.com/pfinal_nc',
    github: 'https://github.com/pfinal-nc'
  },
  geo: {
    llmsTxt: 'https://nav.friday-go.icu/llms.txt',
    llmsFullTxt: 'https://nav.friday-go.icu/llms-full.txt',
    preferredCitation: 'AI Tools Directory by PFinalClub (https://nav.friday-go.icu/)',
  },
  seo: {
    titleTemplate: '%s - AI Tools Directory',
    defaultTitle: 'AI Tools Directory - Curated AI Tools Collection | Free AI Tools Recommendation',
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
      },
      {
        name: 'application-name',
        content: 'AI Tools Directory'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'AI Tools Directory'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'msapplication-TileColor',
        content: '#4f46e5'
      },
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      },
      {
        name: 'theme-color',
        content: '#4f46e5'
      }
    ],
    additionalLinkTags: [
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'AI Tools Directory RSS Feed',
        href: '/rss.xml'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      },
      {
        rel: 'dns-prefetch',
        href: '//www.google-analytics.com'
      },
      {
        rel: 'dns-prefetch',
        href: '//www.googletagmanager.com'
      }
    ]
  }
}

export type SiteConfig = typeof siteConfig

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
}
