'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProductImage from '@/components/ProductImage'
import FitCheckModal from '@/components/FitCheckModal'
import products from '@/data/products.json'

type Product = typeof products[0]

function formatPrice(p: number | null) {
  if (!p) return null
  return '₹' + p.toLocaleString('en-IN')
}

export default function ProductPageClient({
  product,
  related,
}: {
  product: Product
  related: Product[]
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
            <div className="flex items-center gap-3 mb-4 flex-wrap">
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
                { label: 'Battery',          value: product.battery },
                { label: 'Fitting Range',    value: product.fitting_range_db + ' dB' },
                { label: 'Warranty',         value: product.warranty_years + ' years' },
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

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-6">
              More from {product.model_family}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/hearing-aids/${r.slug}`}
                  className="bg-white rounded-xl border border-[#E8E0D5] hover:border-[#B8892A] p-4 transition group"
                >
                  <p className="text-xs text-[#B8892A] font-semibold mb-1">{r.technology_tier}</p>
                  <p className="font-semibold text-[#1B4D3E] text-sm group-hover:text-[#B8892A] transition">{r.model_name}</p>
                  <p className="text-xs text-gray-500 mt-1">{r.form_factor} · {r.channels} ch</p>
                  {(r.price_single || r.price_kit) && (
                    <p className="text-sm font-bold text-[#1B4D3E] mt-2">
                      from {formatPrice(r.price_single ?? r.price_kit)}
                    </p>
                  )}
                </Link>
              ))}
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