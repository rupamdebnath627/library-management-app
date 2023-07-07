import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    accounts: [
      {
        userId: "A001",
        name: "Abc",
        email: "abc@123.com",
        accountType: "accountant",
      },
      {
        userId: "A002",
        name: "Efg",
        email: "efg@123.com",
        accountType: "user",
      },
      {
        userId: "A003",
        name: "Hij",
        email: "hij@123.com",
        accountType: "accountant",
      },
      {
        userId: "A004",
        name: "Lmn",
        email: "lmn@123.com",
        accountType: "admin",
      },
      {
        userId: "A005",
        name: "Xyz",
        email: "xyz@123.com",
        accountType: "user",
      },
      {
        userId: "A006",
        name: "Tuv",
        email: "tuv@123.com",
        accountType: "manager",
      },
    ],
  },
  reducers: {
    addAccount(state, action) {
      state.accounts.push(action.payload);
    },
    updateAccount(state, action) {
      const idx = state.accounts.findIndex(
        (account) => account.userId === action.payload.userId
      );
      state.accounts[idx].name = action.payload.name;
      state.accounts[idx].email = action.payload.email;
      state.accounts[idx].accountType = action.payload.accountType;
      // console.log(state.accounts[idx]);
    },
    deleteAccount(state, action) {
      state.accounts = state.accounts.filter(
        (account) => account.userId !== action.payload
      );
      // console.log(state.accounts);
    },
  },
});

export const accountActions = accountSlice.actions;

export default accountSlice;
