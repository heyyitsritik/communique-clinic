import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import products from '@/data/products.json'
import ProductPageClient from './ProductPageClient'

type PageProps = { params: Promise<{ slug: string }> }

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

  const familyProducts = products
    .filter((p) => p.brand === product.brand && p.model_family === product.model_family && p.form_factor === product.form_factor)
    .sort((a, b) => (TIER_ORDER[a.technology_tier] ?? 99) - (TIER_ORDER[b.technology_tier] ?? 99))

  const sharedTraits = [
    familyProducts.every((p) => p.form_factor === familyProducts[0].form_factor) ? familyProducts[0].form_factor : null,
    familyProducts.every((p) => p.hearing_loss_label === familyProducts[0].hearing_loss_label)
      ? `${familyProducts[0].hearing_loss_label} hearing loss`
      : `${familyProducts[0].hearing_loss_label} to ${familyProducts[familyProducts.length - 1].hearing_loss_label}`,
    familyProducts.every((p) => p.rechargeable) ? 'Rechargeable' : null,
    familyProducts.every((p) => p.bluetooth) ? 'Bluetooth' : null,
    familyProducts.every((p) => p.smartphone_app) ? 'Smartphone App' : null,
  ].filter(Boolean) as string[]

  // ── Recommendation carousels ──
  // "More from [Brand]" — other families from the same brand, pick one product per family
  // prioritise: same form factor > same tier > highest tier
  const sameBrandFamilies = new Map<string, typeof product>()
  products
    .filter((p) => p.brand === product.brand && p.model_family !== product.model_family)
    .sort((a, b) => {
      // Prefer same form factor
      const aFF = a.form_factor === product.form_factor ? 0 : 1
      const bFF = b.form_factor === product.form_factor ? 0 : 1
      if (aFF !== bFF) return aFF - bFF
      // Then prefer same tier
      const aTier = a.technology_tier === product.technology_tier ? 0 : 1
      const bTier = b.technology_tier === product.technology_tier ? 0 : 1
      if (aTier !== bTier) return aTier - bTier
      // Then highest tier first
      return (TIER_ORDER[a.technology_tier] ?? 99) - (TIER_ORDER[b.technology_tier] ?? 99)
    })
    .forEach((p) => {
      const key = `${p.model_family}|${p.form_factor}`
      if (!sameBrandFamilies.has(key)) sameBrandFamilies.set(key, p)
    })
  const moreBrand = Array.from(sameBrandFamilies.values()).slice(0, 10)

  // "Similar options from other brands" — different brands, match form factor + similar tier/price
  const otherBrandFamilies = new Map<string, typeof product>()
  const productPrice = product.price_single ?? product.price_kit ?? 0
  products
    .filter((p) => p.brand !== product.brand)
    .sort((a, b) => {
      // Prefer same form factor
      const aFF = a.form_factor === product.form_factor ? 0 : 1
      const bFF = b.form_factor === product.form_factor ? 0 : 1
      if (aFF !== bFF) return aFF - bFF
      // Then prefer same tier
      const aTier = a.technology_tier === product.technology_tier ? 0 : 1
      const bTier = b.technology_tier === product.technology_tier ? 0 : 1
      if (aTier !== bTier) return aTier - bTier
      // Then closest price
      const aPrice = a.price_single ?? a.price_kit ?? 0
      const bPrice = b.price_single ?? b.price_kit ?? 0
      return Math.abs(aPrice - productPrice) - Math.abs(bPrice - productPrice)
    })
    .forEach((p) => {
      const key = `${p.brand}|${p.model_family}|${p.form_factor}`
      if (!otherBrandFamilies.has(key)) otherBrandFamilies.set(key, p)
    })
  const similarOther = Array.from(otherBrandFamilies.values()).slice(0, 10)

  return (
    <ProductPageClient
      {...({
        product,
        familyProducts,
        sharedTraits,
        moreBrand,
        similarOther,
      } as any)}
    />
  )
}