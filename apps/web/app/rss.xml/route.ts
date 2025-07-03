import { getPageData } from '@/lib/notion'
import { siteConfig } from '@/config/site'

export async function GET() {
  const pageData = await getPageData()
  const allItems = Object.values(pageData.items || {}).flat()

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${siteConfig.name}</title>
  <description>${siteConfig.description}</description>
  <link>${siteConfig.url}</link>
  <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
  <language>${siteConfig.language}</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <pubDate>${new Date().toUTCString()}</pubDate>
  ${allItems.map((item: any) => `
  <item>
    <title><![CDATA[${item.title}]]></title>
    <description><![CDATA[${item.description}]]></description>
    <link>${item.link}</link>
    <guid>${item.link}</guid>
    <category>${item.type}</category>
    <pubDate>${new Date().toUTCString()}</pubDate>
  </item>
  `).join('')}
</channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 