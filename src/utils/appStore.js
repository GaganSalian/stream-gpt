import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the user slice's reducer
import moviesReducer from "./moviesSlice"; // Import the movies slice's reducer

const appStore = configureStore({
    reducer: {
        user: userReducer, // User state slice
        movies: moviesReducer, // Movies state slice
    },
});

export default appStore;
