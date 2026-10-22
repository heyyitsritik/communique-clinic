'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

const megaMenu = {
  brands: [
    { label: 'Signia',      desc: 'German engineering, lifelike sound',     href: '/hearing-aids/catalogue?brand=Signia', icon: '✦' },
    { label: 'Widex',       desc: 'Natural sound, zero delay',              href: '/hearing-aids/catalogue?brand=Widex',  icon: '✦' },
    { label: 'Bernafon',    desc: 'Swiss precision, all-day clarity',       href: '/hearing-aids/catalogue?brand=Bernafon', icon: '✦' },
    { label: 'Full Catalogue', desc: 'Search & filter every model',         href: '/hearing-aids/catalogue', icon: '📋' },
  ],
  styles: [
    { label: 'Behind-the-ear (BTE)',     desc: 'Powerful, easy to handle',    href: '/hearing-aids/catalogue?style=BTE' },
    { label: 'Receiver-in-canal (RIC)',  desc: 'Discreet and natural',        href: '/hearing-aids/catalogue?style=RIC' },
    { label: 'In-the-ear (ITE)',         desc: 'Custom-fit comfort',          href: '/hearing-aids/catalogue?style=ITE' },
    { label: 'Completely-in-canal (CIC)',desc: 'Nearly invisible',            href: '/hearing-aids/catalogue?style=CIC' },
  ],
  help: [
    { label: 'Hearing Aid Services',  desc: 'Styles, brands, trial & fitting',       href: '/hearing-aids',           icon: '🎧' },
    { label: 'Browse Catalogue',      desc: 'All models with transparent prices',     href: '/hearing-aids/catalogue', icon: '📋' },
    { label: 'How to Choose',         desc: 'Assessment, lifestyle & guidance',        href: '/right-hearing-aid',      icon: '🎓' },
  ],
}

