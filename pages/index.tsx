/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next';
import styles from './index.module.css';
import Header from '../components/Header';
import Image from 'next/image';
import Drop from '../components/Drop';
import GridPhoto from 'components/GridPhoto';
import Carouselnomal from 'components/Carouselnomal';
import CarouselGrid from 'components/CarouselGrid';
import SetLanguage from 'components/SetLanguage';
const Home: NextPage = () => {
  return (
    <div>
      <SetLanguage />
      <Header />
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
          <Image alt="indexKeybored" src="/keybored.jpg" width={800} height={730} />
        </div>
      </div>
      <GridPhoto />
      <CarouselGrid />
      <Carouselnomal />
    </div>
  );
};

export default Home;
