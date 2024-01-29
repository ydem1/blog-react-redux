/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../types/user';

const initialState: User = {
  email: 'null',
  token: 'null',
  id: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (user, action: PayloadAction<User>) => {
      user.email = action.payload.email;
      user.token = action.payload.token;
      user.id = action.payload.id;
    },
    removeUser: user => {
      user.email = null;
      user.token = null;
      user.id = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
