import { getPageData } from '@/lib/notion'
import { siteConfig } from '@/config/site'

export async function StructuredData() {
  const pageData = await getPageData()
  const allItems = Object.values(pageData.items || {}).flat()
  const categories = Object.keys(pageData.items || {})
  const dateModified = new Date().toISOString().slice(0, 10)

  const webSiteData = {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: 'AI Tools Directory',
    alternateName: ['AI 工具导航', 'PFinalClub AI Nav', siteConfig.name],
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: ['zh-CN', 'en'],
    dateModified,
    isAccessibleForFree: true,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.links.homepage,
    },
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#geo-summary', '#faq', '#about-title'],
    },
  }

  const organizationData = {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: 'PFinalClub',
    url: siteConfig.links.homepage,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512,
    },
    description: 'Technology community focused on AI tools directory and engineering practice',
    sameAs: [siteConfig.links.github, siteConfig.links.twitter, siteConfig.links.homepage],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: siteConfig.url,
      availableLanguage: ['Chinese', 'English'],
    },
  }

  const collectionPage = {
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: {
      '@type': 'Thing',
      name: 'Artificial intelligence tools',
      description: 'Curated directory of AI chat, image, video, coding and productivity tools',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: siteConfig.ogImage,
    },
    dateModified,
    inLanguage: 'zh-CN',
    mainEntity: { '@id': `${siteConfig.url}/#itemlist` },
  }

  const breadcrumbData = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Tools Directory',
        item: `${siteConfig.url}/#category-ai`,
      },
    ],
  }

  const faqData = {
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AI Tools Directory?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `AI Tools Directory (nav.friday-go.icu) is a free curated navigation website by PFinalClub for premium AI tools worldwide, covering ChatGPT, Claude, Midjourney, Cursor, Kling, DeepSeek and more.`,
        },
      },
      {
        '@type': 'Question',
        name: 'AI 工具导航是什么？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `AI 工具导航（${siteConfig.url}）由 PFinalClub 维护，免费收录全球优质人工智能工具，覆盖对话、绘画、视频、编程、办公、翻译等分类，并持续更新。`,
        },
      },
      {
        '@type': 'Question',
        name: 'Is this website free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. AI Tools Directory is completely free to browse. Individual third-party tools may have their own free or paid plans.',
        },
      },
      {
        '@type': 'Question',
        name: 'What categories of AI tools are covered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The directory currently covers ${categories.join(', ')}, with ${allItems.length}+ curated tools including ChatGPT, Claude, Gemini, DeepSeek, Midjourney, Flux, Kling, Cursor, Windsurf, v0 and GitHub Copilot.`,
        },
      },
      {
        '@type': 'Question',
        name: '2026 年有哪些值得关注的 AI 工具？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '常见推荐包括对话类 ChatGPT、Claude、Gemini、DeepSeek、Kimi；绘画类 Midjourney、Flux、即梦；视频类 Kling、Sora、Runway；编程类 Cursor、Windsurf、v0、GitHub Copilot。完整列表见本站分类页。',
        },
      },
      {
        '@type': 'Question',
        name: 'How often is the tool list updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The list is updated regularly throughout 2026. New popular tools are added and broken or obsolete links are removed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I submit an AI tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Submit suggestions via GitHub (${siteConfig.links.github}). Quality tools that fit the directory criteria are reviewed and may be added.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What are the best free AI tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Strong free or freemium options include ChatGPT, Claude, DeepSeek, Google Gemini, Google AI Studio, Poe, Hugging Face Chat, and more. Always check each vendor site for current pricing.',
        },
      },
    ],
  }

  const itemListData = {
    '@type': 'ItemList',
    '@id': `${siteConfig.url}/#itemlist`,
    name: 'Curated AI Tools',
    description:
      'Curated AI tools directory list with categories including AI chat, image generation, video, music, programming and more',
    numberOfItems: allItems.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: allItems.map((item: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: item.link,
      item: {
        '@type': 'SoftwareApplication',
        name: item.title,
        description: item.description,
        url: item.link,
        applicationCategory: mapApplicationCategory(item.type),
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Directory listing is free; product pricing varies by vendor',
        },
      },
    })),
  }

  const dataCatalog = {
    '@type': 'DataCatalog',
    '@id': `${siteConfig.url}/#catalog`,
    name: 'AI Tools Directory Catalog',
    description: 'Machine-readable catalog of curated AI tools for humans and generative engines',
    url: siteConfig.url,
    keywords: siteConfig.keywords.join(', '),
    creator: { '@id': `${siteConfig.url}/#organization` },
    dataset: {
      '@type': 'Dataset',
      name: 'AI Tools Directory Full List',
      description: `Complete list of ${allItems.length} curated AI tools`,
      url: `${siteConfig.url}/llms-full.txt`,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      encodingFormat: 'text/plain',
      dateModified,
    },
  }

  const fullGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      webSiteData,
      organizationData,
      collectionPage,
      breadcrumbData,
      faqData,
      itemListData,
      dataCatalog,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(fullGraph),
      }}
    />
  )
}

function mapApplicationCategory(type: string): string {
  const map: Record<string, string> = {
    AI: 'BusinessApplication',
    'AI Painting': 'MultimediaApplication',
    'AI Video': 'MultimediaApplication',
    'AI Music': 'MultimediaApplication',
    'AI Writing': 'BusinessApplication',
    'AI Translation': 'BusinessApplication',
    'AI Programming': 'DeveloperApplication',
    'AI Platform': 'DeveloperApplication',
    'AI Office': 'BusinessApplication',
    'AI Analytics': 'BusinessApplication',
    'AI Design': 'DesignApplication',
    Tools: 'UtilitiesApplication',
  }
  return map[type] || 'WebApplication'
}
