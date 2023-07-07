import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./AccountSlice";
import bookSlice from "./BookSlice";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    account: accountSlice.reducer,
    books: bookSlice.reducer,
  },
});

export default store;
