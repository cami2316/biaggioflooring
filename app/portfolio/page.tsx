import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Portfolio - Finished Flooring & Bathroom Projects',
  description:
    'Explore Biaggio Flooring’s completed remodeling and flooring projects across Central Florida.',
}

export default function Portfolio() {

  const portfolioItems = [
    {
      id: 1,
      title: 'Warm Hardwood Living Space',
      category: 'Flooring' as const,
      imageSrc: '/images/flooring/floor1.jpg',
      alt: 'Hardwood floor installation',
    },
    {
      id: 2,
      title: 'Contemporary Plank Flooring',
      category: 'Flooring' as const,
      imageSrc: '/images/flooring/floor 2.jpg',
      alt: 'Luxury vinyl plank flooring',
    },
    {
      id: 3,
      title: 'Statement Tile Floor',
      category: 'Flooring' as const,
      imageSrc: '/images/flooring/floor 03.jpg',
      alt: 'Decorative tile flooring',
    },
    {
      id: 4,
      title: 'Custom Shower Installation',
      category: 'Bathrooms' as const,
      imageSrc: '/images/bathrooms/bath.jpg',
      alt: 'Luxury shower remodel',
    },
    {
      id: 5,
      title: 'Spa Inspired Bathroom',
      category: 'Bathrooms' as const,
      imageSrc: '/images/bathrooms/bath2.jpg',
      alt: 'Bathroom remodel with premium finishes',
    },
    {
      id: 6,
      title: 'Modern Tile Statement Wall',
      category: 'Bathrooms' as const,
      imageSrc: '/images/bathrooms/bath03.jpg',
      alt: 'Tile wall installation',
    },
    {
      id: 7,
      title: 'Luxury Shower Niche Detail',
      category: 'Bathrooms' as const,
      imageSrc: '/images/bathrooms/bath04.jpg',
      alt: 'Custom shower niche',
    },
    {
      id: 8,
      title: 'Completed Flooring Project',
      category: 'Projects' as const,
      imageSrc: '/images/projects/floor1.jpg',
      alt: 'Finished flooring project',
    },
    {
      id: 9,
      title: 'Finished Bathroom Remodel',
      category: 'Projects' as const,
      imageSrc: '/images/projects/bath.jpg',
      alt: 'Completed bathroom remodel',
    },
    {
      id: 10,
      title: 'Custom Tile Installation Project',
      category: 'Projects' as const,
      imageSrc: '/images/projects/bath04.jpg',
      alt: 'Custom tile project',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 bg-brand-charcoal text-white overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/projects/bath04.jpg"
            alt="Luxury remodeling portfolio"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/90" />
        </div>

        <div className="relative container mx-auto px-4 max-w-3xl">
          <p className="uppercase tracking-[0.45em] text-brand-accent text-sm mb-5">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Spaces Transformed Through Craftsmanship
          </h1>

          <p className="text-lg text-white/90">
            Explore finished projects that showcase our installation standards,
            design precision, and commitment to premium results.
          </p>
        </div>

      </section>

      {/* INTRO */}
      <section className="py-20 bg-brand-white text-center">

        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-semibold text-brand-charcoal mb-6">
            Signature Project Gallery
          </h2>

          <p className="text-lg text-brand-charcoal">
            Browse our completed flooring installations and bathroom remodels.
            Each project reflects careful planning, premium materials, and refined finishing.
          </p>
        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <Gallery items={portfolioItems} />
        </div>
      </section>

      {/* DIFFERENTIATOR SECTION */}
      <section className="py-20 bg-brand-white">

        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">

          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '15+', label: 'Years Experience' },
            { value: 'Licensed', label: '& Insured' },
            { value: '5-Star', label: 'Client Reviews' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl p-8 shadow-premium border border-brand-charcoal/10"
            >
              <div className="text-4xl font-semibold text-brand-primary mb-3">
                {stat.value}
              </div>

              <p className="uppercase tracking-widest text-sm text-brand-charcoal/70">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-charcoal text-white text-center">

        <div className="container mx-auto px-4 max-w-2xl">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready To Start Your Own Transformation?
          </h2>

          <p className="text-lg text-white/80 mb-10">
            Schedule a complimentary consultation and receive a detailed remodeling estimate tailored to your home.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-brand-primary px-10 py-4 rounded-full font-semibold hover:bg-brand-accent transition shadow-lg"
          >
            Request Free Estimate
          </Link>

        </div>

      </section>
    </>
  )
}
