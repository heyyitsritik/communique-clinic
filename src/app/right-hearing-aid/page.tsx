import type { Metadata } from 'next'
import Image from 'next/image'
import RHAForm from './RHAForm'
import RHAFAQ from './RHAFAQ'
/* eslint-disable */
// @ts-nocheck

export const metadata: Metadata = {
  title: 'Find the Right Hearing Aid | Communiqué Clinic, Dwarka Expressway Gurugram',
  description:
    'Not every hearing aid works for every person. Get a comprehensive hearing assessment, expert recommendation, live hearing aid experience and personalised fitting at Communiqué Clinic — Dwarka Expressway, Gurugram.',
  keywords: [
    'hearing aids Dwarka Expressway',
    'hearing aid clinic Gurugram',
    'right hearing aid Gurgaon',
    'audiologist Dwarka Expressway',
    'hearing aid trial Gurugram',
    'hearing aid fitting Gurgaon',
    'RIC hearing aid Gurugram',
    'invisible hearing aid Gurgaon',
    'hearing aid experience Gurugram',
    'New Gurgaon audiologist',
    'Sector 113 hearing clinic',
  ],
}

/* ─── Data ──────────────────────────────────────────────── */

const programSteps = [
  { num: '01', title: 'Comprehensive Hearing Assessment', desc: 'Pure tone audiometry, speech audiometry, tympanometry, acoustic reflexes and OAE — a complete picture of your hearing sensitivity and ear health.' },
  { num: '02', title: 'Speech & Communication Evaluation', desc: 'We assess not just what you can hear, but how well you understand speech — including in background noise. This is what most audiograms miss entirely.' },
  { num: '03', title: 'Lifestyle & Listening Needs Assessment', desc: 'Your environments, communication partners, work requirements, TV and music habits, smartphone use, dexterity and cosmetic preferences all shape the recommendation.' },
  { num: '04', title: 'Personalised Recommendation', desc: 'Based on your hearing profile, lifestyle and budget, we shortlist the most appropriate options — not the most expensive ones, the most suitable ones.' },
  { num: '05', title: 'Personalised Hearing Aid Experience', desc: 'You experience the recommended device in situations that mirror your actual life — conversation, group settings, background noise, TV, music, distance and more.' },
  { num: '06', title: 'Realistic Expectation Counselling', desc: 'We explain honestly what a hearing aid can and cannot do for your specific hearing loss — so you make an informed decision, not a hopeful one.' },
  { num: '07', title: 'Precision Fitting & Programming', desc: 'Your hearing aid is individually programmed to your audiogram and listening needs — not a generic setting. This step is what separates clinical fitting from retail dispensing.' },
  { num: '08', title: 'Outcomes Measurement', desc: 'Where appropriate, we document aided speech performance and quality-of-life benefit — your hearing journey is measured, not guessed.' },
  { num: '09', title: 'Auditory Rehabilitation', desc: 'Structured listening exercises help your brain adapt to amplified sound and make the most of what your hearing aid provides — not just louder, but better.' },
]

const assessmentLevels = [
  {
    icon: '👂', color: '#1B4D3E', label: 'Level 1',
    title: 'Hearing Sensitivity',
    items: ['Pure Tone Audiometry (PTA)', 'Speech Audiometry', 'Tympanometry', 'Acoustic Reflexes'],
  },
  {
    icon: '🗣️', color: '#2a6a5a', label: 'Level 2',
    title: 'Speech & Communication',
    items: ['Speech Recognition', 'Speech Understanding in Noise', 'Functional Listening Assessment'],
  },
  {
    icon: '🧠', color: '#B8892A', label: 'Level 3',
    title: 'Advanced Auditory Assessment',
    items: ['OAE (where indicated)', 'BERA / ABR (where indicated)', 'Special tests for cochlear / retrocochlear involvement'],
    note: 'Ordered where clinically appropriate',
  },
  {
    icon: '👤', color: '#7c3aed', label: 'Level 4',
    title: 'Lifestyle & Communication Assessment',
    items: ['Listening environments & communication partners', 'Occupational & social requirements', 'TV, music & smartphone preferences', 'Dexterity, cosmetic preferences & expectations'],
  },
]

const lifestyleQs = [
  { icon: '💼', q: 'Do you work in meetings or group conversations?' },
  { icon: '📺', q: 'Do you watch television frequently?' },
  { icon: '🍽️', q: 'Do you attend restaurants or social events?' },
  { icon: '✈️', q: 'Do you travel regularly?' },
  { icon: '📱', q: 'Do you use a smartphone extensively?' },
  { icon: '🌿', q: 'Do you spend time outdoors?' },
  { icon: '👂', q: 'Do you need to hear from a distance?' },
  { icon: '🤲', q: 'Do you have difficulty handling small objects?' },
]

