import React from 'react'

import ProductComponent from './Product'
import { Product } from '../types'

interface props {
  products: Product[]
}

const ProductCatalog = ({ products }: props) => {
  return (
    <div className='container'>
      <div className='grid grid-cols-2 gap-2'>
        {products.map(product => (
          <ProductComponent product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductCatalog
