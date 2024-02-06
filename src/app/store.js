import { configureStore } from '@reduxjs/toolkit';
import covidSlice from '../features/covidSlice';

export const store = configureStore({
  reducer: {
    covid: covidSlice,
  },
});
