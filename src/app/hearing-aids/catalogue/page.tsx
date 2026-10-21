'use client'

import React, { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'
import products from '@/data/products.json'

type Product = typeof products[0]

const BRANDS    = ['All', 'Signia', 'Widex', 'Bernafon']
const HEARING_LOSS = ['All', 'Mild', 'Moderate', 'Severe', 'Profound']
const TIERS     = ['All', 'Premium', 'Advanced', 'Standard', 'Essential', 'Basic', 'Economy']
const LIFESTYLES = ['All', 'Active Lifestyle', 'Everyday Comfort', 'Discreet Wear', 'Music & Streaming', 'TV Streaming', 'Seniors', 'Tinnitus Relief', 'Budget Friendly', 'Profound Loss']
const TIER_ORDER: Record<string, number> = { Premium: 0, Advanced: 1, Standard: 2, Essential: 3, Basic: 4, Economy: 5 }

// A product family groups products that share brand + model_family + form_factor
type ProductFamily = {
  key: string
  brand: string
  model_family: string
  form_factor: string
  image_filename: string
  tiers: { tier: string; products: Product[] }[]
}

// Style picker — each card uses a real product image as background
const STYLES = [
  { key: 'All',      label: 'All Styles',  sublabel: `${products.length} devices`,  image: '/products/signia-pure-cg-ix.jpg' },
  { key: 'RIC',      label: 'RIC',         sublabel: 'Receiver-in-canal',   image: '/products/signia-pure-cg-ax.jpg' },
  { key: 'BTE',      label: 'BTE',         sublabel: 'Behind the ear',      image: '/products/signia-intuis-4.jpg' },
  { key: 'Slim-RIC', label: 'Slim‑RIC',    sublabel: 'Slim receiver',       image: '/products/signia-styletto-ax.jpg' },
  { key: 'ITE',      label: 'ITE',         sublabel: 'In the ear',          image: '/products/widex-allure-ite.jpg' },
  { key: 'ITC',      label: 'ITC',         sublabel: 'In the canal',        image: '/products/signia-insio-cg-ax.jpg' },
  { key: 'CIC',      label: 'CIC',         sublabel: 'Completely in canal', image: '/products/widex-moment-cic.jpg' },
]

// Lowest price in the catalogue for the hero stat
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

// ---------- Family Card ----------
function ProductFamilyCard({ family, compareList, onToggleCompare }: {
  family: ProductFamily
  compareList: string[]
  onToggleCompare: (slug: string) => void
}) {
  const [selectedTierIdx, setSelectedTierIdx] = useState(0)
  const selectedTier = family.tiers[selectedTierIdx]
  // Pick the cheapest product in the selected tier as the "representative"
  const rep = selectedTier.products.reduce((best, p) => {
    const bPrice = best.price_single ?? best.price_kit ?? Infinity
    const pPrice = p.price_single ?? p.price_kit ?? Infinity
    return pPrice < bPrice ? p : best
  }, selectedTier.products[0])
  const variantCount = selectedTier.products.length

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#E8E0D5] hover:border-[#B8892A] hover:shadow-xl transition-all duration-200 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#FAF6F0] to-[#F0EAE0] flex items-center justify-center overflow-hidden">
        <ProductImage
          filename={family.image_filename}
          alt={family.model_family}
          brand={family.brand}
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-[#1B4D3E]/90 text-white shadow-sm">
          {family.form_factor}
        </span>
        {rep.rechargeable && (
          <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200">
            ⚡ Rechargeable
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[11px] text-[#B8892A] font-bold uppercase tracking-widest mb-1">{family.brand}</p>
        <h3 className="font-semibold text-[#1B4D3E] text-sm leading-snug mb-2">
          {family.model_family}
        </h3>

        {/* Tier selector buttons */}
        {family.tiers.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {family.tiers.map((t, i) => (
              <button
                key={t.tier}
                onClick={() => setSelectedTierIdx(i)}
                className={`text-[11px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                  i === selectedTierIdx
                    ? 'bg-[#1B4D3E] text-white shadow-sm'
                    : 'bg-[#FAF6F0] text-gray-500 border border-[#E8E0D5] hover:border-[#1B4D3E] hover:text-[#1B4D3E]'
                }`}
              >
                {t.tier}
              </button>
            ))}
          </div>
        )}

        {/* Single tier badge if only one */}
        {family.tiers.length === 1 && (
          <div className="mb-3">
            <span className="text-[11px] bg-[#1B4D3E]/10 text-[#1B4D3E] px-2.5 py-1 rounded-full font-semibold">
              {selectedTier.tier}
            </span>
          </div>
        )}

        {/* Specs row — plain text labels, not tappable */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 text-[11px] text-gray-400">
          <span>{rep.hearing_loss_label}</span>
          <span className="text-gray-300">·</span>
          <span>{rep.channels}ch</span>
          {rep.bluetooth && (
            <>
              <span className="text-gray-300">·</span>
              <span className="text-blue-400">Bluetooth</span>
            </>
          )}
          {rep.tinnitus_feature && (
            <>
              <span className="text-gray-300">·</span>
              <span className="text-purple-400">Tinnitus</span>
            </>
          )}
          {variantCount > 1 && (
            <>
              <span className="text-gray-300">·</span>
              <span>{variantCount} variants</span>
            </>
          )}
        </div>

        {/* Price */}
        <div className="border-t border-[#E8E0D5] pt-3 mt-auto">
          {rep.price_single ? (
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                  {variantCount > 1 ? 'From (single)' : 'Single unit'}
                </p>
                <p className="text-lg font-bold text-[#1B4D3E] leading-none">{formatPrice(rep.price_single)}</p>
              </div>
              {rep.price_kit && (
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">Kit (pair)</p>
                  <p className="text-sm font-bold text-[#B8892A]">{formatPrice(rep.price_kit)}</p>
                </div>
              )}
            </div>
          ) : rep.price_kit ? (
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                {variantCount > 1 ? 'Kit from' : 'Kit (pair + charger)'}
              </p>
              <p className="text-lg font-bold text-[#B8892A]">{formatPrice(rep.price_kit)}</p>
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic">Price on enquiry</p>
          )}
          <p className="text-[10px] text-gray-400 mt-1">GST-exempt</p>
        </div>

        {/* Compare toggle */}
        <label
          className="flex items-center gap-2 mt-3 pt-2 border-t border-[#E8E0D5] cursor-pointer group/compare"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            checked={compareList.includes(rep.slug)}
            onChange={() => onToggleCompare(rep.slug)}
            disabled={!compareList.includes(rep.slug) && compareList.length >= 3}
            className="accent-[#B8892A] w-3.5 h-3.5 rounded"
          />
          <span className={`text-[11px] font-medium ${
            compareList.includes(rep.slug) ? 'text-[#B8892A]' : 'text-gray-400 group-hover/compare:text-gray-600'
          }`}>
            {compareList.includes(rep.slug) ? 'Comparing' : compareList.length >= 3 ? 'Max 3 selected' : 'Compare'}
          </span>
        </label>
      </div>

      {/* Footer — links to representative product */}
      <Link
        href={`/hearing-aids/${rep.slug}`}
        className="bg-[#1B4D3E] text-white text-center text-xs font-semibold py-2.5 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 block"
      >
        View Details →
      </Link>
    </div>
  )
}

// ---------- Filter button ----------
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

// ---------- Style card (product image background) ----------
function StylePill({ s, active, onClick }: { s: typeof STYLES[0]; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-xl transition-all duration-300 cursor-pointer min-w-[90px] sm:min-w-[110px] h-[60px] sm:h-[72px]
        ${active
          ? 'shadow-xl ring-2 ring-[#B8892A] scale-[1.03]'
          : 'opacity-70 hover:opacity-100 hover:shadow-lg hover:scale-[1.02]'
        }`}
    >
      {/* Product image background */}
      <img
        src={s.image}
        alt={s.label}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay — darker when active for text readability */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        active
          ? 'bg-gradient-to-t from-black/80 via-black/50 to-black/30'
          : 'bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/75 group-hover:via-black/45'
      }`} />

      {/* Text — bottom-left */}
      <div className="relative z-10 text-left px-3 py-2.5">
        <p className="text-white font-bold text-[13px] leading-tight tracking-wide drop-shadow-sm">{s.label}</p>
        <p className="text-white/70 text-[9px] leading-tight mt-0.5 whitespace-nowrap drop-shadow-sm">{s.sublabel}</p>
      </div>

      {/* Gold bar at bottom when active */}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B8892A] z-20" />
      )}
    </button>
  )
}

