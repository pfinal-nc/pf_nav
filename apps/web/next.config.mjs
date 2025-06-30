/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-06-30 09:28:10
 * @FilePath: /m-nav/apps/web/next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@m-nav/ui"],
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  env: {
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  }
}

export default nextConfig
