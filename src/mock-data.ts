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
  {
    image: 'emonda-slr-7.jpg',
    name: 'Emonda SLR 7',
    brand: 'Trek',
    year: 2021,
    price: 10999,
    categories: ['Road', 'Race'],
  },
  {
    image: 'emonda-sl-7.jpg',
    name: 'Emonda SL 7',
    brand: 'Trek',
    year: 2021,
    price: 7999,
    categories: ['Road', 'Race'],
  },
  {
    image: 'checkpoint-alr-5.jpg',
    name: 'Checkpoint ALR 5',
    brand: 'Trek',
    year: 2021,
    price: 3299,
    categories: ['Road', 'Race', 'Gravel'],
  },
  {
    image: '520-disc.jpg',
    name: '520 Disc',
    brand: 'Trek',
    year: 2021,
    price: 1679,
    categories: ['Road', 'Touring'],
  },
]

export const products: Product[] = rawProducts.map((product, index) => {
  return {
    ...product,
    id: index,
    slug: stringToSlug(`${product.brand} ${product.name} ${product.year}`),
  }
})
