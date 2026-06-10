'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Services',    href: '#services' },
  { label: 'Timings',     href: '#timings' },
  { label: 'Testimonials',href: '#testimonials' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActive]  = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on link click
  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
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
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="text-sm font-medium text-teal-900 hover:text-gold-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="btn-gold text-sm py-2 px-5"
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
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <nav
          className={`mobile-menu ${menuOpen ? 'open' : ''} absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl flex flex-col pt-20 px-8 gap-2`}
        >
          <button
            className="absolute top-5 right-5 text-teal-900 text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="ornament mb-4"><div className="ornament-diamond" /></div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="font-playfair text-lg text-teal-900 py-3 border-b border-cream-dark hover:text-gold-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="btn-gold mt-6 justify-center"
          >
            Book Appointment
          </a>
          {/* Quick call buttons */}
          <a href="tel:+918796270575" className="btn-teal mt-3 justify-center text-sm">
            📞 Call Us Now
          </a>
        </nav>
      </div>
    </>
  )
}
