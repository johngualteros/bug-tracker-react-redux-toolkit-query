import { configureStore } from '@reduxjs/toolkit';
import { darkModeReducer } from './darModeReducer';

export const store = configureStore({
  reducer: {
    // global state for darkmode
    darkMode: darkModeReducer,
  },
});
