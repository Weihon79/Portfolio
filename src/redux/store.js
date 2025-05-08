import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/filterSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, //Le reducer auth pour gérer l'état global de l'authentification. Nommé "auth" dans authSlice
  },
});

export default store;