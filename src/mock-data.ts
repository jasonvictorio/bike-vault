import { Product } from './types'
import { stringToSlug } from './utils'

const rawProducts = [
  {
    image: 'marlin-7.jpg',
    name: 'Marlin 7',
    brand: 'Trek',
    year: 2020,
    price: 2200,
    discountedPrice: 1800,
    categories: ['Mountain Bike', 'Hardtail'],
    specifications: [
      {
        name: 'Frame',
        description:
          'Alpha Silver Aluminum, internal routing, chainstay disc brake mount, rack and kickstand mount, 135x5mm QR ',
      },
      {
        name: 'Fork',
        description:
          'RockShox XC 30, coil spring, preload, TurnKey lockout, 46mm offset for 29" wheel, 100mm QR, 100mm travel ',
      },
      { name: 'Shifters', description: 'Shimano Altus M2010, 9 speed' },
    ],
  },
  {
    image: 'marlin-6.jpg',
    name: 'Marlin 6',
    brand: 'Trek',
    year: 2020,
    discountedPrice: 1000,
    categories: ['Mountain Bike', 'Hardtail'],
    price: 1200,
  },
  {
    image: 'marlin-5.jpg',
    name: 'Marlin 5',
    brand: 'Trek',
    year: 2020,
    price: 700,
    categories: ['Mountain Bike', 'Hardtail'],
  },
  {
    image: 'marlin-4.jpg',
    name: 'Marlin 4',
    brand: 'Trek',
    year: 2020,
    price: 500,
    categories: ['Mountain Bike', 'Hardtail'],
  },
]

export const products: Product[] = rawProducts.map((product, index) => {
  return {
    ...product,
    id: index,
    slug: stringToSlug(`${product.brand} ${product.name} ${product.year}`),
  }
})
