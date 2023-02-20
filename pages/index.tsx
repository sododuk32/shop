/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import styles from './index.module.css';
import Header from '../components/commons/Headers/Header';
import Image from 'next/image';
import GridPhoto from '../components/commons/GridPhoto';
import Carouselnomal from '../components/commons/Carouselnomal';
import CarouselGrid from '../components/commons/CarouselGrid';
import SetLanguage from '../components/commons/Headers/SetLanguage';
import { Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
const Home: NextPage = () => {
  const Main = styled.main`
    @media only screen and (min-width: 801px) {
      .bannerImgs {
        display: grid;
        grid-template-columns: 0.75fr 1fr;
        height: 42vw;
        top: 3.3vw;
        left: -6vw;
        z-index: 1;
        width: 110vw;
      }
      .colorPannel {
        background-color: #836aa4;
      }
      .bannerKeyboard {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
      }
      @-webkit-keyframes fadeInRight {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      @keyframes fadeInRight {
        0% {
          opacity: 0;
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }
        100% {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }
      .spanContainer {
        display: table;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 22vw;
        top: 14rem;
        width: 25rem;
        height: auto;
      }
      .panneldiv1 {
        font-size: 4.5vw;
        font-weight: 900;
        color: white;
        margin-left: 3.5vw;
      }
      .panneldiv2 {
        font-size: 4.5vw;
        font-weight: 900;
        color: yellow;
        top: 3px;
        margin-left: 1vw;
      }
      .panneldivsmall {
        font-size: 1vw;
        font-weight: 400;
        color: white;
        margin-left: 2.5vw;
        margin-bottom: 1vw;
      }

      .btnBox {
        display: flex;
        flex-direction: column;
        margin-left: 3vw;
      }
      .overBtn {
        display: flex;
        align-items: center;
        width: 10vw;
        height: 3.75vw;
        display: inline-block;

        font-weight: bold;
        font-size: 0.95vw;
        z-index: 10;
        text-align: center;
        margin-left: 3vw;
      }
      .underBtn {
        display: flex;
        align-items: center;
        width: 12vw;
        height: 3.75vw;
        display: block;
        margin-top: 0.7vw;

        font-weight: bold;
        font-size: 0.95vw;
        z-index: 10;
        text-align: center;
        margin-left: 2vw;
      }
      .underBtn:hover {
        background-color: #836aa4;
      }

      .overBtn:hover {
        background-color: #836aa4;
      }
    }
    @media only screen and (max-width: 800px) {
      .bannerImgs {
        display: flex;
        flex-direction: column;
        top: 3.3vw;
        left: -6vw;
        z-index: 1;
        position: relative;
      }
      .colorPannel {
        background-color: #836aa4;
        z-index: 1;
        width: 100%;
        height: 40vh;
      }
      .bannerKeyboard {
        position: relative;
        width: 100%;
        height: 40vh;
        animation: fadein 0.4s;
        -moz-animation: fadein 0.4s; /* Firefox */
        -webkit-animation: fadein 0.4s; /* Safari and Chrome */
        -o-animation: fadein 0.4s; /* Opera */
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .bannerKeyboard > img {
        position: relative;
        z-index: 1;
      }
      .spanContainer {
        display: table;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 35vw;
        top: 8vh;
        width: 25rem;
        height: auto;
      }
      .panneldiv1 {
        font-size: 4.5vw;
        font-weight: 900;
        color: white;
        margin-left: 7vw;
      }
      .panneldiv2 {
        font-size: 4.5vw;
        font-weight: 900;
        color: yellow;
        top: 3px;
        margin-left: 5vw;
      }
      .panneldivsmall {
        font-size: 1vw;
        font-weight: 400;
        color: white;
        margin-left: -3vw;
      }

      .btnBox {
        display: flex;
        flex-direction: column;
        font-size: 0.1vw;
        margin-top: 2vw;
      }
      .overBtn {
        display: flex;
        align-items: center;
        width: 20vw;
        height: 5vh;
        display: inline-block;

        font-weight: bold;
        z-index: 2;
        text-align: center;
        margin-left: 3vw;
      }
      .underBtn {
        display: flex;
        align-items: center;
        width: 28vw;
        height: 5vh;
        display: block;
        margin-top: 1vw;
        font-weight: bold;
        z-index: 2;
        text-align: center;
        margin-right: 3vw;
      }
      .underBtn:hover {
        background-color: #836aa4;
      }

      .overBtn:hover {
        background-color: #836aa4;
      }
    }
  `;
  return (
    <div>
      <header>
        <SetLanguage />
        <Header />
        <script src="https://apis.google.com/js/platform.js" async defer />
        <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com" />
      </header>
      <Main className="banners">
        <div className="bannerImgs">
          <section className="colorPannel">
            <article className="spanContainer">
              <div className="panneldiv1">나만의</div>
              <div className="panneldiv2">컬러 찾기</div>
              <div className="panneldivsmall">K380 키보드 및 Pebble 마우스</div>
              <div className="btnBox">
                <button className="overBtn">K380 키보드</button>
                <button className="underBtn">PEBBLE 알아보기</button>
              </div>
            </article>
          </section>
          <section className="bannerKeyboard">
            <Image alt="indexKeybored" src="/keybored.jpg" quality={60} width={1500} height={1000} layout="responsive" />
          </section>
        </div>
      </Main>
      <GridPhoto />
      <CarouselGrid />
    </div>
  );
};

export default Home;
