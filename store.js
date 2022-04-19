import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { aahaarApi } from "./services/aahaar";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [aahaarApi.reducerPath]: aahaarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aahaarApi.middleware),
});
