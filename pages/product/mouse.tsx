/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './mouse.module.css';
import useRef from 'react';
//checking: HTMLInputElement
// 1.클래스명을 이상하게 받아서 검색해야함.
// 2.다른 검색방법이 없나? 이거 다른컴퓨터에선 다르게 뜰거같음
// useref 사용해서 dom에 접근하는게 정상이다.
// 자기참조로 input 태그의 name을 가져오는건 이상하다
function mouse() {
  function getcolor(color: string) {
    const atrb = document.querySelectorAll('#card');

    for (let i = 0; i < atrb.length; i++) {
      if (!atrb[i]?.dataset?.filter.includes(color)) {
        atrb.style.backgorundColor = 'blue';
      }
    }
  }

  return (
    <div>
      <div>어트리뷰트 테스트</div>
      <div>카드의 크기는 모두 같으며 분류탭을 선택할시 해당 제품만 보임</div>
      <div id="selectbox">
        <div id="colorcheck">
          <label>색깔</label>
          <div id="colorchoice" className={styles.inputcolor}>
            <div>
              <input id="colored" type="checkbox" onClick={() => getcolor('blue')} value="blue" />
              <label>파랑</label>
            </div>
            <div>
              <input id="colored" type="checkbox" onClick={() => getcolor('red')} value="blue" />
              <label>빨강</label>
            </div>
            <div>
              <input id="colored" type="checkbox" onClick={() => getcolor('red')} value="blue" />
              <label>초록</label>
            </div>
            <div>
              <input id="colored" type="checkbox" onClick={() => getcolor('red')} value="blue" />
              <label>노랑</label>
            </div>
            <div>
              <input id="colored" type="checkbox" onClick={() => getcolor('powerrgb')} value="powerrgb" />
              <label>RGB효과</label>
            </div>
          </div>
        </div>
        <div id="colorcheck">
          <label>주 사용 손</label>
          <div id="handchoice" className={styles.inputcolor}>
            <div>
              <input type="checkbox" id="scales" name="scales" />
              <label>왼손잡이</label>
            </div>
            <div>
              <input type="checkbox" id="scales" name="scales" />
              <label>오른손잡이</label>
            </div>
          </div>
        </div>

        <div id="colorcheck">
          <label>블루투스유무</label>
          <div id="handchoice" className={styles.inputcolor}>
            <div>
              <input type="checkbox" id="scales" name="scales" />
              <label>WIRELESS</label>
            </div>
            <div>
              <input type="checkbox" id="scales" name="scales" />
              <label>유선</label>
            </div>
          </div>
        </div>
      </div>

      <div id="data-artibute-box" className={styles.databox}>
        <div className={styles.pcard} data-bestsellers-rank="1" id="card" data-categories="mouse" data-filter="left-hand wireless red green">
          data1 mouse left wireless ,red green{' '}
        </div>
        <div className={styles.pcard} data-bestsellers-rank="2" id="card" data-categories="mouse" data-filter="green blue powerrgb">
          data2 mouse green ,blue powerrgb{' '}
        </div>
        <div className={styles.pcard} data-bestsellers-rank="3" id="card" data-categories="mouse" data-filter="right-hand blue gray">
          data3 mouse right, blue gray{' '}
        </div>
        <div className={styles.pcard} data-bestsellers-rank="4" id="card" data-categories="mouse" data-filter=" wireless powerrgb black">
          data4 mouse wireless ,powerrgb black
        </div>
        <div className={styles.pcard} data-bestsellers-rank="-1" id="card" data-categories="mouse" data-filter="right-hand black yellow">
          data5 mouse right ,black yellow
        </div>
      </div>
    </div>
  );
}

export default mouse;
