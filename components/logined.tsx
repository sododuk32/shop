/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import styles from './logined.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { QueryClient } from 'react-query';
function logined(user: string, removeCookie: Function) {
  const router = useRouter();
  const queryClient = new QueryClient();

  function logout(e: any) {
    console.log('로그아웃');
    removeCookie('jwt', { path: '/' });
    queryClient.removeQueries({ queryKey: ['userInfo'] });

    return router.push('/users/login');
  }
  return (
    <div>
      <section id="yesspanPannel" className={styles.menuspanNoid}>
        <h2>{`안녕하세요,${user}님`}</h2>
        <div className={styles.yesbtns}>
          <Link href="/">
            <span>프로필 편집</span>
          </Link>
          <button onClick={logout}>로그아웃</button>
        </div>
      </section>
    </div>
  );
}

export default logined;
