export const siteConfig = {
  name: 'AI 工具导航 - 精选人工智能工具集合 | 免费AI工具推荐网站',
  url: 'https://nav.friday-go.icu',
  ogImage: 'https://nav.friday-go.icu/og-image.jpg',
  description: '精选全球优质 AI 工具，涵盖 ChatGPT、Claude、Midjourney、Stable Diffusion、GitHub Copilot 等人工智能应用。提供免费AI工具导航、AI绘画软件、AI编程助手、AI办公工具、AI翻译工具等分类。2024年最新AI工具推荐，助力提升工作效率和创造力。',
   keywords: [
    'AI工具', '人工智能', 'AI导航', 'ChatGPT', 'Claude', 'Midjourney', 'Stable Diffusion', 
    'AI绘画', 'AI编程', 'AI办公', 'PFinalClub', 'AI工具导航', '免费AI工具', 'AI助手',
    '机器学习', '深度学习', '自然语言处理', '计算机视觉', 'AI聊天机器人', '代码生成',
    '图像生成', '文本生成', '语音识别', 'AI翻译', '智能写作', '数据分析','PFinalClub Nav',
    // 精选核心长尾关键词
    'ChatGPT替代品', '免费ChatGPT', '国内AI工具', 'AI工具推荐', '最好用的AI工具',
    'AI绘画软件', 'AI编程助手', 'GitHub Copilot替代', 'AI代码生成器',
    'AI办公软件', 'AI文档处理', 'AI会议助手',
    'AI翻译工具', '免费AI翻译', 'AI翻译软件',
    'AI写作工具', 'AI写作助手', '智能写作软件',
    'AI图像处理', 'AI图片编辑', 'AI图像识别',
    'AI视频制作', 'AI视频编辑', 'AI视频生成',
    'AI设计工具', 'AI设计软件', 'AI平面设计',
    'AI数据分析', 'AI数据可视化', 'AI数据挖掘',
    'AI营销工具', 'AI营销软件', 'AI广告生成',
    '2025年AI工具', '最新AI工具', '热门AI工具', '实用AI工具',
    'AI工具大全', 'AI工具集合', 'AI工具网站', 'AI工具平台',
    '免费AI工具网站', 'AI工具推荐网站', 'AI工具排行榜'
  ],
  author: 'PFinalClub',
  language: 'zh-CN',
  links: {
    homepage: 'https://friday-go.icu/',
    twitter: 'https://twitter.com/pfinal_nc',
    github: 'https://github.com/pfinal-nc'
  },
  seo: {
    titleTemplate: '%s - AI 工具导航',
    defaultTitle: 'AI 工具导航 - 精选人工智能工具集合 | 免费AI工具推荐网站',
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
        content: 'AI 工具导航'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'AI 工具导航'
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
        rel: 'canonical',
        href: 'https://nav.friday-go.icu'
      },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'AI 工具导航 RSS Feed',
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
