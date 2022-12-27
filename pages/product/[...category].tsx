/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HtmlHTMLAttributes, InputHTMLAttributes } from 'react';
import styles from './[...category].module.css';
import { useState, useEffect, useMemo } from 'react';
import Header from 'components/Header';
import SetLanguage from 'components/SetLanguage';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ProductCard from 'components/ProductCard';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductPagenation from '../../components/ProductPagenation';
import { postProduct } from 'lib/ApiCall';
function Product() {
  interface productInfo {
    productId: number;
    productTag: string;
    productRank: number;
    productCategory: string;
  }
  interface controlPagenation {
    card: productInfo[];
    totalP: number;
  }
  const router = useRouter();
  const serverurl = 'http://localhost:8080';
  let category: string | undefined;
  let totalpage: number;
  const allowCategory: string[] = ['mouse', 'keyboard', 'mike'];
  const [open, setOpen] = useState<boolean>(true);
  const [opencolor, setOpencolor] = useState<boolean>(true);
  const [openhand, setOpenhand] = useState<boolean>(true);
  const [openblue, setOpenblue] = useState<boolean>(true);
  const [cardInfoes, setInfo] = useState<controlPagenation>({
    card: [],
    totalP: 0,
  });
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    console.log('렌더링됨');
    console.log(tags);
    if (router.isReady) {
      category = router?.query?.category[0];
      startFetching(category);
    }
  }, [router.isReady, currentPage, tags]);

  const handleOnChange = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent> & {
      target: HTMLInputElement;
    },
  ) => {
    if (event?.target?.checked) {
      return setTags((tags) => [...tags, event?.target?.id]);
    } else {
      console.log(event?.target?.id);
      let targetId: number = tags.indexOf(event?.target?.id);
      console.log('빼기실행' + targetId);
      let temp = tags;
      temp = temp.filter((element) => element !== event?.target?.id);
      return setTags(temp);
    }
  };

  function startFetching(category: string) {
    if (allowCategory.indexOf(category) === -1) {
      router.push('/product/mouse');
      return;
    }
    postProduct(category, currentPage, tags)
      .then((res) => {
        let tempjson = res.data.sqltemp;
        tempjson = JSON.parse(tempjson);
        totalpage = Math.floor(Number(res.data.total) / 20) + 1;
        return setInfo({ card: tempjson, totalP: totalpage });
      })
      .catch((error) => {
        console.log(error);
      });
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
                      <input id="blue" type="checkbox" onClick={handleOnChange} value="blue" />
                      <label>파랑</label>
                      <span>{tags}</span>
                    </div>
                    <div>
                      <input id="red" type="checkbox" onClick={handleOnChange} value="red" />
                      <label>빨강</label>
                    </div>
                    <div>
                      <input id="green" type="checkbox" onClick={handleOnChange} value="green" />
                      <label>초록</label>
                    </div>
                    <div>
                      <input id="yello" type="checkbox" onClick={handleOnChange} value="yello" />
                      <label>노랑</label>
                    </div>
                    <div>
                      <input id="powerrgb" type="checkbox" onClick={handleOnChange} value="powerrgb" />
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
                      <input id="left-hand" type="checkbox" onClick={handleOnChange} value="left-hand" />
                      <label>왼손잡이</label>
                    </div>
                    <div>
                      <input id="right-hand" type="checkbox" onClick={handleOnChange} name="right-hand" />
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
                      <input id="wireless" type="checkbox" onClick={handleOnChange} name="wireless" />
                      <label>WIRELESS</label>
                    </div>
                    <div>
                      <input id="cable" type="checkbox" onClick={handleOnChange} name="cable" />
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
            <div className={styles.pageNation}>{ProductPagenation(cardInfoes.totalP, currentPage, category, setcurrentPage)}</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Product;
