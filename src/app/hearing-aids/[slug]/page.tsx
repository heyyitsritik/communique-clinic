import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ProductImage from '@/components/ProductImage'
import products from '@/data/products.json'

type PageProps = { params: Promise<{ slug: string }> }

function formatPrice(p: number | null) {
  if (!p) return null
  return '₹' + p.toLocaleString('en-IN')
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.model_name} | Communiqué Clinic Gurugram`,
    description: product.short_desc,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const TIER_ORDER: Record<string, number> = { Premium: 0, Advanced: 1, Standard: 2, Essential: 3, Basic: 4, Economy: 5 }

  // All products in the same family + form factor (for tier comparison)
  const familyProducts = products
    .filter((p) => p.brand === product.brand && p.model_family === product.model_family && p.form_factor === product.form_factor)
    .sort((a, b) => (TIER_ORDER[a.technology_tier] ?? 99) - (TIER_ORDER[b.technology_tier] ?? 99))

  // Shared traits across all tiers
  const sharedTraits = [
    familyProducts.every((p) => p.form_factor === familyProducts[0].form_factor) ? familyProducts[0].form_factor : null,
    familyProducts.every((p) => p.hearing_loss_label === familyProducts[0].hearing_loss_label)
      ? `${familyProducts[0].hearing_loss_label} hearing loss`
      : `${familyProducts[0].hearing_loss_label} to ${familyProducts[familyProducts.length - 1].hearing_loss_label}`,
    familyProducts.every((p) => p.rechargeable) ? 'Rechargeable' : null,
    familyProducts.every((p) => p.bluetooth) ? 'Bluetooth' : null,
    familyProducts.every((p) => p.smartphone_app) ? 'Smartphone App' : null,
  ].filter(Boolean)

  const related = products
    .filter((p) => p.brand === product.brand && p.slug !== product.slug && p.model_family === product.model_family)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* Breadcrumb */}
      <div className="bg-[#1B4D3E] text-white/70 text-sm py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/hearing-aids/catalogue" className="hover:text-white transition">Hearing Aids</Link>
          <span>/</span>
          <span className="text-white">{product.model_name}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image Panel */}
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

          {/* Details Panel */}
          <div>
            <p className="text-[#B8892A] text-sm font-semibold uppercase tracking-wide mb-1">{product.brand}</p>
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-2">{product.model_name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1B4D3E] text-white">
                {product.technology_tier}
              </span>
              <span className="text-xs text-gray-500">{product.form_factor}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{product.hearing_loss_label} hearing loss</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.short_desc}</p>

            {/* Pricing */}
            <div className="bg-[#FAF6F0] rounded-xl border border-[#E8E0D5] p-5 mb-6">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Pricing (GST-exempt)</p>
              <div className="grid grid-cols-2 gap-4">
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

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Channels / Bands', value: product.channels },
                { label: 'Battery', value: product.battery },
                { label: 'Fitting Range', value: product.fitting_range_db + ' dB' },
                { label: 'Warranty', value: product.warranty_years + ' years' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-[#E8E0D5] p-3">
                  <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                  <p className="text-sm font-semibold text-[#1B4D3E]">{s.value}</p>
                </div>
              ))}
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

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#contact"
                className="flex-1 bg-[#1B4D3E] text-white text-center font-semibold px-5 py-3 rounded-full hover:bg-[#163e32] transition text-sm"
              >
                📅 Book a Trial
              </a>
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
                {/* Header: product names */}
                <thead>
                  <tr>
                    <th className="text-left text-xs text-gray-400 font-medium p-3 w-32 align-bottom">
                      {product.model_family}
                    </th>
                    {familyProducts.map((p) => (
                      <th
                        key={p.slug}
                        className={`p-3 text-center align-bottom ${
                          p.slug === product.slug
                            ? 'bg-[#B8892A]/10 rounded-t-xl'
                            : ''
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
                  {/* Price row */}
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">₹ Price (single)</td>
                    {familyProducts.map((p) => (
                      <td
                        key={p.slug}
                        className={`p-3 text-center text-sm font-bold ${
                          p.slug === product.slug
                            ? 'bg-[#B8892A]/10 text-[#B8892A]'
                            : 'text-[#1B4D3E]'
                        }`}
                      >
                        {formatPrice(p.price_single) ?? formatPrice(p.price_kit) ?? '—'}
                      </td>
                    ))}
                  </tr>

                  {/* Channels row */}
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">Channels</td>
                    {familyProducts.map((p) => (
                      <td
                        key={p.slug}
                        className={`p-3 text-center text-sm font-semibold ${
                          p.slug === product.slug ? 'bg-[#B8892A]/10 text-[#1B4D3E]' : 'text-[#1B4D3E]'
                        }`}
                      >
                        {p.channels}
                      </td>
                    ))}
                  </tr>

                  {/* Battery row */}
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">Battery</td>
                    {familyProducts.map((p) => (
                      <td
                        key={p.slug}
                        className={`p-3 text-center text-xs ${
                          p.slug === product.slug ? 'bg-[#B8892A]/10 text-gray-700' : 'text-gray-600'
                        }`}
                      >
                        {p.battery}
                      </td>
                    ))}
                  </tr>

                  {/* Warranty row */}
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium">Warranty</td>
                    {familyProducts.map((p) => (
                      <td
                        key={p.slug}
                        className={`p-3 text-center text-xs ${
                          p.slug === product.slug ? 'bg-[#B8892A]/10 text-gray-700' : 'text-gray-600'
                        }`}
                      >
                        {p.warranty_years} yr
                      </td>
                    ))}
                  </tr>

                  {/* Features row */}
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3 text-xs text-gray-400 font-medium align-top">Key Features</td>
                    {familyProducts.map((p) => (
                      <td
                        key={p.slug}
                        className={`p-3 align-top ${
                          p.slug === product.slug ? 'bg-[#B8892A]/10' : ''
                        }`}
                      >
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

                  {/* CTA row */}
                  <tr className="border-t border-[#E8E0D5]">
                    <td className="p-3" />
                    {familyProducts.map((p) => (
                      <td
                        key={p.slug}
                        className={`p-3 text-center ${
                          p.slug === product.slug ? 'bg-[#B8892A]/10 rounded-b-xl' : ''
                        }`}
                      >
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