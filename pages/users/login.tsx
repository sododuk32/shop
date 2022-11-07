import React from 'react';
import styles from './login.module.css';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
function login() {
  return (
    <div>
      <section className={styles.loginBody}>
        <div className={styles.loginimg}>
          <Image layout="fixed" src={'/mainlogo.jpg'} width={140} height={50} />
        </div>
        <section id="inputAria" className={styles.inputAria}>
          <div id="inputid" className={styles.emailAria}>
            <FloatingLabel className={styles.emailLabel} controlId="floatingInput" label="이메일 주소">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
          </div>
          <div id="inputpw" className={styles.pwAria}>
            <FloatingLabel className={styles.pwLabel} controlId="floatingPassword" label="암호">
              <Form.Control type="password" placeholder="암호" />
            </FloatingLabel>
          </div>
        </section>
        <Button variant="dark" className={styles.loginbtn}>
          로그인
        </Button>{' '}
      </section>
    </div>
  );
}

export default login;
