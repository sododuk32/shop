/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styles from './BagsCard.module.css';
import { productInfo } from 'lib/redux/interface';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { store } from 'store';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line @typescript-eslint/ban-types
function BagsCard(item: productInfo) {
  const [thisAmount, setAmount] = useState(0);
  const myprice = useRef<HTMLSpanElement>(null);
  const fixedPrice = item.amount * item.price;
  const changedPrice = thisAmount * item.price;
  let priceValue: number;
  useEffect(() => {
    if (myprice.current != null) {
      priceValue = Number(myprice.current.innerHTML);
    }
  }, [thisAmount]);

  function changeAmountPlus(e: any) {
    let temp = priceValue + 1;
    if (temp > 101) {
      temp = 100;
    }
    return setAmount(temp);
  }
  function changeAmountMinus(e: any) {
    let temp = priceValue - 1;
    if (temp === 0) {
      temp = 1;
    }
    return setAmount(temp);
  }

  return (
    <div>
      <div className={styles.cards}>상품명:{item.productId}</div>
      <div className={styles.amount}>
        <span>수량:</span>
        <div className={styles.amountchng}>
          <Button className={styles.changeBtn} onClick={changeAmountMinus} variant="secondary" size="sm">
            -
          </Button>
          <div>
            <span ref={myprice} className={styles.cards}>
              {thisAmount > 0 ? thisAmount : item.amount}
            </span>
          </div>
          <Button className={styles.changeBtn} onClick={changeAmountPlus} variant="primary" size="sm">
            +
          </Button>
        </div>
      </div>
      <div className={styles.cardOptions}>
        <span>옵션</span>
        <span>색깔:{item.option.ProductColor}</span>
        <span>사이즈:{item.option.ProductSize}</span>
        <span>케이블종류:{item.option.ProductWireless}</span>
        <span>{item.option.ProductHands ? `손: ${item.option.ProductHands}` : null}</span>
      </div>

      <section className={styles.pricing}>
        <span>가격:</span>
        <span id="valueOfprice">{thisAmount > 0 ? changedPrice : fixedPrice}</span>
      </section>
    </div>
  );
}

export default BagsCard;
