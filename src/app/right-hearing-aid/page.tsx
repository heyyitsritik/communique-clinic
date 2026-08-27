import type { Metadata } from 'next'
import Image from 'next/image'
import RHAForm from './RHAForm'
import RHAFAQ from './RHAFAQ'

export const metadata: Metadata = {
  title: 'Hearing Aids in Gurgaon | Find the Right Hearing Aid for You | Communiqué Clinic',
  description:
    'Not every hearing aid works for every person. Get a comprehensive hearing assessment, expert recommendation, live trial and personalised fitting at Communiqué Clinic, Sector 113, Gurugram — on Dwarka Expressway.',
  keywords: [
    'hearing aids in Gurgaon',
    'right hearing aid Gurgaon',
    'how to choose hearing aid Gurgaon',
    'hearing aid clinic Dwarka Expressway',
    'best hearing aid clinic Sector 113',
    'audiologist hearing aid Gurgaon',
    'hearing aid trial Gurgaon',
    'RIC hearing aid Gurgaon',
    'invisible hearing aid Gurgaon',
    'rechargeable hearing aid Gurgaon',
    'hearing aid fitting Gurgaon',
    'New Gurgaon audiologist',
  ],
}

/* ─── Data ─────────────────────────────────────────────── */

const journeySteps = [
  { num: '01', title: 'Comprehensive Hearing Assessment', desc: 'Pure tone audiometry, speech testing, tympanometry, OAE and more — so we understand exactly how your ears and brain process sound.' },
  { num: '02', title: 'Understand Your Lifestyle', desc: 'We ask about your daily environments — home, workplace, restaurants, travel — because a retired person and a working professional need very different things from a hearing aid.' },
  { num: '03', title: 'Personalised Recommendation', desc: 'Based on your hearing profile, lifestyle and budget, we shortlist 2–3 appropriate options — not the most expensive ones, the most suitable ones.' },
  { num: '04', title: 'Live In-Clinic Trial', desc: 'You wear the recommended device. We test it in conversation, background noise and at a distance. You experience the difference before any decision is made.' },
  { num: '05', title: 'Clinical Fitting & Programming', desc: 'Your hearing aid is individually programmed to your audiogram — not a generic setting. This is the step most hearing-aid shops skip entirely.' },
  { num: '06', title: 'Follow-Up & Fine-Tuning', desc: 'Your brain needs time to adjust to amplified sound. We schedule follow-ups to refine the fit and make sure you\'re getting the most from your device.' },
  { num: '07', title: 'Auditory Rehabilitation', desc: 'For patients who need it, we offer auditory training and communication strategies — so you don\'t just hear louder, you hear better.' },
]

const aidStyles = [
  {
    id: 'RIC',
    photo: '/ric.jpeg',
    title: 'RIC / Receiver-in-Canal',
    badge: 'Most Popular',
    badgeColor: '#B8892A',
    best: 'Mild to moderately-severe hearing loss',
    features: ['Discreet behind-the-ear design', 'Rechargeable options available', 'Smartphone & Bluetooth connectivity', 'Natural sound quality'],
  },
  {
    id: 'BTE',
    photo: '/Bte.jpeg',
    title: 'BTE / Behind-the-Ear',
    badge: 'For Severe Loss',
    badgeColor: '#7c3aed',
    best: 'Moderate to profound hearing loss',
    features: ['Maximum amplification power', 'Robust & easy to handle', 'Ideal for children & seniors', 'Long battery life'],
  },
  {
    id: 'CIC',
    photo: '/cic.jpeg',
    title: 'CIC / Invisible-in-Canal',
    badge: 'Most Discreet',
    badgeColor: '#1B4D3E',
    best: 'Mild to moderate hearing loss',
    features: ['Sits deep inside the ear canal', 'Nearly invisible when worn', 'Custom-fitted to your ear', 'Natural sound direction'],
  },
]

const checklistItems = [
  'Is there a qualified audiologist (BASLP / M.Aud.)?',
  'Will my hearing be comprehensively assessed before a recommendation?',
  'Will my speech understanding be evaluated?',
  'Will my lifestyle and listening environments be discussed?',
  'Can I experience the hearing aid before buying it?',
  'Is the device individually programmed to my audiogram?',
  'Is follow-up and fine-tuning included?',
  'Is auditory rehabilitation available if I need it?',
  'Are multiple brands available for comparison?',
  'Are warranty and after-sale support clearly explained?',
]

