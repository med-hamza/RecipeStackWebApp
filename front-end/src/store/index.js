import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'
import { myCustomApiService } from '../services/apiService'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myCustomApiService,
      },
      serializableCheck: false,
    }),
  devTools: true
})


export default store