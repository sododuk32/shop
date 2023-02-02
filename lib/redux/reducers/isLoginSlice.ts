/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

export interface logined {
  userStatatus: {
    logined: boolean;
    Key: string;
    uid: string;
    username: string;
  };
}

const initialState: logined = {
  userStatatus: {
    logined: false,
    Key: '',
    uid: '',
    username: '',
  },
};

export const isLogin = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    getLogin: (state, action) => {
      state.userStatatus.Key = action.payload.Key;
      state.userStatatus.logined = action.payload.logined;
      state.userStatatus.uid = action.payload.uid;
      state.userStatatus.username = action.payload.username;
    },
    LogOut: (state, action) => {
      state.userStatatus.Key = action.payload.Key;
      state.userStatatus.logined = action.payload.logined;
      state.userStatatus.uid = action.payload.uid;
      state.userStatatus.username = action.payload.username;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLogin, LogOut } = isLogin.actions;

export const userStat = (state: RootState) => state.isLogin.userStatatus;

export default isLogin.reducer;
