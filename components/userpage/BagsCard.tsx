/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styles from './BagsCard.module.css';
import { productInfo } from 'lib/redux/interface';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/ban-types
function BagsCard(item: productInfo, myCart: productInfo[], setmyCart: Function) {
  const myprice = useRef<HTMLSpanElement>(null);
  const foundNumber: number = myCart.findIndex((state) => state.productId === item.productId);
  const [myAmount, setmyAmount] = useState(item.amount);
  function changeAmountPlus(e: any) {
    item.amount += 1;
    myCart[foundNumber].amount = item.amount;
    setmyAmount(item.amount);

    return setmyCart(myCart);
  }
  function changeAmountMinus(e: any) {
    item.amount -= 1;
    myCart[foundNumber].amount = item.amount;
    setmyAmount(item.amount);

    return setmyCart(myCart);
  }

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
            <Button className={styles.changeBtn} onClick={changeAmountMinus} variant="secondary" size="sm">
              -
            </Button>
            <div>
              <span ref={myprice} className={styles.cards}>
                {myAmount}
              </span>
            </div>
            <Button className={styles.changeBtn} onClick={changeAmountPlus} variant="primary" size="sm">
              +
            </Button>
          </div>

          <div className={styles.pricing}>
            <span>가격:</span>
            <span id="valueOfprice">{myAmount * item.price}</span>
          </div>
        </div>
      </body>
    </div>
  );
}

export default BagsCard;
