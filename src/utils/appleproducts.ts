import { appleProducts } from '@/data/apple-products'
import { AppleCategory } from '@/lib/types'

export const getFeaturedProducts = () =>
  appleProducts.filter((p) => p.isFeatured)

export const getProductsByCategory = (category: AppleCategory) =>
  appleProducts.filter((p) => p.category === category)

export const getProductBySlug = (slug: string) =>
  appleProducts.find((p) => p.slug === slug)
