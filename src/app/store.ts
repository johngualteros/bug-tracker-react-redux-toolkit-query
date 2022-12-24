import { configureStore } from '@reduxjs/toolkit';
import { darkModeReducer } from './darModeReducer';
import { localStorageReducer } from './localStorageReducer';

export const store = configureStore({
  reducer: {
    // global state for darkmode
    darkMode: darkModeReducer,

    localStorage: localStorageReducer,
  },
});
