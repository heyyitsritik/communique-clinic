import type { Metadata } from 'next'
import Image from 'next/image'
import HearingAidTypes from './HearingAidTypes'
import HearingAidFAQ from './HearingAidFAQ'
import HearingAidForm from './HearingAidForm'

export const metadata: Metadata = {
  title: 'Hearing Aids in Gurugram | Communiqué Speech, Hearing & Balance Clinic',
  description:
    'Book a professional hearing assessment and hearing aid trial at Communiqué Clinic, Sector 113, Gurugram. Expert audiologist-led fitting, multi-brand options — Signia, Phonak, Widex & more.',
  keywords: [
    'hearing aids Gurugram',
    'hearing aids Gurgaon',
    'hearing aid trial Gurugram',
    'hearing test Sector 113',
    'audiologist Gurgaon',
    'best hearing aid clinic Gurugram',
    'invisible hearing aid Gurgaon',
    'rechargeable hearing aid Gurugram',
  ],
}

const trustStats = [
  { value: 'ASLP', label: 'Audiologist & Speech Language Pathologist led clinic' },
  { value: 'Trial', label: 'Real-time hearing aid experience before purchase' },
  { value: 'Multi-brand', label: 'Compare technology, comfort and budget' },
  { value: 'Support', label: 'Fine-tuning, counselling and follow-up care' },
]

const whyCards = [
  {
    icon: '✓',
    title: 'Detailed Hearing Assessment',
    desc: 'Pure tone audiometry, speech testing, tympanometry, OAE, ABR/BERA and counselling based on your actual hearing profile.',
  },
  {
    icon: '◉',
    title: 'Personalised Hearing Aid Trial',
    desc: 'Try suitable devices in the clinic and understand speech clarity, comfort, connectivity and handling before you decide.',
  },
  {
    icon: '★',
    title: 'Clinical + Practical Guidance',
    desc: 'We focus on the right technology for your hearing loss, lifestyle and budget — not just the most expensive option.',
  },
]

const brands = ['Signia', 'Phonak', 'Widex', 'Oticon', 'ReSound', 'Starkey', 'Bernafon', 'Other Options']

const steps = [
  { title: 'Book your slot', desc: 'Call or submit the form. We confirm your preferred date and time.' },
  { title: 'Get tested', desc: 'An audiologist performs hearing assessment and explains your hearing level clearly.' },
  { title: 'Try and compare', desc: 'Experience suitable hearing aids, compare features and choose only when comfortable.' },
]

const moreServices = [
  {
    icon: '🗣️',
    title: 'Speech Therapy',
    desc: 'Delayed speech, articulation, fluency, voice therapy, swallowing therapy and auditory verbal therapy.',
  },
  {
    icon: '⚖️',
    title: 'Vertigo & Balance Evaluation',
    desc: 'VNG, vHIT, VEMP, ECoChG, SVV and vestibular rehabilitation therapy.',
  },
  {
    icon: '🎧',
    title: 'Cochlear Implant Support',
    desc: 'CI candidacy counselling, mapping support, auditory training and family counselling.',
  },
]

