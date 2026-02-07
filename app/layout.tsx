import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Biaggio Flooring - Expert Flooring & Bathroom Remodeling in Central Florida',
  description: 'Professional flooring installation and bathroom remodeling services in Central Florida with over 15 years of experience. Quality craftsmanship guaranteed.',
  keywords: 'flooring, bathroom remodeling, Central Florida, flooring installation, shower remodeling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
