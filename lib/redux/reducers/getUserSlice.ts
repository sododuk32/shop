/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { productInfo } from 'lib/redux/interface';
export interface ProductState {
  cart: productInfo[];
}
const initialState: ProductState = { cart: [{ productId: '', amount: '', option: [] }] };

export const userCart = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    add: (state, action) => {
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
      const targeted: productInfo = action.payload;
      const existProduct = state.cart.find((e) => e.productId === targeted.productId);
      if (state.cart[0].productId === '') {
        state.cart = [{ productId: '', amount: '', option: [] }];
      } else {
        if (existProduct != undefined) {
          //기존 state에 존재할 시
          const foundNumber = state.cart.findIndex((e) => e.productId === targeted.productId);

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
