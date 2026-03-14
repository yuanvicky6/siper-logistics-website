'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, BlogPost } from '@/config/blog-posts'
import { Suspense } from 'react'

const CATEGORIES = ['Shipping Guide', 'E-Commerce', 'Ocean Freight', 'Customs', 'Industry Insights']

function PostEditor() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editSlug = searchParams.get('slug')
  const isEdit = !!editSlug
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Shipping Guide',
    readTime: '5 min read',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    coverImage: '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('admin_logged_in') !== 'true') {
      router.push('/admin/login')
      return
    }
    if (isEdit && editSlug) {
      // 先从 localStorage 找，再从内置文章找
      const stored = localStorage.getItem('admin_posts')
      const customPosts: BlogPost[] = stored ? JSON.parse(stored) : []
      const found = customPosts.find(p => p.slug === editSlug) || BLOG_POSTS.find(p => p.slug === editSlug)
      if (found) {
        setForm({
          title: found.title,
          slug: found.slug,
          excerpt: found.excerpt,
          content: found.content,
          category: found.category,
          readTime: found.readTime,
          date: found.date,
          coverImage: found.coverImage || '',
        })
      }
    }
  }, [isEdit, editSlug, router])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG, PNG, WebP)')
      return
    }
    setImageUploading(true)
    const reader = new FileReader()
    reader.onload = (ev) => {
      const result = ev.target?.result as string
      setForm(prev => ({ ...prev, coverImage: result }))
      setImageUploading(false)
    }
    reader.onerror = () => {
      alert('Failed to read image file. Please try again.')
      setImageUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: isEdit ? prev.slug : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    }))
  }

  const handleSave = () => {
    if (!form.title || !form.slug || !form.content) {
      alert('Please fill in Title, Slug, and Content before saving.')
      return
    }
    setSaving(true)

    try {
      const stored = localStorage.getItem('admin_posts')
      const customPosts: BlogPost[] = stored ? JSON.parse(stored) : []

      const newPost: BlogPost = { ...form }

      let updated: BlogPost[]
      if (isEdit) {
        updated = customPosts.map(p => p.slug === editSlug ? newPost : p)
        if (!customPosts.find(p => p.slug === editSlug)) {
          updated = [newPost, ...customPosts]
        }
      } else {
        updated = [newPost, ...customPosts]
      }

      localStorage.setItem('admin_posts', JSON.stringify(updated))

      setTimeout(() => {
        setSaving(false)
        setSaved(true)
        setTimeout(() => {
          router.push('/admin/dashboard')
        }, 800)
      }, 600)
    } catch (err) {
      setSaving(false)
      console.error('Save failed:', err)
      // 可能是 localStorage 存满了（图片太大）
      alert('Save failed: storage is full. Try removing the cover image or using a smaller image (under 500KB).')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <span className="text-lg font-bold text-gray-900">
              {isEdit ? 'Edit Article' : 'New Article'}
            </span>
          </div>
          <button
            onClick={handleSave}
            disabled={saving || saved}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
          >
            {saved ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Saved!
              </>
            ) : saving ? 'Saving...' : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Save Article
              </>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
          {/* Cover Image */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-gray-700">Cover Image</label>
                <span className="text-xs text-gray-400">JPG / PNG / WebP · Max 5MB (auto-compressed)</span>
              </div>

              {/* Preview */}
              {form.coverImage ? (
                <div className="relative rounded-xl overflow-hidden mb-3 bg-gray-100" style={{ height: '180px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={form.coverImage}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setForm(prev => ({ ...prev, coverImage: '' }))}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
                    title="Remove image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-200 rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors mb-3 group"
                >
                  {imageUploading ? (
                    <div className="text-gray-400 text-sm">Uploading...</div>
                  ) : (
                    <>
                      <svg className="w-10 h-10 text-gray-300 group-hover:text-blue-400 mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-400 group-hover:text-blue-500">Click to upload cover image</span>
                      <span className="text-xs text-gray-300 mt-1">Recommended: 1200 × 630 px</span>
                    </>
                  )}
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {!form.coverImage && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl py-2 text-sm font-medium transition-colors"
                >
                  Choose File
                </button>
              )}
            </div>

            {/* Title */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Article Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => handleTitleChange(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter article title..."
              />
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt / Summary *</label>
              <textarea
                value={form.excerpt}
                onChange={e => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Brief summary shown on the blog listing page..."
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700">Article Content *</label>
                <span className="text-xs text-gray-400">Supports ## headings, **bold**, - lists</span>
              </div>
              <textarea
                value={form.content}
                onChange={e => setForm(prev => ({ ...prev, content: e.target.value }))}
                rows={20}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                placeholder={`## Introduction\n\nWrite your article content here...\n\n## Section Heading\n\nMore content...\n\n- Bullet point 1\n- Bullet point 2`}
              />
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            {/* Publish */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Publish Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={e => setForm(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="article-url-slug"
                  />
                  <p className="text-xs text-gray-400 mt-1">/blog/{form.slug || 'slug'}</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Publish Date</label>
                  <input
                    type="text"
                    value={form.date}
                    onChange={e => setForm(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="March 13, 2025"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Read Time</label>
                  <input
                    type="text"
                    value={form.readTime}
                    onChange={e => setForm(prev => ({ ...prev, readTime: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="5 min read"
                  />
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Category</h3>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={form.category === cat}
                      onChange={() => setForm(prev => ({ ...prev, category: cat }))}
                      className="text-blue-600"
                    />
                    <span className="text-sm text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-blue-800 mb-3">Writing Tips</h3>
              <ul className="text-xs text-blue-700 space-y-1.5">
                <li>• Use <code className="bg-blue-100 px-1 rounded">## Heading</code> for sections</li>
                <li>• Use <code className="bg-blue-100 px-1 rounded">**bold**</code> for emphasis</li>
                <li>• Use <code className="bg-blue-100 px-1 rounded">- item</code> for bullet lists</li>
                <li>• Aim for 500–1500 words</li>
                <li>• Include a call to action at the end</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PostEditorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
      <PostEditor />
    </Suspense>
  )
}
