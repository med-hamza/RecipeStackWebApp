import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'
import { apiSlice } from '../reducers/slices/apiSlice'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})


export default store