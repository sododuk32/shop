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

function login() {
  interface infoes {
    usersid: string;
    userspw: string;
  }
  const [Email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [jwtk, setjwtk] = useState('');
  const [cookies, setCookie] = useCookies(['jwt']);

  let sendjson: infoes = { usersid: '', userspw: '' };

  const onChangeId = (
    e: React.ChangeEventHandler<FormControlProps> & {
      target: HTMLInputElement;
    },
  ) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (
    e: React.FormEvent<FormControlProps> & {
      target: HTMLInputElement;
    },
  ) => {
    setPassword(e.target.value);
  };
  let mytoken = '';

  function sendingInfo() {
    let sendjson: infoes = {
      usersid: Email,
      userspw: userPassword,
    };

    axios
      .post('http://localhost:8080/login', JSON.stringify(sendjson), {
        headers: { 'Content-Type': `application/json` },
      })
      .then((res) => {
        console.log(res.data.jwtToken);
        mytoken = res.data.jwtToken;
        setCookie('jwt', mytoken, { path: '/' });
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
