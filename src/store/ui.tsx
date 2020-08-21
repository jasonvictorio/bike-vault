import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'products',
  initialState: {
    isCartOpen: false,
    isMenuOpen: false,
  },
  reducers: {
    openCart: state => ({ ...state, isCartOpen: true, isMenuOpen: false }),
    closeCart: state => ({ ...state, isCartOpen: false }),
    toggleCart: state => ({ ...state, isCartOpen: !state.isCartOpen, isMenuOpen: false }),

    openMenu: state => ({ ...state, isMenuOpen: true, isCartOpen: false }),
    closeMenu: state => ({ ...state, isMenuOpen: false }),
    toggleMenu: state => ({ ...state, isMenuOpen: !state.isMenuOpen, isCartOpen: false }),
  },
})

export const { closeCart, openCart, toggleCart, openMenu, closeMenu, toggleMenu } = uiSlice.actions
export default uiSlice.reducer
