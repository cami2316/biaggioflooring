import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biaggio Flooring - Expert Flooring & Bathroom Remodeling in Central Florida',
  description: 'Professional flooring installation and bathroom remodeling services in Central Florida with over 15 years of experience.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Home with Expert Flooring & Bathroom Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Over 15 years of excellence in Central Florida. Quality craftsmanship, beautiful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-biaggio-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-biaggio-light-green transition-colors text-center"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional installation and remodeling services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flooring Service */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-biaggio-green hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-biaggio-green rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flooring Installation</h3>
              <p className="text-gray-600 mb-6">
                Hardwood, laminate, vinyl, tile, and more. Expert installation for lasting beauty.
              </p>
              <Link href="/services" className="text-biaggio-green font-semibold hover:text-biaggio-light-green transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Bathroom Remodeling */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-biaggio-green hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-biaggio-green rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bathroom Remodeling</h3>
              <p className="text-gray-600 mb-6">
                Complete bathroom transformations from design to finish. Modern, functional, beautiful.
              </p>
              <Link href="/bathroom-shower" className="text-biaggio-green font-semibold hover:text-biaggio-light-green transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Shower Installation */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-biaggio-green hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-biaggio-green rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shower Installation</h3>
              <p className="text-gray-600 mb-6">
                Custom shower solutions including walk-in showers, glass enclosures, and tile work.
              </p>
              <Link href="/bathroom-shower" className="text-biaggio-green font-semibold hover:text-biaggio-light-green transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Biaggio Flooring?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-biaggio-green mb-2">15+</div>
              <p className="text-gray-600 font-semibold">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-biaggio-green mb-2">500+</div>
              <p className="text-gray-600 font-semibold">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-biaggio-green mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Satisfaction Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-biaggio-green mb-2">★★★★★</div>
              <p className="text-gray-600 font-semibold">5-Star Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-biaggio-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote today. Let's bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-biaggio-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
