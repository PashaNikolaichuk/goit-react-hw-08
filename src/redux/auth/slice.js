import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, logOutThunk } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logout: (state) => {
    //   return initialState;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = authSlices.reducer;
export const { logout } = authSlices.actions;
