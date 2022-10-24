/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { style } from '@mui/system';
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
function header() {
  return (
    <div>
      <div id="navContainer" className={styles.navContainer}>
        <div>
          <Image src="/mainlogo.png" width={116} height={36} />
        </div>
        <div>
          <div id="navBar" className={styles.navBar}>
            <button>제품</button>
            <button>스토리</button>
            <button>비즈니스</button>
            <button>지원</button>
          </div>
        </div>

        <div id="toolBar" className={styles.toolBar}>
          <button>○</button>
          <button>○</button>
        </div>
      </div>
    </div>
  );
}

export default header;
