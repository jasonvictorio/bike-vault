import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@reach/router'

import { RootState, closeCart, incrementCart, decrementCart, deleteFromCart, selectTotal } from '../store'
import { numberToCurrency } from '../utils'

const Cart = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(({ ui }: RootState) => ui.isCartOpen)
  const cart = useSelector(({ cart }: RootState) => cart)
  const cartTotal = useSelector(selectTotal)
  const handleClose = () => dispatch(closeCart())
  const handleIncremenCart = (cartId: number) => dispatch(incrementCart(cartId))
  const handleDecrementCart = (cartId: number) => dispatch(decrementCart(cartId))
  const handleRemoveCart = (cartId: number) => dispatch(deleteFromCart(cartId))

  return (
    <div
      className={
        'w-screen h-screen container fixed bg-white top-0 pt-16 flex flex-col pb-4 z-10' + (isCartOpen ? '' : ' hidden')
      }
    >
      <div className='flex justify-between mb-3'>
        <h1 className='text-3xl leading-snug font-black'>Cart</h1>
        <button onClick={handleClose}>close</button>
      </div>
      <ul className='overflow-auto'>
        {cart.map(({ id, quantity, product: item }) => (
          <li className='flex items-center mb-4' key={item.id}>
            <div style={{ width: '100px' }} className='bg-garay-600 mr-3'>
              <div className='relative h-0 w-full' style={{ paddingBottom: '100%' }}>
                <img
                  alt={`${item.brand} ${item.name} ${item.year}`}
                  className='absolute top-0 left-0 object-contain w-full h-full'
                  src={`/assets/images/${item.image}`}
                />
              </div>
            </div>
            <div className='leading-snug'>
              <h1 className='text-lg'>{item.name}</h1>
              <div className='text-gray-600 mb-2'>
                {item.brand} {item.year}
              </div>
              <div className='flex'>
                {item.discountedPrice ? (
                  <>
                    <div className='mr-2'>{numberToCurrency(item.discountedPrice)}</div>
                    <div className='line-through text-gray-600'>{numberToCurrency(item.price)}</div>
                  </>
                ) : (
                  <div>{numberToCurrency(item.price)}</div>
                )}
              </div>
            </div>
            <div className='ml-auto'>
              <div>
                <span className='text-gray-600'>qty:</span> {quantity}
              </div>
              <button onClick={() => handleIncremenCart(id)} className='border px-2'>
                +
              </button>
              <button onClick={() => handleDecrementCart(id)} className='border px-2'>
                -
              </button>
              <div>
                <button onClick={() => handleRemoveCart(id)} className='mt-3 text-red-600 underline'>
                  delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='text-2xl flex justify-between border-black border-t border-b mb-4 mt-auto'>
        <span>Total:</span> <span>{numberToCurrency(cartTotal)}</span>
      </div>
      <Link to='/checkout' className='border w-full block border-black px-2 py-3 text-lg text-white bg-black'>
        checkout
      </Link>
    </div>
  )
}

export default Cart
