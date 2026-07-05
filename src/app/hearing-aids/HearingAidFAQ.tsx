'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need a hearing test before buying hearing aids?',
    a: 'Yes. A hearing aid should be selected after a professional hearing assessment so that amplification matches your hearing loss and listening needs. Wearing an incorrectly fitted hearing aid can actually cause more harm.',
  },
  {
    q: 'Can I try hearing aids before purchase?',
    a: 'Yes. Suitable hearing aids can be demonstrated in the clinic so you can understand comfort, clarity and handling before making a decision. We encourage a real-time trial before any commitment.',
  },
  {
    q: 'Which type of hearing aid is best?',
    a: 'The best type depends on your hearing loss severity, ear canal size, lifestyle, cosmetic preference, dexterity and budget. RIC, BTE, CIC and IIC styles all have different advantages — our audiologist will guide you after your assessment.',
  },
  {
    q: 'Do you provide after-fitting support?',
    a: 'Yes. Follow-up fine-tuning, counselling, cleaning guidance and troubleshooting support are important parts of successful hearing aid use. We provide comprehensive after-care for all our patients.',
  },
  {
    q: 'Do you also manage tinnitus and vertigo?',
    a: 'Yes. The clinic provides tinnitus assessment and TRT counselling, plus advanced vestibular assessment including VNG, vHIT, VEMP, SVV and vestibular rehabilitation guidance — all under one roof.',
  },
]

export default function HearingAidFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ maxWidth: 800, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {faqs.map((f, i) => (
        <div
          key={i}
          style={{
            background: 'white',
            border: `1px solid ${open === i ? '#B8892A' : '#F0EAE0'}`,
            borderRadius: 16,
            overflow: 'hidden',
            transition: 'border-color 0.2s',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '18px 22px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ fontWeight: 700, color: '#1B4D3E', fontSize: 15, fontFamily: 'var(--font-playfair, Georgia, serif)', lineHeight: 1.4 }}>
              {f.q}
            </span>
            <span style={{
              width: 28, height: 28, borderRadius: '50%',
              background: open === i ? '#1B4D3E' : '#F0EAE0',
              color: open === i ? 'white' : '#1B4D3E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 700, flexShrink: 0,
              transition: 'all 0.2s',
            }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 22px 18px', color: '#6b7280', lineHeight: 1.7, fontSize: 14 }}>
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}