/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './[pid].module.css';
import Header from '../../../components/commons/Headers/Header';
import SetLanguage from '../../../components/commons/Headers/SetLanguage';
import Image from 'next/image';
import { Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { store } from 'store';
import { add, remove } from 'lib/redux/reducers/getUserSlice';
import { productInfo } from 'lib/redux/interface';

function Goods(info: any) {
  const router = useRouter();
  const productnumber: any = router.query.pid;

  interface loginInfo {
    checkLogin: boolean;
    usersIdentity: string;
    yourId: string;
  }

  const [openpreciseInfo, setpreciseInfo] = useState(false);
  const [opensystemReq, setopensystemReq] = useState(false);
  const [openintegrement, setopenintegrement] = useState(false);
  const [opensupport, setopensupport] = useState(false);
  const [aMOUNT, setAMOUNT] = useState<number>(0);
  const onChangeAmount = (e: any) => {
    const tempPid = Number(e.target.value);
    return setAMOUNT(tempPid);
  };
  const pickproduct: productInfo = {
    productId: productnumber,
    amount: aMOUNT,
    price: 10000,
    option: {
      ProductColor: 'yello',
      ProductSize: 'S',
      ProductWireless: 'WIRELESS',
      ProductHands: 'left-hands',
    },
  };
  function putinCart() {
    store.dispatch(add(pickproduct));
  }
  console.log(productnumber);
  // function putIncart(e: any) {
  //   if (!verifyUser.checkLogin) {
  //     console.log('로그인필요');
  //     return alert('로그인이 필요합니다.');
  //   }
  //   const yourChoice = { uid: verifyUser.usersIdentity, pid: productid, amount: aMOUNT };
  //   postInputCart(yourChoice.uid, yourChoice.pid, yourChoice.amount)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data?.message === 'complete') {
  //         return alert('상품을 담았습니다.');
  //       } else throw Error;
  //     })
  //     .catch((Error) => {
  //       alert('에러발생');
  //       console.log(Error);
  //       return null;
  //     });
  // }
  return (
    <div>
      <section className={styles.goodsHeader}>
        <div>{productnumber}</div>
        <SetLanguage />
        <Header />
      </section>
      <section className={styles.goodsBody}>
        <div className={styles.gallaryPannel}>
          <span>/ 마우스/Mac용 lift</span>
          <div className={styles.gallaryImgPannel}>
            <Image src="/gallary-1.jpg" alt="a" width={500} height={400} />
          </div>
        </div>
        <div className={styles.productInfo}>
          <h3> Ergo 시리즈</h3>
          <h1>LIFT FOR MAC</h1>
          <h3>인체공학 버티컬 마우스</h3>
          <h3 className={styles.infoh3}>
            Mac용 Lift 버티컬 인체공학 마우스는 사용자의 편안함을 위해 제작되었습니다. 작거나 보통 크기의 손에 딱 맞는 아시안핏 사이즈.
          </h3>
          <section className={styles.infoselect}>
            <div>
              <Button
                className={`${styles.preciseInfo} ${'btn-light'}`}
                onClick={() => setpreciseInfo(!openpreciseInfo)}
                aria-controls="detailInfo"
                aria-expanded={openpreciseInfo}
              >
                <span>사양 세부 정보</span>
                <span>&#43;</span>
              </Button>
              <Collapse in={openpreciseInfo}>
                <div id="detailInfo">사양 세부 정보</div>
              </Collapse>
            </div>
            <div>
              <Button
                className={`${styles.systemReq} ${'btn-light'}`}
                onClick={() => setopensystemReq(!opensystemReq)}
                aria-controls="example-collapse-text"
                aria-expanded={opensystemReq}
              >
                <span>시스템 요구 사항</span>
                <span>&#43;</span>
              </Button>
              <Collapse in={opensystemReq}>
                <div id="detailInfo">시스템 요구 사항 세부정보</div>
              </Collapse>
            </div>
            <div>
              <Button
                className={`${styles.integrement} ${'btn-light'}`}
                onClick={() => setopenintegrement(!openintegrement)}
                aria-controls="example-collapse-text"
                aria-expanded={openintegrement}
              >
                <span>구성품</span>
                <span>&#43;</span>
              </Button>
              <Collapse in={openintegrement}>
                <div id="detailInfo">구성품세부정보</div>
              </Collapse>
            </div>
            <div>
              <Button
                className={`${styles.systemReq} ${'btn-light'}`}
                onClick={() => setopensupport(!opensupport)}
                aria-controls="example-collapse-text"
                aria-expanded={opensupport}
              ></Button>
              <Collapse in={opensystemReq}>
                <div id="detailInfo">시스템요구사항...</div>
              </Collapse>
            </div>
            <div>
              <Button
                id="buyBtn"
                onClick={putinCart}
                className={`${styles.systemReq} ${'btn-light'}`}
                aria-controls="example-collapse-text"
                aria-expanded={opensupport}
              >
                <span>{productnumber}번 상품 담기</span>
              </Button>
              <div id="amount">
                <input id="amountText" onChange={onChangeAmount} aria-label="0" type="text" />
                <span>{aMOUNT}</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Goods;
