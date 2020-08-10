import React from 'react'
import { Link } from '@reach/router'

import { Product as ProductType } from '../types'

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link to={`/product/${product.slug}`} className='leading-snug'>
      <div className='relative h-0' style={{ paddingBottom: '100%' }}>
        <img className='absolute h-full object-contain top-0 w-full' src={`/assets/images/${product.image}`}></img>
      </div>
      <h1>{product.name}</h1>
      <div className='text-gray-600'>
        {product.brand} {product.year}
      </div>
      <div className='mt-2'>
        {product.discountedPrice ? (
          <>
            <div>${product.discountedPrice}</div>
            <div className='line-through text-gray-600'>${product.price}</div>
          </>
        ) : (
          <div>${product.price}</div>
        )}
      </div>
    </Link>
  )
}

export default Product
