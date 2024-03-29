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
import { useSelector } from 'react-redux';
import { userStat } from 'lib/redux/reducers/isLoginSlice';

//https://coding-heesong.tistory.com/69
function usermenu() {
  const [return1, setreturn] = useState<signedInfo>({ message: '', userid: '', usersIdentity: '' });
  const [cookies] = useCookies(['jwt']);
  const [verifyed, setverify] = useState<boolean>(true);
  const stateUser = useSelector(userStat);
  const myuid = stateUser.uid;

  interface signedInfo {
    message: string;
    userid: string;
    usersIdentity: string;
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
          <div id="menubox">
            {stateUser.username != undefined && stateUser.logined != null && stateUser.logined != true ? needLogin() : logined(stateUser.username)}
          </div>
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
