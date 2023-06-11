import { createSlice } from "@reduxjs/toolkit";

const storedCurrentUser = localStorage.getItem("currentUser");
const initialState = {
  currentUser: storedCurrentUser ? JSON.parse(storedCurrentUser) : "",
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
  },
});
export const { setCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
