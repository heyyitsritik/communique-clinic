'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #153d30 60%, #0f2d22 100%)' }}
    >
      {/* Decorative background waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-10"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M400,0 C500,100 700,50 800,200 C900,350 750,500 600,550 C450,600 300,500 200,400 C100,300 0,200 0,100 Z"
            fill="#B8892A"
          />
          <path
            d="M600,0 C700,80 800,150 800,300 C800,450 700,550 600,580 C500,610 400,560 350,480 C300,400 350,300 400,200 C450,100 500,0 600,0 Z"
            fill="#B8892A"
            opacity="0.5"
          />
        </svg>
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-gold-600/20 animate-pulse-slow" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border border-gold-600/15 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full border border-gold-600/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div ref={ref} className="reveal text-white">
            <p className="section-label text-gold-400 mb-4">
              Precision in Diagnosis, Compassion in Care
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Complete<br />
              <span style={{ color: '#B8892A' }}>Hearing, Speech</span><br />
              &amp; Balance Care
            </h1>
            <div className="ornament justify-start mb-6">
              <div className="ornament-diamond" />
              <div style={{ flex: '1', maxWidth: '80px', height: '1px', background: '#B8892A' }} />
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Assessment, management &amp; rehabilitation for all age groups — children, adults
              &amp; seniors. Led by a specialist trained at Army Hospital (R&amp;R), New Delhi.
            </p>

            {/* 3 pillars */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: '👂', label: 'Better Hearing' },
                { icon: '🗣️', label: 'Clearer Speech' },
                { icon: '⚖️', label: 'Stronger Balance' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold text-base">
                📅 Book Appointment
              </a>
              <a href="#services" className="btn-outline border-white/60 text-white hover:bg-white hover:text-teal-900 text-base">
                View Services
              </a>
            </div>

            {/* Quick contact strip */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              <a href="tel:+918796270575" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                📞 8796270575
              </a>
              <a href="tel:+918700138433" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                📞 8700138433
              </a>
              <span className="flex items-center gap-2">
                📍 Sector 113, Gurugram
              </span>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)', border: '1px solid rgba(184,137,42,0.3)', width: '320px' }}
              >
                <div className="text-6xl mb-4">👂</div>
                <h3 className="font-playfair text-xl text-white font-semibold mb-2">
                  Evidence-Based Care
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  State-of-the-art diagnostics with a compassionate, patient-first approach
                </p>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '6+', label: 'Service Areas' },
                    { num: '20+', label: 'Tests & Therapies' },
                    { num: 'All', label: 'Age Groups' },
                    { num: '10:30', label: 'Opens Daily' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-xl p-3">
                      <div className="font-playfair text-2xl font-bold" style={{ color: '#B8892A' }}>{s.num}</div>
                      <div className="text-white/60 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 rounded-xl px-4 py-3 text-center text-sm font-semibold"
                style={{ background: '#B8892A', color: 'white' }}
              >
                🎓 AIISH Trained<br />
                <span className="text-xs font-normal opacity-90">Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
