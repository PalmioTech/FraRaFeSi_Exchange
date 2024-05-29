import { configureStore } from "@reduxjs/toolkit";
import isLogged from "../src/reducers/isLogged";
import userReducer from "../src/reducers/userReducer";

const store = configureStore({
  reducer: {
    isLogged, // Qui stai usando direttamente il nome isLogged
    user: userReducer, // Qui stai assegnando il reducer userReducer al nome 'user' nello stato
  },
});

export default store;
