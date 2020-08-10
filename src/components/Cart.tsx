import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { closeCart } from '../store/ui'

const Cart = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(({ ui }: RootState) => ui.isCartOpen)
  const cart = useSelector(({ cart }: RootState) => cart)
  const handleClose = () => dispatch(closeCart())

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
        {cart.map(({ product: item }) => (
          <li className='flex items-center mb-4'>
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
                    <div className='mr-2'>${item.discountedPrice}</div>
                    <div className='line-through text-gray-600'>${item.price}</div>
                  </>
                ) : (
                  <div>${item.price}</div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='text-2xl flex justify-between border-black border-t border-b mb-4 mt-auto'>
        <span>Total:</span> <span>$2800</span>
      </div>
      <button className='border w-full block border-black px-2 py-3 text-lg text-white bg-black'>checkout</button>
    </div>
  )
}

export default Cart
