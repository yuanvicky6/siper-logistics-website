import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://spiderlogisticsinc.cn'),
  title: {
    default: 'Spider Logistics | International Freight Forwarding from China to Bangladesh & Israel',
    template: '%s | Spider Logistics - China Freight Forwarder',
  },
  description: 'Shenzhen Spider Logistics Technology Co., Ltd. — Professional air freight and sea freight from China to Bangladesh, Israel, Africa, Middle East. Get competitive FCL/LCL rates and customs clearance services.',
  keywords: [
    'China freight forwarder',
    'shipping from China to Bangladesh',
    'China to Israel shipping',
    'air freight China',
    'sea freight China',
    'FCL shipping China',
    'LCL shipping China',
    'international freight forwarding',
    'Shenzhen logistics company',
    'Guangzhou freight forwarder',
    'customs clearance China',
    'cross border logistics',
    'Bangladesh shipping company',
    'Israel freight forwarder',
    'Africa shipping from China',
    'Middle East logistics',
    'Spider Logistics',
  ],
  authors: [{ name: 'Spider Logistics', url: 'https://spiderlogisticsinc.cn' }],
  creator: 'Spider Logistics',
  publisher: 'Shenzhen Spider Logistics Technology Co., Ltd.',
  verification: {
    google: 'ynuzyxKkJqazVuqSvSggaX83QDevIFjpw2YSqlw6m3E',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spiderlogisticsinc.cn',
    siteName: 'Spider Logistics - China Freight Forwarder',
    title: 'Spider Logistics | International Freight Forwarding from China to Bangladesh & Israel',
    description: 'Professional air & sea freight from China to Bangladesh, Israel, Africa, Middle East. Competitive FCL/LCL rates and customs clearance services.',
    images: [
      {
        url: 'https://spiderlogisticsinc.cn/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spider Logistics - International Freight Forwarding from China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spider Logistics | International Freight Forwarding from China to Bangladesh & Israel',
    description: 'Professional air & sea freight from China to Bangladesh, Israel, Africa, Middle East. Competitive FCL/LCL rates and customs clearance services.',
    images: ['https://spiderlogisticsinc.cn/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = [
    // Organization Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://spiderlogisticsinc.cn/#organization',
      name: 'Shenzhen Spider Logistics Technology Co., Ltd.',
      alternateName: ['Spider Logistics', 'Spider Logistics China'],
      url: 'https://spiderlogisticsinc.cn',
      logo: 'https://spiderlogisticsinc.cn/favicon.ico',
      description: 'Professional international freight forwarding company specializing in air and sea freight from China to Bangladesh, Israel, Africa, Middle East and worldwide.',
      foundingDate: '2010',
      telephone: '+86-13651459671',
      email: 'yuanvicky6@gmail.com',
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Shenzhen',
          addressRegion: "Bao'an District",
          addressCountry: 'CN',
          streetAddress: "Baoyunda Comprehensive Building, Fuhua Community, Xixiang Street, Bao'an District",
          postalCode: '518000',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Guangzhou',
          addressRegion: 'Yuexiu District',
          addressCountry: 'CN',
          streetAddress: '5th Floor, Shanxi Building, Sanyuanli Avenue, Yuexiu District',
          postalCode: '510000',
        },
      ],
      areaServed: [
        'Bangladesh', 'Israel', 'Africa', 'Middle East', 'Worldwide',
        'Asia', 'Europe', 'North America', 'South America', 'Oceania'
      ],
      serviceType: [
        'Air Freight', 'Sea Freight', 'FCL', 'LCL', 'Customs Clearance', 
        'Door-to-Door Delivery', 'International Logistics', 'Supply Chain Management'
      ],
      sameAs: [
        'https://github.com/yuanvicky6/siper-logistics-website',
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.5431',
        longitude: '114.0579'
      }
    },
    // Local Business Schema
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://spiderlogisticsinc.cn/#localbusiness',
      name: 'Spider Logistics - Shenzhen Headquarters',
      parentOrganization: {
        '@id': 'https://spiderlogisticsinc.cn/#organization'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Shenzhen',
        addressRegion: "Bao'an District",
        addressCountry: 'CN',
        streetAddress: "Baoyunda Comprehensive Building, Fuhua Community, Xixiang Street, Bao'an District",
        postalCode: '518000',
      },
      telephone: '+86-13651459671',
      openingHours: 'Mo-Fr 08:00-18:00',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.5431',
        longitude: '114.0579'
      }
    }
  ]

  return (
    <html lang="en">
      <head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
