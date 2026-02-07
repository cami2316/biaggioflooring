import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Biaggio Flooring | Premium Flooring & Bathroom Remodeling',
    template: '%s | Biaggio Flooring',
  },

  description:
    'Luxury flooring installation and bathroom remodeling in Central Florida. Trusted craftsmanship with over 15 years of experience.',

  keywords: [
    'flooring installation Orlando',
    'bathroom remodeling Central Florida',
    'tile installation',
    'shower remodeling',
    'hardwood flooring Orlando',
  ],

  openGraph: {
    title: 'Biaggio Flooring',
    description:
      'Premium flooring installation and bathroom remodeling in Central Florida.',
    url: 'https://biaggioflooring.com',
    siteName: 'Biaggio Flooring',
    images: [
      {
        url: '/images/hero/place_1.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="bg-brand-white text-brand-charcoal antialiased">

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  )
}
