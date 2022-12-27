/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import styles from './usermenu.module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import logined from 'components/logined';
import needLogin from 'components/needLogin';
import { updater } from '../../lib/ApiCall';
import Link from 'next/link';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['userInfo'], updater);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function usermenu() {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['jwt']);
  interface loginInfo {
    checkLogin: boolean;
    usersIdentity: string;
    yourId: string;
  }
  let userInfo: loginInfo;
  const queryClient = new QueryClient();
  let myname: string;

  // const { isError, data, refetch, error, isSuccess, status } = useQuery({
  //   queryKey: ['userInfo'],
  //   queryFn: updater,
  //   retry: 1,
  //   cacheTime: 60 * 60 * 1000,
  // });
  // if (data) {
  //   myname = data.data?.usersIdentity;
  // }

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

          <div id="menubox">{needLogin()}</div>

          {/* <div id="menubox">{myname ? logined(myname, removeCookie) : needLogin()}</div> */}
          {/* 둘다 안보이게 한다음 getinitprops로 받아온값이 login이면 logined를 보이게 css변경 아니면 선택창 뜨게하기. 
이렇게하면 next 서버의 dom과 클라이언트의dom은 다름없지만 단순 css만 변경되는것 처럼 보임. 상태관리 먼저 선행 필요  */}
          <section className={styles.usersMenus}>
            <div className={styles.usercard}>
              <span className={styles.userssbtn}>
                <Image alt="dd" src="/BAGS.svg" width={98} height={98} />
              </span>
              <h3>나의정보</h3>
              <span className={styles.explain}>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</span>
              <div className={styles.links}>
                <Link className={styles.link} href="/users/profile">
                  나의정보 &gt;
                </Link>
                <Link className={styles.link} href="/users/orders">
                  주문 정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/bags">
                  장바구니 &gt;{' '}
                </Link>
              </div>
            </div>
            <div className={styles.usercard}>
              <span className={styles.userssbtn}>
                <Image alt="dd" src="/BAGS.svg" width={98} height={98} />
              </span>
              <h3>나의정보</h3>
              <span className={styles.explain}>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</span>
              <div className={styles.links}>
                <Link className={styles.link} href="/users/profile">
                  나의정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/orders">
                  주문 정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/bags">
                  장바구니 &gt;{' '}
                </Link>
              </div>
            </div>
            <div className={styles.usercard}>
              <span className={styles.userssbtn}>
                <Image alt="dd" src="/BAGS.svg" width={98} height={98} />
              </span>
              <h3>나의정보</h3>
              <span className={styles.explain}>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</span>
              <div className={styles.links}>
                <Link className={styles.link} href="/users/profile">
                  나의정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/orders">
                  주문 정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/bags">
                  장바구니 &gt;{' '}
                </Link>
              </div>
            </div>
            <div className={styles.usercard}>
              <span className={styles.userssbtn}>
                <Image alt="dd" src="/BAGS.svg" width={98} height={98} />
              </span>
              <h3>나의정보</h3>
              <span className={styles.explain}>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</span>
              <div className={styles.links}>
                <Link className={styles.link} href="/users/profile">
                  나의정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/orders">
                  주문 정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/bags">
                  장바구니 &gt;{' '}
                </Link>
              </div>
            </div>
            <div className={styles.usercard}>
              <span className={styles.userssbtn}>
                <Image alt="dd" src="/BAGS.svg" width={98} height={98} />
              </span>
              <h3>나의정보</h3>
              <span className={styles.explain}>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</span>
              <div className={styles.links}>
                <Link className={styles.link} href="/users/profile">
                  나의정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/orders">
                  주문 정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/bags">
                  장바구니 &gt;{' '}
                </Link>
              </div>
            </div>
            <div className={styles.usercard}>
              <span className={styles.userssbtn}>
                <Image alt="dd" src="/BAGS.svg" width={98} height={98} />
              </span>
              <h3>나의정보</h3>
              <span className={styles.explain}>주문을 추적 또는 수정하고, 주문을 반환하고, 계정을 관리합니다.</span>
              <div className={styles.links}>
                <Link className={styles.link} href="/users/profile">
                  나의정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/orders">
                  주문 정보 &gt;{' '}
                </Link>
                <Link className={styles.link} href="/users/bags">
                  장바구니 &gt;{' '}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="menus"></section>
    </div>
  );
}

export default usermenu;
