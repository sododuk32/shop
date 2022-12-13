/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import styles from './logined.module.css';
import axios from 'axios';
function logined() {
  const [cookies, setCookie, removeCookie] = useCookies<string>(['jwt']);
  // function verifying() {
  //   axios
  //     .get('http://localhost:8080/verify', { headers: { 'Content-Type': `application/json`, withCredentials: true, Authorization: cookies.jwt } })
  //     .then((res) => {
  //       return setuserID({ mytoken: res?.data?.message, usersIdentity: res?.data?.userid });
  //     });
  // }
  // const onSuccess = useCallback((data: any) => {
  //   console.log('Success', data);
  // }, []);

  // const onError = useCallback((err: any) => {
  //   console.log('Error', err);
  // }, []);

  // const onSettled = useCallback(() => {
  //   console.log('Settled');
  // }, []);

  // const { isLoading, isFetching, data, isError, error, refetch } = useQuery(['userInfo'], verifying, {
  //   onSuccess,
  //   onError,
  //   onSettled,
  // });
  function logout() {
    removeCookie('jwt', { path: '/' });
    return location.reload();
  }
  return (
    <div>
      <section id="yesspanPannel" className={styles.menuspanNoid}>
        <h2>{`안녕하세요,${'유저명'}님`}</h2>
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
