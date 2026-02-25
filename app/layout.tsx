import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HeartRateGraph } from '@/components/layout/heart-rate-graph'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Markville Fitness - Membership Plans',
  description:
    'Choose the perfect membership plan at Markville Fitness. Starter, Pro, and Elite tiers with personal training, fitness classes, and exclusive partner discounts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <HeartRateGraph />
        {children}
      </body>
    </html>
  )
}
