import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Portfolio - Biaggio Flooring',
  description: 'View our completed flooring and bathroom remodeling projects in Central Florida.',
}

export default function Portfolio() {
  // Sample portfolio items - finished projects only
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Kitchen Hardwood',
      description: 'Beautiful oak hardwood flooring installation in a contemporary kitchen space.',
      imageSrc: '/images/project1.jpg',
    },
    {
      id: 2,
      title: 'Master Bathroom Remodel',
      description: 'Complete bathroom transformation with custom tile work and walk-in shower.',
      imageSrc: '/images/project2.jpg',
    },
    {
      id: 3,
      title: 'Living Room Laminate',
      description: 'Premium laminate flooring that mimics natural hardwood at an affordable price.',
      imageSrc: '/images/project3.jpg',
    },
    {
      id: 4,
      title: 'Luxury Shower Installation',
      description: 'Frameless glass shower with custom tile patterns and built-in bench.',
      imageSrc: '/images/project4.jpg',
    },
    {
      id: 5,
      title: 'Commercial Office Flooring',
      description: 'Durable vinyl plank flooring for high-traffic commercial space.',
      imageSrc: '/images/project5.jpg',
    },
    {
      id: 6,
      title: 'Guest Bathroom Update',
      description: 'Modern vanity and tile work with elegant fixtures and finishes.',
      imageSrc: '/images/project6.jpg',
    },
    {
      id: 7,
      title: 'Bedroom Carpet Installation',
      description: 'Plush, stain-resistant carpet for comfortable bedroom flooring.',
      imageSrc: '/images/project7.jpg',
    },
    {
      id: 8,
      title: 'Entryway Tile Design',
      description: 'Custom tile pattern with decorative inlay for stunning first impression.',
      imageSrc: '/images/project8.jpg',
    },
    {
      id: 9,
      title: 'Basement Waterproof Flooring',
      description: 'Water-resistant luxury vinyl installation perfect for below-grade spaces.',
      imageSrc: '/images/project9.jpg',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our completed projects and see the quality craftsmanship that goes into every job.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Finished Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each project showcases our commitment to excellence and attention to detail.
            </p>
          </div>
          
          <Gallery items={portfolioItems} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-biaggio-green mb-2">500+</div>
              <p className="text-gray-600 font-semibold">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-biaggio-green mb-2">15+</div>
              <p className="text-gray-600 font-semibold">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-biaggio-green mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-biaggio-green mb-2">★★★★★</div>
              <p className="text-gray-600 font-semibold">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-biaggio-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-biaggio-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  )
}
