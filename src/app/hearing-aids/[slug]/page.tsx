
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import products from '@/data/products.json'
import ProductPageClient from './ProductPageClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return { title: 'Product Not Found' }
  }

  return {
    title: `${product.model_name} | Communiqué Clinic Gurugram`,
    description: product.short_desc,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const related = products
    .filter(
      (p) =>
        p.brand === product.brand &&
        p.slug !== product.slug &&
        p.model_family === product.model_family
    )
    .slice(0, 3)

  return (
    <ProductPageClient
      product={product}
      related={related}
    />
  )
}
