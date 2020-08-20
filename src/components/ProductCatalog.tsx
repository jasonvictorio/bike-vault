import React from 'react'

import ProductComponent from './Product'
import { useSelector } from 'react-redux'

import { Product } from '../types'
import { RootState } from '../store'
import Links from './Links'

interface props {
  products: Product[]
}

const ProductCatalog = ({ products }: props) => {
  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4'>
        {products.map(product => (
          <ProductComponent product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductCatalog
