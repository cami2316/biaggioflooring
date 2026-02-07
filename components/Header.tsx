'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-biaggio-green">
            Biaggio Flooring
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-biaggio-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/" className="text-gray-700 hover:text-biaggio-green transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-gray-700 hover:text-biaggio-green transition-colors">Services</Link></li>
            <li><Link href="/bathroom-shower" className="text-gray-700 hover:text-biaggio-green transition-colors">Bathroom & Shower</Link></li>
            <li><Link href="/portfolio" className="text-gray-700 hover:text-biaggio-green transition-colors">Portfolio</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-biaggio-green transition-colors">About</Link></li>
            <li><Link href="/contact" className="bg-biaggio-green text-white px-4 py-2 rounded hover:bg-biaggio-light-green transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            <li><Link href="/" className="block py-2 text-gray-700 hover:text-biaggio-green transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/services" className="block py-2 text-gray-700 hover:text-biaggio-green transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link href="/bathroom-shower" className="block py-2 text-gray-700 hover:text-biaggio-green transition-colors" onClick={() => setIsMenuOpen(false)}>Bathroom & Shower</Link></li>
            <li><Link href="/portfolio" className="block py-2 text-gray-700 hover:text-biaggio-green transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="/about" className="block py-2 text-gray-700 hover:text-biaggio-green transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="block py-2 bg-biaggio-green text-white px-4 rounded hover:bg-biaggio-light-green transition-colors text-center" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        )}
      </nav>
    </header>
  )
}
