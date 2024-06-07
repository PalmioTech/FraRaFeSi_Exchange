import { configureStore } from "@reduxjs/toolkit";

import userSliceReducer from "../src/reducers/userSlice";
import { usersApi } from "./reducers/apiSlice"; // Importa l'API slice
import exchangeReducer from "./reducers/exchangeSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    exchange: exchangeReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
