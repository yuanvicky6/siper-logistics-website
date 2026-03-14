'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BLOG_POSTS, BlogPost } from '@/config/blog-posts'

const categoryColors: Record<string, string> = {
  'Shipping Guide': 'bg-blue-100 text-blue-700',
  'E-Commerce': 'bg-purple-100 text-purple-700',
  'Ocean Freight': 'bg-cyan-100 text-cyan-700',
  'Customs': 'bg-orange-100 text-orange-700',
  'Industry Insights': 'bg-green-100 text-green-700',
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS)

  useEffect(() => {
    const stored = localStorage.getItem('admin_posts')
    const customPosts: BlogPost[] = stored ? JSON.parse(stored) : []
    const builtInSlugs = new Set(customPosts.map(p => p.slug))
    const merged = [...customPosts, ...BLOG_POSTS.filter(p => !builtInSlugs.has(p.slug))]
    setPosts(merged)
  }, [])

  const featured = posts[0]
  const rest = posts.slice(1)

  if (!featured) return null

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Spider Logistics Blog
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Industry insights, shipping guides, and expert tips to help your business move smarter.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-6">Featured Article</h2>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 h-48 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-200 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {featured.category}
                  </span>
                  <span className="text-sm text-gray-400">{featured.date}</span>
                  <span className="text-sm text-gray-400">· {featured.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {featured.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center text-blue-600 font-semibold">
                  Read Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Post Grid */}
        {rest.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-36 flex items-center justify-center flex-shrink-0">
                      <svg className="w-14 h-14 text-blue-200 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-400">{post.date}</span>
                        <span className="text-blue-600 text-sm font-semibold group-hover:underline">Read more →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
