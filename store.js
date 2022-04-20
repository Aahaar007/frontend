import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { aahaarApi } from "./services/aahaar";

export const store = configureStore({
  reducer: {
    [aahaarApi.reducerPath]: aahaarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aahaarApi.middleware),
});
