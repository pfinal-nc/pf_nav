/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-07-03 17:40:07
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 17:40:28
 * @FilePath: /m-nav/apps/web/app/sitemap.xml/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const revalidate = 0;

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nav.pfinal.club/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nav.pfinal.club/category/%E6%8A%80%E6%9C%AF</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- 其它静态页面... -->
</urlset>
`
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}