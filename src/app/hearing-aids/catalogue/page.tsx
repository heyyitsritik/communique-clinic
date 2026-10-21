'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'
import products from '@/data/products.json'

type Product = typeof products[0]

const BRANDS    = ['All', 'Signia', 'Widex', 'Bernafon']
const HEARING_LOSS = ['All', 'Mild', 'Moderate', 'Severe', 'Profound']
const TIERS     = ['All', 'Premium', 'Advanced', 'Standard', 'Essential', 'Basic', 'Economy']

const STYLES = [
  { key: 'All',      label: 'All styles', emoji: '👂' },
  { key: 'RIC',      label: 'Receiver-in-canal', emoji: '🎧' },
  { key: 'BTE',      label: 'Behind the ear',    emoji: '🔊' },
  { key: 'Slim-RIC', label: 'Slim RIC',          emoji: '✨' },
  { key: 'ITE',      label: 'In the ear',         emoji: '🔵' },
  { key: 'ITC',      label: 'In the canal',       emoji: '⚪' },
  { key: 'CIC',      label: 'Completely-in-canal',emoji: '🟡' },
]

const lowestPrice = Math.min(
  ...products
    .map((p) => p.price_single ?? p.price_kit ?? Infinity)
    .filter((v) => v < Infinity)
)

function formatPrice(p: number | null) {
  if (!p) return null
  return '₹' + p.toLocaleString('en-IN')
}

