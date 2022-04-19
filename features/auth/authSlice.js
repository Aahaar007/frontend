import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
    setState: {
      reducer: (state, { payload }) => {
        Object.keys(payload).forEach((key) => {
          state[key] = payload[key];
        });
      },
      prepare: (loggedIn, token) => {
        return { payload: { loggedIn, token } };
      },
    },
  },
});

export const { clearState, setState } = authSlice.actions;

export default authSlice.reducer;