export default function HearingAidsPage() {
  return (
    <main style={{ background: '#FAF6F0', fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}>

      {/* ── Announcement bar ── */}
      <div style={{ background: '#1B4D3E', color: 'white', textAlign: 'center', padding: '10px 18px', fontSize: '14px' }}>
        Free hearing aid trial and expert audiology consultation — Sector 113, Gurugram &nbsp;|&nbsp;
        <a href="tel:+918796270575" style={{ color: '#d4a843', fontWeight: 700 }}>Call 8796270575</a>
      </div>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #153d30 60%, #0f2d22 100%)', color: 'white', padding: '60px 18px 50px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 40, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', background: 'rgba(184,137,42,0.2)', border: '1px solid rgba(184,137,42,0.4)', borderRadius: 999, padding: '7px 16px', fontSize: 13, fontWeight: 700, color: '#d4a843', marginBottom: 20 }}>
              Hearing Aids in Gurgaon · Expert Audiologist-Led Care
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, margin: '0 0 18px', fontWeight: 700 }}>
              Hear clearly again with the <span style={{ color: '#B8892A' }}>right hearing aid,</span> fitted by an audiologist.
            </h1>
            {/* Gold ornament */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 20px' }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
            </div>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', margin: '0 0 28px', lineHeight: 1.6, maxWidth: 580 }}>
              Book a professional hearing assessment, compare suitable digital hearing aids, take a real-time trial, and receive personalised fitting support at Communiqué Clinic, Sector 113, Gurugram.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="#appointment" style={{ background: '#B8892A', color: 'white', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                📅 Book Free Hearing Aid Trial
              </a>
              <a href="tel:+918796270575" style={{ border: '2px solid rgba(255,255,255,0.5)', color: 'white', padding: '12px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                📞 Call Now
              </a>
            </div>
            {/* Trust row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
              {trustStats.map((t) => (
                <div key={t.value} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '14px 12px' }}>
                  <strong style={{ display: 'block', fontSize: 20, color: '#d4a843', fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{t.value}</strong>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4, display: 'block', marginTop: 4 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Appointment form */}
          <div id="appointment" style={{ background: 'white', borderRadius: 24, padding: 28, boxShadow: '0 24px 60px rgba(0,0,0,0.2)', border: '1px solid rgba(184,137,42,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <Image src="/logo.png" alt="Communiqué" width={36} height={36} style={{ objectFit: 'contain' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontWeight: 700, color: '#1B4D3E', margin: 0, fontSize: 15 }}>COMMUNIQUÉ</p>
                <p style={{ color: '#B8892A', fontSize: 11, margin: 0 }}>Speech, Hearing & Balance Clinic</p>
              </div>
            </div>
            <div style={{ height: 1, background: '#F0EAE0', margin: '14px 0' }} />
            <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 20, fontWeight: 700, color: '#1B4D3E', margin: '0 0 4px' }}>Book an Appointment</p>
            <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 18px' }}>Our team will call to confirm your slot.</p>
            <HearingAidForm />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '60px 18px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 10 }}>Our Promise</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(26px, 4vw, 36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
            Why patients choose Communiqué Clinic
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
          <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
            A premium hearing, speech and balance clinic designed for accurate diagnosis, ethical counselling and long-term care.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {whyCards.map((c) => (
            <div key={c.title} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: 26, boxShadow: '0 4px 20px rgba(27,77,62,0.07)', borderLeft: '3px solid #B8892A' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1B4D3E15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 14, color: '#1B4D3E', fontWeight: 900 }}>
                {c.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 18, margin: '0 0 8px', fontWeight: 700 }}>{c.title}</h3>
              <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.6, fontSize: 14 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HEARING AID TYPES (with illustrations) ── */}
      <HearingAidTypes />

      {/* ── CONFUSED ABOUT PRICES BAND ── */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '0 18px 60px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1B4D3E, #153d30)', borderRadius: 24, padding: '40px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: 'white', fontSize: 'clamp(22px,3vw,30px)', margin: '0 0 10px', fontWeight: 700 }}>
              Confused about which hearing aid is right for you?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
              Get a clear comparison of options after your hearing test — invisible, rechargeable, Bluetooth, AI-enabled, RIC, BTE, CIC, IIC and more.
            </p>
          </div>
          <a href="#appointment" style={{ background: '#B8892A', color: 'white', padding: '14px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', fontSize: 15 }}>
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ background: 'white', padding: '60px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 10 }}>Trusted Brands</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: '0 0 10px', fontWeight: 700 }}>Leading hearing aid brands</h2>
            <p style={{ color: '#6b7280', margin: 'auto', maxWidth: 500, fontSize: 14 }}>Availability can vary by model and requirement. Final recommendation is made after evaluation.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {brands.map((b) => (
              <div key={b} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 16, padding: '18px 14px', textAlign: 'center', fontWeight: 800, color: '#1B4D3E', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 15, transition: 'all 0.2s' }}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '60px 18px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 10 }}>Simple Process</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: '0 0 10px', fontWeight: 700 }}>How the process works</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: 28, boxShadow: '0 4px 20px rgba(27,77,62,0.07)', position: 'relative', paddingTop: 50 }}>
              <div style={{ position: 'absolute', top: -20, left: 28, width: 44, height: 44, borderRadius: '50%', background: '#B8892A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, boxShadow: '0 4px 12px rgba(184,137,42,0.4)' }}>
                {i + 1}
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 18, margin: '0 0 10px', fontWeight: 700 }}>{s.title}</h3>
              <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.6, fontSize: 14 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '60px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 10 }}>Common Questions</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: 0, fontWeight: 700 }}>Frequently asked questions</h2>
          </div>
          <HearingAidFAQ />
        </div>
      </section>

      {/* ── MORE SERVICES ── */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '60px 18px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 10 }}>Complete Care</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: '0 0 10px', fontWeight: 700 }}>More services at Communiqué Clinic</h2>
          <p style={{ color: '#6b7280', maxWidth: 520, margin: 'auto', fontSize: 14 }}>Unlike a hearing-aid-only centre, our clinic also supports speech, tinnitus and balance-related concerns.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {moreServices.map((s) => (
            <div key={s.title} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: 26, boxShadow: '0 4px 20px rgba(27,77,62,0.07)' }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 18, margin: '0 0 8px', fontWeight: 700 }}>{s.title}</h3>
              <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.6, fontSize: 14 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="/" style={{ color: '#B8892A', fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>← Back to main website</a>
        </div>
      </section>

      {/* ── VISIT ── */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E, #0f2d22)', padding: '60px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
            { icon: '📍', title: 'Address', body: '3rd Floor, SCO 90, M3M Market\nSector 113, Gurugram' },
            { icon: '📞', title: 'Call / WhatsApp', body: '8796270575\n8700138433' },
            { icon: '🌐', title: 'Website', body: 'communiqueclinic.com' },
          ].map((c) => (
            <div key={c.title} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 18, padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#d4a843', fontSize: 16, margin: '0 0 8px', fontWeight: 700 }}>{c.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.7, fontSize: 14, whiteSpace: 'pre-line' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOBILE STICKY BAR ── */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #F0EAE0', padding: 10, display: 'flex', gap: 8, zIndex: 50 }} className="mobile-sticky">
        <a href="#appointment" style={{ flex: 1, background: '#1B4D3E', color: 'white', padding: '12px 10px', borderRadius: 8, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontSize: 14 }}>
          Book Appointment
        </a>
        <a href="tel:+918796270575" style={{ flex: 1, background: '#B8892A', color: 'white', padding: '12px 10px', borderRadius: 8, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontSize: 14 }}>
          📞 Call Now
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) { .mobile-sticky { display: none !important; } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          body { padding-bottom: 70px; }
        }
      `}</style>
    </main>
  )
}