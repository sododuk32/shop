/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { productInfo } from 'lib/interface';
import { ADD_CART } from '../actions/index';
const initialState: productInfo[] = [{ productId: 'initial', amount: 'initial' }];

export const gettingUserinfo = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    add: (state, action) => {
      const tempa: productInfo = action.payload;
      if (state[0].productId === 'initial') {
        state[0] = tempa;
      } else {
        state.push(tempa);
      }
    },
  },
});

export default gettingUserinfo.reducer;

export const { add } = gettingUserinfo.actions;

export const cartTest = (state: RootState) => state.userCart.values;
