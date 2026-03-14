import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Spider Logistics for a free freight quote. Phone: +86 13651459671. Email: yuanvicky6@gmail.com. Offices in Shenzhen, Guangzhou, and warehouse in Dongguan.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/contact',
  },
  openGraph: {
    title: 'Contact Spider Logistics | Get a Free Quote',
    description: 'Reach out to Spider Logistics for air freight, sea freight, and customs clearance quotes. Based in Shenzhen, China.',
    url: 'https://spiderlogisticsinc.cn/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