const trustPoints = [
  { icon: '🎓', title: 'AIISH-Trained Audiologist', desc: 'M.Aud. + BASLP from All India Institute of Speech and Hearing, Mysore — India\'s premier audiology institution.' },
  { icon: '🏥', title: 'Army Hospital (R&R) Experience', desc: 'Clinical experience at one of India\'s leading tertiary-care hospitals before founding Communiqué.' },
  { icon: '🧪', title: 'Evidence-Based Assessment', desc: 'Comprehensive audiological testing before recommending any device — not the other way around.' },
  { icon: '🎧', title: 'Personalised Fitting', desc: 'Technology selected and programmed according to your hearing loss, lifestyle and listening priorities.' },
  { icon: '🔄', title: 'Long-Term Follow-Up', desc: 'Fine-tuning, counselling and rehabilitation support after the sale — not just during it.' },
  { icon: '📍', title: 'Dwarka Expressway Location', desc: 'Conveniently located at M3M Market, Sector 113 — serving New Gurgaon, Dwarka Expressway and surrounding areas.' },
]

const brands = ['Signia', 'Phonak', 'Widex', 'Oticon', 'ReSound', 'Starkey', 'Bernafon']

const compareRows = [
  { factor: 'Audiologist qualification', communique: '✅ M.Aud. + BASLP, AIISH Mysore', typical: '⚠️ Varies by clinic' },
  { factor: 'Hearing assessment before recommendation', communique: '✅ Always', typical: '❌ Often skipped' },
  { factor: 'Speech understanding tested', communique: '✅ Yes', typical: '⚠️ Sometimes' },
  { factor: 'Lifestyle & environment assessment', communique: '✅ Yes', typical: '❌ Rarely' },
  { factor: 'Live in-clinic trial', communique: '✅ Yes', typical: '⚠️ Limited' },
  { factor: 'Individual programming to audiogram', communique: '✅ Yes', typical: '⚠️ Generic settings common' },
  { factor: 'Follow-up & fine-tuning', communique: '✅ Structured', typical: '⚠️ Ad hoc' },
  { factor: 'Auditory rehabilitation', communique: '✅ Available', typical: '❌ Not offered' },
  { factor: 'Multi-brand options', communique: '✅ 7+ brands', typical: '✅ Varies' },
]

/* ─── Page ──────────────────────────────────────────────── */

