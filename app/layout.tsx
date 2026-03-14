import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://spiderlogisticsinc.cn'),
  title: {
    default: 'Spider Logistics | International Freight Forwarding from China',
    template: '%s | Spider Logistics',
  },
  description: 'Shenzhen Spider Logistics Technology Co., Ltd. — Professional air freight and sea freight from China to Bangladesh, Israel, Africa, Middle East and worldwide. Get a free quote today.',
  keywords: [
    'international freight forwarding',
    'China freight forwarder',
    'air freight China',
    'sea freight China',
    'shipping from China to Bangladesh',
    'shipping from China to Israel',
    'shipping from China to Africa',
    'Shenzhen logistics company',
    'Spider Logistics',
    'cross border logistics',
    'FCL LCL shipping',
    'customs clearance China',
  ],
  authors: [{ name: 'Spider Logistics', url: 'https://spiderlogisticsinc.cn' }],
  creator: 'Spider Logistics',
  publisher: 'Shenzhen Spider Logistics Technology Co., Ltd.',
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
    siteName: 'Spider Logistics',
    title: 'Spider Logistics | International Freight Forwarding from China',
    description: 'Professional air & sea freight from China to Bangladesh, Israel, Africa, Middle East and worldwide. Based in Shenzhen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spider Logistics | International Freight Forwarding from China',
    description: 'Professional air & sea freight from China to Bangladesh, Israel, Africa, Middle East and worldwide. Based in Shenzhen.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FreightForwarder',
    name: 'Shenzhen Spider Logistics Technology Co., Ltd.',
    alternateName: 'Spider Logistics',
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
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Guangzhou',
        addressRegion: 'Yuexiu District',
        addressCountry: 'CN',
        streetAddress: '5th Floor, Shanxi Building, Sanyuanli Avenue, Yuexiu District',
      },
    ],
    areaServed: [
      'Bangladesh', 'Israel', 'Africa', 'Middle East', 'Worldwide',
    ],
    serviceType: [
      'Air Freight', 'Sea Freight', 'FCL', 'LCL', 'Customs Clearance', 'Door-to-Door Delivery',
    ],
    sameAs: [
      'https://github.com/yuanvicky6/siper-logistics-website',
    ],
  }

  return (
    <html lang="en">
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
