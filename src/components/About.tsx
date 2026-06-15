'use client'
import Image from 'next/image'
import { useReveal } from '@/lib/useReveal'

const saurabhCredentials = [
  { icon: '🎓', label: 'M.Aud., BASLP', sub: 'Advanced Audiology Qualifications' },
  { icon: '🏥', label: 'Army Hospital (R&R)', sub: 'Formerly Audiologist, New Delhi' },
  { icon: '🎖️', label: 'ASLP Certified', sub: 'Registered Audiologist & SLP' },
  { icon: '👥', label: 'All Age Groups', sub: 'Children, Adults & Senior Citizens' },
]

const saleCredentials = [
  { icon: '⚡', label: 'B.Tech (EEE)', sub: 'Electrical & Electronics Engineering' },
  { icon: '🏢', label: 'Executive Director', sub: 'Communiqué Speech, Hearing & Balance Clinic' },
  { icon: '💡', label: 'Leadership & Operations', sub: 'Organizational Excellence' },
  { icon: '❤️', label: 'Patient-Focused Vision', sub: 'Compassionate & Accessible Care' },
]

function TeamCard({
  photo,
  name,
  designation,
  badge,
  badgeSub,
  bio,
  credentials,
  ctaLabel,
  flipped = false,
}: {
  photo: string
  name: string
  designation: string
  badge: string
  badgeSub: string
  bio: React.ReactNode
  credentials: { icon: string; label: string; sub: string }[]
  ctaLabel: string
  flipped?: boolean
}) {
  const sectionRef = useReveal()

  return (
    <div ref={sectionRef} className="reveal grid md:grid-cols-2 gap-12 items-center">
      {/* Photo — swap sides based on flipped */}
      <div className={`flex justify-center ${flipped ? 'md:order-2' : ''}`}>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl rotate-3"
            style={{ background: 'linear-gradient(135deg, #B8892A22, #1B4D3E22)' }}
          />
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-cream-dark w-72 h-96 md:w-80 md:h-[440px]">
            <Image
              src={photo}
              alt={name}
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
            <p className="font-playfair font-bold text-sm">{name}</p>
            <p className="text-xs mt-0.5" style={{ color: '#B8892A' }}>{designation}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={flipped ? 'md:order-1' : ''}>
        <p className="section-label mb-3">{designation}</p>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-teal-900 mb-2">
          {name}
        </h3>
        <div className="ornament justify-start mb-5"><div className="ornament-diamond" /></div>

        <div className="text-gray-700 leading-relaxed mb-8 space-y-3">
          {bio}
        </div>

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
          📅 {ctaLabel}
        </a>
      </div>
    </div>
  )
}

export default function About() {
  const headingRef = useReveal()

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div ref={headingRef} className="reveal text-center mb-20">
          <p className="section-label mb-3">The Team Behind Communiqué</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Meet Our Leadership
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            A dedicated team combining clinical expertise with compassionate leadership —
            committed to delivering the highest standard of audiological care.
          </p>
        </div>

        {/* Dr. Saurabh */}
        <TeamCard
          photo="/doctor.jpg"
          name="Dr. Saurabh Chitoshiya (ASLP)"
          designation="CEO & Clinical Director"
          badge="Army Trained Specialist"
          badgeSub="R&R Hospital, New Delhi"
          bio={
            <>
              <p>
                Dr. Saurabh Chitoshiya is a qualified Audiologist &amp; Speech-Language
                Pathologist holding an <strong>M.Aud. and BASLP</strong>, with specialized
                training and experience from the prestigious{' '}
                <strong>Army Hospital (Research &amp; Referral), New Delhi</strong> — one of
                India's leading military medical institutions.
              </p>
              <p>
                As the CEO &amp; Clinical Director of Communiqué, Dr. Saurabh brings
                evidence-based audiological care to Gurugram. His expertise spans comprehensive
                hearing assessments, vestibular &amp; balance disorders, tinnitus management,
                and speech &amp; language therapy — for patients of all ages, from newborns to
                senior citizens.
              </p>
            </>
          }
          credentials={saurabhCredentials}
          ctaLabel="Book a Consultation"
          flipped={false}
        />

        {/* Divider */}
        <div className="my-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-cream-dark" />
          <div className="ornament-diamond" style={{ width: 10, height: 10, background: '#B8892A', transform: 'rotate(45deg)' }} />
          <div className="flex-1 h-px bg-cream-dark" />
        </div>

        {/* Mrs. Sale Sravanthi */}
        <TeamCard
          photo="/partner.jpg"
          name="Mrs. Sale Sravanthi"
          designation="Executive Director"
          badge="B.Tech (EEE)"
          badgeSub="Electrical & Electronics Engineering"
          bio={
            <>
              <p>
                Mrs. Sale Sravanthi is the <strong>Executive Director</strong> of Communiqué
                Speech, Hearing &amp; Balance Clinic. A graduate in{' '}
                <strong>Electrical &amp; Electronics Engineering</strong>, she brings strong
                leadership, organizational excellence, and a patient-focused approach to the
                clinic.
              </p>
              <p>
                As a dedicated homemaker and mother of two, she successfully balances family
                responsibilities with her commitment to delivering quality healthcare services.
                Her vision and dedication play a key role in ensuring compassionate, accessible,
                and effective care for individuals with speech, hearing, and balance disorders.
              </p>
            </>
          }
          credentials={saleCredentials}
          ctaLabel="Get in Touch"
          flipped={true}
        />
      </div>
    </section>
  )
}
