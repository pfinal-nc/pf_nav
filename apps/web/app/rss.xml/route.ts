export const revalidate = 0;

export function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>PFinalClub导航</title>
  <description>优质导航站点，精选技术、设计、工具等内容</description>
  <link>https://nav.pfinal.club</link>
  <atom:link href="https://nav.pfinal.club/rss.xml" rel="self" type="application/rss+xml" />
  <language>zh-CN</language>
  <lastBuildDate>2024-01-01T00:00:00Z</lastBuildDate>
  <pubDate>2024-01-01T00:00:00Z</pubDate>
  <item>
    <title><![CDATA[前端导航]]></title>
    <description><![CDATA[收录优质前端开发资源]]></description>
    <link>https://nav.pfinal.club/site/frontend</link>
    <guid>https://nav.pfinal.club/site/frontend</guid>
    <category>技术</category>
    <pubDate>2024-01-01T00:00:00Z</pubDate>
  </item>
  <item>
    <title><![CDATA[设计工具导航]]></title>
    <description><![CDATA[精选设计类工具与资源]]></description>
    <link>https://nav.pfinal.club/site/design</link>
    <guid>https://nav.pfinal.club/site/design</guid>
    <category>设计</category>
    <pubDate>2024-01-01T00:00:00Z</pubDate>
  </item>
</channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 