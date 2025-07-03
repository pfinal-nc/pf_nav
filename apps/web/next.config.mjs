/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 14:22:51
 * @FilePath: /m-nav/apps/web/next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    // 临时禁用 ESLint 检查
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ]
  }
}

export default nextConfig