'use client'
import { useState } from 'react'

const types = [
  {
    id: 'cic',
    title: 'Invisible / CIC / IIC',
    subtitle: 'Completely-in-Canal · Invisible-in-Canal',
    desc: 'Discreet hearing aids custom-fitted to sit deep inside the ear canal — virtually invisible. Ideal for mild to moderate hearing loss with appropriate ear canal anatomy.',
    badge: 'Most Discreet',
    badgeColor: '#1B4D3E',
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Ear outline */}
        <ellipse cx="100" cy="80" rx="55" ry="68" fill="#F0EAE0" stroke="#B8892A" strokeWidth="1.5"/>
        <path d="M100 25 C125 25 148 45 148 75 C148 100 135 115 120 120 C110 123 105 118 108 108 C112 96 118 88 115 75 C112 62 100 55 88 60 C76 65 72 80 78 92 C82 100 85 105 80 112 C75 118 65 115 60 105 C50 88 52 55 70 40 C80 32 90 25 100 25Z" fill="#FAF6F0" stroke="#B8892A" strokeWidth="1.2"/>
        {/* CIC device inside canal */}
        <ellipse cx="100" cy="82" rx="14" ry="10" fill="#B8892A" opacity="0.9"/>
        <ellipse cx="100" cy="82" rx="10" ry="7" fill="#1B4D3E"/>
        <circle cx="100" cy="82" r="3" fill="#d4a843"/>
        {/* Invisible label */}
        <text x="100" y="145" textAnchor="middle" fill="#1B4D3E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Nearly invisible</text>
      </svg>
    ),
  },
  {
    id: 'ric',
    title: 'RIC / Rechargeable',
    subtitle: 'Receiver-in-Canal',
    desc: 'Modern, comfortable devices where a thin wire connects the body (behind the ear) to a small speaker in the ear canal. Available in rechargeable versions — no battery changes needed.',
    badge: 'Most Popular',
    badgeColor: '#B8892A',
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Behind-ear body */}
        <rect x="128" y="30" width="28" height="58" rx="14" fill="#1B4D3E"/>
        <rect x="132" y="38" width="20" height="8" rx="4" fill="#B8892A" opacity="0.8"/>
        {/* Charging indicator */}
        <text x="141" y="74" textAnchor="middle" fill="#d4a843" fontSize="14" fontWeight="900">⚡</text>
        {/* Thin wire */}
        <path d="M128 72 Q110 85 98 90" stroke="#B8892A" strokeWidth="2" strokeLinecap="round"/>
        {/* Ear dome */}
        <ellipse cx="94" cy="93" rx="12" ry="8" fill="#B8892A" opacity="0.85"/>
        <ellipse cx="94" cy="93" rx="7" ry="5" fill="#1B4D3E"/>
        {/* Ear outline */}
        <path d="M60 55 C55 40 60 25 75 22 C90 19 105 28 110 44 C115 58 108 70 100 76 C94 80 88 78 86 84 C84 90 87 96 83 100 C79 104 70 100 66 92 C58 78 60 65 60 55Z" fill="#FAF6F0" stroke="#d0c8bc" strokeWidth="1.2"/>
        <text x="100" y="145" textAnchor="middle" fill="#1B4D3E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Rechargeable option</text>
      </svg>
    ),
  },
  {
    id: 'bluetooth',
    title: 'Bluetooth Hearing Aids',
    subtitle: 'Wireless Connectivity',
    desc: 'Selected models support direct phone calls, music streaming, and app-based adjustments from your smartphone. Stay connected without missing a word.',
    badge: 'Smart & Connected',
    badgeColor: '#2563eb',
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Phone */}
        <rect x="30" y="40" width="48" height="80" rx="8" fill="#1B4D3E" stroke="#B8892A" strokeWidth="1.5"/>
        <rect x="36" y="52" width="36" height="52" rx="4" fill="#FAF6F0"/>
        <circle cx="54" cy="112" r="4" fill="#B8892A"/>
        {/* BT waves from phone */}
        <path d="M82 72 Q92 65 100 72 Q108 79 100 86" stroke="#B8892A" strokeWidth="2" strokeDasharray="4 2" strokeLinecap="round"/>
        <path d="M85 65 Q100 55 112 65 Q122 75 112 85" stroke="#B8892A" strokeWidth="1.5" strokeDasharray="4 2" strokeLinecap="round" opacity="0.6"/>
        {/* Hearing aid */}
        <rect x="130" y="52" width="26" height="50" rx="13" fill="#1B4D3E"/>
        {/* BT symbol */}
        <text x="143" y="82" textAnchor="middle" fill="#d4a843" fontSize="16" fontWeight="900">ᛒ</text>
        <text x="100" y="145" textAnchor="middle" fill="#1B4D3E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Stream calls & music</text>
      </svg>
    ),
  },
  {
    id: 'power',
    title: 'Power Hearing Aids',
    subtitle: 'BTE · For Severe Loss',
    desc: 'Behind-the-ear devices with stronger amplification for moderate to severe and profound hearing loss. Robust, reliable, and built for maximum clarity.',
    badge: 'For Severe Loss',
    badgeColor: '#7c3aed',
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Large BTE body */}
        <rect x="118" y="22" width="36" height="72" rx="14" fill="#1B4D3E" stroke="#B8892A" strokeWidth="1.5"/>
        <rect x="124" y="32" width="24" height="10" rx="5" fill="#B8892A"/>
        <rect x="127" y="50" width="18" height="4" rx="2" fill="#d4a843" opacity="0.7"/>
        <rect x="127" y="58" width="18" height="4" rx="2" fill="#d4a843" opacity="0.5"/>
        <rect x="127" y="66" width="18" height="4" rx="2" fill="#d4a843" opacity="0.3"/>
        {/* Sound waves from eartip */}
        <path d="M118 80 Q100 88 88 88" stroke="#B8892A" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="84" cy="88" rx="10" ry="7" fill="#B8892A" opacity="0.9"/>
        {/* Sound output waves */}
        <path d="M62 75 Q52 80 52 88 Q52 96 62 101" stroke="#B8892A" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
        <path d="M55 70 Q40 78 40 88 Q40 98 55 106" stroke="#B8892A" strokeWidth="1.4" strokeLinecap="round" opacity="0.45"/>
        <text x="100" y="145" textAnchor="middle" fill="#1B4D3E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Maximum amplification</text>
      </svg>
    ),
  },
  {
    id: 'senior',
    title: 'Senior Citizen Friendly',
    subtitle: 'Easy-to-Handle Design',
    desc: 'Devices designed for ease — large controls, simple one-button operation, long battery life, and family counselling included. Comfortable for all-day wear.',
    badge: 'Easy to Use',
    badgeColor: '#059669',
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Large friendly BTE */}
        <rect x="115" y="28" width="40" height="76" rx="16" fill="#1B4D3E" stroke="#B8892A" strokeWidth="2"/>
        {/* Big button */}
        <circle cx="135" cy="56" r="14" fill="#B8892A"/>
        <text x="135" y="61" textAnchor="middle" fill="white" fontSize="16" fontWeight="900">+</text>
        {/* Volume indicator */}
        <rect x="124" y="76" width="22" height="6" rx="3" fill="#FAF6F0" opacity="0.3"/>
        <rect x="124" y="76" width="14" height="6" rx="3" fill="#d4a843"/>
        {/* Hand holding it */}
        <path d="M82 95 C78 88 75 80 80 73 C84 67 92 68 94 75 L96 88" stroke="#B8892A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M88 98 C84 91 82 83 87 77 C91 72 98 73 99 80" stroke="#B8892A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <ellipse cx="90" cy="102" rx="18" ry="10" fill="#FAF6F0" stroke="#B8892A" strokeWidth="1.5"/>
        <text x="100" y="145" textAnchor="middle" fill="#1B4D3E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Simple one-button control</text>
      </svg>
    ),
  },
  {
    id: 'children',
    title: "Children's Hearing Support",
    subtitle: 'Paediatric Audiology',
    desc: 'Complete under-one-roof care — assessment, age-appropriate hearing aid fitting, auditory verbal therapy (AVT) and speech-language guidance for children of all ages.',
    badge: 'All Ages',
    badgeColor: '#ea580c',
    svg: (
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Child head */}
        <circle cx="100" cy="60" r="34" fill="#FAF6F0" stroke="#B8892A" strokeWidth="1.5"/>
        {/* Hair */}
        <path d="M68 55 Q70 32 100 28 Q130 32 132 55" fill="#1B4D3E"/>
        {/* Eyes */}
        <circle cx="88" cy="58" r="4" fill="#1B4D3E"/>
        <circle cx="112" cy="58" r="4" fill="#1B4D3E"/>
        <circle cx="90" cy="56" r="1.5" fill="white"/>
        <circle cx="114" cy="56" r="1.5" fill="white"/>
        {/* Smile */}
        <path d="M90 70 Q100 78 110 70" stroke="#1B4D3E" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* Small colourful BTE on ear */}
        <rect x="128" y="52" width="20" height="36" rx="8" fill="#B8892A" stroke="#d4a843" strokeWidth="1.5"/>
        <circle cx="138" cy="62" r="5" fill="#d4a843"/>
        {/* Ear wire */}
        <path d="M128 68 Q120 72 118 78" stroke="#d4a843" strokeWidth="2" strokeLinecap="round"/>
        <text x="100" y="145" textAnchor="middle" fill="#1B4D3E" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">Paediatric specialist care</text>
      </svg>
    ),
  },
]

