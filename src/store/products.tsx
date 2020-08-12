import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product, Slug } from '../types'
import { RootState } from './index'
import { stringToSlug } from '../utils'
import { intersection } from 'lodash'

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

export const selectByCategories = (categories: Slug[]) => ({ products }: RootState) => {
  if (categories.length === 0) return products

  return products.filter(product => {
    const normalizedProductCategories = product.categories.map(stringToSlug)
    const matchedCategories = intersection(categories, normalizedProductCategories)
    return matchedCategories.length === categories.length
  })
}

export default productsSlice.reducer
