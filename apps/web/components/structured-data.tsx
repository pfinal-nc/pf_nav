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
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
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
      // ... (other questions remain the same)
    ]
  }

  const itemListData = {
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

  const softwareApplications = allItems
    .slice(0, 10) // Limit for performance
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
    }));

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