const trialSituations = [
  { icon: '👥', title: 'One-to-One Conversation', q: 'Can you understand a person sitting across from you?' },
  { icon: '👨‍👩‍👧', title: 'Group Conversation', q: 'Can you follow several people talking at once?' },
  { icon: '🔊', title: 'Noisy Environment', q: 'How does speech sound when background noise is present?' },
  { icon: '📺', title: 'Television', q: 'Can you follow dialogue without excessively raising the volume?' },
  { icon: '🎵', title: 'Music', q: 'How natural and comfortable does music sound?' },
  { icon: '📍', title: 'Distant Speech', q: 'How well can you access speech from a distance?' },
  { icon: '🌳', title: 'Environmental Sounds', q: 'Can you comfortably perceive everyday sounds around you?' },
  { icon: '🚶', title: 'Movement', q: 'How does speech sound while walking or moving around?' },
  { icon: '📱', title: 'Smartphone & Connectivity', q: 'How does streamed phone audio or Bluetooth connectivity work?' },
]

const technologyTiers = [
  {
    tier: 'Essential',
    range: '₹50,000 – ₹85,000',
    color: '#4b5563',
    best: 'People who primarily communicate in quiet environments with straightforward listening needs',
    features: ['Essential sound processing', 'Basic directional microphones', 'Basic noise management', 'Rechargeable options on selected models'],
  },
  {
    tier: 'Standard',
    range: '₹85,000 – ₹1,50,000',
    color: '#1B4D3E',
    best: 'Daily wear, family conversations, television, moderate background noise and regular social situations',
    features: ['Improved noise management', 'Directionality & feedback management', 'Connectivity on selected models', 'Rechargeable options'],
  },
  {
    tier: 'Advanced',
    range: '₹1,50,000 – ₹2,50,000',
    color: '#2563eb',
    highlight: false,
    best: 'Active users in restaurants, groups, meetings and other challenging listening environments',
    features: ['Advanced noise management & speech enhancement', 'Adaptive directionality', 'Environmental analysis', 'Enhanced connectivity'],
  },
  {
    tier: 'Premium',
    range: '₹2,75,000 – ₹4,50,000+',
    color: '#B8892A',
    highlight: true,
    best: 'Highly active users in complex listening environments wanting the highest level of processing',
    features: ['Advanced speech-in-noise processing', 'Sophisticated environmental adaptation', 'Premium connectivity', 'Intelligent processing features'],
  },
]

const canDo = [
  'Amplify sound to make speech more accessible',
  'Improve speech understanding in quiet environments',
  'Reduce listening effort in everyday conversation',
  'Improve awareness of environmental sounds',
  'Help with TV and telephone use',
  'Support participation in social situations',
  'Reduce tinnitus perception in many cases',
]

const cannotDo = [
  'Restore biological hearing to normal',
  'Completely eliminate background noise',
  'Understand speech perfectly in every situation',
  'Work the same in every listening environment',
  'Feel immediately natural — adaptation takes time',
  'Replace targeted auditory rehabilitation in some cases',
]

const brands = ['Signia', 'Phonak', 'Widex', 'Unitron', 'ReSound', 'Bernafon', 'Other Options']

const aidStyles = [
  {
    photo: '/ric.jpeg',
    title: 'RIC / Receiver-in-Canal',
    badge: 'Most Popular',
    badgeColor: '#B8892A',
    best: 'Mild to moderately-severe hearing loss',
    features: ['Discreet behind-the-ear design', 'Rechargeable options available', 'Smartphone & Bluetooth connectivity', 'Natural sound quality'],
  },
  {
    photo: '/Bte.jpeg',
    title: 'BTE / Behind-the-Ear',
    badge: 'For Severe Loss',
    badgeColor: '#7c3aed',
    best: 'Moderate to profound hearing loss',
    features: ['Maximum amplification power', 'Robust & easy to handle', 'Ideal for children & seniors', 'Long battery life'],
  },
  {
    photo: '/cic.jpeg',
    title: 'CIC / Invisible-in-Canal',
    badge: 'Most Discreet',
    badgeColor: '#1B4D3E',
    best: 'Mild to moderate hearing loss',
    features: ['Sits deep inside the ear canal', 'Nearly invisible when worn', 'Custom-fitted to your ear', 'Natural sound direction'],
  },
]

