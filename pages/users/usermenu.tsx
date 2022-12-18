/* eslint-disable @typescript-eslint/no-explicit-any */
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
import needLogin from 'components/needLogin';
import { abort } from 'process';
// 1번.coockies가 존재할때 상태관리로 패칭.->받아온 정보를 오브젝트화 시켜서 여기저기서 쓰고 하면됨->인증여부만 확인하면됨->설계의 문제임
// 2번.쿠키가 존재한다면 일딴 패칭.->매번 정보 받아와야함->설계의 문제임. ->이쪽이 더 편함
function usermenu(props: any) {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['jwt']);
  interface loginInfo {
    checkLogin: boolean;
    usersIdentity: string;
    yourId: string;
  }
  let userInfo: loginInfo;
  const { isLoading, isError, data, error, isSuccess } = useQuery({ queryKey: ['myUid'], queryFn: authId, retry: 1 });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    userInfo = {
      checkLogin: false,
      usersIdentity: '0',
      yourId: '',
    };
  }
  if (data) {
    userInfo = {
      checkLogin: data.data.message,
      usersIdentity: data.data.userid,
      yourId: data.data.yourId,
    };
  }

  // 1. queryfn은 QueryFunctionContext 객체 형식으로 반환되야하는대
  // 2. queryKey: EnsuredQueryKey<TQueryKey>;
  //     signal?: AbortSignal;
  //     pageParam?: TPageParam;
  //     meta: QueryMeta | undefined;
  // 3. 위에서 key와 meta를 반드시 포함한 객체형식이여야한다.여기서 meta는   QueryMeta = Record<string, unknown>; 형식으로 반환 되어야하며
  // 4. queryKey는 이미 사용중인 querykey를 넣어줘야한다.
  // 5. 즉 promise문을 반환하는 queryfn은 querykey값과 Recode반환타입인 meta를 포함해서 반환 하면 data가 채워지게 된다.
  // 만약 채워지지않고 오류가 나올 경우엔 에러핸들링 문으로 이동한다.
  // Record <Key, Type> 형식은 키가 Key이고 값이 Type인 객체 타입입니다.
  // 결과: 그냥 return axios...하니까 됨
  function authId() {
    return axios.get('http://localhost:8080/verify', {
      headers: {
        'Content-Type': `application/json`,
        withCredentials: true,
        Authorization: cookies.jwt,
      },
    });
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
          <div>{props.fetchMessage}</div>
          <div>{props.fetchUid}</div>
          {/* <div>{data}</div> */}
          <div id="menubox">{userInfo?.checkLogin ? logined(userInfo?.yourId, removeCookie) : needLogin()}</div>
          {/* 둘다 안보이게 한다음 getinitprops로 받아온값이 login이면 logined를 보이게 css변경 아니면 선택창 뜨게하기. 
이렇게하면 next 서버의 dom과 클라이언트의dom은 다름없지만 단순 css만 변경되는것 처럼 보임. 상태관리 먼저 선행 필요  */}
          <button>나의 장바구니</button>
          <button>주문 정보 및 현황</button>
        </div>
      </section>

      <section id="menus"></section>
    </div>
  );
}

export default usermenu;
