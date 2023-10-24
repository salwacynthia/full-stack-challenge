import { userSlice } from 'Infrastructure/Slice/User/UserSlice';

export const { createUserRequest, createUserSuccess, createUserFailure } =
  userSlice.actions;
