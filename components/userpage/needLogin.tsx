import React from 'react';
import Link from 'next/link';
import styles from './needLogin.module.css';
function needLogin() {
  return (
    <div>
      <section id="nospanPannel" className={styles.menuspanYesid}>
        <div className={styles.menuBox}>
          <h1>내 계정</h1>
          <div className={styles.btns}>
            <Link href="/users/login">
              <button className={styles.menuBtn1}>로그인</button>
            </Link>
            <Link href="/users/userRegistrate">
              <button className={styles.menuBtn2}>계정 만들기</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default needLogin;
