import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setBalance: (state, action) => {
      state.data.balance = action.payload;
    },
    setWallet: (state, action) => {
      state.data.wallet = action.payload;
    },
  },
});

export const { setUser, setBalance, setWallet } = userSlice.actions;

export default userSlice.reducer;
