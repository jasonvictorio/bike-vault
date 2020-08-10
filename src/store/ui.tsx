import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'products',
  initialState: {
    isCartOpen: false,
  },
  reducers: {
    openCart: state => {
      state.isCartOpen = true
    },
    closeCart: state => {
      state.isCartOpen = false
    },
    toggleCart: state => {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const { closeCart, openCart, toggleCart } = uiSlice.actions
export default uiSlice.reducer
