import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import navItemReducer from '../features/navItem/navItemSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    navItem: navItemReducer,
  },
});
