/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import styles from './bags.module.css';
import Header from 'components/commons/Headers/Header';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import BagsCard from 'components/userpage/BagsCard';
import { productInfo } from 'lib/redux/interface';
import { removeAll, changeCart } from 'lib/redux/reducers/getUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { putIncart, updater, updater2 } from 'lib/fetches/ApiCall';
import { useRouter } from 'next/router';
import { store } from 'store';
import { userStat } from 'lib/redux/reducers/isLoginSlice';

function bags() {
  const stateCart = useSelector(changeCart);
  const stateUser = useSelector(userStat);

  let [totalPrice, setTotalprice] = useState<number>(0);
  const dispatch = useDispatch();
  const router = useRouter();
  let temp: number;
  if (stateUser.logined === false) {
    console.log('no uid');
    return router.push('/users/usermenu');
  }
  const buying = async () => {
    let myuid = '';
    const json = JSON.stringify(stateCart);
    const json2 = JSON.parse(json);

    console.log(json);
    // if (stateUser.uid === undefined || '') {
    //   myuid = 'notLogin';
    // }
    myuid = stateUser.uid;

    putIncart(myuid, json2, totalPrice);
    store.dispatch(removeAll());
    return router.push('/usersmenu');
  };

  useEffect(() => {
    temp = 0;

    stateCart.forEach((state) => {
      temp = temp + state.price * state.amount;
    });
    setTotalprice(temp + 2500);
  }, [totalPrice, stateCart]);
  console.log(stateCart);

  return (
    <div>
      <header id="pageHeader" className={styles.header}>
        <SetLanguage />
        <Header />
      </header>
      <section id="pageBody" className={styles.bodyContainer}>
        <div className={styles.pannelContainer}>
          <ul className={styles.productPannel}>
            {stateCart[0] != null || undefined
              ? stateCart.map((card: productInfo) => (
                  <li className={styles.CardBody} key={card.productId}>
                    {BagsCard(card)}
                  </li>
                ))
              : null}
          </ul>
          <div className={styles.billPannel}>
            <span className={styles.billspan}>계산 요약 </span>
            <ul className={styles.disCount}>
              <li className={styles.disCountList}>
                <div>할인:</div>
                <div>0</div>
              </li>
              <li className={styles.disCountList}>
                <div>뭐시기비용:</div>
                <div>0</div>
              </li>
              <li className={styles.disCountList}>
                <div>추가예정:</div>
                <div>0</div>
              </li>
              <li className={styles.disCountList}>
                <div>배송비:</div>
                <div>2500</div>
              </li>
            </ul>
            {/* △later this part change arr.map */}
            <div className={styles.chargedPrice}>
              <span>총 가격: {totalPrice}</span>
            </div>

            <div className={styles.buyingBtn}>
              <Button onClick={() => buying()} variant="primary" size="sm">
                구매하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default bags;
