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
import { putIncart, updater, getOderinfo, updater2 } from 'lib/fetches/ApiCall';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { store } from 'store';

function bags() {
  const stateCart = useSelector(changeCart);
  let [totalPrice, setTotalprice] = useState<number>(0);
  console.log(stateCart);
  const dispatch = useDispatch();
  const [cookies] = useCookies(['jwt']);
  const router = useRouter();

  let temp: number;
  const buying = async () => {
    let myoid = 0;
    let myuid = '';
    const json = JSON.stringify(stateCart);
    const json2 = JSON.parse(json);

    console.log(json);
    myoid = await getOderinfo();
    myuid = await updater2(cookies.jwt);

    await putIncart(myoid, myuid, json2, totalPrice);
    store.dispatch(removeAll()); // 상태값 안 없어짐.
    return router.push('/users/oders');
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
        <Header />{' '}
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
              {/* 원래는 서버에서 처리해야함*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default bags;