const compareRows = [
  { factor: 'Audiologist qualification', communique: '✅ M.Aud. + BASLP, AIISH Mysore', others: '⚠️ Varies by clinic' },
  { factor: 'Hearing assessment before recommendation', communique: '✅ Always', others: '❌ Often skipped' },
  { factor: 'Speech understanding tested', communique: '✅ Yes', others: '⚠️ Sometimes' },
  { factor: 'Lifestyle & environment assessment', communique: '✅ Yes', others: '❌ Rarely' },
  { factor: 'Live in-clinic hearing aid experience', communique: '✅ Yes', others: '⚠️ Limited' },
  { factor: 'Individual programming to audiogram', communique: '✅ Yes', others: '⚠️ Generic settings common' },
  { factor: 'Outcomes measurement', communique: '✅ Before & After documented', others: '❌ Rarely offered' },
  { factor: 'Auditory rehabilitation', communique: '✅ Available', others: '❌ Not offered' },
  { factor: 'Structured follow-up programme', communique: '✅ 6-stage programme', others: '⚠️ Ad hoc' },
  { factor: 'Home support available', communique: '✅ Yes', others: '❌ Rarely' },
  { factor: 'Multi-brand options', communique: '✅ 7+ brands', others: '⚠️ Varies' },
]

const trustPoints = [
  { icon: '🎓', title: 'AIISH-Trained Audiologist', desc: 'M.Aud. + BASLP from All India Institute of Speech and Hearing, Mysore — India\'s premier audiology institution.' },
  { icon: '🏥', title: 'Army Hospital (R&R) Experience', desc: 'Clinical experience at one of India\'s leading tertiary-care hospitals before founding Communiqué.' },
  { icon: '🧪', title: 'Evidence-Based Assessment', desc: 'Comprehensive audiological testing before recommending any device — not the other way around.' },
  { icon: '🎧', title: 'Personalised Fitting', desc: 'Technology selected and programmed according to your hearing loss, lifestyle and listening priorities.' },
  { icon: '🔄', title: 'Long-Term Follow-Up', desc: 'Fine-tuning, counselling and rehabilitation support after the sale — not just during it.' },
  { icon: '📍', title: 'Dwarka Expressway Location', desc: 'Conveniently located at M3M Market, Sector 113 — serving New Gurgaon, Dwarka Expressway and surrounding areas.' },
]

