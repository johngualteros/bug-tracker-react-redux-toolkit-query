import { createReducer, createAction  } from "@reduxjs/toolkit";

export const getDarkMode = createAction("darkMode/get");

export const localStorageReducer = createReducer({}, (builder) => {
    builder
        .addCase("darkMode/get", (state, action) => {
        // eslint-disable-next-line eqeqeq
        return localStorage.getItem("darkMode") == "true" ? true : false;
        });
});