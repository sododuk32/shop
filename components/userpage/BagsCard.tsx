/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styles from './BagsCard.module.css';
import { productInfo } from 'lib/redux/interface';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { changeAmount, changeCart } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import { useDispatch, useSelector } from 'react-redux';
function BagsCard(item: productInfo) {
  const cart: productInfo[] = useSelector(changeCart);

  const foundNumber: number = cart.findIndex((state) => state.productId === item.productId);

  const myprice = useRef<HTMLSpanElement>(null);
  const plusAmount = { ...item, amount: item.amount + 1 };
  const minusAmount = { ...item, amount: item.amount - 1 };

  const dispatch = useDispatch();

  return (
    <div>
      <body className={styles.body}>
        <section className={styles.photos}>
          <Image alt="cc" src="/gallary-2.jpg" width={150} height={150} />
        </section>
        <section className={styles.strings}>
          <div className={styles.cards}>상품명:{item.productId}</div>

          <div className={styles.cardOptions}>
            <span>옵션</span>
            <span>색깔:{item.option.ProductColor}</span>
            <span>사이즈:{item.option.ProductSize}</span>
            <span>케이블종류:{item.option.ProductWireless}</span>
            <span>{item.option.ProductHands ? `손: ${item.option.ProductHands}` : null}</span>
          </div>
        </section>
        <div className={styles.amount}>
          <div className={styles.amountchng}>
            <span>수량:</span>
            <Button className={styles.changeBtn} onClick={() => dispatch(changeAmount(minusAmount))} variant="secondary" size="sm">
              -
            </Button>
            <div>
              <span ref={myprice} className={styles.cards}>
                {item.amount}
              </span>
            </div>
            <Button className={styles.changeBtn} onClick={() => dispatch(changeAmount(plusAmount))} variant="primary" size="sm">
              +
            </Button>
          </div>

          <div className={styles.pricing}>
            <span>가격:</span>
            <span id="valueOfprice">{item.amount * item.price}</span>
          </div>
        </div>
      </body>
    </div>
  );
}

export default BagsCard;
