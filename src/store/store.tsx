import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import productsReducer from './products'
import cartReducer from './cart'
import metadataReducer from './metadata'
import uiReducer from './ui'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    metadata: metadataReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
