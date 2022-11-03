/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HtmlHTMLAttributes } from 'react';
import styles from './mouse.module.css';
import useRef from 'react';
//checking: HTMLInputElement
// 1.클래스명을 이상하게 받아서 검색해야함.
// 2.다른 검색방법이 없나? 이거 다른컴퓨터에선 다르게 뜰거같음
// useref 사용해서 dom에 접근하는게 정상이다.
// 자기참조로 input 태그의 name을 가져오는건 이상하다
// nodeList타입은 foreach로 사용하능함.
function mouse() {
  // const inputref = useRef();
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
            element.style.visibility = 'hidden';
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
        if (element.style.visibility === 'hidden') {
          let counting = 0;
          let lengthof = conditionArray.length;
          for (let i = 0; i < lengthof; i++) {
            if (element.dataset.filter.includes(conditionArray[i])) {
              counting++;
            }
            if (counting === lengthof) {
              element.style.visibility = 'visible';
            }
          }
        }
      });
    }

    if (conditionArray.length === 0) {
      atrb.forEach((element) => {
        element.style.visibility = 'visible';
      });
    }
  }

  return (
    <div>
      <div>어트리뷰트 테스트</div>
      <div>카드의 크기는 모두 같으며 분류탭을 선택할시 해당 제품만 보임</div>
      <div id="selectbox">
        <section id="colorcheck">
          <label>색깔</label>
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
        </section>
        <section id="hand">
          <label>주 사용 손</label>
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
        </section>

        <section id="colorcheck">
          <label>블루투스유무</label>
          <div id="handchoice" className={styles.inputcolor}>
            <div>
              <input id="wireless" type="checkbox" onClick={() => getcondition('wireless')} name="wireless" />
              <label>WIRELESS</label>
            </div>
            <div>
              <input id="cable" type="checkbox" onClick={() => getcondition('cable')} name="cable" />
              <label>유선</label>
            </div>
          </div>
        </section>
      </div>

      <div id="data-artibute-box" className={styles.databox}>
        <div className={styles.pcard} data-bestsellers-rank="1" id="card" data-categories="mouse" data-filter="left-hand wireless red green">
          data1 mouse left wireless red green
        </div>
        <div className={styles.pcard} data-bestsellers-rank="2" id="card" data-categories="mouse" data-filter="green blue powerrgb">
          data2 mouse green ,blue powerrgb
        </div>
        <div className={styles.pcard} data-bestsellers-rank="3" id="card" data-categories="mouse" data-filter="right-hand blue gray">
          data3 mouse right, blue gray
        </div>
        <div className={styles.pcard} data-bestsellers-rank="4" id="card" data-categories="mouse" data-filter=" wireless powerrgb black">
          data4 mouse wireless powerrgb black
        </div>
        <div className={styles.pcard} data-bestsellers-rank="-1" id="card" data-categories="mouse" data-filter="right-hand black yellow">
          data5 mouse right black yellow
        </div>
      </div>
    </div>
  );
}

export default mouse;
