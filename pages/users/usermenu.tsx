/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './usermenu.module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
import Image from 'next/image';
import Link from 'next/link';
function usermenu() {
  return (
    <div>
      <section id="usermenuHeader">
        <SetLanguage />
        <Header />
      </section>

      <section id="heroPannel">
        <div id="hero">
          <div id="pannelImg">
            <Image className={styles.heroImg} src="/userMenuimg.png" layout="responsive" width={1150} height={300} />
          </div>
          <div id="spanPannel" className={styles.menuspanPannel}>
            <h1>내 계정</h1>
            <div className={styles.btns}>
              <Link href="/users/login">
                <button className={styles.menuBtn1}>로그인</button>
              </Link>
              <button className={styles.menuBtn2}>계정 만들기</button>
            </div>
          </div>
          <button>1</button>
          <button>2</button>
        </div>
      </section>

      <section id="menus"></section>
    </div>
  );
}

export default usermenu;
