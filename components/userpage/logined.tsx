/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './logined.module.css';
import { useRouter } from 'next/router';
import { removeCookies } from 'cookies-next';
import { logined } from 'lib/redux/interface';
import { useDispatch } from 'react-redux';
import { getLogin } from 'lib/redux/reducers/isLoginSlice';
import styled from 'styled-components';

const Btn = styled.button`
  border-radius: 10px;
  background-color: black;
  border-color: none;
  color: white;
`;
const H22 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2vw;
`;

function logined(user: string) {
  const updateStat: logined = {
    logined: false,
    Key: '',
    uid: '',
    username: '',
  };
  const dispatch = useDispatch();
  const router = useRouter();
  function logout(e: any) {
    console.log('로그아웃');
    removeCookies('jwt');

    dispatch(getLogin(updateStat));
    return router.push('/users/login');
  }

  return (
    <div>
      <section id="yesspanPannel" className={styles.menuspanNoid}>
        <H22>
          <h2>{`안녕하세요`}</h2>
          <h2>{`${user}님`}</h2>
        </H22>

        <div className={styles.yesbtns}>
          <Link href="/">
            <span>프로필 편집</span>
          </Link>
          <Btn onClick={logout}>로그아웃</Btn>
        </div>
      </section>
    </div>
  );
}

export default logined;
