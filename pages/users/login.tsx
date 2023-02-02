/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './login.module.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, FormControl, FormControlProps } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { postLogin } from '../../lib/fetches/ApiCall';
import { store } from 'store';
import { getLogin } from 'lib/redux/reducers/isLoginSlice';
import { logined } from 'lib/redux/interface';
function login() {
  interface infoes {
    usersid: string;
    userspw: string;
  }
  const [Email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['jwt']);
  const router = useRouter();

  const onChangeId = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  let mytoken = '';
  let checkLogin: boolean;
  let myuid = '';
  let username = '';
  const sendingInfo = async () => {
    let userInput: infoes = {
      usersid: Email,
      userspw: userPassword,
    };
    console.log(userInput);
    if (userInput.usersid.length < 1 || userInput.userspw.length < 1) {
      alert('아이디와 비밀번호를 제대로 입력하세요');
      return null;
    }
    const sendJson = JSON.stringify(userInput);
    await postLogin(sendJson)
      .then((res) => {
        if (res.data.message === 'true') {
          throw Error;
        }
        mytoken = res.data.jwtToken;
        myuid = res.data.uid;
        username = res.data.username;
      })
      .then(() => {
        setCookie('jwt', mytoken, { path: '/' });
        checkLogin = true;

        const Mydata: logined = {
          logined: checkLogin,
          Key: mytoken,
          uid: myuid,
          username: username,
        };
        console.log(Mydata);
        store.dispatch(getLogin(Mydata));
        return router.push('/users/usermenu');
      })
      .catch((error) => {
        alert('아이디 비밀번호 중 하나가 틀렸습니다');
        return null;
      });
  };

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
