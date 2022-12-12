/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './usermenu.module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'react-cookie';

// 1번.coockies가 존재할때 상태관리로 패칭.->받아온 정보를 오브젝트화 시켜서 여기저기서 쓰고 하면됨->인증여부만 확인하면됨->설계의 문제임
// 2번.쿠키가 존재한다면 일딴 패칭.->매번 정보 받아와야함->설계의 문제임. ->이쪽이 더 편함
function usermenu() {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['jwt']);
  interface loginInfo {
    mytoken: boolean;
    usersIdentity: string;
  }
  const [userID, setuserID] = useState<loginInfo>({ mytoken: false, usersIdentity: 'none' });

  if (cookies.jwt) {
    console.log('exist' + cookies.jwt.length);
  }
  function verifying(jwtk: string) {
    axios.get('http://localhost:8080/verify', { headers: { 'Content-Type': `application/json`, withCredentials: true, Authorization: jwtk } }).then((res) => {
      return setuserID({ mytoken: res?.data?.message, usersIdentity: res?.data?.userid });
    });
  }
  function loginmenu() {
    if (!cookies.jwt) {
      return (
        <div id="nospanPannel" className={styles.menuspanYesid}>
          <h1>내 계정</h1>
          <div className={styles.btns}>
            <Link href="/users/login">
              <button className={styles.menuBtn1}>로그인</button>
            </Link>
            <button className={styles.menuBtn2}>계정 만들기</button>
          </div>
        </div>
      );
    }
    if (cookies.jwt && userID.mytoken) {
      const verifyToken = cookies.jwt;
      verifying(verifyToken);
      //api호출작성 라인 넣으면 hydreted 문제도 해결될것임
      //SO HOW TO SOLVE IT? 부분에 나옴 > https://fourwingsy.medium.com/next-js-hydration-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%9D%B4%EC%8A%88-%ED%94%BC%ED%95%B4%EA%B0%80%EA%B8%B0-988ce0d939e7
      return (
        <section id="yesspanPannel" className={styles.menuspanNoid}>
          <h2>{`안녕하세요,~~님`}</h2>
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
      );
    }
  }

  function logout() {
    setuserID({ mytoken: !userID?.mytoken, usersIdentity: userID?.usersIdentity });
    return removeCookie('jwt', { path: '/' });
  }

  return (
    <div>
      <section id="usermenuHeader">
        <SetLanguage />
        <Header />
      </section>

      <section id="heroPannel">
        <div id="hero">
          <div id="pannelImg">
            <Image className={styles.heroImg} src="/userMenuimg.png" priority alt="sd" width={1900} height={400} />
          </div>
          <div id="menubox">{loginmenu()}</div>
          <button>1</button>
          <button>2</button>
        </div>
      </section>

      <section id="menus"></section>
    </div>
  );
}

export default usermenu;
