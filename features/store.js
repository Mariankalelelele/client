import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
const store = configureStore({
  reducer: {
    form: formReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;