import { createAction, createReducer } from "@reduxjs/toolkit";

interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: localStorage.getItem("darkMode") === "true" ? true : false,
};

export const toggleDarkMode = createAction("darkMode/toggle");

export const darkModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleDarkMode, (state) => {
    state.darkMode = localStorage.getItem("darkMode") === "true" ? false : true;
    localStorage.setItem("darkMode", state.darkMode.toString());
  });
});