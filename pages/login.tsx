import { React, useEffect } from 'react';
import styles from './login.module.css';
import Header from 'components/Header';
import SetLanguage from 'components/SetLanguage';
function login() {
  return (
    <div>
      <section className={styles.loginHeader}>
        <SetLanguage />
        <Header />
      </section>
    </div>
  );
}

export default login;
