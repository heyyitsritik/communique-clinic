'use client'
import Image from 'next/image'
import { useReveal } from '@/lib/useReveal'

const credentials = [
  { icon: '🎓', label: 'M.Aud., BASLP', sub: 'Advanced Audiology Qualifications' },
  { icon: '🏥', label: 'Army Hospital (R&R)', sub: 'Formerly Audiologist, New Delhi' },
  { icon: '🎖️', label: 'ASLP Certified', sub: 'Registered Audiologist & SLP' },
  { icon: '👥', label: 'All Age Groups', sub: 'Children, Adults & Senior Citizens' },
]

export default function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div ref={sectionRef} className="reveal text-center mb-16">
          <p className="section-label mb-3">Meet Your Specialist</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            About Dr. Saurabh Chitoshiya
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl rotate-3"
                style={{ background: 'linear-gradient(135deg, #B8892A22, #1B4D3E22)' }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-cream-dark w-72 h-96 md:w-80 md:h-[440px]">
                <Image
                  src="/doctor.jpg"
                  alt="Dr. Saurabh Chitoshiya — Consultant Audiologist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              {/* Name badge */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-xl px-6 py-3 text-center shadow-lg whitespace-nowrap"
                style={{ background: '#1B4D3E', color: 'white' }}
              >
                <p className="font-playfair font-bold text-sm">Dr. Saurabh Chitoshiya (ASLP)</p>
                <p className="text-xs mt-0.5" style={{ color: '#B8892A' }}>Clinical Director &amp; Consultant Audiologist</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label mb-3">Clinical Director</p>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-teal-900 mb-2">
              Committed to Better Hearing &amp; Communication
            </h3>
            <div className="ornament justify-start mb-5"><div className="ornament-diamond" /></div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Saurabh Chitoshiya is a qualified Audiologist &amp; Speech-Language Pathologist
              holding an <strong>M.Aud. and BASLP</strong>, with specialized training and experience
              from the prestigious <strong>Army Hospital (Research &amp; Referral), New Delhi</strong>
              — one of India's leading military medical institutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              As the founder and Clinical Director of Communiqué, Dr. Saurabh brings evidence-based
              audiological care to Gurugram. His expertise spans comprehensive hearing assessments,
              vestibular &amp; balance disorders, tinnitus management, and speech &amp; language therapy
              — for patients of all ages, from newborns to senior citizens.
            </p>

            {/* Credential grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-3 p-4 rounded-xl border border-cream-dark bg-cream"
                >
                  <span className="text-2xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-semibold text-teal-900 text-sm">{c.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-teal inline-flex">
              📅 Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
