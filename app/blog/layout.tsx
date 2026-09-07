import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | China Freight & Shipping Market Insights',
  description: 'Spider Logistics blog — latest China freight market updates, shipping rates, China to Bangladesh & Israel logistics guides, customs clearance tips and e-commerce logistics insights.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/blog',
  },
  openGraph: {
    title: 'Spider Logistics Blog | China Freight & Shipping Insights',
    description: 'Latest China freight market updates, shipping guides and logistics insights — air & sea freight from China to Bangladesh, Israel, Africa and worldwide.',
    url: 'https://spiderlogisticsinc.cn/blog',
    images: [
      {
        url: '/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Spider Logistics Blog - China Freight & Logistics Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spider Logistics Blog | China Freight & Shipping Insights',
    description: 'Latest China freight market updates, shipping guides and logistics insights.',
    images: ['/blog-og.jpg'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
