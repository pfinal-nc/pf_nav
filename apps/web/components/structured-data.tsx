/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-07-03 16:54:38
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 16:54:40
 * @FilePath: /m-nav/apps/web/components/structured-data.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getPageData } from '@/lib/notion'
import { siteConfig } from '@/config/site'

export async function StructuredData() {
  const pageData = await getPageData()
  
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
      "url": siteConfig.links.homepage
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
    ]
  }

  const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${siteConfig.name} - 网站列表`,
    "description": "精选网站导航列表",
    "numberOfItems": Object.values(pageData.items || {}).flat().length,
    "itemListElement": Object.values(pageData.items || {}).flat().map((item: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebSite",
        "name": item.title,
        "description": item.description,
        "url": item.link,
        "category": item.type
      }
    }))
  }

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
          __html: JSON.stringify(itemListStructuredData)
        }}
      />
    </>
  )
} 