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
  image?: string
  discountedPrice?: number
  specifications?: Specification[]
}

export interface CartItem {
  id: number
  product: Product
  quantity: number
}
