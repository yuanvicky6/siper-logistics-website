'use client'

import { Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

// New post page redirects to the shared editor without a slug
export default function NewPostPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
      <NewPostRedirect />
    </Suspense>
  )
}

function NewPostRedirect() {
  // Simply render the edit page without slug = new article mode
  const router = useRouter()
  useEffect(() => {
    router.replace('/admin/posts/edit')
  }, [router])
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-400">Loading editor...</div>
    </div>
  )
}
