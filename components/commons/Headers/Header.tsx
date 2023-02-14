/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPerson, IoIosSearch } from 'react-icons/io';
import style from 'styled-jsx/style';
function Header() {
  // const targetRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };
  const iconstyle = { backgroundColor: 'F6F6F6' };
  return (
    <div>
      <div id="navContainer" className={show ? styles.navContainershow : styles.navContainerhidden}>
        <div>
          <Link href="/" className={styles.linkhome}>
            <Image alt="nothing" src="/mainlogo.jpg" width={116} height={36} />
          </Link>
        </div>
        <div>
          <div id="navBar" className={styles.navBar}>
            <Link href="/product/mouse">
              <button>마우스</button>
            </Link>

            <Link href="/product/mike">
              <button>마이크</button>
            </Link>
            <Link href="/product/keyboard">
              <button>키보드</button>
            </Link>
            <Link href="/users/bags">
              <button>장바구니</button>
            </Link>
          </div>
        </div>
        {/* F6F6F6 */}
        <div id="toolBar" className={styles.toolBar}>
          <button className={styles.headerbtn}>
            <IoIosSearch size={30} style={iconstyle} />
          </button>
          <Link href="/users/usermenu">
            <button className={styles.headerbtn}>
              <IoMdPerson size={30} style={iconstyle} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
