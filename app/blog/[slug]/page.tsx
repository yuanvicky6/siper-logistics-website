import type { Metadata } from 'next'
import BlogPostContent from './post-content'
import { BLOG_POSTS } from '@/config/blog-posts'

const SITE = 'https://spiderlogisticsinc.cn'

// Pre-render all blog posts at build time for optimal SEO
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    // Slug not in built-in posts: could be an admin-created local draft.
    // Mark noindex so soft-404 URLs never get indexed by search engines.
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    }
  }

  const description = post.excerpt
  const url = `${SITE}/blog/${post.slug}`
  const published = new Date(post.date).toISOString()

  return {
    title: post.title,
    description,
    keywords: [
      'China freight forwarder',
      'shipping from China',
      post.category,
      'freight market update',
      'Spider Logistics blog',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description,
      siteName: 'Spider Logistics - China Freight Forwarder',
      publishedTime: published,
      authors: ['Spider Logistics'],
      tags: [post.category],
      images: [
        {
          url: post.coverImage || `${SITE}/blog-og.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.coverImage || `${SITE}/blog-og.jpg`],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  // JSON-LD structured data for the article (server-rendered)
  const jsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${SITE}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: new Date(post.date).toISOString(),
        inLanguage: 'en',
        author: {
          '@type': 'Organization',
          name: 'Spider Logistics',
          url: SITE,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Shenzhen Spider Logistics Technology Co., Ltd.',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE}/icon.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE}/blog/${post.slug}`,
        },
        image: [`${SITE}/blog-og.jpg`],
        articleSection: post.category,
        keywords: 'China freight, shipping rates, freight forwarding, logistics',
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        ],
      }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={post ?? null} slug={params.slug} />
    </>
  )
}

// Allow admin-created local posts (client-side localStorage) to still resolve
export const dynamicParams = true
