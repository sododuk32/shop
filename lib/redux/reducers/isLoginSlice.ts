/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

export interface logined {
  userStatatus: {
    logined: boolean;
    Key: string;
  };
}

const initialState: logined = {
  userStatatus: {
    logined: false,
    Key: '',
  },
};

export const isLogin = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    getLogin: (state, action) => {
      state.userStatatus.Key = action.payload.Key;
      state.userStatatus.logined = action.payload.logined;
      // 등록
    },
    LogOut: (state, action) => {
      // 초기값으로 반환
    },
    Check: (state, action) => {
      // 로그인 되었나 체크
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLogin, LogOut, Check } = isLogin.actions;

export const userStat = (state: RootState) => state.isLogin.userStatatus;

export default isLogin.reducer;
// reducer콜백을 줘야 이 파일의 함수동작들이 리듀서에 등록됨.
