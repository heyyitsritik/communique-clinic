'use client'
import { useReveal } from '@/lib/useReveal'

const days = [
  { day: 'Monday',    open: true },
  { day: 'Tuesday',   open: true },
  { day: 'Wednesday', open: true },
  { day: 'Thursday',  open: true },
  { day: 'Friday',    open: true },
  { day: 'Saturday',  open: true },
  { day: 'Sunday',    open: true },
]

export default function Timings() {
  const sectionRef = useReveal()

  // Get current day for highlighting
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section
      id="timings"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #1B4D3E 0%, #153d30 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={sectionRef} className="reveal text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#B8892A' }}>
            Plan Your Visit
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Clinic Hours &amp; Location
          </h2>
          <div className="ornament"><div className="ornament-diamond" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Timings card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">🕙</span> Opening Hours
            </h3>

            <div className="space-y-3 mb-8">
              {days.map((d) => (
                <div
                  key={d.day}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl transition-all ${
                    d.day === today
                      ? 'border'
                      : 'border border-white/10'
                  }`}
                  style={d.day === today
                    ? { background: 'rgba(184,137,42,0.2)', borderColor: '#B8892A' }
                    : { background: 'rgba(255,255,255,0.05)' }
                  }
                >
                  <span className={`text-sm font-medium flex items-center gap-2 ${d.day === today ? 'text-white' : 'text-white/80'}`}>
                    {d.day === today && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
                    {d.day}
                    {d.day === today && <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#B8892A', color: 'white' }}>Today</span>}
                  </span>
                  <span className={`text-sm font-semibold ${d.open ? '' : 'text-red-400'}`} style={d.open ? { color: '#d4a843' } : {}}>
                    {d.open ? '10:30 AM – 7:30 PM' : 'Closed'}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick note */}
            <div className="rounded-xl p-4 text-sm text-white/70 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
              📞 For emergencies or same-day appointments, please call us directly.
            </div>
          </div>

          {/* Contact info card */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-playfair text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">📍</span> Find Us
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                SCO 90, M3M Market<br />
                Sector 113, Gurugram<br />
                Haryana, India
              </p>
              <a
                href="https://maps.app.goo.gl/Hk9ee23DKqHGyuwn7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm py-2.5 inline-flex"
              >
                🗺️ Open in Google Maps
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-playfair text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">📞</span> Call Us
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+918796270575"
                  className="flex items-center justify-between p-3 rounded-xl text-white hover:bg-white/10 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <span className="text-sm">Primary Line</span>
                  <span className="font-semibold" style={{ color: '#d4a843' }}>8796270575</span>
                </a>
                <a
                  href="tel:+918700138433"
                  className="flex items-center justify-between p-3 rounded-xl text-white hover:bg-white/10 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <span className="text-sm">Alternate Line</span>
                  <span className="font-semibold" style={{ color: '#d4a843' }}>8700138433</span>
                </a>
                <a
                  href="mailto:communique.clinic@gmail.com"
                  className="flex items-center justify-between p-3 rounded-xl text-white hover:bg-white/10 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <span className="text-sm">Email</span>
                  <span className="text-xs" style={{ color: '#d4a843' }}>communique.clinic@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-10 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0!2d76.9952!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCommuniqu%C3%A9%20Speech%20Hearing%20%26%20Balance%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=SCO+90+M3M+Market+Sector+113+Gurugram"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Communiqué Clinic Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
