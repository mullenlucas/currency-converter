import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import currencies from './currencySlice';

const store = configureStore({
  reducer: {
    currencies,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
