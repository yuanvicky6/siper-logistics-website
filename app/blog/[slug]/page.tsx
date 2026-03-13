import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BLOG_POSTS } from '@/config/blog-posts'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Spider Logistics Blog`,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  'Shipping Guide': 'bg-blue-100 text-blue-700',
  'E-Commerce': 'bg-purple-100 text-purple-700',
  'Ocean Freight': 'bg-cyan-100 text-cyan-700',
  'Customs': 'bg-orange-100 text-orange-700',
  'Industry Insights': 'bg-green-100 text-green-700',
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-900 mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(
        <li key={key++} className="ml-6 mb-2 text-gray-700 list-decimal">
          {line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
        </li>
      )
    } else if (line.startsWith('- ')) {
      const text = line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')
      elements.push(
        <li key={key++} className="ml-6 mb-2 text-gray-700 list-disc">
          {text}
        </li>
      )
    } else if (line.startsWith('|') && line.includes('|')) {
      if (line.includes('---')) continue
      const cells = line.split('|').filter(Boolean).map(c => c.trim())
      const isHeader = lines[i + 1]?.includes('---')
      elements.push(
        <tr key={key++} className={isHeader ? 'bg-blue-50' : 'border-t border-gray-100'}>
          {cells.map((cell, ci) => isHeader
            ? <th key={ci} className="px-4 py-2 text-left text-sm font-semibold text-gray-700">{cell}</th>
            : <td key={ci} className="px-4 py-2 text-sm text-gray-600">{cell}</td>
          )}
        </tr>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="mb-2" />)
    } else {
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: html }} />
      )
    }
  }

  // Wrap table rows
  const wrapped: JSX.Element[] = []
  let tableRows: JSX.Element[] = []
  for (const el of elements) {
    if (el.type === 'tr') {
      tableRows.push(el)
    } else {
      if (tableRows.length > 0) {
        wrapped.push(
          <div key={key++} className="overflow-x-auto my-6">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <tbody>{tableRows}</tbody>
            </table>
          </div>
        )
        tableRows = []
      }
      wrapped.push(el)
    }
  }
  if (tableRows.length > 0) {
    wrapped.push(
      <div key={key++} className="overflow-x-auto my-6">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    )
  }

  return wrapped
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-white/20 text-white'}`}>
              {post.category}
            </span>
            <span className="text-blue-200 text-sm">{post.date}</span>
            <span className="text-blue-200 text-sm">· {post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to Ship?</h3>
          <p className="text-blue-100 mb-6">
            Get a free quote from Spider Logistics. Fast, reliable, and transparent.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[r.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {r.category}
                  </span>
                  <h3 className="mt-3 font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{r.readTime} · {r.date}</p>
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
