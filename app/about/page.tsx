import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Biaggio Flooring',
  description: 'Learn about Biaggio Flooring, a family-owned flooring and bathroom remodeling company with over 15 years of experience in Central Florida.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Biaggio Flooring</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Over 15 years of excellence in flooring and bathroom remodeling in Central Florida
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded over 15 years ago, Biaggio Flooring has been serving the Central Florida community with exceptional flooring installation and bathroom remodeling services. What started as a small family operation has grown into one of the region's most trusted names in home improvement.
                </p>
                <p>
                  Our commitment to quality craftsmanship, honest pricing, and customer satisfaction has earned us hundreds of satisfied customers and countless referrals. We treat every project, big or small, with the same level of care and attention to detail.
                </p>
                <p>
                  We believe that your home is your sanctuary, and we're honored to help you create spaces that are both beautiful and functional. Our team of skilled professionals brings expertise, creativity, and dedication to every project we undertake.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 aspect-square rounded-lg flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-biaggio-green rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. From materials to workmanship, we maintain the highest standards in everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-biaggio-green rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our success. We listen to your needs, communicate clearly, and deliver results that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-biaggio-green rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Honest Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. We provide transparent, competitive pricing and detailed quotes upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience You Can Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-biaggio-green mb-2">15+</div>
              <p className="text-gray-600 font-semibold text-lg">Years in Business</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-biaggio-green mb-2">500+</div>
              <p className="text-gray-600 font-semibold text-lg">Projects Completed</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-biaggio-green mb-2">100%</div>
              <p className="text-gray-600 font-semibold text-lg">Licensed & Insured</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-biaggio-green mb-2">★★★★★</div>
              <p className="text-gray-600 font-semibold text-lg">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Serving Central Florida
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We proudly serve homeowners and businesses throughout Central Florida, bringing quality flooring and bathroom remodeling services to your doorstep.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-biaggio-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work With a Team You Can Trust
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Biaggio Flooring difference. Contact us today for your free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-biaggio-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
