// store.js
import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./reducers/apiSlice"; // Importa l'API slice
import userSliceReducer from "./reducers/userSlice";
import exchangeReducer from "./reducers/exchangeSlice";
import { transactionSlice } from "./reducers/transactionSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    exchange: exchangeReducer,
    [transactionSlice.reducerPath]: transactionSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(transactionSlice.middleware)
      .concat(usersApi.middleware),
});

export default store;
