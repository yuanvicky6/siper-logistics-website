import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly welcome AI answer engines (GEO) in addition to the wildcard rule
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'Perplexity-User',
          'ClaudeBot',
          'Claude-User',
          'Claude-Search',
          'anthropic-ai',
          'Google-Extended',
          'Applebot',
          'Applebot-Extended',
          'meta-externalagent',
          'Bytespider',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Default rule for all other crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://spiderlogisticsinc.cn/sitemap.xml',
    host: 'https://spiderlogisticsinc.cn',
  }
}