// ---------- Page ----------
export default function CataloguePage() {
  const [brand,          setBrand]          = useState('All')
  const [formFactor,     setFormFactor]     = useState('All')
  const [hearingLoss,    setHearingLoss]    = useState('All')
  const [tier,           setTier]           = useState('All')
  const [lifestyle,      setLifestyle]      = useState('All')
  const [maxPrice,       setMaxPrice]       = useState(1000000)
  const [search,         setSearch]         = useState('')
  const [showBluetooth,  setShowBluetooth]  = useState(false)
  const [showRechargeable, setShowRechargeable] = useState(false)
  const [heroSearch,     setHeroSearch]     = useState('')
  const [sortBy,         setSortBy]         = useState<'default' | 'price-asc' | 'price-desc'>('default')
  const [compareList,    setCompareList]    = useState<string[]>([])
  const [showCompare,    setShowCompare]    = useState(false)
  const [showFilters,    setShowFilters]    = useState(false)

  const toggleCompare = (slug: string) => {
    setCompareList((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 3 ? [...prev, slug] : prev
    )
  }
  const compareProducts = compareList.map((slug) => products.find((p) => p.slug === slug)!).filter(Boolean)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Sync hero search → sidebar search
  useEffect(() => {
    if (heroSearch) setSearch(heroSearch)
  }, [heroSearch])

  // Filter individual products first
  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand       !== 'All' && p.brand          !== brand)       return false
      if (formFactor  !== 'All' && p.form_factor     !== formFactor)  return false
      if (hearingLoss !== 'All' && p.hearing_loss_label !== hearingLoss) return false
      if (tier        !== 'All' && p.technology_tier !== tier)        return false
      if (lifestyle   !== 'All' && !p.lifestyle_tags.some(
        (t: string) => t === lifestyle || (lifestyle === 'Budget Friendly' && t === 'Budget-Friendly')
      )) return false
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
  }, [brand, formFactor, hearingLoss, tier, lifestyle, maxPrice, search, showBluetooth, showRechargeable])

  // Group filtered products into families
  const families = useMemo(() => {
    const map = new Map<string, ProductFamily>()
    for (const p of filtered) {
      const key = `${p.brand}|${p.model_family}|${p.form_factor}`
      if (!map.has(key)) {
        map.set(key, {
          key,
          brand: p.brand,
          model_family: p.model_family,
          form_factor: p.form_factor,
          image_filename: p.image_filename,
          tiers: [],
        })
      }
      const fam = map.get(key)!
      let tierGroup = fam.tiers.find((t) => t.tier === p.technology_tier)
      if (!tierGroup) {
        tierGroup = { tier: p.technology_tier, products: [] }
        fam.tiers.push(tierGroup)
      }
      tierGroup.products.push(p)
    }
    // Sort tiers by TIER_ORDER
    map.forEach((fam) => {
      fam.tiers.sort((a, b) => (TIER_ORDER[a.tier] ?? 99) - (TIER_ORDER[b.tier] ?? 99))
    })
    const result = Array.from(map.values())

    // Sort families
    if (sortBy === 'price-asc' || sortBy === 'price-desc') {
      result.sort((a, b) => {
        const aPrice = Math.min(...a.tiers.flatMap(t => t.products.map(p => p.price_single ?? p.price_kit ?? Infinity)))
        const bPrice = Math.min(...b.tiers.flatMap(t => t.products.map(p => p.price_single ?? p.price_kit ?? Infinity)))
        return sortBy === 'price-asc' ? aPrice - bPrice : bPrice - aPrice
      })
    }

    return result
  }, [filtered, sortBy])

  const resetAll = () => {
    setBrand('All'); setFormFactor('All'); setHearingLoss('All')
    setTier('All'); setLifestyle('All'); setMaxPrice(1000000); setSearch(''); setHeroSearch('')
    setShowBluetooth(false); setShowRechargeable(false); setSortBy('default')
  }

  const activeFilters = [
    brand !== 'All', formFactor !== 'All', hearingLoss !== 'All',
    tier !== 'All', lifestyle !== 'All', maxPrice < 1000000, showBluetooth, showRechargeable, !!search,
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-[#FAF6F0]">

      {/* ── HERO ── */}
      <div className="bg-[#1B4D3E] text-white pt-16 sm:pt-24 pb-8 sm:pb-10 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-10">

            {/* Left: text + search */}
            <div className="flex-1 min-w-0">
              {/* Breadcrumb */}
              <p className="text-white/50 text-xs mb-6">
                <Link href="/" className="hover:text-white/80 transition">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Hearing Aid Catalogue</span>
              </p>

              {/* Headline */}
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
                Every hearing aid,<br className="hidden md:block" /> with its price.
              </h1>
              <p className="text-white/60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl">
                Signia, Widex and Bernafon — browse all models with transparent pricing. All GST-exempt.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-10 text-sm">
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

              {/* Search bar */}
              <div className="relative max-w-2xl">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search model, brand, style…"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm rounded-2xl pl-11 pr-24 sm:pr-32 py-3.5 sm:py-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B8892A]"
                />
                <button
                  onClick={() => { setSearch(heroSearch); document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B8892A] hover:bg-[#a07824] text-white text-xs sm:text-sm font-bold px-3 sm:px-5 py-2 rounded-xl transition"
                >
                  Search →
                </button>
              </div>
            </div>

            {/* Right: floating brand cards */}
            <div className="hidden md:flex flex-col gap-3 flex-shrink-0 w-56">
              {[
                { brand: 'Signia', count: products.filter(p => p.brand === 'Signia').length, tag: 'AI-powered', color: 'from-purple-900/40 to-purple-800/20' },
                { brand: 'Widex', count: products.filter(p => p.brand === 'Widex').length, tag: 'Natural sound', color: 'from-blue-900/40 to-blue-800/20' },
                { brand: 'Bernafon', count: products.filter(p => p.brand === 'Bernafon').length, tag: 'Swiss made', color: 'from-emerald-900/40 to-emerald-800/20' },
              ].map((b) => (
                <div
                  key={b.brand}
                  className={`bg-gradient-to-br ${b.color} border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-white text-sm">{b.brand}</p>
                    <span className="text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">{b.tag}</span>
                  </div>
                  <p className="text-white/40 text-xs">{b.count} products available</p>
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#B8892A] rounded-full"
                      style={{ width: `${(b.count / products.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-white/30 text-[10px] text-center mt-1">
                All prices GST-exempt · Free trial available
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── STYLE PICKER ── */}
      <div className="bg-white border-b border-[#E8E0D5] px-4 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Filter by wearing style</p>
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
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

      {/* ── MAIN ── */}
      <div className="max-w-5xl mx-auto px-4 py-10" id="results">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="lg:w-60 flex-shrink-0">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between bg-white rounded-2xl border border-[#E8E0D5] p-4 mb-3"
            >
              <span className="font-bold text-[#1B4D3E] text-sm uppercase tracking-wide">
                Filters {activeFilters > 0 && <span className="text-[#B8892A]">({activeFilters})</span>}
              </span>
              <span className={`text-gray-400 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`bg-white rounded-2xl border border-[#E8E0D5] p-5 sticky top-24 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-[#1B4D3E] text-sm uppercase tracking-wide">Filters</h2>
                {activeFilters > 0 && (
                  <button
                    onClick={resetAll}
                    className="text-xs text-[#B8892A] font-semibold hover:underline"
                  >
                    Clear ({activeFilters})
                  </button>
                )}
              </div>

              {/* Search (synced with hero) */}
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

              {/* Brand */}
              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Brand</label>
                <div className="flex flex-wrap gap-1.5">
                  {BRANDS.map((b) => (
                    <FilterBtn key={b} label={b} active={brand === b} onClick={() => setBrand(b)} />
                  ))}
                </div>
              </div>

              {/* Hearing Loss */}
              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Hearing Loss</label>
                <div className="flex flex-wrap gap-1.5">
                  {HEARING_LOSS.map((h) => (
                    <FilterBtn key={h} label={h} active={hearingLoss === h} onClick={() => setHearingLoss(h)} />
                  ))}
                </div>
              </div>

              {/* Technology Tier */}
              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Technology Level</label>
                <div className="flex flex-wrap gap-1.5">
                  {TIERS.map((t) => (
                    <FilterBtn key={t} label={t} active={tier === t} onClick={() => setTier(t)} />
                  ))}
                </div>
              </div>

              {/* Lifestyle */}
              <div className="mb-5">
                <label className="text-xs text-gray-400 font-medium mb-2 block">Lifestyle</label>
                <div className="flex flex-wrap gap-1.5">
                  {LIFESTYLES.map((l) => (
                    <FilterBtn key={l} label={l} active={lifestyle === l} onClick={() => setLifestyle(l)} />
                  ))}
                </div>
              </div>

              {/* Max Price */}
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

              {/* Toggles */}
              <div className="space-y-2.5 mb-5">
                {[
                  { label: '📶 Bluetooth only',      val: showBluetooth,    set: setShowBluetooth },
                  { label: '⚡ Rechargeable only',   val: showRechargeable, set: setShowRechargeable },
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
            {/* Result bar */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-[#1B4D3E] text-base">{families.length}</span>
                <span className="text-gray-400"> model{families.length !== 1 ? 's' : ''}</span>
                <span className="text-gray-300 mx-1">·</span>
                <span className="text-gray-400">{filtered.length} variants</span>
                {activeFilters > 0 && (
                  <span className="ml-2 text-xs text-[#B8892A] font-semibold">
                    · {activeFilters} filter{activeFilters > 1 ? 's' : ''} active
                  </span>
                )}
              </p>
              <div className="flex items-center gap-3">
                <p className="text-xs text-gray-400 hidden sm:block">Sort by</p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-xs border border-[#E8E0D5] rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-[#1B4D3E] cursor-pointer"
                >
                  <option value="default">Relevance</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                </select>
              </div>
            </div>

            {/* Active filter chips */}
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
                {lifestyle !== 'All' && (
                  <span onClick={() => setLifestyle('All')} className="text-xs bg-[#1B4D3E]/10 text-[#1B4D3E] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#1B4D3E]/20 transition">
                    {lifestyle} ✕
                  </span>
                )}
                {search && (
                  <span onClick={() => { setSearch(''); setHeroSearch('') }} className="text-xs bg-[#B8892A]/10 text-[#B8892A] px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-[#B8892A]/20 transition">
                    &ldquo;{search}&rdquo; ✕
                  </span>
                )}
              </div>
            )}

            {/* Channel disclaimer — shown when viewing multiple brands */}
            {brand === 'All' && families.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 flex items-start gap-3">
                <span className="text-amber-500 text-lg mt-0.5 flex-shrink-0">ℹ️</span>
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>About channel counts:</strong> Different brands measure channels differently.
                  For example, Signia&apos;s 48-channel processing is not directly comparable to Widex&apos;s 15-channel system — both can deliver
                  excellent sound quality through different engineering approaches. Dr. Saurabh will help you compare what matters for your hearing profile.
                </p>
              </div>
            )}

            {/* Cards */}
            {families.length === 0 ? (
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
                {families.map((family) => (
                  <ProductFamilyCard key={family.key} family={family} compareList={compareList} onToggleCompare={toggleCompare} />
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 sm:mt-14 bg-[#1B4D3E] rounded-2xl p-5 sm:p-8 text-white text-center">
              <p className="text-[#B8892A] text-xs font-bold uppercase tracking-widest mb-2">Free Consultation</p>
              <h3 className="font-playfair text-2xl font-bold mb-2">Not sure which one is right for you?</h3>
              <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
                Book a free consultation with Dr. Saurabh — he&apos;ll match the right device to your hearing loss, lifestyle and budget.
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

      {/* ── COMPARE BAR (sticky bottom) ── */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1B4D3E] text-white shadow-2xl z-50 border-t border-[#B8892A]/30">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0 pb-1 sm:pb-0">
                <span className="text-[11px] sm:text-xs text-white/60 flex-shrink-0">Compare ({compareList.length}/3):</span>
                {compareProducts.map((p) => (
                  <span key={p.slug} className="flex items-center gap-1 bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium flex-shrink-0 max-w-[140px] sm:max-w-none">
                    <span className="truncate">{p.model_name}</span>
                    <button onClick={() => toggleCompare(p.slug)} className="text-white/50 hover:text-white ml-0.5">✕</button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 flex-shrink-0 justify-end">
                <button
                  onClick={() => setCompareList([])}
                  className="text-xs text-white/60 hover:text-white transition px-3 py-1.5"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowCompare(true)}
                  disabled={compareList.length < 2}
                  className={`text-xs font-bold px-5 py-2 rounded-full transition ${
                    compareList.length >= 2
                      ? 'bg-[#B8892A] hover:bg-[#a07824] text-white'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  Compare {compareList.length >= 2 ? '→' : '(pick 2+)'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── COMPARE MODAL ── */}
      {showCompare && compareProducts.length >= 2 && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" onClick={() => setShowCompare(false)}>
          <div
            className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white border-b border-[#E8E0D5] px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <h2 className="font-playfair text-base sm:text-lg font-bold text-[#1B4D3E]">Side-by-Side Comparison</h2>
              <button onClick={() => setShowCompare(false)} className="text-gray-400 hover:text-gray-600 text-xl font-bold p-1">✕</button>
            </div>

            {/* Comparison table — scrollable wrapper for mobile */}
            <div className="px-4 sm:px-6 py-5 overflow-x-auto">
              <div className="min-w-[480px]">
                {/* Product headers */}
                <div className={`grid gap-3 sm:gap-4 mb-6`} style={{ gridTemplateColumns: `100px repeat(${compareProducts.length}, 1fr)` }}>
                  <div />
                  {compareProducts.map((p) => (
                    <div key={p.slug} className="text-center">
                      <div className="relative w-full h-20 sm:h-28 bg-[#FAF6F0] rounded-xl mb-2 flex items-center justify-center">
                        <ProductImage filename={p.image_filename} alt={p.model_name} brand={p.brand} className="object-contain p-2" sizes="160px" />
                      </div>
                      <p className="text-[10px] text-[#B8892A] font-bold uppercase tracking-widest">{p.brand}</p>
                      <p className="text-xs sm:text-sm font-bold text-[#1B4D3E] leading-tight">{p.model_name}</p>
                    </div>
                  ))}
                </div>

                {/* Spec rows */}
                {[
                  { label: 'Technology', get: (p: Product) => p.technology_tier },
                  { label: 'Form Factor', get: (p: Product) => p.form_factor },
                  { label: 'Channels', get: (p: Product) => String(p.channels) },
                  { label: 'Hearing Loss', get: (p: Product) => p.hearing_loss_label },
                  { label: 'Fitting Range', get: (p: Product) => p.fitting_range_db + ' dB' },
                  { label: 'Battery', get: (p: Product) => p.battery },
                  { label: 'Single Price', get: (p: Product) => formatPrice(p.price_single) ?? '—' },
                  { label: 'Kit Price', get: (p: Product) => formatPrice(p.price_kit) ?? '—' },
                  { label: 'Bluetooth', get: (p: Product) => p.bluetooth ? '✓' : '✗' },
                  { label: 'Rechargeable', get: (p: Product) => p.rechargeable ? '✓' : '✗' },
                  { label: 'Tinnitus', get: (p: Product) => p.tinnitus_feature ? '✓' : '✗' },
                  { label: 'App Control', get: (p: Product) => p.smartphone_app ? '✓' : '✗' },
                  { label: 'Warranty', get: (p: Product) => p.warranty_years + ' years' },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid gap-3 sm:gap-4 py-2 sm:py-2.5 px-2 rounded-lg ${i % 2 === 0 ? 'bg-[#FAF6F0]' : ''}`}
                    style={{ gridTemplateColumns: `100px repeat(${compareProducts.length}, 1fr)` }}
                  >
                    <p className="text-[11px] sm:text-xs text-gray-400 font-medium self-center">{row.label}</p>
                    {compareProducts.map((p) => (
                      <p key={p.slug} className="text-xs sm:text-sm text-[#1B4D3E] font-semibold text-center self-center">
                        {row.get(p)}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Key features row */}
                <div className="grid gap-3 sm:gap-4 py-3 mt-2" style={{ gridTemplateColumns: `100px repeat(${compareProducts.length}, 1fr)` }}>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium">Key Features</p>
                  {compareProducts.map((p) => (
                    <ul key={p.slug} className="space-y-1">
                      {p.key_features.slice(0, 5).map((f) => (
                        <li key={f} className="text-[11px] sm:text-xs text-gray-600 flex items-start gap-1.5">
                          <span className="text-[#B8892A] mt-0.5">✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                {/* Lifestyle row */}
                <div className="grid gap-3 sm:gap-4 py-3 border-t border-[#E8E0D5]" style={{ gridTemplateColumns: `100px repeat(${compareProducts.length}, 1fr)` }}>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium">Ideal For</p>
                  {compareProducts.map((p) => (
                    <div key={p.slug} className="flex flex-wrap gap-1">
                      {p.lifestyle_tags.length > 0
                        ? p.lifestyle_tags.map((t) => (
                            <span key={t} className="text-[9px] sm:text-[10px] bg-[#1B4D3E]/10 text-[#1B4D3E] px-2 py-0.5 rounded-full">{t}</span>
                          ))
                        : <span className="text-xs text-gray-400">—</span>
                      }
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="grid gap-3 sm:gap-4 pt-4 border-t border-[#E8E0D5] mt-3" style={{ gridTemplateColumns: `100px repeat(${compareProducts.length}, 1fr)` }}>
                  <div />
                  {compareProducts.map((p) => (
                    <div key={p.slug} className="flex flex-col gap-2">
                      <Link
                        href={`/hearing-aids/${p.slug}`}
                        className="bg-[#1B4D3E] text-white text-center text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 rounded-full hover:bg-[#163e32] transition"
                      >
                        View Details
                      </Link>
                      <a
                        href={`https://wa.me/918796270575?text=Hi, I'm interested in the ${encodeURIComponent(p.model_name)}.`}
                        target="_blank" rel="noopener noreferrer"
                        className="bg-[#25D366] text-white text-center text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 rounded-full hover:bg-[#1ebe5a] transition"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}