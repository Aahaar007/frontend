import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  profileData: null,
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
    setProfileData: {
      reducer: (state, { payload }) => {
        state.isLoading = false;
        state.profileData = payload.data;
        state.error = null;
      },
      prepare: (data) => {
        return { payload: { data } };
      },
    },
  },
});

export const { clearState, setProfileData } = userSlice.actions;

export default userSlice.reducer;
