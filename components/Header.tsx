/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons';

function Header() {
  return (
    <div>
      <div id="navContainer" className={styles.navContainer}>
        <div>
          <Image src="/mainlogo.jpg" width={116} height={36} />
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
          <button className={styles.headerbtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={styles.iconSearch} viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>{' '}
          </button>
          <button className={styles.headerbtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={styles.iconPerson} viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
