import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { aahaarApi } from "./services/aahaar";

export const store = configureStore({
  reducer: {
    [aahaarApi.reducerPath]: aahaarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(aahaarApi.middleware),
});

setupListeners(store.dispatch);
