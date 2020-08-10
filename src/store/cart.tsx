import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItem, Product } from '../types'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    clear: () => {
      return []
    },
    add: (state, { payload: product }: PayloadAction<Product>) => {
      const newCartItem: CartItem = { id: product.id, quantity: 1, product }
      return [...state, newCartItem]
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
        cartItem.id === cartItemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    },
  },
})

export const {
  add: addToCart,
  clear: clearCart,
  delete: deleteFromCart,
  decrement: decrementCart,
  increment: incrementCart,
} = cartSlice.actions

export default cartSlice.reducer
