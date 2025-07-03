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