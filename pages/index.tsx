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
// https://nextjs.org/docs/api-reference/next/script
const Home: NextPage = () => {
  return (
    <div>
      <header>
        <SetLanguage />
        <Header />
        <script src="https://apis.google.com/js/platform.js" async defer />
        <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com" />
      </header>
      <section>
        <div id="banners">
          <div id="bannerImgs" className={styles.bannerImgs}>
            <div className={styles.colorPannel}>
              <div className={styles.spanContainer}>
                <div className={styles.panneldiv1}>나만의</div>
                <div className={styles.panneldiv2}>컬러 찾기</div>
                <div className={styles.panneldivsmall}>K380 키보드 및 Pebble 마우스</div>
                <div className={styles.btnBox}>
                  <button className={styles.overBtn}>K380 키보드</button>
                  <button className={styles.underBtn}>PEBBLE 알아보기</button>
                </div>
              </div>
            </div>
            <div className={styles.bannerKeyboard}>
              <Image
                className={styles.bannerKeyboard}
                alt="indexKeybored"
                src="/keybored.jpg"
                fill
                quality={100}
                sizes="(min-width: 768px) 100vw,
              (min-width: 1200px) 100vw,
              100vw,(min-height: 768px) 10vw,
              (min-height: 1200px) 100vw,
              100vw"
              />
            </div>
          </div>
        </div>
        <Suspense fallback={<Spinner animation="border" variant="light" />}>
          <GridPhoto />
        </Suspense>
        <CarouselGrid />
        {/* <Carouselnomal /> */}
      </section>
    </div>
  );
};

export default Home;
