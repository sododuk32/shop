/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { productInfo } from 'lib/redux/interface';
export interface ProductState {
  cart: productInfo[];
}
const initialState: ProductState = {
  cart: [
    {
      productId: '',
      amount: 0,
      price: 0,
      option: {
        ProductColor: '',
        ProductSize: '',
        ProductWireless: '',
        ProductHands: '',
      },
    },
  ],
};

export const userCart = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    add: (state, action) => {
      let mystate: productInfo[] | null = state.cart; //기존의 장바구니
      const targeted: productInfo = action.payload; // 새로 들어온 상품
      let outPutArray: productInfo[]; // 결과로 내보낼 장바구니 상태
      let outPut: productInfo; // 결과로 추가될 상품
      const existProduct = state.cart.find((state) => targeted.productId === state.productId); // 기존state
      if (state.cart[0].productId === '') {
        state.cart[0] = targeted;
      } else {
        if (existProduct != undefined) {
          const foundNumber = state.cart.findIndex((state) => state.productId === targeted.productId);
          if (state.cart[foundNumber].option === targeted.option) {
            outPutArray = [
              ...mystate,
              {
                productId: targeted.productId,
                amount: targeted.amount,
                option: targeted.option,
                price: targeted.price,
              },
            ];
            mystate = outPutArray;
          } else {
            const totalAmount: number = targeted.amount + mystate[foundNumber].amount;

            outPut = {
              productId: targeted.productId,
              amount: totalAmount,
              option: targeted.option,
              price: targeted.price,
            };
            mystate.splice(foundNumber, 1, outPut);
            if (totalAmount === 0) {
              mystate = state.cart;
            }
          }

          state.cart = mystate;
        } else {
          state.cart = [...mystate, targeted];
        }
      }
    },
    remove: (state, action) => {
      const mystate: productInfo[] = state.cart;
      const targeted: productInfo = action.payload;
      const existProduct = state.cart.find((e) => e.productId === targeted.productId);
      if (state.cart[0].productId === '') {
        state.cart = [
          {
            productId: '',
            amount: 0,
            price: 0,

            option: {
              ProductColor: '',
              ProductSize: '',
              ProductWireless: '',
              ProductHands: '',
            },
          },
        ];
      } else {
        if (existProduct != undefined) {
          const foundNumber = state.cart.findIndex((e) => e.productId === targeted.productId);

          mystate.splice(foundNumber, 1);
          if (mystate.length === 0) {
            mystate[0] = {
              productId: '',
              amount: 0,
              price: 0,

              option: {
                ProductColor: '',
                ProductSize: '',
                ProductWireless: '',
                ProductHands: '',
              },
            };
          }
          state.cart = mystate;
        } else {
          state.cart = mystate;
        }
      }
    },

    changeAmount: (state, action) => {
      const foundNumber = state.cart.findIndex((state) => state.productId === action.payload.productId);
      const targeted = state.cart[foundNumber];
      let mystate: productInfo[] | null = state.cart;
      const outPut: productInfo = {
        productId: targeted.productId,
        amount: action.payload.amount,
        price: targeted.price,
        option: targeted.option,
      };
      mystate.splice(foundNumber, 1, outPut);
      state.cart = mystate;
    },
    removeAll: (state) => {
      state.cart = initialState.cart;
    },
  },
});
// netflix 강의 참고하기
export default userCart.reducer;

export const { add, remove, changeAmount, removeAll } = userCart.actions;

export const changeCart = (state: RootState) => state.userCart.cart;
