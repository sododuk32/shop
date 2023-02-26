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
    width:100%;
    height:10vw;
    .icons
    {
      width:4vw;
      height:4vw;
    }
    #searchbtn2
    {
      display:none;
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
     
      margin-left: 20vw;
      position: fixed;
      z-index: 1;
      transition: top 0.2s ease-in-out;
      visibility: hidden;
    }
    .navBar {
      display: flex;
      justify-content: center;
      display:none;
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
      outline: none
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
      outline: none
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
      padding-bottom:1vh;
    }

    .linkhome {
      position:relative;
      display:none;
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
    .navbar_mobile
    {
      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:space-between;  
      position: fixed;
      z-index: 20;
      transition: top 0.2s ease-in-out;
      visibility: visible;
      top:0;
      background-color:white;
      align-items: flex-end;
    }
    .no_mobile
    {
      display:none;

    }
    .navbar-btn {
    position: relative;
     width:9vw;
     height:9vw;
     border-color:white;
     border-radius:1vw;
    }
    .linklogo
    {
    }
    .searchBtn
    {
      margin-top:3vw;
      border-color:white;
      background-color:white;

    }
  }
  @media only screen and (min-width: 801px) {
  
    .navbar_mobile
    {
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
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0);
      border: none;

    }
    a{      
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

  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      if (open && navCon != null && window.innerWidth < 801) {
        navCon.current!.style.display = 'block';
        toolbar.current!.style.display = 'block';
        console.log('sadfsdaf');
      }
      if (!open && navCon != null && window.innerWidth < 801) {
        navCon.current!.style.display = 'none';
        toolbar.current!.style.display = 'none';
      }
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, open]);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      if (window.scrollY > lastScrollY && window.innerWidth < 801) {
        setnShow(false);
      } else {
        setnShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  function navBtn() {
    isopen(!open);
    return console.log(open);
  }
  const iconstyle = { backgroundColor: 'F6F6F6' };
  return (
    <Nav>
      <div className={nshow && window.innerWidth < 801 ? 'navbar_mobile' : 'no_mobile'}>
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
        <article id="toolBar" ref={toolbar} className="toolBar">
          <button className="headerbtn">
            <IoIosSearch id="searchbtn2" className="icons" size={30} style={iconstyle} />
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
