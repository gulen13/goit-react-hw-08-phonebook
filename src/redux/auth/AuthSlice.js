import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './AuthOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.error = '';
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  console.log(action.payload)
};

const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  console.log(initialState.token)
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
      .addCase(register.fulfilled, handleRegisterFulfilled,)
      .addCase(logIn.fulfilled, handleLoginFulfilled,)
      .addCase(logOut.fulfilled, handleLogOut,)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
  },
});

export const authReducer = authSlice.reducer;