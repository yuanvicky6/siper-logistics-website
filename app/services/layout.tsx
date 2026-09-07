import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Air & Sea Freight, Customs Clearance from China',
  description: 'Spider Logistics offers air freight, sea freight (FCL & LCL), customs clearance, door-to-door delivery, and warehouse services from China to worldwide destinations.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/services',
  },
  openGraph: {
    title: 'Logistics Services | Spider Logistics',
    description: 'Air freight, sea freight, customs clearance, and door-to-door delivery from China to Bangladesh, Israel, Africa, Middle East and beyond.',
    url: 'https://spiderlogisticsinc.cn/services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spider Logistics logistics services - air freight, sea freight, customs clearance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics Services | Spider Logistics',
    description: 'Air freight, sea freight (FCL & LCL), customs clearance and door-to-door delivery from China.',
    images: ['/og-image.jpg'],
  },
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://spiderlogisticsinc.cn/services#services',
  name: 'Spider Logistics Services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Air Freight from China',
        description: 'Fast and reliable air cargo services from China to Bangladesh, Israel, Africa and worldwide.',
        provider: { '@id': 'https://spiderlogisticsinc.cn/#organization' },
        areaServed: 'Worldwide',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Sea Freight FCL & LCL from China',
        description: 'Cost-effective ocean freight solutions from China. FCL and LCL options to Bangladesh, Israel, Africa and worldwide.',
        provider: { '@id': 'https://spiderlogisticsinc.cn/#organization' },
        areaServed: 'Worldwide',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'China Customs Clearance',
        description: 'Expert customs brokerage services ensuring smooth and compliant international trade from China.',
        provider: { '@id': 'https://spiderlogisticsinc.cn/#organization' },
        areaServed: 'Worldwide',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Door-to-Door Delivery',
        description: 'Complete door-to-door logistics from Chinese factories to destinations worldwide.',
        provider: { '@id': 'https://spiderlogisticsinc.cn/#organization' },
        areaServed: 'Worldwide',
      },
    },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spiderlogisticsinc.cn' },
      { '@type': 'ListItem', position: 2, name: 'Our Services', item: 'https://spiderlogisticsinc.cn/services' },
    ],
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  )
}
