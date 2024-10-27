import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the user slice's reducer
import moviesReducer from "./moviesSlice"; // Import the movies slice's reducer
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer, // User state slice
        movies: moviesReducer, // Movies state slice
        gpt:gptReducer,
        config:configReducer,
    },
});

export default appStore;
