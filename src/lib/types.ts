import { type LucideIcon } from 'lucide-react'
import { type User } from 'better-auth'

export interface NavPrimaryProps {
  items: {
    title: string
    to: string
    icon: LucideIcon
    activeOptions: { exact: boolean }
  }[]
}

export interface NavUserProps {
  user: User
}

export type AppleCategory =
  | 'iphone'
  | 'ipad'
  | 'mac'
  | 'watch'
  | 'airpods'
  | 'accessories'

export type AppleBadge = 'New' | 'Best Seller' | 'Limited' | 'Online Exclusive'

export interface AppleProduct {
  id: string
  slug: string
  name: string
  tagline?: string
  description: string
  price: number
  currency: 'USD'
  category: AppleCategory
  badges?: AppleBadge[]
  colors: string[]
  images: {
    thumbnail: string
    gallery: string[]
  }
  specs: {
    chip?: string
    display?: string
    camera?: string
    battery?: string
    storage?: string[]
  }
  isFeatured: boolean
  isAvailable: boolean
  releasedAt: string
}
