import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-static'

// AI tool categories for sitemap
const CATEGORIES = [
  { id: 'ai', name: 'AI', priority: 0.9 },
  { id: 'ai-painting', name: 'AI Painting', priority: 0.85 },
  { id: 'ai-video', name: 'AI Video', priority: 0.85 },
  { id: 'ai-music', name: 'AI Music', priority: 0.8 },
  { id: 'ai-writing', name: 'AI Writing', priority: 0.8 },
  { id: 'ai-translation', name: 'AI Translation', priority: 0.8 },
  { id: 'ai-platform', name: 'AI Platform', priority: 0.8 },
  { id: 'ai-office', name: 'AI Office', priority: 0.8 },
  { id: 'ai-programming', name: 'AI Programming', priority: 0.85 },
  { id: 'ai-analytics', name: 'AI Analytics', priority: 0.75 },
  { id: 'ai-design', name: 'AI Design', priority: 0.75 },
  { id: 'tools', name: 'Tools', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  // Category anchor pages - these help Google understand site structure
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}#category-${cat.id}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: cat.priority,
  }))

  // Chinese version pages
  const zhPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}#category-ai`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          'zh-CN': `${baseUrl}#category-ai`,
        },
      },
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]

  return [...staticPages, ...categoryPages, ...zhPages]
}
