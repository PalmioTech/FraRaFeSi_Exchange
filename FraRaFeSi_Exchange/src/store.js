import { configureStore } from "@reduxjs/toolkit";
import assetsSliceReducer from "../src/reducers/assetsSlice";
import userSliceReducer from "../src/reducers/userSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    assets: assetsSliceReducer,
  },
});

export default store;
