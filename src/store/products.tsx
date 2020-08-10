import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '../types'
import { RootState } from './index'

export const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {
    set: (state, { payload: products }: PayloadAction<Product[]>) => {
      return products
    },
  },
})

export const setProducts = productsSlice.actions.set

export const selectDiscounted = ({ products }: RootState) => {
  return products.filter(product => product.discountedPrice ?? false)
}

export default productsSlice.reducer
