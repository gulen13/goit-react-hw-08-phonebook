import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './AuthOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

const handleLogOut = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterLogInFulfilled,)
      .addCase(logIn.fulfilled, handleRegisterLogInFulfilled,)
      .addCase(logOut.fulfilled, handleLogOut,)
  },
});

export const authReducer = authSlice.reducer;