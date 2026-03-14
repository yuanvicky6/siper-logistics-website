import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping Routes',
  description: 'Spider Logistics shipping routes from China to Bangladesh, Israel, Africa, Middle East and worldwide. Check transit times for air and sea freight.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/routes',
  },
  openGraph: {
    title: 'Shipping Routes from China | Spider Logistics',
    description: 'Air and sea freight routes from Shenzhen, Guangzhou, Shanghai and Hong Kong to Bangladesh, Israel, Africa, Middle East and worldwide.',
    url: 'https://spiderlogisticsinc.cn/routes',
  },
}

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
