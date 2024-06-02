import { configureStore } from "@reduxjs/toolkit";
import assetsSliceReducer from "../src/reducers/assetsSlice";
import userSliceReducer from "../src/reducers/userSlice";
import { usersApi } from "./reducers/apiSlice"; // Importa l'API slice

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    assets: assetsSliceReducer,
    [usersApi.reducerPath]: usersApi.reducer, // Aggiungi il reducer dell'API slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware), // Aggiungi il middleware dell'API slice
});

export default store;
