import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Freight Quote',
  description: 'Contact Spider Logistics for a free freight quote. Phone: +86 13651459671. Email: yuanvicky6@gmail.com. Offices in Shenzhen, Guangzhou, and warehouse in Dongguan.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/contact',
  },
  openGraph: {
    title: 'Contact Spider Logistics | Get a Free Quote',
    description: 'Reach out to Spider Logistics for air freight, sea freight, and customs clearance quotes. Based in Shenzhen, China.',
    url: 'https://spiderlogisticsinc.cn/contact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Spider Logistics for a free freight quote',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Spider Logistics | Get a Free Quote',
    description: 'Air freight, sea freight and customs clearance quotes. Shenzhen & Guangzhou, China.',
    images: ['/og-image.jpg'],
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://spiderlogisticsinc.cn/contact#webpage',
  url: 'https://spiderlogisticsinc.cn/contact',
  name: 'Contact Spider Logistics',
  inLanguage: 'en',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://spiderlogisticsinc.cn/#organization',
    name: 'Shenzhen Spider Logistics Technology Co., Ltd.',
    telephone: '+86-13651459671',
    email: 'yuanvicky6@gmail.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+86-13651459671',
        contactType: 'sales',
        availableLanguage: ['English', 'Chinese'],
        areaServed: 'Worldwide',
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://spiderlogisticsinc.cn' },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://spiderlogisticsinc.cn/contact' },
    ],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  )
}
