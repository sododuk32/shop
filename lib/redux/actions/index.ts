import { productInfo } from 'lib/redux/interface';

export const ADD_CART = (products: productInfo) => ({
  type: 'ADD_CART',
  payload: {
    products,
  },
});
