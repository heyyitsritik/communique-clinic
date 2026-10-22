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

  return (
    <ProductPageClient
      product={product}
      familyProducts={familyProducts}
      sharedTraits={sharedTraits}
    />
  )
}