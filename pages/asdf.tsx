/* eslint-disable @typescript-eslint/no-unused-vars */
import { productInfo } from 'lib/redux/interface';
import React from 'react';

function asdf() {
  const arr: productInfo[] = [
    {
      productId: '2',
      amount: 1,
      price: 10000,
      option: {
        ProductColor: 'yello',
        ProductSize: 'S',
        ProductWireless: 'WIRELESS',
        ProductHands: 'left-hands',
      },
    },
    {
      productId: '3',
      amount: 1,
      price: 10000,
      option: {
        ProductColor: 'yello',
        ProductSize: 'S',
        ProductWireless: 'WIRELESS',
        ProductHands: 'left-hands',
      },
    },
    {
      productId: '4',
      amount: 5,
      option: {
        ProductColor: 'yello',
        ProductSize: 'S',
        ProductWireless: 'WIRELESS',
        ProductHands: 'left-hands',
      },
      price: 10000,
    },
  ];

  return <div>asdf</div>;
}

export default asdf;
