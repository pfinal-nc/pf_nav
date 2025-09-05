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
    "inLanguage": "en-US",
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
    "description": "Technology community focused on AI tools directory and sharing",
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
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Tools Directory",
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
        "name": "What is AI Tools Directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Tools Directory is a curated navigation website for premium artificial intelligence tools worldwide, covering ChatGPT, Claude, Midjourney, Stable Diffusion, GitHub Copilot and other AI applications, helping users quickly find suitable AI tools."
        }
      },
      {
        "@type": "Question",
        "name": "Is this website free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AI Tools Directory is completely free to use. We are committed to providing users with a high-quality AI tool discovery experience."
        }
      },
      {
        "@type": "Question",
        "name": "What types of AI tools does the website include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include various types of tools such as conversational AI, AI painting, AI programming, AI office, text generation, image generation, speech recognition, AI translation and more."
        }
      },
      {
        "@type": "Question",
        "name": "How to search for specific AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can use the search box at the top of the page, enter tool names, functions or keywords to quickly find relevant AI tools."
        }
      },
      {
        "@type": "Question",
        "name": "What free AI tools are recommended?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We include a large number of free AI tools, including free AI painting software, free AI translation tools, free AI writing assistants, etc. Users can choose suitable free tools according to their needs."
        }
      },
      {
        "@type": "Question",
        "name": "What are the alternatives to ChatGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In addition to ChatGPT, there are excellent AI conversation tools such as Claude, Bard, Wenxin Yiyan, Tongyi Qianwen, etc., each with its own characteristics and advantages."
        }
      },
      {
        "@type": "Question",
        "name": "How to choose the right AI painting tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can choose according to your needs: Midjourney is suitable for artistic creation, Stable Diffusion is suitable for technical users, DALL-E is suitable for simplicity and ease of use, Canva AI is suitable for design beginners."
        }
      },
      {
        "@type": "Question",
        "name": "What AI programming assistants are recommended?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GitHub Copilot is the most well-known AI programming assistant, and there are also excellent choices such as Cursor, Tabnine, CodeWhisperer, etc., supporting multiple programming languages."
        }
      },
      {
        "@type": "Question",
        "name": "How often is the website updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We regularly update the AI tools library, adding the latest AI tools and features to ensure users can discover and use the latest AI technology."
        }
      },
      {
        "@type": "Question",
        "name": "How to submit new AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you discover excellent AI tools, you can submit suggestions through our contact information. We will carefully evaluate and consider adding them to the tools library."
        }
      }
    ]
  }

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${siteConfig.name} - Website List`,
    "description": "Curated AI tools directory list",
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
        "inLanguage": "en-US"
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