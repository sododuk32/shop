/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import styles from './usermenu.module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import logined from 'components/logined';
import needLogin from 'components/needlogin';
// 1번.coockies가 존재할때 상태관리로 패칭.->받아온 정보를 오브젝트화 시켜서 여기저기서 쓰고 하면됨->인증여부만 확인하면됨->설계의 문제임
// 2번.쿠키가 존재한다면 일딴 패칭.->매번 정보 받아와야함->설계의 문제임. ->이쪽이 더 편함
function usermenu() {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['jwt']);
  interface loginInfo {
    mytoken: boolean;
    usersIdentity: string;
  }
  const tempc = cookies.jwt;

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
          {/* <div id="menubox">{tempc ? logined : needLogin}</div> */}
          {/* 둘다 안보이게 한다음 getinitprops로 받아온값이 login이면 logined를 보이게 css변경 아니면 선택창 뜨게하기. 
이렇게하면 next 서버의 dom과 클라이언트의dom은 다름없지만 단순 css만 변경되는것 처럼 보임. 상태관리 먼저 선행 필요  */}
          <button>1</button>
          <button>2</button>
        </div>
      </section>

      <section id="menus"></section>
    </div>
  );
}

export default usermenu;
