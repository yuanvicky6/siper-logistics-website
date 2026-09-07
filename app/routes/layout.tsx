import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Routes from China | Transit Times & Ports',
  description: 'Spider Logistics shipping routes from China to Bangladesh, Israel, Africa, Middle East and worldwide. Check transit times for air and sea freight.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/routes',
  },
  openGraph: {
    title: 'Shipping Routes from China | Spider Logistics',
    description: 'Air and sea freight routes from Shenzhen, Guangzhou, Shanghai and Hong Kong to Bangladesh, Israel, Africa, Middle East and worldwide.',
    url: 'https://spiderlogisticsinc.cn/routes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spider Logistics shipping routes from China to worldwide destinations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shipping Routes from China | Spider Logistics',
    description: 'Air and sea freight routes and transit times from China to Bangladesh, Israel, Africa, Middle East and worldwide.',
    images: ['/og-image.jpg'],
  },
}

const routesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://spiderlogisticsinc.cn/routes#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spiderlogisticsinc.cn' },
    { '@type': 'ListItem', position: 2, name: 'Shipping Routes', item: 'https://spiderlogisticsinc.cn/routes' },
  ],
}

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routesJsonLd) }}
      />
      {children}
    </>
  )
}
