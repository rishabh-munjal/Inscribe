import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, // Default state value
  userData: null,
};

export const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// Export actions for use in components
export const { login, logout  } = authSlice.actions;

// Export reducer for store configuration
export default authSlice.reducer;
