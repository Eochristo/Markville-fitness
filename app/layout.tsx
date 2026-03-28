import type { Metadata } from 'next'
import { Inter, Oleo_Script } from 'next/font/google'
import { SiteHeader } from '@/components/layout/site-header'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-oleo',
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
      <body className={`${inter.variable} ${oleoScript.variable} font-sans antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
