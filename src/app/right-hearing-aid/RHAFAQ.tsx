'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is the best hearing aid in Gurgaon?',
    a: 'There is no single hearing aid that is best for everyone. The appropriate device depends on your hearing loss, speech understanding, lifestyle, listening environments, technology requirements and budget. A proper assessment should always come before a recommendation.',
  },
  {
    q: 'Do I need a hearing test before buying a hearing aid?',
    a: 'Yes — always. A proper hearing assessment should precede any hearing-aid selection. The type, degree and configuration of your hearing loss help determine the appropriate amplification, style and technology level. Buying without an assessment is one of the most common reasons people are disappointed with their hearing aids.',
  },
  {
    q: 'How much do hearing aids cost in Gurgaon?',
    a: 'Hearing-aid prices vary substantially depending on brand, style, technology level and features. Rather than asking for a device price alone, ask for the complete cost of the hearing-care package — including fitting, programming, follow-up sessions and service support. A cheaper device with poor fitting and no follow-up can cost more in the long run.',
  },
  {
    q: 'Should I buy an expensive hearing aid?',
    a: 'Not necessarily. A more expensive hearing aid is not automatically more appropriate for your hearing loss. A person who mainly communicates in quiet environments may not benefit from every premium feature. Technology should match your actual listening needs — not your budget ceiling.',
  },
  {
    q: 'Can I try a hearing aid before buying it?',
    a: 'Yes, and you should. At Communiqué, we demonstrate the recommended device in the clinic so you can experience speech clarity, comfort, background noise handling and device handling before any commitment. Don\'t choose a hearing aid only by looking at it — experience it.',
  },
  {
    q: 'Why can I hear sounds but not understand speech clearly?',
    a: 'Speech understanding is not the same as sound detection. You can have enough hearing sensitivity to detect that someone is speaking but still struggle to understand what they\'re saying — especially in background noise. Speech audiometry and, where appropriate, speech-in-noise testing can identify this and guide the right technology recommendation.',
  },
  {
    q: 'Should I buy one hearing aid or two?',
    a: 'If both ears have hearing loss, your audiologist may recommend two hearing aids. Two devices together improve sound localisation, listening in group situations and speech understanding in noise. The decision should be made based on your individual hearing profile, not assumed either way.',
  },
  {
    q: 'How long does it take to get used to hearing aids?',
    a: 'It varies. People who have lived with untreated hearing loss for a long time may need several months to adapt fully to amplified sound. Initially, your own voice may sound different and background sounds may seem louder. Consistent use, counselling and structured follow-up significantly improve outcomes.',
  },
  {
    q: 'Do hearing aids restore normal hearing?',
    a: 'No. Hearing aids amplify and process sound to improve access to auditory information — they do not restore biological hearing. Expectations should be realistic. The goal is meaningful improvement in communication and quality of life, not perfect hearing in every situation.',
  },
  {
    q: 'What makes Communiqué different from other hearing aid clinics in Gurgaon?',
    a: 'Communiqué is a clinical audiology practice — not a hearing-aid retail outlet. We assess first, then recommend. Your hearing aid is individually programmed to your audiogram, not fitted with a generic setting. We also offer auditory rehabilitation, speech therapy, vestibular assessment and tinnitus management under one roof — which most hearing-aid-only centres do not.',
  },
]

export default function RHAFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, alignItems: 'start' }} className="faq-grid">
      {faqs.map((f, i) => (
        <div
          key={i}
          style={{
            background: '#FAF6F0',
            border: `1px solid ${open === i ? '#B8892A' : '#F0EAE0'}`,
            borderRadius: 16,
            overflow: 'hidden',
            transition: 'border-color 0.2s',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: '100%', textAlign: 'left', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14 }}
          >
            <span style={{ fontWeight: 700, color: '#1B4D3E', fontSize: 14, fontFamily: 'var(--font-playfair, Georgia, serif)', lineHeight: 1.4 }}>
              {f.q}
            </span>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: open === i ? '#1B4D3E' : '#F0EAE0', color: open === i ? 'white' : '#1B4D3E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, flexShrink: 0, transition: 'all 0.2s' }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 20px 18px', color: '#6b7280', lineHeight: 1.7, fontSize: 14 }}>
              {f.a}
            </div>
          )}
        </div>
      ))}
      <style>{`
        @media (max-width: 768px) { .faq-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}