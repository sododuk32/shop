import React, { useRef } from 'react';
import styles from './bags.module.css';
import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import BagsCard from 'components/userpage/BagsCard';
import { productInfo } from 'lib/redux/interface';
import { cartTest } from 'lib/redux/reducers/getUserSlice';
import { useSelector } from 'react-redux';

function bags() {
  const mycart = useSelector(cartTest);
  const val = document.querySelectorAll('li');
  console.log(val);
  return (
    <div>
      <header className={styles.header}>
        <SetLanguage />
        <Header />{' '}
      </header>
      <section className={styles.bodyContainer}>
        <div className={styles.pannelContainer}>
          <div className={styles.productPannel}>
            {mycart.map((card: productInfo) => (
              <li className={styles.CardBody} key={card.productId}>
                {BagsCard(card)}
              </li>
            ))}
          </div>
          <div className={styles.billPannel}>
            <span>총 가격: {}</span>
            <button className={styles.buyingBtn}>구매하기</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default bags;
