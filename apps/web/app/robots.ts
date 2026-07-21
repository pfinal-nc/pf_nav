import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-static'

/** AI / generative-engine crawlers (GEO) */
const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'GoogleOther',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'Diffbot',
  'FacebookBot',
  'meta-externalagent',
  'Amazonbot',
  'YouBot',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  const allowAll = {
    allow: '/',
  }

  return {
    rules: [
      {
        userAgent: '*',
        ...allowAll,
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        ...allowAll,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
