import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the user slice's reducer

const appStore = configureStore({
    reducer: {
        user: userReducer, // Use the user reducer for the user state slice
    },
});

export default appStore;
