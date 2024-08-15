//redux used so we have access to user data in different components
import { combineReducers,configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //we combine the reducer first then we gona persist reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //this makes sure we not get err when we not serialize vars
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);