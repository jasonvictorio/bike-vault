import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItem, Product } from '../types'
import { findIndex } from 'lodash'
import { RootState } from '.'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    clear: () => {
      return []
    },
    add: (state, { payload: product }: PayloadAction<Product>) => {
      // todo: find a way to use 'increment' action instead
      const cartIndex = findIndex(state, ['id', product.id])
      if (cartIndex === -1) {
        const newCartItem: CartItem = { id: product.id, quantity: 1, product }
        return [...state, newCartItem]
      } else {
        const existingCartItem = state[cartIndex]
        existingCartItem.quantity += 1
      }
    },
    delete: (state, { payload: cartItemId }: PayloadAction<number>) => {
      return state.filter(cartItem => cartItem.id !== cartItemId)
    },
    increment: (state, { payload: cartItemId }: PayloadAction<number>) => {
      return state.map(cartItem =>
        cartItem.id === cartItemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    },
    decrement: (state, { payload: cartItemId }: PayloadAction<number>) => {
      return state.map(cartItem =>
        cartItem.id === cartItemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    },
  },
})

export const selectTotal = ({ cart }: RootState): number => {
  return cart.reduce((total, { quantity, product }) => {
    return total + quantity * (product.discountedPrice ?? product.price)
  }, 0)
}

export const {
  add: addToCart,
  clear: clearCart,
  delete: deleteFromCart,
  decrement: decrementCart,
  increment: incrementCart,
} = cartSlice.actions

export default cartSlice.reducer
