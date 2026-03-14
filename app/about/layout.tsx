import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shenzhen Spider Logistics Technology Co., Ltd. — our history, mission, team, and commitment to reliable international freight forwarding since 2010.',
  alternates: {
    canonical: 'https://spiderlogisticsinc.cn/about',
  },
  openGraph: {
    title: 'About Spider Logistics | International Freight Forwarder',
    description: 'Founded in 2010, Spider Logistics is a Shenzhen-based international freight forwarder specializing in air and sea freight from China to global destinations.',
    url: 'https://spiderlogisticsinc.cn/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