function formatPriceShort(p: number) {
  if (p >= 100000) return '₹' + (p / 100000).toFixed(0) + 'L'
  if (p >= 1000)   return '₹' + (p / 1000).toFixed(0) + 'K'
  return '₹' + p
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/hearing-aids/${product.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-[#E8E0D5] hover:border-[#B8892A] hover:shadow-xl transition-all duration-200 overflow-hidden"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#FAF6F0] to-[#F0EAE0] flex items-center justify-center overflow-hidden">
        <ProductImage
          filename={product.image_filename}
          alt={product.model_name}
          brand={product.brand}
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-[#1B4D3E] text-white shadow-sm">
          {product.technology_tier}
        </span>
        {product.rechargeable && (
          <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200">
            ⚡ Rechargeable
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <p className="text-[11px] text-[#B8892A] font-bold uppercase tracking-widest mb-1">{product.brand}</p>
        <h3 className="font-semibold text-[#1B4D3E] text-sm leading-snug mb-1.5 group-hover:text-[#B8892A] transition-colors line-clamp-2">
          {product.model_name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2 flex-1">{product.short_desc}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          <span className="text-[11px] bg-[#FAF6F0] text-gray-500 px-2 py-0.5 rounded-full border border-[#E8E0D5]">
            {product.form_factor}
          </span>
          <span className="text-[11px] bg-[#FAF6F0] text-gray-500 px-2 py-0.5 rounded-full border border-[#E8E0D5]">
            {product.hearing_loss_label}
          </span>
          {product.bluetooth && (
            <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100">
              📶 BT
            </span>
          )}
          {product.tinnitus_feature && (
            <span className="text-[11px] bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full border border-purple-100">
              🔕 Tinnitus
            </span>
          )}
        </div>

        <div className="border-t border-[#E8E0D5] pt-3">
          {product.price_single ? (
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">Single unit</p>
                <p className="text-lg font-bold text-[#1B4D3E] leading-none">{formatPrice(product.price_single)}</p>
              </div>
              {product.price_kit && (
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">Kit (pair)</p>
                  <p className="text-sm font-bold text-[#B8892A]">{formatPrice(product.price_kit)}</p>
                </div>
              )}
            </div>
          ) : product.price_kit ? (
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">Kit (pair + charger)</p>
              <p className="text-lg font-bold text-[#B8892A]">{formatPrice(product.price_kit)}</p>
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic">Price on enquiry</p>
          )}
          <p className="text-[10px] text-gray-400 mt-1">GST-exempt</p>
        </div>
      </div>

      <div className="bg-[#1B4D3E] text-white text-center text-xs font-semibold py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        View Details →
      </div>
    </Link>
  )
}

function StylePill({ s, active, onClick }: { s: typeof STYLES[0]; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 transition-all text-center min-w-[80px] ${
        active
          ? 'border-[#1B4D3E] bg-[#1B4D3E] text-white shadow-md'
          : 'border-[#E8E0D5] bg-white text-gray-600 hover:border-[#1B4D3E]/40'
      }`}
    >
      <span className="text-xl">{s.emoji}</span>
      <span className="text-[11px] font-semibold leading-tight whitespace-nowrap">{s.key === 'All' ? 'All' : s.key}</span>
    </button>
  )
}

function FilterBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-3 py-1.5 rounded-full border transition-all font-medium ${
        active
          ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]'
          : 'bg-white text-gray-600 border-[#E8E0D5] hover:border-[#1B4D3E]'
      }`}
    >
      {label}
    </button>
  )
}

export default function CataloguePage() {
  const [brand,            setBrand]            = useState('All')
  const [formFactor,       setFormFactor]       = useState('All')
  const [hearingLoss,      setHearingLoss]      = useState('All')
  const [tier,             setTier]             = useState('All')
  const [maxPrice,         setMaxPrice]         = useState(1000000)
  const [search,           setSearch]           = useState('')
  const [showBluetooth,    setShowBluetooth]    = useState(false)
  const [showRechargeable, setShowRechargeable] = useState(false)
  const [heroSearch,       setHeroSearch]       = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (heroSearch) setSearch(heroSearch)
  }, [heroSearch])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand       !== 'All' && p.brand             !== brand)       return false
      if (formFactor  !== 'All' && p.form_factor        !== formFactor)  return false
      if (hearingLoss !== 'All' && p.hearing_loss_label !== hearingLoss) return false
      if (tier        !== 'All' && p.technology_tier    !== tier)        return false
      if (showBluetooth    && !p.bluetooth)    return false
      if (showRechargeable && !p.rechargeable) return false
      const lp = p.price_single ?? p.price_kit ?? 0
      if (lp > maxPrice) return false
      if (search) {
        const q = search.toLowerCase()
        if (
          !p.model_name.toLowerCase().includes(q) &&
          !p.brand.toLowerCase().includes(q) &&
          !p.model_family.toLowerCase().includes(q) &&
          !p.form_factor.toLowerCase().includes(q)
        ) return false
      }
      return true
    })
  }, [brand, formFactor, hearingLoss, tier, maxPrice, search, showBluetooth, showRechargeable])

  const resetAll = () => {
    setBrand('All'); setFormFactor('All'); setHearingLoss('All')
    setTier('All'); setMaxPrice(1000000); setSearch(''); setHeroSearch('')
    setShowBluetooth(false); setShowRechargeable(false)
  }

  const activeFilters = [
    brand !== 'All', formFactor !== 'All', hearingLoss !== 'All',
    tier !== 'All', maxPrice < 1000000, showBluetooth, showRechargeable, !!search,
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-[#FAF6F0]">

      {/* HERO */}
      <div className="bg-[#1B4D3E] text-white pt-24 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/50 text-xs mb-6">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Hearing Aid Catalogue</span>
          </p>

          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Every hearing aid,<br className="hidden md:block" /> with its price.
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-8 max-w-xl">
            Signia, Widex and Bernafon — browse all models with transparent pricing. All GST-exempt.
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-sm">
            {[
              { val: products.length, label: 'hearing aids' },
              { val: '3', label: 'brands' },
              { val: '6', label: 'wearing styles' },
              { val: `from ${formatPriceShort(lowestPrice)}`, label: 'per unit' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-white/80">
                <span className="font-bold text-white text-lg">{s.val}</span>
                <span className="text-white/50">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="relative max-w-2xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search by model, brand, or style — e.g. rechargeable, RIC, Widex…"
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm rounded-2xl pl-11 pr-32 py-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B8892A]"
            />
            <button
              onClick={() => {
                setSearch(heroSearch)
                document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B8892A] hover:bg-[#a07824] text-white text-sm font-bold px-5 py-2 rounded-xl transition"
            >
              Search →
            </button>
          </div>
        </div>
      </div>

      {/* STYLE STRIP */}
      <div className="bg-white border-b border-[#E8E0D5] px-4 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Filter by wearing style</p>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {STYLES.map((s) => (
              <StylePill
                key={s.key}
                s={s}
                active={formFactor === s.key}
                onClick={() => setFormFactor(s.key)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-5xl mx-auto px-4 py-10" id="results">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-[#E8E0D5] p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-[#1B4D3E] text-sm uppercase tracking-wide">Filters</h2>
                {activeFilters > 0 && (
                  <button onClick={resetAll} className="text-xs text-[#B8892A] font-semibold hover:underline">
                    Clear ({activeFilters})
                  </button>
                )}
              </div>

              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-1 block">Search</label>
                <input
                  type="text"
                  placeholder="Model, brand, style…"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setHeroSearch(e.target.value) }}
                  className="w-full text-sm border border-[#E8E0D5] rounded-lg px-3 py-2 focus:outline-none focus:border-[#1B4D3E]"
                />
              </div>

              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Brand</label>
                <div className="flex flex-wrap gap-1.5">
                  {BRANDS.map((b) => (
                    <FilterBtn key={b} label={b} active={brand === b} onClick={() => setBrand(b)} />
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Hearing Loss</label>
                <div className="flex flex-wrap gap-1.5">
                  {HEARING_LOSS.map((h) => (
                    <FilterBtn key={h} label={h} active={hearingLoss === h} onClick={() => setHearingLoss(h)} />
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Technology Level</label>
                <div className="flex flex-wrap gap-1.5">
                  {TIERS.map((t) => (
                    <FilterBtn key={t} label={t} active={tier === t} onClick={() => setTier(t)} />
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-1 block">
                  Budget: <span className="text-[#1B4D3E] font-bold">{formatPriceShort(maxPrice)}</span>
                </label>
                <input
                  type="range"
                  min={10000}
                  max={1000000}
                  step={10000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#1B4D3E]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>₹10K</span><span>₹10L</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-5">
                {[
                  { label: '📶 Bluetooth only',    val: showBluetooth,    set: setShowBluetooth },
                  { label: '⚡ Rechargeable only', val: showRechargeable, set: setShowRechargeable },
                ].map(({ label, val, set }) => (
                  <label key={label} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={val}
                      onChange={(e) => set(e.target.checked)}
                      className="accent-[#1B4D3E] w-4 h-4 rounded"
                    />
                    <span className="text-xs text-gray-700 font-medium">{label}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={resetAll}
                className="w-full text-xs text-[#B8892A] border border-[#B8892A]/30 py-2 rounded-lg hover:bg-[#B8892A]/5 transition font-semibold"
              >
                Reset all filters
              </button>
            </div>
          </aside>

          {/* Grid */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-[#1B4D3E] text-base">{filtered.length}</span>
                <span className="text-gray-400"> / {products.length}</span> hearing aids
                {activeFilters > 0 && (
                  <span className="ml-2 text-xs text-[#B8892A] font-semibold">
                    · {activeFilters} filter{activeFilters > 1 ? 's' : ''} active
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-400">All prices are GST-exempt</p>
            </div>

            {activeFilters > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {brand !== 'All' && (
                  <span onClick={() => setBrand('All')} className="text-xs bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#1B4D3E]/20 transition">
                    {brand} ✕
                  </span>
                )}
                {formFactor !== 'All' && (
                  <span onClick={() => setFormFactor('All')} className="text-xs bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#1B4D3E]/20 transition">
                    {formFactor} ✕
                  </span>
                )}
                {hearingLoss !== 'All' && (
                  <span onClick={() => setHearingLoss('All')} className="text-xs bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#1B4D3E]/20 transition">
                    {hearingLoss} hearing loss ✕
                  </span>
                )}
                {tier !== 'All' && (
                  <span onClick={() => setTier('All')} className="text-xs bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#1B4D3E]/20 transition">
                    {tier} ✕
                  </span>
                )}
                {search && (
                  <span onClick={() => { setSearch(''); setHeroSearch('') }} className="text-xs bg-[#B8892A]/10 text-[#B8892A] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#B8892A]/20 transition">
                    "{search}" ✕
                  </span>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <p className="text-5xl mb-4">🔍</p>
                <p className="font-semibold text-gray-500 text-lg">No results found</p>
                <p className="text-sm mt-1 mb-6">Try adjusting your filters</p>
                <button
                  onClick={resetAll}
                  className="bg-[#1B4D3E] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#163e32] transition"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-14 bg-[#1B4D3E] rounded-2xl p-8 text-white text-center">
              <p className="text-[#B8892A] text-xs font-bold uppercase tracking-widest mb-2">Free Consultation</p>
              <h3 className="font-playfair text-2xl font-bold mb-2">Not sure which one is right for you?</h3>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                Book a free consultation with Dr. Saurabh — he'll match the right device to your hearing loss, lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#contact"
                  className="bg-[#B8892A] hover:bg-[#a07824] text-white font-bold px-7 py-3 rounded-full transition text-sm"
                >
                  📅 Book Free Consultation
                </a>
                <a
                  href="https://wa.me/918796270575?text=Hi, I'd like help choosing a hearing aid."
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-7 py-3 rounded-full transition text-sm"
                >
                  💬 Ask on WhatsApp
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}