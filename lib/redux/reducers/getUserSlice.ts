/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { productInfo } from 'lib/interface';
import { ADD_CART } from '../actions/index';
export interface ProductState {
  cart: productInfo[];
}
const initialState: ProductState = { cart: [{ productId: '', amount: '' }] };

export const userCart = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    add: (state, action) => {
      // 수량 감소시 -number를 더하면됨
      const mystate: productInfo[] = state.cart;
      const tempa: productInfo = action.payload;
      const existProduct = state.cart.find((tempa) => tempa.productId); // 기존state
      if (state.cart[0].productId === '') {
        state.cart[0] = tempa;
      } else {
        if (existProduct != undefined) {
          const changedAmount = tempa.amount + existProduct.amount;
          const foundNumber = state.cart.findIndex((e) => e.productId);
          mystate[foundNumber].amount = changedAmount;
          state.cart = mystate;
        } else {
          state.cart.push(tempa);
        }
      }
    },
    remove: (state, action) => {
      const mystate: productInfo[] = state.cart;
      const tempa: productInfo = action.payload;
      const existProduct = state.cart.find((tempa) => tempa.productId); // 기존state
      if (state.cart[0].productId === '') {
        state.cart = [{ productId: '', amount: '' }];
      } else {
        if (existProduct != undefined) {
          //기존 state에 존재할 시
          const foundNumber = state.cart.findIndex((e) => e.productId);

          mystate.splice(foundNumber, 1);
          state.cart = mystate;
        } else {
          state.cart = mystate;
        }
      }
    },
  },
});
// netflix 강의 참고하기
export default userCart.reducer;

export const { add } = userCart.actions;

export const cartTest = (state: RootState) => state.userCart.cart;
