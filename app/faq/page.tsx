import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE = 'https://spiderlogisticsinc.cn'

export const metadata: Metadata = {
  title: 'Freight FAQ: Shipping from China to Bangladesh, Israel & Africa',
  description: 'Answers to common questions about air freight and sea freight from China: transit times, FCL vs LCL, customs clearance, consolidation, documents and door-to-door delivery.',
  alternates: {
    canonical: `${SITE}/faq`,
  },
  openGraph: {
    title: 'Freight FAQ: Shipping from China to Bangladesh, Israel & Africa',
    description: 'Transit times, FCL vs LCL, customs clearance, consolidation and door-to-door shipping from China explained.',
    url: `${SITE}/faq`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spider Logistics freight FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freight FAQ: Shipping from China',
    description: 'Transit times, FCL vs LCL, customs clearance and door-to-door shipping from China explained.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What does Spider Logistics do?',
    a: 'Spider Logistics (Shenzhen Spider Logistics Technology Co., Ltd.) is an international freight forwarder founded in 2010 and headquartered in Shenzhen, China, with a second office in Guangzhou and a warehouse in Dongguan. We organize air freight, sea freight (FCL and LCL), customs clearance, cargo consolidation and door-to-door delivery for shipments originating in China.',
  },
  {
    q: 'How long does air freight from China to Bangladesh take?',
    a: 'Door-to-door air freight from China to Bangladesh typically takes 3 to 5 days, including supplier pickup in China, export customs declaration and final delivery in Bangladesh. Flights depart from Shanghai, Shenzhen, Guangzhou and Hong Kong airports.',
  },
  {
    q: 'How long does air freight from China to Israel take?',
    a: 'Door-to-door air freight from China to Israel typically takes 4 to 6 days, including pickup, export clearance in China and delivery in Israel. Shipments usually fly via Tel Aviv with connections through major hub airports.',
  },
  {
    q: 'How long does sea freight from China to Africa take?',
    a: 'Ocean transit from China to African ports varies by lane: approximately 25 to 30 days to Nigeria, 28 to 35 days to Kenya, 30 to 40 days to South Africa, and 25 to 35 days to Ghana. Add several days for customs clearance and inland delivery.',
  },
  {
    q: 'Should I choose FCL or LCL for sea freight from China?',
    a: 'Choose FCL (full container load) when your cargo fills roughly half a container or more, since you pay a flat rate for the whole box and get faster, more secure handling. Choose LCL (less than container load) for smaller volumes: your cargo shares container space with other shipments and you pay only for the volume you use. We run regular weekly consolidations from South China.',
  },
  {
    q: 'What documents are required to ship cargo out of China?',
    a: 'The standard export set includes a commercial invoice, a packing list, and a bill of lading for sea freight or an air waybill for air freight. Depending on the destination and the goods, you may also need a certificate of origin, MSDS for chemicals, or product-specific certificates. Our team prepares and reviews the full documentation set with you before departure.',
  },
  {
    q: 'Do you offer door-to-door delivery from China?',
    a: 'Yes. We pick up cargo directly from your suppliers anywhere in China, consolidate multiple supplier orders at our Dongguan warehouse, handle export customs declaration, arrange the international leg, and coordinate destination clearance and final delivery, so you receive your cargo without dealing with factories or customs brokers yourself.',
  },
  {
    q: 'Can you consolidate orders from multiple suppliers in China?',
    a: 'Yes. Multi-supplier consolidation is one of our core services for e-commerce sellers and trading companies. Your suppliers send goods to our Dongguan warehouse, where we inspect, repack, label and combine them into one shipment. This reduces total freight cost compared with shipping each order separately.',
  },
  {
    q: 'Which destinations does Spider Logistics serve from China?',
    a: 'Our strongest lanes are China to Bangladesh, China to Israel, and China to African markets including Nigeria, Kenya, Ghana and South Africa, plus the wider Middle East. We also arrange shipments to Asia, Europe, North America, South America and Oceania through our partner network of more than 50 countries.',
  },
  {
    q: 'How do I get a freight quote from Spider Logistics?',
    a: 'Send us your cargo details: origin city in China, destination, product description, gross weight and volume (or dimensions), and your preferred service level. Request a quote at https://spiderlogisticsinc.cn/contact, by email at yuanvicky6@gmail.com, or by phone and WhatsApp at +86 13651459671. Because ocean and air rates change weekly, we quote live market rates for each shipment.',
  },
  {
    q: 'Can you handle export customs clearance in China?',
    a: 'Yes. We prepare the export declaration, arrange customs inspection when required, and resolve classification or documentation questions before the cargo reaches the port or airport, which prevents delays at the origin.',
  },
  {
    q: 'How can I track my shipment?',
    a: 'Every shipment receives a tracking reference: an air waybill number for air freight or a bill of lading and container number for sea freight. Our customer service team shares milestone updates from pickup through customs clearance to final delivery, and you can contact us any time for a status check.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE}/faq#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE}/faq` },
    ],
  },
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Freight FAQ: Shipping from China
            </h1>
            <p className="text-xl text-blue-100">
              Clear answers on transit times, FCL vs LCL, customs clearance, consolidation and door-to-door delivery from China to Bangladesh, Israel, Africa and worldwide.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {f.q}
                </h2>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}

            <div className="bg-blue-600 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Have a question about your shipment?
              </h2>
              <p className="text-blue-100 mb-6">
                Our team in Shenzhen and Guangzhou replies within one business day with a live market quote.
              </p>
              <Link href="/contact">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl">
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
