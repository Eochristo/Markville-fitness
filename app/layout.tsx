import type { Metadata } from 'next'
import { Inter, Exo } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const exo = Exo({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-exo',
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
      <body className={`${inter.variable} ${exo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
