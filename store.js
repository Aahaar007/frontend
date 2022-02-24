import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { aahaarApi } from "./services/aahaar";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [aahaarApi.reducerPath]: aahaarApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aahaarApi.middleware),
});
