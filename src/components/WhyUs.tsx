'use client'
import { useReveal } from '@/lib/useReveal'

const reasons = [
  {
    icon: '🩺',
    title: 'Expert Assessment',
    desc: 'Experienced audiologists and therapists ensure precise evaluation and diagnosis using standardised clinical protocols.',
  },
  {
    icon: '🖥️',
    title: 'Advanced Diagnostics',
    desc: 'State-of-the-art equipment for accurate, reliable results — from BERA and VNG to cochlear implant mapping.',
  },
  {
    icon: '🤝',
    title: 'Patient-Centered Care',
    desc: 'Personalised treatment plans tailored to your unique needs, goals, and lifestyle — at every stage of life.',
  },
  {
    icon: '🔄',
    title: 'Rehabilitation Support',
    desc: 'Evidence-based therapy and rehabilitation focused on long-term improvement, not just short-term relief.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Child & Adult Care',
    desc: 'Specialised care for all age groups — from newborns requiring OAE screening to senior citizens with hearing loss.',
  },
  {
    icon: '🏆',
    title: 'Army Trained Specialist',
    desc: 'Led by a clinician trained at Army Hospital (R&R), New Delhi — one of India\'s premier medical institutions.',
  },
]

export default function WhyUs() {
  const sectionRef = useReveal()

  return (
    <section className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #FAF6F0 0%, #F0EAE0 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={sectionRef} className="reveal text-center mb-16">
          <p className="section-label mb-3">Our Promise</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Why Choose Communiqué?
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            At Communiqué, we provide comprehensive care for hearing, speech, tinnitus, vestibular
            and balance disorders — with an evidence-based approach and compassionate team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="service-card bg-white rounded-2xl p-7 border border-cream-dark"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: '#1B4D3E15' }}
              >
                {r.icon}
              </div>
              <h3 className="font-playfair font-bold text-teal-900 text-lg mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
