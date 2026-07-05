'use client'
import { useState } from 'react'

export default function HearingAidForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xaqzzbzr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, source: 'Hearing Aids Landing Page' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #E5D9C8',
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 14,
    background: '#FFFDF9',
    color: '#1A1A1A',
    outline: 'none',
    fontFamily: 'inherit',
  }

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
      <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, color: '#1B4D3E', fontSize: 17, margin: '0 0 8px' }}>Request Received!</p>
      <p style={{ color: '#6b7280', fontSize: 13 }}>We'll call you shortly to confirm your appointment.</p>
    </div>
  )

  return (
    <form onSubmit={submit}>
      <input style={inputStyle} type="text" name="name" value={form.name} onChange={handle} placeholder="Full Name *" required />
      <input style={inputStyle} type="tel" name="phone" value={form.phone} onChange={handle} placeholder="Mobile Number *" required />
      <select style={{ ...inputStyle, color: form.service ? '#1A1A1A' : '#9ca3af' }} name="service" value={form.service} onChange={handle} required>
        <option value="">Service Interested In *</option>
        <option>Hearing Test</option>
        <option>Hearing Aid Trial</option>
        <option>Hearing Aid Fitting / Fine-tuning</option>
        <option>Tinnitus Consultation</option>
        <option>Speech Therapy</option>
        <option>Vertigo / Balance Evaluation</option>
      </select>
      <textarea
        style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
        name="message" value={form.message} onChange={handle}
        placeholder="Briefly describe your concern (optional)"
      />
      {status === 'error' && <p style={{ color: '#ef4444', fontSize: 12, marginBottom: 8 }}>Something went wrong. Please call us directly.</p>}
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{ width: '100%', background: '#1B4D3E', color: 'white', padding: '14px', borderRadius: 10, fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer' }}
      >
        {status === 'sending' ? '⏳ Sending...' : '📅 Request Appointment'}
      </button>
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <a
          href="https://wa.me/918796270575?text=Hi%2C+I'd+like+to+book+a+hearing+aid+trial."
          target="_blank" rel="noopener noreferrer"
          style={{ flex: 1, background: '#25D366', color: 'white', padding: '11px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', textAlign: 'center' }}
        >
          💬 WhatsApp
        </a>
        <a
          href="tel:+918796270575"
          style={{ flex: 1, background: '#FAF6F0', color: '#1B4D3E', padding: '11px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', textAlign: 'center', border: '1px solid #F0EAE0' }}
        >
          📞 Call
        </a>
      </div>
      <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 10, textAlign: 'center' }}>Your details are used only for appointment support.</p>
    </form>
  )
}   