import { Metadata } from 'next'
import { BLOG_POSTS } from '@/config/blog-posts'

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Article Not Found | Spider Logistics',
      description: 'The requested article could not be found.',
    }
  }

  return {
    title: `${post.title} | Spider Logistics Blog`,
    description: post.excerpt,
    keywords: [
      'China freight',
      'shipping rates',
      'freight forwarding',
      post.category.toLowerCase(),
      'logistics blog',
    ],
    alternates: {
      canonical: `https://spiderlogisticsinc.cn/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://spiderlogisticsinc.cn/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Spider Logistics'],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}
