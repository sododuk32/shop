/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './[...category].module.css';
import { useState, useEffect, useMemo } from 'react';
import Header from 'components/Header';
import SetLanguage from 'components/SetLanguage';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ProductCard from 'components/ProductCard';
import { useRouter } from 'next/router';
import Pagination from 'react-bootstrap/Pagination';
import Link from 'next/link';
import axios from 'axios';
import ProductPagenation from '../../components/ProductPagenation';
//배열을 넘겨주면 productcard를 이용해서 ul전체를 만들어주는 컴포넌트를 만들자
// 그럼 여기서 map하고 동적 렌더링 하고 안해도된다 ㅇㅇ
//checking: HTMLInputElement
// 1.클래스명을 이상하게 받아서 검색해야함.
// 2.다른 검색방법이 없나? 이거 다른컴퓨터에선 다르게 뜰거같음
// useref 사용해서 dom에 접근하는게 정상이다.
// 자기참조로 input 태그의 name을 가져오는건 이상하다
// nodeList타입은 foreach로 사용하능함0.
// getinitialprops 를 써보고싶은대 못쓰는대 이유가, dynamic routing은 페이지가 로드 다 되고나서 시작됨.
// post 해서 쿼리못받던대 url , {} , prams... 형식으로 사용하니까 작동됨
// 마지막페이지, 페이지네이션 생성에 들어갈 값이 들어간 배열, 현제 페이지를 한꺼번에 묶어서 객체로 관리하니까 코드가 깔끔해짐
function Product() {
  const router = useRouter();
  const serverurl = 'http://localhost:8080';
  const confirmedUrl = '/mouse?page=';
  const [open, setOpen] = useState<boolean>(true);
  const [opencolor, setOpencolor] = useState<boolean>(true);
  const [openhand, setOpenhand] = useState<boolean>(true);
  const [openblue, setOpenblue] = useState<boolean>(true);
  const [cardInfoes, setInfo] = useState<controlPagenation>({
    card: [],
    totalP: 0,
    currentPagenation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  });
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [pageList, setpageList] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const allowCategory: string[] = ['mouse', 'keyboard', 'mike'];
  let category: string | undefined | string[];
  let totalpage: number;
  let setpagenateList: number[] = [];

  interface productInfo {
    productId: number;
    productTag: string;
    productRank: number;
    productCategory: string;
  }
  interface controlPagenation {
    card: productInfo[];
    totalP: number;
    currentPagenation: number[];
  }
  let originalCard: productInfo[];
  function startFetching() {
    category = router.query.category[0];
    if (allowCategory.indexOf(category) === -1) {
      router.push('/product/mouse/1');
    }

    axios
      .post(serverurl + '/productInfo/' + category + '/' + currentPage, {})
      .then((res) => {
        let tempjson = res.data.sqltemp;
        tempjson = JSON.parse(tempjson);
        totalpage = Math.floor(Number(res.data.message) / 10) * 10;

        if (currentPage > 0 && currentPage < 11) {
          for (let i = 0; i < 10; i++) {
            setpagenateList[i];
          }
        } else {
          for (let i = 0; i < 10; i++) {
            setpagenateList[i] = Math.floor(currentPage / 10) * 10 + i;
          }
        }
        console.log('totalpage:' + totalpage + '　　　' + 'setpagenateList:' + setpagenateList);
        return setInfo({ card: tempjson, totalP: totalpage, currentPagenation: setpagenateList });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // 체크박스 클릭할때마다 fetch날리기.
  // 이때 날리는건 백엔드에서 조건문에 넣을 값만 넣어서 날리기.
  // fetch받으면 setcardInfors에 넣어서 재렌더링
  // 즉 체크박스는 조건문이 들어갈 배열을 조작하는것 외엔 하는게 없음.
  useEffect(() => {
    // router.push('/');
    console.log('렌더링됨');
    if (router.isReady) {
      startFetching();

      console.log(router.query);
    }
  }, [router.isReady, router.pathname, currentPage]);

  return (
    <div>
      <header className={styles.headers}>
        <SetLanguage />
        <Header />
        <div className={styles.heroPannel}>
          <Image className={styles.heroImg} src="/heromouse.jpg" fill alt="a" />
          <span className={styles.catchPh}>
            <label className={styles.bigph}> 마우스</label>
            <label className={styles.smallph}> 나에게 맞는 마우스를 선택해보세요.</label>
          </span>
        </div>
      </header>

      <section id="pageBody" className={styles.pageBody}>
        <div id="marginDiv" className={styles.marginDiv}>
          <Button className={`${styles.blockBtn} ${'btn-light'}`} onClick={() => setOpen(!open)} aria-controls="bodyMain" aria-expanded={open}>
            {open === false ? '필터 표시' : '필터 숨기기'}
          </Button>
        </div>
        <section id="bodyMain" className={styles.bodyMain}>
          <Collapse in={open} className={styles.sideCheckbox}>
            <div id="sideCheckbox">
              <div id="colorcheck">
                <div className={styles.labels}>
                  <label>색깔</label>
                  <Button
                    className={`${styles.colorVar} ${'btn-light'}`}
                    onClick={() => setOpencolor(!opencolor)}
                    aria-controls="colorchoice"
                    aria-expanded={opencolor}
                  >
                    &#8212;
                  </Button>
                </div>
                <Collapse in={opencolor}>
                  <div id="colorchoice" className={styles.inputcolor}>
                    <div>
                      <input id="blue" type="checkbox" value="blue" />
                      <label>파랑</label>
                    </div>
                    <div>
                      <input id="red" type="checkbox" value="red" />
                      <label>빨강</label>
                    </div>
                    <div>
                      <input id="green" type="checkbox" value="green" />
                      <label>초록</label>
                    </div>
                    <div>
                      <input id="yello" type="checkbox" value="yello" />
                      <label>노랑</label>
                    </div>
                    <div>
                      <input id="powerrgb" type="checkbox" value="powerrgb" />
                      <label>RGB효과</label>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div id="hand">
                <div className={styles.labels}>
                  <label>주 사용 손</label>
                  <Button
                    className={`${styles.colorVar} ${'btn-light'}`}
                    onClick={() => setOpenhand(!openhand)}
                    aria-controls="handchoice"
                    aria-expanded={openhand}
                  >
                    &#8212;
                  </Button>
                </div>
                <Collapse in={openhand}>
                  <div id="handchoice" className={styles.inputcolor}>
                    <div>
                      <input id="left-hand" type="checkbox" value="left-hand" />
                      <label>왼손잡이</label>
                    </div>
                    <div>
                      <input id="right-hand" type="checkbox" name="right-hand" />
                      <label>오른손잡이</label>
                    </div>
                  </div>
                </Collapse>
              </div>

              <div id="colorcheck">
                <div className={styles.labels}>
                  <label>블루투스</label>
                  <Button
                    className={`${styles.colorVar} ${'btn-light'}`}
                    onClick={() => setOpenblue(!openblue)}
                    aria-controls="bluethooth"
                    aria-expanded={openblue}
                  >
                    &#8212;
                  </Button>
                </div>
                <Collapse in={openblue}>
                  <div id="bluethooth" className={styles.inputcolor}>
                    <div>
                      <input id="wireless" type="checkbox" name="wireless" />
                      <label>WIRELESS</label>
                    </div>
                    <div>
                      <input id="cable" type="checkbox" name="cable" />
                      <label>유선</label>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </Collapse>
          <div id="cardPannel" className={styles.cardPannel}>
            <div id="data-artibute-box" className={styles.databox}>
              <ul id="cardcoulum" className={styles.cardcoulum}>
                {cardInfoes.card[0]?.productId > 0 &&
                  cardInfoes.card.map((card) => (
                    <li className={styles.CardBody} key={card.productId}>
                      {ProductCard(card)}
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.pageNation}>{ProductPagenation(cardInfoes.totalP, currentPage, category, setcurrentPage, pageList)}</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Product;