export default function RightHearingAidPage() {
  return (
    <main style={{ background: '#FAF6F0', fontFamily: 'var(--font-inter, Inter, system-ui, sans-serif)' }}>

      {/* ── Announcement bar ── */}
      <div style={{ background: '#1B4D3E', color: 'white', textAlign: 'center', padding: '10px 18px', fontSize: '13px', lineHeight: 1.5 }}>
        Serving Dwarka Expressway · New Gurgaon · Sector 113 &nbsp;|&nbsp;
        <a href="tel:+918796270575" style={{ color: '#d4a843', fontWeight: 700 }}>Call 8796270575</a>
        &nbsp;|&nbsp; SCO 90, M3M Market, Sector 113, Gurugram
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #153d30 60%, #0f2d22 100%)', color: 'white', padding: '64px 18px 56px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 48, alignItems: 'center' }} className="rha-hero-grid">

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', background: 'rgba(184,137,42,0.2)', border: '1px solid rgba(184,137,42,0.4)', borderRadius: 999, padding: '6px 16px', fontSize: 12, fontWeight: 700, color: '#d4a843', marginBottom: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Hearing Aids · Dwarka Expressway, Gurugram
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.1, margin: '0 0 6px', fontWeight: 700 }}>
              The right hearing aid<br />
              <span style={{ color: '#B8892A' }}>isn't the smallest.</span><br />
              It isn't the cheapest.<br />
              <span style={{ color: '#d4a843' }}>It's the one built for you.</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0' }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
            </div>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.82)', margin: '0 0 12px', lineHeight: 1.65, maxWidth: 560 }}>
              Two people can wear the same hearing aid and have completely different experiences —
              depending on their hearing profile, lifestyle and quality of fitting.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: '0 0 32px', lineHeight: 1.65, maxWidth: 540 }}>
              At Communiqué, we assess first. Then we recommend. Then we fit — individually,
              to your audiogram. Not the other way around.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '15px 30px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                📅 Book a Hearing Assessment
              </a>
              <a href="#program" style={{ border: '2px solid rgba(255,255,255,0.45)', color: 'white', padding: '13px 26px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                See Our Process →
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {['🎓 AIISH-Trained Audiologist', '🏥 Army Hospital (R&R) Experience', '📍 Dwarka Expressway, Gurugram'].map((t) => (
                <div key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6 }}>{t}</div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
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
              Hearing assessment + personalised recommendation + live hearing aid experience. No obligation to purchase.
            </p>
            <RHAForm />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMUNIQUÉ HEARING SUCCESS PROGRAM
      ══════════════════════════════════════════ */}
      <section id="program" style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Our Clinical Process</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Communiqué Hearing Success Programme
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 580, margin: 'auto', lineHeight: 1.6 }}>
              We don't just fit a hearing aid. We assess, recommend, fit, measure and follow up —
              every step designed around your hearing and your life.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="program-grid">
            {programSteps.map((s) => (
              <div key={s.num} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 20, padding: '28px 24px', position: 'relative', borderTop: '3px solid #B8892A' }}>
                <div style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 42, fontWeight: 800, color: '#1B4D3E', opacity: 0.06, position: 'absolute', top: 16, right: 20, lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1B4D3E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, marginBottom: 14 }}>
                  {s.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 16, margin: '0 0 10px', fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, lineHeight: 1.65, fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          ASSESSMENT — 4 LEVELS
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="assess-layout">
            {/* Left — content */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Assessment Before Amplification</p>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
                We don't just ask how much you can hear.<br />
                <span style={{ color: '#B8892A' }}>We assess how hearing loss is affecting your life.</span>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ height: 1, width: 60, background: '#B8892A' }} />
                <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
                Our assessment goes across four dimensions — because a hearing aid recommendation
                that ignores your lifestyle is an incomplete recommendation.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {assessmentLevels.map((a) => (
                  <div key={a.title} style={{ background: 'white', border: `1px solid #F0EAE0`, borderRadius: 16, padding: '18px 16px', borderTop: `3px solid ${a.color}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                      <span style={{ fontSize: 18 }}>{a.icon}</span>
                      <div>
                        <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: a.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.label}</p>
                        <p style={{ margin: 0, fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 14, fontWeight: 700 }}>{a.title}</p>
                      </div>
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {a.items.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 12, color: '#4b5563' }}>
                          <span style={{ color: '#B8892A', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                        </li>
                      ))}
                    </ul>
                    {a.note && <p style={{ margin: '8px 0 0', fontSize: 11, color: '#9ca3af', fontStyle: 'italic' }}>{a.note}</p>}
                  </div>
                ))}
              </div>
            </div>
            {/* Right — photo */}
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 520 }}>
              <Image
                src="/assessment.jpg"
                alt="Audiologist conducting hearing assessment"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 560px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.5) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p style={{ color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 18, fontWeight: 700, margin: 0 }}>
                  Comprehensive assessment before any recommendation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIFESTYLE
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E, #0f2d22)', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44, color: 'white' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 12 }}>Why Lifestyle Matters</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', margin: '0 0 14px', fontWeight: 700 }}>
              There is no "best hearing aid."<br />
              <span style={{ color: '#B8892A' }}>There is only the right one for your life.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 580, margin: 'auto', lineHeight: 1.65 }}>
              Before recommending anything, we ask you about your daily life. These questions
              shape the technology that will actually help you.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="lifestyle-grid">
            {lifestyleQs.map((item) => (
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
          SPEECH IN NOISE
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 900, margin: 'auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 16 }}>The Problem Most Clinics Miss</p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(26px,4vw,42px)', color: '#1B4D3E', margin: '0 0 20px', fontWeight: 700, lineHeight: 1.2 }}>
            "I can hear people.<br />
            <span style={{ color: '#B8892A' }}>I just can't understand them in noise."</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
          <p style={{ color: '#4b5563', fontSize: 17, lineHeight: 1.7, marginBottom: 16, maxWidth: 680, margin: '0 auto 16px' }}>
            This is one of the most common and most frustrating hearing difficulties — and a
            standard pure-tone audiogram does not fully capture it.
          </p>
          <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.7, marginBottom: 36, maxWidth: 660, margin: '0 auto 36px' }}>
            At Communiqué, your assessment includes evaluation of speech understanding in
            challenging listening conditions where clinically indicated. This tells us
            <strong style={{ color: '#1B4D3E' }}> how hearing loss is affecting your communication</strong> — not just your hearing thresholds.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 680, margin: '0 auto 36px' }} className="noise-grid">
            {[
              { label: 'Technology Selection', icon: '🎧' },
              { label: 'Counselling', icon: '💬' },
              { label: 'Programming', icon: '⚙️' },
              { label: 'Rehabilitation', icon: '🔄' },
              { label: 'Realistic Expectations', icon: '✅' },
              { label: 'Follow-Up Planning', icon: '📅' },
            ].map((i) => (
              <div key={i.label} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{i.icon}</div>
                <p style={{ margin: 0, color: '#1B4D3E', fontSize: 12, fontWeight: 600 }}>{i.label}</p>
              </div>
            ))}
          </div>
          <a href="#book" style={{ background: '#1B4D3E', color: 'white', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
            Book a Speech-in-Noise Assessment
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RECOMMENDATION — STYLES + BRANDS
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
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
              The appropriate style depends on your hearing loss, ear anatomy, dexterity, lifestyle
              and cosmetic preference. Smaller does not automatically mean better.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }} className="styles-grid">
            {aidStyles.map((a) => (
              <div key={a.title} style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(27,77,62,0.07)' }}>
                <div style={{ background: 'linear-gradient(135deg,#1B4D3E08,#B8892A08)', padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200, position: 'relative' }}>
                  <Image src={a.photo} alt={a.title} fill style={{ objectFit: 'contain', padding: '20px' }} sizes="320px" />
                  <div style={{ position: 'absolute', top: 14, left: 14, background: a.badgeColor, color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999 }}>
                    {a.badge}
                  </div>
                </div>
                <div style={{ padding: '22px 22px 26px' }}>
                  <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 17, margin: '0 0 4px', fontWeight: 700 }}>{a.title}</h3>
                  <p style={{ color: '#B8892A', fontSize: 12, fontWeight: 700, margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best for: {a.best}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {a.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#4b5563' }}>
                        <span style={{ color: '#B8892A', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* Brands */}
          <div style={{ background: 'white', borderRadius: 20, padding: '28px 32px', border: '1px solid #F0EAE0' }}>
            <p style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 16 }}>Brands Available</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }} className="brands-grid">
              {brands.map((b) => (
                <div key={b} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 12, padding: '14px 8px', textAlign: 'center', fontWeight: 800, color: '#1B4D3E', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 12 }}>
                  {b}
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 11, marginTop: 12 }}>
              Availability may vary. Final recommendation is made after clinical evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HEARING AID EXPERIENCE
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Our Signature Feature</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              We offer more than a standard hearing aid trial.
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 680, margin: 'auto', lineHeight: 1.7, fontSize: 16 }}>
              We invite you to live a fully immersive hearing aid experience —{' '}
              <strong style={{ color: '#1B4D3E' }}>designed to show you how vibrant life sounds again.</strong> We demonstrate the device in situations that
              reflect your actual life.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }} className="trial-grid">
            {trialSituations.map((s) => (
              <div key={s.title} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 18, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1B4D3E12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 15, fontWeight: 700 }}>{s.title}</h3>
                </div>
                <p style={{ margin: 0, color: '#6b7280', fontSize: 13, lineHeight: 1.6, fontStyle: 'italic' }}>"{s.q}"</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'linear-gradient(135deg, #1B4D3E, #153d30)', borderRadius: 20, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 20, fontWeight: 700, color: 'white', margin: '0 0 6px' }}>
                No purchase obligation. You decide only when you are confident.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', margin: 0, fontSize: 14 }}>
                No pressure. No sales targets. Your timeline, your decision.
              </p>
            </div>
            <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              📅 Book Your Hearing Aid Experience
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GOOD / BETTER / BEST — 4 TIERS
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Technology Tiers</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              We recommend the level you need.<br />
              <span style={{ color: '#B8892A' }}>Not simply the highest-priced option.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 540, margin: 'auto', lineHeight: 1.6 }}>
              Hearing aids are available from ₹50,000 to ₹4,50,000+. Technology level is
              determined by your actual listening environments — not by your budget ceiling.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="tiers-grid">
            {technologyTiers.map((t) => (
              <div key={t.tier} style={{
                background: t.highlight ? '#1B4D3E' : 'white',
                border: `1px solid ${t.highlight ? '#1B4D3E' : '#F0EAE0'}`,
                borderRadius: 20, padding: '28px 22px',
                boxShadow: t.highlight ? '0 12px 40px rgba(27,77,62,0.25)' : '0 4px 16px rgba(27,77,62,0.06)',
                transform: t.highlight ? 'translateY(-8px)' : 'none',
                position: 'relative',
              }}>
                {t.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#B8892A', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                    Most Advanced
                  </div>
                )}
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 22, fontWeight: 800, margin: '0 0 4px', color: t.highlight ? 'white' : t.color }}>{t.tier}</h3>
                <p style={{ fontSize: 13, fontWeight: 700, color: t.highlight ? '#d4a843' : '#B8892A', margin: '0 0 14px' }}>{t.range}</p>
                <p style={{ fontSize: 12, color: t.highlight ? 'rgba(255,255,255,0.65)' : '#9ca3af', margin: '0 0 16px', lineHeight: 1.5 }}>{t.best}</p>
                <div style={{ height: 1, background: t.highlight ? 'rgba(255,255,255,0.15)' : '#F0EAE0', marginBottom: 14 }} />
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: t.highlight ? 'rgba(255,255,255,0.75)' : '#6b7280' }}>
                      <span style={{ color: t.highlight ? '#d4a843' : '#B8892A', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 12, marginTop: 16 }}>
            *Prices are indicative and subject to change. Final recommendation made after clinical evaluation.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REALISTIC EXPECTATIONS
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Expectation Counselling</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              We tell you what a hearing aid<br />
              <span style={{ color: '#B8892A' }}>can — and cannot — do.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
              Before fitting, we take time to explain realistic expectations — because a patient
              with accurate expectations is more likely to succeed with their hearing aid.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="expect-grid">
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: '28px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#166534', fontSize: 18, margin: '0 0 16px', fontWeight: 700 }}>✅ What hearing aids can do</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {canDo.map((c) => (
                  <li key={c} style={{ fontSize: 14, color: '#166534', display: 'flex', gap: 10, lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0 }}>✓</span>{c}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 16, padding: '28px' }}>
              <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#991b1b', fontSize: 18, margin: '0 0 16px', fontWeight: 700 }}>❌ What hearing aids cannot do</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cannotDo.map((c) => (
                  <li key={c} style={{ fontSize: 14, color: '#991b1b', display: 'flex', gap: 10, lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0 }}>✗</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FITTING & PROGRAMMING
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="fitting-layout">
            {/* Left — photo */}
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 480 }}>
              <Image
                src="/fitting.jpg"
                alt="Audiologist fitting hearing aid on patient"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 560px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.5) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p style={{ color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 18, fontWeight: 700, margin: 0 }}>
                  Individually programmed to your audiogram
                </p>
              </div>
            </div>
            {/* Right — content */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Precision Fitting & Programming</p>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
                Your hearing aid is programmed<br />
                <span style={{ color: '#B8892A' }}>to your audiogram and your life.</span>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ height: 1, width: 60, background: '#B8892A' }} />
                <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
                This is the step most hearing-aid shops skip entirely. At Communiqué, your device
                is individually programmed to your specific hearing profile — not a generic factory
                setting that works for nobody in particular.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '🎯', title: 'Audiogram-Based Programming', desc: 'Amplification targets are set individually to your specific hearing thresholds across all frequencies.' },
                  { icon: '📏', title: 'Real-Ear Measurement (REM)', desc: 'Where appropriate, a probe microphone verifies exactly how the device is performing inside your ear canal.' },
                  { icon: '🗣️', title: 'Handling & Care Guidance', desc: 'Full instruction on insertion, removal, cleaning, battery or charging, and daily maintenance.' },
                  { icon: '🏠', title: 'Home Support Available', desc: 'Hearing screening, hearing aid experience and fine-tuning visits available at your home where required.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'white', borderRadius: 14, padding: '14px 16px', border: '1px solid #F0EAE0' }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ margin: '0 0 4px', fontWeight: 700, color: '#1B4D3E', fontSize: 14 }}>{item.title}</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUTCOMES MEASUREMENT
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E, #0f2d22)', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 12 }}>Outcomes Measurement</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: 'white', margin: '0 0 12px', fontWeight: 700 }}>
              Your hearing journey is measured.<br />
              <span style={{ color: '#B8892A' }}>Not guessed.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
              For appropriate patients, we document performance before and after fitting — so you
              can see the difference, not just feel it.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="outcomes-grid">
            {[
              {
                label: 'BEFORE', color: '#6b7280', bg: 'rgba(255,255,255,0.06)',
                items: ['Hearing thresholds (audiogram)', 'Speech recognition score', 'Speech-in-noise performance where applicable', 'Patient-reported communication difficulty', 'Quality-of-life questionnaire'],
              },
              {
                label: 'AFTER', color: '#d4a843', bg: 'rgba(184,137,42,0.12)',
                items: ['Aided speech understanding performance', 'Speech-in-noise improvement where applicable', 'Patient-reported hearing benefit', 'Listening confidence rating', 'Quality-of-life improvement score'],
              },
            ].map((side) => (
              <div key={side.label} style={{ background: side.bg, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '28px 24px' }}>
                <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', color: side.color, margin: '0 0 16px' }}>{side.label}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {side.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                      <span style={{ color: side.color, flexShrink: 0, fontWeight: 700 }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    {/* ══════════════════════════════════════════
          AUDITORY REHABILITATION
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>
              Beyond the Device
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Auditory Rehabilitation
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 600, margin: 'auto', lineHeight: 1.7, fontSize: 15 }}>
              A hearing aid provides access to sound. Rehabilitation helps you make the most of
              that access. Structured auditory rehabilitation can help patients adapt to amplified
              sound and make better use of auditory information through learning and neural adaptation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="rehab-grid">
            {[
              { icon: '🎯', title: 'Speech Discrimination', desc: 'Targeted listening exercises to improve how clearly you distinguish speech sounds — especially similar-sounding words.' },
              { icon: '🧠', title: 'Auditory Attention', desc: 'Training to improve your ability to focus on a single voice in a noisy environment.' },
              { icon: '🔊', title: 'Listening in Noise', desc: 'Progressive exercises that build confidence and accuracy in challenging background noise situations.' },
              { icon: '💭', title: 'Auditory Memory', desc: 'Exercises to strengthen your ability to process and retain spoken information.' },
              { icon: '🗣️', title: 'Communication Strategies', desc: 'Practical techniques for you and your communication partners to reduce misunderstanding in daily life.' },
              { icon: '🔄', title: 'Adapting to Amplification', desc: 'Structured guidance to help your brain adjust comfortably to the new sounds your hearing aid provides.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#FAF6F0', border: '1px solid #F0EAE0', borderRadius: 16, padding: '22px 20px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1B4D3E12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 14 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 16, margin: '0 0 8px', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: 13, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, background: '#FAF6F0', borderRadius: 16, padding: '20px 24px', borderLeft: '4px solid #B8892A' }}>
            <p style={{ margin: 0, color: '#1B4D3E', fontSize: 14, lineHeight: 1.7 }}>
              <strong>Not every patient requires formal auditory rehabilitation.</strong> The need
              is assessed individually — particularly for patients who have had untreated hearing
              loss for a prolonged period, or those with reduced speech discrimination scores.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOLLOW-UP TIMELINE
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 900, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>
              Communiqué Hearing Success Programme
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Your hearing journey doesn't end<br />
              <span style={{ color: '#B8892A' }}>when you purchase the device.</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
              A structured follow-up programme is what separates a clinical hearing-care practice
              from a hearing-aid retail outlet.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 28, top: 28, bottom: 28, width: 2, background: 'linear-gradient(to bottom, #1B4D3E, #B8892A)', borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { time: 'Fitting Day', label: 'Initial Fitting & Programming', items: ['Device programmed to your audiogram', 'Real-ear verification where appropriate', 'Handling, insertion and care guidance', 'Expectation counselling'] },
                { time: '1 Week', label: 'Early Adjustment Review', items: ['Listening experience in first week', 'Comfort and sound quality check', 'Addressing adaptation difficulties', 'Fine-tuning if required'] },
                { time: '2 Weeks', label: 'Listening Environments Check', items: ['Performance in noise and groups', 'TV and telephone use', 'Battery or charging experience', 'Further fine-tuning'] },
                { time: '1 Month', label: 'Outcome Assessment', items: ['Speech understanding check', 'Quality-of-life questionnaire', 'Rehabilitation progress review', 'Programming refinements'] },
                { time: '3 Months', label: 'Comprehensive Review', items: ['Full performance evaluation', 'Lifestyle changes since fitting', 'Auditory rehabilitation progress', 'Technology upgrade discussion if relevant'] },
                { time: 'Every 6 Months', label: 'Long-Term Care Appointment', items: ['Device check and cleaning', 'Performance consistency', 'Hearing changes monitored', 'Ongoing support and guidance'] },
              ].map((step, i) => (
                <div key={step.time} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingLeft: 8 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: i === 0 ? '#1B4D3E' : i === 5 ? '#B8892A' : 'white', border: `2px solid ${i === 0 ? '#1B4D3E' : '#B8892A'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: i === 0 || i === 5 ? 'white' : '#B8892A' }}>{i + 1}</span>
                  </div>
                  <div style={{ background: 'white', border: '1px solid #F0EAE0', borderRadius: 16, padding: '18px 20px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                      <span style={{ background: '#1B4D3E', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>{step.time}</span>
                      <h3 style={{ margin: 0, fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 15, fontWeight: 700 }}>{step.label}</h3>
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 12px' }}>
                      {step.items.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 12, color: '#6b7280' }}>
                          <span style={{ color: '#B8892A', flexShrink: 0, marginTop: 2 }}>·</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOME SUPPORT
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1160, margin: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="home-layout">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>
                We Come to You
              </p>
              <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
                Home support —<br />
                <span style={{ color: '#B8892A' }}>for patients who need it.</span>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ height: 1, width: 60, background: '#B8892A' }} />
                <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)', flexShrink: 0 }} />
              </div>
              <p style={{ color: '#6b7280', lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
                For patients who find it difficult to visit the clinic — elderly patients, those
                with mobility concerns, or those who simply prefer the comfort of their own home
                — we offer home support visits across Dwarka Expressway and New Gurgaon.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '👂', title: 'Home Hearing Screening', desc: 'A basic hearing assessment conducted at your home to identify whether further clinical evaluation is recommended.' },
                  { icon: '🎧', title: 'Hearing Aid Experience at Home', desc: 'Experience a recommended hearing aid in your own living environment — your home, your acoustics, your life.' },
                  { icon: '🔧', title: 'Fine-Tuning at Home', desc: 'Follow-up programming and adjustment visits at your home where clinically appropriate.' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: '#FAF6F0', borderRadius: 14, padding: '16px', border: '1px solid #F0EAE0' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1B4D3E12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ margin: '0 0 4px', fontWeight: 700, color: '#1B4D3E', fontSize: 14 }}>{item.title}</p>
                      <p style={{ margin: 0, color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <a href="#book" style={{ background: '#1B4D3E', color: 'white', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>
                  📞 Ask About Home Support
                </a>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 500 }}>
              <Image
                src="/home-support.jpg"
                alt="Audiologist conducting home visit"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 560px"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,77,62,0.5) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p style={{ color: 'white', fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 17, fontWeight: 700, margin: 0 }}>
                  Serving Dwarka Expressway · New Gurgaon · Sector 113
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMUNIQUÉ VS OTHERS
      ══════════════════════════════════════════ */}
      <section style={{ background: '#FAF6F0', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 12 }}>Why Communiqué</p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
              Clinical hearing care vs hearing-aid retail
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
              <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
              <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            </div>
            <p style={{ color: '#6b7280', maxWidth: 500, margin: 'auto', lineHeight: 1.6, fontSize: 14 }}>
              Ask these questions before choosing any hearing-aid clinic.
            </p>
          </div>
          <div style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #F0EAE0', boxShadow: '0 4px 24px rgba(27,77,62,0.08)' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#1B4D3E', padding: '16px 24px' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600 }}>What to check</span>
              <span style={{ color: '#d4a843', fontSize: 13, fontWeight: 700, textAlign: 'center' }}>Communiqué Clinic</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600, textAlign: 'center' }}>Others</span>
            </div>
            {compareRows.map((r, i) => (
              <div key={r.factor} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '13px 24px', background: i % 2 === 0 ? 'white' : '#FAF6F0', borderBottom: '1px solid #F0EAE0', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{r.factor}</span>
                <span style={{ fontSize: 13, color: '#1B4D3E', textAlign: 'center', fontWeight: 600 }}>{r.communique}</span>
                <span style={{ fontSize: 13, color: '#6b7280', textAlign: 'center' }}>{r.others}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GUARANTEE BAND
      ══════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(135deg, #1B4D3E, #153d30)', padding: '56px 18px' }}>
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
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.7, margin: '0 auto 12px', maxWidth: 620 }}>
            The biggest fear most hearing-aid buyers have is spending ₹80,000 to ₹2 lakh
            and not being happy with the result.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.65, margin: '0 auto 36px', maxWidth: 600 }}>
            At Communiqué, you experience the recommended device in the clinic — in real
            conversation, against background noise, at a distance — before any decision is made.
            <strong style={{ color: '#d4a843' }}> No pressure. No obligation.</strong>
          </p>
          <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '16px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>
            📅 Book Your Personalised Hearing Aid Experience
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section style={{ background: 'white', padding: '64px 18px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
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
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section style={{ maxWidth: 1160, margin: 'auto', padding: '64px 18px 80px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1B4D3E, #0f2d22)', borderRadius: 28, padding: '48px 40px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }} className="final-cta-grid">
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4a843', marginBottom: 14 }}>
              Serving Dwarka Expressway · New Gurgaon · Sector 113
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(22px,3vw,34px)', color: 'white', margin: '0 0 8px', fontWeight: 700, lineHeight: 1.2 }}>
              We don't just help you hear more.<br />
              <span style={{ color: '#B8892A' }}>We help you hear better.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, margin: '0 0 16px', lineHeight: 1.6 }}>
              Assessment → Lifestyle → Recommendation → Hearing Aid Experience → Realistic Expectations → Fitting → Outcomes Measurement → Auditory Rehabilitation → Long-term Follow-up
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 6px', fontSize: 15 }}>
              📍 SCO 90, 3rd Floor, M3M Market, Sector 113, Dwarka Expressway, Gurugram
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: 15 }}>
              📞 <a href="tel:+918796270575" style={{ color: '#d4a843' }}>8796270575</a>
              &nbsp;·&nbsp;
              <a href="tel:+918700138433" style={{ color: '#d4a843' }}>8700138433</a>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <a href="#book" style={{ background: '#B8892A', color: 'white', padding: '15px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              📅 Book Assessment
            </a>
            <a href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+know+more+about+hearing+aids." target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="trust-grid">
  {trustPoints.map((t) => (
    <div
      key={t.title}
      style={{
        background: '#FAF6F0',
        border: '1px solid #F0EAE0',
        borderRadius: 20,
        padding: '26px 24px',
        borderLeft: '3px solid #B8892A'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: '#1B4D3E12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20
          }}
        >
          {t.icon}
        </div>
        <div>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-playfair, Georgia, serif)', color: '#1B4D3E', fontSize: 16, fontWeight: 700 }}>
            {t.title}
          </h3>
          <p style={{ margin: '6px 0 0', color: '#6b7280', fontSize: 13 }}>{t.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </main>
  )
}