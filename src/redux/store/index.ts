import { configureStore } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import cartReducer from '../slices/cart';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
