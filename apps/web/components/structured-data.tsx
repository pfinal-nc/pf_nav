import { getPageData } from '@/lib/notion'
import { siteConfig } from '@/config/site'

export async function StructuredData() {
  const pageData = await getPageData()
  const allItems = Object.values(pageData.items || {}).flat()

  const webSiteData = {
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
        "urlTemplate": `${siteConfig.url}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "zh-CN"
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
        "item": `${siteConfig.url}#category-ai`
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
        "name": "What categories of AI tools are covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our directory covers AI chat assistants (ChatGPT, Claude, Gemini, DeepSeek), AI image generators (Midjourney, DALL-E, Stable Diffusion), AI video tools (Sora, Runway, Pika), AI music generators (Suno, Udio, AIVA), AI writing tools, AI programming assistants (Cursor, GitHub Copilot), AI office tools, and more."
        }
      },
      {
        "@type": "Question",
        "name": "How often is the tool list updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We regularly update our tool list to include the latest AI tools and remove outdated entries. We monitor the AI industry trends and add new tools as they gain popularity."
        }
      },
      {
        "@type": "Question",
        "name": "How can I submit an AI tool to the directory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us through our GitHub repository or submit feedback. We review all submissions and add quality tools that meet our criteria."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best free AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some of the best free AI tools include ChatGPT, Claude, DeepSeek, Google Gemini, GitHub Copilot (free tier), Poe, Hugging Face, and more. Our directory includes both free and paid tools with their pricing information."
        }
      }
    ]
  }

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${siteConfig.name} - Website List`,
    "description": "Curated AI tools directory list with categories including AI chat, image generation, video, music, programming and more",
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

  const softwareApplications = allItems
    .slice(0, 10)
    .map((item: any) => ({
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
    }))

  const fullGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webSiteData,
      organizationData,
      breadcrumbData,
      faqData,
      itemListData,
      ...softwareApplications
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(fullGraph)
      }}
    />
  )
}
