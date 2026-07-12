'use client'
import { useState } from 'react'
import { useReveal } from '@/lib/useReveal'



const serviceCategories = [
  {
    id: 'hearing',
    icon: '👂',
    title: 'Hearing Assessment',
    color: '#1B4D3E',
    tagline: 'Accurate diagnosis for better hearing outcomes',
    services: [
      { name: 'Pure Tone Audiometry (PTA)', desc: 'Measures hearing sensitivity across different frequencies and pitches.' },
      { name: 'Speech Audiometry', desc: 'Assesses how well you hear and understand speech in various conditions.' },
      { name: 'Impedance Audiometry with Acoustic Reflexes', desc: 'Evaluates middle ear function and reflex pathways.' },
      { name: 'SISI / Tone Decay', desc: 'Helps identify the type and configuration of hearing loss.' },
    ],
  },
  {
    id: 'electro',
    icon: '⚡',
    title: 'Electrophysiological Tests',
    color: '#1B4D3E',
    tagline: 'Advanced neurological hearing pathway evaluation',
    services: [
      { name: 'BERA (Brainstem Evoked Response Audiometry)', desc: 'Assesses the hearing pathway all the way up to the brainstem.' },
      { name: 'ECochG (Electrocochleography)', desc: 'Evaluates inner ear (cochlear) and auditory nerve function.' },
      { name: 'VEMP (Vestibular Evoked Myogenic Potential)', desc: 'Assesses vestibular (balance) system function.' },
      { name: 'Otoacoustic Emissions (OAE)', desc: 'Measures inner ear outer hair cell function — ideal for newborn screening.' },
    ],
  },
  {
    id: 'hearingaid',
    icon: '🎧',
    title: 'Hearing Aid & CI Services',
    tagline: 'Personalised hearing solutions for everyday life',
    learnMore: '/hearing-aids',
    services: [
      { name: 'Audiological Consultation', desc: 'Comprehensive hearing evaluation and personalised guidance.' },
      { name: 'Hearing Aid Fine Tuning', desc: 'Expert adjustments for optimal sound quality and comfort.' },
      { name: 'CI Mapping (Cochlear Implant)', desc: 'Programming and mapping of cochlear implants for better hearing outcomes.' },
    ],
  },
  {
    id: 'vestibular',
    icon: '⚖️',
    title: 'Vestibular & Balance Care',
    color: '#1B4D3E',
    tagline: 'Move with confidence — manage dizziness & vertigo',
    services: [
      { name: 'VNG (Videonystagmography)', desc: 'Evaluates involuntary eye movements to assess inner ear and brain function.' },
      { name: 'VHIT (Video Head Impulse Test)', desc: 'Measures how well the eyes stay focused during quick head movements.' },
      { name: 'SVV (Subjective Visual Vertical)', desc: 'Assesses perception of verticality to detect balance system disorders.' },
      { name: 'Caloric Test', desc: 'Stimulates the inner ear to check balance function.' },
      { name: 'Vestibular Rehabilitation Therapy (VRT)', desc: 'Customised exercises to reduce dizziness and improve balance and stability.' },
    ],
  },
  {
    id: 'tinnitus',
    icon: '🔔',
    title: 'Tinnitus Management',
    color: '#1B4D3E',
    tagline: 'Evidence-based relief for ringing in the ears',
    services: [
      { name: 'Tinnitus Assessment', desc: 'Detailed evaluation to identify the cause, impact, and best management approach.' },
      { name: 'TRT (Tinnitus Retraining Therapy)', desc: 'Evidence-based therapy to reduce tinnitus perception and improve quality of life.' },
    ],
  },
  {
    id: 'speech',
    icon: '🗣️',
    title: 'Speech Therapy Services',
    color: '#1B4D3E',
    tagline: 'Communicate with confidence — for all ages',
    services: [
      { name: 'Speech & Language Disorder Assessment', desc: 'Evaluates understanding, expression, vocabulary, grammar and overall language development.' },
      { name: 'Neurological Disorder Assessment', desc: 'Assesses communication difficulties due to stroke, Parkinson\'s, TBI & neurological conditions.' },
      { name: 'Voice Disorder Assessment & Therapy', desc: 'Evaluates and treats voice quality, pitch, loudness & vocal strain.' },
      { name: 'Fluency Therapy (Stuttering)', desc: 'Helps improve speech flow, build confidence & reduce stuttering in a supportive way.' },
      { name: 'AVT (Auditory Verbal Therapy)', desc: 'Evidence-based therapy helping children with hearing loss develop listening & spoken language skills.' },
      { name: 'Swallowing Therapy', desc: 'Supports safe swallowing for patients with dysphagia or neurological injuries.' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState('hearing')
  const sectionRef = useReveal()
  const current = serviceCategories.find((c) => c.id === active)!

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={sectionRef} className="reveal text-center mb-14">
          <p className="section-label mb-3">What We Treat</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Our Services
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className="text-gray-600 mt-5 max-w-xl mx-auto">
            Complete care under one roof — assessment, management &amp; rehabilitation for
            hearing, speech, balance, and tinnitus.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'text-white shadow-md'
                  : 'bg-cream text-teal-900 hover:bg-cream-dark'
              }`}
              style={active === cat.id ? { background: '#1B4D3E' } : {}}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.title}</span>
              <span className="sm:hidden">{cat.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active category panel */}
        <div
          key={active}
          className="rounded-2xl overflow-hidden border border-cream-dark"
          style={{ animation: 'fadeIn 0.3s ease' }}
        >
          {/* Panel header */}
          <div
            className="px-8 py-6 flex items-center gap-4"
            style={{ background: '#1B4D3E' }}
          >
            <span className="text-4xl">{current.icon}</span>
            <div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-white">
                {current.title}
              </h3>
              <p className="text-sm mt-1" style={{ color: '#d4a843' }}>{current.tagline}</p>
            </div>
          </div>

          {/* Services list */}
          <div className="bg-cream p-6 md:p-8 grid sm:grid-cols-2 gap-4">
            {current.services.map((s) => (
              <div
                key={s.name}
                className="service-card bg-white rounded-xl p-5 border border-cream-dark flex gap-4"
              >
                <div
                  className="w-2 rounded-full flex-shrink-0 mt-1"
                  style={{ background: '#B8892A', minHeight: '20px' }}
                />
                <div>
                  <p className="font-semibold text-teal-900 text-sm mb-1">{s.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA bar */}
          <div className="bg-white px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-cream-dark">
            <p className="text-sm text-gray-500">
              Packages &amp; follow-up plans available. Contact reception for details.
            </p>
            <div className="flex gap-3 flex-wrap">
              {current.learnMore && (
                <a href={current.learnMore} className="btn-outline text-sm py-2.5">
                  Learn More →
                </a>
              )}
              <a href="#contact" className="btn-gold text-sm py-2.5">
                📅 Book This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
