/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './usermenu.module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
import Image from 'next/image';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import logined from 'components/logined';
import needLogin from 'components/needLogin';
import { updater } from '../../lib/ApiCall';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { useCookies } from 'react-cookie';
// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['userInfo'], updater);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   let mykey: string;
//   let user: any;
//   let result: any;
//   if (typeof context.req.cookies.jwt === 'string') {
//     mykey = context.req.cookies.jwt;
//     user = updater(mykey);
//     console.log(user.userid);
//   }
//   if (!user) return { props: { user: 'nodata' } };

//   return {
//     props: (result = {
//       message: user.message,
//       userid: user.userid,
//       usersIdentity: user.usersIdentity,
//     }),
//   };
// }
//https://coding-heesong.tistory.com/69
function usermenu() {
  const [return1, setreturn] = useState<JSON>();
  const [cookies] = useCookies(['jwt']);
  const [verifyed, setverify] = useState<boolean>(true);

  useEffect(() => {
    if (cookies.jwt) {
      console.log('result 실행');
      result();
    }
  });

  const result = async () => {
    console.log(cookies.jwt);
    const update = await updater(cookies.jwt);
    console.log('update?' + update);
    setreturn(update);
    if (verifyed) {
      console.log(return1);
      return setverify(false);
    }
  };
  console.log(return1);
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
              <span className={styles.spanhuge}>나의정보</span>
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
              <span className={styles.spanhuge}>나의정보</span>
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
              <span className={styles.spanhuge}>나의정보</span>
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
              <span className={styles.spanhuge}>나의정보</span>
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
              <span className={styles.spanhuge}>나의정보</span>
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
              <span className={styles.spanhuge}>나의정보</span>
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
