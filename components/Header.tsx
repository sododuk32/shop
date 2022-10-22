/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { style } from '@mui/system';
import React from 'react';
import styles from './Header.module.css';
function header() {
  return (
    <div>
      <div id="navContainer" className={styles.navContainer}>
        <ul id="navListContainer1" className={styles.navListContainer1}>
          <li id="navList" className={styles.navList}>
            logo
          </li>
          <li id="navList" className={styles.navList}>
            category2
          </li>
          <li id="navList" className={styles.navList}>
            category3
          </li>
          <li id="navList" className={styles.navList}>
            category4
          </li>
          <li id="navList" className={styles.navList}>
            category5
          </li>
        </ul>
        <ul id="navListContainer2" className={styles.navListContainer2}>
          <li id="navList" className={styles.navList}>
            user
          </li>
          <li id="navList" className={styles.navListbag}>
            bags
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
