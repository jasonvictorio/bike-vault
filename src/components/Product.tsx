import React from 'react'
import { Link } from '@reach/router'

import { Product as ProductType } from '../types'
import { numberToCurrency } from '../utils'

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link to={`/bike/${product.slug}`} className='leading-snug'>
      <div className='relative h-0' style={{ paddingBottom: '100%' }}>
        <img
          className='absolute h-full object-contain top-0 w-full'
          src={`/assets/images/${product.image}`}
          alt={`${product.brand} ${product.name} ${product.year}`}
        ></img>
      </div>
      <h1>{product.name}</h1>
      <div className='text-gray-600'>
        {product.brand} {product.year}
      </div>
      <div className='mt-2'>
        {product.discountedPrice ? (
          <>
            <div>{numberToCurrency(product.discountedPrice)}</div>
            <div className='line-through text-gray-600'>{numberToCurrency(product.price)}</div>
          </>
        ) : (
          <div>{numberToCurrency(product.price)}</div>
        )}
      </div>
    </Link>
  )
}

export default Product
