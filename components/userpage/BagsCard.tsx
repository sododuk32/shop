/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import styles from './BagsCard.module.css';
import { productInfo } from 'lib/redux/interface';
import { UserOption } from 'lib/redux/interface';
import Form from 'react-bootstrap/Form';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import { useSelector } from 'react-redux';

function BagsCard(item: productInfo) {
  const amoutArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [thisamount, setamount] = useState(0);
  const mycart = useSelector(cartTest);
  const changeAmount = (e: any) => {
    return setamount(e.target.value);
  };
  // console.log(e.target.value);
  // if (thisamount > 0) {
  //   sendPrice = thisamount * item.price;
  //   return store.dispatch(pricing(sendPrice));
  // } else {
  //   sendPrice = item.amount * item.price;
  //   return store.dispatch(pricing(sendPrice));
  // }
  return (
    <div>
      <section className={styles.BagsCardBody}>
        <div className={styles.cards}>상품명:{item.productId}</div>
        <div className={styles.amount}>
          <div className={styles.cards}>수량:{thisamount > 0 ? thisamount : item.amount}</div>
          <input type="text" id="amount1" className={styles.amountOption} onChange={changeAmount} />
        </div>
        <div className={styles.cardOptions}>
          <span>옵션</span>
          <span>색깔:{item.option.ProductColor}</span>
          <span>사이즈:{item.option.ProductSize}</span>
          <span>케이블종류:{item.option.ProductWireless}</span>
          <span>{item.option.ProductHands ? `손: ${item.option.ProductHands}` : null}</span>
        </div>
      </section>
      <section className="pricing">가격:{thisamount > 0 ? thisamount * item.price : item.amount * item.price}</section>
    </div>
  );
}

export default BagsCard;
