'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    description: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Form submitted:', formData)

    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        description: '',
      })
    }, 3000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-brand-white p-10 rounded-3xl shadow-2xl border border-brand-charcoal/20 space-y-8"
    >
      {/* Success Message */}
      {isSubmitted && (
        <div className="bg-brand-primary/10 border border-brand-primary text-brand-charcoal p-4 rounded-xl animate-fadeIn">
          <p className="font-semibold">Request received.</p>
          <p className="text-sm text-brand-charcoal/70">
            Our team will contact you shortly.
          </p>
        </div>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-charcoal tracking-wide">
            Full Name *
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl border border-brand-charcoal/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 outline-none transition"
            placeholder="Your full name"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-brand-charcoal tracking-wide">
            Phone Number *
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl border border-brand-charcoal/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 outline-none transition"
            placeholder="(321) 000-0000"
          />
        </div>

      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-charcoal tracking-wide">
          Email Address *
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-xl border border-brand-charcoal/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 outline-none transition"
          placeholder="your@email.com"
        />
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-charcoal tracking-wide">
          Project Type *
        </label>

        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-xl border border-brand-charcoal/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 outline-none transition bg-white"
        >
          <option value="">Select your project</option>
          <option value="flooring">Flooring Installation</option>
          <option value="bathroom">Bathroom Remodeling</option>
          <option value="tile">Custom Tile Work</option>
          <option value="consultation">Consultation</option>
        </select>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-brand-charcoal tracking-wide">
          Project Details *
        </label>

        <textarea
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 rounded-xl border border-brand-charcoal/30 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 outline-none transition resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-brand-primary text-white py-4 rounded-full font-semibold tracking-wide hover:bg-brand-accent transition duration-300 shadow-lg hover:shadow-xl"
      >
        Request Estimate
      </button>
    </form>
  )
}

