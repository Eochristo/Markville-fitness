import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
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
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
