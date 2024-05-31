import { configureStore } from "@reduxjs/toolkit";
import isLogged from "../src/reducers/isLogged";
import userReducer from "../src/reducers/userReducer";
import selectedItemReducer from "../src/reducers/selectedAsset";

const store = configureStore({
  reducer: {
    isLogged,
    user: userReducer,
    selectedAsset: selectedItemReducer,
  },
});

export default store;
