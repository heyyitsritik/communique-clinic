'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'
import FitCheckModal from '@/components/FitCheckModal'

type Product = {
  slug: string
  brand: string
  model_family: string
  model_name: string
  form_factor: string
  technology_tier: string
  hearing_loss_label: string
  fitting_range_db: string
  channels: number
  battery: string
  rechargeable: boolean
  bluetooth: boolean
  tinnitus_feature: boolean
  smartphone_app: boolean
  price_single: number | null
  price_kit: number | null
  warranty_years: number
  short_desc: string
  key_features: string[]
  lifestyle_tags: string[]
  image_filename: string
}

function formatPrice(p: number | null) {
  if (!p) return null
  return '₹' + p.toLocaleString('en-IN')
}

const TIER_LABEL: Record<string, string> = {
  Premium: 'Premium option',
  Advanced: 'Premium option',
  Standard: 'Mid-range',
  Essential: 'More affordable',
  Basic: 'More affordable',
  Economy: 'More affordable',
}

function RecommendationCarousel({ title, items }: { title: string; items: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.7
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  if (items.length === 0) return null

  return (
    <div className="mt-14">
      <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#1B4D3E] mb-5">{title}</h2>

      <div className="relative group">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#E8E0D5] shadow-md flex items-center justify-center text-gray-500 hover:text-[#1B4D3E] hover:border-[#B8892A] transition opacity-0 group-hover:opacity-100 -translate-x-3"
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#E8E0D5] shadow-md flex items-center justify-center text-gray-500 hover:text-[#1B4D3E] hover:border-[#B8892A] transition opacity-0 group-hover:opacity-100 translate-x-3"
          aria-label="Scroll right"
        >
          ›
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-1 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((p) => {
            const price = p.price_single ?? p.price_kit
            const priceLabel = p.price_single ? 'per device' : 'pair'
            const tierTag = TIER_LABEL[p.technology_tier] || p.technology_tier

            return (
              <Link
                key={p.slug}
                href={`/hearing-aids/${p.slug}`}
                className="flex-shrink-0 w-[220px] sm:w-[240px] snap-start bg-white rounded-2xl border border-[#E8E0D5] hover:border-[#B8892A]/40 hover:shadow-lg transition-all group/card"
              >
                {/* Image */}
                <div className="relative h-40 flex items-center justify-center p-4">
                  <div className="relative w-28 h-28">
                    <ProductImage
                      filename={p.image_filename}
                      alt={p.model_name}
                      brand={p.brand}
                      className="object-contain"
                      sizes="120px"
                    />
                  </div>
                  {/* Brand icon */}
                  <div className="absolute bottom-2 right-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${
                      p.brand === 'Signia' ? 'bg-red-500' : p.brand === 'Widex' ? 'bg-teal-600' : 'bg-amber-600'
                    }`}>
                      {p.brand[0]}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-4 pb-4">
                  <span className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2 ${
                    tierTag === 'Premium option'
                      ? 'bg-[#B8892A]/15 text-[#B8892A]'
                      : tierTag === 'Mid-range'
                      ? 'bg-[#1B4D3E]/10 text-[#1B4D3E]'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {tierTag}
                  </span>
                  <p className="font-semibold text-sm text-[#1B4D3E] group-hover/card:text-[#B8892A] transition leading-snug">
                    {p.brand} {p.model_name}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Tier {p.technology_tier} · {p.channels} channels · {p.form_factor}
                  </p>
                  {price ? (
                    <p className="mt-2 text-base font-bold text-[#1B4D3E]">
                      {formatPrice(price)} <span className="text-[11px] font-normal text-gray-400">{priceLabel}</span>
                    </p>
                  ) : (
                    <p className="mt-2 text-xs text-gray-400 italic">Price on enquiry</p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function ProductPageClient({
  product,
  familyProducts,
  sharedTraits,
  moreBrand,
  similarOther,
}: {
  product: Product
  familyProducts: Product[]
  sharedTraits: string[]
  moreBrand: Product[]
  similarOther: Product[]
}) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF6F0]">

      {/* Fit Check Modal */}
      {modalOpen && (
        <FitCheckModal
          productName={product.model_name}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-[#1B4D3E] text-white/70 text-xs sm:text-sm py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/hearing-aids/catalogue" className="hover:text-white transition flex-shrink-0">Hearing Aids</Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-white truncate">{product.model_name}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-start">

          {/* Image Panel + At a Glance */}
          <div className="flex flex-col gap-6">
            {/* Product Image */}
            <div className="bg-white rounded-2xl border border-[#E8E0D5] p-8 flex flex-col items-center">
              <div className="relative w-full max-w-xs h-64 mb-6">
                <ProductImage
                  filename={product.image_filename}
                  alt={product.model_name}
                  brand={product.brand}
                  className="object-contain"
                  sizes="320px"
                  priority
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {product.bluetooth && (
                  <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 font-medium">
                    📶 Bluetooth
                  </span>
                )}
                {product.rechargeable && (
                  <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-100 font-medium">
                    ⚡ Rechargeable
                  </span>
                )}
                {product.tinnitus_feature && (
                  <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100 font-medium">
                    🔕 Tinnitus Therapy
                  </span>
                )}
                {product.smartphone_app && (
                  <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100 font-medium">
                    📱 Smartphone App
                  </span>
                )}
              </div>
            </div>

            {/* At a Glance */}
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">At a Glance</p>
              <h3 className="font-playfair text-lg font-bold text-[#1B4D3E] mb-4">
                The facts that <span className="bg-[#B8892A]/15 px-1.5 rounded">decide it</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Hearing Loss */}
                <div className="bg-white rounded-xl border border-[#E8E0D5] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-sm">🦻</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Hearing Loss Covered</p>
                  <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">{product.hearing_loss_label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Fits up to {product.fitting_range_db} dB losses</p>
                </div>

                {/* Channels */}
                <div className="bg-white rounded-xl border border-[#E8E0D5] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-sm">⚙️</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Channels</p>
                  <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">{product.channels}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Processing bands for finer tuning</p>
                </div>

                {/* Rechargeable */}
                <div className="bg-white rounded-xl border border-[#E8E0D5] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-sm">🔋</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Rechargeable</p>
                  <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">{product.rechargeable ? 'Yes' : 'No'}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{product.battery}</p>
                </div>

                {/* Streaming */}
                <div className="bg-white rounded-xl border border-[#E8E0D5] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-sm">📱</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Phone Streaming</p>
                  <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">
                    {product.bluetooth ? 'Bluetooth Ready' : 'Not available'}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {product.bluetooth ? 'Direct streaming to phone' : 'Wired accessories only'}
                  </p>
                </div>

                {/* Style */}
                <div className="bg-white rounded-xl border border-[#E8E0D5] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-sm">👂</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Style</p>
                  <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">{product.form_factor}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {product.form_factor === 'RIC' ? 'Slim, discreet, behind the ear'
                      : product.form_factor === 'BTE' ? 'Behind the ear, robust'
                      : product.form_factor === 'Slim-RIC' ? 'Ultra-slim receiver-in-canal'
                      : product.form_factor === 'ITE' ? 'Custom-fit, in the ear'
                      : product.form_factor === 'ITC' ? 'Small, in the canal'
                      : product.form_factor === 'CIC' ? 'Nearly invisible, deep canal'
                      : 'Custom wearing style'}
                  </p>
                </div>

                {/* Warranty */}
                <div className="bg-white rounded-xl border border-[#E8E0D5] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center mb-2">
                    <span className="text-sm">🛡️</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Warranty</p>
                  <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">{product.warranty_years} years</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Full manufacturer coverage</p>
                </div>

                {/* Tinnitus — full width */}
                {product.tinnitus_feature && (
                  <div className="sm:col-span-2 bg-white rounded-xl border border-[#E8E0D5] p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">🔕</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">Tinnitus Support</p>
                        <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">Yes</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Built-in therapy signals to help manage tinnitus symptoms</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* App control — full width if no tinnitus */}
                {product.smartphone_app && !product.tinnitus_feature && (
                  <div className="sm:col-span-2 bg-white rounded-xl border border-[#E8E0D5] p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">📲</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">App Control</p>
                        <p className="text-sm font-bold text-[#1B4D3E] mt-0.5">Smartphone App</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Adjust volume, programs, and settings from your phone</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div>
            <p className="text-[#B8892A] text-sm font-semibold uppercase tracking-wide mb-1">{product.brand}</p>
            <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-2">{product.model_name}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1B4D3E] text-white">
                {product.technology_tier}
              </span>
              <span className="text-xs text-gray-500">{product.form_factor}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{product.hearing_loss_label} hearing loss</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.short_desc}</p>

            {/* Pricing */}
            <div className="bg-[#FAF6F0] rounded-xl border border-[#E8E0D5] p-4 sm:p-5 mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Pricing (GST-exempt)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {product.price_single && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Single Unit</p>
                    <p className="text-xl font-bold text-[#1B4D3E]">{formatPrice(product.price_single)}</p>
                  </div>
                )}
                {product.price_kit && (
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Kit (2 units + charger)</p>
                    <p className="text-xl font-bold text-[#B8892A]">{formatPrice(product.price_kit)}</p>
                  </div>
                )}
                {!product.price_single && !product.price_kit && (
                  <div className="col-span-2">
                    <p className="text-gray-500 italic text-sm">Price on enquiry — contact us for a personalised quote.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2">Key Features</p>
              <ul className="space-y-1.5">
                {product.key_features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#B8892A] mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifestyle Tags */}
            {product.lifestyle_tags.length > 0 && (
              <div className="mb-6">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2">Ideal For</p>
                <div className="flex flex-wrap gap-2">
                  {product.lifestyle_tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="flex-1 bg-[#1B4D3E] text-white text-center font-semibold px-5 py-3 rounded-full hover:bg-[#163e32] transition text-sm"
              >
                🎯 Check if this fits me
              </button>
              <a
                href={`https://wa.me/918796270575?text=Hi, I'm interested in the ${encodeURIComponent(product.model_name)} hearing aid.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white text-center font-semibold px-5 py-3 rounded-full hover:bg-[#1ebe5a] transition text-sm"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── TIER COMPARISON TABLE ── */}
        {familyProducts.length > 1 && (
          <div className="mt-16">
            <div className="mb-6">
              <p className="text-[#B8892A] text-xs font-bold uppercase tracking-widest mb-2">The Tier Decision</p>
              <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#1B4D3E]">
                Which {product.model_family} is right for you?
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl">
                Same design, same everyday handling. A higher tier unlocks finer sound processing in complex noise.
              </p>
            </div>

            {/* Shared traits bar */}
            {sharedTraits.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-xs text-gray-500">
                <span className="font-semibold text-gray-400 uppercase tracking-wide text-[10px]">Shared by every tier</span>
                {sharedTraits.map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#B8892A]" />
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Comparison table — horizontal scroll on mobile */}
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-left text-xs text-gray-400 font-medium p-3 w-32 align-bottom">
                      {product.model_family}
                    </th>
                    {familyProducts.map((p) => (
                      <th
                        key={p.slug}
                        className={`p-3 text-center align-bottom ${
                          p.slug === product.slug ? 'bg-[#B8892A]/10 rounded-t-xl' : ''
                        }`}
                      >
                        {p.slug === product.slug ? (
                          <span className="inline-block text-[9px] font-bold text-[#B8892A] bg-[#B8892A]/20 px-2 py-0.5 rounded-full uppercase tracking-wide mb-1">
                            This page
                          </span>
                        ) : (
                          <Link href={`/hearing-aids/${p.slug}`} className="text-[#1B4D3E] hover:text-[#B8892A] transition">
                            <span className="text-[10px]">↗</span>
                          </Link>
                        )}
                        <p className={`text-sm font-bold ${p.slug === product.slug ? 'text-[#B8892A]' : 'text-[#1B4D3E]'}`}>
                          {p.technology_tier}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">₹ Price (single)</td>
                    {familyProducts.map((p) => (
                      <td key={p.slug} className={`p-3 text-center text-sm font-bold ${p.slug === product.slug ? 'bg-[#B8892A]/10 text-[#B8892A]' : 'text-[#1B4D3E]'}`}>
                        {formatPrice(p.price_single) ?? formatPrice(p.price_kit) ?? '—'}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">Channels</td>
                    {familyProducts.map((p) => (
                      <td key={p.slug} className={`p-3 text-center text-sm font-semibold ${p.slug === product.slug ? 'bg-[#B8892A]/10 text-[#1B4D3E]' : 'text-[#1B4D3E]'}`}>
                        {p.channels}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">Battery</td>
                    {familyProducts.map((p) => (
                      <td key={p.slug} className={`p-3 text-center text-xs ${p.slug === product.slug ? 'bg-[#B8892A]/10 text-gray-700' : 'text-gray-600'}`}>
                        {p.battery}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">Warranty</td>
                    {familyProducts.map((p) => (
                      <td key={p.slug} className={`p-3 text-center text-xs ${p.slug === product.slug ? 'bg-[#B8892A]/10 text-gray-700' : 'text-gray-600'}`}>
                        {p.warranty_years} yr
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium align-top">Key Features</td>
                    {familyProducts.map((p) => (
                      <td key={p.slug} className={`p-3 align-top ${p.slug === product.slug ? 'bg-[#B8892A]/10' : ''}`}>
                        <ul className="space-y-1">
                          {p.key_features.slice(0, 4).map((f) => (
                            <li key={f} className="text-[11px] text-gray-600 flex items-start gap-1">
                              <span className="text-[#B8892A] mt-0.5 flex-shrink-0">✓</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3" />
                    {familyProducts.map((p) => (
                      <td key={p.slug} className={`p-3 text-center ${p.slug === product.slug ? 'bg-[#B8892A]/10 rounded-b-xl' : ''}`}>
                        {p.slug === product.slug ? (
                          <span className="text-xs text-[#B8892A] font-semibold">Currently viewing</span>
                        ) : (
                          <Link
                            href={`/hearing-aids/${p.slug}`}
                            className="inline-block text-xs font-semibold text-[#1B4D3E] border border-[#1B4D3E] px-4 py-1.5 rounded-full hover:bg-[#1B4D3E] hover:text-white transition"
                          >
                            View {p.technology_tier}
                          </Link>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── 9-STAGE CLINICAL JOURNEY ── */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <p className="text-[#B8892A] text-xs font-bold uppercase tracking-widest mb-2">The CommuniQ Advantage</p>
            <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#1B4D3E]">
              Your 9-Stage Hearing Care Journey
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Every {product.brand} hearing aid from Communiqué includes our complete clinical care program — not just a device, but a medically supervised path to better hearing.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#1B4D3E] via-[#B8892A] to-[#1B4D3E] opacity-20" />

            {[
              { step: 1, title: 'Comprehensive Assessment', desc: 'Pure Tone Audiometry, Speech Audiometry, and Speech-in-Noise testing at our Gurugram clinic — or upload your existing audiogram.', icon: '🩺', tag: 'At Clinic' },
              { step: 2, title: 'Lifestyle & Needs Analysis', desc: 'We map your daily sound environments — work, social, music, TV — to identify the features that matter most for your life.', icon: '🎯', tag: null },
              { step: 3, title: 'Personalised Recommendations', desc: `Based on your audiogram and lifestyle profile, Dr. Saurabh recommends the best-matched ${product.brand} models for your hearing loss.`, icon: '📋', tag: null },
              { step: 4, title: 'Personal Hearing Experience', desc: 'Try your recommended hearing aids in real-world conditions — at our clinic or in the comfort of your home.', icon: '🎧', tag: 'Clinic or Home' },
              { step: 5, title: 'Prescription & Order', desc: 'Your audiologist finalises the prescription. We place the order with the exact configuration for your hearing profile.', icon: '📝', tag: null },
              { step: 6, title: 'Fitting & Programming', desc: 'Real-ear measurement and fine-tuned programming using your audiogram data — at our clinic or via a home visit.', icon: '⚙️', tag: 'Clinic or Home' },
              { step: 7, title: 'Follow-up Fine-tuning', desc: 'Scheduled follow-ups to adjust gain, noise reduction, and feedback settings as your brain adapts to amplified sound.', icon: '🔧', tag: null },
              { step: 8, title: 'Benefit Assessment', desc: 'Objective measurement of hearing improvement — aided audiometry and speech-in-noise retesting to quantify your progress.', icon: '📊', tag: null },
              { step: 9, title: 'Auditory Rehabilitation', desc: 'Personalised rehabilitation exercises based on your benefit assessment — ensuring you get the maximum value from your hearing aids.', icon: '🏆', tag: 'Ongoing' },
            ].map((s) => (
              <div key={s.step} className="relative flex items-start gap-4 md:gap-6 mb-6 last:mb-0 group">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#E8E0D5] group-hover:border-[#B8892A] transition-colors flex flex-col items-center justify-center shadow-sm">
                  <span className="text-lg md:text-xl leading-none">{s.icon}</span>
                  <span className="text-[8px] md:text-[9px] font-bold text-gray-400 leading-none mt-0.5">{s.step}/9</span>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-[#E8E0D5] group-hover:border-[#B8892A]/30 group-hover:shadow-md transition-all p-4 md:p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm md:text-base font-bold text-[#1B4D3E]">{s.title}</h3>
                    {s.tag && (
                      <span className="text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E]">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stepper CTA */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 mb-3">All 9 stages included with every hearing aid purchase</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#1B4D3E] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#163e32] transition text-sm"
              >
                🎯 Start Your Journey
              </button>
              <a
                href={`https://wa.me/918796270575?text=Hi, I'd like to know more about the 9-stage hearing care program for the ${encodeURIComponent(product.model_name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#1ebe5a] transition text-sm"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── RECOMMENDATION CAROUSELS ── */}
        <RecommendationCarousel
          title={`More from ${product.brand}`}
          items={moreBrand}
        />
        <RecommendationCarousel
          title="Similar options from other brands"
          items={similarOther}
        />

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/hearing-aids/catalogue" className="text-[#B8892A] text-sm font-medium hover:underline">
            ← Back to full catalogue
          </Link>
        </div>
      </div>
    </div>
  )
}