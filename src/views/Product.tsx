import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { find, isNil } from 'lodash'

import { RootState } from '../store'
import { addToCart } from '../store/cart'

const Product = ({ slug }: RouteComponentProps<{ slug: string }>) => {
  const dispatch = useDispatch()
  const product = useSelector(({ products }: RootState) => find(products, ['slug', slug]))

  const handleAddToCart = () => {
    if (isNil(product)) return
    dispatch(addToCart(product))
  }

  return (
    <div>
      <button className='border px-3 py-2' onClick={handleAddToCart}>
        Add to Cart
      </button>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  )
}

export default Product
