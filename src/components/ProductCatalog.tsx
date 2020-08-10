import React from 'react'

import Product from './Product'

export default () => {
  const products: Array<any> = []

  return (
    <div className='container'>
      <div className='grid grid-cols-2 gap-2'>
        {products.map(product => (
          <Product product={product} />
        ))}
      </div>
    </div>
  )
}
