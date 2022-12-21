import { createAction, createReducer } from "@reduxjs/toolkit";

interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  // eslint-disable-next-line eqeqeq
  darkMode: !!JSON.parse(localStorage.getItem("darkMode") ?? "false"),
};

export const toggleDarkMode = createAction("darkMode/toggle");

export const darkModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleDarkMode, (state, action) => {
    if (action.payload !== undefined) {
      state.darkMode = action.payload;
    }
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  });
});