/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './[...category].module.css';
import { useState, useEffect } from 'react';
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
import dynamic from 'next/dynamic';
import Card from 'react-bootstrap/Card';
import { Suspense } from 'react';
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
function Product() {
  const router = useRouter();
  const serverurl = 'http://localhost:8080';
  const confirmedUrl = '/mouse?page=';
  const [open, setOpen] = useState<boolean>(true);
  const [opencolor, setOpencolor] = useState<boolean>(true);
  const [openhand, setOpenhand] = useState<boolean>(true);
  const [openblue, setOpenblue] = useState<boolean>(true);
  const [cardInfoes, setInfo] = useState<productInfo[]>([]);
  const allowCategory: string[] = ['mouse', 'keyboard', 'mike'];
  let category: string | undefined | string[];
  let takepage: number | undefined;
  let totalpage: number;
  let cardTag: string | undefined | string[];
  interface productInfo {
    productId: number;
    productTag: string;
    productRank: number;
    productCategory: string;
  }
  let originalCard: productInfo[];

  function startFetching() {
    category = router.query.category[0];
    takepage = router.query.category[1];
    const str1 = router.query.category;
    console.log(!allowCategory.indexOf(category));
    if (allowCategory.indexOf(category) === -1) {
      router.push('/product/mouse/10');
    }
    console.log('페이지 카테고리 ? :' + router.query.category);
    console.log('카테고리 쿼리의 타입은? 배열로 부를때 :' + typeof str1[1]);
    console.log('카테고리 쿼리의 타입은? 그냥 부를때 :' + typeof str1);

    console.log('페이지의 페이지번호는? : ' + router.query.category[1]);
    console.log(takepage);

    axios
      .post(serverurl + '/productInfo/' + category, {}, { params: { page: takepage } })
      .then((res) => {
        console.log(res.headers);
        return setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // router.push('/');
    console.log('렌더링됨');
    if (router.isReady) {
      startFetching();
      console.log(router.query);
    }
  }, [router.isReady, router.pathname]);
  const pagenumbers = 20;
  function makePageN(numbers: number) {
    for (let i = 0; i < numbers; i++) {
      if (takepage === i) {
        <Link href={`/product/${category}?page=${i}`}>
          <Pagination.Item active>{i}</Pagination.Item>;
        </Link>;
      } else {
        <Link href={`/product/${category}?page=${i}`}>
          <Pagination.Item>{i}</Pagination.Item>;
        </Link>;
      }
    }
  }
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
                {cardInfoes[0]?.productId > 0 &&
                  cardInfoes.map((card) => (
                    <li className={styles.CardBody} key={card.productId}>
                      {ProductCard(card)}
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.pageNation}>
              <Pagination size="lg">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Item>{7}</Pagination.Item>
                <Pagination.Item>{8}</Pagination.Item>
                <Pagination.Item>{9}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Product;
