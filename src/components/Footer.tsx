import Image from 'next/image'

const quickLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About Doctor', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Clinic Hours', href: '#timings' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#contact' },
]

const serviceLinks = [
  'Hearing Assessment',
  'Electrophysiological Tests',
  'Hearing Aid & CI Services',
  'Vestibular & Balance Care',
  'Tinnitus Management',
  'Speech Therapy',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0f2d22', color: 'white' }}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Communiqué Logo" width={44} height={44} className="h-10 w-auto" />
              <div>
                <p className="font-playfair font-bold text-base tracking-wide">COMMUNIQUÉ</p>
                <p className="text-xs" style={{ color: '#B8892A' }}>Speech, Hearing &amp; Balance</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Providing expert audiological care — assessment, management &amp; rehabilitation
              for all age groups in Gurugram.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/communiq.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={`https://wa.me/918796270575`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="mailto:communique.clinic@gmail.com"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-playfair font-bold text-sm tracking-widest uppercase mb-5" style={{ color: '#B8892A' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: '#B8892A' }}>›</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-sm tracking-widest uppercase mb-5" style={{ color: '#B8892A' }}>
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: '#B8892A' }}>›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-sm tracking-widest uppercase mb-5" style={{ color: '#B8892A' }}>
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <span className="text-base mt-0.5">📍</span>
                <span>SCO 90, M3M Market<br />Sector 113, Gurugram<br />Haryana, India</span>
              </li>
              <li>
                <a href="tel:+918796270575" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <span className="text-base">📞</span> 8796270575
                </a>
              </li>
              <li>
                <a href="tel:+918700138433" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <span className="text-base">📞</span> 8700138433
                </a>
              </li>
              <li>
                <a href="mailto:communique.clinic@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors break-all">
                  <span className="text-base">✉️</span> communique.clinic@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <span className="text-base">🕙</span> 10:30 AM – 7:30 PM, Daily
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {year} Communiqué Speech, Hearing &amp; Balance Clinic. All rights reserved.</p>
          <p>
            <a href="https://communiqueclinic.com" className="hover:text-white/70 transition-colors">
              communiqueclinic.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
