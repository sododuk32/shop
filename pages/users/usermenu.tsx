/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './usermenu.module.css';
import SetLanguage from 'components/commons/Headers/SetLanguage';
import Header from '../../components/commons/Headers/Header';
import Image from 'next/image';
import logined from 'components/userpage/logined';
import needLogin from 'components/userpage/needLogin';
import { updater } from '../../lib/fetches/ApiCall';
import Link from 'next/link';
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
  const [return1, setreturn] = useState<signedInfo>({ message: '', userid: '', usersIdentity: '' });
  const [cookies] = useCookies(['jwt']);
  const [verifyed, setverify] = useState<boolean>(true);
  interface signedInfo {
    message: string;
    userid: string;
    usersIdentity: string;
  }
  useEffect(() => {
    if (cookies.jwt) {
      result();
    }
  }, [return1, verifyed]);

  const result = async () => {
    if (verifyed) {
      if (cookies.jwt === undefined || null) {
        return null;
      }

      const update = await updater(cookies.jwt);
      setreturn({
        message: update.data.message,
        userid: update.data.userid,
        usersIdentity: update.data.usersIdentity,
      });
      return setverify(false);
    }
  };

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
          <div id="menubox">{verifyed ? needLogin() : logined(return1?.usersIdentity)}</div>
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
