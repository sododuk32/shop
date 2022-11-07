/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from 'usermenu.module.css';
import SetLanguage from 'components/SetLanguage';
import Header from 'components/Header';
function usermenu() {
  return (
    <div>
      <section id="usermenuHeader">
        <SetLanguage />
        <Header />
      </section>

      <section id="heroPannel">
        <div id="hero">
          <div id="pannelImg"></div>
          <button>1</button>
          <button>2</button>
        </div>
      </section>

      <section id="menus"></section>
    </div>
  );
}

export default usermenu;
