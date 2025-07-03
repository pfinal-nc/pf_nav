export const revalidate = 0;

import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // 基础页面
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // 为每个分类创建页面
  const categories = ['技术', '设计', '工具', '学习', '娱乐', '其他']
  categories.forEach(category => {
    routes.push({
      url: `${baseUrl}/category/${encodeURIComponent(category)}`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })
  })

  return routes
} 