export default function HearingAidTypes() {
  const [active, setActive] = useState('cic')
  const current = types.find((t) => t.id === active)!

  return (
    <section style={{ background: 'white', padding: '60px 18px' }}>
      <div style={{ maxWidth: 1160, margin: 'auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', marginBottom: 10 }}>
            Find Your Fit
          </p>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(24px,3vw,36px)', color: '#1B4D3E', margin: '0 0 12px', fontWeight: 700 }}>
            Hearing aid options available
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
            <div style={{ width: 8, height: 8, background: '#B8892A', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: '#B8892A' }} />
          </div>
          <p style={{ color: '#6b7280', maxWidth: 560, margin: 'auto', lineHeight: 1.6 }}>
            Choose the style and technology that suits your ear, hearing loss, daily listening needs and comfort.
          </p>
        </div>

        {/* Tab buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 36 }}>
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                padding: '10px 18px',
                borderRadius: 999,
                border: active === t.id ? 'none' : '1px solid #F0EAE0',
                background: active === t.id ? '#1B4D3E' : 'white',
                color: active === t.id ? 'white' : '#1B4D3E',
                fontWeight: 600,
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {t.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          key={active}
          style={{
            background: '#FAF6F0',
            border: '1px solid #F0EAE0',
            borderRadius: 24,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 320,
            animation: 'fadeIn 0.3s ease',
          }}
          className="aid-panel"
        >
          {/* Illustration side */}
          <div style={{
            background: 'linear-gradient(135deg, #1B4D3E08, #B8892A08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            borderRight: '1px solid #F0EAE0',
          }}>
            <div style={{ width: '100%', maxWidth: 260, aspectRatio: '4/3' }}>
              {current.svg}
            </div>
          </div>

          {/* Content side */}
          <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{
                background: current.badgeColor,
                color: 'white',
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 999,
                letterSpacing: '0.05em',
              }}>
                {current.badge}
              </span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 26,
              color: '#1B4D3E',
              margin: '0 0 6px',
              fontWeight: 700,
            }}>
              {current.title}
            </h3>
            <p style={{ color: '#B8892A', fontWeight: 600, fontSize: 13, margin: '0 0 16px', letterSpacing: '0.03em' }}>
              {current.subtitle}
            </p>
            <div style={{ height: 1, background: '#F0EAE0', marginBottom: 16 }} />
            <p style={{ color: '#374151', lineHeight: 1.7, margin: '0 0 28px', fontSize: 15 }}>
              {current.desc}
            </p>
            <a
              href="#appointment"
              style={{
                background: '#1B4D3E',
                color: 'white',
                padding: '13px 24px',
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: 14,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                alignSelf: 'flex-start',
              }}
            >
              📅 Book a Trial for This Style
            </a>
          </div>
        </div>

        {/* Quick grid below */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 10, marginTop: 16 }}>
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                background: active === t.id ? '#1B4D3E' : 'white',
                border: `1px solid ${active === t.id ? '#1B4D3E' : '#F0EAE0'}`,
                borderRadius: 14,
                padding: '14px 8px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: active === t.id ? 1 : 0.7 }}>
                {t.svg}
              </div>
              <p style={{ color: active === t.id ? 'white' : '#1B4D3E', fontSize: 11, fontWeight: 700, margin: '8px 0 0', lineHeight: 1.3 }}>
                {t.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @media (max-width: 768px) {
          .aid-panel { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}