/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { initialUserState } from 'Infrastructure/Store/User/UserStore';

// !Challenge: Slice
export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    createUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createUserSuccess: (state) => { state.loading = false;},
    createUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
