import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-biaggio-green mb-4">Biaggio Flooring</h3>
            <p className="text-gray-300 mb-4">
              Professional flooring and bathroom remodeling services in Central Florida with over 15 years of experience.
            </p>
            <p className="text-gray-300">
              Quality craftsmanship you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-biaggio-green transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-biaggio-green transition-colors">Services</Link></li>
              <li><Link href="/bathroom-shower" className="text-gray-300 hover:text-biaggio-green transition-colors">Bathroom & Shower</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-biaggio-green transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-biaggio-green transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-biaggio-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Central Florida</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@biaggioflooring.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Biaggio Flooring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
