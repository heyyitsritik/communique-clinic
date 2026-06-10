'use client'
import { useState } from 'react'
import { useReveal } from '@/lib/useReveal'

const services = [
  'Hearing Assessment',
  'Electrophysiological Tests (BERA, OAE, etc.)',
  'Hearing Aid / CI Services',
  'Vestibular & Balance Assessment',
  'Tinnitus Management',
  'Speech & Language Therapy',
  'General Enquiry',
]

export default function Contact() {
  const sectionRef = useReveal()
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappMsg = `Hi, I'd like to book an appointment at Communiqué Clinic.%0AName: ${encodeURIComponent(form.name || 'Patient')}%0AService: ${encodeURIComponent(form.service || 'General Enquiry')}`

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: '#FAF6F0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={sectionRef} className="reveal text-center mb-14">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Book an Appointment
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
          <p className="text-gray-600 mt-5 max-w-xl mx-auto">
            Fill in the form below or reach us directly on WhatsApp. We'll confirm your
            appointment within a few hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-cream-dark p-8">
            <h3 className="font-playfair text-xl font-bold text-teal-900 mb-6">
              Appointment Request Form
            </h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-playfair text-xl font-bold text-teal-900 mb-2">
                  Request Received!
                </h4>
                <p className="text-gray-600">
                  Thank you. We will contact you within a few hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-teal mt-6 mx-auto"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-cream"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-cream"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="your@email.com (optional)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-cream"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handle}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-cream text-gray-700"
                  >
                    <option value="">— Select a service —</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message / Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={4}
                    placeholder="Describe your concern or preferred appointment timing..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-cream resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try WhatsApp or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-teal w-full justify-center"
                >
                  {status === 'sending' ? '⏳ Sending...' : '📅 Submit Appointment Request'}
                </button>
              </form>
            )}
          </div>

          {/* Right sidebar — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* WhatsApp */}
            <div
              className="rounded-2xl p-7 text-white"
              style={{ background: '#25D366' }}
            >
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-playfair font-bold text-xl mb-2">Chat on WhatsApp</h4>
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                Prefer to chat? Send us a message on WhatsApp and we'll confirm your
                appointment quickly.
              </p>
              <a
                href={`https://wa.me/918796270575?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl font-semibold text-center text-sm transition-colors"
                style={{ background: 'rgba(255,255,255,0.25)', color: 'white' }}
              >
                Open WhatsApp Chat →
              </a>
            </div>

            {/* Direct call */}
            <div className="rounded-2xl p-7 bg-white border border-cream-dark">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-playfair font-bold text-xl text-teal-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm mb-4">Mon–Sun, 10:30 AM – 7:30 PM</p>
              <a href="tel:+918796270575" className="btn-teal w-full justify-center text-sm mb-3">
                8796270575
              </a>
              <a href="tel:+918700138433" className="btn-outline w-full justify-center text-sm">
                8700138433
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl p-7 bg-white border border-cream-dark">
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="font-playfair font-bold text-lg text-teal-900 mb-2">Email Us</h4>
              <a
                href="mailto:communique.clinic@gmail.com"
                className="text-sm break-all"
                style={{ color: '#B8892A' }}
              >
                communique.clinic@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
