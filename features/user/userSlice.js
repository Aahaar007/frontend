import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.data = null;
      state.error = null;
    },
    loginUser: {
      reducer: (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      },
      prepare: (data) => {
        return { payload: { data } };
      },
    },
  },
});

export const { clearState, loginUser } = userSlice.actions;

export default userSlice.reducer;