export default function RightHearingAidPage() {
  return (
    <main style={{ background: '#FAF6F0', fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}>

      {/* ── Announcement bar ── */}
      <div style={{ background: '#1B4D3E', color: 'white', textAlign: 'center', padding: '10px 18px', fontSize: '13px', lineHeight: 1.5 }}>
        Serving Dwarka Expressway · Sector 113 · New Gurgaon &nbsp;|&nbsp;
        <a href="tel:+918796270575" style={{ color: '#d4a843', fontWeight: 700 }}>Call 8796270575</a>
        &nbsp;|&nbsp; SCO 90, M3M Market, Sector 113, Gurugram
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #153d30 60%, #0f2d22 100%)', color: 'white', padding: '64px 18px 56px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 48, alignItems: 'center' }} className="rha-hero-grid">
          <div>
            {/* Label */}
            <div style={{ display: 'inline-flex', background: 'rgba(184,137,42,0.2)', border: '1px solid rgba(184,137,42,0.4)', borderRadius: 999, padding: '6px 16px', fontSize: 12, fontWeight: 700, color: '#d4a843', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Hearing Aids in Gurgaon · Expert Audiologist-Led Care
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.1, margin: '0 0 6px', fontWeight: 700 }}>
              The right hearing aid<br />
              <span style={{ color: '#B8892A' }}>isn't the smallest.</span><br />
              It isn't the cheapest.<br />
              <span style={{ color: '#d4a843' }}>It's the one built for you.</span>
            </h1>

            {/* Ornament */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0' }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
            </div>

            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', margin: '0 0 12px', lineHeight: 1.65, maxWidth: 560 }}>
              Two people can wear the same hearing aid and have completely different experiences —
              depending on their hearing profile, lifestyle and quality of fitting.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', margin: '0 0 32px', lineHeight: 1.65, maxWidth: 540 }}>
              At Communiqué, we assess first. Then we recommend. Then we fit — individually,
              to your audiogram. Not the other way around.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '15px 30px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                📅 Book a Hearing Assessment
              </a>
              <a href="#journey" style={{ border: '2px solid rgba(255,255,255,0.45)', color: 'white', padding: '13px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                See Our Process →
              </a>
            </div>

            {/* Trust strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {['🎓 AIISH-Trained Audiologist', '🏥 Army Hospital (R&R) Experience', '📍 Sector 113, Gurugram'].map((t) => (
                <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="book" style={{ background: 'white', borderRadius: 24, padding: '28px 28px 24px', boxShadow: '0 24px 60px rgba(0,0,0,0.25)', border: '1px solid rgba(184,137,42,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <Image src="/logo.png" alt="Communiqué" width={34} height={34} style={{ objectFit: 'contain' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontWeight: 700, color: '#1B4D3E', margin: 0, fontSize: 14 }}>COMMUNIQUÉ</p>
                <p style={{ color: '#B8892A', fontSize: 11, margin: 0 }}>Speech, Hearing & Balance Clinic</p>
              </div>
            </div>
            <div style={{ height: 1, background: '#F0EAE0', margin: '14px 0' }} />
            <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 19, fontWeight: 700, color: '#1B4D3E', margin: '0 0 4px' }}>
              Book a Free Consultation
            </p>
            <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 18px', lineHeight: 1.5 }}>
              Hearing assessment + personalised hearing-aid recommendation + live trial.
              No obligation to purchase.
            </p>
            <RHAForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OPENING ARGUMENT
      ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 860, margin: 'auto', padding: '64px 18px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>
          The Question Most People Ask Wrong
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(26px,3.5vw,40px)', color: '#1B4D3E', margin: '0 0 20px', fontWeight: 700, lineHeight: 1.2 }}>
          Stop asking "Which hearing aid is best?"<br />
          <span style={{ color: '#B8892A' }}>Start asking "Which one is right for me?"</span>
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
          <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
          <div style={{ height: 1, width: 60, background: '#B8892A' }} />
        </div>
        <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: 17, margin: '0 0 16px' }}>
          A hearing aid is not a consumer product you compare by price and features alone.
          It is a medical device that needs to be selected, programmed and fine-tuned
          according to your specific hearing loss and communication needs.
        </p>
        <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: 17, margin: 0 }}>
          The assessment, fitting, counselling and after-care matter just as much as the
          device itself. At Communiqué, we don't just sell hearing aids.
          <strong style={{ color: '#1B4D3E' }}> We assess, fit, verify and fine-tune them around your hearing and lifestyle.</strong>
        </p>
      </section>

      {/* ══════════════════════════════════════════
          7-STEP JOURNEY
      ══════════════════════════════════════════ */}
      <section id="journey" style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Our Clinical Process</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              How we find the right hearing aid for you
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 540, margin: 'auto', lineHeight: 1.6 }}>
              The hearing aid is only one part of the process. Here's what a proper hearing-care journey looks like.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {journeySteps.map((s) => (
              <div key={s.num} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 20, padding: '28px 24px', position: 'relative', borderTop: '3px solid #B8892A' }}>
                <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 42, fontWeight: 800, color: '#1B4D3E', opacity: 0.08, position: 'absolute', top: 16, right: 20, lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1B4D3E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, marginBottom: 14 }}>
                  {s.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 17, margin: '0 0 10px', fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.65, fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HEARING AID STYLES
      ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '64px 18px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Styles & Technology</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
            Which hearing aid style is right for you?
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
          <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
            The appropriate style depends on your hearing loss, ear anatomy, dexterity, lifestyle and cosmetic preference.
            Smaller does not automatically mean better.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="aid-styles-grid">
          {aidStyles.map((a) => (
            <div key={a.id} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(27,77,62,0.07)' }}>
              {/* Photo */}
              <div style={{ background: 'linear-gradient(135deg,#1B4D3E08,#B8892A08)', padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200, position: 'relative' }}>
                <Image src={a.photo} alt={a.title} fill style={{ objectFit: 'contain', padding: '20px' }} sizes="320px" />
                <div style={{ position: 'absolute', top: 14, left: 14, background: a.badgeColor, color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>
                  {a.badge}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '22px 22px 26px' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 18, margin: '0 0 6px', fontWeight: 700 }}>{a.title}</h3>
                <p style={{ color: '#B8892A', fontSize: 12, fontWeight: 700, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best for: {a.best}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {a.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#4b5563' }}>
                      <span style={{ color: '#B8892A', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ITE / ITC note */}
        <div style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 16, padding: '20px 24px', marginTop: 16, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>ℹ️</span>
          <p style={{ margin: 0, color: '#4b5563', fontSize: 14, lineHeight: 1.65 }}>
            <strong style={{ color: '#1B4D3E' }}>ITE, ITC and other custom styles</strong> are also available.
            The appropriate style is determined after your hearing assessment — not before.
            We carry a full range across all major manufacturers.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIFESTYLE QUESTIONS
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg,#1B4D3E,#0f2d22)', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44, color: 'white' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 12 }}>
              Why Lifestyle Matters
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', margin: '0 0 14px', fontWeight: 700 }}>
              There is no "best hearing aid."<br />
              <span style={{ color: '#B8892A' }}>There is only the right one for your life.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 580, margin: 'auto', lineHeight: 1.65 }}>
              Before recommending anything, we ask you about your daily life. These questions
              shape the technology that will actually help you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {[
              { q: 'Do you work in meetings or group conversations?', icon: '💼' },
              { q: 'Do you watch television frequently?', icon: '📺' },
              { q: 'Do you attend restaurants or social events?', icon: '🍽️' },
              { q: 'Do you travel regularly?', icon: '✈️' },
              { q: 'Do you use a smartphone extensively?', icon: '📱' },
              { q: 'Do you spend time outdoors?', icon: '🌿' },
              { q: 'Do you need to hear from a distance?', icon: '👂' },
              { q: 'Do you have difficulty handling small objects?', icon: '🤲' },
            ].map((item) => (
              <div key={item.q} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '18px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: 13, lineHeight: 1.55 }}>{item.q}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 20, fontSize: 15 }}>
              Your answers shape the technology we recommend — not price alone.
            </p>
            <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
              Discuss My Lifestyle With an Audiologist
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRANDS
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '60px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Multi-Brand Clinic</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,32px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              We don't push one brand. We find the right one.
            </h2>
            <p style={{ color: '#6b7280', maxWidth: 520, margin: 'auto', fontSize: 14, lineHeight: 1.6 }}>
              Different manufacturers use different approaches to sound processing, noise management, rechargeability and connectivity. The right brand is determined after your assessment.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 12 }} className="brands-grid">
            {brands.map((b) => (
              <div key={b} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 14, padding: '16px 10px', textAlign: 'center', fontWeight: 800, color: '#1B4D3E', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 13 }}>
                {b}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 12, marginTop: 14 }}>
            Availability may vary by model and requirement. Final recommendation is made after clinical evaluation.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1000, margin: 'auto', padding: '64px 18px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Why Communiqué</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
            Clinical hearing care vs hearing-aid retail
          </h2>
          <p style={{ color: '#6b7280', maxWidth: 540, margin: 'auto', lineHeight: 1.6, fontSize: 14 }}>
            Ask these questions before choosing any hearing-aid clinic in Gurgaon.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #F0EAE0', boxShadow: '0 4px 24px rgba(27,77,62,0.08)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#1B4D3E', padding: '16px 24px' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 600 }}>What to check</span>
            <span style={{ color: '#d4a843', fontSize: 13, fontWeight: 700, textAlign: 'center' }}>Communiqué Clinic</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600, textAlign: 'center' }}>Typical HA Retailer</span>
          </div>
          {compareRows.map((r, i) => (
            <div key={r.factor} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '14px 24px', background: i % 2 === 0 ? 'white' : '#FAF6F0', borderBottom: '1px solid #F0EAE0', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{r.factor}</span>
              <span style={{ fontSize: 13, color: '#1B4D3E', textAlign: 'center', fontWeight: 600 }}>{r.communique}</span>
              <span style={{ fontSize: 13, color: '#6b7280', textAlign: 'center' }}>{r.typical}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLINIC CHECKLIST
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Before You Decide</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              The checklist every hearing-aid buyer should use
            </h2>
            <p style={{ color: '#6b7280', lineHeight: 1.6, fontSize: 14 }}>
              This is more useful than asking "Which clinic has the cheapest hearing aid?"
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {checklistItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 14, padding: '16px 20px' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#1B4D3E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</div>
                <p style={{ margin: 0, color: '#374151', fontSize: 15, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ color: '#6b7280', marginBottom: 18, fontSize: 15 }}>
              At Communiqué, the answer to every item above is <strong style={{ color: '#1B4D3E' }}>yes</strong>.
            </p>
            <a href="#book" style={{ background: '#1B4D3E', color: 'white', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
              📅 Book Your Assessment
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY COMMUNIQUÉ
      ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '64px 18px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Your Competitive Advantage</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
            Why entrust your hearing to Communiqué?
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="trust-grid">
          {trustPoints.map((t) => (
            <div key={t.title} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, padding: '26px 24px', borderLeft: '3px solid #B8892A', boxShadow: '0 4px 16px rgba(27,77,62,0.06)' }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{t.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 17, margin: '0 0 8px', fontWeight: 700 }}>{t.title}</h3>
              <p style={{ color: '#6b7280', margin: 0, fontSize: 14, lineHeight: 1.65 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GUARANTEE BAND
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg,#1B4D3E,#153d30)', padding: '56px 18px' }}>
        <div style={{ maxWidth: 800, margin: 'auto', textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🤝</div>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3.5vw,38px)', color: 'white', margin: '0 0 16px', fontWeight: 700, lineHeight: 1.2 }}>
            "Don't choose a hearing aid<br />
            until you've <span style={{ color: '#B8892A' }}>experienced</span> it."
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.7, marginBottom: 12 }}>
            The biggest fear most hearing-aid buyers have is spending ₹80,000 to ₹2 lakh
            and not being happy with the result.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.65, marginBottom: 36 }}>
            At Communiqué, you try the recommended device in the clinic — in real conversation,
            against background noise, at a distance — before any decision is made.
            <strong style={{ color: '#d4a843' }}> No pressure. No obligation.</strong>
          </p>
          <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '16px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>
            📅 Book Your Free Hearing Aid Trial
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Common Questions</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: '#1B4D3E', margin: 0, fontWeight: 700 }}>
              Hearing aid questions — answered honestly
            </h2>
          </div>
          <RHAFAQ />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCATION + FINAL CTA
      ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '64px 18px 80px' }}>
        <div style={{ background: 'linear-gradient(135deg,#1B4D3E,#0f2d22)', borderRadius: 28, padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }} className="final-cta-grid">
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 14 }}>
              Serving Dwarka Expressway · New Gurgaon · Sector 113
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: 'white', margin: '0 0 14px', fontWeight: 700, lineHeight: 1.2 }}>
              Ready to find the hearing aid<br />
              <span style={{ color: '#B8892A' }}>that's right for your life?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 8px', fontSize: 15, lineHeight: 1.6 }}>
              📍 SCO 90, 3rd Floor, M3M Market, Sector 113, Gurugram
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: 15 }}>
              📞 <a href="tel:+918796270575" style={{ color: '#d4a843' }}>8796270575</a>
              &nbsp;·&nbsp;
              <a href="tel:+918700138433" style={{ color: '#d4a843' }}>8700138433</a>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '15px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              📅 Book Assessment
            </a>
            <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+know+more+about+hearing+aids." target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '13px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #F0EAE0', padding: 10, display: 'flex', gap: 8, zIndex: 50 }} className="mobile-sticky">
        <a href="#book" style={{ flex: 1, background: '#1B4D3E', color: 'white', padding: '12px 10px', borderRadius: 8, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontSize: 14 }}>
          Book Assessment
        </a>
        <a href="tel:+918796270575" style={{ flex: 1, background: '#B8892A', color: 'white', padding: '12px 10px', borderRadius: 8, fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontSize: 14 }}>
          📞 Call Now
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) { .mobile-sticky { display: none !important; } }
        @media (max-width: 900px) {
          .rha-hero-grid { grid-template-columns: 1fr !important; }
          .aid-styles-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr 1fr !important; }
          .brands-grid { grid-template-columns: repeat(4,1fr) !important; }
          .final-cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .brands-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 767px) { body { padding-bottom: 70px; } }
      `}</style>
    </main>
  )
}