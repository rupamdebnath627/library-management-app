import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLoginState(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
