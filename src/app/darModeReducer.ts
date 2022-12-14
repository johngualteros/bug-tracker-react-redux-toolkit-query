import { createAction, createReducer } from "@reduxjs/toolkit";

interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: false,
};

export const toggleDarkMode = createAction("darkMode/toggle");

export const darkModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleDarkMode, (state) => {
    state.darkMode = !state.darkMode;
    localStorage.setItem("darkMode", state.darkMode.toString());
  });
});