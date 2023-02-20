/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPerson, IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';
const Nav = styled.div`
  @media only screen and (max-width: 800px) {
    width:100%;
    height:10vw;
    .icons
    {
      width:4vw;
      height:4vw;
    }
    .navContainershow {
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, 0);
      align-items: center;
      position: fixed;
      z-index: 10;
      transition: top 0.2s ease-in-out;
      visibility: visible;
      opacity: 10;
      display: flex;
      flex:direction:row;
      justify-contents:space-around;
      margin-top:5vw;
      margin-left:10vw;
    }
    .navContainerhidden {
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, 0);
      display: grid;
      align-items: center;
      margin-left: 20vw;
      grid-template-columns: 1fr 4.2fr 1fr;
      position: fixed;
      z-index: 1;
      transition: top 0.2s ease-in-out;
      visibility: hidden;
    }
    .navBar {
      display: flex;
      justify-content: center;

      z-index: 3;
      width: 33vw;
      -webkit-animation-name: flash;
      animation-name: flash;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }
    .navBar > button {
      padding-left: 1vw;
      font-weight: bold;
    }
    .navBar button {
      height: 4vw;
      display: flex;
      align-items: center;
      min-width: 3vw;
      font-weight: bold;
      font-size: 3px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }

    .toolBar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      -webkit-animation-name: flash;
      animation-name: flash;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }
    .toolBar button {
      font-weight: bold;
      font-size: 1vw;
      margin-right: 1vw;
    }

    .imgdiv {
      z-index: 1;
    }

    .navContainer::-webkit-scrollbar-track-piece {
      position: fixed;
    }

    .headerbtn {
      border: none;
      outline: none;
    }
    .imgs
    {
      width: 70px;
      height: 30px;
    }

    .linkhome {
      position:relative;
      display:block;
      width: 70px;
      height: 30px;
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media only screen and (min-width: 801px) {
    .navContainershow {
      width: 60vw;
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, 0);
      display: grid;
      align-items: center;
      margin-left: 20vw;
      grid-template-columns: 1fr 4.2fr 1fr;
      position: fixed;
      z-index: 1;
      transition: top 0.2s ease-in-out;
      visibility: visible;
      opacity: 10;
    }
    .navContainerhidden {
      width: 60vw;
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, 0);
      display: grid;
      align-items: center;
      margin-left: 20vw;
      grid-template-columns: 1fr 4.2fr 1fr;
      position: fixed;
      z-index: 1;
      transition: top 0.2s ease-in-out;
      visibility: hidden;
    }
    .navBar {
      display: flex;
      justify-content: center;

      z-index: 3;
      width: 33vw;
      -webkit-animation-name: flash;
      animation-name: flash;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }
    .navBar > button {
      padding-left: 1vw;
      font-weight: bold;
    }
    .navBar button {
      height: 4vw;
      display: flex;
      align-items: center;
      min-width: 3vw;
      font-weight: bold;
      font-size: 0.9vw;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }

    .toolBar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      -webkit-animation-name: flash;
      animation-name: flash;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }

    @keyframes flash {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: 0;
      }
    }
    .toolBar button {
      font-weight: bold;
      font-size: 1vw;
      margin-right: 1vw;
    }

    .imgdiv {
      z-index: 1;
    }

    .navContainer::-webkit-scrollbar-track-piece {
      position: fixed;
    }

    .headerbtn {
      border: none;
      outline: none;
    }

    .linkhome {
      width: 3vw;
      height: 4vw;
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
function Header() {
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
    <Nav>
      <main id="navContainer" className={show ? 'navContainershow' : 'navContainerhidden'}>
        <article>
          <Link href="/" className="linkhome">
            <Image alt="nothing" className="imgs" src="/mainlogo.jpg" width={116} height={36} />
          </Link>
        </article>
        <article id="navBar" className="navBar">
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
        </article>
        {/* F6F6F6 */}
        <article id="toolBar" className="toolBar">
          <button className="headerbtn">
            <IoIosSearch className="icons" size={30} style={iconstyle} />
          </button>
          <Link href="/users/usermenu">
            <button className="headerbtn">
              <IoMdPerson className="icons" size={30} style={iconstyle} />
            </button>
          </Link>
        </article>
      </main>
    </Nav>
  );
}

export default Header;
