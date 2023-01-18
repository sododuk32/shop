/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import styles from './bags.module.css';
import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import BagsCard from 'components/userpage/BagsCard';
import { productInfo } from 'lib/redux/interface';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
//  price = myBags.current.childNodes[0].lastChild.childNodes[3].childNodes[1];

function bags() {
  const stateCart = useSelector(cartTest);
  const [myCart, setmyCart] = useState<productInfo[]>(stateCart);
  let [totalPrice, setTotalprice] = useState<number>(0);
  let temp: number;
  useEffect(() => {
    temp = 0;
    console.log('mounted');
    console.log('totalprice:' + totalPrice);
    console.log(myCart);

    myCart.forEach((state) => {
      temp = temp + state.price * state.amount;
    });
    setTotalprice(temp + 2500);
  }, [totalPrice, myCart]);
  console.log(myCart);

  // useEffect(() => {}, [myCart]);
  return (
    <div>
      <header className={styles.header}>
        <SetLanguage />
        <Header />{' '}
      </header>
      <section className={styles.bodyContainer}>
        <div className={styles.pannelContainer}>
          <ul className={styles.productPannel}>
            {myCart.map((card: productInfo) => (
              <li className={styles.CardBody} key={card.productId}>
                {BagsCard(card, myCart, setmyCart)}
              </li>
            ))}
          </ul>
          <div className={styles.billPannel}>
            <span>배송비:2500</span>
            <span>총 가격: {totalPrice}</span>

            <Button className={styles.buyingBtn} variant="primary" size="sm">
              구매하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default bags;
