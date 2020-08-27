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
    categories: ['Mountain', 'Hardtail'],
    description:
      's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
      { name: 'Front hub', description: 'Formula DC-20, alloy, 6-bolt, 5x100mm QR' },
      { name: 'Rear hub', description: 'Formula DC-22, alloy, 6-bolt, Shimano 8/9/10 freehub, 135x5mm QR' },
      { name: 'Rims', description: 'Bontrager Connection, double-wall, 32-hole, 20mm width, presta valve' },
      { name: 'Shifters', description: 'Shimano Altus M2010, 9 speed' },
      { name: 'Front hub', description: 'Formula DC-20, alloy, 6-bolt, 5x100mm QR' },
      { name: 'Rear hub', description: 'Formula DC-22, alloy, 6-bolt, Shimano 8/9/10 freehub, 135x5mm QR' },
      { name: 'Rims', description: 'Bontrager Connection, double-wall, 32-hole, 20mm width, presta valve' },
      { name: 'Shifters', description: 'Shimano Altus M2010, 9 speed' },
      { name: 'Front hub', description: 'Formula DC-20, alloy, 6-bolt, 5x100mm QR' },
      { name: 'Rear hub', description: 'Formula DC-22, alloy, 6-bolt, Shimano 8/9/10 freehub, 135x5mm QR' },
      { name: 'Rims', description: 'Bontrager Connection, double-wall, 32-hole, 20mm width, presta valve' },
    ],
  },
  {
    image: 'marlin-6.jpg',
    name: 'Marlin 6',
    brand: 'Trek',
    year: 2020,
    discountedPrice: 1000,
    categories: ['Mountain', 'Hardtail'],
    price: 1200,
  },
  {
    image: 'marlin-5.jpg',
    name: 'Marlin 5',
    brand: 'Trek',
    year: 2020,
    price: 700,
    categories: ['Mountain', 'Hardtail'],
  },
  {
    image: 'marlin-4.jpg',
    name: 'Marlin 4',
    brand: 'Trek',
    year: 2020,
    price: 500,
    categories: ['Mountain', 'Hardtail'],
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
