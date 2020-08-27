export interface Specification {
  name: string
  description: string
}

export interface Product {
  id: number
  name: string
  brand: string
  year: number
  price: number
  slug: Slug
  categories: string[]
  image?: string
  discountedPrice?: number
  specifications?: Specification[]
  description?: string
}

export interface CartItem {
  id: number
  product: Product
  quantity: number
}

export type Slug = string
