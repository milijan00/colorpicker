import { configureStore } from '@reduxjs/toolkit';
import { navigationReducer } from '../features/navigation/navigationSlice';
import { homeReducer } from '../features/home/homeSlice';
import { palettesReducer } from '../features/palettes/palettesSlice';
export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    home : homeReducer,
    palettes : palettesReducer
  },
});
