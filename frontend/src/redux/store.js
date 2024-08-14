//redux used so we have access to user data in different components
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //this makes sure we not get err when we not serialize vars
      serializableCheck: false,
    }),
});