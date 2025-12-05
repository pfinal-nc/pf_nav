export const siteConfig = {
  name: 'AI Tools Directory - Curated AI Tools Collection | Free AI Tools Recommendation',
  url: 'https://nav.friday-go.icu',
  ogImage: 'https://nav.friday-go.icu/og-image.jpg',
  description: 'Discover the best AI tools worldwide, including ChatGPT, Claude, Midjourney, Stable Diffusion, GitHub Copilot and more. Free AI tools directory with AI painting, AI programming, AI office tools, AI translation and other categories. Latest AI tools recommendations to boost productivity and creativity.',
   keywords: [],
  author: 'PFinalClub',
  language: 'zh-CN',
  links: {
    homepage: 'https://friday-go.icu/',
    twitter: 'https://twitter.com/pfinal_nc',
    github: 'https://github.com/pfinal-nc'
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
