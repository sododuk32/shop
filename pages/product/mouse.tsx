/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HtmlHTMLAttributes } from 'react';
import styles from './mouse.module.css';
import { useState } from 'react';
import Header from 'components/Header';
import SetLanguage from 'components/SetLanguage';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import ProductCard from 'components/ProductCard';
//checking: HTMLInputElement
// 1.클래스명을 이상하게 받아서 검색해야함.
// 2.다른 검색방법이 없나? 이거 다른컴퓨터에선 다르게 뜰거같음
// useref 사용해서 dom에 접근하는게 정상이다.
// 자기참조로 input 태그의 name을 가져오는건 이상하다
// nodeList타입은 foreach로 사용하능함.
function mouse() {
  // const inputref = useRef();
  const [open, setOpen] = useState<boolean>(true);
  const [opencolor, setOpencolor] = useState<boolean>(true);
  const [openhand, setOpenhand] = useState<boolean>(true);
  const [openblue, setOpenblue] = useState<boolean>(true);

  let conditionArray: string[] = [];

  function getcondition(condition: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const atrb: object = document.querySelectorAll('#card')!;
    const takedCondition: HTMLElement | null = document.getElementById(condition);
    const checking: boolean = takedCondition?.checked;
    if (checking) {
      conditionArray.push(condition);
      console.log('체크됨' + checking);

      for (let j = 0; j < conditionArray.length; j++) {
        atrb.forEach((element) => {
          if (!element.dataset.filter.includes(conditionArray[j])) {
            console.log('현재 찾아야하는값' + conditionArray[j]);
            element.style.display = 'none';
          }
        });
      } //조건태그가 들어있지 않으면 해당 품목을 숨김
    }
    if (!checking) {
      console.log('체크해제됨' + checking);
      const findnum = conditionArray.indexOf(condition);
      conditionArray.splice(findnum, 1);
      //만약에 이미 hidden된게 있는대 unchecked로 조건이 변경되어 보여야하면 visible로 바꿔줘야함.
      atrb.forEach((element) => {
        // eslint-disable-next-line no-constant-condition
        if ((element.style.display = 'none')) {
          let counting = 0;
          let lengthof = conditionArray.length;
          for (let i = 0; i < lengthof; i++) {
            if (element.dataset.filter.includes(conditionArray[i])) {
              counting++;
            }
            if (counting === lengthof) {
              element.style.display = 'block';
            }
          }
        }
      });
    }

    if (conditionArray.length === 0) {
      atrb.forEach((element) => {
        element.style.display = 'block';
      });
    }
  }

  return (
    <div>
      <header className={styles.headers}>
        <SetLanguage />
        <Header />
        <div className={styles.heroPannel}>
          <Image className={styles.heroImg} src="/heromouse.jpg" layout="responsive" width={1150} height={300} />
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
                      <input id="blue" type="checkbox" onClick={() => getcondition('blue')} value="blue" />
                      <label>파랑</label>
                    </div>
                    <div>
                      <input id="red" type="checkbox" onClick={() => getcondition('red')} value="red" />
                      <label>빨강</label>
                    </div>
                    <div>
                      <input id="green" type="checkbox" onClick={() => getcondition('green')} value="green" />
                      <label>초록</label>
                    </div>
                    <div>
                      <input id="yello" type="checkbox" onClick={() => getcondition('yello')} value="yello" />
                      <label>노랑</label>
                    </div>
                    <div>
                      <input id="powerrgb" type="checkbox" onClick={() => getcondition('powerrgb')} value="powerrgb" />
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
                      <input id="left-hand" type="checkbox" onClick={() => getcondition('left-hand')} value="left-hand" />
                      <label>왼손잡이</label>
                    </div>
                    <div>
                      <input id="right-hand" type="checkbox" onClick={() => getcondition('right-hand')} name="right-hand" />
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
                      <input id="wireless" type="checkbox" onClick={() => getcondition('wireless')} name="wireless" />
                      <label>WIRELESS</label>
                    </div>
                    <div>
                      <input id="cable" type="checkbox" onClick={() => getcondition('cable')} name="cable" />
                      <label>유선</label>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </Collapse>
          <div id="cardPannel" className={styles.cardPannel}>
            <div id="data-artibute-box" className={styles.databox}>
              <section id="cardcoulum" className={styles.cardcoulum}>
                <div className={styles.pcard} data-bestsellers-rank="1" id="card" data-categories="mouse" data-filter="left-hand wireless red green">
                  <ProductCard />
                </div>
                <div className={styles.pcard} data-bestsellers-rank="2" id="card" data-categories="mouse" data-filter="green blue powerrgb">
                  <ProductCard />
                </div>
                <div className={styles.pcard} data-bestsellers-rank="3" id="card" data-categories="mouse" data-filter="right-hand blue gray">
                  <ProductCard />
                </div>
              </section>
              <section id="cardcoulum" className={styles.cardcoulum}>
                <div className={styles.pcard} data-bestsellers-rank="4" id="card" data-categories="mouse" data-filter=" wireless powerrgb black">
                  <ProductCard />
                </div>
                <div className={styles.pcard} data-bestsellers-rank="-1" id="card" data-categories="mouse" data-filter="right-hand black yellow">
                  <ProductCard />
                </div>

                <div className={styles.pcard} data-bestsellers-rank="2" id="card" data-categories="mouse" data-filter="green blue powerrgb">
                  <ProductCard />
                </div>
              </section>
              <section id="cardcoulum" className={styles.cardcoulum}>
                <div className={styles.pcard} data-bestsellers-rank="4" id="card" data-categories="mouse" data-filter=" wireless powerrgb black">
                  <ProductCard />
                </div>
                <div className={styles.pcard} data-bestsellers-rank="-1" id="card" data-categories="mouse" data-filter="right-hand black yellow">
                  <ProductCard />
                </div>

                <div className={styles.pcard} data-bestsellers-rank="2" id="card" data-categories="mouse" data-filter="green blue red powerrgb">
                  <ProductCard />
                </div>
              </section>
              <section id="cardcoulum" className={styles.cardcoulum}>
                <div className={styles.pcard} data-bestsellers-rank="4" id="card" data-categories="mouse" data-filter=" wireless blue powerrgb black">
                  <ProductCard />
                </div>
                <div className={styles.pcard} data-bestsellers-rank="-1" id="card" data-categories="mouse" data-filter="right-hand cable black yellow">
                  <ProductCard />
                </div>

                <div className={styles.pcard} data-bestsellers-rank="2" id="card" data-categories="mouse" data-filter="cable green blue powerrgb">
                  <ProductCard />
                </div>
              </section>
              <section id="cardcoulum" className={styles.cardcoulum}>
                <div className={styles.pcard} data-bestsellers-rank="4" id="card" data-categories="mouse" data-filter=" wireless res black">
                  <ProductCard />
                </div>
                <div className={styles.pcard} data-bestsellers-rank="-1" id="card" data-categories="mouse" data-filter="green blue powerrgb">
                  <ProductCard />
                </div>

                <div
                  className={styles.pcard}
                  data-bestsellers-rank="2"
                  id="card"
                  data-categories="mouse"
                  data-filter=" right-hand black yellow green blue powerrgb"
                >
                  <ProductCard />
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default mouse;
