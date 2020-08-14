import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'
import { find, isNil } from 'lodash'

import { RootState } from '../store'
import { addToCart } from '../store/cart'
import { numberToCurrency } from '../utils'

const Product = ({ slug }: RouteComponentProps<{ slug: string }>) => {
  const dispatch = useDispatch()
  const product = useSelector(({ products }: RootState) => find(products, ['slug', slug]))

  const handleAddToCart = () => {
    if (isNil(product)) return
    dispatch(addToCart(product))
  }

  return (
    <div>
      {product && (
        <div className='container'>
          <h1 className='text-3xl font-black leading-snug'>{product.name}</h1>
          <div className='text-gray-600'>
            {product.brand} {product.year}
          </div>
          <div>
            <img src={`/assets/images/${product.image}`} alt={`${product.brand} ${product.name} ${product.year}`} />
          </div>
          <div className='text-4xl leading-snug flex items-center py-5'>
            {product.discountedPrice ? (
              <>
                <div className='mr-2'>{numberToCurrency(product.discountedPrice)}</div>{' '}
                <div className='text-2xl line-through text-gray-600'>{numberToCurrency(product.price)}</div>
              </>
            ) : (
              <div>{numberToCurrency(product.price)}</div>
            )}
          </div>
          <button className='border border-black block w-full px-2 py-3 text-lg' onClick={handleAddToCart}>
            Add to cart
          </button>
          <h1 className='text-2xl font-black mt-10 mb-6'>Specifications</h1>
          <dl className='leading-normal'>
            {product.specifications?.map(specification => (
              <Fragment key={specification.name}>
                <dt className='text-gray-600 mb-2'>{specification.name}</dt>
                <dd className='mb-6'>{specification.description}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
      )}
    </div>
  )
}

export default Product
