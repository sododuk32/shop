import { productInfo } from 'lib/redux/interface';

export const CHANGE_AMOUNT = (product: productInfo, amountNumer: number) => ({
  payload: {
    name: product.productId,
    amount: amountNumer,
    // this take minus or plus number
  },
  type: 'CHANGE_AMOUNT',
});
