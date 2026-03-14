import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Spider Logistics offers air freight, sea freight (FCL & LCL), customs clearance, door-to-door delivery, and warehouse services from China to worldwide destinations.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/services',
  },
  openGraph: {
    title: 'Logistics Services | Spider Logistics',
    description: 'Air freight, sea freight, customs clearance, and door-to-door delivery from China to Bangladesh, Israel, Africa, Middle East and beyond.',
    url: 'https://spiderlogisticsinc.cn/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