const servicesMenu = [
  { label: 'Hearing Aid Services', desc: 'Styles, brands, trial & fitting',     href: '/hearing-aids',     icon: '🎧' },
  { label: 'Speech Therapy',       desc: 'Professional speech therapy services', href: '/speech-therapy',   icon: '💬' },
  { label: 'Vertigo & Balance',    desc: 'Vestibular assessment & balance care', href: '/vertigo-balance',  icon: '🧭' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [dropOpen, setDropOpen]   = useState(false)
  const [svcDropOpen, setSvcDropOpen] = useState(false)
  const [mobileHAOpen, setMobileHAOpen] = useState(false)
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)
  const svcDropRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const svcTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setDropOpen(false)
    setSvcDropOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const onMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropOpen(true)
  }
  const onMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropOpen(false), 200)
  }

  const onSvcMouseEnter = () => {
    if (svcTimeoutRef.current) clearTimeout(svcTimeoutRef.current)
    setSvcDropOpen(true)
  }
  const onSvcMouseLeave = () => {
    svcTimeoutRef.current = setTimeout(() => setSvcDropOpen(false), 200)
  }

  // Dynamic text colors based on scroll state
  const textColor = scrolled ? 'text-teal-900' : 'text-white'
  const textHover = scrolled ? 'hover:text-gold-600' : 'hover:text-gold-400'
  const logoTextColor = scrolled ? 'text-teal-900' : 'text-white'
  const subTextColor = scrolled ? 'text-gold-600' : 'text-gold-400'
  const hamburgerBg = scrolled ? 'bg-teal-900' : 'bg-white'

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
              <p className={`font-playfair font-bold text-base leading-tight tracking-wide transition-colors duration-300 ${logoTextColor}`}>
                COMMUNIQUÉ
              </p>
              <p className={`text-xs tracking-wide transition-colors duration-300 ${subTextColor}`}>
                Speech, Hearing &amp; Balance Clinic
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                /* Services dropdown */
                <div
                  key={link.href}
                  ref={svcDropRef}
                  className="relative"
                  onMouseEnter={onSvcMouseEnter}
                  onMouseLeave={onSvcMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${textColor} ${textHover}`}
                    onClick={() => setSvcDropOpen((v) => !v)}
                    aria-expanded={svcDropOpen}
                  >
                    Services
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="transition-transform duration-200"
                      style={{ transform: svcDropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {svcDropOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
                      onMouseEnter={onSvcMouseEnter}
                      onMouseLeave={onSvcMouseLeave}
                      style={{ width: 280 }}
                    >
                      {/* Arrow */}
                      <div className="w-3 h-3 bg-white border-l border-t border-[#F0EAE0] rotate-45 mx-auto -mb-1.5 relative z-10" />

                      <div className="bg-white rounded-2xl border border-[#F0EAE0] shadow-[0_12px_40px_rgba(27,77,62,0.14)] overflow-hidden p-4">
                        <div className="flex flex-col gap-1">
                          {servicesMenu.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setSvcDropOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF6F0] transition-colors group"
                            >
                              <span className="w-8 h-8 rounded-lg bg-[#1B4D3E]/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-[#1B4D3E]/15 transition-colors">
                                {item.icon}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#1B4D3E] leading-tight">{item.label}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      handleNav(link.href)
                    }
                  }}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${textColor} ${textHover}`}
                >
                  {link.label}
                </a>
              )
            )}

            {/* Hearing Aids mega dropdown */}
            <div
              ref={dropRef}
              className="relative"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${textColor} ${textHover}`}
                onClick={() => setDropOpen((v) => !v)}
                aria-expanded={dropOpen}
              >
                Hearing Aids
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-200"
                  style={{ transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Mega dropdown panel */}
              {dropOpen && (
                <div
                  className="absolute top-full right-0 mt-3 z-50"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  style={{ width: 720 }}
                >
                  {/* Arrow */}
                  <div className="w-3 h-3 bg-white border-l border-t border-[#F0EAE0] rotate-45 ml-auto mr-12 -mb-1.5 relative z-10" />

                  <div className="bg-white rounded-2xl border border-[#F0EAE0] shadow-[0_12px_40px_rgba(27,77,62,0.14)] overflow-hidden">
                    <div className="grid grid-cols-3 gap-0">

                      {/* Column 1: Shop by Brand */}
                      <div className="p-5 border-r border-[#F0EAE0]">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Shop by Brand</p>
                        <div className="flex flex-col gap-1">
                          {megaMenu.brands.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              onClick={() => setDropOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF6F0] transition-colors group"
                            >
                              <span className="w-8 h-8 rounded-lg bg-[#1B4D3E]/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-[#1B4D3E]/15 transition-colors">
                                {item.icon}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#1B4D3E] leading-tight">{item.label}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Shop by Style */}
                      <div className="p-5 border-r border-[#F0EAE0]">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Shop by Style</p>
                        <div className="flex flex-col gap-1">
                          {megaMenu.styles.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              onClick={() => setDropOpen(false)}
                              className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF6F0] transition-colors group"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#B8892A] mt-1.5 flex-shrink-0" />
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#1B4D3E] leading-tight">{item.label}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Get Help */}
                      <div className="p-5">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Get Help</p>
                        <div className="flex flex-col gap-1">
                          {megaMenu.help.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              onClick={() => setDropOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FAF6F0] transition-colors group"
                            >
                              <span className="w-8 h-8 rounded-lg bg-[#1B4D3E]/8 flex items-center justify-center text-base flex-shrink-0 group-hover:bg-[#1B4D3E]/15 transition-colors">
                                {item.icon}
                              </span>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-[#1B4D3E] leading-tight">{item.label}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom strip */}
                    <div className="mx-4 mb-4 bg-gradient-to-br from-[#1B4D3E] to-[#153d30] rounded-xl px-5 py-3 flex items-center justify-between">
                      <p className="text-white/80 text-xs">Free hearing aid trial available</p>
                      <a
                        href="/#contact"
                        onClick={() => setDropOpen(false)}
                        className="text-[#d4a843] text-xs font-bold hover:text-[#e8bc5a] transition-colors whitespace-nowrap"
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
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <nav className={`mobile-menu ${menuOpen ? 'open' : ''} absolute right-0 top-0 bottom-0 w-80 bg-cream shadow-2xl flex flex-col pt-20 px-6 gap-1 overflow-y-auto`}>
          <button
            className="absolute top-5 right-5 text-teal-900 text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="ornament mb-4"><div className="ornament-diamond" /></div>

          {navLinks.map((link) =>
            link.label === 'Services' ? (
              /* Mobile Services accordion */
              <div key={link.href} className="border-b border-cream-dark">
                <button
                  onClick={() => setMobileSvcOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-3 font-playfair text-lg text-teal-900 hover:text-gold-600 transition-colors"
                >
                  Services
                  <svg
                    width="16" height="16" viewBox="0 0 14 14" fill="none"
                    className="transition-transform duration-200 flex-shrink-0"
                    style={{ transform: mobileSvcOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {mobileSvcOpen && (
                  <div className="pb-4 pl-1">
                    <div className="flex flex-col gap-1.5">
                      {servicesMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F0EAE0] transition-colors"
                        >
                          <span className="text-base">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-[#1B4D3E]">{item.label}</p>
                            <p className="text-[11px] text-gray-400">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault()
                    handleNav(link.href)
                  } else {
                    setMenuOpen(false)
                  }
                }}
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
                className="transition-transform duration-200 flex-shrink-0"
                style={{ transform: mobileHAOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileHAOpen && (
              <div className="pb-4 space-y-4 pl-1">
                {/* Brands */}
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">By Brand</p>
                  <div className="flex flex-col gap-1.5">
                    {megaMenu.brands.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F0EAE0] transition-colors"
                      >
                        <span className="text-base">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#1B4D3E]">{item.label}</p>
                          <p className="text-[11px] text-gray-400">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Styles */}
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">By Style</p>
                  <div className="flex flex-wrap gap-2">
                    {megaMenu.styles.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-xs font-medium text-[#1B4D3E] bg-[#FAF6F0] px-3 py-2 rounded-full hover:bg-[#F0EAE0] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Help */}
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Get Help</p>
                  <div className="flex flex-col gap-1.5">
                    {megaMenu.help.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F0EAE0] transition-colors"
                      >
                        <span className="text-base">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#1B4D3E]">{item.label}</p>
                          <p className="text-[11px] text-gray-400">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
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