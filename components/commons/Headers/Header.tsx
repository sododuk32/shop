/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPerson, IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';
const Nav = styled.div`
  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 10vw;
    .icons {
      width: 4vw;
      height: 4vw;
    }
    #searchbtn2 {
      display: none;
    }
    #navContainer {
      background-color: #836aa4;
    }
    .navContainershow {
      align-items: center;
      position: fixed;
      z-index: 10;
      transition: top 0.2s ease-in-out;
      visibility: visible;
      opacity: 10;
      display: flex;
      flex-direction: column;
      justify-contents: space-around;
      margin-top: 4.2vw;
      width: 100%;
    }
    .navContainerhidden {
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, 0);

      margin-left: 20vw;
      position: fixed;
      z-index: 1;
      transition: top 0.2s ease-in-out;
      visibility: hidden;
    }
    .navBar {
      flex-direction:column;
      justify-content: center;
      align-items: center;
      display: none;
      z-index: 3;
      width: 33vw;
    
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
      display: none;
    }
    .toolBar2
    {
      display:none;
    }
    .mobileToolbar2 {
      display: flex;
      flex-direction: column;
      text-decoration: underline;
      align-items: center
      width: 100%;
    }
    .mobiletoolbar2 button: {
      width: 100%;
      height: 4vw;
      display: flex;
      align-items: center;
      min-width: 3vw;
      font-weight: bold;
      font-size: 3px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
    .mobilebtn: {
      width: 100%;
      height: 4vw;
      display: flex;
      align-items: center;
      min-width: 3vw;
      font-weight: bold;
      font-size: 3px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
    .myinfo {
      width: 100%;
      height: 4vw;
      display: flex;
      align-items: center;
      min-width: 3vw;
      font-weight: bold;
      font-size: 3px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
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
      outline: none;
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
    .imgs {
      width: 70px;
      height: 30px;
      padding-bottom: 1vh;
    }

    .linkhome {
      position: relative;
      display: none;
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
    .navbar_mobile {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: fixed;
      z-index: 20;
      transition: top 0.2s ease-in-out;
      visibility: visible;
      top: 0;
      background-color: white;
      align-items: flex-end;
      display: in-line;
    }
    .no_mobile {
      display: none;
    }
    .navbar-btn {
      position: relative;
      width: 9vw;
      height: 9vw;
      border-color: white;
      border-radius: 1vw;
    }
    .linklogo {
    }
    .searchBtn {
      margin-top: 3vw;
      border-color: white;
      background-color: white;
    }
  }
  @media only screen and (min-width: 801px) {
    .navbar_mobile {
      display: none;
    }
    .toolBar2 {
      display: none;
    }
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
      font-size: 1.4vw;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
    a {
      text-decoration-line: none;
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
  const [nshow, setnShow] = useState(true);

  const [open, isopen] = useState(false);
  const navCon = useRef<HTMLElement | null>(null);
  const toolbar = useRef<HTMLElement | null>(null);
  const toolbar2 = useRef<HTMLElement | null>(null);

  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      if (open && navCon != null && window.innerWidth < 801) {
        navCon.current!.style.display = 'flex';
        console.log('var is block');
      }
      if (!open && navCon != null && window.innerWidth < 801) {
        navCon.current!.style.display = 'none';
        toolbar.current!.style.display = 'none';
        console.log('var is none');
        console.log(toolbar.current!.style.display);
      }
      console.log(open);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, open]);

  const controlNavbar = () => {
    console.log(window.scrollY);
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      if (window.scrollY > lastScrollY && window.innerWidth < 801) {
        console.log('scroll is going up');
        console.log('this is nshow' + nshow);
        setnShow(false);
      } else {
        console.log('scroll is going down');
        console.log('this is nshow' + nshow);
        setnShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  function navBtn() {
    return isopen(!open);
  }
  const iconstyle = { backgroundColor: 'F6F6F6' };
  return (
    <Nav>
      <div className={!nshow && window.innerWidth < 801 ? 'no_mobile' : 'navbar_mobile'}>
        <button className="navbar-btn" onClick={navBtn}>
          <Image src={'/hamburger-menu.svg'} alt="hambug" fill />
        </button>
        <Link href="/" className="linklogo">
          <Image alt="nothing" className="imgs" src="/mainlogo.jpg" width={130} height={36} />
        </Link>
        <Link href="/users/usermenu">
          <button className="searchBtn">
            <IoIosSearch className="icons" size={30} style={iconstyle} />
          </button>
        </Link>
      </div>

      <main id="navContainer" className={show ? 'navContainershow' : 'navContainerhidden'}>
        <article>
          <Link href="/" className="linkhome">
            <Image alt="nothing" className="imgs" src="/mainlogo.jpg" width={116} height={36} />
          </Link>
        </article>
        <article id="navBar" ref={navCon} className="navBar">
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
        <article id="toolBar" ref={toolbar} className={window.innerWidth > 801 ? 'toolBar' : 'mobileToolbar'}>
          <button id="searchbtn2" className="headerbtn">
            <IoIosSearch className="icons" size={30} style={iconstyle} />
          </button>
          <Link href="/users/usermenu">
            <button className="headerbtn">
              <IoMdPerson id="personbtn2" className="icons" size={30} style={iconstyle}>
                내 정보
              </IoMdPerson>
            </button>
          </Link>
        </article>
        <article ref={toolbar2} className={open && window.innerWidth < 801 ? 'mobileToolbar2' : 'toolBar2'}>
          <Link className="mobileBtn" href="/users/usermenu">
            <button className="myinfo">내 정보</button>
          </Link>
        </article>
      </main>
    </Nav>
  );
}
export default Header;
