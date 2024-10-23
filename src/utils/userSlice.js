import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Sets the user state to the user data
    },
    removeUser: (state) => {
      return null; // Resets the user state to null on sign out
    },
  },
});

export const { addUser, removeUser } = userSlice.actions; // Correct export
export default userSlice.reducer;
