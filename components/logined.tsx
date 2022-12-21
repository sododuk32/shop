/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import styles from './logined.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
function logined(user: string, removeCookie: Function) {
  const router = useRouter();

  function logout() {
    removeCookie('jwt', { path: '/' });
    return router.push('/users/usermenu');
  }
  return (
    <div>
      <section id="yesspanPannel" className={styles.menuspanNoid}>
        <h2>{`안녕하세요,${user}님`}</h2>
        <div className={styles.yesbtns}>
          <Link href="/">
            <span>프로필 편집</span>
          </Link>
          <Link href="/users/usermenu">
            <span onClick={() => logout()}>
              <span>로그아웃</span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default logined;
