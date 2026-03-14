'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, BlogPost } from '@/config/blog-posts'

export default function AdminDashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('admin_logged_in') !== 'true') {
      router.push('/admin/login')
      return
    }
    // 加载文章：优先用 localStorage 中的自定义文章，再合并内置文章
    const stored = localStorage.getItem('admin_posts')
    const customPosts: BlogPost[] = stored ? JSON.parse(stored) : []
    const builtInSlugs = new Set(customPosts.map(p => p.slug))
    const merged = [...customPosts, ...BLOG_POSTS.filter(p => !builtInSlugs.has(p.slug))]
    setPosts(merged)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in')
    router.push('/admin/login')
  }

  const confirmDelete = (slug: string) => {
    setDeleteId(slug)
    setShowDeleteConfirm(true)
  }

  const handleDelete = () => {
    if (!deleteId) return
    const stored = localStorage.getItem('admin_posts')
    const customPosts: BlogPost[] = stored ? JSON.parse(stored) : []
    const updated = customPosts.filter(p => p.slug !== deleteId)
    localStorage.setItem('admin_posts', JSON.stringify(updated))
    setPosts(prev => prev.filter(p => p.slug !== deleteId))
    setShowDeleteConfirm(false)
    setDeleteId(null)
  }

  const categoryColors: Record<string, string> = {
    'Shipping Guide': 'bg-blue-100 text-blue-700',
    'E-Commerce': 'bg-purple-100 text-purple-700',
    'Ocean Freight': 'bg-cyan-100 text-cyan-700',
    'Customs': 'bg-orange-100 text-orange-700',
    'Industry Insights': 'bg-green-100 text-green-700',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-700">SPIDER LOGISTICS</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 text-sm">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-sm text-gray-500 hover:text-blue-600 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:text-red-700 font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4">
            <div className="bg-blue-100 rounded-xl p-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
              <div className="text-sm text-gray-500">Total Articles</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4">
            <div className="bg-green-100 rounded-xl p-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Live</div>
              <div className="text-sm text-gray-500">Site Status</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4">
            <div className="bg-purple-100 rounded-xl p-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">SEO</div>
              <div className="text-sm text-gray-500">Google Indexed</div>
            </div>
          </div>
        </div>

        {/* Articles Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Blog Articles</h2>
            <Link
              href="/admin/posts/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Article
            </Link>
          </div>

          <div className="divide-y divide-gray-50">
            {posts.map((post) => (
              <div key={post.slug} className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">· {post.readTime}</span>
                  </div>
                  <div className="font-semibold text-gray-900 truncate">{post.title}</div>
                  <div className="text-sm text-gray-500 truncate mt-0.5">{post.excerpt}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                    title="View"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>
                  <Link
                    href={`/admin/posts/edit?slug=${post.slug}`}
                    className="text-gray-400 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => confirmDelete(post.slug)}
                    className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delete Confirm Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Article?</h3>
            <p className="text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
