import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAsset: null,
};

export const selectedAssetSlice = createSlice({
  name: "selectedAsset",
  initialState,
  reducers: {
    setSelectedAsset: (state, action) => {
      state.selectedAsset = action.payload;
    },
  },
});

export const { setSelectedAsset } = selectedAssetSlice.actions;

export default selectedAssetSlice.reducer;
