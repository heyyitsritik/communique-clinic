'use client'

import { useState } from 'react'
import Image from 'next/image'

// Shows the product photo from /public/products. Until the manufacturer
// images are added (or if a file is missing), shows a clean branded placeholder.
export default function ProductImage({
  filename,
  alt,
  brand,
  className = '',
  sizes = '(max-width: 768px) 100vw, 33vw',
  priority = false,
}: {
  filename: string
  alt: string
  brand: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-4xl mb-2 opacity-60">👂</span>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B8892A]">{brand}</span>
        <span className="text-[11px] text-gray-400 mt-1">Image coming soon</span>
      </div>
    )
  }

  return (
    <Image
      src={`/products/${filename}`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}