import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Freight Forwarder in Shenzhen Since 2010',
  description: 'Learn about Shenzhen Spider Logistics Technology Co., Ltd. — our history, mission, team, and commitment to reliable international freight forwarding since 2010.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/about',
  },
  openGraph: {
    title: 'About Spider Logistics | International Freight Forwarder',
    description: 'Founded in 2010, Spider Logistics is a Shenzhen-based international freight forwarder specializing in air and sea freight from China to global destinations.',
    url: 'https://spiderlogisticsinc.cn/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spider Logistics - International Freight Forwarding from China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Spider Logistics | International Freight Forwarder',
    description: 'Shenzhen-based freight forwarder since 2010 — air & sea freight from China to Bangladesh, Israel, Africa and worldwide.',
    images: ['/og-image.jpg'],
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://spiderlogisticsinc.cn/about#webpage',
  url: 'https://spiderlogisticsinc.cn/about',
  name: 'About Spider Logistics',
  inLanguage: 'en',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://spiderlogisticsinc.cn/#organization',
    name: 'Shenzhen Spider Logistics Technology Co., Ltd.',
    foundingDate: '2010',
    url: 'https://spiderlogisticsinc.cn',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spiderlogisticsinc.cn' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://spiderlogisticsinc.cn/about' },
    ],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  )
}
