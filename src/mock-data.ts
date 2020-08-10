import { Product } from './types'

export const products: Product[] = [
  {
    id: 1,
    image: 'marlin-5.jpg',
    name: 'Marlin 7',
    brand: 'Trek',
    year: 2020,
    price: 2200,
    discountedPrice: 1800,
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
    id: 2,
    image: 'marlin-6.jpg',
    name: 'Marlin 6',
    brand: 'Trek',
    year: 2020,
    discountedPrice: 1000,
    price: 1200,
  },
  {
    id: 3,
    image: 'marlin-7.jpg',
    name: 'Marlin 7',
    brand: 'Trek',
    year: 2020,
    price: 2200,
  },
  {
    id: 4,
    image: 'marlin-6.jpg',
    name: 'Marlin 6',
    brand: 'Trek',
    year: 2020,
    discountedPrice: 1000,
    price: 1200,
  },
  {
    id: 5,
    image: 'marlin-7.jpg',
    name: 'Marlin 7',
    brand: 'Trek',
    year: 2020,
    price: 2200,
  },
  {
    id: 6,
    image: 'marlin-6.jpg',
    name: 'Marlin 6',
    brand: 'Trek',
    year: 2020,
    discountedPrice: 1000,
    price: 1200,
  },
  {
    id: 7,
    image: 'marlin-5.jpg',
    name: 'Marlin 5',
    brand: 'Trek',
    year: 2020,
    price: 700,
  },
  {
    id: 8,
    image: 'marlin-4.jpg',
    name: 'Marlin 4',
    brand: 'Trek',
    year: 2020,
    price: 500,
  },
]
