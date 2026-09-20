'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Timings',      href: '#timings' },
  { label: 'Blog',         href: '#blog' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

const hearingAidDropdown = [
  {
    label: 'Hearing Aid Services',
    href: '/hearing-aids',
    desc: 'Styles, brands, trial & fitting',
    icon: '🎧',
  },
  {
    label: 'How to Choose the Right Hearing Aid',
    href: '/right-hearing-aid',
    desc: 'Assessment, lifestyle & clinical guidance',
    icon: '🎓',
  },
  {
    label: 'Speech Therapy',
    href: '/speech-therapy',
    desc: 'Professional speech therapy services',
    icon: '💬',
  }
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [dropOpen, setDropOpen]   = useState(false)
  const [mobileHAOpen, setMobileHAOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setDropOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Hover with small delay so dropdown doesn't flicker
  const onMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropOpen(true)
  }
  const onMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropOpen(false), 150)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Communiqué Clinic Logo"
              width={48}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <div className="hidden sm:block">
              <p className="font-playfair font-bold text-teal-900 text-base leading-tight tracking-wide">
                COMMUNIQUÉ
              </p>
              <p className="text-xs text-gold-600 tracking-wide">
                Speech, Hearing &amp; Balance Clinic
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-teal-900 hover:text-gold-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="text-sm font-medium text-teal-900 hover:text-gold-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}

            {/* Hearing Aids dropdown */}
            <div
              ref={dropRef}
              className="relative"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-teal-900 hover:text-gold-600 transition-colors whitespace-nowrap"
                onClick={() => setDropOpen((v) => !v)}
                aria-expanded={dropOpen}
              >
                Hearing Aids
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  style={{ transition: 'transform 0.2s', transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown panel */}
              {dropOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  style={{ width: 340 }}
                >
                  {/* Arrow pointer */}
                  <div style={{
                    width: 12, height: 12, background: 'white',
                    border: '1px solid #F0EAE0',
                    transform: 'rotate(45deg)',
                    margin: '0 auto -7px',
                    borderBottom: 'none', borderRight: 'none',
                    position: 'relative', zIndex: 1,
                  }} />
                  <div style={{
                    background: 'white',
                    borderRadius: 16,
                    border: '1px solid #F0EAE0',
                    boxShadow: '0 12px 40px rgba(27,77,62,0.14)',
                    overflow: 'hidden',
                    padding: 8,
                  }}>
                    {hearingAidDropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropOpen(false)}
                        style={{ textDecoration: 'none' }}
                      >
                        <div
                          style={{
                            display: 'flex', alignItems: 'flex-start', gap: 14,
                            padding: '14px 16px', borderRadius: 12,
                            transition: 'background 0.15s',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#FAF6F0')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div style={{
                            width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                            background: '#1B4D3E12',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 20,
                          }}>
                            {item.icon}
                          </div>
                          <div>
                            <p style={{ margin: 0, fontWeight: 700, color: '#1B4D3E', fontSize: 14, lineHeight: 1.3 }}>
                              {item.label}
                            </p>
                            <p style={{ margin: '4px 0 0', color: '#9ca3af', fontSize: 12, lineHeight: 1.4 }}>
                              {item.desc}
                            </p>
                          </div>
                          <div style={{ marginLeft: 'auto', color: '#B8892A', fontSize: 16, alignSelf: 'center', flexShrink: 0 }}>
                            →
                          </div>
                        </div>
                      </a>
                    ))}

                    {/* Bottom strip */}
                    <div style={{
                      margin: '4px 8px 8px',
                      background: 'linear-gradient(135deg, #1B4D3E, #153d30)',
                      borderRadius: 10, padding: '10px 16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>
                        Free hearing aid trial available
                      </p>
                      <a
                        href="/hearing-aids#appointment"
                        style={{ color: '#d4a843', fontSize: 12, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}
                        onClick={() => setDropOpen(false)}
                      >
                        Book Now →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="btn-gold text-sm py-2 px-5 whitespace-nowrap"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-teal-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-teal-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-teal-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <nav className={`mobile-menu ${menuOpen ? 'open' : ''} absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl flex flex-col pt-20 px-8 gap-2 overflow-y-auto`}>
          <button
            className="absolute top-5 right-5 text-teal-900 text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="ornament mb-4"><div className="ornament-diamond" /></div>

          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-playfair text-lg text-teal-900 py-3 border-b border-cream-dark hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="font-playfair text-lg text-teal-900 py-3 border-b border-cream-dark hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          {/* Mobile Hearing Aids accordion */}
          <div className="border-b border-cream-dark">
            <button
              onClick={() => setMobileHAOpen((v) => !v)}
              className="w-full flex items-center justify-between py-3 font-playfair text-lg text-teal-900 hover:text-gold-600 transition-colors"
            >
              Hearing Aids
              <svg
                width="16" height="16" viewBox="0 0 14 14" fill="none"
                style={{ transition: 'transform 0.2s', transform: mobileHAOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
              >
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileHAOpen && (
              <div className="pb-3 flex flex-col gap-2 pl-2">
                {hearingAidDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 12px', borderRadius: 10,
                      background: '#FAF6F0', textDecoration: 'none',
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, color: '#1B4D3E', fontSize: 13 }}>{item.label}</p>
                      <p style={{ margin: 0, color: '#9ca3af', fontSize: 11 }}>{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="btn-gold mt-6 justify-center"
          >
            Book Appointment
          </a>
          <a href="tel:+918796270575" className="btn-teal mt-3 justify-center text-sm">
            📞 Call Us Now
          </a>
        </nav>
      </div>
    </>
  )
}