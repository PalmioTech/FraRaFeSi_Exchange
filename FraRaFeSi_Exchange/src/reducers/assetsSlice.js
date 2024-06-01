import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAsset: null,
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setSelectedAsset: (state, action) => {
      state.selectedAsset = action.payload;
    },
  },
});

export const { setSelectedAsset } = assetsSlice.actions;

export default assetsSlice.reducer;
