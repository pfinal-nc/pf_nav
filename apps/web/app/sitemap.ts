import { MetadataRoute } from 'next'
import { getPageData } from '@/lib/notion'
import { siteConfig } from '@/config/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  
  // 获取所有导航数据
  let allItems: any[] = []
  try {
    const pageData = await getPageData()
    allItems = Object.values(pageData.items || {}).flat()
  } catch (error) {
    console.error('Error fetching sitemap data:', error)
  }

  // 基础页面
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // 为每个分类创建页面
  const categories = ['技术', '设计', '工具', '学习', '娱乐', '其他']
  categories.forEach(category => {
    routes.push({
      url: `${baseUrl}/category/${encodeURIComponent(category)}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })
  })

  // 为每个网站创建页面（如果需要）
  allItems.forEach(item => {
    routes.push({
      url: `${baseUrl}/site/${encodeURIComponent(item.title)}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    })
  })

  return routes
} 