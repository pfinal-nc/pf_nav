import { getPageData } from '@/lib/notion'
import { siteConfig } from '@/config/site'

export async function StructuredData() {
  const pageData = await getPageData()
  const allItems = Object.values(pageData.items || {}).flat()
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "author": {
      "@type": "Person",
      "name": siteConfig.author,
      "url": siteConfig.links.homepage
    },
    "publisher": {
      "@type": "Organization",
      "name": "PFinalClub",
      "url": siteConfig.links.homepage,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`
      },
      "sameAs": [
        siteConfig.links.github,
        siteConfig.links.twitter
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      siteConfig.links.github,
      siteConfig.links.twitter
    ],
    "inLanguage": "zh-CN",
    "keywords": siteConfig.keywords.slice(0, 10).join(", ")
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PFinalClub",
    "url": siteConfig.links.homepage,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/logo.png`,
      "width": 512,
      "height": 512
    },
    "description": "专注于AI工具导航和分享的技术社区",
    "sameAs": [
      siteConfig.links.github,
      siteConfig.links.twitter
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": siteConfig.url
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI 工具导航",
        "item": `${siteConfig.url}#ai-tools`
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "什么是AI工具导航？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI工具导航是一个精选全球优质人工智能工具的导航网站，涵盖ChatGPT、Claude、Midjourney、Stable Diffusion、GitHub Copilot等各类AI应用，帮助用户快速找到合适的AI工具。"
        }
      },
      {
        "@type": "Question",
        "name": "这个网站是免费的吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的，AI工具导航完全免费使用，我们致力于为用户提供优质的AI工具发现体验。"
        }
      },
      {
        "@type": "Question",
        "name": "网站包含哪些类型的AI工具？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们收录了对话AI、AI绘画、AI编程、AI办公、文本生成、图像生成、语音识别、AI翻译等多种类型的工具。"
        }
      },
      {
        "@type": "Question",
        "name": "如何搜索特定的AI工具？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "您可以使用页面顶部的搜索框，输入工具名称、功能或关键词来快速找到相关的AI工具。"
        }
      },
      {
        "@type": "Question",
        "name": "有哪些免费的AI工具推荐？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们收录了大量免费AI工具，包括免费AI绘画软件、免费AI翻译工具、免费AI写作助手等，用户可以根据需求选择合适的免费工具。"
        }
      },
      {
        "@type": "Question",
        "name": "ChatGPT有哪些替代品？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "除了ChatGPT，还有Claude、Bard、文心一言、通义千问等优秀的AI对话工具，每个都有其特色和优势。"
        }
      },
      {
        "@type": "Question",
        "name": "如何选择合适的AI绘画工具？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以根据需求选择：Midjourney适合艺术创作，Stable Diffusion适合技术用户，DALL-E适合简单易用，Canva AI适合设计新手。"
        }
      },
      {
        "@type": "Question",
        "name": "AI编程助手有哪些推荐？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GitHub Copilot是最知名的AI编程助手，还有Cursor、Tabnine、CodeWhisperer等优秀选择，支持多种编程语言。"
        }
      },
      {
        "@type": "Question",
        "name": "网站多久更新一次？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我们定期更新AI工具库，添加最新的AI工具和功能，确保用户能够发现和使用最新的AI技术。"
        }
      },
      {
        "@type": "Question",
        "name": "如何提交新的AI工具？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "如果您发现优秀的AI工具，可以通过我们的联系方式提交建议，我们会认真评估并考虑添加到工具库中。"
        }
      }
    ]
  }

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${siteConfig.name} - 网站列表`,
    "description": "精选AI工具导航列表",
    "numberOfItems": allItems.length,
    "itemListElement": allItems.map((item: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebSite",
        "name": item.title,
        "description": item.description,
        "url": item.link,
        "category": item.type,
        "inLanguage": "zh-CN"
      }
    }))
  }

  // 添加软件应用类型的结构化数据，针对AI工具
  const softwareApplications = allItems
    .filter((item: any) => item.type === 'AI')
    .slice(0, 10) // 限制数量以避免数据过大
    .map((item: any, index: number) => ({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": item.title,
      "description": item.description,
      "url": item.link,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListStructuredData)
        }}
      />
      {softwareApplications.map((app: any, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(app)
          }}
        />
      ))}
    </>
  )
}