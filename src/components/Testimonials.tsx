'use client'
import { useReveal } from '@/lib/useReveal'

const testimonials = [
  {
    name: 'Ramesh K.',
    location: 'Gurugram',
    stars: 5,
    text: 'Dr. Saurabh is incredibly knowledgeable and thorough. He explained every step of my hearing test clearly and helped me choose the right hearing aid. Highly recommended!',
    service: 'Hearing Assessment',
  },
  {
    name: 'Sunita M.',
    location: 'Sector 82, Gurugram',
    stars: 5,
    text: 'My son had speech delays and we were very worried. The team at Communiqué was so patient and caring. Within a few months of speech therapy, we\'ve seen remarkable improvement.',
    service: 'Speech Therapy',
  },
  {
    name: 'Pradeep S.',
    location: 'DLF Phase 3',
    stars: 5,
    text: 'I had been suffering from severe vertigo for months. The vestibular assessment and rehabilitation therapy here changed my life. I can now walk without fear of falling.',
    service: 'Vestibular Rehab',
  },
  {
    name: 'Kavita R.',
    location: 'Palam Vihar',
    stars: 5,
    text: 'Excellent clinic with state-of-the-art equipment. The BERA test for my infant was done professionally and we got results the same day. The staff is very caring.',
    service: 'Electrophysiological Tests',
  },
  {
    name: 'Arun T.',
    location: 'Manesar',
    stars: 5,
    text: 'The tinnitus management program here is exceptional. Dr. Saurabh\'s expertise and the TRT sessions have significantly reduced the ringing in my ears. Very grateful.',
    service: 'Tinnitus Management',
  },
  {
    name: 'Meena D.',
    location: 'Sector 56, Gurugram',
    stars: 5,
    text: 'My cochlear implant mapping was done with great precision. The follow-up care is excellent. This clinic truly cares about long-term patient outcomes.',
    service: 'CI Mapping',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#B8892A' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useReveal()

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={sectionRef} className="reveal text-center mb-14">
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            What Our Patients Say
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className="text-gray-500 text-sm mt-4 italic">
            * Placeholder reviews — real patient testimonials will be added soon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card service-card"
            >
              <Stars count={t.stars} />
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-teal-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: '#1B4D3E15', color: '#1B4D3E' }}
                >
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google review CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Had a great experience? Share it!</p>
          <a
            href="https://g.page/r/communiqueclinic/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            ⭐ Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  )
}
