import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shenzhen Spider Logistics Technology Co., Ltd. - International Logistics Solutions',
  description: 'Leading international logistics company specializing in air and sea freight from China to Bangladesh, Israel, Africa, and worldwide destinations. Professional logistics services from Shenzhen, Guangzhou, and Dongguan warehouses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
