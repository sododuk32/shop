/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './login.module.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, FormControl, FormControlProps } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { QueryClient, useQuery } from 'react-query';
function login() {
  interface infoes {
    usersid: string;
    userspw: string;
  }
  const [Email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [jwtk, setjwtk] = useState('');
  const [cookies, setCookie] = useCookies(['jwt']);
  const router = useRouter();
  const queryClient = new QueryClient();
  const { isError, data, refetch, error, isSuccess, status } = useQuery({
    queryKey: ['userInfo'],
    queryFn: updater,
    retry: 1,
    enabled: false,
    cacheTime: 60 * 60 * 1000,
  });

  const onChangeId = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  let mytoken = '';

  function updater() {
    console.log('updater실행');
    return axios.get('http://localhost:8080/verify', {
      headers: {
        'Content-Type': `application/json`,
        withCredentials: true,
        Authorization: mytoken,
      },
    });
  }

  function sendingInfo() {
    let sendJson: infoes = {
      usersid: Email,
      userspw: userPassword,
    };
    if (sendJson.usersid.length < 1 || sendJson.userspw.length < 1) {
      alert('아이디와 비밀번호를 제대로 입력하세요');
      return null;
    }

    axios
      .post('http://localhost:8080/login', JSON.stringify(sendJson), {
        headers: { 'Content-Type': `application/json` },
      })

      .then((res) => {
        if (res.data.message === true) {
          throw error;
        }
        console.log('토큰삽입 then문');
        mytoken = res.data.jwtToken;
      })
      .then(() => {
        console.log('토큰삽입 다음 콜백실행');
        refetch(); //useQuery 직접실행문
        if (isError) {
          console.log('error문실행');
          throw error;
          //보낼 쿠키값이 없을때 발생하거나, 서버측에 이상이있을때 발생함.
        }
        if (isSuccess) {
          setCookie('jwt', mytoken, { path: '/' });
          console.log('setquery then문');
          return router.push('/');
        }

        // queryClient.setQueryData('userInfo', updater);

        console.log('setQueryData 콜백문 실행');
      })
      .catch((error) => {
        return alert('아이디 비밀번호 중 하나가 틀렸습니다');
      });
  }

  return (
    <div>
      <section className={styles.loginBody}>
        <div className={styles.loginimg}>
          <Image src={'/mainlogo.jpg'} fill alt="a" />
        </div>
        <section id="inputAria" className={styles.inputAria}>
          <div id="inputid" className={styles.emailAria}>
            <FloatingLabel className={styles.emailLabel} controlId="floatingInput" label="이메일 주소">
              <Form.Control onChange={onChangeId} type="email" placeholder="Email" />
            </FloatingLabel>
          </div>
          <div id="inputpw" className={styles.pwAria}>
            <FloatingLabel className={styles.pwLabel} controlId="floatingPassword" label="암호">
              <Form.Control onChange={onChangePassword} type="password" placeholder="암호" />
            </FloatingLabel>
          </div>
        </section>
        <Button variant="dark" onClick={sendingInfo} className={styles.loginbtn}>
          로그인
        </Button>
        <span>{Email}</span>
        <span>{userPassword}</span>
      </section>
    </div>
  );
}

export default login;
