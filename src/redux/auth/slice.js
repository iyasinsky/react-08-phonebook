import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, actions) => state)
      .addCase(register.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, actions) => state)
      .addCase(logIn.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
        state.isLoggedIn = true;
      }),
});
