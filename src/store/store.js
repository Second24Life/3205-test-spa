import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './slices/currency';
import { langReducer } from './slices/lang';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    lang: langReducer,
  },
});

export default store;
