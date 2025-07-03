/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 13:54:10
 * @FilePath: /m-nav/apps/web/next.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 添加下面的配置
  images: {
    unoptimized: true, // 为了静态导出
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com'
    ]
  },
  // 关闭严格模式用于静态导出
  // reactStrictMode: false,
}

export default nextConfig