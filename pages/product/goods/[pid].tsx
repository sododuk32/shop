/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './[pid].module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
import Image from 'next/image';
import { Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Goods() {
  const router = useRouter();
  const productid = router.query.pid;

  //pid가지고 서버에서 data가져와서 보여주기
  //오늘할것. pid로 보여줄 페이지 만들기,로그인 페이지만들기
  const [openpreciseInfo, setpreciseInfo] = useState(false);
  const [opensystemReq, setopensystemReq] = useState(false);
  const [openintegrement, setopenintegrement] = useState(false);
  const [opensupport, setopensupport] = useState(false);

  return (
    <div>
      <section className={styles.goodsHeader}>
        <div>{productid}</div>
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
                aria-controls="ssss"
                aria-expanded={openpreciseInfo}
              >
                <span>사양 세부 정보</span>
                <span>&#43;</span>
              </Button>
              <Collapse in={openpreciseInfo}>
                <div id="ssss">sfd</div>
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
                <div id="ssss">sfd</div>
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
                <div id="ssss">sfd</div>
              </Collapse>
            </div>
            <div>
              <Button
                className={`${styles.systemReq} ${'btn-light'}`}
                onClick={() => setopensupport(!opensupport)}
                aria-controls="example-collapse-text"
                aria-expanded={opensupport}
              >
                <span>지원</span>
                <span>&#43;</span>
              </Button>
              <Collapse in={opensystemReq}>
                <div id="ssss">sfd</div>
              </Collapse>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Goods;
