/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './logined.module.css';
import { useRouter } from 'next/router';
import { QueryClient } from 'react-query';
import needLogin from './needLogin';
import { removeCookies } from 'cookies-next';
function logined(user: string, verifed: boolean) {
  const router = useRouter();
  const queryClient = new QueryClient();
  const shadows = useRef<HTMLInputElement>(null);
  function logout(e: any) {
    console.log('로그아웃');
    removeCookies('jwt');
    // queryClient.removeQueries({ queryKey: ['userInfo'] });

    return router.push('/users/login');
  }
  if (verifed) {
    if (shadows.current) {
      shadows.current.style.visibility = 'hidden';
      shadows.current.style.display = 'none';

      console.log('shadows' + shadows.current);
    }
    return needLogin;
  } else {
    return (
      <div>
        <section ref={shadows} id="yesspanPannel" className={styles.menuspanNoid}>
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
}

export default logined;
