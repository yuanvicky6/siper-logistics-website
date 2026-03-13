'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface UploadedImage {
  id: string
  name: string
  url: string
  type: string
  size: number
  uploadedAt: Date
}

export default function AdminPage() {
  const [images, setImages] = useState<UploadedImage[]>([])
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedImage) return

    setUploadStatus('uploading')

    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    try {
      // In a real application, you would upload to a server here
      // For now, we'll just create a local preview
      const newImage: UploadedImage = {
        id: Date.now().toString(),
        name: selectedImage.name,
        url: previewUrl!,
        type: selectedImage.type,
        size: selectedImage.size,
        uploadedAt: new Date()
      }

      setImages([...images, newImage])
      setUploadStatus('success')
      setSelectedImage(null)
      setPreviewUrl(null)

      // Reset status after 2 seconds
      setTimeout(() => setUploadStatus('idle'), 2000)
    } catch (error) {
      setUploadStatus('error')
    }
  }

  const handleDelete = (id: string) => {
    setImages(images.filter(img => img.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Image Management
            </h1>
            <p className="text-xl text-blue-100">
              Upload and manage images for your website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Image</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Area */}
              <div>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {previewUrl ? (
                    <div className="space-y-4">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-lg shadow-md"
                      />
                      <p className="text-gray-600">{selectedImage?.name}</p>
                      <p className="text-sm text-gray-500">
                        {selectedImage && formatFileSize(selectedImage.size)}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-6xl">📤</div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {selectedImage && (
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={handleUpload}
                      disabled={uploadStatus === 'uploading'}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {uploadStatus === 'uploading' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </span>
                      ) : uploadStatus === 'success' ? (
                        '✓ Uploaded Successfully!'
                      ) : (
                        'Upload Image'
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedImage(null)
                        setPreviewUrl(null)
                        setUploadStatus('idle')
                      }}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {uploadStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700">Upload failed. Please try again.</p>
                  </div>
                )}
              </div>

              {/* Guidelines */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Upload Guidelines</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Use high-quality images (min 1200x800px)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Compress images for faster loading
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Use descriptive filenames
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Maximum file size: 10MB
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📁 Usage Examples</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Product photos</li>
                    <li>• Company images</li>
                    <li>• Service illustrations</li>
                    <li>• Team photos</li>
                    <li>• Hero banners</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Uploaded Images ({images.length})
              </h2>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                + Add New
              </button>
            </div>

            {images.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-gray-500 text-lg">No images uploaded yet</p>
                <p className="text-gray-400 mt-2">Upload your first image to get started</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={() => handleDelete(image.id)}
                          className="opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 truncate">{image.name}</h3>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                        <span>{formatFileSize(image.size)}</span>
                        <span>{image.uploadedAt.toLocaleDateString()}</span>
                      </div>
                      <div className="mt-2">
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded text-blue-600">
                          /images/{image.name}
                        </code>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">💡 Pro Tips</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Optimize for SEO</h4>
                <p className="text-green-100 text-sm">Use descriptive filenames with keywords</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Consistent Styling</h4>
                <p className="text-green-100 text-sm">Maintain similar aspect ratios for galleries</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regular Updates</h4>
                <p className="text-green-100 text-sm">Keep images fresh and relevant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
